/* eslint-disable no-undef */
/* Extras — typewriter hero, "How I can help you" hover section,
   and the "Off the clock" widget grid (Apple-flavoured About Me). */

const { useState: useStateX, useEffect: useEffectX, useRef: useRefX } = React;

/* ─────────────────────────── Typewriter ─────────────────────────── */
/* Types each word, holds it, deletes it, types the next. Renders as a
   dashed-border "Add name" style placeholder until the first word lands. */
function Typewriter({ words = [], typeMs = 70, holdMs = 1200, deleteMs = 38 }) {
  const [text, setText] = useStateX("");
  const [idx, setIdx] = useStateX(0);
  const [phase, setPhase] = useStateX("typing"); // typing | holding | deleting

  useEffectX(() => {
    let t;
    const current = words[idx % words.length];
    if (phase === "typing") {
      if (text.length < current.length) {
        t = setTimeout(() => setText(current.slice(0, text.length + 1)), typeMs);
      } else {
        t = setTimeout(() => setPhase("holding"), holdMs);
      }
    } else if (phase === "holding") {
      // single word? hold forever
      if (words.length === 1) return;
      t = setTimeout(() => setPhase("deleting"), 60);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        t = setTimeout(() => setText(text.slice(0, -1)), deleteMs);
      } else {
        setIdx((i) => i + 1);
        setPhase("typing");
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, idx, words, typeMs, holdMs, deleteMs]);

  const empty = text.length === 0;
  return (
    <span
      className={
        "inline-flex items-center align-baseline transition-all duration-300 " +
        (empty
          ? "px-3 py-0.5 rounded-full border-2 border-dashed border-emerald-600/70 text-emerald-700/70"
          : "")
      }
    >
      {empty && <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mr-2" />}
      <span className="whitespace-nowrap">{empty ? "Add name" : text}</span>
      <span
        aria-hidden
        className="ml-1 w-[3px] bg-current opacity-70 animate-pulse"
        style={{ height: "0.78em", display: "inline-block" }}
      />
    </span>
  );
}

/* ───────────────────── "How I can help you" ─────────────────────
   List of services. Hover on a row reveals its illustration on the right —
   single-color line illustrations, not photos. */
function HelpSection() {
  const SERVICES = [
    {
      n: "01",
      title: "Tableau Dashboards",
      blurb: "LOD, calc fields, actions. Wired from raw SQL through to the screen a stakeholder opens.",
      Illus: IllusDashboard,
      bg: "#f4f1eb",
    },
    {
      n: "02",
      title: "SQL & ETL Pipelines",
      blurb: "BigQuery, SQL Server, Postgres. CTEs and window functions. dbt-style transformations.",
      Illus: IllusPipeline,
      bg: "#ebe6dd",
    },
    {
      n: "03",
      title: "Analytic Web Apps",
      blurb: "Full-stack React + Python. End-to-end ownership from data model to deploy.",
      Illus: IllusWebApp,
      bg: "#f4f1eb",
    },
    {
      n: "04",
      title: "Workflow Automation",
      blurb: "n8n and Python pipelines that quietly run in the background and never miss.",
      Illus: IllusAutomation,
      bg: "#ebe6dd",
    },
  ];

  const [active, setActive] = useStateX(0);
  const [svcRevealed, setSvcRevealed] = useStateX(false);
  const [svcAnimDone, setSvcAnimDone] = useStateX(false);
  const svcListRef = useRefX(null);

  // reveal service rows when list scrolls into view
  useEffectX(() => {
    const container = svcListRef.current;
    if (!container) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setSvcRevealed(true);
          setSvcAnimDone(false);
          // clear stagger delays after all items have animated in
          setTimeout(() => setSvcAnimDone(true), 1800);
        } else {
          setSvcRevealed(false);
          setSvcAnimDone(false);
        }
      });
    }, { threshold: 0.1 });
    io.observe(container);
    return () => io.disconnect();
  }, []);

  return (
    <section id="sec-services" className="stack-section stack-cuff py-24 md:py-32" style={{ zIndex: 30, backgroundColor: '#f4f1eb' }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-12 gap-8 items-start">
          {/* Left: list */}
          <div className="col-span-12 lg:col-span-7" ref={svcListRef}>
            <div className="pagenum opacity-50 mb-3">§ 03 · Services</div>
            <h2 className="display text-6xl md:text-7xl leading-[0.85]">
              <ScrollFillText fill="#1a1a1a" stroke="#1a1a1a">HOW I CAN</ScrollFillText>{" "}
              <ScrollFillText fill="#C7522A" stroke="#C7522A" className="serif-it lowercase" style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.01em', textTransform: 'lowercase' }}>help you</ScrollFillText><span className="text-brick">.</span>
            </h2>
            <p className="mt-4 text-ink/65 max-w-md">
              Four things I do well. Hover any row to see what it looks like in the wild.
            </p>

            <ul className="mt-10 divide-y divide-ink/15">
              {SERVICES.map((s, i) => {
                const isActive = active === i;
                return (
                  <li
                    key={s.n}
                    onMouseEnter={() => setActive(i)}
                    onFocus={() => setActive(i)}
                    tabIndex={0}
                    className="group cursor-pointer py-6 flex items-baseline gap-6 outline-none"
                    style={{
                      opacity: svcRevealed ? (isActive ? 1 : 0.45) : 0,
                      transform: svcRevealed ? "translateX(0)" : "translateX(-40px)",
                      paddingLeft: isActive ? 12 : 0,
                      transition: "opacity .7s cubic-bezier(.2,.6,.2,1), transform .7s cubic-bezier(.2,.6,.2,1), padding-left .5s ease",
                      transitionDelay: (svcRevealed && !svcAnimDone) ? [0, 300, 650, 1050][i] + "ms" : "0ms",
                    }}
                  >
                    <span className="mono text-[11px] uppercase tracking-[0.22em] text-ink/55 w-8 shrink-0">{s.n}</span>
                    <div className="flex-1">
                      <h3 className="display text-3xl md:text-5xl leading-[0.95] tracking-tight transition-colors duration-500"
                          style={{ color: isActive ? "#1a1a1a" : "rgba(26,26,26,.55)" }}>
                        {s.title}
                      </h3>
                      <p
                        className="overflow-hidden transition-all duration-500 text-ink/65 mt-0"
                        style={{
                          maxHeight: isActive ? 80 : 0,
                          opacity: isActive ? 1 : 0,
                          marginTop: isActive ? 8 : 0,
                        }}
                      >
                        {s.blurb}
                      </p>
                    </div>
                    <ArrowUR size={14} className={"shrink-0 transition-transform duration-500 " + (isActive ? "translate-x-0" : "-translate-x-2")} />
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right: reveal illustration */}
          <div className="col-span-12 lg:col-span-5 lg:sticky lg:top-28">
            <div
              className="relative rounded-[28px] overflow-hidden transition-colors duration-700"
              style={{ aspectRatio: "4/5", background: SERVICES[active].bg }}
            >
              {SERVICES.map((s, i) => (
                <div
                  key={s.n}
                  className="absolute inset-0 transition-all duration-700 ease-out"
                  style={{
                    opacity: active === i ? 1 : 0,
                    transform: active === i ? "translateY(0)" : "translateY(14px)",
                  }}
                >
                  <s.Illus />
                </div>
              ))}
              <div className="absolute left-4 bottom-4 flex items-center gap-2 px-3 py-2 rounded-full bg-paper/95 backdrop-blur">
                <span className="mono text-[10px] uppercase tracking-widest opacity-55">Service</span>
                <span className="mono text-[10px] uppercase tracking-widest text-brick">{SERVICES[active].n}</span>
              </div>
              <div className="absolute right-4 top-4 mono text-[10px] uppercase tracking-widest opacity-55">
                Illustration · single weight
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── About widgets (off the clock) ───────────────────── */

/* Music widget — favorite albums + songs on rotation */
function NowPlaying() {
  const items = [
    { title: "Malibu Nights", artist: "LANY",           type: "Album", g: "linear-gradient(135deg, #E8926F, #B84D2A)" },
    { title: "SWAG",          artist: "Justin Bieber",   type: "Album", g: "linear-gradient(135deg, #D4A574, #8B6914)" },
    { title: "The Search",    artist: "NF",              type: "Album", g: "linear-gradient(135deg, #2a2a2a, #0a0a0a)" },
    { title: "Can You Stand the Rain", artist: "New Edition", type: "Song", g: "linear-gradient(135deg, #4A6FA5, #1a3366)" },
    { title: "We Hug Now",    artist: "Sydney Rose",     type: "Song",  g: "linear-gradient(135deg, #A67DB8, #6B3FA0)" },
    { title: "Bristol",       artist: "Sydney Rose",     type: "Song",  g: "linear-gradient(135deg, #7BAECC, #2F6B8A)" },
    { title: "Before & After You", artist: "Sydney Rose", type: "Song", g: "linear-gradient(135deg, #CC8B7B, #8A4F2F)" },
  ];

  const [current, setCurrent] = useStateX(0);

  useEffectX(() => {
    const id = setInterval(() => setCurrent(c => (c + 1) % items.length), 4000);
    return () => clearInterval(id);
  }, []);

  const item = items[current];

  return (
    <div className="rounded-[28px] bg-ink text-paper p-5 col-span-12 md:col-span-6 lg:col-span-4 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2 mono text-[10px] uppercase tracking-widest opacity-65">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          On rotation
        </div>
        <div className="mono text-[10px] uppercase tracking-widest opacity-55">{item.type}</div>
      </div>

      {/* Now playing display */}
      <div className="flex-1 flex items-center gap-4 mb-4">
        <div className="w-20 h-20 rounded-2xl shadow-lg shrink-0 flex items-center justify-center transition-all duration-700" style={{ background: item.g }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="opacity-80">
            <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.4)" strokeWidth="1.2"/>
            <circle cx="12" cy="12" r="4" stroke="rgba(255,255,255,0.6)" strokeWidth="1"/>
            <circle cx="12" cy="12" r="1.5" fill="rgba(255,255,255,0.8)"/>
          </svg>
        </div>
        <div className="min-w-0">
          <div className="font-bold text-lg leading-tight truncate">{item.title}</div>
          <div className="mono text-[11px] uppercase tracking-widest opacity-65 mt-1">{item.artist}</div>
        </div>
      </div>

      {/* Mini track list */}
      <div className="space-y-1 mb-3">
        {items.map((it, i) => (
          <button
            key={it.title}
            onClick={() => setCurrent(i)}
            className={"flex items-center gap-2 w-full text-left px-2 py-1 rounded-lg transition-all duration-300 " + (i === current ? "bg-paper/10" : "opacity-40 hover:opacity-70")}
          >
            <span className="w-4 h-4 rounded shrink-0" style={{ background: it.g }} />
            <span className="text-[11px] truncate">{it.title}</span>
            <span className="ml-auto mono text-[9px] opacity-50 shrink-0">{it.type === "Album" ? "LP" : "♪"}</span>
          </button>
        ))}
      </div>

      <div className="mt-auto pt-3 dash-div" />
      <div className="mt-2 flex items-center justify-between mono text-[10px] uppercase tracking-widest opacity-55">
        <span>{current + 1} / {items.length}</span>
        <span>Updated weekly</span>
      </div>
    </div>
  );
}

/* Currently reading — two books */
function ReadingCard() {
  const books = [
    { title: "Murder in the Crooked House", author: "Soji Shimada", pct: 3, note: "Just started", g: "linear-gradient(135deg, #8B0000, #2F4F4F)" },
    { title: "The Mysterious Benedict Society", author: "Trenton Lee Stewart", pct: 38, note: "Series re-read", g: "linear-gradient(135deg, #2E5D3A, #1a3a2a)" },
  ];
  return (
    <div className="rounded-[28px] bg-paper2 p-5 col-span-12 md:col-span-6 lg:col-span-4 flex flex-col h-full border border-ink/10">
      <div className="flex items-center justify-between mb-4">
        <div className="mono text-[10px] uppercase tracking-widest opacity-55">Reading right now</div>
        <div className="mono text-[10px] uppercase tracking-widest text-brick">2 books</div>
      </div>

      <div className="space-y-4">
        {books.map((b) => (
          <div key={b.title} className="flex gap-3 items-center">
            <div className="relative w-14 h-20 rounded-md shadow-[0_6px_16px_-8px_rgba(26,26,26,0.4)] overflow-hidden shrink-0" style={{ background: b.g }}>
              <div className="absolute inset-1.5 border border-paper/25 rounded-sm" />
              <div className="absolute inset-0 flex items-end p-1.5">
                <div className="text-paper text-[7px] font-bold leading-tight">{b.title.split(" ").slice(0, 3).join(" ")}</div>
              </div>
            </div>
            <div className="min-w-0 flex-1">
              <div className="font-bold text-sm leading-tight">{b.title}</div>
              <div className="text-[12px] text-ink/60">{b.author}</div>
              <div className="mt-1.5">
                <div className="h-1 rounded-full bg-ink/10 overflow-hidden">
                  <div className="h-full bg-ink rounded-full" style={{ width: b.pct + "%" }} />
                </div>
                <div className="mono text-[9px] uppercase tracking-widest opacity-50 mt-0.5 flex justify-between">
                  <span>{b.note}</span>
                  <span>{b.pct}%</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-4 dash-div" />
      <div className="mono text-[10px] uppercase tracking-widest opacity-55 mt-2">
        Finished: Storytelling with Data (3rd read)
      </div>
    </div>
  );
}

/* Currently obsessed with — pill cloud. Pinned items at the top get the
   accent treatment. */
function ObsessionsCard() {
  const items = [
    { t: "Building TrackPerform", hot: true },
    { t: "Building DrillCal",     hot: true },
    { t: "Prompt engineering",    hot: true },
    { t: "ACWR ratios"   },
    { t: "Window functions" },
    { t: "Sankey diagrams" },
    { t: "Saira Condensed" },
    { t: "n8n flows" },
  ];
  return (
    <div className="rounded-[28px] bg-white p-5 col-span-12 md:col-span-6 lg:col-span-4 flex flex-col h-full border border-ink/10">
      <div className="flex items-center justify-between mb-4">
        <div className="mono text-[10px] uppercase tracking-widest opacity-55">Currently obsessed with</div>
        <span className="mono text-[10px] uppercase tracking-widest text-brick">↑ this week</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {items.map((p) => (
          <span key={p.t}
            className={
              "px-3 py-1.5 rounded-full text-sm border " +
              (p.hot
                ? "bg-brick text-paper border-brick"
                : "bg-paper/0 text-ink border-ink/15")
            }
          >
            {p.t}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-5 dash-div" />
      <div className="mono text-[10px] uppercase tracking-widest opacity-55 mt-3">
        Refreshes whenever I find something new
      </div>
    </div>
  );
}

/* Location & time, ticking. */
function LocaleCard() {
  const [now, setNow] = useStateX(new Date());
  useEffectX(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);
  // Lagos is UTC+1; show it
  const lagos = new Date(now.toLocaleString("en-US", { timeZone: "Africa/Lagos" }));
  const hh = String(lagos.getHours()).padStart(2, "0");
  const mm = String(lagos.getMinutes()).padStart(2, "0");
  const ss = String(lagos.getSeconds()).padStart(2, "0");
  return (
    <div className="rounded-[28px] p-5 col-span-12 md:col-span-6 lg:col-span-4 flex flex-col h-full bg-paper2 border border-ink/10">
      <div className="mono text-[10px] uppercase tracking-widest opacity-55">Where I am</div>
      <div className="mt-3 flex items-end justify-between gap-2">
        <div>
          <div className="display text-5xl leading-[0.85]">Lagos<span className="text-brick">.</span></div>
          <div className="mono text-[10px] uppercase tracking-widest opacity-55 mt-1.5">Nigeria · UTC+1 · Open to Remote</div>
        </div>
        <div className="text-right">
          <div className="display text-3xl leading-none tabular-nums">{hh}<span className="text-brick">:</span>{mm}</div>
          <div className="mono text-[10px] opacity-55 tabular-nums">:{ss}</div>
        </div>
      </div>

      <div className="mt-auto pt-5 dash-div" />
      <div className="mt-3 flex items-center gap-2">
        <span className="relative inline-flex w-2 h-2">
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-70" />
          <span className="relative inline-block w-2 h-2 rounded-full bg-emerald-600" />
        </span>
        <span className="mono text-[10px] uppercase tracking-widest">Available for new projects</span>
      </div>
    </div>
  );
}

/* Apple-Health-style activity rings */
function ActivityCard() {
  const rings = [
    { label: "Pipelines",  pct: 0.78, color: "#C7522A" },
    { label: "Dashboards", pct: 0.92, color: "#5e6342" },
    { label: "Coffee",     pct: 1.10, color: "#1a1a1a" },
  ];
  const ref = useRefX(null);
  useEffectX(() => {
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();
    const c = 80, r0 = 36;
    rings.forEach((r, i) => {
      const r1 = r0 + i * 14;
      const g = svg.append("g").attr("transform", `translate(${c},${c})`);
      g.append("path")
        .attr("d", d3.arc().innerRadius(r1 - 5).outerRadius(r1).startAngle(0).endAngle(Math.PI * 2)())
        .attr("fill", r.color).attr("opacity", 0.15);
      g.append("path")
        .attr("d", d3.arc().innerRadius(r1 - 5).outerRadius(r1).startAngle(0).endAngle(Math.PI * 2 * Math.min(1, r.pct))())
        .attr("fill", r.color);
    });
  }, []);
  return (
    <div className="rounded-[28px] p-5 col-span-12 md:col-span-6 lg:col-span-4 flex flex-col h-full bg-white border border-ink/10">
      <div className="flex items-center justify-between mb-2">
        <div className="mono text-[10px] uppercase tracking-widest opacity-55">This week</div>
        <div className="mono text-[10px] uppercase tracking-widest text-brick">Mon → Sun</div>
      </div>
      <div className="flex items-center gap-5">
        <svg ref={ref} width="160" height="160" />
        <ul className="space-y-2">
          {rings.map((r) => (
            <li key={r.label} className="flex items-center gap-2 text-sm">
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: r.color }} />
              <span className="font-semibold">{r.label}</span>
              <span className="mono text-[10px] opacity-55">{Math.round(r.pct * 100)}%</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-auto pt-4 mono text-[10px] uppercase tracking-widest opacity-55">
        Honest-ish. Coffee always over-indexes.
      </div>
    </div>
  );
}

/* Quote card */
function QuoteCard() {
  return (
    <div className="rounded-[28px] p-6 col-span-12 md:col-span-6 lg:col-span-4 flex flex-col h-full bg-ink text-paper">
      <div className="mono text-[10px] uppercase tracking-widest opacity-65 mb-3">Maxim · pinned to my desk</div>
      <p className="text-2xl leading-snug font-medium">
        "The food can be sweet, but if the <span className="serif-it text-brick">plating</span> is ugly,
        the message never lands."
      </p>
      <div className="mt-auto pt-4 mono text-[10px] uppercase tracking-widest opacity-65">
        I say this to myself on every Monday
      </div>
    </div>
  );
}

/* The grid wrapper */
function AboutWidgets() {
  const aboutGridRef = useRefX(null);

  // stagger-flip: add/remove .in when grid enters/leaves viewport
  useEffectX(() => {
    const grid = aboutGridRef.current;
    if (!grid) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("in");
        else e.target.classList.remove("in");
      });
    }, { threshold: 0.1 });
    io.observe(grid);
    return () => io.disconnect();
  }, []);

  return (
    <section id="sec-about" className="stack-section stack-cuff pt-24 md:pt-32 pb-48 md:pb-[28vh]" style={{ zIndex: 60, backgroundColor: '#f4f1eb' }}>
      <div className="max-w-[1320px] mx-auto px-6 md:px-12">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-12 reveal">
          <div>
            <div className="pagenum opacity-50 mb-3">§ 05 · Off the clock</div>
            <h2 className="display text-6xl md:text-7xl">
              <ScrollFillText fill="#1a1a1a" stroke="#1a1a1a">WHEN I'M NOT</ScrollFillText>{" "}
              <ScrollFillText fill="#C7522A" stroke="#C7522A" className="serif-it lowercase" style={{ fontFamily: '"Instrument Serif", serif', fontStyle: 'italic', fontWeight: 400, letterSpacing: '-0.01em', textTransform: 'lowercase' }}>at my desk</ScrollFillText><span className="text-brick">.</span>
            </h2>
            <p className="mt-3 text-ink/65 max-w-md">
              A few honest signals about what I'm into right now. Updated whenever I remember.
            </p>
          </div>
          <div className="mono text-[10px] uppercase tracking-widest opacity-55">
            Live widgets · sync at 09:00 WAT
          </div>
        </div>

        <div className="grid grid-cols-12 gap-5 auto-rows-fr stagger-flip" ref={aboutGridRef}>
          <NowPlaying />
          <ReadingCard />
          <ObsessionsCard />
          <LocaleCard />
          <ActivityCard />
          <QuoteCard />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── Arc Scroll Indicator ─────────────────── */
/* Fixed right-side, vertically centred. HTML-based for reliability.
   Dots arranged along a subtle arc. Active dot scales up + shows label.
   Clickable for smooth-scroll. Adapts light/dark per section. */

function ArcScrollNav() {
  const SECS = [
    { id: "sec-hero",     n: "01", label: "Intro" },
    { id: "sec-works",    n: "02", label: "Works" },
    { id: "sec-services", n: "03", label: "Services" },
    { id: "sec-playbook", n: "04", label: "Playbook" },
    { id: "sec-skills",   n: "05", label: "Skills" },
    { id: "sec-about",    n: "06", label: "About" },
    { id: "sec-contact",  n: "07", label: "Contact" },
  ];

  const [active, setActive] = useStateX(0);
  const [dark, setDark] = useStateX(false);

  useEffectX(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const vh = window.innerHeight;
        for (let i = SECS.length - 1; i >= 0; i--) {
          const el = document.getElementById(SECS[i].id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= vh * 0.45) {
              setActive(i);
              const bg = el.style.backgroundColor;
              setDark(bg === "#1a1a1a" || bg === "rgb(26, 26, 26)");
              break;
            }
          }
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  /* Curved offsets: each dot shifts RIGHT by this px amount to form a gentle arc.
     Middle items (index 3) are furthest right, top & bottom curve back left. */
  const arcOffset = (i) => {
    const mid = (SECS.length - 1) / 2;
    const dist = Math.abs(i - mid) / mid; // 0 at centre, 1 at edges
    return Math.round((1 - dist * dist) * 18); // max 18px rightward bow
  };

  const txtColor = dark ? "#f4f1eb" : "#1a1a1a";
  const dimColor = dark ? "rgba(244,241,235,0.18)" : "rgba(26,26,26,0.18)";
  const accent   = "#C7522A";

  return (
    <div
      className="fixed right-4 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-end gap-0"
      style={{ zIndex: 80, opacity: 0.7, transition: "opacity 0.4s" }}
      onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
      onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.7"; }}
    >
      {SECS.map((s, i) => {
        const isActive = i === active;
        const offset = arcOffset(i);
        return (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            className="relative flex items-center justify-end gap-2 py-2 pr-1 outline-none group"
            style={{
              marginRight: offset,
              transition: "margin-right 0.5s cubic-bezier(0.2,0.6,0.2,1)",
            }}
          >
            {/* label — only shows for active, slides in */}
            <div
              className="flex items-center gap-2 overflow-hidden"
              style={{
                maxWidth: isActive ? 120 : 0,
                opacity: isActive ? 1 : 0,
                transition: "max-width 0.5s cubic-bezier(0.2,0.6,0.2,1), opacity 0.4s ease",
              }}
            >
              <span
                className="whitespace-nowrap"
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: 9,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: dark ? "rgba(244,241,235,0.5)" : "rgba(26,26,26,0.45)",
                }}
              >
                {s.label}
              </span>
            </div>

            {/* number */}
            <span
              style={{
                fontFamily: '"Saira Condensed", sans-serif',
                fontWeight: 900,
                fontSize: isActive ? 26 : 14,
                lineHeight: 1,
                color: isActive ? accent : dimColor,
                letterSpacing: "-0.02em",
                transition: "all 0.5s cubic-bezier(0.2,0.6,0.2,1)",
                minWidth: isActive ? 28 : 16,
                textAlign: "right",
              }}
            >
              {s.n}
            </span>

            {/* dot */}
            <span
              style={{
                width: isActive ? 7 : 4,
                height: isActive ? 7 : 4,
                borderRadius: "50%",
                backgroundColor: isActive ? accent : dimColor,
                transition: "all 0.5s cubic-bezier(0.2,0.6,0.2,1)",
                flexShrink: 0,
              }}
            />
          </button>
        );
      })}

      {/* thin connecting line behind the dots */}
      <div
        style={{
          position: "absolute",
          right: 4,
          top: "12%",
          bottom: "12%",
          width: 1,
          background: dark ? "rgba(244,241,235,0.1)" : "rgba(26,26,26,0.08)",
          borderRadius: 1,
          pointerEvents: "none",
        }}
      />
    </div>
  );
}

Object.assign(window, { Typewriter, HelpSection, AboutWidgets, ArcScrollNav });
