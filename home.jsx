/* eslint-disable no-undef */
/* Home page — hero + selected works (3) + skills (with upward float) + contact */

const { useState: useStateH, useEffect: useEffectH, useRef: useRefH } = React;

function HomePage({ go }) {
  const [open, setOpen] = useStateH(null);
  const techRef = useRefH(null);
  const viewAllRef = useRefH(null);

  // re-triggerable reveal observer — adds .in on enter, removes on leave
  useEffectH(() => {
    const sel = ".reveal, .reveal-left, .reveal-pop, .flip-reveal, .flip-reveal-alt, .flip-reveal-x, .stagger-flip";
    const els = document.querySelectorAll(sel);
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("in");
        else e.target.classList.remove("in");
      });
    }, { threshold: 0.1 });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);

  // scroll-darken: fill the "View all projects" button when it scrolls into view
  useEffectH(() => {
    const btn = viewAllRef.current;
    if (!btn) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) btn.classList.add("scrolled-in");
        else btn.classList.remove("scrolled-in");
      });
    }, { threshold: 0.5 });
    io.observe(btn);
    return () => io.disconnect();
  }, []);

  return (
    <main className="bg-paper text-ink">

      {/* ───────────── HERO ───────────── */}
      <section id="sec-hero" className="stack-section pt-32 pb-24 md:pt-40 md:pb-32 relative" style={{ zIndex: 10, backgroundColor: '#f4f1eb' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-6 md:gap-10 items-start">
            {/* left: status + name */}
            <div className="col-span-12 lg:col-span-8 reveal">
              <div className="flex items-center gap-3 mb-8">
                <span className="relative inline-flex w-2 h-2">
                  <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-70" />
                  <span className="relative inline-block w-2 h-2 rounded-full bg-emerald-600" />
                </span>
                <span className="eyebrow opacity-70">Available · {PROFILE.mode}</span>
                <span className="opacity-25">—</span>
                <span className="eyebrow opacity-50">Index · 2018 → 2026</span>
              </div>

              {/* Greeting with typewriter — "Hey, I'm [name]," like the reference */}
              <div className="flex items-baseline gap-3 mb-3">
                <span className="serif-it text-3xl md:text-4xl text-ink/80">Hey,</span>
                <span className="mono text-[11px] uppercase tracking-[0.22em] opacity-55">a quick hello</span>
              </div>

              <h1 className="display text-[9vw] md:text-[6vw] lg:text-[5vw] leading-[0.9] tracking-[-0.04em]">
                I&rsquo;m <span className="text-brick"><Typewriter words={["Uduak Afang"]} typeMs={75} /></span>
                <span className="text-brick">,</span>
                <br />
                a <Typewriter
                    words={["BI Analyst", "Tableau geek", "Data designer", "SQL plumber", "Storyteller"]}
                    typeMs={55}
                    holdMs={1400}
                    deleteMs={32}
                  />
                <span className="text-brick">.</span>
              </h1>

              <p className="mt-6 text-[15px] mono uppercase tracking-[0.22em] text-ink/55">
                {PROFILE.location} &nbsp;·&nbsp; {PROFILE.tz} &nbsp;·&nbsp; {PROFILE.mode}
              </p>

              <p className="mt-8 text-lg md:text-xl leading-relaxed max-w-2xl text-ink/75">
                {PROFILE.blurb}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => go("works")}
                  className="px-6 py-3 rounded-full bg-ink text-paper hover:bg-brick transition-colors flex items-center gap-2 mono text-[11px] uppercase tracking-[0.22em]"
                >
                  See selected works <ArrowUR size={13} />
                </button>
                <button
                  onClick={() => go("playbook")}
                  className="px-6 py-3 rounded-full border border-ink/20 hover:border-ink mono text-[11px] uppercase tracking-[0.22em]"
                >
                  My playbook
                </button>
                <button
                  onClick={() => go("resume")}
                  className="px-6 py-3 rounded-full border border-ink/20 hover:border-ink mono text-[11px] uppercase tracking-[0.22em]"
                >
                  Résumé
                </button>
              </div>
            </div>

            {/* right: portrait */}
            <div className="col-span-12 lg:col-span-4">
              <div className="relative profile-flip">
                <div className="absolute -top-3 -left-3 right-3 bottom-3 rounded-[36px] bg-brick/15" />
                <div
                  className="relative rounded-[32px] overflow-hidden bg-paper2 aspect-[4/5]"
                  style={{
                    backgroundImage: "url(images/profile.jpg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <img
                    src="images/profile.jpg"
                    alt="Uduak Afang"
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover"
                    style={{ display: "block" }}
                  />
                </div>
                <div className="absolute -bottom-4 left-4 right-4 bg-ink text-paper rounded-2xl p-4 flex items-center justify-between">
                  <div className="mono text-[10px] uppercase tracking-widest opacity-70">Index card</div>
                  <div className="text-right">
                    <div className="display text-xl leading-none">Lagos · 2026</div>
                    <div className="mono text-[9px] opacity-60 uppercase tracking-widest">U.AFANG · BI ANALYST</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* metric strip — numbers count up when visible */}
          <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/15 rounded-3xl overflow-hidden">
            {[
              { n: 3,   suffix: "+",  k: "Years",     s: "BI experience" },
              { n: 2,   suffix: "×",  k: "Tableau",   s: "Viz of the Day" },
              { n: 4,   suffix: "×",  k: "Vizzies",   s: "Awards nominee" },
              { n: 8,   suffix: "+",  k: "Shipped",    s: "End-to-end builds" },
            ].map((s, i) => (
              <div key={i} className="bg-paper p-6 flex items-center gap-4">
                <div className="display text-5xl leading-none">
                  <CountUp to={s.n} suffix={s.suffix} delay={i * 150} />
                </div>
                <div className="leading-tight">
                  <div className="font-semibold">{s.k}</div>
                  <div className="mono text-[10px] uppercase tracking-widest opacity-55">{s.s}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────── SELECTED WORKS (only three) ───────────── */}
      <section id="sec-works" className="stack-section stack-cuff py-24 md:py-32 relative" style={{ zIndex: 20, backgroundColor: '#f4f1eb' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-12 reveal">
            <div>
              <div className="pagenum opacity-50 mb-3">§ 02 · Selected Works</div>
              <h2 className="display text-6xl md:text-8xl">
                <ScrollFillText fill="#1a1a1a" stroke="#1a1a1a">SELECTED</ScrollFillText>{" "}
                <ScrollFillText fill="#C7522A" stroke="#C7522A" className="serif-it lowercase" style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.01em', textTransform: 'lowercase' }}>works</ScrollFillText><span className="text-brick">.</span>
              </h2>
              <p className="mt-4 text-ink/65 max-w-md">
                Three projects, picked because the work behind them was the most honest.
                The rest live in the archive.
              </p>
            </div>
            <button
              ref={viewAllRef}
              onClick={() => go("works")}
              className="hidden md:inline-flex items-center gap-3 px-5 py-3 rounded-full border border-ink/20 scroll-darken hover:bg-ink hover:text-paper mono text-[11px] uppercase tracking-[0.22em]"
            >
              View all projects <ArrowUR size={13} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SELECTED_WORKS.map((w, i) => (
              <div key={w.id} className="reveal-pop" style={{ transitionDelay: (i * 180) + "ms" }}><SelectedWorkCard work={w} onOpen={setOpen} /></div>
            ))}
          </div>

          <div className="md:hidden mt-10 text-center">
            <button onClick={() => go("works")} className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-ink/20 mono text-[11px] uppercase tracking-[0.22em]">
              View all projects <ArrowUR size={13} />
            </button>
          </div>
        </div>
      </section>

      {/* ───────────── HOW I CAN HELP YOU ───────────── */}
      <HelpSection />

      {/* ───────────── PLAYBOOK TEASER ───────────── */}
      <section id="sec-playbook" className="stack-section stack-cuff text-paper py-24 md:py-32" style={{ zIndex: 40, backgroundColor: '#1a1a1a' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-7 reveal">
              <div className="pagenum opacity-50 mb-3">§ 03 · The Playbook</div>
              <h2 className="display text-6xl md:text-7xl">
                <ScrollFillText fill="#f4f1eb" stroke="#f4f1eb">How data looks</ScrollFillText><br/>
                <ScrollFillText fill="#C7522A" stroke="#C7522A" className="serif-it lowercase" style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.01em', textTransform: 'lowercase' }}>is how data speaks.</ScrollFillText>
              </h2>
              <p className="mt-3 mono text-[11px] uppercase tracking-[0.22em] text-paper/45">
                Or as I like to say — the food can be sweet, but if the plating is ugly, nobody eats.
              </p>
              <p className="mt-6 text-paper/70 text-lg max-w-2xl">
                I take dashboard design as seriously as the SQL behind it. After every data
                exploration, I sketch <strong className="text-paper">4-5 mockups in Figma</strong>,
                test the user flow, and only build the one that makes sense on a Monday morning.
                The numbers have to be right — but if they don't <strong className="text-brick">look</strong> right,
                nobody trusts them.
              </p>
              <button
                onClick={() => go("playbook")}
                className="mt-8 inline-flex items-center gap-3 px-6 py-3 rounded-full bg-brick text-paper hover:bg-brick2 transition-colors mono text-[11px] uppercase tracking-[0.22em]"
              >
                Read the playbook <ArrowUR size={13} />
              </button>
            </div>
            <div className="col-span-12 lg:col-span-5 flip-reveal">
              <div className="bg-paper/5 border border-paper/10 rounded-3xl p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="num-dot border-paper/30 text-paper">★</div>
                  <div className="mono text-[10px] uppercase tracking-widest opacity-55">On craft</div>
                </div>
                <p className="text-2xl md:text-3xl leading-snug font-medium">
                  "Your audience should never have to work hard
                  to understand your visual."
                </p>
                <div className="mt-6 flex items-center gap-3 text-paper/70">
                  <div className="w-9 h-9 rounded-full bg-paper/10 text-paper flex items-center justify-center font-bold text-sm">CNK</div>
                  <div className="mono text-[11px] uppercase tracking-widest">— Cole Nussbaumer Knaflic</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── SKILLS + TECH STACK ─────────────
          Wrapped in a single section that lifts upward as the next one enters */}
      <section id="sec-skills" className="stack-section stack-cuff py-24 md:py-32 relative" style={{ zIndex: 50, backgroundColor: '#f4f1eb' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">

          {/* Skills */}
          <div className="grid grid-cols-12 gap-10 mb-24 reveal">
            <div className="col-span-12 lg:col-span-4">
              <div className="pagenum opacity-50 mb-3">§ 04.1 · Skills</div>
              <h2 className="display text-5xl md:text-6xl">
                <ScrollFillText fill="#1a1a1a" stroke="#1a1a1a">Self-assessed</ScrollFillText><br/><ScrollFillText fill="#C7522A" stroke="#C7522A" className="serif-it lowercase" style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.01em', textTransform: 'lowercase' }}>depth</ScrollFillText>
              </h2>
              <p className="mt-4 text-ink/65 max-w-xs">
                Ordered by what I reach for most. Numbers are honest, not aspirational.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-3">
              {SKILLS.map((s, i) => (
                <SkillRow key={s.name} skill={s} index={i} />
              ))}
            </div>
          </div>

          {/* Tech stack */}
          <div ref={techRef} className="grid grid-cols-12 gap-10 reveal pt-16 dash-div">
            <div className="col-span-12 lg:col-span-4">
              <div className="pagenum opacity-50 mb-3">§ 04.2 · Tech Stack</div>
              <h2 className="display text-5xl md:text-6xl">
                <ScrollFillText fill="#1a1a1a" stroke="#1a1a1a">Daily</ScrollFillText><br/><ScrollFillText fill="#C7522A" stroke="#C7522A" className="serif-it lowercase" style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.01em', textTransform: 'lowercase' }}>rotation</ScrollFillText>
              </h2>
              <p className="mt-4 text-ink/65 max-w-xs">
                Tools I use most weeks across BI, ETL, and the occasional full-stack build.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-3 stagger-flip">
              {TOOLS.map((t, i) => (
                <div key={t} className="card-lift flex items-center gap-3 px-4 py-3 rounded-2xl border border-ink/15 bg-white">
                  <div className="w-9 h-9 rounded-xl bg-ink text-paper flex items-center justify-center">
                    <ToolIcon name={t} size={18} />
                  </div>
                  <div className="flex-1 font-semibold text-sm">{t}</div>
                  <span className="mono text-[10px] opacity-50">{String(i + 1).padStart(2, "0")}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ───────────── OFF THE CLOCK (about widgets) ───────────── */}
      <AboutWidgets />

      {/* ───────────── CONTACT ───────────── */}
      <section id="sec-contact" className="stack-section stack-cuff text-paper py-28" style={{ zIndex: 70, backgroundColor: '#1a1a1a' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center">
          <div className="pagenum opacity-50 mb-3">§ 06 · Contact</div>
          <h2 className="display text-6xl md:text-8xl">
            <ScrollFillText fill="#f4f1eb" stroke="#f4f1eb">LET&rsquo;S</ScrollFillText>{" "}
            <ScrollFillText fill="#C7522A" stroke="#C7522A" className="serif-it lowercase" style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.01em', textTransform: 'lowercase' }}>talk</ScrollFillText><span className="text-brick">.</span>
          </h2>
          <a href={`mailto:${PROFILE.email}`} className="ul-link mt-8 inline-block display text-4xl md:text-5xl text-brick">
            {PROFILE.email}
          </a>
          <div className="mt-8 mono text-[11px] uppercase tracking-widest opacity-65">
            {PROFILE.location} &nbsp;·&nbsp; {PROFILE.tz} &nbsp;·&nbsp; {PROFILE.mode}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {[
              { label: "LinkedIn", href: PROFILE.linkedin },
              { label: "GitHub",   href: PROFILE.github   },
              { label: "Tableau Public", href: PROFILE.tableau },
            ].map((x) => (
              <a key={x.label} href={x.href} target="_blank" rel="noopener noreferrer"
                 className="px-5 py-2.5 rounded-full border border-paper/30 hover:border-brick hover:text-brick mono text-[11px] uppercase tracking-[0.22em] transition-colors">
                {x.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {open && <CaseModal work={open} onClose={() => setOpen(null)} />}
    </main>
  );
}

/* ── Animated counter — counts from 0 to `to` when visible ────────────── */
function CountUp({ to, suffix = "", delay = 0 }) {
  const ref = useRefH(null);
  const [val, setVal] = React.useState(0);
  const [started, setStarted] = React.useState(false);

  useEffectH(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting && !started) setStarted(true); });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [started]);

  useEffectH(() => {
    if (!started) return;
    const duration = 1200;
    const start = performance.now() + delay;
    let raf;
    const tick = (now) => {
      const elapsed = Math.max(0, now - start);
      const t = Math.min(1, elapsed / duration);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setVal(Math.round(eased * to));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, to, delay]);

  return <span ref={ref}>{val}{suffix}</span>;
}

/* ── Skill row that fills on scroll ───────────────────────────────────── */
function SkillRow({ skill, index }) {
  const ref = useRefH(null);
  const fillRef = useRefH(null);
  useEffectH(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting && fillRef.current) {
          fillRef.current.style.transition = `width 1.2s cubic-bezier(.2,.6,.2,1) ${index * 0.06}s`;
          fillRef.current.style.width = skill.pct + "%";
        }
      });
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, [skill.pct, index]);
  return (
    <div ref={ref} className="reveal">
      <div className="flex items-baseline justify-between mb-1.5 px-1">
        <span className="mono text-[10px] uppercase tracking-widest opacity-55">{skill.note}</span>
        <span className="mono text-[10px] uppercase tracking-widest opacity-55">{String(index + 1).padStart(2, "0")}</span>
      </div>
      <div className="skill-track h-[58px]">
        {/* background row */}
        <div className="absolute inset-0 flex items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-ink/10 flex items-center justify-center mono text-[10px]">{skill.name[0]}</div>
            <span className="display text-2xl">{skill.name}</span>
          </div>
          <span className="mono text-base text-brick font-semibold">{skill.pct}%</span>
        </div>
        {/* filled overlay (clipped) */}
        <div ref={fillRef} className="skill-fill" style={{ width: 0 }}>
          <div className="absolute inset-0 flex items-center justify-between px-6 text-paper" style={{ width: "200%" }}>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-paper/15 flex items-center justify-center mono text-[10px]">{skill.name[0]}</div>
              <span className="display text-2xl">{skill.name}</span>
            </div>
            <span className="mono text-base font-semibold">{skill.pct}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

window.HomePage = HomePage;
