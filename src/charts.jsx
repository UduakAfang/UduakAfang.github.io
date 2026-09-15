/* Data-native graphics — everything here is drawn from arrays of numbers,
   not hand-illustrated. These stand in for the illustrations on the reference sites. */

const { useState: useStateG, useEffect: useEffectG, useRef: useRefG } = React;

const AC = "rgb(var(--c-accent))";
const IN = "rgb(var(--c-ink))";

/* ---------- primitives ---------- */

function Spark({ data, w = 120, h = 34, stroke = AC, fill = false, width = 1.6 }) {
  const max = Math.max(...data), min = Math.min(...data);
  const pts = data.map((v, i) => [
    (i / (data.length - 1)) * w,
    h - ((v - min) / (max - min || 1)) * (h - 4) - 2,
  ]);
  const d = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
      {fill && <path d={`${d} L ${w} ${h} L 0 ${h} Z`} fill={AC} opacity=".10" />}
      <path d={d} fill="none" stroke={stroke} strokeWidth={width} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Bars({ data, w = 120, h = 40, gap = 3 }) {
  const max = Math.max(...data);
  const bw = (w - gap * (data.length - 1)) / data.length;
  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`}>
      {data.map((v, i) => {
        const bh = Math.max(2, (v / max) * h);
        return <rect key={i} x={i * (bw + gap)} y={h - bh} width={bw} height={bh} rx="1.5" fill={IN} opacity={0.18 + (v / max) * 0.7} />;
      })}
    </svg>
  );
}

/* Acute:chronic workload ratio — the actual chart from TrackPerform */
function LoadRibbon({ h = 190 }) {
  const data = [0.78, 0.84, 0.91, 1.05, 1.18, 1.34, 1.41, 1.22, 1.06, 0.97, 1.02, 1.11, 1.24, 1.16, 0.99, 0.92];
  const w = 560, pad = 26;
  const yFor = (v) => h - pad - ((v - 0.6) / 0.9) * (h - pad * 2);
  const xFor = (i) => pad + (i / (data.length - 1)) * (w - pad * 2);
  const d = data.map((v, i) => (i ? "L" : "M") + xFor(i) + " " + yFor(v)).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto">
      <rect x={pad} y={yFor(1.3)} width={w - pad * 2} height={yFor(0.8) - yFor(1.3)} fill={AC} opacity=".09" />
      <line x1={pad} y1={yFor(1.3)} x2={w - pad} y2={yFor(1.3)} stroke={AC} strokeWidth="1" strokeDasharray="4 4" opacity=".55" />
      <line x1={pad} y1={yFor(0.8)} x2={w - pad} y2={yFor(0.8)} stroke={AC} strokeWidth="1" strokeDasharray="4 4" opacity=".55" />
      <path d={d} fill="none" stroke={IN} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
      {data.map((v, i) => (v > 1.3 ? <circle key={i} cx={xFor(i)} cy={yFor(v)} r="4" fill={AC} /> : null))}
      <text x={pad} y={yFor(1.3) - 7} fill={IN} opacity=".5" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="1.4">SPIKE 1.3</text>
      <text x={pad} y={yFor(0.8) + 14} fill={IN} opacity=".5" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="1.4">UNDER 0.8</text>
    </svg>
  );
}

/* A small dashboard, drawn — the thing a stakeholder opens on Monday */
function MiniDash({ tilt = true }) {
  const kpis = [
    { k: "Invoices open", v: "₦5.2M", d: [4, 6, 5, 8, 7, 9, 12] },
    { k: "Days to pay", v: "18.4", d: [12, 11, 13, 10, 9, 8, 7] },
    { k: "At risk", v: "9", d: [3, 4, 3, 5, 6, 5, 4] },
  ];
  return (
    <div className={"rounded-2xl border border-ink/12 bg-paper shadow-[0_30px_60px_-40px_rgba(0,0,0,.5)] overflow-hidden " + (tilt ? "rotate-[-1.2deg]" : "")}>
      <div className="flex items-center gap-2 px-4 py-3 border-b border-ink/10 bg-paper2">
        <span className="w-2 h-2 rounded-full bg-ink/20"></span>
        <span className="w-2 h-2 rounded-full bg-ink/20"></span>
        <span className="w-2 h-2 rounded-full bg-accent"></span>
        <span className="mono text-[9px] tracking-[.22em] uppercase opacity-50 ml-2">receivables · live</span>
      </div>
      <div className="grid grid-cols-3 gap-px bg-ink/10">
        {kpis.map((k) => (
          <div key={k.k} className="bg-paper px-4 py-4">
            <div className="mono text-[8.5px] tracking-[.18em] uppercase opacity-50">{k.k}</div>
            <div className="text-2xl font-black tracking-tight mt-1">{k.v}</div>
            <div className="mt-2"><Spark data={k.d} w={92} h={22} fill /></div>
          </div>
        ))}
      </div>
      <div className="px-4 py-4 border-t border-ink/10">
        <div className="flex items-end justify-between mb-3">
          <div className="mono text-[9px] tracking-[.2em] uppercase opacity-50">Ageing by bucket</div>
          <div className="mono text-[9px] opacity-40">SQL · 4 sources</div>
        </div>
        <div className="space-y-2">
          {[["0–30", 82], ["31–60", 54], ["61–90", 31], ["90+", 17]].map(([l, p]) => (
            <div key={l} className="flex items-center gap-3">
              <div className="mono text-[9px] w-12 opacity-60">{l}</div>
              <div className="h-2 flex-1 rounded-full bg-ink/8 overflow-hidden">
                <div className="h-full rounded-full bg-accent" style={{ width: p + "%" }}></div>
              </div>
              <div className="mono text-[9px] w-8 text-right opacity-60">{p}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Warehouse table card — used in the workspace grid */
function SchemaCard({ name, rows }) {
  return (
    <div className="rounded-xl border border-ink/12 bg-paper overflow-hidden">
      <div className="px-3 py-2 border-b border-ink/10 bg-ink text-paper mono text-[9px] tracking-[.18em] uppercase">{name}</div>
      <div className="divide-y divide-ink/8">
        {rows.map((r) => (
          <div key={r[0]} className="px-3 py-1.5 flex items-center justify-between mono text-[10px]">
            <span className="opacity-80">{r[0]}</span>
            <span className="opacity-40">{r[1]}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Query card */
function QueryCard({ lines, name }) {
  return (
    <div className="rounded-xl border border-ink/12 bg-ink text-paper overflow-hidden">
      <div className="px-3 py-2 border-b border-paper/12 mono text-[9px] tracking-[.18em] uppercase opacity-60">{name || "models/staging.sql"}</div>
      <pre className="px-3 py-3 mono text-[10.5px] leading-[1.7] whitespace-pre overflow-x-auto">{lines}</pre>
    </div>
  );
}

/* Horizontal pipeline — active node lights up */
function PipelineRail({ stages, active }) {
  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-[19px] h-px bg-ink/15"></div>
      <div className="absolute left-0 top-[19px] h-px bg-accent transition-[width] duration-700 ease-out"
           style={{ width: `${(active / Math.max(1, stages.length - 1)) * 100}%` }}></div>
      <div className="relative grid" style={{ gridTemplateColumns: `repeat(${stages.length}, minmax(0,1fr))` }}>
        {stages.map((s, i) => {
          const on = i <= active;
          return (
            <div key={s.t} className="flex flex-col items-start pr-3">
              <div className={"w-[38px] h-[38px] rounded-full flex items-center justify-center mono text-[10px] transition-all duration-500 " +
                   (on ? "bg-accent text-white scale-100" : "bg-paper border border-ink/18 opacity-55 scale-95")}>
                {s.k}
              </div>
              <div className={"mt-3 text-[13px] font-bold tracking-tight transition-opacity duration-500 " + (on ? "opacity-100" : "opacity-45")}>{s.t}</div>
              <div className={"mono text-[9px] mt-1 leading-relaxed transition-opacity duration-500 " + (on ? "opacity-55" : "opacity-25")}>{s.s}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* Coverage grid — replaces the old skill bars */
function CoverageGrid({ items }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10 border border-ink/10 rounded-2xl overflow-hidden">
      {items.map((it) => (
        <div key={it.name} className="bg-paper p-5 group">
          <div className="flex items-baseline justify-between">
            <div className="text-[15px] font-bold tracking-tight">{it.name}</div>
            <div className="mono text-[9px] opacity-40">{it.pct}</div>
          </div>
          <div className="mt-3 grid grid-cols-10 gap-[3px]">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} className={"h-[18px] rounded-[2px] transition-colors duration-300 " + (i * 10 < it.pct ? "bg-accent" : "bg-ink/10")}></div>
            ))}
          </div>
          <div className="mono text-[9.5px] opacity-45 mt-3 leading-relaxed">{it.note}</div>
        </div>
      ))}
      {Array.from({ length: (4 - (items.length % 4)) % 4 }).map((_, i) => (
        <div key={"pad" + i} className="bg-paper p-5 flex items-center justify-center">
          <span className="mono text-[9.5px] tracking-[.16em] uppercase text-center leading-relaxed" style={{ opacity: .35 }}>Databricks · Azure Data Factory</span>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { Spark, Bars, LoadRibbon, MiniDash, SchemaCard, QueryCard, PipelineRail, CoverageGrid });