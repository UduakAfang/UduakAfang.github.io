/* eslint-disable no-undef */
/* App shell — nav + footer + state-based routing */

const { useState: useStateA, useEffect: useEffectA } = React;

function Nav({ page, go }) {
  const [stuck, setStuck] = useStateA(false);
  useEffectA(() => {
    const onScroll = () => setStuck(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const items = [
    { id: "home",     label: "Home"     },
    { id: "works",    label: "Works"    },
    { id: "playbook", label: "Playbook" },
    { id: "resume",   label: "Résumé"   },
  ];

  return (
    <header className="fixed top-4 left-0 right-0 z-[100] flex justify-center px-4">
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

        <a
          href={`mailto:${PROFILE.email}`}
          className="px-4 py-2 rounded-full bg-brick text-paper hover:bg-brick2 transition-colors mono text-[11px] uppercase tracking-[0.22em] flex items-center gap-2"
        >
          Let's talk <ArrowUR size={11} />
        </a>
      </nav>
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
      {/* Decorative background illustrations — subtle line art with brick accents */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 1200 800" fill="none" preserveAspectRatio="xMidYMid slice">
        {/* Grid dots */}
        {[...Array(12)].map((_, i) =>
          [...Array(8)].map((_, j) => (
            <circle key={`d${i}-${j}`} cx={100 * i + 50} cy={100 * j + 50} r="1" fill="rgba(244,241,235,0.04)" />
          ))
        )}
        {/* Diagonal lines — brick accent */}
        <line x1="0" y1="0" x2="400" y2="400" stroke="#C7522A" strokeWidth="0.5" opacity="0.12" />
        <line x1="800" y1="0" x2="1200" y2="400" stroke="#C7522A" strokeWidth="0.5" opacity="0.08" />
        <line x1="1200" y1="800" x2="800" y2="400" stroke="#C7522A" strokeWidth="0.5" opacity="0.1" />
        {/* Corner arcs */}
        <path d="M0 200 Q0 0 200 0" stroke="rgba(244,241,235,0.06)" strokeWidth="1" />
        <path d="M1200 600 Q1200 800 1000 800" stroke="rgba(244,241,235,0.06)" strokeWidth="1" />
        {/* Flowing curves */}
        <path d="M-50 400 C200 350, 400 500, 600 380 S1000 450, 1250 400" stroke="#C7522A" strokeWidth="0.7" opacity="0.09" />
        <path d="M-50 500 C150 480, 350 550, 550 470 S900 520, 1250 490" stroke="rgba(244,241,235,0.05)" strokeWidth="0.7" />
        {/* Abstract chart bars — nod to data/BI */}
        <rect x="80"  y="620" width="18" height="60" rx="4" fill="#C7522A" opacity="0.06" />
        <rect x="108" y="600" width="18" height="80" rx="4" fill="#C7522A" opacity="0.08" />
        <rect x="136" y="640" width="18" height="40" rx="4" fill="#C7522A" opacity="0.05" />
        <rect x="164" y="610" width="18" height="70" rx="4" fill="#C7522A" opacity="0.07" />
        {/* Top-right scatter dots */}
        <circle cx="1050" cy="120" r="3" fill="#C7522A" opacity="0.1" />
        <circle cx="1080" cy="100" r="2" fill="#C7522A" opacity="0.08" />
        <circle cx="1110" cy="140" r="4" fill="#C7522A" opacity="0.06" />
        <circle cx="1070" cy="160" r="2.5" fill="rgba(244,241,235,0.08)" />
        {/* Large circle ring */}
        <circle cx="600" cy="400" r="280" stroke="rgba(244,241,235,0.03)" strokeWidth="1" />
        <circle cx="600" cy="400" r="320" stroke="#C7522A" strokeWidth="0.5" opacity="0.04" />
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
