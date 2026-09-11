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
    n: "01", kicker: "How it started",
    title: "I built the whole thing by hand first",
    body: "TrackPerform started as a competition, not a company. Chelsea released a set of GPS tracking data, and I built the dashboard in Tableau — player load, an acute-versus-chronic view of training demand, a match-day calendar, a full player profile. It got shortlisted. It didn't win, but building it taught me exactly what a load dashboard needs to say, and who it's for. That was worth more than winning.",
    principle: "I don't think you can automate a screen you've never built yourself.",
    img: "images/trackperform/chelsea-tableau.png", cap: "The original Tableau build",
  },
  {
    n: "02", kicker: "Becoming a product", pull: true,
    quote: "Could this build itself?",
    body: "A trainer at a top-flight European club had seen the competition work and wanted it built around his own squad, so I built it again with his real numbers. When it was done, he asked the question that became the company. My first thought was no. But I'd built the thing twice by hand, so I knew exactly what had to happen between a raw export and a finished read. The real question was whether AI could handle the messy middle — reading a file it had never seen and working out what every column meant. It could.",
    principle: "I used AI here because the work was repetitive and there was a lot of it — not to look clever.",
  },
  {
    n: "03", kicker: "The problem",
    title: "Every file was different",
    body: "We launched to a good start — around forty coaches and sport scientists signed up. Then the files came in. No two spreadsheets were the same: some packed a whole week into one sheet split into stacked tables; others uploaded a single session with no date at all, because to them the date was obvious. Two things were quietly killing it — uploads failed on formats I hadn't planned for, and even when they worked, the read took two to three minutes to show up. People uploaded once, watched a spinner, and left.",
    principle: "The hard part was never the tidy file. It was the ones that matched nothing else.",
    img: "images/trackperform/detecting-structure.png", cap: "Reading an unfamiliar file's structure",
  },
  {
    n: "04", kicker: "The fix",
    title: "Fixing the two things that lost people",
    body: "I rebuilt the upload around one assumption: no two files agree. AI now reads the raw export and works out its shape on its own — where the data starts, which column is the date, whether the sheet is one day or a whole season in blocks. If it's a single day with no date, it stops and asks instead of guessing. If a date is ambiguous, it works out the US-versus-European format instead of quietly picking wrong. Then I dealt with the wait: the dashboard shows your first seven days in a couple of seconds and loads the rest in behind you.",
    principle: "People won't watch a spinner for three minutes, so I show the first week in seconds.",
    img: "images/trackperform/daily-metrics-dark.png", cap: "The first read, back in seconds",
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
          <T>Rather than list steps, I'll walk through one project I built — ~TrackPerform~ — from a messy spreadsheet to something coaches actually use, and the decisions I made along the way.</T>
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
            {[["40+", "metrics auto-mapped from any export"], ["3 min → 3s", "from upload to first read"], ["1", "person owned the model, pipeline and interface"]].map(([v, l]) => (
              <div key={l}>
                <div className="claim text-[12vw] md:text-[46px] text-accent leading-none">{v}</div>
                <div className="text-[13.5px] leading-[1.5] mt-3" style={{ opacity: .7 }}>{l}</div>
              </div>
            ))}
          </div>
          <p className="text-[16px] md:text-[18px] leading-[1.6] max-w-[680px] mt-10 md:mt-12">
            <T>On this project the analytics engineering, the data work and the BI were all ~one job~ — mine. That's usually how it goes when I build something: one person owns the data, the pipeline and the screen.</T>
          </p>
          <button onClick={() => go("case:01")} className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white text-[13.5px] font-medium hover:opacity-88 transition-opacity">
            Read the full TrackPerform case <span className="text-[11px]">↗</span>
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
    <main className="grain">
      <section className="pt-32 md:pt-40 pb-12 text-center px-6">
        <div className="mono text-[10px] tracking-[.16em] uppercase max-w-[560px] mx-auto" style={{ opacity: .55 }}>{COPY4.role}</div>
        <h1 className="claim text-[12vw] md:text-[64px] mt-6">Résumé</h1>
        <p className="text-[16.5px] leading-[1.65] max-w-[560px] mx-auto mt-6" style={{ opacity: .85 }}>{PROFILE.blurb}</p>
        <div className="mono text-[10.5px] tracking-[.14em] uppercase mt-7" style={{ opacity: .55 }}>
          {PROFILE.location} · {PROFILE.tz} · {PROFILE.mode}
        </div>
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
      <Contact4 />
    </main>
  );
}

Object.assign(window, { StackPage4, WorksPage4, ResumePage4, STAGES4 });
