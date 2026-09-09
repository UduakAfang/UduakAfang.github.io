/* CircuitBand — the closing strip as a circuit board. Chips carry the stack and
   each one lights as it passes the probe point. The light-up is pure CSS: every
   chip runs the same keyframe on the same clock as the scroll, offset by its own
   position, so the two stay in lockstep. */

const BOARD_H = 138;      /* board height   */
const TRACE_Y = 96;       /* the walking line */
const PROBE_X = 240;      /* where chips light */
const SPEED = 46;         /* px per second */

const CHIPS = [
  { t: "Python", w: 92, h: 44 },
  { t: "PySpark", w: 100, h: 50 },
  { t: "dbt", w: 72, h: 54 },
  { t: "Databricks", w: 112, h: 42 },
  { t: "Delta Live Tables", w: 146, h: 38 },
  { t: "Tableau", w: 90, h: 46 },
  { t: "Power BI", w: 94, h: 52 },
  { t: "Postgres", w: 96, h: 44 },
];

/* Lay the chips out once — each entry keeps its own x so the tile width, the
   scroll period and the lit delays are all derived from the same numbers. */
const LAYOUT = (() => {
  let x = 40;
  const out = CHIPS.map((c) => {
    const gx = x;
    x += 62 + c.w + 128;
    return { ...c, gx };
  });
  return { chips: out, tile: x };
})();
const TILE = LAYOUT.tile;
const PERIOD = +(TILE / SPEED).toFixed(2);

const SILK = ["R1", "C4", "U2", "X1", "L3", "D7", "Q5", "C9", "J1", "R12"];

/* ── discrete parts, drawn once and reused along the board ── */
const Cap = ({ x }) => (
  <g className="part">
    <rect className="cap" x={x} y={TRACE_Y - 24} width="13" height="24" rx="6" />
    <path className="cap-band" d={`M${x} ${TRACE_Y - 18} h13`} />
    <path className="pin" d={`M${x + 4} ${TRACE_Y} v6 M${x + 9} ${TRACE_Y} v6`} />
  </g>
);
const Res = ({ x }) => (
  <g className="part">
    <path className="pin" d={`M${x - 5} ${TRACE_Y - 7} h27`} />
    <rect className="res" x={x} y={TRACE_Y - 13} width="17" height="13" rx="2.5" />
    <path className="res-band" d={`M${x + 5} ${TRACE_Y - 13} v13 M${x + 11} ${TRACE_Y - 13} v13`} />
  </g>
);
const Can = ({ x }) => (
  <g className="part">
    <rect className="can" x={x} y={TRACE_Y - 16} width="21" height="16" rx="8" />
    <path className="can-line" d={`M${x + 5} ${TRACE_Y - 12} h11`} />
    <path className="pin" d={`M${x + 5} ${TRACE_Y} v6 M${x + 16} ${TRACE_Y} v6`} />
  </g>
);
const Coil = ({ x }) => (
  <g className="part">
    <path className="coil" d={`M${x} ${TRACE_Y} q3 -10 6 0 q3 -10 6 0 q3 -10 6 0 q3 -10 6 0`} />
  </g>
);
const Tran = ({ x }) => (
  <g className="part">
    <path className="tran" d={`M${x} ${TRACE_Y - 6} a8 8 0 0 1 16 0 z`} />
    <path className="pin" d={`M${x + 4} ${TRACE_Y - 6} v6 M${x + 8} ${TRACE_Y - 6} v6 M${x + 12} ${TRACE_Y - 6} v6`} />
  </g>
);
const Hdr = ({ x }) => (
  <g className="part">
    <rect className="hdr" x={x} y={TRACE_Y - 8} width="28" height="8" rx="1.5" />
    {[0, 1, 2, 3, 4].map((i) => <path key={i} className="pin" d={`M${x + 3 + i * 5.5} ${TRACE_Y - 8} v-8`} />)}
  </g>
);
const Via = ({ x }) => <g className="part"><circle className="via" cx={x} cy={TRACE_Y - 6} r="3.2" /></g>;
const Lamp = ({ x, tall }) => (
  <g className="part">
    {tall
      ? <><path className="pin" d={`M${x} ${TRACE_Y} V${TRACE_Y - 34} q0 -7 9 -7`} />
          <circle className="led-halo" cx={x + 11} cy={TRACE_Y - 41} r="6.5" />
          <circle className="led" cx={x + 11} cy={TRACE_Y - 41} r="3" /></>
      : <><circle className="led-halo" cx={x} cy={TRACE_Y - 9} r="8" />
          <circle className="led" cx={x} cy={TRACE_Y - 9} r="4" />
          <path className="pin" d={`M${x - 3} ${TRACE_Y - 5} v5 M${x + 3} ${TRACE_Y - 5} v5`} /></>}
  </g>
);

const PART_SETS = [
  (x) => [<Cap key="a" x={x} />, <Lamp key="b" x={x + 45} tall />],
  (x) => [<Lamp key="a" x={x + 6} />, <Via key="b" x={x + 44} />],
  (x) => [<Lamp key="a" x={x} tall />, <Tran key="b" x={x + 32} />],
  (x) => [<Coil key="a" x={x} />, <Lamp key="b" x={x + 50} />],
];
const TAIL_SETS = [
  (x) => [<Res key="a" x={x} />, <Can key="b" x={x + 38} />],
  (x) => [<Hdr key="a" x={x} />, <Cap key="b" x={x + 48} />],
  (x) => [<Res key="a" x={x} />, <Coil key="b" x={x + 42} />],
  (x) => [<Via key="a" x={x} />, <Cap key="b" x={x + 34} />],
];

/* Delay that puts a chip's lit window exactly when it crosses the probe. */
function litDelay(x) {
  let t = (PERIOD * (x - PROBE_X)) / TILE;
  while (t < 0) t += PERIOD;
  while (t > PERIOD) t -= PERIOD;
  return -(t - PERIOD * 0.03).toFixed(2) + "s";
}

function Scene({ dx }) {
  return (
    <g transform={`translate(${dx} 0)`}>
      <path className="trace" d={`M0 ${TRACE_Y} H${TILE}`} />
      {LAYOUT.chips.map((c, i) => {
        const gx = c.gx, bodyX = gx + 62, bodyY = TRACE_Y - c.h;
        const pins = Math.max(5, Math.round(c.w / 16));
        const mid = bodyX + c.w / 2;
        return (
          <g key={c.t}>
            <path className="sig" d={`M${gx} ${TRACE_Y - 2} v-${c.h - 20} l22 -22 h44`} />
            {PART_SETS[i % PART_SETS.length](gx - 14)}
            <g className="chip" style={{ animationDelay: litDelay(mid) }}>
              {Array.from({ length: pins }).map((_, p) => (
                <path key={p} className="pin" d={`M${bodyX + 10 + (p * (c.w - 20)) / (pins - 1)} ${TRACE_Y} v6`} />
              ))}
              <rect className="chip-body" x={bodyX} y={bodyY} width={c.w} height={c.h} rx="3" />
              <circle className="chip-dot" cx={bodyX + 8} cy={bodyY + 8} r="2.4" />
              <rect className="die" x={bodyX + 9} y={bodyY + 12} width={c.w - 18} height={c.h - 22} rx="1.5" />
              <text className="chip-label" x={mid} y={bodyY + c.h / 2 + 3.5} textAnchor="middle">{c.t}</text>
            </g>
            {TAIL_SETS[i % TAIL_SETS.length](bodyX + c.w + 14)}
            <text className="silk" x={gx} y={TRACE_Y + 24} textAnchor="middle">{SILK[i % SILK.length]}</text>
            <text className="silk" x={bodyX + c.w + 38} y={TRACE_Y + 24} textAnchor="middle">{SILK[(i + 5) % SILK.length]}</text>
          </g>
        );
      })}
    </g>
  );
}

function CircuitBand() {
  const view = 1180;
  const pads = Math.ceil(view / 60) + 1;
  return (
    <div className="circuit relative w-full overflow-hidden select-none">
      <svg viewBox={`0 0 ${view} ${BOARD_H}`} className="w-full" style={{ display: "block" }} aria-hidden="true">
        <g className="pads">
          {Array.from({ length: pads }).map((_, i) => (
            <g key={i}>
              <circle className="pad" cx={i * 60} cy={TRACE_Y + 13} r="2.8" />
              <circle className="pad-hole" cx={i * 60} cy={TRACE_Y + 13} r="1.1" />
            </g>
          ))}
        </g>
        <g className="world" style={{ "--tile": -TILE + "px", "--roll": PERIOD + "s" }}>
          <Scene dx={0} />
          <Scene dx={TILE} />
        </g>
      </svg>
      <div className="circuit-foot">
        <span>FIG. 010 — THE STACK, ON THE BOARD</span>
        <span className="hidden sm:inline">EACH CHIP LIGHTS AT THE PROBE</span>
      </div>
    </div>
  );
}

Object.assign(window, { CircuitBand, CHIPS, PERIOD });
