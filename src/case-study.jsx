/* v4 case study — narrow centred narrative, tinted hero band, 5 sections */

const { useState: useStateC4, useEffect: useEffectC4 } = React;

const CASE_COPY = {
  "01": {
    lede: "This is the story of ~TrackPerform~ — how a data-competition entry became an AI product that turns any club's messy GPS export into a ^per-athlete readiness read in seconds^.",
    chips: ["Client project", "Product Design", "Data Modelling", "Built with AI", "React + TypeScript", "Supabase", "Python", "Sports Science"],
    heads: ["It began as a competition entry", "The message that made it a product", "The issues in the files", "The fixes", "The features"],
    extra: {
      2: "Dates were their own trap. ~06/07~ is the 6th of July in Madrid and the 7th of June in New York, and the file never tells you which. Guess wrong and every rolling window behind the read is wrong with it.",
      3: "Underneath it all a Python service turns each athlete's load into an ~acute:chronic workload ratio~ — a seven-day load against a twenty-eight-day baseline — and colours it: green inside the ^0.8–1.3 band^, yellow below, red above. That one coloured number is the whole point of the product.",
    },
  },
  "02": {
    lede: "This is the story of ~DrillCal~ — a coaching journal built for a client and his coaches: plan the next four weeks, keep every drill and video, and ^take all of it with you when the club changes^. Launched 1 August 2026.",
    chips: ["Client project", "Product Design", "Calendar UX", "Built with AI", "React + TypeScript", "Supabase", "Postgres RLS"],
    heads: ["It began in conversations with coaches", "The thing coaches kept saying", "The issues", "The fixes", "The features"],
    extra: {
      1: "The tenure numbers are the whole argument. A coach stays at a club ~two to four years~, works across four to eight teams in a career, and accumulates a few hundred drills doing it. Every one of those moves is a rebuild if the drills live in the club's drive.",
      3: "So the calendar was rewritten to keep duration as data rather than infer it from the slot: a dragged session carries its start and end with it, a period holds as many sessions as the day actually has, and an all-day item can be dropped into a time like anything else.",
    },
  },
  "03": {
    lede: "108,000 service requests across ~seventeen city departments~. This is where I learned that a map is an argument, not a picture. Picked as ^Tableau Viz of the Day^.",
    chips: ["★ Analyst", "Data Viz", "Tableau", "Mapbox", "SQL", "Civic data"],
    heads: ["The question", "The data we actually had", "Building it", "What changed", "What I'd do next"],
    extra: {},
  },
};

const CASE_SQL = {
  "01": `# the one number the whole product exists to show
acute   = load.ewm(halflife=7,  min_periods=1).mean()   # ~1 week
chronic = load.ewm(halflife=28, min_periods=1).mean()   # ~4 weeks
acwr    = acute / chronic

risk = np.select(
    [acwr > 1.3, acwr < 0.8],
    ['high',     'detraining'],   # red,   yellow
    default='optimal')            # green: 0.8-1.3`,
  "02": `select
  d.drill_id,
  d.name,
  avg(d.typical_distance_m) as est_distance,
  avg(d.typical_hsr_m)      as est_hsr,
  count(s.session_id)       as times_run
from {{ ref('stg_drills') }} d
left join {{ ref('stg_sessions') }} s
  using (drill_id)
group by 1, 2`,
  "03": `select
  department,
  zip_code,
  priority,
  count(*) as requests,
  avg(closed_at - created_at) as avg_days_open
from {{ ref('stg_311_requests') }}
where created_at >= date '2023-01-01'
group by 1, 2, 3
order by avg_days_open desc`,
};

const CASE_SQL_NAME = { "01": "services/load/acwr.py", "02": "models/dim_drills.sql", "03": "models/fct_311_requests.sql" };


/* Per-section figures. Full width, captioned, and clickable — the note is what
   the reader sees blown up in the lightbox. */
const CASE_FIGS = {
  "02": {
    0: [{ src: "images/drillcal/hero.png", t: "DrillCal · the pitch",
          n: "The product's own pitch, which is also the shortest way to say what it does: plan your sessions, save your drills, coach with clarity. Everything below is the same idea in working form." }],
    2: [{ src: "images/drillcal/daily-planner.png", t: "The daily planner · where the bug lived",
          n: "Drag a four-hour video-analysis session from the afternoon into the morning and it used to arrive with no time at all — start and end nulled, the block stretched across the full six-hour morning slot. Two more followed from the same assumption: items in the all-day row could not be dragged into a time, and each period could hold only one session, so a double day was impossible to plan." }],
    3: [{ src: "images/drillcal/drills.png", t: "The drill library",
          n: "The fix that matters most is who owns this. Drills — title, category, duration, video, notes — belong to the coach's account, not to a team, so changing club means creating a new team and keeping the library. Categories are the ones coaches already use: technical, tactical, physical, goalkeeper, recovery, cognitive." }],
    4: [{ src: "images/drillcal/tactical-board.png", t: "Tactical board",
          n: "Drawing on a pitch, saved against the drill it belongs to — so the shape and the session plan travel together instead of living in a screenshot on a phone." },
        { src: "images/drillcal/players.png", t: "Players",
          n: "The squad, with positions and the sessions each player has been part of. Assistant coaches and analysts get their own roles, so a club can share a plan without handing over the library." },
        { src: "images/drillcal/attendance.png", small: true, t: "Attendance · on the phone",
          n: "Taken on the touchline, where it actually happens: who turned up, against the session that was planned — which is what turns a plan into a record worth keeping." }],
  },
  "01": {
    0: [{ src: "images/trackperform/chelsea-tableau.png", t: "Competition entry · Tableau",
          n: "Built in Tableau on Chelsea FC's open GPS dataset, released for their public data competition. Player load KPIs with an eight-day trend against the thirty-day average, a match-day calendar, and matchday HSR against the day after. Shortlisted." }],
    2: [{ src: "images/diagrams/issues.svg", t: "What the files actually looked like",
          n: "Drawn from the real uploads. Sheet A packs a week into one sheet as tables inside tables — a date row, a generated-at row, a header row, a handful of players, four blank rows, then the same again. Sheet B is a single session with no date column anywhere, because to the person exporting it the date was obvious. Add 06/07 meaning July in Madrid and June in New York, and one metric arriving under four vendor names, and either the upload bounced or the wait outlasted the person doing it." }],
    3: [{ src: "images/trackperform/detecting-structure.png", t: "Detecting file structure",
          n: "The intake now reads the file for shape before mapping a single column: where the data starts, which column is the date, whether the sheet is one session or a season split into blocks. Unusual formatting gets restructured and proposed back to you instead of rejected." },
        { src: "images/diagrams/pipeline.svg", t: "Any export in, one coloured read out",
          n: "AI reads the structure, a mapper resolves the columns onto a shared schema, the load engine computes the ratios, the dashboard renders — and the first seven days return in a couple of seconds while the rest streams in behind you. Uploads are also bounded to a date window now, so a year of sessions can't hold the first read hostage." }],
    4: [{ src: "images/trackperform/performance-calendar.png", t: "ACWR calendar",
          n: "The feature the product exists for. Every metric, every day of the month, each cell carrying its EWMA ACWR level — green optimal (0.8–1.2), yellow below, red above. A month of readiness in one glance.",
          aside: { src: "images/diagrams/acwr.svg", t: "How the ratio is built",
                   n: "A seven-day acute load over a twenty-eight-day chronic baseline. Green is the band to stay inside — not 'under 0.8'." } },
        { src: "images/trackperform/team-load-dark.png", t: "Team load analysis",
          n: "Where a session lands: six team KPIs with a seven-day trend under each, so the day is read against the week before anyone looks at an individual." },
        { src: "images/trackperform/daily-metrics-dark.png", t: "The daily page",
          n: "The first screen after an upload. Six team KPIs with a seven-day trend under each, match day detected automatically, and the squad ranked against targets you set — per athlete or per group." },
        { src: "images/trackperform/player-monthly.png", t: "Max speed analysis",
          n: "Per-athlete speed across the last fifty sessions: peak speed, how often they cross 90% of it, neuromuscular state and recent form. Bars are coloured against their own maximum — green at 90–100%, amber 80–90%, red below." },
        { src: "images/trackperform/rankings-light.png", t: "Rankings against targets",
          n: "The squad ranked on whichever metric a coach picks, each bar read against that metric's target range — so 'is this high?' is answered on the same row as the number." }],
  },
};

function CaseFigure({ fig }) {
  const cap = (f) => (
    <figcaption>
      <span className="mono text-[9.5px] tracking-[.18em] uppercase">{f.t}</span>
      <span className="case-fig-n">{f.n}</span>
    </figcaption>
  );
  if (fig.aside) {
    return (
      <div className="case-fig-pair reveal">
        <figure className="case-fig case-fig-flush">
          <img src={fig.src} alt={fig.t} className="w-full h-auto" />
          {cap(fig)}
        </figure>
        <figure className="case-fig case-fig-flush case-fig-aside">
          <img src={fig.aside.src} alt={fig.aside.t} className="w-full h-auto" />
          {cap(fig.aside)}
        </figure>
      </div>
    );
  }
  return (
    <figure className={"case-fig reveal " + (fig.small ? "case-fig-sm" : "")}>
      <img src={fig.src} alt={fig.t} className="w-full h-auto" />
      {cap(fig)}
    </figure>
  );
}

function CaseStudy4({ id, go, pal }) {
  const work = ALL_WORKS.find((w) => w.id === id) || SELECTED_WORKS[0];
  const m = WORK_META[id] || WORK_META["01"];
  const cc = CASE_COPY[id] || CASE_COPY["01"];
  const idx = SELECTED_WORKS.findIndex((w) => w.id === id);
  const tint = pal.cards[(idx < 0 ? 0 : idx) % pal.cards.length];
  const light = tint.fg === "light";
  useReveal4(id);

  const figsFor = (i) => (CASE_FIGS[id] && CASE_FIGS[id][i]) || [];

  const sections = [
    ...(work.process || []).map((p) => p.d),
    m.next,
  ];

  return (
    <main className="grain">
      <section className="shell pt-32 md:pt-36">
        <button onClick={() => go("work")} className="mono text-[9px] tracking-[.2em] uppercase" style={{ opacity: .5 }}>← All work</button>
        <h1 className="claim text-[12vw] md:text-[58px] max-w-[820px] mt-7">{work.title}</h1>
        <p className="text-[16.5px] md:text-[18px] leading-[1.55] max-w-[560px] mt-5" style={{ opacity: .78 }}>
          <T>{cc.lede}</T>
        </p>
        <div className="case-meta">
          <div><span>Role</span><b>{m.role}</b></div>
          <div><span>Tools</span><b>{work.tag}</b></div>
          <div><span>Year</span><b>{work.year}</b></div>
          <div><span>{work.url ? "Live" : "Status"}</span>
            <b>{work.url
              ? <a href={"https://" + work.url} target="_blank" rel="noreferrer" className="case-meta-link">{work.url} ↗</a>
              : (m.status || "Live · client build")}</b>
          </div>
        </div>
      </section>

      <article className="shell">
        {sections.map((body, i) => (
          <React.Fragment key={i}>
            <div className={"case-row reveal " + (i % 2 ? "case-row-alt" : "")}>
              <div>
                <div className="mono text-[9px] tracking-[.2em] uppercase" style={{ opacity: .4 }}>{String(i + 1).padStart(2, "0")}</div>
                <h2 className="text-[24px] md:text-[27px] font-semibold tracking-[-.025em] leading-[1.2] mt-3 max-w-[280px]">{cc.heads[i]}</h2>
              </div>
              <div>
                <p className="text-[15.5px] md:text-[16.5px] leading-[1.7]" style={{ opacity: .82 }}>{body}</p>
                {cc.extra && cc.extra[i] && (
                  <p className="text-[15.5px] md:text-[16.5px] leading-[1.7] mt-5" style={{ opacity: .82 }}><T>{cc.extra[i]}</T></p>
                )}
                {i === 3 && id === "01" && (
                  <div className="mt-8"><QueryCard lines={CASE_SQL["01"]} name={CASE_SQL_NAME["01"]} /></div>
                )}
              </div>
            </div>

            {figsFor(i).map((fg) => <CaseFigure key={fg.src} fig={fg} />)}

            {false && i === 1 && (
              <div className="grid md:grid-cols-2 gap-4 mt-12 reveal">
                <SchemaCard name={id === "03" ? "fct_311_requests" : "fct_session_load"}
                  rows={id === "03"
                    ? [["request_id", "int"], ["created_at", "ts"], ["department", "text"], ["zip", "text"], ["priority", "text"], ["days_open", "int"]]
                    : [["player_id", "int"], ["session_date", "date"], ["total_distance_m", "num"], ["hsr_m", "num"], ["player_load", "num"], ["acwr", "num"]]} />
                <QueryCard lines={CASE_SQL[id] || CASE_SQL["01"]} name={CASE_SQL_NAME[id] || CASE_SQL_NAME["01"]} />
              </div>
            )}

            {id !== "01" && i === 3 && (
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 reveal">
                {m.gallery.map((g, k) => (
                  <img key={g + k} src={g} alt="" className="w-full h-[150px] md:h-[190px] object-cover object-top rounded-xl border border-ink/10" />
                ))}
              </div>
            )}
          </React.Fragment>
        ))}

        <div className="case-row reveal">
          <div><div className="mono text-[9px] tracking-[.2em] uppercase" style={{ opacity: .4 }}>Built with</div></div>
          <div className="flex flex-wrap gap-1.5">
            {(work.stack || m.tags).map((t) => <span key={t} className="chip">{t}</span>)}
          </div>
        </div>
      </article>

      <section className="shell mt-24 pb-24">
        {(() => {
          const nx = SELECTED_WORKS[((idx < 0 ? 0 : idx) + 1) % SELECTED_WORKS.length];
          const nTint = pal.cards[(SELECTED_WORKS.indexOf(nx)) % pal.cards.length];
          const nLight = nTint.fg === "light";
          return (
            <button onClick={() => go("case:" + nx.id)} className="w-full text-left rounded-[28px] p-8 md:p-12 transition-transform duration-500 hover:-translate-y-1"
                    style={{ background: nTint.bg, color: nLight ? "#fff" : "rgb(var(--c-ink))" }}>
              <div className="mono text-[9.5px] tracking-[.18em] uppercase" style={{ opacity: .6 }}>Next project</div>
              <div className="flex flex-wrap items-end justify-between gap-6 mt-4">
                <h3 className="claim text-[11vw] md:text-[54px]">{nx.title}</h3>
                <span className="mono text-[10.5px] font-semibold tracking-[.12em] uppercase px-5 py-2.5 rounded-full"
                      style={{ background: nLight ? "#fff" : "rgb(var(--c-ink))", color: nLight ? "#111" : "rgb(var(--c-paper))" }}>
                  See case study →
                </span>
              </div>
            </button>
          );
        })()}
      </section>

      <Contact4 />
    </main>
  );
}

Object.assign(window, { CaseStudy4, CASE_COPY, CASE_FIGS });
