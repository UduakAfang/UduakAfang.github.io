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

/* The workflow page is a case-led story, not an abstract pipeline: how I
   work, shown through one real build (TrackPerform) end to end. Copy is
   condensed from the project's own case narrative; each chapter lands on a
   principle. Real product screenshots carry the evidence. */
const WORKFLOW_STORY = [
  {
    n: "01", kicker: "NYC 311 · Tableau",
    title: "I work out the decision before I touch the data",
    body: "With the NYC 311 map, the data wasn't the hard part — 108,000 service requests across seventeen departments were just sitting there. The job was working out the one thing worth showing: where the city actually fails its residents, neighbourhood by neighbourhood. A map is an argument, not a picture. Once I knew the argument, the build was simple — and it got picked as Tableau Viz of the Day.",
    principle: "If I can't say what decision a screen is for, I'm not ready to build it.",
    img: "images/nyc.png", cap: "NYC 311 · Tableau Viz of the Day",
  },
  {
    n: "02", kicker: "TrackPerform · the messy middle",
    title: "The messy data is the actual job",
    body: "TrackPerform started as a Chelsea data competition, then a trainer asked the question that made it a product: could this build itself? Every coach's GPS export was different — a week stacked into one sheet, a session with no date, one metric under four vendor names. So the app reads each file for its shape before mapping a single column, asks instead of guessing when a date is ambiguous, and shows the first seven days in a couple of seconds rather than making people wait three minutes.",
    principle: "The happy path is never the hard part. The file that matches nothing else is.",
    img: "images/trackperform/detecting-structure.png", cap: "TrackPerform · reading an unfamiliar file",
  },
  {
    n: "03", kicker: "DrillCal · own the whole thing",
    title: "The data model and the design are usually one decision",
    body: "DrillCal is a coaching journal, and the whole point is that the library belongs to the coach, not the club — change club, keep your drills. That's a data-model call as much as a design one: it sits on Postgres row-level security, so a shared team never means a shared library. When the calendar broke — a dragged session losing its duration — the fix was in the model too: keep duration as data instead of guessing it from the slot.",
    principle: "The database decision and the design decision are usually the same decision.",
    img: "images/drillcal/drills.png", cap: "DrillCal · the drill library",
  },
  {
    n: "04", kicker: "How it's wired", flow: true,
    title: "I keep the heavy work off the app",
    body: "TrackPerform is the clearest example. When you upload a file it lands in Supabase storage and stays there untouched, so the original is never lost. A Python service on Google Cloud Run picks it up, does the parsing and the maths — cleaning the noise, working out the metrics — and writes the finished numbers back into Supabase for the dashboard to read. The heavy work runs off to the side, so the app itself stays fast.",
    principle: "I keep the heavy data work separate from the app, so one never slows the other down.",
    steps: [
      { k: "01", t: "Upload", s: "coach's raw export" },
      { k: "02", t: "Supabase Storage", s: "raw file, kept" },
      { k: "03", t: "Cloud Run · Python", s: "clean + calculate" },
      { k: "04", t: "Supabase tables", s: "clean metrics" },
      { k: "05", t: "Dashboard", s: "reads in seconds" },
    ],
  },
];

function StackPage4({ go, pal }) {
  useReveal4("stack");
  return (
    <main className="grain">
      <section className="pt-32 md:pt-40 pb-10 md:pb-16 text-center px-6">
        <div className="eyebrow opacity-50">The workflow</div>
        <h1 data-fill className="claim text-[11vw] md:text-[58px] max-w-[820px] mx-auto mt-6">
          How I work
        </h1>
        <p className="text-[17px] leading-[1.65] max-w-[600px] mx-auto mt-6" style={{ opacity: .85 }}>
          <T>A few things that are true of everything I build — each one shown with the project where it mattered most, from a ~Tableau map~ to the ~products I shipped~.</T>
        </p>
      </section>

      <div className="shell space-y-20 md:space-y-32 pb-4">
        {WORKFLOW_STORY.map((c, i) => c.pull ? (
          <section key={c.n} className="reveal max-w-[860px] mx-auto text-center py-2">
            <div className="mono text-[10px] tracking-[.2em] uppercase" style={{ opacity: .5 }}><span className="text-accent">{c.n}</span> · {c.kicker}</div>
            <blockquote className="claim text-[10vw] md:text-[54px] leading-[1.04] mt-6 mb-8">
              <span className="serif-it">“{c.quote}”</span>
            </blockquote>
            <p className="text-[16px] md:text-[17.5px] leading-[1.7] max-w-[620px] mx-auto text-left" style={{ opacity: .82 }}>{c.body}</p>
            <div className="mt-8 border-l-2 border-accent pl-4 text-left max-w-[560px] mx-auto">
              <p className="text-[16px] md:text-[18px] font-semibold tracking-[-.01em] leading-snug">{c.principle}</p>
            </div>
          </section>
        ) : c.flow ? (
          <section key={c.n} className="reveal">
            <div className="max-w-[720px]">
              <div className="mono text-[10px] tracking-[.2em] uppercase" style={{ opacity: .5 }}><span className="text-accent">{c.n}</span> · {c.kicker}</div>
              <h2 className="claim text-[7.5vw] md:text-[34px] leading-[1.08] mt-3">{c.title}</h2>
              <p className="text-[15.5px] md:text-[16.5px] leading-[1.7] mt-5" style={{ opacity: .82 }}>{c.body}</p>
            </div>
            <div className="pipeflow mt-9">
              {c.steps.map((s, k) => (
                <React.Fragment key={s.k}>
                  <div className="pipenode">
                    <span className="pipenode-k mono">{s.k}</span>
                    <span className="pipenode-t">{s.t}</span>
                    <span className="pipenode-s mono">{s.s}</span>
                  </div>
                  {k < c.steps.length - 1 && <span className="pipearrow" aria-hidden="true" />}
                </React.Fragment>
              ))}
            </div>
            <div className="mt-8 border-l-2 border-accent pl-4 max-w-[560px]">
              <p className="text-[15.5px] md:text-[17px] font-semibold tracking-[-.01em] leading-snug">{c.principle}</p>
            </div>
          </section>
        ) : (
          <section key={c.n} className="grid md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className={"md:col-span-6 " + (i % 2 ? "md:order-2" : "")}>
              <div className="mono text-[10px] tracking-[.2em] uppercase" style={{ opacity: .5 }}><span className="text-accent">{c.n}</span> · {c.kicker}</div>
              <h2 className="claim text-[7.5vw] md:text-[34px] leading-[1.08] mt-3">{c.title}</h2>
              <p className="text-[15.5px] md:text-[16.5px] leading-[1.7] mt-5" style={{ opacity: .82 }}>{c.body}</p>
              <div className="mt-6 border-l-2 border-accent pl-4">
                <p className="text-[15.5px] md:text-[17px] font-semibold tracking-[-.01em] leading-snug">{c.principle}</p>
              </div>
            </div>
            <figure className={"reveal md:col-span-6 " + (i % 2 ? "md:order-1" : "")}>
              <div className="rounded-[16px] overflow-hidden border border-ink/12" style={{ background: "rgb(var(--c-paper2))" }}>
                <img src={c.img} alt={c.cap} loading="lazy" className="w-full block" />
              </div>
              <figcaption className="mono text-[8.5px] tracking-[.18em] uppercase mt-3" style={{ opacity: .45 }}>{c.cap}</figcaption>
            </figure>
          </section>
        ))}
      </div>

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
    </main>
  );
}

Object.assign(window, { StackPage4, WorksPage4, ResumePage4, STAGES4 });
