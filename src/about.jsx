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
  { id: "dashboards", label: "Dashboards & Analytics", note: "Civic and personal data visualisations, built in Tableau.", ids: ["09", "03"] },
  { id: "products", label: "Products & Web Apps", note: "Client builds, shipped — I own the data model and the interface.", ids: ["01", "02"] },
];

const FOCUS4 = [
  { k: "01", t: "Build and maintain data models", d: "dbt on Databricks and Azure Data Factory. Raw lands untouched, staging casts and de-duplicates, every model carries tests.",
    pop: [["dbt models", "60+"], ["tests on them", "41"], ["orchestration", "Azure DF"]] },
  { k: "02", t: "Build dashboards that guide decisions", d: "Tableau and Power BI. Built so the number a team came for is on screen before anyone touches a filter.",
    pop: [["Tableau Viz of the Day", "×2"], ["Vizzies nominated", "×4"], ["clicks to the answer", "0–1"]] },
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
          <span className="mono text-[12.5px] whitespace-nowrap" style={{ opacity: .86 }}>{v}</span>
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
  const tags = (work.stack && work.stack.length
    ? work.stack
    : String(work.tag || "").split("·").map((s) => s.trim()).filter(Boolean)).slice(0, 6);
  const light = tint && tint.fg === "light";
  const cardStyle = tint
    ? { "--pc-hover": tint.bg, "--pc-hover-fg": light ? "#fff" : "rgb(var(--c-ink))" }
    : undefined;
  return (
    <div className="reveal h-full" style={{ transitionDelay: (order % 3) * 80 + "ms" }}>
      <div onClick={open} role="link" tabIndex="0"
           onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } }}
           className="pcard2" style={cardStyle}>
        <div className="pcard2-img"><img src={work.image} alt={work.title} loading="lazy" /></div>
        <div className="pcard2-body">
          <h3 className="pcard2-title">{work.title}</h3>
          <div className="pcard2-tags">{tags.map((t, i) => <span key={i} className="pcard2-tag">{t}</span>)}</div>
          <span className="pcard2-cta">Case study →</span>
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
                      <p className="text-[15px] leading-[1.6] max-w-md" style={{ opacity: .86 }}>{m.outcome || w.blurb}</p>
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
          <p className="text-[16px] md:text-[17px] leading-[1.55] max-w-[400px]" style={{ opacity: .86 }}>
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
/* Data modelling — a lineage: three raw sources flow through a dbt
   transform into one tested model. Reads as analytics engineering, not a
   generic "table". */
function ArtSchema() {
  const I = "rgb(var(--c-ink))", A = "rgb(var(--c-accent))", A2 = "rgb(var(--c-accent2))";
  return (
    <svg viewBox="0 0 200 140" className="h-[150px] w-full" fill="none">
      <g stroke={I} strokeWidth="1.4" opacity=".35" fill="none">
        <path d="M48 45 C 66 45, 68 69, 84 69" />
        <path d="M48 73 H84" />
        <path d="M48 101 C 66 101, 68 77, 84 77" />
      </g>
      <path d="M128 69 H150" stroke={A} strokeWidth="1.6" opacity=".75" />
      <path d="M145 65 l6 4 -6 4" stroke={A} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {[35, 63, 91].map((y, i) => (
        <g key={i}>
          <rect x="12" y={y} width="36" height="22" rx="6" fill="rgb(var(--c-paper))" stroke={I} strokeWidth="1.5" />
          <rect x="18" y={y + 6} width="17" height="2.6" rx="1.3" fill={I} opacity=".32" />
          <rect x="18" y={y + 12} width="24" height="2.6" rx="1.3" fill={I} opacity=".16" />
        </g>
      ))}
      <text x="30" y="130" fontSize="7" fill={I} opacity=".42" textAnchor="middle" fontFamily="var(--f-mono)" letterSpacing="1">RAW</text>
      <rect x="84" y="53" width="44" height="34" rx="9" fill={A} opacity=".1" />
      <rect x="84" y="53" width="44" height="34" rx="9" stroke={A} strokeWidth="1.6" />
      <text x="106" y="75" fontSize="13" fontWeight="800" fill={A} textAnchor="middle" fontFamily="var(--f-mono)">{"{ }"}</text>
      <text x="106" y="130" fontSize="7" fill={I} opacity=".42" textAnchor="middle" fontFamily="var(--f-mono)" letterSpacing="1">dbt</text>
      <rect x="150" y="40" width="42" height="58" rx="7" fill="rgb(var(--c-paper))" stroke={I} strokeWidth="1.6" />
      <rect x="150" y="40" width="42" height="12" rx="7" fill={I} opacity=".9" />
      <rect x="155" y="44.5" width="20" height="3" rx="1.5" fill="rgb(var(--c-paper))" opacity=".85" />
      {[0, 1, 2, 3].map((r) => (
        <g key={r}>
          <circle cx="158" cy={61 + r * 9} r="2" fill={r === 1 ? A2 : I} opacity={r === 1 ? 1 : .3} />
          <rect x="164" y={59.5 + r * 9} width={r === 3 ? 14 : 22} height="3" rx="1.5" fill={I} opacity=".18" />
        </g>
      ))}
      <text x="171" y="130" fontSize="7" fill={I} opacity=".42" textAnchor="middle" fontFamily="var(--f-mono)" letterSpacing="1">MODEL</text>
      <circle cx="187" cy="43" r="8.5" fill="rgb(var(--c-paper))" stroke={A2} strokeWidth="1.4" />
      <path d="M183 43 l3 3 5 -6" stroke={A2} strokeWidth="1.7" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Dashboards — a laid-out BI screen: KPI tile, bar comparison, trend line.
   Hierarchy first, the way a real decision surface reads. */
function ArtDashboard() {
  const I = "rgb(var(--c-ink))", A = "rgb(var(--c-accent))", A2 = "rgb(var(--c-accent2))";
  const bars = [14, 22, 18, 30, 25, 38];
  return (
    <svg viewBox="0 0 200 140" className="h-[150px] w-full" fill="none">
      <rect x="10" y="12" width="180" height="116" rx="10" fill="rgb(var(--c-paper))" stroke={I} strokeWidth="1.6" />
      <path d="M10 33 H190" stroke={I} strokeWidth="1.3" opacity=".25" />
      <circle cx="21" cy="22" r="2.2" fill={A} opacity=".75" />
      <circle cx="29" cy="22" r="2.2" fill={I} opacity=".2" />
      <rect x="150" y="18" width="30" height="7" rx="3.5" fill={I} opacity=".1" />
      <rect x="20" y="44" width="74" height="44" rx="7" fill={I} opacity=".05" />
      <text x="29" y="59" fontSize="7" fill={I} opacity=".5" fontFamily="var(--f-mono)" letterSpacing=".6">DAYS TO PAY</text>
      <text x="29" y="79" fontSize="20" fontWeight="800" fill={A} fontFamily="var(--f-head)">31.4</text>
      {bars.map((b, i) => (
        <rect key={i} x={108 + i * 13} y={88 - b} width="8" height={b} rx="2.5" fill={i === 5 ? A : I} opacity={i === 5 ? .9 : .22} />
      ))}
      <path d="M108 92 H182" stroke={I} strokeWidth="1.1" opacity=".2" />
      <path d="M22 118 l20 -10 16 5 18 -12 18 7 20 -9 22 5 24 -8" stroke={A2} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="180" cy="99" r="3" fill={A2} />
    </svg>
  );
}

/* Products — a shipped web app with a companion mobile view: a readiness
   ring on the phone, a chart on the web, a "live" dot. TrackPerform / DrillCal
   in spirit. */
function ArtProduct() {
  const I = "rgb(var(--c-ink))", A = "rgb(var(--c-accent))", A2 = "rgb(var(--c-accent2))";
  return (
    <svg viewBox="0 0 200 140" className="h-[150px] w-full" fill="none">
      <rect x="70" y="28" width="118" height="82" rx="9" fill="rgb(var(--c-paper))" stroke={I} strokeWidth="1.6" />
      <path d="M70 44 H188" stroke={I} strokeWidth="1.2" opacity=".25" />
      <circle cx="80" cy="36" r="1.8" fill={I} opacity=".3" />
      <circle cx="87" cy="36" r="1.8" fill={I} opacity=".2" />
      <rect x="100" y="33" width="60" height="6" rx="3" fill={I} opacity=".08" />
      <rect x="84" y="52" width="30" height="4" rx="2" fill={I} opacity=".22" />
      <rect x="84" y="60" width="46" height="4" rx="2" fill={I} opacity=".12" />
      <path d="M84 96 l14 -13 10 6 14 -17 12 10 16 -13" stroke={A} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="150" cy="69" r="3" fill={A} />
      <rect x="18" y="46" width="52" height="86" rx="12" fill="rgb(var(--c-paper))" stroke={I} strokeWidth="1.7" />
      <rect x="36" y="51" width="16" height="3" rx="1.5" fill={I} opacity=".25" />
      <circle cx="44" cy="79" r="15" stroke={I} strokeWidth="3" opacity=".14" fill="none" />
      <path d="M44 64 a15 15 0 0 1 12.5 23" stroke={A} strokeWidth="3" fill="none" strokeLinecap="round" />
      <text x="44" y="83" fontSize="11" fontWeight="800" fill={A} textAnchor="middle" fontFamily="var(--f-head)">1.3</text>
      {[0, 1, 2].map((r) => (
        <g key={r}>
          <circle cx="28" cy={104 + r * 8} r="1.8" fill={r === 0 ? A2 : I} opacity={r === 0 ? .9 : .25} />
          <rect x="34" y={102.5 + r * 8} width={r === 2 ? 16 : 26} height="3" rx="1.5" fill={I} opacity=".16" />
        </g>
      ))}
      <circle cx="181" cy="36" r="3" fill={A2} />
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
  if (!ok) return <div className="h-[150px] flex items-center justify-center"><Fallback /></div>;
  return <img src={src} alt="" className="h-[150px] w-full object-contain" />;
}

function FocusRow() {
  return (
    <section id="what-i-do" className="shell-pad pb-4 pt-4">
      <div className="shellbox rounded-[32px] border border-ink/10 px-6 md:px-12 py-16 md:py-24" style={{ background: "rgb(var(--c-card))" }}>
        <div className="text-center">
          <span className="inline-block px-4 py-2 rounded-lg border border-ink/15 mono text-[9.5px] tracking-[.18em] uppercase"
                style={{ background: "rgb(var(--c-paper))", opacity: .86 }}>What I do</span>
          <h2 data-fill className="claim text-[8.5vw] md:text-[52px] max-w-[760px] mx-auto mt-7">Here’s what I can help you with</h2>
          <p className="text-[14px] md:text-[15px] leading-[1.65] max-w-[540px] mx-auto mt-7" style={{ opacity: .62 }}>I care how a dashboard looks as much as what it says. The model gets the same care as the chart — to me that's one job, not two.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mt-14">
          {FOCUS4.map((f, i) => (
            <div key={f.k} className="popwrap reveal relative rounded-[20px] border border-ink/15 p-7 md:p-8 text-center transition-colors duration-300 hover:border-ink/35"
                 style={{ transitionDelay: i * 90 + "ms" }} tabIndex="0">
              <DoArt n={i + 1} />
              <h3 className="text-[20px] md:text-[22px] font-bold tracking-[-.03em] leading-[1.2] mt-7 mx-auto max-w-[260px]">{f.t}</h3>
              <p className="text-[14.5px] leading-[1.6] mt-3 mx-auto max-w-[300px]" style={{ opacity: .86 }}>{f.d}</p>
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
      <p className="text-[15.5px] md:text-[16.5px] leading-[1.6] max-w-[520px] mt-6" style={{ opacity: .86 }}>
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
            <p className="text-[15.5px] leading-[1.65] max-w-[330px]" style={{ opacity: .86 }}>{tr.note}</p>
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
            <p className="text-[14.5px] leading-[1.6] mt-3" style={{ opacity: .86 }}>{s.blurb}</p>
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
      <SelectedHead go={go} />
      <div id="work-start" className="shell" style={{ overflowX: "clip" }}>
        {GROUPS4.map((g) => {
          const items = g.ids.map((id) => SELECTED_WORKS.find((w) => w.id === id)).filter(Boolean);
          return (
            <div key={g.id}>
              <GroupHead g={g} n={String((g.id === "dashboards" ? (window.VIZ_ITEMS || []).length : items.length)).padStart(2, "0")} />
              {g.id === "dashboards" ? <VizBoard go={go} pal={pal} pinned={false} /> : (
                <div className="card-grid">
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
      <FocusRow />
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
