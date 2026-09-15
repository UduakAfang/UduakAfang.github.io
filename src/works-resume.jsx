/* v4 secondary pages — workflow, archive, résumé */

const { useState: useStateP4, useEffect: useEffectP4 } = React;

const STAGES4 = [
  { k: "01", t: "Source", s: "Postgres · CSV · APIs", d: "Four systems that disagree with each other: the ERP, a GPS export, a Google Sheet somebody maintains by hand, and a payments API. Nothing lines up on customer ID, and nothing agrees on what a week is." },
  { k: "02", t: "Ingest", s: "Python · Azure DF", d: "Scheduled extracts with schema detection, so a renamed column fails loudly instead of quietly producing a wrong number." },
  { k: "03", t: "Stage", s: "dbt · tests", d: "Raw lands untouched; staging renames, casts and de-duplicates. Every model carries not-null and uniqueness tests, so a broken feed never reaches a dashboard." },
  { k: "04", t: "Lakehouse", s: "Databricks · Delta", d: "Facts and dimensions in Delta tables. Incremental where volume demands it, full refresh where clarity matters more than minutes." },
  { k: "05", t: "Semantic", s: "Metrics layer", d: "One definition of revenue, churn, days-to-pay and ACWR. When finance and ops quote a number in the same meeting, it is the same number." },
  { k: "06", t: "Surface", s: "Tableau · Power BI · app", d: "The part most pipelines treat as an afterthought. Layout, hierarchy, colour and copy get designed — an unread dashboard is a failed pipeline." },
  { k: "07", t: "Decision", s: "Monday, 9am", d: "Someone opens a screen, sees which nine accounts are at risk, and acts. That is the only success metric the stack has." },
];

const LEDES = [
  "Seven stages between a ~messy source system~ and a decision. I work across all of them \u2014 which is the whole argument for hiring ^one person^ instead of splitting the line in half.",
  "Civic and client dashboards, personal studies, and the two products I ~built end-to-end~ for clients.",
  "~Claude~ and ~Cursor~ sit inside the loop every day — scaffolding models, drafting tests, reviewing SQL. The judgement calls stay ^mine^.",
  "Not a novelty \u2014 a daily practice. The judgement calls (grain, ownership, what a metric means) are still mine. ~Everything else moves faster than it used to.~",
];

/* The workflow page: what every project has in common, then a tab per lane
   showing where the work differs — each grounded in a real project. */
const WF_COMMON = [
  { t: "Work out the decision first", d: "Before the data — I need to know the one call the screen is there to help someone make." },
  { t: "The messy data is the job", d: "The tidy file is never the hard part. The ones that agree with nothing else are." },
  { t: "The model and the design are one decision", d: "What a row means, who can see it, how it reads on screen — usually the same call, made once." },
  { t: "Not done until someone acts on it", d: "A dashboard nobody opens didn't work. The point is the decision at the other end." },
];

const WF_ROWS = [
  {
    id: "ae", tab: "Analytics engineering", claim: "Raw data in, tested models out",
    d: "The line I own end to end — landing raw data, cleaning and shaping it, and handing the dashboard something it can trust. TrackPerform is the clearest example: any coach's export in, one clean read out, with the heavy work kept off the app.",
    flow: [
      { k: "01", t: "Upload", s: "coach's raw export" },
      { k: "02", t: "Supabase Storage", s: "raw file, kept" },
      { k: "03", t: "Cloud Run · Python", s: "clean + calculate" },
      { k: "04", t: "Supabase tables", s: "clean metrics" },
      { k: "05", t: "Dashboard", s: "reads in seconds" },
    ],
  },
  {
    id: "bi", tab: "Dashboards & analysis", claim: "A question becomes a screen",
    d: "Turning a request into something a team actually opens. With NYC 311 the real work was the argument, not the data — where the city fails its residents, neighbourhood by neighbourhood. A map is an argument, not a picture. It was picked as Tableau Viz of the Day.",
    img: "images/nyc.png", cap: "NYC 311 · Tableau Viz of the Day",
  },
  {
    id: "px", tab: "Products", claim: "A problem becomes a shipped app",
    d: "When a dashboard isn't enough, I build the product around it — data model, pipeline and interface. DrillCal keeps a coach's whole library in their own account, on Postgres row-level security, so it moves with them when the club changes.",
    img: "images/drillcal/drills.png", cap: "DrillCal · the drill library",
  },
];

function StackPage4({ go, pal }) {
  const [tab, setTab] = useStateP4(0);
  useReveal4("stack");
  const row = WF_ROWS[tab];
  return (
    <main className="grain">
      <section className="pt-32 md:pt-40 pb-10 md:pb-14 text-center px-6">
        <div className="eyebrow opacity-50">The workflow</div>
        <h1 data-fill className="claim text-[11vw] md:text-[58px] max-w-[820px] mx-auto mt-6">
          How I work
        </h1>
        <p className="text-[17px] leading-[1.65] max-w-[620px] mx-auto mt-6" style={{ opacity: .85 }}>
          <T>However different the projects look, they run on the same few decisions. Here's what stays the same — and where each kind of work goes its own way.</T>
        </p>
      </section>

      <section className="shell pb-8 md:pb-12">
        <div className="flex items-baseline justify-between gap-6 border-b border-ink/12 pb-5 mb-9 md:mb-12">
          <h2 className="claim text-[7.5vw] md:text-[30px]">What stays the same</h2>
          <span className="mono text-[9.5px] tracking-[.2em] uppercase whitespace-nowrap" style={{ opacity: .4 }}>every project</span>
        </div>
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-9">
          {WF_COMMON.map((c, i) => (
            <div key={c.t} className="reveal flex gap-4" style={{ transitionDelay: i * 60 + "ms" }}>
              <span className="mono text-[11px] text-accent pt-1">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 className="text-[17px] md:text-[19px] font-bold tracking-[-.02em] leading-snug">{c.t}</h3>
                <p className="text-[14.5px] leading-[1.6] mt-2" style={{ opacity: .72 }}>{c.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="shell py-14 md:py-20">
        <div className="flex items-baseline justify-between gap-6 border-b border-ink/12 pb-5 mb-8">
          <h2 className="claim text-[7.5vw] md:text-[30px]">Where the work differs</h2>
          <span className="mono text-[9.5px] tracking-[.2em] uppercase whitespace-nowrap" style={{ opacity: .4 }}>three lanes</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-10">
          {WF_ROWS.map((r, i) => (
            <button key={r.id} onClick={() => setTab(i)}
              className={"px-4 py-2.5 rounded-full mono text-[10px] tracking-[.16em] uppercase transition-colors " +
                (i === tab ? "bg-ink text-paper" : "border border-ink/18 hover:border-ink/45")}>
              {r.tab}
            </button>
          ))}
        </div>
        {row.flow ? (
          <div>
            <h3 className="claim text-[8vw] md:text-[34px] leading-[1.08] max-w-[640px]">{row.claim}</h3>
            <p className="text-[15.5px] md:text-[16.5px] leading-[1.7] mt-5 max-w-[640px]" style={{ opacity: .82 }}>{row.d}</p>
            <div className="pipeflow mt-9">
              {row.flow.map((s, k) => (
                <React.Fragment key={s.k}>
                  <div className="pipenode">
                    <span className="pipenode-k mono">{s.k}</span>
                    <span className="pipenode-t">{s.t}</span>
                    <span className="pipenode-s mono">{s.s}</span>
                  </div>
                  {k < row.flow.length - 1 && <span className="pipearrow" aria-hidden="true" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-6">
              <h3 className="claim text-[8vw] md:text-[34px] leading-[1.08]">{row.claim}</h3>
              <p className="text-[15.5px] md:text-[16.5px] leading-[1.7] mt-5" style={{ opacity: .82 }}>{row.d}</p>
            </div>
            <figure className="md:col-span-6">
              <div className="rounded-[16px] overflow-hidden border border-ink/12" style={{ background: "rgb(var(--c-paper2))" }}>
                <img src={row.img} alt={row.cap} loading="lazy" className="w-full block" />
              </div>
              <figcaption className="mono text-[8.5px] tracking-[.18em] uppercase mt-3" style={{ opacity: .45 }}>{row.cap}</figcaption>
            </figure>
          </div>
        )}
      </section>

      <section className="shell py-16 md:py-24">
        <div className="shellbox rounded-[28px] border border-ink/12 px-7 md:px-14 py-12 md:py-16" style={{ background: "rgb(var(--c-card))" }}>
          <div className="grid md:grid-cols-3 gap-8 md:gap-6 text-center md:text-left">
            {[["2", "products shipped for clients (TrackPerform, DrillCal)"], ["×2", "Tableau Viz of the Day"], ["1", "person owning the data, the pipeline and the screen"]].map(([v, l]) => (
              <div key={l}>
                <div className="claim text-[12vw] md:text-[46px] text-accent leading-none">{v}</div>
                <div className="text-[13.5px] leading-[1.5] mt-3" style={{ opacity: .7 }}>{l}</div>
              </div>
            ))}
          </div>
          <p className="text-[16px] md:text-[18px] leading-[1.6] max-w-[680px] mt-10 md:mt-12">
            <T>The maps, the data models, the pipelines, the products — that's all one person. Analytics engineer, data analyst, BI analyst: for me they've never been ~three separate jobs~.</T>
          </p>
          <button onClick={() => go("work")} className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white text-[13.5px] font-medium hover:opacity-88 transition-opacity">
            See all my work <span className="text-[11px]">↗</span>
          </button>
        </div>
      </section>

      <Contact4 />
    </main>
  );
}

/* The works page reads by category: what I visualise, then what I ship.
   Products sit last on purpose — the dashboards are the front door. */
const WORK_GROUPS5 = [
  { id: "viz", label: "Visualisations & dashboards", note: "Civic and personal data viz — one pinned piece, then the rest of the board.", ids: ["09", "03"] },
  { id: "products", label: "End-to-end products, shipped", note: "Client builds. I own the data model, the pipeline and the interface.", ids: ["01", "02"] },
];

function WorksPage4({ go, pal, cards }) {
  useReveal4("works");
  return (
    <main className="grain">
      <section className="pt-32 md:pt-40 pb-14 text-center px-6">
        <div className="eyebrow opacity-50">Archive · {ALL_WORKS.length} projects</div>
        <h1 className="claim text-[12vw] md:text-[64px] mt-6">All work</h1>
        <p className="text-[17px] leading-[1.6] max-w-[520px] mx-auto mt-6" style={{ opacity: .85 }}>
          <T>{LEDES[1]}</T>
        </p>
      </section>

      <div className="shell">
        {WORK_GROUPS5.map((g) => {
          const items = g.ids.map((id) => SELECTED_WORKS.find((w) => w.id === id)).filter(Boolean);
          return (
            <div key={g.id}>
              <GroupHead g={g} n={String((g.id === "viz" ? (window.VIZ_ITEMS || []).length : items.length)).padStart(2, "0")} />
              {g.id === "viz" ? <VizBoard go={go} /> : (
                <div className="space-y-8 md:space-y-12">
                  {items.map((w, i) => (
                    <ProjectCard key={w.id} work={w} tint={pal.cards[(i + 2) % pal.cards.length]} go={go} cards={cards} order={i} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="pt-24" />
      <SoonGrid soft={pal.soft} />
      <Contact4 />
    </main>
  );
}

/* Printable CV — content mirrors Uduak's own résumé; laid out to match its
   design (see .cv-sheet in styles.css). Hidden on screen, shown only in print
   via the "Download résumé (PDF)" button. */
const CV = {
  name: "Uduak Afang",
  title: "Analytics Engineer · Data Analyst · Business Intelligence",
  overview: "BI analyst with 3+ years building dashboards, data models and reporting pipelines that hold up under scrutiny. Strong SQL, Power BI and Tableau, hands-on with Azure data platforms (Data Factory, Databricks), and a daily habit of using AI tools to move faster through analysis and automation. Comfortable owning a data problem end-to-end — from raw ingestion to a dashboard a non-technical stakeholder trusts — while working independently in a remote environment.",
  experience: [
    {
      role: "BI Analyst", org: "SessionHub Softswitch Limited", meta: "Lagos, Nigeria · Mar 2023 – Present",
      bullets: [
        "Designed and built the company's invoice and financial reporting data model and dashboard from scratch, consolidating scattered, untracked records into one governed, queryable system.",
        "Own data accuracy end-to-end: validate figures, document the underlying process, and cross-check before anything reaches a stakeholder or client.",
        "Use AI tools daily to accelerate analysis, debug pipeline issues, and automate recurring reporting work.",
        "Built Power BI dashboards and data models tracking customer churn and retention, gathering requirements directly from non-technical stakeholders.",
      ],
    },
    {
      role: "Data Analyst", org: "Demsco Travels & Tours", meta: "Lagos, Nigeria · Mar 2022 – Feb 2023",
      bullets: [
        "Migrated paper-based records into structured, query-ready datasets, improving data accuracy and cutting reporting time by 40%.",
        "Built daily and weekly performance scorecards used by the operations and sales leads.",
      ],
    },
  ],
  projects: [
    {
      name: "TrackPerform", tag: "Multi-Source Analytics Platform", year: "2025",
      bullets: [
        "Built a full-stack platform (React, Python/Flask, Supabase/PostgreSQL) that consolidates inconsistent multi-source data into one reporting layer, using AI tools throughout the build.",
        "Defined a KPI framework from scratch (engagement and load-risk metrics, rolling trend tracking) and built the validation checks that catch data quality issues before they reach a dashboard.",
      ],
    },
    {
      name: "DrillCal", tag: "Data Integrity & Audit Logging", year: "2025",
      bullets: [
        "Diagnosed a data integrity bug, then built pre-deletion snapshot logging and an append-only audit trail (Postgres row-level security) so records can't be silently altered.",
      ],
    },
  ],
  contact: [
    ["Phone", "+234 902-426-1252"],
    ["Email", "uduakafang@gmail.com"],
    ["Location", "Lagos, Nigeria · UTC+1 · Remote"],
    ["LinkedIn", "linkedin.com/in/uduakafang"],
  ],
  skillsTech: [
    "SQL (SQL Server, PostgreSQL, BigQuery)", "Power BI & DAX", "Tableau",
    "Data Modeling (Dimensional, Semantic Layers)", "Azure Data Factory & Databricks",
    "dbt & Spark Pipelines", "ETL / ELT Pipeline Development",
    "AI-Assisted Analytics (Claude, ChatGPT)", "Python (Pandas, Flask)",
  ],
  skillsSoft: ["Data Governance & Quality", "Requirements Gathering", "Technical Documentation", "Stakeholder Communication", "Remote Self-Direction"],
  education: { deg: "B.Sc. — University of Lagos", where: "Lagos, Nigeria" },
  achievements: [
    ["2× Tableau Viz of the Day", "Two dashboards selected for Tableau's global daily featured Viz spotlight (personal Tableau Public work)."],
    ["4× Tableau Vizzies Nominated", "Nominated across four categories at the annual Tableau Public community awards."],
  ],
  links: [["GitHub", "github.com/UduakAfang"], ["Tableau", "public.tableau.com/…"], ["Portfolio", "uduakafang.github.io"]],
};

function CVSheet() {
  return (
    <div className="cv-sheet" aria-hidden="true">
      <div className="cv-head">
        <div className="cv-name">{CV.name}</div>
        <div className="cv-title">{CV.title}</div>
      </div>
      <div className="cv-body">
        <div className="cv-main">
          <div className="cv-sec">Professional Overview</div>
          <p className="cv-overview">{CV.overview}</p>

          <div className="cv-sec">Work Experience</div>
          {CV.experience.map((e) => (
            <div key={e.org}>
              <div className="cv-role">{e.role}</div>
              <div className="cv-org">{e.org}</div>
              <div className="cv-meta">{e.meta}</div>
              <ul className="cv-list">{e.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
            </div>
          ))}

          <div className="cv-sec">Projects</div>
          {CV.projects.map((p) => (
            <div key={p.name}>
              <div className="cv-proj"><b>{p.name}</b> <i>— {p.tag}</i><span>{p.year}</span></div>
              <ul className="cv-list">{p.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
            </div>
          ))}
        </div>

        <div className="cv-side">
          <div className="cv-sec">Contact</div>
          {CV.contact.map(([k, v]) => <div key={k} className="cv-kv"><b>{k}</b><span>{v}</span></div>)}

          <div className="cv-sec">Technical Skills</div>
          {CV.skillsTech.map((s) => <div key={s} className="cv-skill">{s}</div>)}

          <div className="cv-sec">Soft Skills</div>
          {CV.skillsSoft.map((s) => <div key={s} className="cv-skill">{s}</div>)}

          <div className="cv-sec">Education</div>
          <div className="cv-org" style={{ fontSize: "11.5px" }}>{CV.education.deg}</div>
          <div className="cv-meta">{CV.education.where}</div>

          <div className="cv-sec">Achievements</div>
          {CV.achievements.map(([t, d]) => <div key={t} className="cv-ach"><b>{t}</b><p>{d}</p></div>)}

          <div className="cv-sec">Links</div>
          {CV.links.map(([k, v]) => <div key={k} className="cv-link"><b>{k}</b><span>{v}</span></div>)}
        </div>
      </div>
    </div>
  );
}

function ResumePage4({ go, pal }) {
  useReveal4("resume");
  return (
    <main className="grain resume-doc">
      <section className="pt-32 md:pt-40 pb-12 text-center px-6">
        <div className="mono text-[10px] tracking-[.16em] uppercase max-w-[560px] mx-auto" style={{ opacity: .55 }}>{COPY4.role}</div>
        <h1 className="claim text-[12vw] md:text-[64px] mt-6">Résumé</h1>
        <p className="text-[16.5px] leading-[1.65] max-w-[560px] mx-auto mt-6" style={{ opacity: .85 }}>{PROFILE.blurb}</p>
        <div className="mono text-[10.5px] tracking-[.14em] uppercase mt-7" style={{ opacity: .55 }}>
          {PROFILE.location} · {PROFILE.tz} · {PROFILE.mode}
        </div>
        <button onClick={() => window.print()}
          className="resume-dl mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-ink text-paper text-[13.5px] font-medium hover:opacity-88 transition-opacity">
          Download résumé (PDF) <span className="text-[12px]">↓</span>
        </button>
      </section>

      <section className="max-w-[820px] mx-auto px-6 md:px-10 pb-20">
        <div className="eyebrow opacity-45 mb-8">Experience</div>
        {EXPERIENCE.map((e) => (
          <div key={e.company} className="reveal py-9 border-t border-ink/12">
            <div className="mono text-[10px] tracking-[.16em] uppercase" style={{ opacity: .5 }}>{e.period}</div>
            <h3 className="text-[26px] md:text-[32px] font-black tracking-[-.04em] leading-tight mt-2">{e.role}</h3>
            <div className="mono text-[10px] tracking-[.16em] uppercase mt-2" style={{ opacity: .5 }}>{e.company} · {e.location}</div>
            <ul className="mt-6 space-y-3">
              {e.bullets.map((b, i) => (
                <li key={i} className="flex gap-3 text-[15.5px] leading-[1.65]" style={{ opacity: .82 }}>
                  <span className="text-accent mono text-[10px] pt-1.5">0{i + 1}</span><span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="rounded-[22px] p-7" style={{ background: pal.soft[0] }}>
            <div className="eyebrow opacity-45 mb-4">Education</div>
            <div className="text-[21px] font-black tracking-[-.035em]">{EDUCATION.degree} · {EDUCATION.school}</div>
            <div className="mono text-[10px] tracking-[.16em] uppercase mt-2" style={{ opacity: .5 }}>{EDUCATION.where} · {EDUCATION.year}</div>
          </div>
          <div className="rounded-[22px] p-7" style={{ background: pal.soft[1] }}>
            <div className="eyebrow opacity-45 mb-4">Recognition</div>
            <div className="space-y-2">
              {AWARDS.map((a) => (
                <div key={a.id} className="flex gap-3 text-[14.5px]" style={{ opacity: .82 }}>
                  <span className="mono text-[10px] pt-1" style={{ opacity: .5 }}>{a.year}</span><span>{a.title}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14">
          <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
            <div className="eyebrow opacity-45">Coverage</div>
            <div className="mono text-[9px] tracking-[.16em] uppercase" style={{ opacity: .35 }}>depth, not certificates</div>
          </div>
          <SkillBars items={SKILLS} />
        </div>
      </section>
      <div className="print:hidden"><Contact4 /></div>
      <CVSheet />
    </main>
  );
}

Object.assign(window, { StackPage4, WorksPage4, ResumePage4, STAGES4 });
