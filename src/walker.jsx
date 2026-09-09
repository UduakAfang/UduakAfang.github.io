/* DataBand — original parallax scroll band. Three layers at different speeds,
   drawn from a load profile rather than a street scene. Simple rects + lines only. */

const { useMemo: useMemoB } = React;

function seedBars(n, seed, min, max) {
  let s = seed;
  const out = [];
  for (let i = 0; i < n; i++) {
    s = (s * 9301 + 49297) % 233280;
    out.push(min + (s / 233280) * (max - min));
  }
  return out;
}

/* Walker — side-view figure walking the baseline while the bars scroll past.
   Limbs are separate groups so CSS can swing them from hip and shoulder. */
function Walker({ x, y, scale = 1 }) {
  const S = 1.5 * scale;
  const C = "rgb(var(--c-accent))";
  const I = "rgb(var(--c-ink))";
  return (
    <g transform={`translate(${x} ${y}) scale(${S})`} className="walker">
      <g className="walk-bob">
        {/* back limbs */}
        <g className="walk-armB" style={{ transformOrigin: "0px -26px" }}>
          <path d="M-4 -26l-6 10" stroke={I} strokeWidth="4.4" strokeLinecap="round" opacity=".35" />
        </g>
        <g className="walk-legB" style={{ transformOrigin: "0px -13px" }}>
          <path d="M-3 -13l-4 10" stroke={I} strokeWidth="5" strokeLinecap="round" opacity=".35" />
          <rect x="-12" y="-3.5" width="11" height="4.5" rx="2" fill={I} opacity=".35" />
        </g>
        {/* torso */}
        <rect x="-8.5" y="-28" width="17" height="16" rx="4.5" fill={I} />
        <rect x="-5" y="-24.5" width="10" height="4" rx="2" fill={C} />
        <circle cx="0" cy="-16.5" r="1.9" fill={C} opacity=".8" />
        {/* hips */}
        <rect x="-6.5" y="-13.5" width="13" height="4" rx="2" fill={I} opacity=".8" />
        {/* head + antenna */}
        <path d="M0 -36v-4.5" stroke={I} strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="0" cy="-42" r="2.2" fill={C} />
        <rect x="-7.5" y="-36.5" width="15" height="11" rx="4" fill={I} />
        <rect x="-4.5" y="-33.5" width="9" height="4.5" rx="2.2" fill={C} />
        {/* front limbs */}
        <g className="walk-armA" style={{ transformOrigin: "0px -26px" }}>
          <path d="M4 -26l6.5 9.5" stroke={I} strokeWidth="4.6" strokeLinecap="round" />
          <circle cx="11" cy="-16" r="2.4" fill={C} />
        </g>
        <g className="walk-legA" style={{ transformOrigin: "0px -13px" }}>
          <path d="M3 -13l4.5 10" stroke={I} strokeWidth="5.2" strokeLinecap="round" />
          <rect x="2" y="-3.8" width="12" height="5" rx="2.4" fill={I} />
        </g>
      </g>
      <ellipse cx="0" cy="2.5" rx="12" ry="2" fill={I} opacity=".13" />
    </g>
  );
}

function DataBand({ height = 150 }) {
  const W = 2400;
  const far = useMemoB(() => seedBars(48, 17, 18, 96), []);
  const mid = useMemoB(() => seedBars(64, 91, 10, 112), []);

  const Far = ({ dx }) => (
    <g transform={`translate(${dx} 0)`}>
      {far.map((h, i) => (
        <rect key={i} x={i * 50} y={132 - h} width="26" height={h} rx="2" fill="rgb(var(--c-ink))" opacity=".07" />
      ))}
    </g>
  );

  const Mid = ({ dx }) => (
    <g transform={`translate(${dx} 0)`}>
      {mid.map((h, i) => {
        const spike = h > 100;
        return (
          <React.Fragment key={i}>
            <rect x={i * 37.5} y={132 - h} width="16" height={h} rx="2"
                  fill={spike ? "rgb(var(--c-accent))" : "rgb(var(--c-ink))"} opacity={spike ? .8 : .17} />
            {spike && <circle cx={i * 37.5 + 8} cy={132 - h - 9} r="3.5" fill="rgb(var(--c-accent))" />}
          </React.Fragment>
        );
      })}
    </g>
  );

  const Near = ({ dx }) => (
    <g transform={`translate(${dx} 0)`}>
      {Array.from({ length: 40 }).map((_, i) => (
        <rect key={i} x={i * 60} y="140" width="22" height="2" rx="1" fill="rgb(var(--c-ink))" opacity=".22" />
      ))}
    </g>
  );

  return (
    <div className="relative w-full overflow-hidden select-none" style={{ height }} aria-hidden="true">
      <svg viewBox={`0 0 ${W} ${height}`} preserveAspectRatio="xMidYMax slice" className="w-full h-full">
        <g className="band-far">{[0, W].map((d) => <Far key={d} dx={d} />)}</g>
        <g className="band-mid">{[0, W].map((d) => <Mid key={d} dx={d} />)}</g>
        <g className="band-near">{[0, W].map((d) => <Near key={d} dx={d} />)}</g>
        <line x1="0" y1="132" x2={W * 2} y2="132" stroke="rgb(var(--c-ink))" strokeWidth="1.5" opacity=".35" />
        <Walker x={W / 2} y={132} />
      </svg>
      <div className="absolute right-6 bottom-2 mono text-[8.5px] tracking-[.22em] uppercase whitespace-nowrap" style={{ opacity: .4 }}>
        walking the line
      </div>
    </div>
  );
}

/* SkillBars — the flowing coverage bar from v2, rebuilt: fills on scroll-in,
   accent track, note and percentage on the right. */
function SkillBars({ items = [] }) {
  return (
    <div>
      {items.map((s, i) => (
        <div key={s.name} className="reveal grid grid-cols-12 gap-4 items-center py-3.5 border-b border-ink/10"
             style={{ transitionDelay: Math.min(i, 8) * 55 + "ms" }}>
          <div className="col-span-5 sm:col-span-3">
            <div className="text-[14.5px] font-bold tracking-tight leading-tight">{s.name}</div>
          </div>
          <div className="col-span-4 sm:col-span-6">
            <div className="bar-track"><div className="bar-fill" style={{ "--w": s.pct + "%" }} /></div>
            <div className="mono text-[9px] tracking-[.14em] uppercase mt-2 hidden sm:block" style={{ opacity: .45 }}>{s.note}</div>
          </div>
          <div className="col-span-3 text-right">
            <span className="mono text-[12px] font-semibold" style={{ opacity: .7 }}>{s.pct}<span style={{ opacity: .5 }}>%</span></span>
          </div>
        </div>
      ))}
    </div>
  );
}

/* WorkflowStreet — the walker now has a reason to walk: she moves down the
   pipeline, past one building per stage. Scene loops; figure stays centred. */
const TRACKS4 = [
  {
    id: "ae", label: "Analytics engineering", n: "01",
    claim: "Raw tables in, tested models out",
    note: "The line I own end to end — sources landed, staged, tested, published.",
    stages: [
      { k: "01", t: "Source", s: "postgres · csv · api", w: 210, h: 96 },
      { k: "02", t: "Ingest", s: "azure data factory", w: 214, h: 120 },
      { k: "03", t: "Stage", s: "dbt · casts · dedupe", w: 226, h: 150 },
      { k: "04", t: "Test", s: "41 tests · ci gate", w: 210, h: 128 },
      { k: "05", t: "Lakehouse", s: "databricks · delta", w: 240, h: 162 },
      { k: "06", t: "Publish", s: "one semantic layer", w: 220, h: 106 },
    ],
  },
  {
    id: "bi", label: "Dashboards", n: "02",
    claim: "A question becomes a screen",
    note: "How a request turns into something a team actually opens on Monday.",
    stages: [
      { k: "01", t: "Question", s: "what decision?", w: 208, h: 98 },
      { k: "02", t: "Grain", s: "one row means one thing", w: 232, h: 126 },
      { k: "03", t: "Metric", s: "defined once, signed off", w: 236, h: 152 },
      { k: "04", t: "Wireframe", s: "hierarchy before colour", w: 232, h: 118 },
      { k: "05", t: "Build", s: "tableau · power bi", w: 216, h: 164 },
      { k: "06", t: "Adoption", s: "opened weekly", w: 210, h: 104 },
    ],
  },
  {
    id: "px", label: "Products", n: "03",
    claim: "From a coach's problem to a shipped app",
    note: "TrackPerform and DrillCal: the data model and the interface, same hands.",
    stages: [
      { k: "01", t: "Problem", s: "a bespoke build, every time", w: 226, h: 100 },
      { k: "02", t: "Model", s: "schema · supabase", w: 210, h: 124 },
      { k: "03", t: "Prototype", s: "claude · supabase", w: 212, h: 150 },
      { k: "04", t: "Ship", s: "in coaches' hands", w: 208, h: 120 },
      { k: "05", t: "Measure", s: "4h → 90 seconds", w: 216, h: 160 },
      { k: "06", t: "Iterate", s: "weekly, with users", w: 212, h: 104 },
    ],
  },
];

const STREET4 = [
  { k: "01", t: "Source", s: "postgres · csv · api", w: 214, h: 96 },
  { k: "02", t: "Ingest", s: "azure data factory", w: 214, h: 122 },
  { k: "03", t: "Stage", s: "dbt · 41 tests", w: 236, h: 158 },
  { k: "04", t: "Lakehouse", s: "databricks · delta", w: 248, h: 134 },
  { k: "05", t: "Semantic", s: "one definition each", w: 224, h: 108 },
  { k: "06", t: "Surface", s: "tableau · power bi", w: 240, h: 170 },
  { k: "07", t: "Decision", s: "monday, 9am", w: 214, h: 100 },
];

function Building({ x, b, base }) {
  const y = base - b.h;
  const rows = Math.max(1, Math.floor((b.h - 72) / 24));
  return (
    <g transform={`translate(${x} 0)`}>
      <rect x="0" y={y} width={b.w} height={b.h} rx="10" fill="rgb(var(--c-paper2))"
            stroke="rgb(var(--c-ink))" strokeWidth="1.5" opacity=".96" />
      <rect x="0" y={y} width={b.w} height="4" rx="2" fill="rgb(var(--c-accent))" opacity=".85" />
      <rect x="14" y={y + 15} width="30" height="17" rx="5" fill="rgb(var(--c-ink))" opacity=".08" />
      <text x="29" y={y + 27} fill="rgb(var(--c-ink))" fontSize="9.5" opacity=".6" textAnchor="middle" fontFamily="var(--f-mono)" letterSpacing="1">{b.k}</text>
      <text x="52" y={y + 28} fill="rgb(var(--c-ink))" fontSize="17" fontWeight="700" fontFamily="var(--f-head)">{b.t}</text>
      <text x="14" y={y + 50} fill="rgb(var(--c-ink))" fontSize="10" opacity=".5" fontFamily="var(--f-mono)" letterSpacing=".8">{b.s}</text>
      {Array.from({ length: rows }).map((_, r) => (
        <g key={r}>
          <circle cx="19" cy={y + 68 + r * 24} r="3" fill="rgb(var(--c-accent2))" opacity=".7" />
          <rect x="29" y={y + 64.5 + r * 24} width={Math.min(64, b.w - 90)} height="7" rx="3.5" fill="rgb(var(--c-ink))" opacity=".16" />
          <rect x={29 + Math.min(64, b.w - 90) + 8} y={y + 64.5 + r * 24} width={b.w - 50 - Math.min(64, b.w - 90)} height="7" rx="3.5" fill="rgb(var(--c-ink))" opacity=".08" />
        </g>
      ))}
    </g>
  );
}

/* Figure slot — drop a flat character illustration at images/illustrations/figure.svg
   (or .png) and it walks the line instead of the built-in robot. */
const FIGURE_SRC = "images/illustrations/figure.svg";

function useFigure() {
  const { useState, useEffect } = React;
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const im = new Image();
    im.onload = () => setOk(true);
    im.onerror = () => setOk(false);
    im.src = FIGURE_SRC;
  }, []);
  return ok;
}

/* The street is a fixed diagram — the seven stages sit still and read left to
   right. Only the figure moves, walking the whole line and starting over. */
function WorkflowStreet({ height = 300, stages = STREET4, caption = "source → decision, one pass" }) {
  const hasFigure = useFigure();
  const base = height - 54;
  let cx = 26;
  const placed = stages.map((b) => { const at = cx; cx += b.w + 44; return { at, b }; });
  const W = cx + 26;
  const roof = base - 190;
  return (
    <div className="relative w-full select-none" aria-hidden="true">
      <div className="overflow-x-auto overflow-y-hidden" style={{ WebkitOverflowScrolling: "touch" }}>
      <svg width={W} height={height} viewBox={`0 0 ${W} ${height}`} style={{ display: "block", minWidth: W }}>
        <path d={`M0 ${roof} H${W}`} stroke="rgb(var(--c-ink))" strokeWidth="1.3" strokeDasharray="3 9" opacity=".26" />
        <text x={W - 8} y={roof - 9} fill="rgb(var(--c-ink))" fontSize="10" opacity=".34" textAnchor="end" fontFamily="var(--f-mono)" letterSpacing="1.6">SCHEDULED · DAILY 06:00</text>
        {placed.map(({ at, b }, i) => (
          <React.Fragment key={b.k}>
            <Building x={at} b={b} base={base} />
            {i < placed.length - 1 && (
              <g opacity=".4">
                <path d={`M${at + b.w} ${base - 22} h44`} stroke="rgb(var(--c-accent))" strokeWidth="1.6" strokeDasharray="4 5" />
                <path d={`M${at + b.w + 34} ${base - 26} l6 4-6 4`} fill="none" stroke="rgb(var(--c-accent))" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round" />
              </g>
            )}
          </React.Fragment>
        ))}
        <line x1="0" y1={base} x2={W} y2={base} stroke="rgb(var(--c-ink))" strokeWidth="1.8" opacity=".38" />
        {Array.from({ length: Math.ceil(W / 34) }).map((_, i) => (
          <rect key={i} x={i * 34} y={base + 11} width={i % 4 === 0 ? 14 : 7} height="2.5" rx="1.25"
                fill="rgb(var(--c-ink))" opacity={i % 4 === 0 ? .3 : .15} />
        ))}
        {!hasFigure && (
          <g className="street-walk" style={{ "--walk-to": (W - 150) + "px" }}>
            <g transform={`translate(40 ${base}) scale(1.35)`}><RobotArt /></g>
          </g>
        )}
        {hasFigure && (
          <g className="street-walk" style={{ "--walk-to": (W - 130) + "px" }}>
            <g className="walk-bob">
              <image href={FIGURE_SRC} x="12" y={base - 108} width="108" height="108" preserveAspectRatio="xMidYMax meet" />
            </g>
            <ellipse cx="66" cy={base + 2} rx="26" ry="3" fill="rgb(var(--c-ink))" opacity=".12" />
          </g>
        )}
      </svg>
      </div>
      <div className="flex items-center justify-between gap-4 px-6 py-2.5 border-t border-ink/10">
        <span className="mono text-[8.5px] tracking-[.22em] uppercase" style={{ opacity: .4 }}>{caption}</span>
        <span className="mono text-[8.5px] tracking-[.22em] uppercase" style={{ opacity: .32 }}>scroll the line →</span>
      </div>
    </div>
  );
}

/* Tools row — staggered scroll-in, Pleurat's rhythm, your stack.
   Drop real logo files into images/logos/ and swap `mark` for an <img>. */
const ICO4 = {
  chart: <g><rect x="3" y="13" width="4" height="8" rx="1" /><rect x="10" y="8" width="4" height="13" rx="1" /><rect x="17" y="3" width="4" height="18" rx="1" /></g>,
  star: <g><path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" /></g>,
  wedge: <g><path d="M12 2a10 10 0 100 20 10 10 0 000-20z" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M12 12l7-5a10 10 0 00-7-3z" /></g>,
  layers: <g><path d="M12 2l9 5-9 5-9-5 9-5z" /><path d="M3 12l9 5 9-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" opacity=".5" /><path d="M3 17l9 5 9-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" opacity=".28" /></g>,
  db: <g><ellipse cx="12" cy="5.5" rx="8" ry="3.2" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M4 5.5v13c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2v-13" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M4 12c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2" fill="none" stroke="currentColor" strokeWidth="2" opacity=".5" /></g>,
  braces: <g><path d="M9 3H7a3 3 0 00-3 3v3a3 3 0 01-3 3 3 3 0 013 3v3a3 3 0 003 3h2M15 3h2a3 3 0 013 3v3a3 3 0 003 3 3 3 0 00-3 3v3a3 3 0 01-3 3h-2" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" transform="translate(0.5 0)" /></g>,
  burst: <g><circle cx="12" cy="12" r="3.2" /><path d="M12 2v4.5M12 17.5V22M2 12h4.5M17.5 12H22M5 5l3.2 3.2M15.8 15.8L19 19M19 5l-3.2 3.2M8.2 15.8L5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" /></g>,
  caret: <g><path d="M5 3l14 8.2-6.4 1.6L9.5 19 5 3z" /></g>,
  bolt: <g><path d="M13.5 2L4 13.5h6L9.5 22 20 10h-6.5L13.5 2z" /></g>,
  nodes: <g><circle cx="5" cy="6" r="2.8" /><circle cx="19" cy="12" r="2.8" /><circle cx="5" cy="18" r="2.8" /><path d="M7.6 7.2l8.8 3.8M7.6 16.8l8.8-3.8" stroke="currentColor" strokeWidth="1.8" fill="none" /></g>,
  branch: <g><circle cx="6.5" cy="5" r="2.6" /><circle cx="6.5" cy="19" r="2.6" /><circle cx="17.5" cy="8" r="2.6" /><path d="M6.5 7.6v8.8M17.5 10.6c0 4-11 2.4-11 6" fill="none" stroke="currentColor" strokeWidth="1.8" /></g>,
  stack3: <g><circle cx="8.5" cy="6" r="3.4" /><circle cx="8.5" cy="14.5" r="3.4" opacity=".62" /><circle cx="15.5" cy="6" r="3.4" opacity=".38" /><circle cx="8.5" cy="21" r="2.8" opacity=".24" /></g>,
  grid: <g><rect x="3" y="4" width="18" height="16" rx="2" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M3 9.5h18M3 15h18M9.5 4v16" stroke="currentColor" strokeWidth="1.6" fill="none" /></g>,
};

const TOOLS4 = [
  { name: "Tableau", ico: "star", file: "images/logos/tableau.png" },
  { name: "dbt", ico: "wedge", file: "images/logos/dbt.svg" },
  { name: "Databricks", ico: "layers", slug: "databricks" },
  { name: "Azure Data Factory", ico: "nodes", file: "images/logos/azure-df.svg" },
  { name: "Postgres", ico: "db", slug: "postgresql" },
  { name: "Python", ico: "braces", slug: "python" },
  { name: "Claude", ico: "burst", slug: "claude" },
  { name: "Supabase", ico: "bolt", slug: "supabase" },
  { name: "Power BI", ico: "chart" },
  { name: "GitHub", ico: "branch", slug: "github", invert: true },
  { name: "PySpark", ico: "burst", slug: "apachespark" },
  { name: "Delta Live Tables", ico: "nodes" },
  { name: "SQL", ico: "db" },
  { name: "Pandas", ico: "chart", slug: "pandas" },
  { name: "Excel", ico: "grid", file: "images/logos/excel.png" },
];

/* Brand marks in their own colours, served from the Simple Icons CDN; if one
   is missing or offline the drawn geometric mark takes over. */
function ToolIcon({ name, slug, file, invert, size = 32 }) {
  /* Solid-black marks need flipping in dark mode. */
  if (invert === undefined) invert = ["github"].includes(slug);
  const { useState } = React;
  const [failed, setFailed] = useState(false);
  if (file && !failed) {
    return <img src={file} alt="" width={size} height={size}
                onError={() => setFailed(true)} style={{ width: size, height: size, display: "block" }} />;
  }
  if (slug && !failed) {
    return <img src={`https://cdn.simpleicons.org/${slug}`} alt="" width={size} height={size} className={invert ? "ico-invert" : ""}
                onError={() => setFailed(true)} style={{ width: size, height: size, display: "block" }} />;
  }
  return <svg className="tool-ico" viewBox="0 0 24 24" fill="currentColor" style={{ width: size, height: size }}>{ICO4[name]}</svg>;
}

/* ToolsGrid — the reference arrangement: flush square tiles in a row, each
   with its mono caption underneath. */
function ToolsGrid({ tools = TOOLS4 }) {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-2 gap-y-7">
      {tools.map((t, i) => (
        <div key={t.name} className="reveal flex flex-col items-center gap-2.5" style={{ transitionDelay: (i % 6) * 55 + "ms" }}>
          <div className="w-full aspect-square flex items-center justify-center" style={{ background: "rgb(var(--c-paper2))" }}>
            <ToolIcon name={t.ico} slug={t.slug} file={t.file} invert={t.invert} size={38} />
          </div>
          <span className="mono text-[8px] tracking-[.14em] uppercase text-center leading-tight" style={{ opacity: .55 }}>{t.name}</span>
        </div>
      ))}
    </div>
  );
}

function ToolsRow({ title, sub }) {
  return (
    <section className="shell py-24 md:py-28">
      <div className="max-w-[620px]">
        <h2 className="claim text-[10vw] md:text-[46px]">{title}</h2>
        <p className="text-[16px] leading-[1.65] mt-5" style={{ opacity: .78 }}><T>{sub}</T></p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-y-10 gap-x-4 mt-16">
        {TOOLS4.map((t, i) => (
          <div key={t.name} className="reveal flex flex-col items-center gap-3" style={{ transitionDelay: (i % 6) * 60 + "ms" }}>
            <div className="tool-tile w-16 h-16 rounded-2xl bg-paper2 flex items-center justify-center font-black text-[17px]"
                 style={{ opacity: .85 }}><ToolIcon name={t.ico} slug={t.slug} file={t.file} invert={t.invert} /></div>
            <span className="mono text-[9.5px] tracking-[.14em] uppercase" style={{ opacity: .6 }}>{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

Object.assign(window, { DataBand, ToolsRow, ToolsGrid, TOOLS4, TRACKS4, Walker, ToolIcon, ICO4, WorkflowStreet, STREET4, SkillBars });
