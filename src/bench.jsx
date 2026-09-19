/* WorkBench — the workflow as a whiteboard. Three tracks in a rail; the canvas
   holds the real flow for the selected one as coloured nodes inside labelled
   bands (bronze / silver / gold for the pipeline), with a handwritten note.
   The colour carries meaning: one hue per stage, tint inside, ink on the edge. */

const BENCH = {
  ae: {
    label: "Analytics engineering", sub: "DBT · DATABRICKS", fig: "001",
    desc: "Modelling and building pipelines",
    tech: ["dbt", "Databricks", "Kafka", "Azure Data Factory", "Spark declarative pipelines"],
    note: "bronze keeps the mistakes.\nsilver fixes them once.",
    layout: "stack",
    flow: {
      main: [
        { t: "Source systems", s: "batch or streaming", g: "▤", c: "blue" },
        { t: "Bronze", s: "land it raw, as-is", g: "◗", c: "bronze" },
        { t: "Silver", s: "conform + join into one big table", g: "◈", c: "silver" },
        { t: "Gold", s: "data marts, one per team", g: "★", c: "gold" },
        { t: "Publish", s: "semantic layer", g: "▸", c: "green" },
      ],
      edges: ["ingest", "as-is", "modelled", "served"],
      bands: [
        { from: 1, to: 1, label: "Bronze · raw", c: "bronze" },
        { from: 2, to: 2, label: "Silver · clean", c: "silver" },
        { from: 3, to: 3, label: "Gold · serve", c: "gold" },
      ],
      from: 3, back: 2, branchLabel: "a test fails",
      branch: [{ t: "Fix the model", s: "dbt", g: "✎", c: "red" }, { t: "Re-run", s: "ci gate", g: "↺", c: "red" }],
    },
    log: [
      { k: ">", t: "run analytics-engineering" },
      { k: "·", t: "bronze: kafka topics and lake files landed raw" },
      { k: "·", t: "silver: conformed and joined into one big table, 41 tests" },
      { k: "·", t: "gold: a mart per team, facts and dims off the obt" },
      { k: "✓", t: "published to the semantic layer" },
    ],
  },
  bi: {
    label: "Dashboards", sub: "TABLEAU · POWER BI", fig: "002",
    desc: "Turning models into views people decide on",
    tech: ["Tableau", "Power BI", "Figma"],
    note: "if nobody would act on it,\nit does not go on the page.",
    flow: {
      main: [
        { t: "The request", s: "what do you need to see?", g: "?", c: "indigo" },
        { t: "Define it", s: "the decision behind it", g: "≡", c: "violet" },
        { t: "Pick the encoding", s: "best way to say it", g: "◔", c: "orange" },
        { t: "Frame it", s: "figma · boxes, no numbers", g: "⌗", c: "teal" },
        { t: "In use", s: "opened weekly", g: "▸", c: "green" },
      ],
      edges: ["asked", "defined", "chosen", "built"],
      bands: [
        { from: 1, to: 2, label: "Understand, then choose", c: "violet" },
        { from: 3, to: 3, label: "Design before build", c: "teal" },
      ],
      from: 2, back: 1, branchLabel: "wrong question",
      branch: [{ t: "Ask again", s: "the user", g: "✎", c: "red" }, { t: "Re-cut the data", s: "sql", g: "↺", c: "red" }],
    },
    log: [
      { k: ">", t: "open dashboards" },
      { k: "·", t: "the request: what do you need to see, and why?" },
      { k: "·", t: "one decision per view, one definition per metric" },
      { k: "·", t: "encoding chosen, then framed in figma" },
      { k: "✓", t: "shipped — 2× tableau viz of the day" },
    ],
  },
  px: {
    label: "Products", sub: "TRACKPERFORM · DRILLCAL", fig: "003",
    desc: "Small products built around the data",
    tech: ["Supabase", "Claude", "Python"],
    note: "coaches tell you the truth\nthe first week or never.",
    flow: {
      main: [
        { t: "Talk to people", s: "coaches, in their words", g: "☎", c: "pink" },
        { t: "Problem validated", s: "same pain, three times", g: "✓", c: "violet" },
        { t: "Prototype", s: "react · supabase", g: "▤", c: "blue" },
        { t: "Test with coaches", s: "their own season", g: "◔", c: "orange" },
        { t: "Reship", s: "in production", g: "▸", c: "green" },
      ],
      edges: ["listen", "validated", "built", "notes"],
      bands: [
        { from: 1, to: 1, label: "Validate first", c: "violet" },
        { from: 2, to: 3, label: "Build, then hand it over", c: "blue" },
      ],
      from: 3, back: 2, branchLabel: "another way",
      branch: [{ t: "Work it in", s: "their words", g: "✎", c: "red" }, { t: "Re-test", s: "same coach", g: "↺", c: "red" }],
    },
    log: [
      { k: ">", t: "open products" },
      { k: "·", t: "conversations first — hard drives, whatsapp, no one place" },
      { k: "·", t: "problem validated across several coaches" },
      { k: "·", t: "prototype, tested on a real season, reshipped" },
      { k: "✓", t: "trackperform live · drillcal launched" },
    ],
  },
};

const BENCH_KEYS = ["ae", "bi", "px"];

/* One hue per stage: tint for the fill, ink for the edge and the glyph. */
const BC = {
  blue:   { t: "#d5e8fb", i: "#1971c2" },
  bronze: { t: "#f6ddc4", i: "#a9581c" },
  silver: { t: "#e5e8ea", i: "#63696f" },
  gold:   { t: "#fbeec0", i: "#a8790a" },
  green:  { t: "#cbeed5", i: "#2b8a3e" },
  indigo: { t: "#dee2ff", i: "#3b5bdb" },
  violet: { t: "#e7dbff", i: "#6741d9" },
  orange: { t: "#ffe3cc", i: "#d9480f" },
  teal:   { t: "#cdf1e7", i: "#087f5b" },
  pink:   { t: "#ffdce8", i: "#c2255c" },
  red:    { t: "#ffe0dd", i: "#c93a24" },
};

const BF = { w: 92, h: 62, stepX: 146, x0: 36, topY: 74, brY: 282, lane: 190, lane2: 228 };
const cut = (s, n) => (s.length > n ? s.slice(0, n - 1) + "\u2026" : s);

/* Wrap a title onto two lines rather than letting it run into the node edge:
   ~13 characters is what fits the 92px box at 10.5px semibold. */
const wrap2 = (s, max) => {
  if (s.length <= max) return [s];
  const w = s.split(" ");
  const out = [""];
  for (const word of w) {
    const line = out[out.length - 1];
    if (!line) out[out.length - 1] = word;
    else if ((line + " " + word).length <= max) out[out.length - 1] = line + " " + word;
    else out.push(word);
  }
  return out.slice(0, 2);
};

function FlowNode({ n, x, y }) {
  const { w: W, h: H } = BF, cx = x + W / 2;
  const c = BC[n.c] || BC.silver;
  const lines = wrap2(n.t, 13);
  return (
    <g>
      {/* offset plate — the hand-drawn double edge */}
      <rect x={x + 3} y={y + 4} width={W} height={H} rx="13" fill={c.i} opacity=".14" />
      <rect x={x} y={y} width={W} height={H} rx="13" fill={c.t} stroke={c.i} strokeWidth="1.5" />
      <text x={cx} y={y + 25} textAnchor="middle" fontSize="16" fontFamily="var(--f-mono)" fill={c.i}>{n.g}</text>
      {lines.map((ln, i) => (
        <text key={i} x={cx} y={y + (lines.length > 1 ? 42 : 47) + i * 12} textAnchor="middle" fontSize="10.5"
              fontWeight="600" fontFamily="var(--f-body)" fill="#23211c">{ln}</text>
      ))}
      <text x={cx} y={y + H + 15} textAnchor="middle" fontSize="8" fontFamily="var(--f-mono)" letterSpacing=".7" fill="#8b8f8b">{cut(n.s, 26).toUpperCase()}</text>
    </g>
  );
}

const bpath = (d, dash, col) => <path d={d} stroke={col || "#b9bdb9"} strokeWidth="1.3" fill="none" strokeDasharray={dash ? "5 5" : undefined} />;
const bhead = (x, y, dir, col) => {
  const p = dir === "down" ? `M${x - 3.5} ${y - 4} l3.5 4 3.5 -4`
    : dir === "up" ? `M${x - 3.5} ${y + 4} l3.5 -4 3.5 4`
    : dir === "left" ? `M${x + 4} ${y - 3.5} l-4 3.5 4 3.5`
    : `M${x - 4} ${y - 3.5} l4 3.5 -4 3.5`;
  return <path d={p} stroke={col || "#b9bdb9"} strokeWidth="1.3" fill="none" strokeLinejoin="round" strokeLinecap="round" />;
};

/* The medallion stack — each layer is its own row, and the row shows what is
   actually in it: raw tables landed as-is, conformed dims and facts joined and
   tested, then everything flattened into one big table and published. */
const SF = { w: 96, h: 60, nx: 132, bx: 108, bw: 604, rows: [116, 236, 356], srcY: 8, pubX: 592 };

/* Batch lands in a lake, so it is drawn as one: a stacked cylinder. */
function Lake({ x, y, w, h, c }) {
  const ry = 6, top = y + ry;
  return (
    <g>
      <path d={`M${x} ${top} v${h - ry * 2} a${w / 2} ${ry} 0 0 0 ${w} 0 V${top}`} fill="#fff" stroke={c.i} strokeWidth="1.2" />
      <ellipse cx={x + w / 2} cy={top} rx={w / 2} ry={ry} fill={c.t} stroke={c.i} strokeWidth="1.2" />
      {[0.42, 0.68].map((r, i) => (
        <path key={i} d={`M${x} ${y + h * r} a${w / 2} ${ry} 0 0 0 ${w} 0`} fill="none" stroke={c.i} strokeOpacity=".35" strokeWidth="1" />
      ))}
    </g>
  );
}

/* A folder, for the files that show up in it. */
function Folder({ x, y, w, h, c }) {
  return (
    <g>
      <path d={`M${x} ${y + 5} a3 3 0 0 1 3 -3 h${w * 0.34} l4 5 h${w * 0.6 - 7} a3 3 0 0 1 3 3 v${h - 8} a3 3 0 0 1 -3 3 H${x + 3} a3 3 0 0 1 -3 -3 Z`}
            fill="#fff" stroke={c.i} strokeWidth="1.2" />
      <path d={`M${x} ${y + 14} H${x + w}`} stroke={c.i} strokeWidth="1.1" />
      <rect x={x + 0.6} y={y + 6} width={w - 1.2} height="7.8" fill={c.t} />
    </g>
  );
}

/* Streaming: a broker with topics running out of it as partition bars. */
function Stream({ x, y, c }) {
  return (
    <g>
      <rect x={x} y={y + 4} width="20" height="30" rx="4" fill={c.t} stroke={c.i} strokeWidth="1.2" />
      {[0, 1, 2].map((i) => <path key={i} d={`M${x + 5} ${y + 12 + i * 7} h10`} stroke={c.i} strokeWidth="1.1" />)}
      {[0, 1, 2].map((i) => (
        <g key={"t" + i}>
          {bpath(`M${x + 20} ${y + 19} H${x + 30} V${y + 8 + i * 11} H${x + 38}`, 0, c.i)}
          <rect x={x + 38} y={y + 3 + i * 11} width={54 - i * 8} height="10" rx="5" fill="#fff" stroke={c.i} strokeWidth="1.1" />
          <rect x={x + 39.5} y={y + 4.4 + i * 11} width={(54 - i * 8) * 0.55} height="7.2" rx="3.6" fill={c.t} />
        </g>
      ))}
    </g>
  );
}

function Tbl({ x, y, w, h, c, label, rot }) {
  const rows = [0.42, 0.62, 0.82];
  return (
    <g transform={rot ? `rotate(${rot} ${x + w / 2} ${y + h / 2})` : undefined}>
      <rect x={x} y={y} width={w} height={h} rx="3" fill="#fff" stroke={c.i} strokeWidth="1.2" />
      <path d={`M${x} ${y + 9} H${x + w}`} stroke={c.i} strokeWidth="1.2" />
      <rect x={x + 0.6} y={y + 0.6} width={w - 1.2} height="8.4" fill={c.t} />
      {rows.map((r, i) => <path key={i} d={`M${x + 5} ${y + h * r} H${x + w - 5}`} stroke={c.i} strokeOpacity=".4" strokeWidth="1" />)}
      {label && <text x={x + w / 2} y={y + h + 11} textAnchor="middle" fontSize="8" fontFamily="var(--f-mono)" letterSpacing=".08em" fill="#8b8f8b">{label}</text>}
    </g>
  );
}

function StackNode({ n, x, y, w, h }) {
  const c = BC[n.c] || BC.silver, W = w || SF.w, H = h || SF.h, cx = x + W / 2;
  return (
    <g>
      <rect x={x + 3} y={y + 4} width={W} height={H} rx="13" fill={c.i} opacity=".14" />
      <rect x={x} y={y} width={W} height={H} rx="13" fill={c.t} stroke={c.i} strokeWidth="1.5" />
      <text x={cx} y={y + 26} textAnchor="middle" fontSize="17" fontFamily="var(--f-mono)" fill={c.i}>{n.g}</text>
      <text x={cx} y={y + 45} textAnchor="middle" fontSize="11" fontWeight="600" fontFamily="var(--f-body)" fill="#23211c">{n.t}</text>
    </g>
  );
}

function StackCanvas({ d }) {
  const f = d.flow, S = SF, red = BC.red.i;
  const layers = f.main.slice(1, 4), src = f.main[0], pub = f.main[4];
  const cy = (i) => S.rows[i] + S.h / 2;
  const cB = BC.bronze, cS = BC.silver, cG = BC.gold;
  const midX = S.nx + S.w / 2;
  return (
    <div className="bench-flow">
      <div className="bench-bar2">
        <span className="bench-btn">↶</span><span className="bench-btn">↷</span>
        <span className="bench-pill"><i></i>{d.label}</span>
        <span className="bench-pill" style={{ opacity: .65 }}>FIG. {d.fig}</span>
      </div>
      <svg viewBox="0 0 730 494" preserveAspectRatio="xMidYMid meet" style={{ display: "block", width: "100%", height: "auto", flex: "1 1 auto", minHeight: 0 }}>
        {/* source systems — the inputs, before any layer owns them */}
        <text x={S.bx} y={S.srcY + 22} fontSize="8.5" fontFamily="var(--f-mono)" letterSpacing=".14em" fill={BC.blue.i}>SOURCE SYSTEMS</text>
        <text x={S.bx} y={S.srcY + 38} fontSize="8" fontFamily="var(--f-mono)" letterSpacing=".12em" fill="#8b8f8b">BATCH OR STREAMING</text>
        <Folder x={226} y={S.srcY + 4} w={34} h={30} c={BC.blue} />
        {bpath(`M262 ${S.srcY + 20} H274`, 0, BC.blue.i)}
        <Lake x={278} y={S.srcY + 2} w={38} h={36} c={BC.blue} />
        <text x={226} y={S.srcY + 52} fontSize="8" fontFamily="var(--f-mono)" letterSpacing=".12em" fill={BC.blue.i}>BATCH · FILES → LAKE</text>
        <Stream x={382} y={S.srcY + 2} c={BC.blue} />
        <text x={382} y={S.srcY + 52} fontSize="8" fontFamily="var(--f-mono)" letterSpacing=".12em" fill={BC.blue.i}>STREAM · KAFKA TOPICS</text>
        {bpath(`M${midX} ${S.srcY + 52} V${S.rows[0] - 10}`)}{bhead(midX, S.rows[0] - 8, "down")}

        {/* one band per layer */}
        {layers.map((n, i) => {
          const c = BC[n.c] || BC.silver;
          return (
            <g key={"bd" + i}>
              <rect x={S.bx} y={S.rows[i] - 24} width={S.bw} height={S.h + (i === 2 ? 96 : 48)} rx="16" fill={c.t} opacity=".3"
                    stroke={c.i} strokeOpacity=".45" strokeWidth="1.1" strokeDasharray="6 5" />
              <text x={S.bx + 14} y={S.rows[i] - 10} fontSize="8.5" fontFamily="var(--f-mono)" letterSpacing=".14em" fill={c.i}>
                {("layer 0" + (i + 1) + " · " + n.s).toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* bronze: the same tables, landed untouched */}
        <Folder x={250} y={S.rows[0] + 14} w={34} h={30} c={cB} />
        <text x={267} y={S.rows[0] + 58} textAnchor="middle" fontSize="8" fontFamily="var(--f-mono)" letterSpacing=".08em" fill="#8b8f8b">AS LANDED</text>
        {bpath(`M288 ${cy(0)} H302`, 0, cB.i)}
        {["orders_raw", "events_raw", "billing_raw"].map((t, i) => (
          <Tbl key={t} x={308 + i * 82} y={S.rows[0] + 8} w={58} h={38} c={cB} label={t.toUpperCase()} rot={i % 2 ? 1.2 : -1.1} />
        ))}
        <text x={568} y={cy(0) + 4} fontSize="16" fontFamily="Caveat, cursive" fill={cB.i}>copied, not corrected</text>

        {/* silver: conformed dims and facts, joined and tested */}
        {[0, 1, 2].map((i) => (
          <g key={"sj" + i}>
            <Tbl x={248} y={S.rows[1] - 2 + i * 22} w={44} h={18} c={cS} />
            {bpath(`M294 ${S.rows[1] + 7 + i * 22} H310 V${cy(1)}`, 0, cS.i)}
            <circle cx={296} cy={S.rows[1] + 7 + i * 22} r="2.2" fill="#fff" stroke={cS.i} strokeWidth="1.1" />
          </g>
        ))}
        {/* the join itself, drawn as an inner join */}
        <g>
          <circle cx={324} cy={cy(1)} r="9" fill="#fff" stroke={cS.i} strokeWidth="1.2" />
          <circle cx={334} cy={cy(1)} r="9" fill="#fff" stroke={cS.i} strokeWidth="1.2" />
          <path d={`M329 ${cy(1) - 7.5} a9 9 0 0 0 0 15 a9 9 0 0 0 0 -15`} fill={cS.t} stroke={cS.i} strokeWidth="1.2" />
        </g>
        {bpath(`M344 ${cy(1)} H352`, 0, cS.i)}{bhead(354, cy(1), "right", cS.i)}
        <text x={248} y={S.rows[1] + 76} fontSize="8" fontFamily="var(--f-mono)" letterSpacing=".1em" fill={cS.i}>CONFORMED TABLES</text>
        <text x={329} y={S.rows[1] + 76} textAnchor="middle" fontSize="8" fontFamily="var(--f-mono)" letterSpacing=".1em" fill={cS.i}>JOIN</text>
        <Tbl x={360} y={S.rows[1] + 6} w={152} h={44} c={cS} label="OBT · ONE BIG TABLE" />
        {/* the tests that gate it */}
        <g>
          <circle cx={528} cy={cy(1) - 7} r="7.5" fill={BC.green.t} stroke={BC.green.i} strokeWidth="1.2" />
          <path d={`M524.5 ${cy(1) - 7} l2.6 2.8 l4.6 -5`} fill="none" stroke={BC.green.i} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <text x={542} y={cy(1) - 3} fontSize="15.5" fontFamily="Caveat, cursive" fill={cS.i}>41 tests pass,</text>
        <text x={542} y={cy(1) + 14} fontSize="15.5" fontFamily="Caveat, cursive" fill={cS.i}>joined on keys · dbt</text>

        {/* gold: flattened into one big table */}
        {/* one mart per team, each a fact with its dims, cut from the obt above */}
        {["finance", "ops", "commercial"].map((t, i) => {
          const mx = 248 + i * 108;
          return (
            <g key={t}>
              <rect x={mx} y={S.rows[2] - 6} width={96} height={94} rx="10" fill="#fff" stroke={cG.i} strokeOpacity=".5" strokeWidth="1.1" />
              <path d={`M${mx + 11} ${S.rows[2] + 3} l1.9 3.9 l4.3 .6 l-3.1 3 l.7 4.2 l-3.8 -2 l-3.8 2 l.7 -4.2 l-3.1 -3 l4.3 -.6 Z`} fill={cG.t} stroke={cG.i} strokeWidth="1" />
              <text x={mx + 22} y={S.rows[2] + 9} fontSize="8" fontFamily="var(--f-mono)" letterSpacing=".08em" fill={cG.i}>{t.toUpperCase()}</text>
              <Tbl x={mx + 24} y={S.rows[2] + 14} w={48} h={30} c={cG} />
              {[0, 1].map((k) => (
                <g key={k}>
                  {bpath(`M${mx + 20 + k * 56} ${S.rows[2] + 62} V${S.rows[2] + 48} H${mx + 40 + k * 14}`, 0, cG.i)}
                  <rect x={mx + 2 + k * 56} y={S.rows[2] + 62} width={36} height={19} rx="3" fill={cG.t} stroke={cG.i} strokeWidth="1" />
                  <text x={mx + 20 + k * 56} y={S.rows[2] + 75} textAnchor="middle" fontSize="8" fontFamily="var(--f-mono)" fill={cG.i}>DIM</text>
                </g>
              ))}
              <text x={mx + 48} y={S.rows[2] + 37} textAnchor="middle" fontSize="8" fontFamily="var(--f-mono)" fill={cG.i}>FCT</text>
            </g>
          );
        })}
        <text x={248} y={S.rows[2] + 102} fontSize="8" fontFamily="var(--f-mono)" letterSpacing=".14em" fill="#8b8f8b">DATA MARTS · CUT FROM THE OBT · SAME NUMBERS, EVERY TEAM</text>
        {bpath(`M572 ${cy(2)} H${S.pubX - 10}`)}{bhead(S.pubX - 8, cy(2), "right")}

        {/* down the column, and the loop back when a test fails */}
        {[0, 1].map((i) => (
          <g key={"dn" + i}>
            {bpath(`M${midX} ${S.rows[i] + S.h} V${S.rows[i + 1] - 10}`)}{bhead(midX, S.rows[i + 1] - 8, "down")}
          </g>
        ))}
        {bpath(`M${S.nx} ${cy(1) + 12} H${S.bx - 22} V${cy(0) + 12} H${S.nx - 10}`, 1, red)}{bhead(S.nx - 8, cy(0) + 12, "right", red)}
        <text x={S.bx - 26} y={cy(0) + 40} fontSize="8" fontFamily="var(--f-mono)" letterSpacing=".1em" fill={red} transform={`rotate(-90 ${S.bx - 26} ${cy(0) + 40})`}>{f.branchLabel.toUpperCase()} · FIX + RE-RUN</text>

        {layers.map((n, i) => <StackNode key={i} n={n} x={S.nx} y={S.rows[i]} />)}
        <StackNode n={pub} x={S.pubX} y={S.rows[2]} />
        <g>
          <rect x={S.pubX + 18} y={S.rows[2] + S.h + 8} width={60} height={34} rx="4" fill="#fff" stroke={BC.green.i} strokeWidth="1.2" />
          <path d={`M${S.pubX + 18} ${S.rows[2] + S.h + 16} H${S.pubX + 78}`} stroke={BC.green.i} strokeWidth="1.1" />
          <rect x={S.pubX + 18.6} y={S.rows[2] + S.h + 8.6} width={58.8} height="6.8" fill={BC.green.t} />
          {[10, 16, 22].map((hh, i) => (
            <rect key={i} x={S.pubX + 24 + i * 13} y={S.rows[2] + S.h + 38 - hh} width="8" height={hh - 2} rx="1.5" fill={BC.green.t} stroke={BC.green.i} strokeWidth="1" />
          ))}
        </g>
        <text x={S.pubX + S.w / 2} y={S.rows[2] + S.h + 56} textAnchor="middle" fontSize="8" fontFamily="var(--f-mono)" letterSpacing=".7" fill="#8b8f8b">{pub.s.toUpperCase()}</text>

        <text x={510} y={S.srcY + 24} fontSize="15.5" fontFamily="Caveat, cursive" fill={BC.blue.i}>kafka or an http request —</text>
        <text x={510} y={S.srcY + 41} fontSize="15.5" fontFamily="Caveat, cursive" fill={BC.blue.i}>whatever they already run on</text>
      </svg>
    </div>
  );
}

function BenchCanvas({ d }) {
  if (d.layout === "stack") return <StackCanvas d={d} />;
  const f = d.flow, { w: W, h: H, stepX, x0, topY, brY, lane, lane2 } = BF;
  const X = (i) => x0 + i * stepX;
  const cy = topY + H / 2, brcy = brY + H / 2;
  const bn = (k) => X(f.from) - k * stepX;          /* the loop runs back the way it came */
  const b0 = bn(0), b1 = bn(f.branch.length - 1);
  const mgR = X(f.from) + W + 44, mgL = X(f.back) - 44;
  const red = BC.red.i;
  return (
    <div className="bench-flow">
      <div className="bench-bar2">
        <span className="bench-btn">↶</span><span className="bench-btn">↷</span>
        <span className="bench-pill"><i></i>{d.label}</span>
        <span className="bench-pill" style={{ opacity: .65 }}>FIG. {d.fig}</span>
      </div>
      <svg viewBox="0 0 730 476" preserveAspectRatio="xMidYMid meet" style={{ display: "block", width: "100%", height: "auto", flex: "1 1 auto", minHeight: 0 }}>
        {/* stage bands — the layer a node belongs to, named */}
        {(f.bands || []).map((bd, i) => {
          const c = BC[bd.c] || BC.silver;
          const bx = X(bd.from) - 13, bw = X(bd.to) + W + 13 - bx;
          return (
            <g key={"bd" + i}>
              <rect x={bx} y={topY - 40} width={bw} height={H + 74} rx="16" fill={c.t} opacity=".38"
                    stroke={c.i} strokeOpacity=".45" strokeWidth="1.1" strokeDasharray="6 5" />
              <text x={bx + 10} y={topY - 26} fontSize="8.5" fontFamily="var(--f-mono)" letterSpacing=".14em" fill={c.i}>{bd.label.toUpperCase()}</text>
            </g>
          );
        })}
        {/* the rework loop — dashed, because it is the branch you hope not to take */}
        <rect x={b1 - 42} y={brY - 24} width={b0 - b1 + W + 58} height={H + 52} rx="16" fill={BC.red.t} opacity=".3"
              stroke={red} strokeOpacity=".45" strokeWidth="1.1" strokeDasharray="6 5" />
        <text x={(b1 - 30 + b0 + W / 2) / 2} y={brY - 9} textAnchor="middle" fontSize="8.5" fontFamily="var(--f-mono)" letterSpacing=".12em" fill={red}>{f.branchLabel.toUpperCase()}</text>
        {bpath(`M${X(f.from) + W} ${cy} H${mgR} V${lane} H${b0 + W / 2} V${brY - 8}`, 1, red)}{bhead(b0 + W / 2, brY - 6, "down", red)}
        {f.branch.length > 1 && <React.Fragment>
          {bpath(`M${b0 - 6} ${brcy} H${b1 + W + 10}`, 1, red)}{bhead(b1 + W + 8, brcy, "left", red)}
        </React.Fragment>}
        {bpath(`M${b1 - 6} ${brcy} H${b1 - 30} V${lane2} H${mgL} V${cy} H${X(f.back) - 10}`, 1, red)}{bhead(X(f.back) - 8, cy, "right", red)}
        {f.main.slice(0, -1).map((_, i) => (
          <g key={"e" + i}>
            {bpath(`M${X(i) + W} ${cy} H${X(i + 1) - 11}`)}{bhead(X(i + 1) - 9, cy, "right")}
          </g>
        ))}
        {f.main.map((n, i) => <FlowNode key={i} n={n} x={X(i)} y={topY} />)}
        {f.main.slice(0, -1).map((_, i) => (
          <text key={"el" + i} x={(X(i) + W + X(i + 1)) / 2} y={cy - 9} textAnchor="middle" fontSize="8"
                fontFamily="var(--f-mono)" letterSpacing=".6" fill="#7e827e">{(f.edges[i] || "").toUpperCase()}</text>
        ))}
        {f.branch.map((n, k) => <FlowNode key={"b" + k} n={n} x={bn(k)} y={brY} />)}
        {/* handwritten note, pinned to the canvas the way it would be on a board */}
        <g transform="translate(26 388) rotate(-2)">
          <rect x="0" y="0" width="216" height="72" fill="#fff3bf" stroke="#e6cf6a" strokeWidth="1" />
          {d.note.split("\n").map((ln, i) => (
            <text key={i} x="14" y={30 + i * 22} fontSize="17" fontFamily="Caveat, cursive" fill="#5c4b12">{ln}</text>
          ))}
        </g>
      </svg>
    </div>
  );
}

function WorkBench({ go }) {
  const { useState } = React;
  const [key, setKey] = useState("ae");
  const d = BENCH[key];
  return (
    <section id="how-i-work" className="shell-pad pt-16 md:pt-24 pb-4">
      <div className="shellbox rounded-[32px] border border-ink/10 px-6 md:px-12 py-14 md:py-16"
           style={{ background: "rgb(var(--c-card))" }}>
        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(520px,1.15fr)] gap-10 lg:gap-14 items-stretch">
          <div>
            <span className="inline-block px-4 py-2 rounded-lg border border-ink/15 mono text-[9.5px] tracking-[.18em] uppercase"
                  style={{ background: "rgb(var(--c-paper))", opacity: .86 }}>How I work</span>
            <h2 data-fill className="claim text-[8.5vw] md:text-[44px] mt-6 max-w-[440px]">The three lanes I work in</h2>
            <div className="mt-9">
              {BENCH_KEYS.map((k) => {
                const b = BENCH[k], on = k === key;
                return (
                  <button key={k} onMouseEnter={() => setKey(k)} onFocus={() => setKey(k)} onClick={() => setKey(k)}
                          className="w-full text-left py-4 border-t border-ink/12 last:border-b transition-colors duration-300">
                    <span className="text-[19px] md:text-[21px] font-semibold tracking-[-.02em] transition-colors duration-300 block"
                          style={{ color: on ? "rgb(var(--c-accent))" : "rgb(var(--c-ink))" }}>{b.label}</span>
                    <span className="text-[13.5px] leading-[1.5] block mt-1.5" style={{ opacity: on ? .72 : .45 }}>{b.desc}</span>
                    <span className="mono text-[8.5px] tracking-[.16em] uppercase block mt-2.5 leading-[1.7]"
                          style={{ opacity: on ? .6 : .3 }}>{b.tech.join(" · ")}</span>
                  </button>
                );
              })}
            </div>
            <button onClick={() => go("stack")} className="ul mono text-[10px] tracking-[.2em] uppercase mt-7 inline-block"
                    style={{ opacity: .6 }}>See how I work →</button>
          </div>
          <div className="min-w-0 flex">
            <BenchCanvas d={d} key={key} />
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { WorkBench, BENCH, BENCH_KEYS, BC });
