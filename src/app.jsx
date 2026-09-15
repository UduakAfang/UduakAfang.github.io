/* v4 shell — small centred nav pill, curtain transitions, centred footer, tweaks */

const { useState: useStateA4, useEffect: useEffectA4, useRef: useRefA4 } = React;

const TWEAKS4 = /*EDITMODE-BEGIN*/{
  "palette": ["#fcfcfc", "#1e3a31", "#d34530"],
  "typeface": "Geometric",
  "accent": "#2a2ae0",
  "accentOverride": false,
  "nameStyle": "Signature",
  "cards": "Tinted",
  "heroPanel": "Bare",
  "dark": false,
  "curtain": true,
  "band": true,
  "grain": true
}/*EDITMODE-END*/;

const PKEYS4 = ["studiosnow"];
/* Curtain label — the destination announces itself mid-transition. */
const CURTAIN_LABEL = { home: "Uduak Afang", work: "Selected works", stack: "The workflow", resume: "Résumé" };
/* One line of subtext under the curtain title — says what the page is for. */
const CURTAIN_SUB = {
  home: "Data models, dashboards and the products around them",
  work: "Three builds in full, plus the archive",
  stack: "How a question becomes a dashboard",
  resume: "Three years of modelling, shipping and support",
};
function curtainSub(p) {
  const [kind] = String(p).split(":");
  return kind === "case" ? "The build, start to finish" : (CURTAIN_SUB[kind] || CURTAIN_SUB.home);
}
const FOOT_NAV4 = [{ id: "home", label: "Home" }, { id: "work", label: "Works" }, { id: "resume", label: "Résumé" }];
function curtainLabel(p) {
  const [kind, arg] = String(p).split(":");
  if (kind === "case") {
    const w = (typeof ALL_WORKS !== "undefined" && ALL_WORKS.find((x) => x.id === arg)) || null;
    return w ? w.title : "Case study";
  }
  return CURTAIN_LABEL[kind] || "Uduak Afang";
}

function hexToRgb4(hex, lift) {
  const v = hex.replace("#", "");
  const n = parseInt(v.length === 3 ? v.split("").map((c) => c + c).join("") : v, 16);
  let [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  if (lift) { r = Math.round(r + (255 - r) * lift); g = Math.round(g + (255 - g) * lift); b = Math.round(b + (255 - b) * lift); }
  return `${r} ${g} ${b}`;
}
const NAV4 = [
  { id: "home", label: "Home" },
  { id: "work", label: "Works" },
  { id: "resume", label: "Résumé" },
];

function CurtainTitle({ text }) {
  const typed = useTyped(text, true, 46);
  return <span className="curtain-type">{typed}</span>;
}

function Nav4({ page, go, dark, setDark }) {
  const [stuck, setStuck] = useStateA4(false);
  const [open, setOpen] = useStateA4(false);
  useEffectA4(() => {
    const onScroll = () => setStuck(window.scrollY > 14);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const base = page.split(":")[0];
  return (
    <header className="fixed top-3 md:top-6 left-0 right-0 z-[100] flex flex-col items-center shell-pad">
      <nav className={"relative w-full max-w-[var(--shell-max)] rounded-full flex items-center justify-between pl-2 pr-1.5 md:pl-3 md:pr-2 py-1.5 border transition-all duration-300 " +
        (stuck ? "bg-paper border-ink/14 shadow-[0_10px_30px_-20px_rgba(0,0,0,.28)]" : "bg-paper border-ink/12")}>
        <button onClick={() => go("home")} className="flex items-center h-9 pl-1.5 pr-2 md:pl-2 md:pr-3 leading-none shrink-0">
          <Mark size={15} className="sig-nav" />
        </button>
        <div className="hidden md:flex items-center gap-0.5">
          {NAV4.map((it) => (
            <button key={it.id} onClick={() => go(it.id)}
              className={"px-3.5 py-2 mono text-[10px] uppercase tracking-[.18em] rounded-full transition-colors " +
                (base === it.id || (it.id === "work" && base === "case") ? "bg-ink text-paper" : "opacity-60 hover:opacity-100")}>
              {it.label}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1 md:gap-1.5 shrink-0">
          <button onClick={() => setDark(!dark)} aria-label="Toggle dark mode"
            className="w-8 h-8 rounded-full border border-ink/15 flex items-center justify-center hover:bg-ink hover:text-paper transition-colors shrink-0">
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6.2" stroke="currentColor" strokeWidth="1.3" />
              <path d="M8 1.8a6.2 6.2 0 000 12.4z" fill="currentColor" />
            </svg>
          </button>
          <a href={`mailto:${PROFILE.email}`}
             className="hidden md:inline-block px-4 py-2 rounded-full bg-accent text-white mono text-[10px] uppercase tracking-[.18em] hover:opacity-85 transition-opacity">Email</a>
          <button onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}
            className="md:hidden w-9 h-8 rounded-full bg-accent text-white flex items-center justify-center">
            <span className="relative block w-[14px] h-[10px]">
              <span className="absolute left-0 w-full h-[1.5px] bg-white" style={{ top: 1, transform: open ? "translateY(4px) rotate(45deg)" : "none", transition: "transform .25s" }} />
              <span className="absolute left-0 w-full h-[1.5px] bg-white" style={{ top: 9, transform: open ? "translateY(-4px) rotate(-45deg)" : "none", transition: "transform .25s" }} />
            </span>
          </button>
        </div>
        {open && (
          <div className="md:hidden absolute top-[calc(100%+8px)] left-0 right-0 rounded-[22px] border border-ink/12 bg-paper shadow-[0_20px_50px_-24px_rgba(0,0,0,.35)] p-2">
            {NAV4.map((it) => (
              <button key={it.id} onClick={() => { setOpen(false); go(it.id); }}
                className={"w-full text-left px-4 py-3 rounded-[15px] mono text-[10.5px] uppercase tracking-[.18em] transition-colors " +
                  (base === it.id || (it.id === "work" && base === "case") ? "bg-ink text-paper" : "hover:bg-ink/5")}>
                {it.label}
              </button>
            ))}
            <a href={`mailto:${PROFILE.email}`} onClick={() => setOpen(false)}
               className="block mt-1 px-4 py-3 rounded-[15px] bg-accent text-white mono text-[10.5px] uppercase tracking-[.18em] text-center">Email me</a>
          </div>
        )}
      </nav>
    </header>
  );
}

function Footer4({ go }) {
  const work = [{ id: "work", label: "Selected works" }, { id: "stack", label: "The workflow" }, { id: "resume", label: "Résumé" }];
  const connect = [["Email", "mailto:" + PROFILE.email], ["LinkedIn", PROFILE.linkedin], ["GitHub", PROFILE.github], ["Tableau Public", PROFILE.tableau]];
  return (
    <footer className="shell-pad pb-4 md:pb-6">
      <div className="shellbox rounded-[32px] px-7 md:px-12 py-10 md:py-12" style={{ background: "#151412", color: "#efece4" }}>
        <div className="grid grid-cols-12 gap-y-9 gap-x-8">
          <div className="col-span-12 md:col-span-6">
            <h2 data-fill className="claim text-[8vw] md:text-[36px] leading-[1.05]">
              Want to <span className="serif-it">work together?</span>
            </h2>
            <a href={`mailto:${PROFILE.email}`}
               className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13.5px] font-medium"
               style={{ background: "#efece4", color: "#151412" }}>
              Book a call <span className="text-[11px]">↗</span>
            </a>
          </div>
          <div className="col-span-6 md:col-span-3 md:col-start-8">
            <div className="text-[19px] font-semibold tracking-[-.02em]">Work</div>
            <div className="flex flex-col items-start gap-3 mt-5">
              {work.map((n) => (
                <button key={n.id} onClick={() => go(n.id)} className="text-[14.5px] text-left hover:opacity-100 transition-opacity" style={{ opacity: .62, color: "inherit" }}>{n.label}</button>
              ))}
            </div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="text-[19px] font-semibold tracking-[-.02em]">Connect</div>
            <div className="flex flex-col items-start gap-3 mt-5">
              {connect.map(([l, href]) => (
                <a key={l} href={href} target="_blank" rel="noopener noreferrer" className="text-[14.5px] hover:opacity-100 transition-opacity" style={{ opacity: .62, color: "inherit" }}>{l}</a>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 mt-10 pt-5" style={{ borderTop: "1px solid rgba(239,236,228,.14)" }}>
          <span className="mono text-[9px] tracking-[.18em] uppercase" style={{ opacity: .45 }}>Uduak Afang · {PROFILE.location} · {PROFILE.mode}</span>
          <span className="mono text-[9px] tracking-[.18em] uppercase" style={{ opacity: .3 }}>For the love of clean data · 2022 — now</span>
        </div>
      </div>
    </footer>
  );
}

function Loader4() {
  const [gone, setGone] = useStateA4(() => sessionStorage.getItem("ua-seen") === "1");
  const [out, setOut] = useStateA4(false);
  useEffectA4(() => {
    if (gone) return;
    document.body.style.overflow = "hidden";
    const a = setTimeout(() => setOut(true), 1500);
    const b = setTimeout(() => {
      setGone(true);
      sessionStorage.setItem("ua-seen", "1");
      document.body.style.overflow = "";
    }, 2350);
    return () => { clearTimeout(a); clearTimeout(b); document.body.style.overflow = ""; };
  }, [gone]);
  if (gone) return null;
  return (
    <div className={"loader4 " + (out ? "is-out" : "")}>
      <div className="text-center px-6">
        <div className="loader4-name">Uduak Afang</div>
        <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2 mt-5">
          {["Analytics Engineer", "Data Analyst", "BI Analyst"].map((d, i) => (
            <span key={d} className="loader4-tag" style={{ animationDelay: 260 + i * 150 + "ms" }}>{d}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function App4() {
  const [t, setTweak] = useTweaks(TWEAKS4);
  const [page, setPage] = useStateA4(() => decodeURIComponent(location.hash.replace("#", "")) || "home");
  const [curtain, setCurtain] = useStateA4("hold");
  const [intro, setIntro] = useStateA4(true);
  const [dest, setDest] = useStateA4("home");
  const busy = useRefA4(false);

  const sig = (a) => (Array.isArray(a) ? a : []).join("|").toLowerCase();
  const palKey = PKEYS4.find((k) => sig(PAL4[k].swatch) === sig(t.palette)) || "studiosnow";
  const pal = resolvePal(palKey, t.dark);

  useEffectA4(() => { applyPal4(palKey, t.dark); }, [palKey, t.dark]);
  /* Intro: the curtain is already up when the page loads, holds on the name,
     then rises away. */
  useEffectA4(() => {
    if (!t.curtain) { setCurtain(null); setIntro(false); return; }
    const a1 = setTimeout(() => setCurtain("up"), 1700);
    const a2 = setTimeout(() => { setCurtain(null); setIntro(false); }, 2400);
    return () => { clearTimeout(a1); clearTimeout(a2); };
  }, []);
  /* Typeface is locked to Geometric — the tweaks panel was removed once the
     final design decisions were made. */
  useEffectA4(() => { document.documentElement.dataset.type = "geometric"; }, []);
  /* Accent override is opt-in — otherwise the palette's own light/dark accent
     wins, so dark mode keeps its lighter, legible blue. */
  useEffectA4(() => {
    const r = document.documentElement.style;
    if (t.accentOverride && t.accent) r.setProperty("--c-accent", hexToRgb4(t.accent, t.dark ? 0.42 : 0));
    else r.setProperty("--c-accent", resolvePal(palKey, t.dark).accent);
  }, [t.accent, t.accentOverride, palKey, t.dark]);
  useEffectA4(() => {
    document.querySelectorAll(".sig").forEach((el) => {
      el.classList.toggle("sig-off", t.nameStyle !== "Signature");
    });
  }, [t.nameStyle, page]);
  useEffectA4(() => {
    document.querySelectorAll(".grain").forEach((el) => { el.style.backgroundImage = t.grain ? "" : "none"; });
  }, [t.grain, page]);

  const go = (p) => {
    if (busy.current || p === page) return;
    const swap = () => {
      setPage(p);
      history.replaceState({}, "", "#" + p);
      window.scrollTo({ top: 0, behavior: "auto" });
    };
    if (!t.curtain) { swap(); return; }
    busy.current = true;
    setDest(p);
    setCurtain("down");
    setTimeout(() => {
      swap();
      setCurtain("up");
      setTimeout(() => { setCurtain(null); busy.current = false; }, 700);
    }, 700);
  };

  useEffectA4(() => {
    const onHash = () => {
      const h = decodeURIComponent(location.hash.replace("#", ""));
      if (h && h !== page) setPage(h);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [page]);

  const [kind, arg] = page.split(":");

  return (
    <div>
      <Loader4 />
      <Nav4 page={page} go={go} dark={t.dark} setDark={(v) => setTweak("dark", v)} />
      {kind === "home" && <HomePage4 go={go} pal={pal} band={t.band} cards={t.cards} heroPanel={t.heroPanel} />}
      {kind === "work" && <WorksPage4 go={go} pal={pal} cards={t.cards} />}
      {kind === "stack" && <StackPage4 go={go} pal={pal} />}
      {kind === "resume" && <ResumePage4 go={go} pal={pal} />}
      {kind === "case" && (window.VIZ_CASES || []).includes(arg)
        ? (kind === "case" && <CaseViz5 id={arg} go={go} pal={pal} />)
        : (kind === "case" && <CaseStudy4 id={arg} go={go} pal={pal} />)}
      <Footer4 go={go} />

      {curtain && (
        <div className={"curtain " + curtain}>
          <div className="px-8 text-center">
            <div className="eyebrow" style={{ opacity: .55 }}>{String(dest).startsWith("case:") ? "Case study" : "Now loading"}</div>
            <div className="claim text-[13vw] md:text-[76px] mt-4"><CurtainTitle text={curtainLabel(dest)} /></div>
            <div className="curtain-sub">{intro ? "Data Analyst · Business Intelligence Analyst · Analytics Engineer" : curtainSub(dest)}</div>
          </div>
        </div>
      )}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App4 />);
