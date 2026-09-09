/* Work list (hover-reveal) + 5-section case study */

const { useState: useStateW, useEffect: useEffectW, useRef: useRefW } = React;

const WORK_META = {
  "05": {
    role: "Analyst · Dashboard design",
    outcome: "A season of Chelsea FC physical data read as one navigable player profile, with an accordion menu Tableau does not ship.",
    stats: [["Pages", "2"], ["Data tables", "4"], ["Parameters", "1 + 3 actions"]],
    tags: ["Tableau", "Parameter actions", "Dynamic zone visibility", "Figma"],
    gallery: ["images/player.png", "images/cfc-frames.png"],
    next: "Take the accordion pattern into the load-demand page so both screens navigate the same way.",
    graphic: "bars",
  },
  "04": {
    role: "Analyst · Data Viz",
    outcome: "One board that serves any creator in the dataset, with a reference date so the rolling window stays honest.",
    stats: [["Creators", "9"], ["Platforms", "4"], ["Windows", "30 / 60 / 90"]],
    tags: ["Tableau", "Parameters", "Excel"],
    gallery: ["images/podcast.png"],
    next: "Wire it to platform APIs so the reference date stops being a parameter and starts being today.",
    graphic: "ribbon",
  },
  "09": {
    role: "Analyst · Data Viz",
    outcome: "54 countries, 108 heads of state, one polar map — built on a dataset and a coordinate system I made myself.",
    stats: [["Countries", "54"], ["Heads of state", "108"], ["Ring", "5 years"]],
    tags: ["Tableau", "MAKEPOINT / MAKELINE", "FIXED LODs", "Parameters", "GeoJSON", "Figma"],
    gallery: ["images/leaders.png"],
    next: "Add the leaders in between — every head of state since independence, not just the first and the current — so the rings become a timeline rather than two snapshots.",
    graphic: "bars",
  },
  "01": {
    role: "Data & Product · client build",
    outcome: "A bespoke, week-long favour became a self-serve product: any vendor's export in, a per-athlete readiness read out in seconds.",
    stats: [["Origin", "Club data comp"], ["Load time", "~3 min → ~3s"], ["Signups", "40+ at launch"]],
    tags: ["React", "TypeScript", "Supabase", "Python", "ACWR", "AI column mapping"],
    gallery: ["images/trackperform/player-monthly.png", "images/trackperform/performance-calendar.png", "images/trackperform/rankings-light.png"],
    next: "With the intake fixed, the product could be about the read rather than the upload. A Python service turns each athlete's load into an acute:chronic ratio and colours it; a daily page opens on the six team KPIs with a seven-day trend and targets you set yourself; max speed analysis tracks peak speed, 90% frequency and neuromuscular state across the last fifty sessions; a monthly calendar carries an EWMA ACWR level in every cell; and rankings read each player against the target range for the metric a coach cares about that week. TrackPerform is a subscription product today — upload an export from any major vendor, in almost any shape, and the readiness read comes back in seconds. The number was always sitting in the data; it just used to take until Wednesday to find it.",
    graphic: "ribbon",
  },
  "02": {
    role: "Data & Product · client build",
    outcome: "Launched 1 August 2026, with around thirty signups and strong early reviews from the coaches using it.",
    stats: [["Launched", "1 Aug 2026"], ["Signups", "30+"], ["Drills per career", "200–500"]],
    tags: ["React", "TypeScript", "Supabase", "Postgres RLS", "Calendar UX"],
    gallery: ["images/drillcal/hero.png", "images/drillcal/daily-planner.png", "images/drillcal/drills.png"],
    next: "The product a coach keeps: the week planned by day and period, a drill library that belongs to the account rather than the club, a tactical board saved against the drill it explains, roles for assistants and analysts, attendance taken against the session that was planned, and session plans exported as PDFs to hand to players and staff. Launched on 1 August 2026 with around thirty signups and strong early reviews. The next move is GPS: pulling actual session output back in so the plan can be judged against what the week really cost.",
    graphic: "bars",
  },
  "03": {
    role: "Analyst · Data Viz",
    outcome: "Selected as Tableau Viz of the Day; used by community groups in conversations with city ops.",
    stats: [["Rows", "108k+"], ["Departments", "17"], ["Zip codes", "44"]],
    tags: ["Tableau", "Mapbox", "Figma", "LOD calcs", "Open data"],
    gallery: ["images/nyc.png"],
    next: "Rebuild the map layer on a live 311 feed so the dashboard answers today's question, not last year's.",
    graphic: "bars",
  },
};

const SOON = [
  { title: "Einride pipeline", tag: "Analytics engineering", blurb: "Ingestion → dbt staging → Databricks lakehouse. A full modern-stack build, documented as it happens." },
  { title: "SessionHub semantic layer", tag: "dbt · metrics", blurb: "One definition of revenue, churn and days-to-pay that every dashboard reads from." },
];

/* ---------- hover-reveal media stack ---------- */
function HoverMedia({ images, pos, show }) {
  if (!images) return null;
  return (
    <div className="hover-media hidden lg:block" style={{ left: pos.x, top: pos.y, opacity: show ? 1 : 0, transform: "translate(-50%,-50%)" }}>
      <div className="relative w-[300px] h-[210px]">
        {images.slice(0, 3).map((src, i) => (
          <img key={src + i} src={src} alt=""
            className="absolute inset-0 w-full h-full object-cover rounded-lg border border-ink/15 shadow-[0_24px_50px_-24px_rgba(0,0,0,.55)] transition-transform duration-500"
            style={{ transform: show ? `rotate(${(i - 1) * 5}deg) translate(${(i - 1) * 22}px, ${Math.abs(i - 1) * 10}px)` : "none", zIndex: 3 - i }} />
        ))}
      </div>
    </div>
  );
}

/* ---------- flowing work list — no category buttons ---------- */
function WorkList({ works, go, dense }) {
  const [hover, setHover] = useStateW(null);
  const [pos, setPos] = useStateW({ x: 0, y: 0 });
  useEffectW(() => {
    const onMove = (e) => setPos({ x: e.clientX + 190, y: e.clientY });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  const meta = hover ? WORK_META[hover] : null;
  return (
    <div className="wlist border-t border-ink/12">
      {works.map((w) => {
        const m = WORK_META[w.id];
        return (
          <button key={w.id} onClick={() => go("case:" + w.id)}
            onMouseEnter={() => setHover(w.id)} onMouseLeave={() => setHover(null)}
            className="wrow group w-full text-left border-b border-ink/12 py-8 md:py-10 block">
            <div className="grid grid-cols-12 gap-4 md:gap-8 items-start px-1">
              <div className="col-span-12 md:col-span-1 mono text-[10px] tracking-[.22em] opacity-40 pt-2">{w.no}</div>
              <div className="col-span-12 md:col-span-5">
                <h3 className="text-3xl md:text-[42px] font-black tracking-[-.035em] leading-none group-hover:text-accent transition-colors duration-300">{w.title}</h3>
                <div className="mono text-[10px] tracking-[.16em] uppercase opacity-50 mt-3">{w.client}</div>
              </div>
              <div className="col-span-12 md:col-span-4">
                <p className="text-[15px] leading-relaxed opacity-75 max-w-md">{m ? m.outcome : w.blurb}</p>
                {!dense && m && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {m.tags.slice(0, 4).map((t) => <span key={t} className="chip">{t}</span>)}
                  </div>
                )}
              </div>
              <div className="col-span-12 md:col-span-2 md:text-right">
                {!dense && m ? (
                  <div className="flex md:justify-end gap-6 md:gap-5 flex-wrap">
                    {m.stats.map(([k, v]) => (
                      <div key={k}>
                        <div className="mono text-[8.5px] tracking-[.18em] uppercase opacity-40">{k}</div>
                        <div className="text-[15px] font-bold tracking-tight mt-0.5">{v}</div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="mono text-[10px] opacity-40">{w.year}</div>
                )}
                <div className="mono text-[10px] tracking-[.2em] uppercase mt-4 md:mt-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">Case study ↗</div>
              </div>
            </div>
          </button>
        );
      })}
      <HoverMedia images={meta ? meta.gallery : null} pos={pos} show={!!meta} />
    </div>
  );
}

/* ---------- 5-section case study ---------- */
function CaseStudy({ id, go }) {
  const work = ALL_WORKS.find((w) => w.id === id) || SELECTED_WORKS[0];
  const m = WORK_META[id] || WORK_META["01"];
  const [active, setActive] = useStateW(0);
  useRevealT(id);

  const sections = [
    ...(work.process || []).map((p) => ({ n: p.n, t: p.t, d: p.d })),
    { n: "05", t: "What I'd do next", d: m.next },
  ];

  useEffectW(() => {
    const onScroll = () => {
      const marks = sections.map((s) => document.getElementById("s-" + s.n)).filter(Boolean);
      let cur = 0;
      marks.forEach((el, i) => { if (el.getBoundingClientRect().top < window.innerHeight * 0.45) cur = i; });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [id]);

  return (
    <main className="pt-32 grain">
      <section className="shell">
        <button onClick={() => go("work")} className="mono text-[10px] tracking-[.22em] uppercase opacity-50 hover:opacity-100 transition-opacity">← All work</button>
        <div className="flex flex-wrap gap-1.5 mt-8">
          <span className="chip chip-accent">★ {m.role}</span>
          {m.tags.map((t) => <span key={t} className="chip">{t}</span>)}
        </div>
        <h1 className="claim text-[13vw] md:text-[86px] mt-7">{work.title}</h1>
        <p className="text-[19px] md:text-[24px] leading-[1.45] max-w-3xl mt-6 opacity-85">{m.outcome}</p>
        <div className="flex flex-wrap gap-10 md:gap-16 mt-10 pb-12 border-b border-ink/12">
          {m.stats.map(([k, v]) => (
            <div key={k}>
              <div className="mono text-[9px] tracking-[.2em] uppercase opacity-45">{k}</div>
              <div className="text-3xl md:text-[38px] font-black tracking-[-.04em] mt-1">{v}</div>
            </div>
          ))}
          <div>
            <div className="mono text-[9px] tracking-[.2em] uppercase opacity-45">Year</div>
            <div className="text-3xl md:text-[38px] font-black tracking-[-.04em] mt-1">{work.year}</div>
          </div>
        </div>
      </section>

      <section className="shell mt-12">
        <div className="rounded-2xl overflow-hidden border border-ink/12 bg-paper2 reveal">
          <img src={work.image} alt={work.title} className="w-full object-cover max-h-[560px]" />
        </div>
      </section>

      <section className="shell mt-24 grid grid-cols-12 gap-10">
        <aside className="hidden md:block col-span-3">
          <div className="sticky top-32 space-y-3">
            <div className="eyebrow opacity-45 mb-4">Contents</div>
            {sections.map((s, i) => (
              <a key={s.n} href={"#s-" + s.n}
                 className={"block mono text-[11px] tracking-[.06em] leading-relaxed transition-colors " + (i === active ? "text-accent" : "opacity-45 hover:opacity-80")}>
                <span className="opacity-50 mr-2">{s.n}</span>{s.t}
              </a>
            ))}
          </div>
        </aside>

        <div className="col-span-12 md:col-span-9 space-y-20">
          {sections.map((s, i) => (
            <div key={s.n} id={"s-" + s.n} className="reveal scroll-mt-32">
              <div className="flex items-baseline gap-4">
                <span className="mono text-[10px] tracking-[.24em] text-accent">{s.n}</span>
                <h2 className="text-[30px] md:text-[40px] font-black tracking-[-.035em] leading-none">{s.t}</h2>
              </div>
              <p className="text-[17px] md:text-[19px] leading-[1.65] max-w-2xl mt-5 opacity-80">{s.d}</p>
              {i === 1 && (
                <div className="grid md:grid-cols-2 gap-4 mt-9">
                  <SchemaCard name="fct_session_load" rows={[["player_id", "int"], ["session_date", "date"], ["total_distance_m", "num"], ["hsr_m", "num"], ["player_load", "num"], ["acwr", "num"]]} />
                  <QueryCard lines={`select
  player_id,
  session_date,
  sum(total_distance) as td,
  avg(player_load) over (
    order by session_date
    rows between 6 preceding and current row
  ) as acute_7d
from {{ ref('stg_gps_sessions') }}
group by 1, 2`} />
                </div>
              )}
              {i === 2 && m.graphic === "ribbon" && (
                <figure className="mt-9 rounded-2xl border border-ink/12 bg-paper2 p-6">
                  <LoadRibbon />
                  <figcaption className="mono text-[9.5px] tracking-[.16em] uppercase opacity-45 mt-3">Acute:chronic workload ratio · 16-week window · flagged spikes in accent</figcaption>
                </figure>
              )}
              {i === 3 && m.gallery.length > 1 && (
                <div className="grid md:grid-cols-2 gap-4 mt-9">
                  {m.gallery.slice(0, 2).map((g) => (
                    <img key={g} src={g} alt="" className="w-full rounded-xl border border-ink/12 object-cover h-[240px]" />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="shell mt-28">
        <div className="eyebrow opacity-45">Built with</div>
        <div className="flex flex-wrap gap-2 mt-4">
          {(work.stack || m.tags).map((t) => <span key={t} className="chip chip-solid">{t}</span>)}
        </div>
      </section>

      <section className="shell mt-24 pb-28">
        <div className="dash pb-8 mb-8"></div>
        <div className="eyebrow opacity-45 mb-6">Next project</div>
        {(() => {
          const idx = SELECTED_WORKS.findIndex((w) => w.id === id);
          const nx = SELECTED_WORKS[(idx + 1) % SELECTED_WORKS.length];
          return (
            <button onClick={() => go("case:" + nx.id)} className="group text-left">
              <h3 className="claim text-[12vw] md:text-[76px] group-hover:text-accent transition-colors duration-300">{nx.title}</h3>
              <p className="text-[16px] opacity-70 max-w-xl mt-4">{(WORK_META[nx.id] || {}).outcome}</p>
            </button>
          );
        })()}
      </section>
    </main>
  );
}

Object.assign(window, { WORK_META, SOON, WorkList, CaseStudy, HoverMedia });
