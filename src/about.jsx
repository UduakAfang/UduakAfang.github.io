/* v4 home — Abhay-architecture: centred hero, tinted full-width project cards, soon grid */

const { useState: useStateH4, useEffect: useEffectH4 } = React;

const COPY4 = {
  line1: "I build data models, pipelines",
  line2: "and the dashboards on top of them",
  blurb: "Three years on ~dbt, Databricks and Azure Data Factory~, designing the Tableau and Power BI surfaces teams decide on. Built ^TrackPerform^ and ^DrillCal^ for clients — both launched.",
  blurb2: "Three years modelling data in dbt and Databricks, and designing the Tableau and Power BI surfaces teams decide on every week.",
  role: "Analytics Engineer · Data Analyst · Business Intelligence Analyst",
};

/* Selected work reads in two groups. "Case study" was never a category —
   it's the depth of the page, so it's the link label, not a heading. */
const GROUPS4 = [
  { id: "dashboards", label: "Dashboards & analytics", note: "Civic and personal data viz \u2014 one pinned piece, then the rest of the board.", ids: ["09", "03"] },
  { id: "products", label: "AI projects, products & web apps", note: "Client builds, shipped — I own the data model and the interface.", ids: ["01", "02"] },
];

const FOCUS4 = [
  { k: "01", t: "Build and maintain data models", d: "dbt on Databricks and Azure Data Factory. Raw lands untouched, staging casts and de-duplicates, every model carries tests.",
    pop: [["dbt models", "60+"], ["tests on them", "41"], ["orchestration", "Azure DF"]] },
  { k: "02", t: "Build dashboards that guide decisions", d: "Tableau and Power BI. Built so the number a team came for is on screen before anyone touches a filter.",
    pop: [["Tableau Viz of the Day", "×2"], ["Vizzies", "Longlisted"], ["clicks to the answer", "0–1"]] },
  { k: "03", t: "Design and ship products", d: "TrackPerform and DrillCal — client builds, both launched and used by coaches to plan and read a week of training.",
    pop: [["products live", "2"], ["read time", "3 min → 3s"], ["metrics auto-mapped", "40+"]] },
];

const ABOUT_COPY = [
  "A dashboard is only as trustworthy as the pull underneath it, so I do ~both halves~ \u2014 the SQL, the models, the tests, and then the screen someone makes a decision on. Three years of that for finance, operations and commercial teams.",
  "I work as an ^analytics engineer, data analyst and BI analyst^ — and, increasingly, I build the product on top. Right now I'm most interested in the modern data stack: dbt, lakehouse architecture, and putting a real interface on the data instead of another spreadsheet.",
  "Currently at ~SessionHub~ in Lagos. I built ~TrackPerform~ and ~DrillCal~ for clients, both launched. Tableau Viz of the Day, twice, and longlisted for the Vizzies.",
  "I also write up what I break along the way \u2014 ^GitHub^ and ^LinkedIn^ are the honest record.",
];

const CARD_COPY = {
  "09": {
    kicker: "Analyst · Data viz",
    blurb: "Every African country's ~first head of state after independence~ and the one in office today, on one map. One ring per five years in power — and every mark is a ^calculated coordinate^, not a Tableau map.",
    stickers: [["108 leaders", -6, { top: "-14px", right: "18%" }], ["1 ring = 5 yrs", 7, { bottom: "-16px", left: "10%" }]],
  },
  "01": {
    kicker: "Client project · Product & Data",
    blurb: "Started as a club data-competition entry, became a product. AI reads any GPS export, maps the columns itself, and a Python service returns ~who is ready and who is overloaded~ — in ^seconds, not minutes^.",
    stickers: [["ACWR 1.34", -7, { top: "-14px", right: "16%" }], ["3 min → 3s", 6, { bottom: "-16px", right: "34%" }]],
  },
  "02": {
    kicker: "Client project · Data & Product",
    blurb: "A coaching journal: plan the next four weeks, keep every drill and video in a library that ~belongs to the coach, not the club~, and still know what you ran ^ten years later^.",
    stickers: [["7-day forecast", 5, { top: "-14px", left: "9%" }], ["120+ drills", -6, { bottom: "-16px", right: "14%" }]],
  },
  "03": {
    kicker: "Analyst · Data viz",
    blurb: "108,000 citizen service requests, 17 departments, 44 zip codes — mapped to show ~where the city actually fails its residents~. Picked as ^Tableau Viz of the Day^.",
    stickers: [["108k rows", -5, { top: "-14px", right: "22%" }], ["Viz of the Day", 7, { bottom: "-16px", left: "12%" }]],
  },
};

/* Cursor-following preview — hover a project title and its screenshot
   trails the pointer, the way the reference sites do it. */
function HoverImage({ src, className = "", children }) {
  const { useState, useRef } = React;
  const [on, setOn] = useState(false);
  const [pt, setPt] = useState({ x: 0, y: 0 });
  const raf = useRef(0);
  const move = (e) => {
    const x = e.clientX, y = e.clientY;
    if (raf.current) return;
    raf.current = requestAnimationFrame(() => { raf.current = 0; setPt({ x, y }); });
  };
  return (
    <span className={"relative inline-block " + className}
          onMouseEnter={() => setOn(true)} onMouseLeave={() => setOn(false)} onMouseMove={move}>
      {children}
      {src && (
        <span className="hover-media hidden md:block" style={{
          left: pt.x + 26, top: pt.y - 92, opacity: on ? 1 : 0,
          transform: on ? "scale(1) rotate(-2deg)" : "scale(.94) rotate(-2deg)",
        }}>
          <img src={src} alt="" style={{ width: 260, height: 176, objectFit: "cover", borderRadius: 12, border: "3px solid #fff", boxShadow: "0 30px 60px -28px rgba(0,0,0,.55)" }} />
        </span>
      )}
    </span>
  );
}

/* What a card says about itself now: what kind of thing it is, what it is made
   of, and what it demonstrates. No vanity numbers. */
function CardMeta({ work, light, compact }) {
  const stack = (work.stack || []).slice(0, 6);
  /* A visualisation says one thing about itself: it was built in Tableau, and
     here is where to go and look at it. Nothing else earns the space. */
  if (work.viz) {
    const href = work.tableauUrl || PROFILE.tableau;
    return (
      <div className="mt-5">
        <div className="pt-3.5 border-t flex flex-wrap items-center gap-x-4 gap-y-2"
             style={{ borderColor: light ? "rgba(255,255,255,.28)" : "rgb(var(--c-ink) / .18)" }}>
          <span className="mono text-[10px] font-semibold tracking-[.14em] uppercase" style={{ opacity: light ? 1 : .85 }}>Built with Tableau</span>
          <a href={href} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}
             className="mono text-[9.5px] font-semibold tracking-[.14em] uppercase underline decoration-1"
             style={{ color: light ? "#fff" : "rgb(var(--c-accent))", textUnderlineOffset: "3px" }}>View it live ↗</a>
        </div>
      </div>
    );
  }
  /* On light-fg (dark or accent) grounds the glass darkens rather than lightens,
     so 9–10px type keeps its contrast. */
  const glass = (on) => ({
    border: "1px solid " + (on ? "rgba(255,255,255,.42)" : "rgb(var(--c-ink) / .28)"),
    background: on ? "rgba(10,12,11,.3)" : "rgba(255,255,255,.55)",
    backdropFilter: "blur(6px)",
    color: on ? "#fff" : "rgb(var(--c-ink))",
  });
  const label = { opacity: light ? 1 : .8 };
  if (compact) {
    return (
      <div className="pt-3 mt-3 border-t flex flex-wrap items-center gap-1.5"
           style={{ borderColor: light ? "rgba(255,255,255,.28)" : "rgb(var(--c-ink) / .18)" }}>
        {work.category && (
          <span className="px-2.5 py-1.5 rounded-[6px] mono text-[9px] font-semibold tracking-[.12em] uppercase" style={glass(light)}>{work.category}</span>
        )}
        {stack.slice(0, 3).map((t) => (
          <span key={t} className="px-2.5 py-1.5 rounded-[6px] mono text-[9px] font-semibold tracking-[.1em] uppercase" style={glass(light)}>{t}</span>
        ))}
      </div>
    );
  }
  return (
    <div className="mt-5">
      <div className="pt-3.5 border-t" style={{ borderColor: light ? "rgba(255,255,255,.28)" : "rgb(var(--c-ink) / .18)" }}>
        <div className="mono text-[8.5px] tracking-[.2em] uppercase" style={label}>Category</div>
        {work.category && (
          <span className="inline-block mt-2.5 px-3 py-2 rounded-[6px] mono text-[10px] font-semibold tracking-[.12em] uppercase" style={glass(light)}>
            {work.category}
          </span>
        )}
      </div>
      {stack.length > 0 && (
        <div className="pt-3.5 mt-4 border-t" style={{ borderColor: light ? "rgba(255,255,255,.28)" : "rgb(var(--c-ink) / .18)" }}>
          <div className="mono text-[8.5px] tracking-[.2em] uppercase" style={label}>Tech stack</div>
          <div className="flex flex-wrap gap-1.5 mt-2.5">
            {stack.map((t) => (
              <span key={t} className="px-2.5 py-1.5 rounded-[6px] mono text-[9.5px] font-semibold tracking-[.1em] uppercase" style={glass(light)}>{t}</span>
            ))}
          </div>
        </div>
      )}
      {work.skills && (
        <div className="pt-3.5 mt-4 border-t" style={{ borderColor: light ? "rgba(255,255,255,.28)" : "rgb(var(--c-ink) / .18)" }}>
          <div className="mono text-[8.5px] tracking-[.2em] uppercase" style={label}>Skills</div>
          <div className="text-[13px] leading-[1.55] mt-2" style={{ opacity: 1 }}>{work.skills}</div>
        </div>
      )}
    </div>
  );
}

function StatTable({ stats, light }) {
  return (
    <div className="mt-9 max-w-[300px]">
      {stats.map(([k, v]) => (
        <div key={k} className="flex items-baseline justify-between gap-6 py-2.5 border-b"
             style={{ borderColor: light ? "rgba(255,255,255,.26)" : "rgb(var(--c-ink) / .16)" }}>
          <span className="text-[13.5px] font-bold tracking-tight">{k}</span>
          <span className="mono text-[12.5px] whitespace-nowrap" style={{ opacity: .8 }}>{v}</span>
        </div>
      ))}
    </div>
  );
}

function Sticker({ label, rot, pos, light }) {
  return (
    <div className="absolute hidden md:block" style={{ ...pos, transform: `rotate(${rot}deg)` }}>
      <span className="mono text-[9.5px] tracking-[.14em] uppercase px-3 py-2 rounded-lg shadow-[0_8px_20px_-10px_rgba(0,0,0,.45)]"
            style={{ background: light ? "#fff" : "rgb(var(--c-paper))", color: "rgb(var(--c-ink))" }}>
        {label}
      </span>
    </div>
  );
}

/* Product cards read like the viz board: a light cell, the shot floating in the
   middle of it, then centred title, one mono line of what it is, and the link.
   No tint, no hover takeover — the work is the only thing on the card. */
function ProjectCard({ work, tint, go, cards = "Tinted", order = 0 }) {
  const open = () => go("case:" + work.id);
  const line = (work.stack || []).slice(0, 3).join(" · ") || work.tag;
  return (
    <div className="reveal pcard-flip relative group h-full" style={{ zIndex: 10 + order, isolation: "isolate" }}>
      <div onClick={open} role="link" tabIndex="0"
           onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } }}
           className="pcard vb-cell vb-cell-link h-full flex flex-col items-center text-center cursor-pointer">
        <div className="vb-shot w-full flex items-center justify-center">
          <img src={work.image} alt={work.title} />
        </div>
        <div className="vb-foot w-full">
          <div className="text-[19px] md:text-[21px] font-semibold tracking-[-.025em]">{work.title}</div>
          <div className="mono text-[9px] tracking-[.16em] uppercase mt-2" style={{ opacity: .5 }}>{line}</div>
          <div className="mono text-[9px] tracking-[.16em] uppercase mt-2.5 vb-cta">Case study →</div>
        </div>
      </div>
    </div>
  );
}

/* Selected works, the way the reference does it: one preview stage pinned at
   the top of the section, and text rows underneath. Hovering a row brings its
   image up into the stage; the stage never moves. */
function SelectedList({ go, pal, cards = "Tinted" }) {
  const { useState } = React;
  const rows = GROUPS4.flatMap((g) => g.ids.map((id) => ({ g, w: SELECTED_WORKS.find((x) => x.id === id) }))).filter((r) => r.w);
  const [active, setActive] = useState(rows[0] ? rows[0].w.id : null);
  const tintOf = (id) => pal.cards[SELECTED_WORKS.findIndex((w) => w.id === id) % pal.cards.length];
  return (
    <div className="shell">
      <div className="relative rounded-[26px] overflow-hidden hidden md:block"
           style={{ aspectRatio: "16 / 7", background: cards === "Paper" ? "rgb(var(--c-paper2))" : (tintOf(active) || {}).bg }}>
        {rows.map(({ w }) => (
          <div key={w.id} className="absolute inset-0 flex items-center justify-center p-10 transition-all duration-[700ms]"
               style={{
                 opacity: active === w.id ? 1 : 0,
                 transform: active === w.id ? "translateY(0) scale(1)" : "translateY(18px) scale(.97)",
                 pointerEvents: "none",
               }}>
            <img src={w.image} alt="" className="max-h-full max-w-[74%] object-contain rounded-xl rotate-[-1.5deg]"
                 style={{ border: "3px solid rgba(255,255,255,.92)", boxShadow: "0 40px 80px -36px rgba(0,0,0,.55)" }} />
          </div>
        ))}
        <div className="absolute left-7 top-6 mono text-[9.5px] tracking-[.2em] uppercase" style={{ opacity: .55 }}>
          {(WORK_META[active] || {}).role || "Selected work"}
        </div>
      </div>

      <div className="mt-10 md:mt-12">
        {GROUPS4.map((g) => (
          <div key={g.id}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 pt-10 pb-4">
              <span className="mono text-[9.5px] tracking-[.2em] uppercase" style={{ opacity: .45 }}>{g.label}</span>
              <span className="mono text-[9px] tracking-[.14em] uppercase" style={{ opacity: .32 }}>{g.note}</span>
            </div>
            {g.ids.map((id) => {
              const w = SELECTED_WORKS.find((x) => x.id === id);
              if (!w) return null;
              const m = WORK_META[id] || {};
              const on = active === id;
              return (
                <button key={id} onClick={() => go("case:" + id)} onMouseEnter={() => setActive(id)} onFocus={() => setActive(id)}
                  className="w-full text-left border-t border-ink/15 py-7 md:py-8 block group">
                  <div className="grid grid-cols-12 gap-4 md:gap-8 items-baseline">
                    <div className="col-span-2 md:col-span-1 mono text-[10px] tracking-[.2em]" style={{ opacity: on ? 1 : .35, color: on ? "rgb(var(--c-accent))" : "inherit" }}>{id}</div>
                    <div className="col-span-10 md:col-span-5">
                      <h3 className="text-[30px] md:text-[42px] font-black tracking-[-.04em] leading-none transition-colors duration-300"
                          style={{ color: on ? "rgb(var(--c-accent))" : "inherit" }}>{w.title}</h3>
                      <div className="mono text-[9.5px] tracking-[.16em] uppercase mt-3" style={{ opacity: .5 }}>{w.client} · {w.year}</div>
                    </div>
                    <div className="col-span-12 md:col-span-4">
                      <p className="text-[15px] leading-[1.6] max-w-md" style={{ opacity: .75 }}>{m.outcome || w.blurb}</p>
                    </div>
                    <div className="col-span-12 md:col-span-2 md:text-right">
                      <div className="mono text-[8.5px] tracking-[.18em] uppercase" style={{ opacity: .45 }}>{w.metric.label}</div>
                      <div className="text-[24px] md:text-[28px] font-black tracking-[-.04em] mt-1">{w.metric.value}</div>
                      <div className="mono text-[9px] tracking-[.18em] uppercase mt-3 text-accent transition-opacity duration-300"
                           style={{ opacity: on ? 1 : 0 }}>See case study ↗</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        ))}
        <div className="border-t border-ink/15" />
      </div>
    </div>
  );
}

function GroupHead({ g, n }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 pt-16 md:pt-20 pb-8 border-t border-ink/15">
      <div className="flex items-baseline gap-4">
        <h3 className="text-[26px] md:text-[32px] font-black tracking-[-.045em] leading-none">{g.label}</h3>
        <span className="mono text-[10px] tracking-[.18em] uppercase" style={{ opacity: .4 }}>{n}</span>
      </div>
      <p className="mono text-[9.5px] tracking-[.13em] uppercase max-w-[420px]" style={{ opacity: .45 }}>{g.note}</p>
    </div>
  );
}

/* Hero — the reference's exact arrangement: the statement occupies the left
   two-thirds in two lines (second line greyed), and a single right column
   holds the paragraph with both buttons directly beneath it. Nothing above
   the statement, nothing pinned below it — the band comes next in flow. */
function Hero4({ go }) {
  return (
    <section className="shell pt-32 md:pt-44 pb-32 md:pb-48 md:min-h-[86svh] flex flex-col justify-center">
      <div className="grid grid-cols-12 gap-y-10 gap-x-10 md:gap-x-16 items-start">
        <h1 className="col-span-12 md:col-span-7 claim" style={{ fontSize: "clamp(34px, 5.6vw, 68px)" }}>
          {COPY4.line1}<br /><span style={{ opacity: .42 }}>{COPY4.line2}</span>
        </h1>
        <div className="col-span-12 md:col-span-5 md:pt-3">
          <p className="text-[16px] md:text-[17px] leading-[1.55] max-w-[400px]" style={{ opacity: .72 }}>
            {COPY4.blurb2}
          </p>
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <button onClick={() => go("work")}
              className="px-6 py-3.5 rounded-[5px] bg-accent text-white text-[14px] font-medium inline-flex items-center gap-2.5 hover:opacity-88 transition-opacity">
              View selected work <span className="text-[12px]">↗</span>
            </button>
            <button onClick={() => go("resume")}
              className="px-6 py-3.5 rounded-[5px] border border-ink/20 text-[14px] font-medium inline-flex items-center gap-2.5 hover:bg-ink hover:text-paper transition-colors">
              About me <span className="text-[12px]">↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* The band sits immediately under the hero, introduced by a single label row
   the way the reference introduces its rail. */
function HeroBand({ go }) {
  const t = TRACKS4[0];
  return (
    <div>
      <div className="shell flex items-baseline justify-between gap-6 pb-4">
        <div className="flex items-baseline gap-3">
          <span className="mono text-[9px] tracking-[.16em] text-accent">01</span>
          <span className="text-[19px] font-semibold tracking-[-.02em]">Analytics engineering</span>
          <span className="text-[14px] hidden sm:inline" style={{ opacity: .5 }}>source to decision</span>
        </div>
        <button onClick={() => go("stack")} className="mono text-[9px] tracking-[.16em] uppercase" style={{ opacity: .4 }}>The full workflow</button>
      </div>
      <WorkflowStreet stages={t.stages} caption="analytics engineering · one pass" />
    </div>
  );
}

/* One drawing per column: a schema, a dashboard, a shipped product.
   A file at images/illustrations/do-N.svg overrides its drawing. */
function ArtSchema() {
  const I = "rgb(var(--c-ink))", A = "rgb(var(--c-accent))", A2 = "rgb(var(--c-accent2))";
  return (
    <svg viewBox="0 0 160 120" className="h-[130px] w-full" fill="none">
      <path d="M46 34h18M46 34v34h18M64 86H46V68" stroke={I} strokeWidth="1.4" opacity=".45" />
      <g stroke={I} strokeWidth="1.5">
        <rect x="8" y="22" width="40" height="26" rx="4" fill="rgb(var(--c-paper))" />
        <rect x="8" y="56" width="40" height="26" rx="4" fill="rgb(var(--c-paper))" />
        <rect x="8" y="88" width="40" height="22" rx="4" fill="rgb(var(--c-paper))" />
        <rect x="64" y="24" width="88" height="72" rx="5" fill="rgb(var(--c-paper))" />
      </g>
      <rect x="64" y="24" width="88" height="12" rx="5" fill={I} opacity=".9" />
      <rect x="70" y="28.5" width="30" height="3" rx="1.5" fill="rgb(var(--c-paper))" opacity=".8" />
      {[0, 1, 2, 3].map((r) => (
        <g key={r}>
          <circle cx="74" cy={49 + r * 13} r="2.6" fill={r === 1 ? A : I} opacity={r === 1 ? 1 : .28} />
          <rect x="82" y={46.6 + r * 13} width={r === 3 ? 26 : 40} height="4.6" rx="2.3" fill={I} opacity=".2" />
          <rect x={r === 3 ? 112 : 126} y={46.6 + r * 13} width="18" height="4.6" rx="2.3" fill={r === 1 ? A2 : I} opacity={r === 1 ? .8 : .12} />
        </g>
      ))}
      {[0, 1, 2].map((k) => (
        <g key={k}>
          <rect x="14" y={29 + k * 32.5} width="20" height="3.4" rx="1.7" fill={I} opacity=".3" />
          <rect x="14" y={36 + k * 32.5} width="28" height="3.4" rx="1.7" fill={I} opacity=".14" />
        </g>
      ))}
    </svg>
  );
}

function ArtDashboard() {
  const I = "rgb(var(--c-ink))", A = "rgb(var(--c-accent))", A2 = "rgb(var(--c-accent2))";
  const bars = [16, 27, 21, 38, 30, 46];
  return (
    <svg viewBox="0 0 160 120" className="h-[130px] w-full" fill="none">
      <rect x="8" y="14" width="144" height="92" rx="7" fill="rgb(var(--c-paper))" stroke={I} strokeWidth="1.5" />
      <path d="M8 28h144" stroke={I} strokeWidth="1.3" opacity=".3" />
      <circle cx="17" cy="21" r="2" fill={I} opacity=".3" />
      <circle cx="24" cy="21" r="2" fill={I} opacity=".2" />
      <rect x="18" y="36" width="58" height="30" rx="4" fill={I} opacity=".05" />
      <text x="24" y="48" fontSize="7" fill={I} opacity=".45" fontFamily="var(--f-mono)" letterSpacing=".6">DAYS TO PAY</text>
      <text x="24" y="61" fontSize="15" fontWeight="700" fill={A} fontFamily="var(--f-head)">31.4</text>
      {bars.map((b, i) => (
        <rect key={i} x={88 + i * 10} y={66 - b} width="6.5" height={b} rx="2" fill={i === 5 ? A : I} opacity={i === 5 ? .9 : .2} />
      ))}
      <path d="M20 96l14-8 12 5 14-13 13 6 15-11 16 4 14-9" stroke={A2} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="132" cy="79" r="3" fill={A2} />
      <path d="M18 74h58" stroke={I} strokeWidth="1.2" opacity=".2" />
    </svg>
  );
}

function ArtProduct() {
  const I = "rgb(var(--c-ink))", A = "rgb(var(--c-accent))", A2 = "rgb(var(--c-accent2))";
  return (
    <svg viewBox="0 0 160 120" className="h-[130px] w-full" fill="none">
      <rect x="24" y="30" width="62" height="82" rx="9" fill="rgb(var(--c-paper))" stroke={I} strokeWidth="1.6" />
      <rect x="46" y="35" width="18" height="3" rx="1.5" fill={I} opacity=".3" />
      <rect x="32" y="46" width="46" height="20" rx="4" fill={I} opacity=".07" />
      <text x="37" y="55" fontSize="6.5" fill={I} opacity=".45" fontFamily="var(--f-mono)" letterSpacing=".5">SESSION LOAD</text>
      <rect x="37" y="58" width="26" height="4" rx="2" fill={A} />
      {[0, 1, 2].map((r) => (
        <g key={r}>
          <circle cx="37" cy={77 + r * 11} r="2.4" fill={r === 0 ? A2 : I} opacity={r === 0 ? .9 : .25} />
          <rect x="44" y={74.8 + r * 11} width={r === 2 ? 18 : 30} height="4.2" rx="2.1" fill={I} opacity=".18" />
        </g>
      ))}
      <g stroke={I} strokeWidth="1.5">
        <rect x="94" y="44" width="54" height="38" rx="5" fill="rgb(var(--c-paper))" />
      </g>
      <path d="M100 74l10-11 8 6 11-15 9 7" stroke={A} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="100" y="51" width="22" height="3.6" rx="1.8" fill={I} opacity=".22" />
      <g stroke={A2} strokeWidth="1.8" strokeLinecap="round">
        <path d="M120 96l5 5 9-11" />
      </g>
      <circle cx="127" cy="98" r="12" stroke={A2} strokeWidth="1.4" opacity=".4" />
    </svg>
  );
}

const DO_ART = [ArtSchema, ArtDashboard, ArtProduct];

function DoArt({ n }) {
  const { useState, useEffect } = React;
  const [ok, setOk] = useState(false);
  const src = `images/illustrations/do-${n}.svg`;
  useEffect(() => {
    const im = new Image();
    im.onload = () => setOk(true);
    im.src = src;
  }, [src]);
  const Fallback = DO_ART[n - 1] || ArtSchema;
  if (!ok) return <div className="h-[130px] flex items-center justify-center"><Fallback /></div>;
  return <img src={src} alt="" className="h-[130px] w-full object-contain" />;
}

function FocusRow() {
  return (
    <section id="what-i-do" className="shell-pad pb-4 pt-4">
      <div className="shellbox rounded-[32px] border border-ink/10 px-6 md:px-12 py-16 md:py-24" style={{ background: "rgb(var(--c-card))" }}>
        <div className="text-center">
          <span className="inline-block px-4 py-2 rounded-lg border border-ink/15 mono text-[9.5px] tracking-[.18em] uppercase"
                style={{ background: "rgb(var(--c-paper))", opacity: .8 }}>What I do</span>
          <h2 data-fill className="claim text-[8.5vw] md:text-[52px] max-w-[760px] mx-auto mt-7">Here’s what I can help you with</h2>
          <p className="text-[14px] md:text-[15px] leading-[1.65] max-w-[540px] mx-auto mt-7" style={{ opacity: .62 }}>Which is to say: I care how it looks as much as what it says. A model gets the same attention as a chart — the aesthetics and the insight are the same job, and neither one lands without the other.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mt-14">
          {FOCUS4.map((f, i) => (
            <div key={f.k} className="popwrap reveal relative rounded-[20px] border border-ink/15 p-7 md:p-8 text-center transition-colors duration-300 hover:border-ink/35"
                 style={{ transitionDelay: i * 90 + "ms" }} tabIndex="0">
              <DoArt n={i + 1} />
              <h3 className="text-[20px] md:text-[22px] font-bold tracking-[-.03em] leading-[1.2] mt-7 mx-auto max-w-[260px]">{f.t}</h3>
              <p className="text-[14.5px] leading-[1.6] mt-3 mx-auto max-w-[300px]" style={{ opacity: .7 }}>{f.d}</p>
              <div className="pop rounded-2xl p-5 border border-ink/12 shadow-[0_26px_50px_-26px_rgba(0,0,0,.4)] text-left"
                   style={{ background: "rgb(var(--c-paper))" }}>
                {f.pop.map(([k, v]) => (
                  <div key={k} className="flex items-baseline justify-between gap-4 py-2 border-b border-ink/10 last:border-0">
                    <span className="mono text-[9.5px] tracking-[.14em] uppercase" style={{ opacity: .55 }}>{k}</span>
                    <span className="mono text-[12px] font-semibold text-accent whitespace-nowrap">{v}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SelectedHead({ go }) {
  return (
    <div className="shell pt-24 md:pt-28 pb-10 flex flex-wrap items-end justify-between gap-6">
      <div>
        <div className="eyebrow" style={{ opacity: .5 }}>Three of them, in full</div>
        <h2 data-fill className="claim text-[9vw] md:text-[44px] mt-4">Selected works</h2>
      </div>
      <button onClick={() => go("work")} className="ul mono text-[10px] tracking-[.2em] uppercase" style={{ opacity: .6 }}>Full archive →</button>
    </div>
  );
}

/* The stack — statement, one paragraph, then a row of large square tiles with
   the name captioned underneath each. No buttons; the tiles are the content. */
function BuiltWith() {
  return (
    <section className="shell py-24 md:py-32">
      <h2 className="claim max-w-[900px]" style={{ fontSize: "clamp(30px, 4.4vw, 52px)" }}>
        My <span style={{ opacity: .42 }}>tech stack</span>.
      </h2>
      <p className="text-[15.5px] md:text-[16.5px] leading-[1.6] max-w-[520px] mt-6" style={{ opacity: .7 }}>
        AI is part of what I do, every day — not a novelty. These are the tools that take a
        question from a raw source table to a dashboard someone opens on Monday.
      </p>
      <div className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-10 gap-x-3 gap-y-6 mt-14 max-w-[820px]">
        {TOOLS4.map((t, i) => (
          <div key={t.name} className="reveal" style={{ transitionDelay: (i % 10) * 45 + "ms" }}>
            <div className="aspect-square rounded-[3px] border border-ink/12 flex items-center justify-center"
                 style={{ background: "rgb(var(--c-paper2))" }}>
              <ToolIcon name={t.ico} slug={t.slug} file={t.file} invert={t.invert} size={32} />
            </div>
            <div className="mono text-[7.5px] tracking-[.12em] uppercase text-center mt-2 leading-[1.35]" style={{ opacity: .55 }}>{t.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* Skills — the same flowing bars as the résumé, split into two columns. */
function SkillsHome() {
  const half = Math.ceil(SKILLS.length / 2);
  return (
    <section className="shell py-20 md:py-24">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="eyebrow" style={{ opacity: .5 }}>Skills</div>
          <h2 data-fill className="claim text-[9vw] md:text-[44px] mt-4">Where the depth is</h2>
        </div>
        <p className="mono text-[9.5px] tracking-[.14em] uppercase max-w-[320px]" style={{ opacity: .45 }}>
          Modelling and SQL carry the work. PySpark and orchestration are growing.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-x-14 gap-y-0 mt-7">
        <SkillBars items={SKILLS.slice(0, half)} />
        <SkillBars items={SKILLS.slice(half)} />
      </div>
    </section>
  );
}

/* Workflow, on the home page. Three pipelines, not one: analytics
   engineering, dashboards, products. The header is the reference's shape —
   an oversized statement with the count and the switcher on the same rule. */
function WorkflowHome({ go }) {
  const { useState } = React;
  const [i, setI] = useState(0);
  const tr = TRACKS4[i];
  return (
    <section className="pt-24 md:pt-28 pb-4">
      <div className="shell">
        <div className="flex items-baseline justify-between gap-6 pb-5 border-b border-ink/15">
          <span className="mono text-[9.5px] tracking-[.2em] uppercase" style={{ opacity: .5 }}>How I work</span>
          <span className="mono text-[9.5px] tracking-[.2em] uppercase" style={{ opacity: .35 }}>{tr.n} / 03</span>
        </div>
        <div className="grid grid-cols-12 gap-6 md:gap-10 pt-9">
          <h2 className="col-span-12 md:col-span-7 claim text-[9.5vw] md:text-[52px]">{tr.claim}</h2>
          <div className="col-span-12 md:col-span-5 md:pt-2">
            <p className="text-[15.5px] leading-[1.65] max-w-[330px]" style={{ opacity: .78 }}>{tr.note}</p>
            <button onClick={() => go("stack")} className="ul mono text-[10px] tracking-[.2em] uppercase mt-5 inline-block" style={{ opacity: .6 }}>Walk it in full →</button>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 mt-10">
          {TRACKS4.map((t, k) => (
            <button key={t.id} onClick={() => setI(k)}
              className={"px-4 py-2.5 rounded-full mono text-[9.5px] tracking-[.16em] uppercase border transition-colors " +
                (k === i ? "bg-ink text-paper border-ink" : "border-ink/18 hover:border-ink/45")}>
              <span style={{ opacity: .55 }}>{t.n}</span>&nbsp;&nbsp;{t.label}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10"><WorkflowStreet stages={tr.stages} caption={tr.label + " · one pass"} /></div>
      <div className="shell mt-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-x-6 gap-y-8">
          {tr.stages.map((st, k) => (
            <div key={st.k} className="pt-4 border-t border-ink/15">
              <div className="mono text-[9.5px] tracking-[.2em] text-accent">{st.k}</div>
              <div className="text-[17px] font-bold tracking-[-.03em] mt-2">{st.t}</div>
              <div className="mono text-[8.5px] tracking-[.14em] uppercase mt-1.5 leading-[1.5]" style={{ opacity: .45 }}>{st.s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About4() {
  return (
    <section className="shell py-24 md:py-32">
      <div className="grid grid-cols-12 gap-10 md:gap-16">
        <div className="col-span-12 md:col-span-5">
          <h2 className="claim text-[11vw] md:text-[52px]">Owning the whole line</h2>
          <div className="flip3d mt-8 w-full max-w-[300px]"><img src="images/profile.jpg" alt="Uduak Afang" data-flip="1" className="w-full rounded-xl object-cover aspect-[4/3]" /></div>
        </div>
        <div className="col-span-12 md:col-span-7 space-y-6 text-[16.5px] leading-[1.7]" style={{ opacity: .88 }}>
          {ABOUT_COPY.map((s, i) => (
            <p key={i} className={i === 3 ? "text-[14.5px]" : ""} style={i === 3 ? { opacity: .6 } : null}><T>{s}</T></p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Soon — small tinted cards, pill top-left, one line each. Lives on the
   works page now, not the homepage. */
function SoonGrid({ soft }) {
  return (
    <section className="shell pt-20 pb-24">
      <div className="eyebrow mb-8" style={{ opacity: .45 }}>Soon · in the workshop</div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SOON.map((s, i) => (
          <div key={s.title} className="reveal popwrap relative rounded-[22px] p-6 flex flex-col min-h-[230px]"
               style={{ background: soft[i % soft.length], transitionDelay: i * 80 + "ms" }} tabIndex="0">
            <div className="flex items-center justify-between gap-3">
              <span className="mono text-[8.5px] tracking-[.18em] uppercase px-2.5 py-1.5 rounded-md bg-accent text-white">Soon</span>
              <span className="mono text-[9px] tracking-[.16em] uppercase" style={{ opacity: .45 }}>{s.tag}</span>
            </div>
            <h3 className="text-[24px] font-black tracking-[-.04em] leading-[1.1] mt-6">{s.title}</h3>
            <p className="text-[14.5px] leading-[1.6] mt-3" style={{ opacity: .75 }}>{s.blurb}</p>
            <div className="mt-auto pt-6 flex items-center gap-2 mono text-[9px] tracking-[.16em] uppercase" style={{ opacity: .45 }}>
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" /> in progress
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact4({ go }) {
  return (
    <section className="pt-28 pb-20 text-center px-6">
      <h2 className="claim text-[10vw] md:text-[50px] max-w-[600px] mx-auto">Send project enquiries</h2>
      <a href={`mailto:${PROFILE.email}`}
         className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink/18 mono text-[12px] tracking-[.06em] hover:bg-ink hover:text-paper transition-colors">
        ✉ {PROFILE.email}
      </a>
      {go && (
        <div className="flex flex-wrap items-center justify-center gap-3 mt-12">
          <button onClick={() => go("work")}
            className="px-7 py-4 rounded-[4px] bg-accent text-white text-[14px] font-medium inline-flex items-center gap-2.5 hover:opacity-88 transition-opacity">
            Explore portfolio <span className="text-[12px]">↗</span>
          </button>
          <button onClick={() => go("resume")}
            className="px-7 py-4 rounded-[4px] border border-ink/20 text-[14px] font-medium inline-flex items-center gap-2.5 hover:bg-ink hover:text-paper transition-colors">
            Take a look at the résumé <span className="text-[12px]">↗</span>
          </button>
        </div>
      )}
      <div className="mono text-[9px] tracking-[.3em] text-accent mt-10" style={{ opacity: .5 }}>09</div>
    </section>
  );
}

function HomePage4({ go, pal, band, cards, heroPanel }) {
  useReveal4("home");
  return (
    <main className="grain">
      {window.__V5 && typeof Hero5 !== "undefined" ? <Hero5 go={go} panel={heroPanel} /> : <Hero4 go={go} />}
      <FocusRow />
      <SelectedHead go={go} />
      <div id="work-start" className="shell" style={{ overflowX: "clip" }}>
        {GROUPS4.map((g) => {
          const items = g.ids.map((id) => SELECTED_WORKS.find((w) => w.id === id)).filter(Boolean);
          return (
            <div key={g.id}>
              <GroupHead g={g} n={String((g.id === "dashboards" ? (window.VIZ_ITEMS || []).length : items.length)).padStart(2, "0")} />
              {g.id === "dashboards" ? <VizBoard go={go} /> : (
                <div className="grid md:grid-cols-2 gap-6 md:gap-7 items-stretch">
                  {items.map((w, k) => (
                    <ProjectCard key={w.id} work={w} tint={pal.cards[SELECTED_WORKS.indexOf(w) % pal.cards.length]} go={go} cards={cards}
                      order={SELECTED_WORKS.indexOf(w) >= 0 ? SELECTED_WORKS.indexOf(w) : k} />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <WorkBench go={go} />
      <SkillsHome />
      <BuiltWith />
      <About4 />
      <Contact4 go={go} />
      <div className="shell-pad pb-8">
        <div className="shellbox rounded-[32px] overflow-hidden border border-ink/10">
          <CircuitBand />
        </div>
      </div>
    </main>
  );
}

Object.assign(window, { HomePage4, Contact4, ProjectCard, StatTable, SoonGrid, FocusRow, BuiltWith, GroupHead, HoverImage, SkillsHome, SelectedList, WorkflowHome, COPY4, CARD_COPY, FOCUS4, GROUPS4 });
