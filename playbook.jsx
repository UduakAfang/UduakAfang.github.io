/* eslint-disable no-undef */
/* Playbook — three pillars (Identify · Integrate · Design) with D3 visuals.
   The leading idea: "the food can be sweet but if you don't present it well,
   the message doesn't land." */

const { useEffect: useEffectP } = React;

const PILLARS = [
  {
    n: "01",
    name: "Identify",
    serif: "the question",
    blurb:
      "Every engagement starts by listening. I map stakeholders, KPIs and the decisions the dashboard needs to support — before touching any data.",
    points: [
      "Stakeholder interviews",
      "KPI definitions",
      "Decision-driven scope",
    ],
  },
  {
    n: "02",
    name: "Integrate",
    serif: "the sources",
    blurb:
      "Most dashboard 'bugs' actually live in the data layer. I profile every source, design the model, and build pipelines so logic stays auditable.",
    points: [
      "Source profiling",
      "SQL & dbt modelling",
      "Automated refresh",
    ],
  },
  {
    n: "03",
    name: "Present",
    serif: "the answer",
    blurb:
      "Presentation is not a finishing touch — it is the message. After data exploration, I create 4-5 mockups in Figma to test different layouts and user flows. The one that wins becomes the blueprint for the dashboard. A trustworthy number badly laid out is still useless on a Monday morning.",
    points: [
      "Figma mockups (4-5 iterations)",
      "User flow testing",
      "One accent, one insight",
    ],
  },
];

const PHASES = [
  { n: "01", t: "Discovery",    s: "Understand the question",  d: "Map stakeholders, KPIs and decisions before touching data." },
  { n: "02", t: "Data Audit",   s: "Assess what exists",       d: "Profile every source — row counts, nulls, joins, freshness." },
  { n: "03", t: "Architecture", s: "Design the pipeline",      d: "Staging, fact / dimension splits, refresh strategy." },
  { n: "04", t: "Build",        s: "Figma mockups → Dashboard",     d: "After data exploration, I create 4-5 mockups in Figma, pick the one with the best user flow, then build the dashboard from that design. This ensures stakeholders get a tool they'll actually use." },
  { n: "05", t: "Validate",     s: "Test every number",        d: "Reconcile against the source. If it can't be explained, it doesn't ship." },
  { n: "06", t: "Deliver",      s: "Handoff & iterate",        d: "Documentation, walkthrough, post-launch support window." },
];

function PlaybookPage({ go }) {
  useEffectP(() => {
    const sel = ".reveal, .reveal-pop, .flip-reveal, .flip-reveal-alt, .stagger-flip";
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

  return (
    <main className="bg-paper text-ink min-h-screen">

      {/* Hero — manifesto */}
      <section className="pt-28 md:pt-36 pb-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 mono text-[11px] uppercase tracking-[0.22em] text-ink/55 mb-10">
            <button onClick={() => go("home")} className="hover:text-ink">Home</button>
            <span>/</span>
            <span className="text-ink">Playbook</span>
          </div>

          <div className="grid grid-cols-12 gap-8 items-end">
            <div className="col-span-12 lg:col-span-8 reveal">
              <div className="pagenum opacity-50 mb-3">§ 03 · The Playbook</div>
              <h1 className="display text-[12vw] md:text-[9rem] leading-[0.84]">
                <ScrollFillText fill="#1a1a1a" stroke="#1a1a1a">HOW I</ScrollFillText>{" "}
                <span className="serif-it text-brick lowercase" style={{ WebkitTextFillColor: "#C7522A" }}>work</span>
                <span className="text-brick">.</span>
              </h1>
              <p className="mt-6 text-xl md:text-2xl leading-snug max-w-3xl text-ink/80">
                Three pillars hold up every project I take on: <strong className="text-ink">identify</strong>{" "}
                the question buried in the data, <strong className="text-ink">integrate</strong> the messy sources
                into something you can trust, and <span className="serif-it text-brick">present</span>{" "}
                the answer so it lands. Presentation is not the wrapping — it is the message.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-4 reveal">
              <div className="rounded-3xl border border-ink/15 bg-white p-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="mono text-[10px] uppercase tracking-widest opacity-55">Method · v2026</span>
                  <span className="mono text-[10px] uppercase tracking-widest opacity-55">3 pillars · 6 phases</span>
                </div>
                <div className="space-y-2.5">
                  {PILLARS.map(p => (
                    <div key={p.n} className="flex items-center gap-3 py-2 px-3 rounded-xl bg-paper">
                      <div className="num-dot bg-ink text-paper border-ink">{p.n}</div>
                      <div className="flex-1">
                        <div className="font-bold">{p.name}</div>
                        <div className="mono text-[10px] uppercase tracking-widest opacity-55">{p.serif}</div>
                      </div>
                      <span className="mono text-[10px] uppercase tracking-widest opacity-50">PILLAR</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* flow diagram */}
          <div className="mt-16 rounded-3xl border border-ink/10 bg-white p-8 reveal">
            <div className="flex items-center justify-between mb-3">
              <div className="eyebrow opacity-55">Flow · From raw to decision</div>
              <div className="mono text-[10px] uppercase tracking-widest opacity-55">Linear · audited at every step</div>
            </div>
            <FlowDiagram />
          </div>
        </div>
      </section>

      {/* Three pillars — long form */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 space-y-16">
          {PILLARS.map((p, i) => (
            <article key={p.n} className="grid grid-cols-12 gap-8 reveal pt-12" style={{ borderTop: i === 0 ? "2px solid #1a1a1a" : "1px solid rgba(26,26,26,.18)" }}>
              <div className="col-span-12 md:col-span-3">
                <div className="display text-[7rem] leading-[0.85] text-brick">{p.n}</div>
                <div className="mono text-[11px] uppercase tracking-widest opacity-55 mt-2">Pillar {p.n}</div>
              </div>
              <div className="col-span-12 md:col-span-6">
                <h2 className="display text-6xl">
                  {p.name} <span className="serif-it text-brick lowercase">{p.serif}</span><span className="text-brick">.</span>
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-ink/75">{p.blurb}</p>
              </div>
              <div className="col-span-12 md:col-span-3">
                <div className="eyebrow opacity-55 mb-3">Working with</div>
                <ul className="space-y-2">
                  {p.points.map((pt, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <span className="text-brick mono">▸</span><span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* The "why presentation matters" featured block */}
      <section className="py-20 bg-ink text-paper">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8 items-start">
            <div className="col-span-12 lg:col-span-5 reveal">
              <div className="pagenum opacity-50 mb-3">§ 03.b · Presentation is the message</div>
              <h2 className="display text-5xl md:text-6xl">
                Same data.<br />
                <span className="serif-it text-brick lowercase">two messages.</span>
              </h2>
              <p className="mt-5 text-paper/75 leading-relaxed">
                The chart on the left and the chart on the right hold the same twelve months
                of revenue. One is correct. The other is correct <em>and</em> useful. A stakeholder
                only ever acts on the second one.
              </p>
              <ul className="mt-6 space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <span className="num-dot border-paper/30 text-paper">A</span>
                  <span className="text-paper/80">Twelve unrelated colors. The eye never lands.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="num-dot border-paper/30 text-paper">B</span>
                  <span className="text-paper/80">One accent on the months that matter. The story is the bar.</span>
                </li>
              </ul>
            </div>
            <div className="col-span-12 lg:col-span-7 reveal">
              <div className="rounded-3xl border border-paper/10 p-6 bg-paper/[0.03]">
                <BeforeAfter />
              </div>
            </div>
          </div>

          {/* Real-code snippet  the user asked for */}
          <div className="mt-16 grid grid-cols-12 gap-8 items-start reveal">
            <div className="col-span-12 lg:col-span-5">
              <div className="pagenum opacity-50 mb-3">§ 03.c · Underneath</div>
              <h2 className="display text-4xl md:text-5xl">
                Underneath every chart, <span className="serif-it text-brick lowercase">real SQL</span>.
              </h2>
              <p className="mt-4 text-paper/70 leading-relaxed">
                Every dashboard you see ships with a paper trail — staging models, window
                functions and reconciled aggregates that the next analyst can audit. Here&rsquo;s
                a slice of the load-demand pipeline behind TrackPerform.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <CodeSnippet />
            </div>
          </div>
        </div>
      </section>

      {/* Six phases (kept from existing playbook but mapped onto the pillars) */}
      <section className="py-20">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-10 reveal">
            <div>
              <div className="pagenum opacity-50 mb-3">§ 03.c · Operating phases</div>
              <h2 className="display text-6xl md:text-7xl">Six <span className="serif-it text-brick lowercase">phases</span><span className="text-brick">.</span></h2>
              <p className="mt-3 text-ink/65 max-w-xl">
                Adapted to scope, never skipped. Each one ladders up to a pillar above.
              </p>
            </div>
            <div className="mono text-[11px] uppercase tracking-widest opacity-55 hidden md:block">
              Phase 01 → 06 · Linear
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PHASES.map((p, i) => (
              <div key={p.n} className={i % 2 === 0 ? "flip-reveal" : "flip-reveal-alt"}>
                <div className="card-lift bg-white border border-ink/10 rounded-3xl p-6 flex gap-5" style={{ transitionDelay: (i * 120) + "ms" }}>
                  <div className="display text-[5.5rem] leading-[0.8] text-brick">{p.n}</div>
                  <div>
                    <h3 className="display text-3xl">{p.t}</h3>
                    <div className="mono text-[10px] uppercase tracking-widest opacity-55 mt-1">{p.s}</div>
                    <p className="mt-3 text-sm leading-relaxed text-ink/70">{p.d}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-paper2">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-center reveal">
          <div className="pagenum opacity-50 mb-3">§ 03.d · Get started</div>
          <h2 className="display text-6xl md:text-8xl">
            Ready to <span className="serif-it text-brick lowercase">plate it up</span><span className="text-brick">?</span>
          </h2>
          <p className="mt-4 text-ink/65 max-w-xl mx-auto">
            If this is how you want your data treated, let's get on a 30-minute call and
            scope the first dashboard.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <a href={`mailto:${PROFILE.email}`} className="px-6 py-3 rounded-full bg-ink text-paper mono text-[11px] uppercase tracking-[0.22em] hover:bg-brick transition-colors inline-flex items-center gap-2">
              Let's talk <ArrowUR size={13} />
            </a>
            <button onClick={() => go("works")} className="px-6 py-3 rounded-full border border-ink/20 hover:border-ink mono text-[11px] uppercase tracking-[0.22em]">
              View case studies
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

window.PlaybookPage = PlaybookPage;

/* ── A working code snippet that looks like a small IDE pane ── */
function CodeSnippet() {
  const lines = [
    { l: 1,  k: "comment", t: "-- TrackPerform · weekly load demand per player" },
    { l: 2,  k: "comment", t: "-- run @ 09:00 WAT · output -> public.player_weekly_load" },
    { l: 3,  t: "" },
    { l: 4,  k: "kw",      t: "WITH" , c: " sessions AS (" },
    { l: 5,  t: "  ",      k: "kw",     before: "  ", t2: "SELECT", c: " player_id, session_dt,"  },
    { l: 6,  t: "         coalesce(total_distance_m, 0) AS td_m," },
    { l: 7,  t: "         coalesce(hsr_distance_m,   0) AS hsr_m," },
    { l: 8,  t: "         coalesce(sprint_distance_m,0) AS sprint_m" },
    { l: 9,  k: "kw",      before: "  ", t2: "FROM", c: " raw.gps_sessions" },
    { l:10,  k: "kw",      before: "  ", t2: "WHERE", c: " session_dt >= current_date - interval '90 day'" },
    { l:11,  t: ")," },
    { l:12,  k: "kw",      t: "weekly", c: " AS (" },
    { l:13,  k: "kw",      before: "  ", t2: "SELECT", c: " player_id," },
    { l:14,  t: "         date_trunc('week', session_dt) AS wk," },
    { l:15,  k: "kw",      before: "         ", t2: "SUM", c: "(td_m)     AS td_wk," },
    { l:16,  k: "kw",      before: "         ", t2: "AVG", c: "(hsr_m)    AS hsr_avg," },
    { l:17,  k: "kw",      before: "         ", t2: "STDDEV", c: "(td_m)  AS td_stddev" },
    { l:18,  k: "kw",      before: "  ", t2: "FROM", c: " sessions" },
    { l:19,  k: "kw",      before: "  ", t2: "GROUP BY", c: " player_id, wk" },
    { l:20,  t: ")" },
    { l:21,  k: "kw",      t: "SELECT", c: " *, td_wk / nullif(td_stddev, 0) AS load_z" },
    { l:22,  k: "kw",      t: "FROM",   c: " weekly" },
    { l:23,  k: "kw",      t: "ORDER BY", c: " wk DESC, player_id;" },
  ];

  return (
    <div className="rounded-3xl border border-paper/15 bg-[#101019] overflow-hidden font-mono text-[12.5px] leading-[1.6]">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-paper/10 bg-paper/[0.03]">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex-1 text-center text-paper/55 text-[11px]">~/sql/trackperform/player_weekly_load.sql</div>
        <div className="text-paper/45 text-[10px] uppercase tracking-widest">postgres</div>
      </div>
      <pre className="px-5 py-4 overflow-auto text-paper/90" style={{ background: "#0c0c14" }}>
        {lines.map((ln) => {
          if (ln.k === "comment") {
            return (
              <div key={ln.l} className="flex">
                <span className="w-7 text-right pr-3 text-paper/30 select-none">{ln.l}</span>
                <span className="text-emerald-300/70">{ln.t}</span>
              </div>
            );
          }
          if (ln.k === "kw" && ln.t2) {
            return (
              <div key={ln.l} className="flex">
                <span className="w-7 text-right pr-3 text-paper/30 select-none">{ln.l}</span>
                <span className="text-paper/90 whitespace-pre">{ln.before || ""}</span>
                <span className="text-[#C7522A] font-bold">{ln.t2}</span>
                <span className="text-paper/90 whitespace-pre">{ln.c || ""}</span>
              </div>
            );
          }
          if (ln.k === "kw" && ln.t) {
            return (
              <div key={ln.l} className="flex">
                <span className="w-7 text-right pr-3 text-paper/30 select-none">{ln.l}</span>
                <span className="text-[#C7522A] font-bold">{ln.t}</span>
                <span className="text-paper/90 whitespace-pre">{ln.c || ""}</span>
              </div>
            );
          }
          return (
            <div key={ln.l} className="flex">
              <span className="w-7 text-right pr-3 text-paper/30 select-none">{ln.l}</span>
              <span className="text-paper/80 whitespace-pre">{ln.t}</span>
            </div>
          );
        })}
      </pre>
      <div className="flex items-center justify-between px-4 py-2 border-t border-paper/10 bg-paper/[0.03] text-paper/55 text-[10px] uppercase tracking-widest">
        <span>23 lines · sql</span>
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          ran clean · 0 rows rejected
        </span>
      </div>
    </div>
  );
}
