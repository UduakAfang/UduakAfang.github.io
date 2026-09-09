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

/* PipelineFlow — a clean, connected node row that reads left-to-right on
   desktop and stacks vertically on small screens. Replaces the old
   horizontally-scrolling SVG "street": no off-screen scroll, no mascot,
   the stages themselves carry the story. */
function PipelineFlow({ stages }) {
  return (
    <div className="pipeflow" role="list">
      {stages.map((s, i) => (
        <React.Fragment key={s.k}>
          <div role="listitem" className="pipenode reveal" style={{ transitionDelay: Math.min(i, 6) * 55 + "ms" }}>
            <span className="pipenode-k mono">{s.k}</span>
            <span className="pipenode-t">{s.t}</span>
            <span className="pipenode-s mono">{s.s}</span>
          </div>
          {i < stages.length - 1 && <span className="pipearrow" aria-hidden="true" />}
        </React.Fragment>
      ))}
    </div>
  );
}

function StackPage4({ go, pal }) {
  const [active, setActive] = useStateP4(0);
  useReveal4("stack");
  useEffectP4(() => {
    const onScroll = () => {
      let cur = 0;
      STAGES4.forEach((s, i) => {
        const el = document.getElementById("s4-" + s.k);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.55) cur = i;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="grain">
      <section className="pt-32 md:pt-40 pb-12 md:pb-16 text-center px-6">
        <div className="eyebrow opacity-50">The workflow</div>
        <h1 data-fill className="claim text-[11vw] md:text-[58px] max-w-[760px] mx-auto mt-6">
          A pipeline isn't finished until someone acts on it
        </h1>
        <p className="text-[17px] leading-[1.6] max-w-[540px] mx-auto mt-6" style={{ opacity: .85 }}>
          <T>{LEDES[0]}</T>
        </p>
      </section>

      <section className="shell pb-6 md:pb-12">
        <div className="flex items-baseline justify-between gap-6 border-b border-ink/12 pb-5 mb-10 md:mb-14">
          <h2 className="claim text-[7.5vw] md:text-[30px]">Three lanes, one standard</h2>
          <span className="mono text-[9.5px] tracking-[.2em] uppercase whitespace-nowrap" style={{ opacity: .4 }}>overview</span>
        </div>
        <div className="space-y-12 md:space-y-16">
          {TRACKS4.map((t) => (
            <div key={t.id} className="reveal">
              <div className="flex items-baseline gap-3 md:gap-4 mb-2">
                <span className="mono text-[10px] tracking-[.2em] text-accent pt-0.5">{t.n}</span>
                <h3 className="text-[21px] md:text-[27px] font-black tracking-[-.04em] leading-tight">{t.claim}</h3>
              </div>
              <p className="text-[14.5px] leading-[1.6] max-w-[580px] mb-7" style={{ opacity: .7 }}>{t.note}</p>
              <PipelineFlow stages={t.stages} />
            </div>
          ))}
        </div>
      </section>

      <section className="shell py-16 md:py-24">
        <div className="flex items-baseline justify-between gap-6 border-b border-ink/12 pb-5 mb-4 md:mb-8">
          <h2 className="claim text-[7.5vw] md:text-[30px]">The canonical line, in full</h2>
          <span className="mono text-[9.5px] tracking-[.2em] uppercase whitespace-nowrap" style={{ opacity: .4 }}>seven stages</span>
        </div>
        {STAGES4.map((s, i) => (
          <div key={s.k} id={"s4-" + s.k} className="grid grid-cols-12 gap-8 scroll-mt-56 py-14 border-b border-ink/10">
            <div className="col-span-12 md:col-span-4">
              <div className={"mono text-[10px] tracking-[.24em] transition-colors duration-500 " + (i === active ? "text-accent" : "opacity-40")}>{s.k}</div>
              <h2 className="text-[32px] md:text-[42px] font-black tracking-[-.045em] leading-none mt-3">{s.t}</h2>
              <div className="mono text-[9.5px] tracking-[.18em] uppercase mt-3" style={{ opacity: .45 }}>{s.s}</div>
            </div>
            <div className="col-span-12 md:col-span-8">
              <p className="text-[17px] md:text-[19px] leading-[1.65] max-w-2xl" style={{ opacity: .82 }}>{s.d}</p>
              {i === 2 && (
                <div className="mt-8 max-w-xl">
                  <QueryCard name="models/staging/stg_gps_sessions.sql" lines={`-- staging: one row per player-session
{{ config(materialized='view') }}

select
  cast(player_id as int)     as player_id,
  cast(session_date as date) as session_date,
  nullif(total_distance,'')::numeric as total_distance_m
from {{ source('raw','gps_export') }}
where player_id is not null`} />
                </div>
              )}
              {i === 4 && (
                <div className="mt-8 grid md:grid-cols-2 gap-4 max-w-2xl">
                  <SchemaCard name="metrics.days_to_pay" rows={[["grain", "customer/month"], ["source", "fct_payments"], ["owner", "finance"], ["tests", "3"]]} />
                  <SchemaCard name="metrics.acwr" rows={[["grain", "player/day"], ["source", "fct_session_load"], ["owner", "sports sci"], ["tests", "4"]]} />
                </div>
              )}
              {i === 5 && <div className="mt-8 max-w-md"><MiniDash tilt={false} /></div>}
            </div>
          </div>
        ))}
      </section>

      <ToolsRow title="AI is part of how I build, every day" sub={LEDES[2]} />

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
