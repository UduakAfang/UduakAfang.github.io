/* eslint-disable no-undef */
/* App shell — nav + footer + state-based routing */

const { useState: useStateA, useEffect: useEffectA } = React;

function Nav({ page, go }) {
  const [stuck, setStuck] = useStateA(false);
  const [menuOpen, setMenuOpen] = useStateA(false);

  useEffectA(() => {
    const onScroll = () => setStuck(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on page change
  useEffectA(() => { setMenuOpen(false); }, [page]);

  const items = [
    { id: "home",     label: "Home"     },
    { id: "works",    label: "Works"    },
    { id: "playbook", label: "Playbook" },
    { id: "resume",   label: "Résumé"   },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-[100] flex flex-col items-center px-4">
      <nav
        className={
          "w-full max-w-3xl rounded-full flex items-center justify-between px-2 py-2 transition-all duration-300 " +
          (stuck
            ? "bg-paper/85 stuck border border-ink/10 shadow-[0_8px_30px_-15px_rgba(26,26,26,0.25)]"
            : "bg-paper border border-ink/10")
        }
      >
        <button onClick={() => go("home")} className="flex items-center gap-2 px-3 py-1.5">
          <div className="w-7 h-7 rounded-lg bg-ink text-paper flex items-center justify-center font-display text-base font-black">U</div>
          <span className="font-bold tracking-tight">Uduak<span className="text-brick">.</span></span>
        </button>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 p-1 bg-ink/5 rounded-full">
          {items.map(it => (
            <button
              key={it.id}
              onClick={() => go(it.id)}
              className={
                "px-4 py-1.5 mono text-[11px] uppercase tracking-[0.22em] rounded-full transition-colors " +
                (page === it.id ? "bg-ink text-paper" : "text-ink/70 hover:text-ink hover:bg-ink/5")
              }
            >
              {it.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${PROFILE.email}`}
            className="hidden sm:inline-flex px-4 py-2 rounded-full bg-brick text-paper hover:bg-brick2 transition-colors mono text-[11px] uppercase tracking-[0.22em] items-center gap-2"
          >
            Let's talk <ArrowUR size={11} />
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden w-9 h-9 rounded-full bg-ink/5 flex items-center justify-center"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
              {menuOpen
                ? <><line x1="4" y1="4" x2="14" y2="14" /><line x1="14" y1="4" x2="4" y2="14" /></>
                : <><line x1="3" y1="5" x2="15" y2="5" /><line x1="3" y1="9" x2="15" y2="9" /><line x1="3" y1="13" x2="15" y2="13" /></>
              }
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile dropdown menu */}
      <div
        className="md:hidden w-full max-w-3xl overflow-hidden transition-all duration-300 ease-out"
        style={{
          maxHeight: menuOpen ? 280 : 0,
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        <div className="mt-2 rounded-2xl bg-paper/95 backdrop-blur-md border border-ink/10 shadow-lg p-3 flex flex-col gap-1">
          {items.map(it => (
            <button
              key={it.id}
              onClick={() => { go(it.id); setMenuOpen(false); }}
              className={
                "w-full text-left px-4 py-3 rounded-xl mono text-[11px] uppercase tracking-[0.22em] transition-colors " +
                (page === it.id ? "bg-ink text-paper" : "text-ink/70 hover:bg-ink/5")
              }
            >
              {it.label}
            </button>
          ))}
          <a
            href={`mailto:${PROFILE.email}`}
            className="sm:hidden w-full text-center px-4 py-3 rounded-xl bg-brick text-paper mono text-[11px] uppercase tracking-[0.22em] mt-1"
          >
            Let's talk
          </a>
        </div>
      </div>
    </header>
  );
}

function Footer({ go }) {
  return (
    <footer className="bg-ink text-paper">
      {/* big name slab */}
      <div className="border-t border-paper/10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-10 grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-7">
            <div className="display text-[14vw] md:text-[10rem] leading-[0.82] tracking-[-0.04em] text-paper/95">
              Uduak <span className="serif-it lowercase text-brick">afang</span><span className="text-brick">.</span>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 space-y-6">
            <div>
              <div className="eyebrow opacity-55 mb-2">Index</div>
              <div className="grid grid-cols-2 gap-y-1">
                {["home","works","playbook","resume"].map(p => (
                  <button key={p} onClick={() => go(p)} className="text-left ul-link mono text-[11px] uppercase tracking-[0.22em]">
                    {p === "resume" ? "Résumé" : p[0].toUpperCase() + p.slice(1)}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="eyebrow opacity-55 mb-2">Elsewhere</div>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "LinkedIn", href: PROFILE.linkedin },
                  { label: "GitHub", href: PROFILE.github },
                  { label: "Tableau Public", href: PROFILE.tableau },
                  { label: "Email", href: `mailto:${PROFILE.email}` },
                ].map(x => (
                  <a key={x.label} href={x.href} target="_blank" rel="noopener noreferrer"
                     className="px-3 py-1.5 rounded-full border border-paper/20 hover:border-brick hover:text-brick mono text-[10px] uppercase tracking-widest transition-colors">
                    {x.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-5 flex flex-wrap items-center justify-between gap-3 mono text-[10px] uppercase tracking-widest text-paper/60">
          <span>© {new Date().getFullYear()} · Uduak Afang · BI Analyst</span>
          <span>{PROFILE.location} · {PROFILE.tz} · {PROFILE.mode}</span>
          <span>v2.0 · Hand-built</span>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────── Page transition wrapper ───────────────── */
function PageTransition({ pageKey, children }) {
  const ref = React.useRef(null);
  useEffectA(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    // force reflow then animate in
    void el.offsetHeight;
    el.style.transition = "opacity 0.5s cubic-bezier(0.2,0.6,0.2,1), transform 0.5s cubic-bezier(0.2,0.6,0.2,1)";
    el.style.opacity = "1";
    el.style.transform = "translateY(0)";
  }, [pageKey]);
  return <div ref={ref}>{children}</div>;
}

/* ───────────────── Interstitial transition screen ───────────────── */
const INTERSTITIAL_MESSAGES = {
  works:    "Welcome to the archive. Every dashboard, pipeline, and app I've shipped.",
  playbook: "Welcome to the playbook. How I think about data, design, and delivery.",
  resume:   "Welcome to my resume. The short version of the long story.",
};

const INTERSTITIAL_TITLES = {
  works:    "Works",
  playbook: "Playbook",
  resume:   "Résumé",
};

function Interstitial({ page, onDone }) {
  const [phase, setPhase] = useStateA("in"); // in | visible | out
  const ref = React.useRef(null);

  useEffectA(() => {
    // fade in
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    void el.offsetHeight;
    el.style.transition = "opacity 0.4s ease";
    el.style.opacity = "1";
    setPhase("visible");

    // after 3s, fade out and finish
    const fadeOutTimer = setTimeout(() => {
      setPhase("out");
      el.style.transition = "opacity 0.4s ease";
      el.style.opacity = "0";
    }, 3000);

    const doneTimer = setTimeout(() => {
      onDone();
    }, 3400);

    return () => { clearTimeout(fadeOutTimer); clearTimeout(doneTimer); };
  }, []);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[150] bg-ink text-paper flex flex-col items-center justify-center px-6 overflow-hidden"
      style={{ opacity: 0 }}
    >
      {/* Page-specific decorative illustrations */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="xMidYMid slice">
        {/* Shared: subtle grid dots */}
        {[...Array(12)].map((_, i) =>
          [...Array(8)].map((_, j) => (
            <circle key={`d${i}-${j}`} cx={100 * i + 50} cy={100 * j + 50} r="1" fill="rgba(244,241,235,0.04)" />
          ))
        )}

        {page === "works" && <>
          {/* WORKS: Dashboard/chart motifs — bar charts, scatter, data grids */}
          {/* Bar chart cluster — bottom left */}
          <rect x="60"  y="580" width="24" height="100" rx="4" fill="#C7522A" opacity="0.08" />
          <rect x="96"  y="540" width="24" height="140" rx="4" fill="#C7522A" opacity="0.1" />
          <rect x="132" y="600" width="24" height="80"  rx="4" fill="#C7522A" opacity="0.06" />
          <rect x="168" y="560" width="24" height="120" rx="4" fill="#C7522A" opacity="0.09" />
          <rect x="204" y="620" width="24" height="60"  rx="4" fill="#C7522A" opacity="0.07" />
          <rect x="240" y="510" width="24" height="170" rx="4" fill="#C7522A" opacity="0.05" />
          {/* Axis lines */}
          <line x1="50" y1="680" x2="280" y2="680" stroke="rgba(244,241,235,0.08)" strokeWidth="1" />
          <line x1="50" y1="500" x2="50"  y2="680" stroke="rgba(244,241,235,0.08)" strokeWidth="1" />
          {/* Pie/donut chart — top right */}
          <circle cx="1050" cy="180" r="70" stroke="#C7522A" strokeWidth="6" opacity="0.08" strokeDasharray="110 330" />
          <circle cx="1050" cy="180" r="70" stroke="rgba(244,241,235,0.06)" strokeWidth="6" strokeDasharray="200 240" strokeDashoffset="-110" />
          <circle cx="1050" cy="180" r="50" stroke="#C7522A" strokeWidth="4" opacity="0.05" strokeDasharray="80 234" />
          {/* Scatter dots — center right */}
          <circle cx="900" cy="350" r="4" fill="#C7522A" opacity="0.1" />
          <circle cx="940" cy="320" r="3" fill="#C7522A" opacity="0.08" />
          <circle cx="920" cy="380" r="5" fill="#C7522A" opacity="0.06" />
          <circle cx="970" cy="360" r="3" fill="rgba(244,241,235,0.08)" />
          <circle cx="950" cy="400" r="4" fill="#C7522A" opacity="0.07" />
          <circle cx="880" cy="310" r="2" fill="rgba(244,241,235,0.06)" />
          {/* Data grid lines — top left */}
          {[0,1,2,3,4].map(i => (
            <line key={`gl${i}`} x1="80" y1={100+i*30} x2="320" y2={100+i*30} stroke="rgba(244,241,235,0.04)" strokeWidth="1" />
          ))}
          {[0,1,2,3].map(i => (
            <line key={`gv${i}`} x1={80+i*80} y1="100" x2={80+i*80} y2="220" stroke="rgba(244,241,235,0.04)" strokeWidth="1" />
          ))}
          {/* Large concentric rings */}
          <circle cx="600" cy="400" r="260" stroke="rgba(244,241,235,0.03)" strokeWidth="1" />
          <circle cx="600" cy="400" r="300" stroke="#C7522A" strokeWidth="0.5" opacity="0.05" />
          {/* Trend line */}
          <path d="M300 450 C400 420, 500 380, 600 350 S800 300, 1000 280" stroke="#C7522A" strokeWidth="1" opacity="0.08" />
        </>}

        {page === "playbook" && <>
          {/* PLAYBOOK: Process/methodology — flow arrows, steps, pipeline */}
          {/* Flow pipeline — horizontal with nodes */}
          <line x1="100" y1="200" x2="1100" y2="200" stroke="rgba(244,241,235,0.05)" strokeWidth="1" />
          {[0,1,2,3,4,5].map(i => (
            <React.Fragment key={`node${i}`}>
              <circle cx={200+i*160} cy={200} r="12" stroke="#C7522A" strokeWidth="1.5" opacity={0.06 + i*0.015} fill="none" />
              <circle cx={200+i*160} cy={200} r="4" fill="#C7522A" opacity={0.06 + i*0.02} />
              {i < 5 && <path d={`M${218+i*160} 200 L${282+i*160} 200`} stroke="#C7522A" strokeWidth="0.8" opacity="0.06" markerEnd="" />}
              {i < 5 && <polygon points={`${280+i*160},196 ${288+i*160},200 ${280+i*160},204`} fill="#C7522A" opacity="0.06" />}
            </React.Fragment>
          ))}
          {/* Funnel shape — bottom left */}
          <path d="M80 550 L220 550 L180 680 L120 680 Z" stroke="#C7522A" strokeWidth="1" opacity="0.07" fill="none" />
          <path d="M100 580 L200 580 L175 640 L125 640 Z" stroke="#C7522A" strokeWidth="0.7" opacity="0.05" fill="none" />
          {/* Branching arrows — top right */}
          <path d="M950 100 L1050 100" stroke="rgba(244,241,235,0.06)" strokeWidth="1" />
          <path d="M1050 100 L1120 60" stroke="#C7522A" strokeWidth="0.8" opacity="0.08" />
          <path d="M1050 100 L1120 100" stroke="#C7522A" strokeWidth="0.8" opacity="0.08" />
          <path d="M1050 100 L1120 140" stroke="#C7522A" strokeWidth="0.8" opacity="0.08" />
          <circle cx="1120" cy="60" r="4" fill="#C7522A" opacity="0.06" />
          <circle cx="1120" cy="100" r="4" fill="#C7522A" opacity="0.08" />
          <circle cx="1120" cy="140" r="4" fill="#C7522A" opacity="0.06" />
          {/* Hexagonal grid — center */}
          {[0,1,2].map(row =>
            [0,1,2,3].map(col => (
              <polygon
                key={`hex${row}-${col}`}
                points={(() => {
                  const cx = 500 + col * 52 + (row % 2) * 26;
                  const cy = 380 + row * 45;
                  const r = 22;
                  return [0,1,2,3,4,5].map(k => {
                    const a = Math.PI / 3 * k - Math.PI / 6;
                    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
                  }).join(" ");
                })()}
                stroke="#C7522A"
                strokeWidth="0.6"
                opacity="0.05"
                fill="none"
              />
            ))
          )}
          {/* Circular orbit — large */}
          <circle cx="600" cy="400" r="280" stroke="rgba(244,241,235,0.03)" strokeWidth="1" />
          <circle cx="600" cy="400" r="180" stroke="#C7522A" strokeWidth="0.5" opacity="0.04" strokeDasharray="8 12" />
        </>}

        {page === "resume" && <>
          {/* RESUME: Career/timeline — document shapes, milestones, path */}
          {/* Vertical timeline — left side */}
          <line x1="150" y1="80" x2="150" y2="720" stroke="rgba(244,241,235,0.06)" strokeWidth="1" />
          {[0,1,2,3,4].map(i => (
            <React.Fragment key={`tm${i}`}>
              <circle cx="150" cy={160+i*120} r="6" stroke="#C7522A" strokeWidth="1.5" opacity={0.08 + i*0.01} fill="none" />
              <circle cx="150" cy={160+i*120} r="2" fill="#C7522A" opacity={0.07 + i*0.01} />
              <line x1="165" y1={160+i*120} x2={240+Math.random()*60} y2={160+i*120} stroke="rgba(244,241,235,0.04)" strokeWidth="1" />
            </React.Fragment>
          ))}
          {/* Document shapes — top right */}
          <rect x="950" y="100" width="120" height="160" rx="8" stroke="#C7522A" strokeWidth="1" opacity="0.07" fill="none" />
          <line x1="970" y1="140" x2="1050" y2="140" stroke="rgba(244,241,235,0.05)" strokeWidth="1" />
          <line x1="970" y1="165" x2="1040" y2="165" stroke="rgba(244,241,235,0.04)" strokeWidth="1" />
          <line x1="970" y1="190" x2="1030" y2="190" stroke="rgba(244,241,235,0.04)" strokeWidth="1" />
          <line x1="970" y1="215" x2="1045" y2="215" stroke="rgba(244,241,235,0.04)" strokeWidth="1" />
          {/* Second document, offset */}
          <rect x="980" y="130" width="120" height="160" rx="8" stroke="rgba(244,241,235,0.04)" strokeWidth="1" fill="none" />
          {/* Career path curve — large swooping line */}
          <path d="M100 700 C250 650, 400 500, 550 480 S800 350, 1000 200 S1150 120, 1200 100" stroke="#C7522A" strokeWidth="1" opacity="0.07" fill="none" />
          {/* Achievement stars — scattered */}
          {[[850,450],[900,500],[870,540],[920,470]].map(([x,y], i) => (
            <polygon
              key={`star${i}`}
              points={(() => {
                const r1 = 8, r2 = 3;
                return [0,1,2,3,4,5,6,7,8,9].map(k => {
                  const a = Math.PI / 5 * k - Math.PI / 2;
                  const r = k % 2 === 0 ? r1 : r2;
                  return `${x + r * Math.cos(a)},${y + r * Math.sin(a)}`;
                }).join(" ");
              })()}
              fill="#C7522A"
              opacity={0.05 + i*0.01}
            />
          ))}
          {/* Graduation cap — abstract */}
          <path d="M400 620 L440 600 L480 620 L440 640 Z" stroke="#C7522A" strokeWidth="0.8" opacity="0.06" fill="none" />
          <line x1="440" y1="640" x2="440" y2="670" stroke="#C7522A" strokeWidth="0.8" opacity="0.05" />
          {/* Concentric rings */}
          <circle cx="600" cy="400" r="250" stroke="rgba(244,241,235,0.03)" strokeWidth="1" />
          <circle cx="600" cy="400" r="200" stroke="#C7522A" strokeWidth="0.5" opacity="0.04" strokeDasharray="4 8" />
        </>}
      </svg>

      {/* Logo mark */}
      <div className="relative z-10 w-14 h-14 rounded-2xl bg-paper text-ink flex items-center justify-center font-display text-2xl font-black mb-8">
        U
      </div>

      {/* Page title */}
      <h2 className="relative z-10 display text-5xl md:text-7xl mb-4">
        {INTERSTITIAL_TITLES[page]}<span className="text-brick">.</span>
      </h2>

      {/* Typewriter message */}
      <div className="relative z-10 max-w-md text-center">
        <span className="text-paper/70 text-base md:text-lg leading-relaxed">
          <Typewriter
            words={[INTERSTITIAL_MESSAGES[page]]}
            typeMs={25}
            holdMs={9999}
            deleteMs={9999}
          />
        </span>
      </div>

      {/* subtle progress bar */}
      <div className="relative z-10 mt-10 w-32 h-px bg-paper/20 rounded-full overflow-hidden">
        <div
          className="h-full bg-brick rounded-full"
          style={{
            width: phase === "in" ? "0%" : phase === "visible" ? "100%" : "100%",
            transition: "width 2.8s cubic-bezier(0.2,0.6,0.2,1)",
          }}
        />
      </div>
    </div>
  );
}

/* ───────────────────────── App ───────────────────────── */
function App() {
  const [page, setPage] = useStateA(() => {
    const h = location.hash.replace("#", "");
    return ["home","works","playbook","resume"].includes(h) ? h : "home";
  });
  const [transitioning, setTransitioning] = useStateA(null);

  const go = (p) => {
    if (p === page || transitioning) return; // already on this page or transitioning
    if (p === "home") {
      // home navigates instantly, no interstitial
      setPage(p);
      history.replaceState({}, "", "#" + p);
      window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    } else {
      // show interstitial for works/playbook/resume
      setTransitioning(p);
      history.replaceState({}, "", "#" + p);
    }
  };

  const finishTransition = () => {
    const target = transitioning;
    setTransitioning(null);
    setPage(target);
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  };

  useEffectA(() => {
    const onHash = () => {
      const h = location.hash.replace("#", "");
      if (["home","works","playbook","resume"].includes(h) && h !== page) {
        if (h === "home") {
          setPage(h);
        } else {
          setTransitioning(h);
        }
      }
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [page]);

  return (
    <div>
      <Nav page={transitioning || page} go={go} />
      {page === "home" && !transitioning && <ArcScrollNav />}
      {transitioning && <Interstitial page={transitioning} onDone={finishTransition} />}
      <PageTransition pageKey={page}>
        {page === "home"     && <HomePage     go={go} />}
        {page === "works"    && <WorksPage    go={go} />}
        {page === "playbook" && <PlaybookPage go={go} />}
        {page === "resume"   && <ResumePage   go={go} />}
      </PageTransition>
      <Footer go={go} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

// dismiss loader once React has painted
requestAnimationFrame(() => {
  const loader = document.getElementById("loader");
  if (loader) loader.classList.add("done");
});
