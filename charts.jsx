/* eslint-disable no-undef */
/* D3 charts that show up across the portfolio */

const { useEffect, useRef } = React;

/* ───────────────────────────── tiny line spark ──────────────────────────── */
function Spark({ data, color = "#1a1a1a", width = 120, height = 28, area = true }) {
  const ref = useRef(null);
  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();
    const x = d3.scaleLinear().domain([0, data.length - 1]).range([2, width - 2]);
    const y = d3.scaleLinear().domain(d3.extent(data)).range([height - 2, 2]);
    if (area) {
      const a = d3.area().x((_, i) => x(i)).y0(height).y1(d => y(d)).curve(d3.curveMonotoneX);
      svg.append("path").attr("d", a(data)).attr("fill", color).attr("fill-opacity", 0.10);
    }
    const l = d3.line().x((_, i) => x(i)).y(d => y(d)).curve(d3.curveMonotoneX);
    svg.append("path").attr("d", l(data)).attr("fill", "none").attr("stroke", color).attr("stroke-width", 1.5);
    svg.append("circle").attr("cx", x(data.length - 1)).attr("cy", y(data[data.length - 1])).attr("r", 2.5).attr("fill", color);
  }, [data, color, width, height, area]);
  return <svg ref={ref} width={width} height={height} className="block" />;
}

/* ───────────────────────────── radial gauge ─────────────────────────────── */
function Gauge({ value = 0.75, label, size = 110, color = "#C7522A" }) {
  const ref = useRef(null);
  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();
    const r = size / 2 - 6;
    const c = size / 2;
    const arc = d3.arc().innerRadius(r - 6).outerRadius(r).startAngle(-Math.PI * 0.75);
    const g = svg.append("g").attr("transform", `translate(${c},${c})`);
    g.append("path").attr("d", arc.endAngle(Math.PI * 0.75)()).attr("fill", "rgba(26,26,26,.08)");
    g.append("path").attr("d", arc.endAngle(-Math.PI * 0.75 + Math.PI * 1.5 * value)()).attr("fill", color);
  }, [value, size, color]);
  return (
    <div className="relative inline-block" style={{ width: size, height: size }}>
      <svg ref={ref} width={size} height={size} />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="display text-3xl">{Math.round(value * 100)}</div>
        {label && <div className="mono text-[9px] opacity-60 uppercase tracking-widest">{label}</div>}
      </div>
    </div>
  );
}

/* ───────── flow diagram for playbook: Raw → Identify → Integrate → Design → Decision */
function FlowDiagram() {
  const ref = useRef(null);
  useEffect(() => {
    const w = 880, h = 220;
    const svg = d3.select(ref.current).attr("viewBox", `0 0 ${w} ${h}`);
    svg.selectAll("*").remove();

    const nodes = [
      { x: 70,  label: "Raw\nsources", sub: "SQL · CSV · API" },
      { x: 250, label: "Identify",     sub: "Question · KPIs" },
      { x: 430, label: "Integrate",    sub: "Model · Pipeline" },
      { x: 610, label: "Design",       sub: "Visual · Hierarchy" },
      { x: 810, label: "Decision",     sub: "Stakeholder" },
    ];
    const cy = 110;

    // path between nodes (curved)
    const lineGen = d3.line().curve(d3.curveMonotoneX);
    for (let i = 0; i < nodes.length - 1; i++) {
      const a = nodes[i], b = nodes[i + 1];
      const pts = [
        [a.x + 28, cy],
        [(a.x + b.x) / 2, cy - 28],
        [(a.x + b.x) / 2, cy + 28],
        [b.x - 28, cy],
      ];
      svg.append("path")
        .attr("d", lineGen(pts))
        .attr("fill", "none")
        .attr("stroke", "#1a1a1a")
        .attr("stroke-width", 1)
        .attr("stroke-dasharray", "3 4")
        .attr("opacity", 0.5);
    }

    // nodes
    nodes.forEach((n, i) => {
      const g = svg.append("g").attr("transform", `translate(${n.x},${cy})`);
      const filled = i === 1 || i === 2 || i === 3;
      g.append("circle")
        .attr("r", 28)
        .attr("fill", filled ? "#1a1a1a" : "#f4f1eb")
        .attr("stroke", "#1a1a1a")
        .attr("stroke-width", 1);
      g.append("text")
        .attr("text-anchor", "middle")
        .attr("dy", 4)
        .attr("font-family", "JetBrains Mono, monospace")
        .attr("font-size", 10)
        .attr("fill", filled ? "#f4f1eb" : "#1a1a1a")
        .text(String(i + 1).padStart(2, "0"));
      // label below
      const lines = n.label.split("\n");
      lines.forEach((ln, j) => {
        g.append("text")
          .attr("text-anchor", "middle")
          .attr("y", 50 + j * 14)
          .attr("font-family", "Saira Condensed, sans-serif")
          .attr("font-weight", 900)
          .attr("font-size", 14)
          .attr("text-transform", "uppercase")
          .text(ln.toUpperCase());
      });
      g.append("text")
        .attr("text-anchor", "middle")
        .attr("y", 50 + lines.length * 14 + 12)
        .attr("font-family", "JetBrains Mono, monospace")
        .attr("font-size", 9)
        .attr("fill", "#1a1a1a")
        .attr("opacity", 0.55)
        .text(n.sub);
    });
  }, []);
  return <svg ref={ref} className="w-full h-auto" />;
}

/* ─────── before / after: ugly chart vs designed chart (the food metaphor) ─── */
function BeforeAfter() {
  const a = useRef(null);
  const b = useRef(null);
  const data = [
    { m: "Jan", v: 12 }, { m: "Feb", v: 18 }, { m: "Mar", v: 9 },
    { m: "Apr", v: 22 }, { m: "May", v: 26 }, { m: "Jun", v: 19 },
    { m: "Jul", v: 31 }, { m: "Aug", v: 28 }, { m: "Sep", v: 36 },
    { m: "Oct", v: 42 }, { m: "Nov", v: 48 }, { m: "Dec", v: 55 },
  ];
  useEffect(() => {
    /* before — bad chart */
    {
      const w = 340, h = 200;
      const svg = d3.select(a.current).attr("viewBox", `0 0 ${w} ${h}`);
      svg.selectAll("*").remove();
      svg.append("rect").attr("width", w).attr("height", h).attr("fill", "#ffffff").attr("stroke", "#999");
      const colors = ["#ff5252","#ffd400","#3aa1ff","#00c853","#aa00ff","#ff6f00","#00b8d4","#c51162","#5d4037","#1a237e","#ffab91","#43a047"];
      const x = d3.scaleBand().domain(data.map(d => d.m)).range([46, w - 16]).padding(0.05);
      const y = d3.scaleLinear().domain([0, 60]).range([h - 30, 12]);
      svg.append("g").selectAll("rect").data(data).enter().append("rect")
        .attr("x", d => x(d.m)).attr("y", d => y(d.v))
        .attr("width", x.bandwidth())
        .attr("height", d => h - 30 - y(d.v))
        .attr("fill", (_, i) => colors[i]);
      svg.append("g").attr("transform", `translate(0,${h - 30})`).call(d3.axisBottom(x).tickSize(0)).attr("font-size", 9);
      svg.append("g").attr("transform", `translate(46,0)`).call(d3.axisLeft(y).ticks(6)).attr("font-size", 9);
      svg.append("text").attr("x", w / 2).attr("y", 11).attr("text-anchor", "middle").attr("font-size", 10).attr("font-weight", 700).text("Chart 1: Total Sales per Month");
    }
    /* after — designed chart */
    {
      const w = 340, h = 200;
      const svg = d3.select(b.current).attr("viewBox", `0 0 ${w} ${h}`);
      svg.selectAll("*").remove();
      svg.append("rect").attr("width", w).attr("height", h).attr("fill", "#f4f1eb");
      const x = d3.scaleBand().domain(data.map(d => d.m)).range([40, w - 16]).padding(0.35);
      const y = d3.scaleLinear().domain([0, 60]).range([h - 38, 30]);

      svg.append("text").attr("x", 18).attr("y", 22).attr("font-family", "Saira Condensed").attr("font-weight", 900).attr("font-size", 14).text("REVENUE GREW 4.6×");
      svg.append("text").attr("x", 18).attr("y", 36).attr("font-family", "JetBrains Mono").attr("font-size", 8).attr("opacity", 0.6).text("Jan → Dec · highlighted: best quarter");

      svg.append("g").selectAll("rect").data(data).enter().append("rect")
        .attr("x", d => x(d.m))
        .attr("y", d => y(d.v))
        .attr("width", x.bandwidth())
        .attr("height", d => h - 38 - y(d.v))
        .attr("rx", 1.5)
        .attr("fill", (d, i) => i >= 9 ? "#C7522A" : "#1a1a1a")
        .attr("opacity", (d, i) => i >= 9 ? 1 : 0.85);

      svg.append("g").attr("transform", `translate(0,${h - 38})`)
        .call(d3.axisBottom(x).tickSize(0))
        .call(g => g.select(".domain").remove())
        .attr("font-family", "JetBrains Mono").attr("font-size", 8);

      // value callout on best month
      const peak = data[data.length - 1];
      svg.append("text")
        .attr("x", x(peak.m) + x.bandwidth() / 2)
        .attr("y", y(peak.v) - 6)
        .attr("text-anchor", "middle")
        .attr("font-family", "Saira Condensed")
        .attr("font-weight", 900)
        .attr("font-size", 12)
        .attr("fill", "#C7522A")
        .text("55");
    }
  }, []);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <div className="eyebrow opacity-50 mb-2">Before · raw chart</div>
        <svg ref={a} className="w-full block bg-white" />
        <div className="mono text-[10px] opacity-50 mt-2">12 unrelated colors · default labels · no hierarchy · no story</div>
      </div>
      <div>
        <div className="eyebrow text-brick mb-2">After · designed chart</div>
        <svg ref={b} className="w-full block" />
        <div className="mono text-[10px] opacity-60 mt-2">One accent color · headline insight · best months highlighted</div>
      </div>
    </div>
  );
}

/* ──── small histogram for the resume sidebar ──── */
function ResumeBars({ skills = [] }) {
  const ref = useRef(null);
  useEffect(() => {
    const w = 260, rowH = 22;
    const h = rowH * skills.length;
    const svg = d3.select(ref.current).attr("viewBox", `0 0 ${w} ${h}`);
    svg.selectAll("*").remove();
    const x = d3.scaleLinear().domain([0, 100]).range([0, w - 80]);

    const rows = svg.selectAll("g.row").data(skills).enter().append("g")
      .attr("class", "row")
      .attr("transform", (_, i) => `translate(70,${i * rowH + 4})`);

    rows.append("text")
      .attr("x", -8)
      .attr("y", 11)
      .attr("text-anchor", "end")
      .attr("font-family", "Satoshi")
      .attr("font-size", 10)
      .attr("font-weight", 700)
      .text(d => d.name);

    rows.append("rect")
      .attr("x", 0)
      .attr("y", 5)
      .attr("width", w - 80)
      .attr("height", 6)
      .attr("rx", 3)
      .attr("fill", "rgba(26,26,26,.1)");

    rows.append("rect")
      .attr("x", 0)
      .attr("y", 5)
      .attr("width", d => x(d.pct))
      .attr("height", 6)
      .attr("rx", 3)
      .attr("fill", "#1a1a1a");

    rows.append("text")
      .attr("x", d => x(d.pct) + 6)
      .attr("y", 11)
      .attr("font-family", "JetBrains Mono")
      .attr("font-size", 8)
      .attr("opacity", 0.6)
      .text(d => d.pct + "%");
  }, [skills]);
  return <svg ref={ref} className="w-full block" />;
}

/* ── timeline ribbon for resume (years across) ─────────── */
function TimelineRibbon({ items }) {
  const ref = useRef(null);
  useEffect(() => {
    const w = 760, h = 132;
    const svg = d3.select(ref.current).attr("viewBox", `0 0 ${w} ${h}`);
    svg.selectAll("*").remove();

    const years = d3.range(2018, 2027);
    const x = d3.scaleLinear().domain([2018, 2026]).range([28, w - 28]);

    // Baseline
    const baseY = h - 28;
    svg.append("line")
      .attr("x1", 28).attr("x2", w - 28)
      .attr("y1", baseY).attr("y2", baseY)
      .attr("stroke", "rgba(26,26,26,.25)");

    // year ticks
    years.forEach(y => {
      svg.append("line")
        .attr("x1", x(y)).attr("x2", x(y))
        .attr("y1", baseY - 5).attr("y2", baseY + 5)
        .attr("stroke", "rgba(26,26,26,.45)");
      svg.append("text")
        .attr("x", x(y)).attr("y", baseY + 20)
        .attr("text-anchor", "middle")
        .attr("font-family", "JetBrains Mono")
        .attr("font-size", 10)
        .attr("font-weight", 500)
        .attr("opacity", 0.65)
        .text(y);
    });

    // segments — stacked vertically with proper spacing
    const rowH = 22;
    items.forEach((it, i) => {
      const yRow = 14 + i * rowH;
      const xStart = x(it.from);
      const xEnd = x(it.to);
      const segWidth = Math.max(12, xEnd - xStart);

      svg.append("rect")
        .attr("x", xStart)
        .attr("y", yRow)
        .attr("width", segWidth)
        .attr("height", 10)
        .attr("rx", 5)
        .attr("fill", it.color || "#1a1a1a");

      // dot at start
      svg.append("circle")
        .attr("cx", xStart).attr("cy", yRow + 5)
        .attr("r", 2.5).attr("fill", "#f4f1eb");

      // label, sitting to the right of the segment
      svg.append("text")
        .attr("x", xEnd + 8)
        .attr("y", yRow + 9)
        .attr("font-family", "Satoshi")
        .attr("font-size", 11)
        .attr("font-weight", 700)
        .attr("fill", "#1a1a1a")
        .text(it.label);
    });
  }, [items]);
  return <svg ref={ref} className="w-full block" style={{ minHeight: 132 }} />;
}

/* ── donut for resume ── */
function MiniDonut({ slices, size = 110 }) {
  const ref = useRef(null);
  useEffect(() => {
    const svg = d3.select(ref.current).attr("viewBox", `0 0 ${size} ${size}`);
    svg.selectAll("*").remove();
    const r = size / 2 - 4;
    const arc = d3.arc().innerRadius(r - 14).outerRadius(r);
    const pie = d3.pie().value(d => d.v).sort(null);
    const g = svg.append("g").attr("transform", `translate(${size / 2},${size / 2})`);
    g.selectAll("path").data(pie(slices)).enter().append("path")
      .attr("d", arc).attr("fill", d => d.data.color);
  }, [slices, size]);
  return <svg ref={ref} width={size} height={size} />;
}

Object.assign(window, { Spark, Gauge, FlowDiagram, BeforeAfter, ResumeBars, TimelineRibbon, MiniDonut });
