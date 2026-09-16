
/* ===== data ===== */
const PROFILE = {
  name: "Uduak Afang",
  role: "Business Intelligence Analyst",
  location: "Lagos, Nigeria",
  tz: "UTC+1",
  mode: "Fully Remote",
  email: "uduakafang@gmail.com",
  linkedin: "https://linkedin.com/in/uduakafang",
  github: "https://github.com/UduakAfang",
  tableau: "https://public.tableau.com",
  blurb: "BI Analyst with 3+ years building dashboards and pipelines that finance, operations and commercial teams actually trust. I own the work end-to-end — from the raw SQL pull to the design of the screen a stakeholder opens on a Monday morning."
};
const SELECTED_WORKS = [{
  id: "09",
  no: "01 / 04",
  year: "2026",
  tag: "Tableau · Custom cartography",
  viz: true,
  tableauUrl: "https://public.tableau.com/views/AfricanHeadsofStateEarliestandLatest/SameCountryDifferentRules?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  title: "The Same Countries, Different Rules",
  category: "Data visualisation",
  skills: "Data collection · Custom cartography · Tableau calculations",
  client: "Personal · own dataset",
  blurb: "Every African country's first head of state after independence and the one in office today, on one map. Each ring is five years in power; the stem tells you whether power changed hands by election or by force.",
  metric: {
    value: "108",
    label: "Heads of state"
  },
  image: "images/leaders.png",
  process: [{
    n: "01",
    t: "The question",
    d: "Did the systems of government African countries carried out of independence survive, and who is still standing in them?"
  }, {
    n: "02",
    t: "The data",
    d: "A dataset I compiled myself — 54 countries, 108 slots, 106 distinct people — with administration type, mode of entry, exit type and dates sworn in and out."
  }, {
    n: "03",
    t: "The build",
    d: "Not a real map: a fitted Africa outline, one hand-placed coordinate per country, and every mark drawn with MAKEPOINT and MAKELINE off calculated coordinates."
  }, {
    n: "04",
    t: "The result",
    d: "The coup belt reads as a block, and one ring count runs longer than every other on the continent."
  }],
  stack: ["Tableau", "MAKEPOINT / MAKELINE", "LOD calcs", "Parameters", "Figma"]
}, {
  id: "01",
  no: "03 / 04",
  year: "2025–26",
  tag: "React · TypeScript · Supabase · Python",
  title: "TrackPerform",
  category: "AI-Built Product · Web App",
  skills: "AI-assisted data extraction · Data modelling · Product design · Full-stack build",
  client: "Client project · subscription product",
  blurb: "A subscription product for coaches and sports scientists: upload a GPS export from any vendor, in almost any shape, and get a per-athlete readiness read in seconds. AI reads the file's structure, maps the columns and a Python service returns the load ratio.",
  metric: {
    value: "40+",
    label: "Metrics auto-mapped"
  },
  image: "images/trackperform/daily-metrics-dark.png",
  url: "trackperform.com",
  process: [{
    n: "01",
    t: "It began as a competition entry",
    d: "TrackPerform didn't start as a company. It started as a competition. Chelsea FC released a set of GPS tracking data and asked people to analyse it in whatever BI tool they liked. I built the dashboard in Tableau — player load, an acute-versus-chronic view of training demand, a match-day calendar, a full player profile. It got shortlisted. It didn't win, but building it taught me exactly what a load dashboard has to say, and to whom. That mattered more than the result."
  }, {
    n: "02",
    t: "The message that made it a product",
    d: "A physical trainer at a top-flight European club reached out. He'd seen the competition work and wanted the same thing built around his own squad's data, so I built it again with his real numbers. When it was done he asked the question that became the company: could this build itself? Instead of him sending a spreadsheet and waiting for me to hand-assemble a dashboard, could a coach upload their GPS export — in whatever shape it arrived — and get the analysis back automatically? My first instinct was that it wasn't possible. But I'd built the thing twice by hand, so I knew exactly what had to happen between a raw export and a finished read. The question was whether AI could handle the messy middle: reading a file it had never seen and working out what every column meant. It could."
  }, {
    n: "03",
    t: "The data we actually had",
    d: "We launched to an encouraging start — the design landed and around forty coaches and sport scientists signed up. Then the files arrived and the real problem showed its face: everyone's spreadsheet was different. The club I'd built for used one tidy, standard export. Nobody else did. Some packed a whole week into a single sheet split into little stacked tables — instant rejection. Others uploaded one session with no dates at all, because to them the date was obvious. Two things were quietly killing it: uploads bounced on formats I hadn't anticipated, and even when they worked the analysis took two to three minutes to appear. People uploaded once, watched a spinner, and left."
  }, {
    n: "04",
    t: "Fixing the two things that lost people",
    d: "I rebuilt the intake around one assumption: no two files agree. AI now reads the raw export and works out its structure on its own — where the data starts, which column is the date, whether the sheet is one day or a whole season broken into blocks. If it's a single day with no date it stops and asks instead of guessing. If a date is ambiguous it resolves the US-versus-European format instead of silently picking wrong. Column mapping went from a wall to a handful of confirmations. Then I killed the wait: instead of computing a whole season before showing anything, the dashboard returns your first seven days in a couple of seconds and streams the rest in behind you."
  }],
  stack: ["React", "TypeScript", "Vite", "Supabase", "Python / Flask", "pandas", "numpy", "shadcn/ui"]
}, {
  id: "02",
  no: "04 / 04",
  year: "2026",
  tag: "React · Supabase",
  title: "DrillCal",
  category: "AI-Built Product · Web App",
  skills: "Load forecasting · Calendar UX · Data modelling · Product design",
  client: "Client project · launched",
  blurb: "A coaching journal for planning the week: drill library, day-and-period calendar, tactical board and attendance — built so the playbook belongs to the coach, not the club. Launched 1 August 2026.",
  metric: {
    value: "30+",
    label: "Signups since launch"
  },
  image: "images/drillcal/daily-planner.png",
  url: "drillcal.com",
  process: [{
    n: "01",
    t: "It began in conversations with coaches",
    d: "The idea came from a coach — someone who works with players every day and knew the problem from the inside — and it came out of talking to more of them. Their work was scattered across hard drives, folders in Google Drive, WhatsApp threads, and files saved straight to a laptop with no backup anywhere. Nobody had one place to plan a day, let alone a season. I was brought in to build it."
  }, {
    n: "02",
    t: "The thing coaches kept saying",
    d: "The loss was the sharper pain. Videos of sessions often belong to the club — fine while you are there, gone the day you leave. Drills, plans, notes go the same way, or disappear with a laptop. So one rule was settled before anything was designed: the library belongs to the coach's account, not to a team. Change club, create a new team, import the drills you built at the last one, carry on. Ten years and five teams later it is all still there — what you ran on a given day, and who turned up for it."
  }, {
    n: "03",
    t: "The issues",
    d: "The calendar broke in the exact way that matters. Drag a session to a different part of the day and its duration disappeared — a four-hour block landing in the morning slot came back with no start or end time at all and stretched across the full six hours. Underneath it were two more assumptions: an all-day item could not be dragged into a time, and a period could hold only one session, so a training day with two sessions in it simply could not be planned."
  }, {
    n: "04",
    t: "The fixes",
    d: "The root cause was that the calendar treated a slot as the truth and the times as decoration. Inverting that fixed all three at once: duration travels with the session, a period holds as many sessions as the day has, and an all-day item can be dropped into a time like anything else. Everything above it — the library, the tactical board, attendance — sits on Postgres row-level security, so a shared team never means a shared library."
  }],
  stack: ["React", "Supabase", "Python", "Claude"]
}, {
  id: "03",
  no: "02 / 04",
  category: "Dashboard & Analytics",
  skills: "Data visualisation · Geospatial analysis · Tableau",
  year: "2023",
  tag: "Tableau · Figma",
  viz: true,
  tableauUrl: "https://public.tableau.com/views/RWFDNYCCitizenRequestsServices/NYCCSRDashboard?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  title: "NYC 311 Service Requests",
  client: "Personal · Real World Fake Data",
  blurb: "A civic dashboard analysing 108k+ citizen service requests across 17 departments and 44 zip codes. Selected for Tableau Viz of the Day.",
  metric: {
    value: "108k+",
    label: "Requests analysed"
  },
  image: "images/nyc.png",
  process: [{
    n: "01",
    t: "The question",
    d: "Where in the city does the 311 system fail — by neighbourhood, by category, by priority — and how long do residents wait?"
  }, {
    n: "02",
    t: "The data",
    d: "NYC Open Data 311 export: 108k+ rows over 12 months, 17 departments, 44 zip codes. Cleaned in SQL, joined with NYC neighborhood polygons."
  }, {
    n: "03",
    t: "The build",
    d: "Tableau + Mapbox. Priority colour scheme (Standard / Hazardous / Emergency). Overdue vs Open status. Bubble overlay for request density."
  }, {
    n: "04",
    t: "The result",
    d: "Selected as Tableau Viz of the Day. Used by community groups in conversations with city ops."
  }],
  stack: ["Tableau", "Figma"]
}];
const ALL_WORKS = [...SELECTED_WORKS, {
  id: "04",
  no: "04",
  year: "2024",
  tag: "Tableau · Parameters · Excel",
  viz: true,
  tableauUrl: "https://public.tableau.com/views/PodcastAnalytics/PodcastCreators?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  category: "Dashboard & Analytics",
  skills: "Parameter-driven dashboards · Rolling windows · Tableau",
  stack: ["Tableau", "Parameters", "Excel"],
  title: "Podcast Analytics",
  client: "FILO Studios",
  blurb: "A single dashboard for podcast creators that consolidates Spotify, Apple, YouTube and Amazon Music — tracking new subscribers, listens, unique listeners and engagement per episode.",
  metric: {
    value: "4",
    label: "Platforms unified"
  },
  image: "images/podcast.png"
}, {
  id: "05",
  no: "05",
  year: "2024",
  tag: "Tableau · Parameter actions · Figma",
  viz: true,
  tableauUrl: "https://public.tableau.com/views/CFCPlayerPerformanceInsights/PlayerInfo?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link",
  category: "Dashboard & Analytics",
  skills: "Dashboard UX in Tableau · Parameter actions · Dynamic zone visibility · Figma",
  stack: ["Tableau", "Parameter actions", "Dynamic zone visibility", "Figma"],
  title: "CFC Player Performance Insights",
  client: "Chelsea FC (personal study)",
  blurb: "A two-tab sports-science dashboard combining player biography with six physical KPIs — ACWR, total distance, HSR, sprint distance — so coaching staff can read readiness without switching tools.",
  metric: {
    value: "6",
    label: "KPIs tracked"
  },
  image: "images/player.png"
}];
const SKILLS = [{
  name: "Tableau",
  pct: 96,
  note: "LOD · calc fields · actions"
}, {
  name: "SQL",
  pct: 94,
  note: "BigQuery · SQL Server · Postgres"
}, {
  name: "Prompt Engineering",
  pct: 90,
  note: "LLM tooling · structured prompts"
}, {
  name: "Python",
  pct: 88,
  note: "Pandas · NumPy · Flask"
}, {
  name: "ELT / dbt",
  pct: 85,
  note: "Data modelling · staging models · tests · Jinja"
}, {
  name: "Power BI",
  pct: 80,
  note: "DAX · Power Query"
}, {
  name: "PySpark",
  pct: 74,
  note: "Databricks notebooks · Azure Data Factory"
}];
const TOOLS = ["Tableau", "SQL", "BigQuery", "Python", "PostgreSQL", "Power BI", "dbt", "Azure Data Factory", "Git", "Figma", "Supabase", "Excel"];
const EXPERIENCE = [{
  period: "Mar 2023 — Present",
  role: "Business Intelligence Analyst",
  company: "SessionHub Softswitch Limited",
  location: "Lagos, Nigeria",
  bullets: ["Built Tableau dashboards (LOD, calculated fields, actions) tracking NGN 5M+ in outstanding invoices; validated end-to-end from SQL Server to stakeholders.", "Wrote optimised SQL (CTEs, window functions) to extract, clean and transform raw data across multiple source systems — eliminated manual prep for ops and finance.", "Automated reporting workflows via Azure Data Factory and Python — cut manual overhead, kept delivery reliable across business units.", "Built Power BI dashboards surfacing customer churn signals and channel performance trends, informing retention campaigns."]
}, {
  period: "Mar 2022 — Feb 2023",
  role: "Data Analyst",
  company: "Demsco Travels & Tours",
  location: "Lagos, Nigeria",
  bullets: ["Migrated paper records to structured Excel reporting with data-validation standards — cut reporting time by 40%.", "Designed daily/weekly performance scorecards consumed by the operations and sales leads."]
}];
const EDUCATION = {
  degree: "B.Sc.",
  school: "University of Lagos",
  where: "Lagos, Nigeria",
  year: "2018 — 2022"
};
const AWARDS = [{
  id: "1",
  year: "×2",
  title: "Tableau Viz of the Day",
  body: "Two dashboards selected for Tableau's global daily featured Viz"
}, {
  id: "3",
  year: "×4",
  title: "Tableau Vizzies Nominated",
  body: "Nominated across four categories at the Tableau Public community awards"
}, {
  id: "4",
  year: "2024",
  title: "Upwork Top Rated",
  body: "Top 1% freelancer for BI work"
}];
Object.assign(window, {
  PROFILE,
  SELECTED_WORKS,
  ALL_WORKS,
  SKILLS,
  TOOLS,
  EXPERIENCE,
  EDUCATION,
  AWARDS
});

/* ===== tweaks ===== */
const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  React.useEffect(() => {
    document.documentElement.setAttribute('data-om-starter', 'tweaks-panel');
    return () => document.documentElement.removeAttribute('data-om-starter');
  }, []);
  if (!open) return null;
  return React.createElement(React.Fragment, null, React.createElement("style", null, __TWEAKS_STYLE), React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, React.createElement("b", null, title), React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), React.createElement("div", {
    className: "twk-body"
  }, children)));
}
function TweakSection({
  label,
  children
}) {
  return React.createElement(React.Fragment, null, React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, React.createElement("div", {
    className: "twk-lbl"
  }, React.createElement("span", null, label), value != null && React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}
function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return React.createElement("div", {
    className: "twk-row twk-row-h"
  }, React.createElement("div", {
    className: "twk-lbl"
  }, React.createElement("span", null, label)), React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const valueRef = React.useRef(value);
  valueRef.current = value;
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return React.createElement(TweakRow, {
    label: label
  }, React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return React.createElement(TweakRow, {
    label: label
  }, React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return React.createElement(TweakRow, {
    label: label
  }, React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return React.createElement("div", {
    className: "twk-num"
  }, React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return React.createElement("div", {
      className: "twk-row twk-row-h"
    }, React.createElement("div", {
      className: "twk-lbl"
    }, React.createElement("span", null, label)), React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return React.createElement(TweakRow, {
    label: label
  }, React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && React.createElement("span", null, sup.map((c, j) => React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});

/* ===== charts ===== */
const {
  useState: useStateG,
  useEffect: useEffectG,
  useRef: useRefG
} = React;
const AC = "rgb(var(--c-accent))";
const IN = "rgb(var(--c-ink))";
function Spark({
  data,
  w = 120,
  h = 34,
  stroke = AC,
  fill = false,
  width = 1.6
}) {
  const max = Math.max(...data),
    min = Math.min(...data);
  const pts = data.map((v, i) => [i / (data.length - 1) * w, h - (v - min) / (max - min || 1) * (h - 4) - 2]);
  const d = pts.map((p, i) => (i ? "L" : "M") + p[0].toFixed(1) + " " + p[1].toFixed(1)).join(" ");
  return React.createElement("svg", {
    width: w,
    height: h,
    viewBox: `0 0 ${w} ${h}`,
    className: "overflow-visible"
  }, fill && React.createElement("path", {
    d: `${d} L ${w} ${h} L 0 ${h} Z`,
    fill: AC,
    opacity: ".10"
  }), React.createElement("path", {
    d: d,
    fill: "none",
    stroke: stroke,
    strokeWidth: width,
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function Bars({
  data,
  w = 120,
  h = 40,
  gap = 3
}) {
  const max = Math.max(...data);
  const bw = (w - gap * (data.length - 1)) / data.length;
  return React.createElement("svg", {
    width: w,
    height: h,
    viewBox: `0 0 ${w} ${h}`
  }, data.map((v, i) => {
    const bh = Math.max(2, v / max * h);
    return React.createElement("rect", {
      key: i,
      x: i * (bw + gap),
      y: h - bh,
      width: bw,
      height: bh,
      rx: "1.5",
      fill: IN,
      opacity: 0.18 + v / max * 0.7
    });
  }));
}
function LoadRibbon({
  h = 190
}) {
  const data = [0.78, 0.84, 0.91, 1.05, 1.18, 1.34, 1.41, 1.22, 1.06, 0.97, 1.02, 1.11, 1.24, 1.16, 0.99, 0.92];
  const w = 560,
    pad = 26;
  const yFor = v => h - pad - (v - 0.6) / 0.9 * (h - pad * 2);
  const xFor = i => pad + i / (data.length - 1) * (w - pad * 2);
  const d = data.map((v, i) => (i ? "L" : "M") + xFor(i) + " " + yFor(v)).join(" ");
  return React.createElement("svg", {
    viewBox: `0 0 ${w} ${h}`,
    className: "w-full h-auto"
  }, React.createElement("rect", {
    x: pad,
    y: yFor(1.3),
    width: w - pad * 2,
    height: yFor(0.8) - yFor(1.3),
    fill: AC,
    opacity: ".09"
  }), React.createElement("line", {
    x1: pad,
    y1: yFor(1.3),
    x2: w - pad,
    y2: yFor(1.3),
    stroke: AC,
    strokeWidth: "1",
    strokeDasharray: "4 4",
    opacity: ".55"
  }), React.createElement("line", {
    x1: pad,
    y1: yFor(0.8),
    x2: w - pad,
    y2: yFor(0.8),
    stroke: AC,
    strokeWidth: "1",
    strokeDasharray: "4 4",
    opacity: ".55"
  }), React.createElement("path", {
    d: d,
    fill: "none",
    stroke: IN,
    strokeWidth: "2",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }), data.map((v, i) => v > 1.3 ? React.createElement("circle", {
    key: i,
    cx: xFor(i),
    cy: yFor(v),
    r: "4",
    fill: AC
  }) : null), React.createElement("text", {
    x: pad,
    y: yFor(1.3) - 7,
    fill: IN,
    opacity: ".5",
    fontSize: "9",
    fontFamily: "JetBrains Mono, monospace",
    letterSpacing: "1.4"
  }, "SPIKE 1.3"), React.createElement("text", {
    x: pad,
    y: yFor(0.8) + 14,
    fill: IN,
    opacity: ".5",
    fontSize: "9",
    fontFamily: "JetBrains Mono, monospace",
    letterSpacing: "1.4"
  }, "UNDER 0.8"));
}
function MiniDash({
  tilt = true
}) {
  const kpis = [{
    k: "Invoices open",
    v: "₦5.2M",
    d: [4, 6, 5, 8, 7, 9, 12]
  }, {
    k: "Days to pay",
    v: "18.4",
    d: [12, 11, 13, 10, 9, 8, 7]
  }, {
    k: "At risk",
    v: "9",
    d: [3, 4, 3, 5, 6, 5, 4]
  }];
  return React.createElement("div", {
    className: "rounded-2xl border border-ink/12 bg-paper shadow-[0_30px_60px_-40px_rgba(0,0,0,.5)] overflow-hidden " + (tilt ? "rotate-[-1.2deg]" : "")
  }, React.createElement("div", {
    className: "flex items-center gap-2 px-4 py-3 border-b border-ink/10 bg-paper2"
  }, React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-ink/20"
  }), React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-ink/20"
  }), React.createElement("span", {
    className: "w-2 h-2 rounded-full bg-accent"
  }), React.createElement("span", {
    className: "mono text-[9px] tracking-[.22em] uppercase opacity-50 ml-2"
  }, "receivables \xB7 live")), React.createElement("div", {
    className: "grid grid-cols-3 gap-px bg-ink/10"
  }, kpis.map(k => React.createElement("div", {
    key: k.k,
    className: "bg-paper px-4 py-4"
  }, React.createElement("div", {
    className: "mono text-[8.5px] tracking-[.18em] uppercase opacity-50"
  }, k.k), React.createElement("div", {
    className: "text-2xl font-black tracking-tight mt-1"
  }, k.v), React.createElement("div", {
    className: "mt-2"
  }, React.createElement(Spark, {
    data: k.d,
    w: 92,
    h: 22,
    fill: true
  }))))), React.createElement("div", {
    className: "px-4 py-4 border-t border-ink/10"
  }, React.createElement("div", {
    className: "flex items-end justify-between mb-3"
  }, React.createElement("div", {
    className: "mono text-[9px] tracking-[.2em] uppercase opacity-50"
  }, "Ageing by bucket"), React.createElement("div", {
    className: "mono text-[9px] opacity-40"
  }, "SQL \xB7 4 sources")), React.createElement("div", {
    className: "space-y-2"
  }, [["0–30", 82], ["31–60", 54], ["61–90", 31], ["90+", 17]].map(([l, p]) => React.createElement("div", {
    key: l,
    className: "flex items-center gap-3"
  }, React.createElement("div", {
    className: "mono text-[9px] w-12 opacity-60"
  }, l), React.createElement("div", {
    className: "h-2 flex-1 rounded-full bg-ink/8 overflow-hidden"
  }, React.createElement("div", {
    className: "h-full rounded-full bg-accent",
    style: {
      width: p + "%"
    }
  })), React.createElement("div", {
    className: "mono text-[9px] w-8 text-right opacity-60"
  }, p))))));
}
function SchemaCard({
  name,
  rows
}) {
  return React.createElement("div", {
    className: "rounded-xl border border-ink/12 bg-paper overflow-hidden"
  }, React.createElement("div", {
    className: "px-3 py-2 border-b border-ink/10 bg-ink text-paper mono text-[9px] tracking-[.18em] uppercase"
  }, name), React.createElement("div", {
    className: "divide-y divide-ink/8"
  }, rows.map(r => React.createElement("div", {
    key: r[0],
    className: "px-3 py-1.5 flex items-center justify-between mono text-[10px]"
  }, React.createElement("span", {
    className: "opacity-80"
  }, r[0]), React.createElement("span", {
    className: "opacity-40"
  }, r[1])))));
}
function QueryCard({
  lines,
  name
}) {
  return React.createElement("div", {
    className: "rounded-xl border border-ink/12 bg-ink text-paper overflow-hidden"
  }, React.createElement("div", {
    className: "px-3 py-2 border-b border-paper/12 mono text-[9px] tracking-[.18em] uppercase opacity-60"
  }, name || "models/staging.sql"), React.createElement("pre", {
    className: "px-3 py-3 mono text-[10.5px] leading-[1.7] whitespace-pre overflow-x-auto"
  }, lines));
}
function PipelineRail({
  stages,
  active
}) {
  return React.createElement("div", {
    className: "relative"
  }, React.createElement("div", {
    className: "absolute left-0 right-0 top-[19px] h-px bg-ink/15"
  }), React.createElement("div", {
    className: "absolute left-0 top-[19px] h-px bg-accent transition-[width] duration-700 ease-out",
    style: {
      width: `${active / Math.max(1, stages.length - 1) * 100}%`
    }
  }), React.createElement("div", {
    className: "relative grid",
    style: {
      gridTemplateColumns: `repeat(${stages.length}, minmax(0,1fr))`
    }
  }, stages.map((s, i) => {
    const on = i <= active;
    return React.createElement("div", {
      key: s.t,
      className: "flex flex-col items-start pr-3"
    }, React.createElement("div", {
      className: "w-[38px] h-[38px] rounded-full flex items-center justify-center mono text-[10px] transition-all duration-500 " + (on ? "bg-accent text-white scale-100" : "bg-paper border border-ink/18 opacity-55 scale-95")
    }, s.k), React.createElement("div", {
      className: "mt-3 text-[13px] font-bold tracking-tight transition-opacity duration-500 " + (on ? "opacity-100" : "opacity-45")
    }, s.t), React.createElement("div", {
      className: "mono text-[9px] mt-1 leading-relaxed transition-opacity duration-500 " + (on ? "opacity-55" : "opacity-25")
    }, s.s));
  })));
}
function CoverageGrid({
  items
}) {
  return React.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-4 gap-px bg-ink/10 border border-ink/10 rounded-2xl overflow-hidden"
  }, items.map(it => React.createElement("div", {
    key: it.name,
    className: "bg-paper p-5 group"
  }, React.createElement("div", {
    className: "flex items-baseline justify-between"
  }, React.createElement("div", {
    className: "text-[15px] font-bold tracking-tight"
  }, it.name), React.createElement("div", {
    className: "mono text-[9px] opacity-40"
  }, it.pct)), React.createElement("div", {
    className: "mt-3 grid grid-cols-10 gap-[3px]"
  }, Array.from({
    length: 10
  }).map((_, i) => React.createElement("div", {
    key: i,
    className: "h-[18px] rounded-[2px] transition-colors duration-300 " + (i * 10 < it.pct ? "bg-accent" : "bg-ink/10")
  }))), React.createElement("div", {
    className: "mono text-[9.5px] opacity-45 mt-3 leading-relaxed"
  }, it.note))), Array.from({
    length: (4 - items.length % 4) % 4
  }).map((_, i) => React.createElement("div", {
    key: "pad" + i,
    className: "bg-paper p-5 flex items-center justify-center"
  }, React.createElement("span", {
    className: "mono text-[9.5px] tracking-[.16em] uppercase text-center leading-relaxed",
    style: {
      opacity: .35
    }
  }, "Databricks \xB7 Azure Data Factory"))));
}
Object.assign(window, {
  Spark,
  Bars,
  LoadRibbon,
  MiniDash,
  SchemaCard,
  QueryCard,
  PipelineRail,
  CoverageGrid
});

/* ===== worklist ===== */
const {
  useState: useStateW,
  useEffect: useEffectW,
  useRef: useRefW
} = React;
const WORK_META = {
  "05": {
    role: "Analyst · Dashboard design",
    outcome: "A season of Chelsea FC physical data read as one navigable player profile, with an accordion menu Tableau does not ship.",
    stats: [["Pages", "2"], ["Data tables", "4"], ["Parameters", "1 + 3 actions"]],
    tags: ["Tableau", "Parameter actions", "Dynamic zone visibility", "Figma"],
    gallery: ["images/player.png", "images/cfc-frames.png"],
    next: "Take the accordion pattern into the load-demand page so both screens navigate the same way.",
    graphic: "bars"
  },
  "04": {
    role: "Analyst · Data Viz",
    outcome: "One board that serves any creator in the dataset, with a reference date so the rolling window stays honest.",
    stats: [["Creators", "9"], ["Platforms", "4"], ["Windows", "30 / 60 / 90"]],
    tags: ["Tableau", "Parameters", "Excel"],
    gallery: ["images/podcast.png"],
    next: "Wire it to platform APIs so the reference date stops being a parameter and starts being today.",
    graphic: "ribbon"
  },
  "09": {
    role: "Analyst · Data Viz",
    outcome: "54 countries, 108 heads of state, one polar map — built on a dataset and a coordinate system I made myself.",
    stats: [["Countries", "54"], ["Heads of state", "108"], ["Ring", "5 years"]],
    tags: ["Tableau", "MAKEPOINT / MAKELINE", "FIXED LODs", "Parameters", "GeoJSON", "Figma"],
    gallery: ["images/leaders.png"],
    next: "Add the leaders in between — every head of state since independence, not just the first and the current — so the rings become a timeline rather than two snapshots.",
    graphic: "bars"
  },
  "01": {
    role: "Data & Product · client build",
    outcome: "A bespoke, week-long favour became a self-serve product: any vendor's export in, a per-athlete readiness read out in seconds.",
    stats: [["Origin", "Club data comp"], ["Load time", "~3 min → ~3s"], ["Signups", "40+ at launch"]],
    tags: ["React", "TypeScript", "Supabase", "Python", "ACWR", "AI column mapping"],
    gallery: ["images/trackperform/player-monthly.png", "images/trackperform/performance-calendar.png", "images/trackperform/rankings-light.png"],
    next: "With the intake fixed, the product could be about the read rather than the upload. A Python service turns each athlete's load into an acute:chronic ratio and colours it; a daily page opens on the six team KPIs with a seven-day trend and targets you set yourself; max speed analysis tracks peak speed, 90% frequency and neuromuscular state across the last fifty sessions; a monthly calendar carries an EWMA ACWR level in every cell; and rankings read each player against the target range for the metric a coach cares about that week. TrackPerform is a subscription product today — upload an export from any major vendor, in almost any shape, and the readiness read comes back in seconds. The number was always sitting in the data; it just used to take until Wednesday to find it.",
    graphic: "ribbon"
  },
  "02": {
    role: "Data & Product · client build",
    outcome: "Launched 1 August 2026, with around thirty signups and strong early reviews from the coaches using it.",
    stats: [["Launched", "1 Aug 2026"], ["Signups", "30+"], ["Drills per career", "200–500"]],
    tags: ["React", "TypeScript", "Supabase", "Postgres RLS", "Calendar UX"],
    gallery: ["images/drillcal/hero.png", "images/drillcal/daily-planner.png", "images/drillcal/drills.png"],
    next: "The product a coach keeps: the week planned by day and period, a drill library that belongs to the account rather than the club, a tactical board saved against the drill it explains, roles for assistants and analysts, attendance taken against the session that was planned, and session plans exported as PDFs to hand to players and staff. Launched on 1 August 2026 with around thirty signups and strong early reviews. The next move is GPS: pulling actual session output back in so the plan can be judged against what the week really cost.",
    graphic: "bars"
  },
  "03": {
    role: "Analyst · Data Viz",
    outcome: "Selected as Tableau Viz of the Day; used by community groups in conversations with city ops.",
    stats: [["Rows", "108k+"], ["Departments", "17"], ["Zip codes", "44"]],
    tags: ["Tableau", "Mapbox", "Figma", "LOD calcs", "Open data"],
    gallery: ["images/nyc.png"],
    next: "Rebuild the map layer on a live 311 feed so the dashboard answers today's question, not last year's.",
    graphic: "bars"
  }
};
const SOON = [{
  title: "Einride pipeline",
  tag: "Analytics engineering",
  blurb: "Ingestion → dbt staging → Databricks lakehouse. A full modern-stack build, documented as it happens."
}, {
  title: "SessionHub semantic layer",
  tag: "dbt · metrics",
  blurb: "One definition of revenue, churn and days-to-pay that every dashboard reads from."
}];
function HoverMedia({
  images,
  pos,
  show
}) {
  if (!images) return null;
  return React.createElement("div", {
    className: "hover-media hidden lg:block",
    style: {
      left: pos.x,
      top: pos.y,
      opacity: show ? 1 : 0,
      transform: "translate(-50%,-50%)"
    }
  }, React.createElement("div", {
    className: "relative w-[300px] h-[210px]"
  }, images.slice(0, 3).map((src, i) => React.createElement("img", {
    key: src + i,
    src: src,
    alt: "",
    className: "absolute inset-0 w-full h-full object-cover rounded-lg border border-ink/15 shadow-[0_24px_50px_-24px_rgba(0,0,0,.55)] transition-transform duration-500",
    style: {
      transform: show ? `rotate(${(i - 1) * 5}deg) translate(${(i - 1) * 22}px, ${Math.abs(i - 1) * 10}px)` : "none",
      zIndex: 3 - i
    }
  }))));
}
function WorkList({
  works,
  go,
  dense
}) {
  const [hover, setHover] = useStateW(null);
  const [pos, setPos] = useStateW({
    x: 0,
    y: 0
  });
  useEffectW(() => {
    const onMove = e => setPos({
      x: e.clientX + 190,
      y: e.clientY
    });
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  const meta = hover ? WORK_META[hover] : null;
  return React.createElement("div", {
    className: "wlist border-t border-ink/12"
  }, works.map(w => {
    const m = WORK_META[w.id];
    return React.createElement("button", {
      key: w.id,
      onClick: () => go("case:" + w.id),
      onMouseEnter: () => setHover(w.id),
      onMouseLeave: () => setHover(null),
      className: "wrow group w-full text-left border-b border-ink/12 py-8 md:py-10 block"
    }, React.createElement("div", {
      className: "grid grid-cols-12 gap-4 md:gap-8 items-start px-1"
    }, React.createElement("div", {
      className: "col-span-12 md:col-span-1 mono text-[10px] tracking-[.22em] opacity-40 pt-2"
    }, w.no), React.createElement("div", {
      className: "col-span-12 md:col-span-5"
    }, React.createElement("h3", {
      className: "text-3xl md:text-[42px] font-black tracking-[-.035em] leading-none group-hover:text-accent transition-colors duration-300"
    }, w.title), React.createElement("div", {
      className: "mono text-[10px] tracking-[.16em] uppercase opacity-50 mt-3"
    }, w.client)), React.createElement("div", {
      className: "col-span-12 md:col-span-4"
    }, React.createElement("p", {
      className: "text-[15px] leading-relaxed opacity-75 max-w-md"
    }, m ? m.outcome : w.blurb), !dense && m && React.createElement("div", {
      className: "flex flex-wrap gap-1.5 mt-4"
    }, m.tags.slice(0, 4).map(t => React.createElement("span", {
      key: t,
      className: "chip"
    }, t)))), React.createElement("div", {
      className: "col-span-12 md:col-span-2 md:text-right"
    }, !dense && m ? React.createElement("div", {
      className: "flex md:justify-end gap-6 md:gap-5 flex-wrap"
    }, m.stats.map(([k, v]) => React.createElement("div", {
      key: k
    }, React.createElement("div", {
      className: "mono text-[8.5px] tracking-[.18em] uppercase opacity-40"
    }, k), React.createElement("div", {
      className: "text-[15px] font-bold tracking-tight mt-0.5"
    }, v)))) : React.createElement("div", {
      className: "mono text-[10px] opacity-40"
    }, w.year), React.createElement("div", {
      className: "mono text-[10px] tracking-[.2em] uppercase mt-4 md:mt-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    }, "Case study \u2197"))));
  }), React.createElement(HoverMedia, {
    images: meta ? meta.gallery : null,
    pos: pos,
    show: !!meta
  }));
}
function CaseStudy({
  id,
  go
}) {
  const work = ALL_WORKS.find(w => w.id === id) || SELECTED_WORKS[0];
  const m = WORK_META[id] || WORK_META["01"];
  const [active, setActive] = useStateW(0);
  useRevealT(id);
  const sections = [...(work.process || []).map(p => ({
    n: p.n,
    t: p.t,
    d: p.d
  })), {
    n: "05",
    t: "What I'd do next",
    d: m.next
  }];
  useEffectW(() => {
    const onScroll = () => {
      const marks = sections.map(s => document.getElementById("s-" + s.n)).filter(Boolean);
      let cur = 0;
      marks.forEach((el, i) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.45) cur = i;
      });
      setActive(cur);
    };
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [id]);
  return React.createElement("main", {
    className: "pt-32 grain"
  }, React.createElement("section", {
    className: "shell"
  }, React.createElement("button", {
    onClick: () => go("work"),
    className: "mono text-[10px] tracking-[.22em] uppercase opacity-50 hover:opacity-100 transition-opacity"
  }, "\u2190 All work"), React.createElement("div", {
    className: "flex flex-wrap gap-1.5 mt-8"
  }, React.createElement("span", {
    className: "chip chip-accent"
  }, "\u2605 ", m.role), m.tags.map(t => React.createElement("span", {
    key: t,
    className: "chip"
  }, t))), React.createElement("h1", {
    className: "claim text-[13vw] md:text-[86px] mt-7"
  }, work.title), React.createElement("p", {
    className: "text-[19px] md:text-[24px] leading-[1.45] max-w-3xl mt-6 opacity-85"
  }, m.outcome), React.createElement("div", {
    className: "flex flex-wrap gap-10 md:gap-16 mt-10 pb-12 border-b border-ink/12"
  }, m.stats.map(([k, v]) => React.createElement("div", {
    key: k
  }, React.createElement("div", {
    className: "mono text-[9px] tracking-[.2em] uppercase opacity-45"
  }, k), React.createElement("div", {
    className: "text-3xl md:text-[38px] font-black tracking-[-.04em] mt-1"
  }, v))), React.createElement("div", null, React.createElement("div", {
    className: "mono text-[9px] tracking-[.2em] uppercase opacity-45"
  }, "Year"), React.createElement("div", {
    className: "text-3xl md:text-[38px] font-black tracking-[-.04em] mt-1"
  }, work.year)))), React.createElement("section", {
    className: "shell mt-12"
  }, React.createElement("div", {
    className: "rounded-2xl overflow-hidden border border-ink/12 bg-paper2 reveal"
  }, React.createElement("img", {
    src: work.image,
    alt: work.title,
    className: "w-full object-cover max-h-[560px]"
  }))), React.createElement("section", {
    className: "shell mt-24 grid grid-cols-12 gap-10"
  }, React.createElement("aside", {
    className: "hidden md:block col-span-3"
  }, React.createElement("div", {
    className: "sticky top-32 space-y-3"
  }, React.createElement("div", {
    className: "eyebrow opacity-45 mb-4"
  }, "Contents"), sections.map((s, i) => React.createElement("a", {
    key: s.n,
    href: "#s-" + s.n,
    className: "block mono text-[11px] tracking-[.06em] leading-relaxed transition-colors " + (i === active ? "text-accent" : "opacity-45 hover:opacity-80")
  }, React.createElement("span", {
    className: "opacity-50 mr-2"
  }, s.n), s.t)))), React.createElement("div", {
    className: "col-span-12 md:col-span-9 space-y-20"
  }, sections.map((s, i) => React.createElement("div", {
    key: s.n,
    id: "s-" + s.n,
    className: "reveal scroll-mt-32"
  }, React.createElement("div", {
    className: "flex items-baseline gap-4"
  }, React.createElement("span", {
    className: "mono text-[10px] tracking-[.24em] text-accent"
  }, s.n), React.createElement("h2", {
    className: "text-[30px] md:text-[40px] font-black tracking-[-.035em] leading-none"
  }, s.t)), React.createElement("p", {
    className: "text-[17px] md:text-[19px] leading-[1.65] max-w-2xl mt-5 opacity-80"
  }, s.d), i === 1 && React.createElement("div", {
    className: "grid md:grid-cols-2 gap-4 mt-9"
  }, React.createElement(SchemaCard, {
    name: "fct_session_load",
    rows: [["player_id", "int"], ["session_date", "date"], ["total_distance_m", "num"], ["hsr_m", "num"], ["player_load", "num"], ["acwr", "num"]]
  }), React.createElement(QueryCard, {
    lines: `select
  player_id,
  session_date,
  sum(total_distance) as td,
  avg(player_load) over (
    order by session_date
    rows between 6 preceding and current row
  ) as acute_7d
from {{ ref('stg_gps_sessions') }}
group by 1, 2`
  })), i === 2 && m.graphic === "ribbon" && React.createElement("figure", {
    className: "mt-9 rounded-2xl border border-ink/12 bg-paper2 p-6"
  }, React.createElement(LoadRibbon, null), React.createElement("figcaption", {
    className: "mono text-[9.5px] tracking-[.16em] uppercase opacity-45 mt-3"
  }, "Acute:chronic workload ratio \xB7 16-week window \xB7 flagged spikes in accent")), i === 3 && m.gallery.length > 1 && React.createElement("div", {
    className: "grid md:grid-cols-2 gap-4 mt-9"
  }, m.gallery.slice(0, 2).map(g => React.createElement("img", {
    key: g,
    src: g,
    alt: "",
    className: "w-full rounded-xl border border-ink/12 object-cover h-[240px]"
  }))))))), React.createElement("section", {
    className: "shell mt-28"
  }, React.createElement("div", {
    className: "eyebrow opacity-45"
  }, "Built with"), React.createElement("div", {
    className: "flex flex-wrap gap-2 mt-4"
  }, (work.stack || m.tags).map(t => React.createElement("span", {
    key: t,
    className: "chip chip-solid"
  }, t)))), React.createElement("section", {
    className: "shell mt-24 pb-28"
  }, React.createElement("div", {
    className: "dash pb-8 mb-8"
  }), React.createElement("div", {
    className: "eyebrow opacity-45 mb-6"
  }, "Next project"), (() => {
    const idx = SELECTED_WORKS.findIndex(w => w.id === id);
    const nx = SELECTED_WORKS[(idx + 1) % SELECTED_WORKS.length];
    return React.createElement("button", {
      onClick: () => go("case:" + nx.id),
      className: "group text-left"
    }, React.createElement("h3", {
      className: "claim text-[12vw] md:text-[76px] group-hover:text-accent transition-colors duration-300"
    }, nx.title), React.createElement("p", {
      className: "text-[16px] opacity-70 max-w-xl mt-4"
    }, (WORK_META[nx.id] || {}).outcome));
  })()));
}
Object.assign(window, {
  WORK_META,
  SOON,
  WorkList,
  CaseStudy,
  HoverMedia
});

/* ===== mark ===== */
const PAL4 = {
  studio: {
    label: "Studio (bone & red)",
    swatch: ["#ebe9df", "#2e2c25", "#d34530"],
    light: {
      paper: "235 233 223",
      paper2: "245 244 244",
      ink: "46 44 37",
      accent: "211 69 48",
      accent2: "133 124 106",
      cards: [{
        bg: "#f5f4f4",
        fg: "dark"
      }, {
        bg: "#151410",
        fg: "light"
      }, {
        bg: "#d34530",
        fg: "light"
      }],
      soft: ["#e3e0d4", "#f0eee6"]
    },
    dark: {
      paper: "21 20 16",
      paper2: "31 29 24",
      ink: "235 233 223",
      accent: "224 92 68",
      accent2: "156 146 126",
      cards: [{
        bg: "#242219",
        fg: "light"
      }, {
        bg: "#0c0b09",
        fg: "light"
      }, {
        bg: "#b8351f",
        fg: "light"
      }],
      soft: ["#1e1c17", "#181712"]
    }
  }
};
PAL4.warm = {
  label: "Warm (bone & rust)",
  swatch: ["#f4efe6", "#231f1c", "#d2552b"],
  light: {
    paper: "244 239 230",
    paper2: "235 229 218",
    ink: "35 31 28",
    accent: "197 74 34",
    accent2: "94 106 76",
    cards: [{
      bg: "#ece5d8",
      fg: "dark"
    }, {
      bg: "#e2e6da",
      fg: "dark"
    }, {
      bg: "#c54a22",
      fg: "light"
    }],
    soft: ["#eee7db", "#e7e9de"]
  },
  dark: {
    paper: "26 23 21",
    paper2: "35 31 28",
    ink: "238 232 222",
    accent: "226 116 74",
    accent2: "150 162 118",
    cards: [{
      bg: "#2b2622",
      fg: "light"
    }, {
      bg: "#252a22",
      fg: "light"
    }, {
      bg: "#9c3a18",
      fg: "light"
    }],
    soft: ["#241f1c", "#20231d"]
  }
};
function whitePal(label, sw, accent, accent2, darkAccent, tints) {
  return {
    label,
    swatch: sw,
    light: {
      paper: "255 255 255",
      paper2: "245 245 243",
      ink: "18 18 20",
      accent,
      accent2,
      cards: tints,
      soft: ["#f6f6f4", "#f1f1ef"]
    },
    dark: {
      paper: "16 17 19",
      paper2: "24 25 28",
      ink: "234 234 232",
      accent: darkAccent,
      accent2,
      cards: [{
        bg: "#1e2029",
        fg: "light"
      }, {
        bg: "#0e0f11",
        fg: "light"
      }, {
        bg: "#252730",
        fg: "light"
      }, {
        bg: "#1b2420",
        fg: "light"
      }, {
        bg: "#2a2320",
        fg: "light"
      }, {
        bg: "#17222b",
        fg: "light"
      }],
      soft: ["#1a1b1e", "#171819"]
    }
  };
}
PAL4.lumen = whitePal("Lumen (white & lime)", ["#ffffff", "#0d0d0d", "#b6e21a"], "150 200 20", "118 122 110", "198 240 60", [{
  bg: "#f4f7e8",
  fg: "dark"
}, {
  bg: "#d6f56a",
  fg: "dark"
}, {
  bg: "#0d0d0d",
  fg: "light"
}, {
  bg: "#e9eff8",
  fg: "dark"
}, {
  bg: "#f6ead2",
  fg: "dark"
}, {
  bg: "#3f4d12",
  fg: "light"
}]);
PAL4.cobalt = whitePal("Cobalt (white & blue)", ["#ffffff", "#121214", "#1f4fe0"], "31 79 224", "120 126 140", "122 158 255", [{
  bg: "#f8e2c5",
  fg: "dark"
}, {
  bg: "#f5f5f7",
  fg: "dark"
}, {
  bg: "#f6643e",
  fg: "light"
}, {
  bg: "#eef1fb",
  fg: "dark"
}, {
  bg: "#1f4fe0",
  fg: "light"
}, {
  bg: "#121214",
  fg: "light"
}]);
PAL4.cobalt.light.accent2 = "216 78 44";
PAL4.cobalt.light.soft = ["#fdf3e6", "#f5f5f7"];
PAL4.cobalt.dark.accent2 = "246 122 88";
PAL4.forest = whitePal("Forest (white & green)", ["#ffffff", "#101613", "#1f7a4c"], "26 108 68", "130 140 128", "94 200 148", [{
  bg: "#eaf4ee",
  fg: "dark"
}, {
  bg: "#1f7a4c",
  fg: "light"
}, {
  bg: "#101613",
  fg: "light"
}, {
  bg: "#f1ead6",
  fg: "dark"
}, {
  bg: "#d8e6ab",
  fg: "dark"
}, {
  bg: "#2b4a54",
  fg: "light"
}]);
PAL4.warmsnow = {
  label: "Warm Snow (snow, matcha & coffee)",
  swatch: ["#fcfcfc", "#4f3a2e", "#dfe7c8"],
  light: {
    paper: "252 252 252",
    paper2: "243 238 230",
    ink: "35 31 28",
    accent: "197 74 34",
    accent2: "92 110 66",
    cards: [{
      bg: "#dfe7c8",
      fg: "dark"
    }, {
      bg: "#4f3a2e",
      fg: "light"
    }, {
      bg: "#e9b153",
      fg: "dark"
    }, {
      bg: "#f0e6d6",
      fg: "dark"
    }, {
      bg: "#2f4f42",
      fg: "light"
    }, {
      bg: "#c54a22",
      fg: "light"
    }],
    soft: ["#eef2e2", "#f7efe2"]
  },
  dark: {
    ...PAL4.warm.dark,
    cards: [{
      bg: "#2b2622",
      fg: "light"
    }, {
      bg: "#252a22",
      fg: "light"
    }, {
      bg: "#9c3a18",
      fg: "light"
    }, {
      bg: "#332b24",
      fg: "light"
    }, {
      bg: "#1f2a24",
      fg: "light"
    }, {
      bg: "#4a3a1c",
      fg: "light"
    }]
  }
};
PAL4.studiosnow = {
  label: "Studio Snow (snow, pine & red)",
  swatch: ["#fcfcfc", "#1e3a31", "#d34530"],
  light: {
    paper: "252 252 252",
    paper2: "237 235 226",
    ink: "46 44 37",
    accent: "211 69 48",
    accent2: "47 82 68",
    cards: [{
      bg: "#1e3a31",
      fg: "light"
    }, {
      bg: "#f8e2c5",
      fg: "dark"
    }, {
      bg: "#d34530",
      fg: "light"
    }, {
      bg: "#e7ecdf",
      fg: "dark"
    }, {
      bg: "#3b2b26",
      fg: "light"
    }, {
      bg: "#f6643e",
      fg: "light"
    }, {
      bg: "#dbe4ef",
      fg: "dark"
    }, {
      bg: "#2b4a54",
      fg: "light"
    }, {
      bg: "#e9b153",
      fg: "dark"
    }, {
      bg: "#e7e2f1",
      fg: "dark"
    }],
    soft: ["#e9efe8", "#f4ecdd"]
  },
  dark: {
    ...PAL4.studio.dark,
    cards: [{
      bg: "#1b2a24",
      fg: "light"
    }, {
      bg: "#242219",
      fg: "light"
    }, {
      bg: "#b8351f",
      fg: "light"
    }, {
      bg: "#22271f",
      fg: "light"
    }, {
      bg: "#2c211c",
      fg: "light"
    }, {
      bg: "#4a3a1c",
      fg: "light"
    }, {
      bg: "#1a2430",
      fg: "light"
    }, {
      bg: "#1f3036",
      fg: "light"
    }, {
      bg: "#3a2f18",
      fg: "light"
    }, {
      bg: "#272233",
      fg: "light"
    }]
  }
};
function resolvePal(key, dark) {
  const p = PAL4[key] || PAL4.studiosnow;
  return p[dark ? "dark" : "light"];
}
function applyPal4(key, dark) {
  const p = resolvePal(key, dark);
  const r = document.documentElement.style;
  document.documentElement.setAttribute("data-dark", dark ? "1" : "0");
  r.setProperty("--c-paper", p.paper);
  r.setProperty("--c-paper2", p.paper2);
  r.setProperty("--c-ink", p.ink);
  r.setProperty("--c-accent", p.accent);
  r.setProperty("--c-accent2", p.accent2);
  const chan = p.paper.split(" ").map(Number);
  const nearWhite = Math.min.apply(null, chan) >= 253;
  r.setProperty("--c-card", dark || nearWhite ? p.paper2 : "255 255 255");
  r.setProperty("--c-card2", dark ? p.paper : p.paper2);
  const bandLight = chan.map(v => Math.max(0, v - 7)).join(" ");
  r.setProperty("--c-band", dark ? p.paper2 : bandLight);
}
function T({
  children,
  light
}) {
  if (typeof children !== "string") return React.createElement(React.Fragment, null, children);
  const parts = children.split(/(~[^~]+~|\^[^^]+\^)/g);
  return React.createElement(React.Fragment, null, parts.map((p, i) => {
    const tinted = (p.startsWith("~") && p.endsWith("~") || p.startsWith("^") && p.endsWith("^")) && p.length > 2;
    if (!tinted) return React.createElement(React.Fragment, {
      key: i
    }, p);
    const body = p.slice(1, -1);
    if (light) return React.createElement("span", {
      key: i,
      style: {
        opacity: 1,
        fontWeight: 600
      }
    }, body);
    return React.createElement("span", {
      key: i,
      className: p.startsWith("~") ? "text-accent" : "text-accent2"
    }, body);
  }));
}
function Mark({
  size = 46,
  className = "",
  flip = false
}) {
  const a = flip ? "rgb(var(--c-accent))" : "rgb(var(--c-ink))";
  const b = flip ? "rgb(var(--c-ink))" : "rgb(var(--c-accent))";
  return React.createElement("span", {
    className: "sig inline-block select-none whitespace-nowrap " + className,
    style: {
      fontSize: size * 1.85,
      lineHeight: 1.05
    }
  }, React.createElement("span", {
    style: {
      color: a
    }
  }, "Uduak"), " ", React.createElement("span", {
    style: {
      color: b
    }
  }, "Afang"));
}
function useReveal4(dep) {
  const {
    useEffect
  } = React;
  useEffect(() => {
    let queued = 0,
      alive = true;
    const pass = () => {
      queued = 0;
      if (!alive) return;
      const fold = window.innerHeight * 0.96;
      document.querySelectorAll(".reveal:not(.in)").forEach(el => {
        const r = el.getBoundingClientRect();
        if (r.height && r.top < fold) el.classList.add("in");
      });
    };
    const kick = () => {
      if (!queued) queued = requestAnimationFrame(pass);
    };
    pass();
    window.addEventListener("scroll", kick, {
      passive: true
    });
    window.addEventListener("resize", kick);
    const t = setInterval(kick, 400);
    return () => {
      alive = false;
      cancelAnimationFrame(queued);
      clearInterval(t);
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
    };
  }, [dep]);
}
Object.assign(window, {
  PAL4,
  resolvePal,
  applyPal4,
  T,
  Mark,
  useReveal4
});

/* ===== robot ===== */
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function RobotArt({
  walking = true
}) {
  const I = "rgb(var(--c-ink))";
  const P = "rgb(var(--c-paper))";
  const A = "rgb(var(--c-accent))";
  const A2 = "rgb(var(--c-accent2))";
  const limb = {
    fill: I
  };
  const back = {
    fill: I,
    opacity: .34
  };
  const w = n => walking ? n : "";
  const Leg = ({
    cls,
    style
  }) => React.createElement("g", {
    transform: "translate(1.5 -26)"
  }, React.createElement("g", {
    className: w(cls),
    style: {
      transformOrigin: "0px 0px"
    }
  }, React.createElement("rect", _extends({
    x: "-3.2",
    y: "0",
    width: "6.4",
    height: "11",
    rx: "2"
  }, style)), React.createElement("circle", _extends({
    cx: "0",
    cy: "11.5",
    r: "2.8"
  }, style)), React.createElement("g", {
    transform: "translate(0 12)"
  }, React.createElement("g", {
    className: w(cls === "rb-thighA" ? "rb-kneeA" : "rb-kneeB"),
    style: {
      transformOrigin: "0px 0px"
    }
  }, React.createElement("rect", _extends({
    x: "-2.8",
    y: "0",
    width: "5.6",
    height: "10",
    rx: "2"
  }, style)), React.createElement("rect", _extends({
    x: "-4.6",
    y: "9.4",
    width: "9.6",
    height: "4",
    rx: "1.2"
  }, style))))));
  const Arm = ({
    cls,
    style
  }) => React.createElement("g", {
    transform: "translate(1.2 -44)"
  }, React.createElement("g", {
    className: w(cls),
    style: {
      transformOrigin: "0px 0px"
    }
  }, React.createElement("rect", _extends({
    x: "-2.6",
    y: "0",
    width: "5.2",
    height: "9",
    rx: "2"
  }, style)), React.createElement("circle", _extends({
    cx: "0",
    cy: "9.4",
    r: "2.4"
  }, style)), React.createElement("g", {
    transform: "translate(0 10)"
  }, React.createElement("g", {
    className: w(cls === "rb-armA" ? "rb-elbowA" : "rb-elbowB"),
    style: {
      transformOrigin: "0px 0px"
    }
  }, React.createElement("rect", _extends({
    x: "-2.4",
    y: "0",
    width: "4.8",
    height: "8",
    rx: "2"
  }, style)), React.createElement("rect", _extends({
    x: "-3",
    y: "7.4",
    width: "6",
    height: "4.4",
    rx: "1.6"
  }, style))))));
  return React.createElement("g", null, React.createElement("ellipse", {
    cx: "1",
    cy: "1.5",
    rx: "13",
    ry: "2.4",
    fill: I,
    opacity: ".13"
  }), React.createElement("g", {
    className: w("rb-bob")
  }, React.createElement(Leg, {
    cls: "rb-thighB",
    style: back
  }), React.createElement(Arm, {
    cls: "rb-armB",
    style: back
  }), React.createElement("rect", {
    x: "-8",
    y: "-46",
    width: "18.5",
    height: "21",
    rx: "4",
    fill: I
  }), React.createElement("rect", {
    x: "-4.6",
    y: "-41",
    width: "11.5",
    height: "1.8",
    rx: ".9",
    fill: P,
    opacity: ".4"
  }), React.createElement("rect", {
    x: "-4.6",
    y: "-37.4",
    width: "11.5",
    height: "1.8",
    rx: ".9",
    fill: P,
    opacity: ".4"
  }), React.createElement("circle", {
    cx: "1.2",
    cy: "-31",
    r: "3.4",
    fill: A
  }), React.createElement("circle", {
    cx: "1.2",
    cy: "-31",
    r: "1.3",
    fill: P,
    opacity: ".7"
  }), React.createElement(Leg, {
    cls: "rb-thighA",
    style: limb
  }), React.createElement(Arm, {
    cls: "rb-armA",
    style: limb
  }), React.createElement("rect", {
    x: "-1",
    y: "-50",
    width: "4.6",
    height: "4.6",
    fill: I,
    opacity: ".85"
  }), React.createElement("rect", {
    x: "-7.5",
    y: "-63",
    width: "18",
    height: "13.5",
    rx: "4",
    fill: I
  }), React.createElement("rect", {
    x: "-3.4",
    y: "-59.6",
    width: "12",
    height: "5.6",
    rx: "2.4",
    fill: A
  }), React.createElement("circle", {
    cx: "0.2",
    cy: "-56.8",
    r: "1.4",
    fill: P
  }), React.createElement("circle", {
    cx: "5",
    cy: "-56.8",
    r: "1.4",
    fill: P
  }), React.createElement("path", {
    d: "M6.5 -63v-7",
    stroke: I,
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }), React.createElement("circle", {
    cx: "6.5",
    cy: "-71.5",
    r: "2.4",
    fill: A2
  })));
}
function RobotFigure({
  height = 200,
  walking = false,
  className = ""
}) {
  return React.createElement("svg", {
    viewBox: "-20 -80 42 86",
    height: height,
    className: className,
    style: {
      display: "block",
      overflow: "visible"
    },
    "aria-hidden": "true"
  }, React.createElement(RobotArt, {
    walking: walking
  }));
}
Object.assign(window, {
  RobotArt,
  RobotFigure
});

/* ===== walker ===== */
const {
  useMemo: useMemoB
} = React;
function seedBars(n, seed, min, max) {
  let s = seed;
  const out = [];
  for (let i = 0; i < n; i++) {
    s = (s * 9301 + 49297) % 233280;
    out.push(min + s / 233280 * (max - min));
  }
  return out;
}
function Walker({
  x,
  y,
  scale = 1
}) {
  const S = 1.5 * scale;
  const C = "rgb(var(--c-accent))";
  const I = "rgb(var(--c-ink))";
  return React.createElement("g", {
    transform: `translate(${x} ${y}) scale(${S})`,
    className: "walker"
  }, React.createElement("g", {
    className: "walk-bob"
  }, React.createElement("g", {
    className: "walk-armB",
    style: {
      transformOrigin: "0px -26px"
    }
  }, React.createElement("path", {
    d: "M-4 -26l-6 10",
    stroke: I,
    strokeWidth: "4.4",
    strokeLinecap: "round",
    opacity: ".35"
  })), React.createElement("g", {
    className: "walk-legB",
    style: {
      transformOrigin: "0px -13px"
    }
  }, React.createElement("path", {
    d: "M-3 -13l-4 10",
    stroke: I,
    strokeWidth: "5",
    strokeLinecap: "round",
    opacity: ".35"
  }), React.createElement("rect", {
    x: "-12",
    y: "-3.5",
    width: "11",
    height: "4.5",
    rx: "2",
    fill: I,
    opacity: ".35"
  })), React.createElement("rect", {
    x: "-8.5",
    y: "-28",
    width: "17",
    height: "16",
    rx: "4.5",
    fill: I
  }), React.createElement("rect", {
    x: "-5",
    y: "-24.5",
    width: "10",
    height: "4",
    rx: "2",
    fill: C
  }), React.createElement("circle", {
    cx: "0",
    cy: "-16.5",
    r: "1.9",
    fill: C,
    opacity: ".8"
  }), React.createElement("rect", {
    x: "-6.5",
    y: "-13.5",
    width: "13",
    height: "4",
    rx: "2",
    fill: I,
    opacity: ".8"
  }), React.createElement("path", {
    d: "M0 -36v-4.5",
    stroke: I,
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }), React.createElement("circle", {
    cx: "0",
    cy: "-42",
    r: "2.2",
    fill: C
  }), React.createElement("rect", {
    x: "-7.5",
    y: "-36.5",
    width: "15",
    height: "11",
    rx: "4",
    fill: I
  }), React.createElement("rect", {
    x: "-4.5",
    y: "-33.5",
    width: "9",
    height: "4.5",
    rx: "2.2",
    fill: C
  }), React.createElement("g", {
    className: "walk-armA",
    style: {
      transformOrigin: "0px -26px"
    }
  }, React.createElement("path", {
    d: "M4 -26l6.5 9.5",
    stroke: I,
    strokeWidth: "4.6",
    strokeLinecap: "round"
  }), React.createElement("circle", {
    cx: "11",
    cy: "-16",
    r: "2.4",
    fill: C
  })), React.createElement("g", {
    className: "walk-legA",
    style: {
      transformOrigin: "0px -13px"
    }
  }, React.createElement("path", {
    d: "M3 -13l4.5 10",
    stroke: I,
    strokeWidth: "5.2",
    strokeLinecap: "round"
  }), React.createElement("rect", {
    x: "2",
    y: "-3.8",
    width: "12",
    height: "5",
    rx: "2.4",
    fill: I
  }))), React.createElement("ellipse", {
    cx: "0",
    cy: "2.5",
    rx: "12",
    ry: "2",
    fill: I,
    opacity: ".13"
  }));
}
function DataBand({
  height = 150
}) {
  const W = 2400;
  const far = useMemoB(() => seedBars(48, 17, 18, 96), []);
  const mid = useMemoB(() => seedBars(64, 91, 10, 112), []);
  const Far = ({
    dx
  }) => React.createElement("g", {
    transform: `translate(${dx} 0)`
  }, far.map((h, i) => React.createElement("rect", {
    key: i,
    x: i * 50,
    y: 132 - h,
    width: "26",
    height: h,
    rx: "2",
    fill: "rgb(var(--c-ink))",
    opacity: ".07"
  })));
  const Mid = ({
    dx
  }) => React.createElement("g", {
    transform: `translate(${dx} 0)`
  }, mid.map((h, i) => {
    const spike = h > 100;
    return React.createElement(React.Fragment, {
      key: i
    }, React.createElement("rect", {
      x: i * 37.5,
      y: 132 - h,
      width: "16",
      height: h,
      rx: "2",
      fill: spike ? "rgb(var(--c-accent))" : "rgb(var(--c-ink))",
      opacity: spike ? .8 : .17
    }), spike && React.createElement("circle", {
      cx: i * 37.5 + 8,
      cy: 132 - h - 9,
      r: "3.5",
      fill: "rgb(var(--c-accent))"
    }));
  }));
  const Near = ({
    dx
  }) => React.createElement("g", {
    transform: `translate(${dx} 0)`
  }, Array.from({
    length: 40
  }).map((_, i) => React.createElement("rect", {
    key: i,
    x: i * 60,
    y: "140",
    width: "22",
    height: "2",
    rx: "1",
    fill: "rgb(var(--c-ink))",
    opacity: ".22"
  })));
  return React.createElement("div", {
    className: "relative w-full overflow-hidden select-none",
    style: {
      height
    },
    "aria-hidden": "true"
  }, React.createElement("svg", {
    viewBox: `0 0 ${W} ${height}`,
    preserveAspectRatio: "xMidYMax slice",
    className: "w-full h-full"
  }, React.createElement("g", {
    className: "band-far"
  }, [0, W].map(d => React.createElement(Far, {
    key: d,
    dx: d
  }))), React.createElement("g", {
    className: "band-mid"
  }, [0, W].map(d => React.createElement(Mid, {
    key: d,
    dx: d
  }))), React.createElement("g", {
    className: "band-near"
  }, [0, W].map(d => React.createElement(Near, {
    key: d,
    dx: d
  }))), React.createElement("line", {
    x1: "0",
    y1: "132",
    x2: W * 2,
    y2: "132",
    stroke: "rgb(var(--c-ink))",
    strokeWidth: "1.5",
    opacity: ".35"
  }), React.createElement(Walker, {
    x: W / 2,
    y: 132
  })), React.createElement("div", {
    className: "absolute right-6 bottom-2 mono text-[8.5px] tracking-[.22em] uppercase whitespace-nowrap",
    style: {
      opacity: .4
    }
  }, "walking the line"));
}
function SkillBars({
  items = []
}) {
  return React.createElement("div", null, items.map((s, i) => React.createElement("div", {
    key: s.name,
    className: "reveal grid grid-cols-12 gap-4 items-center py-3.5 border-b border-ink/10",
    style: {
      transitionDelay: Math.min(i, 8) * 55 + "ms"
    }
  }, React.createElement("div", {
    className: "col-span-5 sm:col-span-3"
  }, React.createElement("div", {
    className: "text-[14.5px] font-bold tracking-tight leading-tight"
  }, s.name)), React.createElement("div", {
    className: "col-span-4 sm:col-span-6"
  }, React.createElement("div", {
    className: "bar-track"
  }, React.createElement("div", {
    className: "bar-fill",
    style: {
      "--w": s.pct + "%"
    }
  })), React.createElement("div", {
    className: "mono text-[9px] tracking-[.14em] uppercase mt-2 hidden sm:block",
    style: {
      opacity: .45
    }
  }, s.note)), React.createElement("div", {
    className: "col-span-3 text-right"
  }, React.createElement("span", {
    className: "mono text-[12px] font-semibold",
    style: {
      opacity: .7
    }
  }, s.pct, React.createElement("span", {
    style: {
      opacity: .5
    }
  }, "%"))))));
}
const TRACKS4 = [{
  id: "ae",
  label: "Analytics engineering",
  n: "01",
  claim: "Raw tables in, tested models out",
  note: "The line I own end to end — sources landed, staged, tested, published.",
  stages: [{
    k: "01",
    t: "Source",
    s: "postgres · csv · api",
    w: 210,
    h: 96
  }, {
    k: "02",
    t: "Ingest",
    s: "azure data factory",
    w: 214,
    h: 120
  }, {
    k: "03",
    t: "Stage",
    s: "dbt · casts · dedupe",
    w: 226,
    h: 150
  }, {
    k: "04",
    t: "Test",
    s: "41 tests · ci gate",
    w: 210,
    h: 128
  }, {
    k: "05",
    t: "Lakehouse",
    s: "databricks · delta",
    w: 240,
    h: 162
  }, {
    k: "06",
    t: "Publish",
    s: "one semantic layer",
    w: 220,
    h: 106
  }]
}, {
  id: "bi",
  label: "Dashboards",
  n: "02",
  claim: "A question becomes a screen",
  note: "How a request turns into something a team actually opens on Monday.",
  stages: [{
    k: "01",
    t: "Question",
    s: "what decision?",
    w: 208,
    h: 98
  }, {
    k: "02",
    t: "Grain",
    s: "one row means one thing",
    w: 232,
    h: 126
  }, {
    k: "03",
    t: "Metric",
    s: "defined once, signed off",
    w: 236,
    h: 152
  }, {
    k: "04",
    t: "Wireframe",
    s: "hierarchy before colour",
    w: 232,
    h: 118
  }, {
    k: "05",
    t: "Build",
    s: "tableau · power bi",
    w: 216,
    h: 164
  }, {
    k: "06",
    t: "Adoption",
    s: "opened weekly",
    w: 210,
    h: 104
  }]
}, {
  id: "px",
  label: "Products",
  n: "03",
  claim: "From a coach's problem to a shipped app",
  note: "TrackPerform and DrillCal: the data model and the interface, same hands.",
  stages: [{
    k: "01",
    t: "Problem",
    s: "a bespoke build, every time",
    w: 226,
    h: 100
  }, {
    k: "02",
    t: "Model",
    s: "schema · supabase",
    w: 210,
    h: 124
  }, {
    k: "03",
    t: "Prototype",
    s: "claude · supabase",
    w: 212,
    h: 150
  }, {
    k: "04",
    t: "Ship",
    s: "in coaches' hands",
    w: 208,
    h: 120
  }, {
    k: "05",
    t: "Measure",
    s: "4h → 90 seconds",
    w: 216,
    h: 160
  }, {
    k: "06",
    t: "Iterate",
    s: "weekly, with users",
    w: 212,
    h: 104
  }]
}];
const STREET4 = [{
  k: "01",
  t: "Source",
  s: "postgres · csv · api",
  w: 214,
  h: 96
}, {
  k: "02",
  t: "Ingest",
  s: "azure data factory",
  w: 214,
  h: 122
}, {
  k: "03",
  t: "Stage",
  s: "dbt · 41 tests",
  w: 236,
  h: 158
}, {
  k: "04",
  t: "Lakehouse",
  s: "databricks · delta",
  w: 248,
  h: 134
}, {
  k: "05",
  t: "Semantic",
  s: "one definition each",
  w: 224,
  h: 108
}, {
  k: "06",
  t: "Surface",
  s: "tableau · power bi",
  w: 240,
  h: 170
}, {
  k: "07",
  t: "Decision",
  s: "monday, 9am",
  w: 214,
  h: 100
}];
function Building({
  x,
  b,
  base
}) {
  const y = base - b.h;
  const rows = Math.max(1, Math.floor((b.h - 72) / 24));
  return React.createElement("g", {
    transform: `translate(${x} 0)`
  }, React.createElement("rect", {
    x: "0",
    y: y,
    width: b.w,
    height: b.h,
    rx: "10",
    fill: "rgb(var(--c-paper2))",
    stroke: "rgb(var(--c-ink))",
    strokeWidth: "1.5",
    opacity: ".96"
  }), React.createElement("rect", {
    x: "0",
    y: y,
    width: b.w,
    height: "4",
    rx: "2",
    fill: "rgb(var(--c-accent))",
    opacity: ".85"
  }), React.createElement("rect", {
    x: "14",
    y: y + 15,
    width: "30",
    height: "17",
    rx: "5",
    fill: "rgb(var(--c-ink))",
    opacity: ".08"
  }), React.createElement("text", {
    x: "29",
    y: y + 27,
    fill: "rgb(var(--c-ink))",
    fontSize: "9.5",
    opacity: ".6",
    textAnchor: "middle",
    fontFamily: "var(--f-mono)",
    letterSpacing: "1"
  }, b.k), React.createElement("text", {
    x: "52",
    y: y + 28,
    fill: "rgb(var(--c-ink))",
    fontSize: "17",
    fontWeight: "700",
    fontFamily: "var(--f-head)"
  }, b.t), React.createElement("text", {
    x: "14",
    y: y + 50,
    fill: "rgb(var(--c-ink))",
    fontSize: "10",
    opacity: ".5",
    fontFamily: "var(--f-mono)",
    letterSpacing: ".8"
  }, b.s), Array.from({
    length: rows
  }).map((_, r) => React.createElement("g", {
    key: r
  }, React.createElement("circle", {
    cx: "19",
    cy: y + 68 + r * 24,
    r: "3",
    fill: "rgb(var(--c-accent2))",
    opacity: ".7"
  }), React.createElement("rect", {
    x: "29",
    y: y + 64.5 + r * 24,
    width: Math.min(64, b.w - 90),
    height: "7",
    rx: "3.5",
    fill: "rgb(var(--c-ink))",
    opacity: ".16"
  }), React.createElement("rect", {
    x: 29 + Math.min(64, b.w - 90) + 8,
    y: y + 64.5 + r * 24,
    width: b.w - 50 - Math.min(64, b.w - 90),
    height: "7",
    rx: "3.5",
    fill: "rgb(var(--c-ink))",
    opacity: ".08"
  }))));
}
const FIGURE_SRC = "images/illustrations/figure.svg";
function useFigure() {
  const {
    useState,
    useEffect
  } = React;
  const [ok, setOk] = useState(false);
  useEffect(() => {
    const im = new Image();
    im.onload = () => setOk(true);
    im.onerror = () => setOk(false);
    im.src = FIGURE_SRC;
  }, []);
  return ok;
}
function WorkflowStreet({
  height = 300,
  stages = STREET4,
  caption = "source → decision, one pass"
}) {
  const hasFigure = useFigure();
  const base = height - 54;
  let cx = 26;
  const placed = stages.map(b => {
    const at = cx;
    cx += b.w + 44;
    return {
      at,
      b
    };
  });
  const W = cx + 26;
  const roof = base - 190;
  return React.createElement("div", {
    className: "relative w-full select-none",
    "aria-hidden": "true"
  }, React.createElement("div", {
    className: "overflow-x-auto overflow-y-hidden",
    style: {
      WebkitOverflowScrolling: "touch"
    }
  }, React.createElement("svg", {
    width: W,
    height: height,
    viewBox: `0 0 ${W} ${height}`,
    style: {
      display: "block",
      minWidth: W
    }
  }, React.createElement("path", {
    d: `M0 ${roof} H${W}`,
    stroke: "rgb(var(--c-ink))",
    strokeWidth: "1.3",
    strokeDasharray: "3 9",
    opacity: ".26"
  }), React.createElement("text", {
    x: W - 8,
    y: roof - 9,
    fill: "rgb(var(--c-ink))",
    fontSize: "10",
    opacity: ".34",
    textAnchor: "end",
    fontFamily: "var(--f-mono)",
    letterSpacing: "1.6"
  }, "SCHEDULED \xB7 DAILY 06:00"), placed.map(({
    at,
    b
  }, i) => React.createElement(React.Fragment, {
    key: b.k
  }, React.createElement(Building, {
    x: at,
    b: b,
    base: base
  }), i < placed.length - 1 && React.createElement("g", {
    opacity: ".4"
  }, React.createElement("path", {
    d: `M${at + b.w} ${base - 22} h44`,
    stroke: "rgb(var(--c-accent))",
    strokeWidth: "1.6",
    strokeDasharray: "4 5"
  }), React.createElement("path", {
    d: `M${at + b.w + 34} ${base - 26} l6 4-6 4`,
    fill: "none",
    stroke: "rgb(var(--c-accent))",
    strokeWidth: "1.6",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  })))), React.createElement("line", {
    x1: "0",
    y1: base,
    x2: W,
    y2: base,
    stroke: "rgb(var(--c-ink))",
    strokeWidth: "1.8",
    opacity: ".38"
  }), Array.from({
    length: Math.ceil(W / 34)
  }).map((_, i) => React.createElement("rect", {
    key: i,
    x: i * 34,
    y: base + 11,
    width: i % 4 === 0 ? 14 : 7,
    height: "2.5",
    rx: "1.25",
    fill: "rgb(var(--c-ink))",
    opacity: i % 4 === 0 ? .3 : .15
  })), !hasFigure && React.createElement("g", {
    className: "street-walk",
    style: {
      "--walk-to": W - 150 + "px"
    }
  }, React.createElement("g", {
    transform: `translate(40 ${base}) scale(1.35)`
  }, React.createElement(RobotArt, null))), hasFigure && React.createElement("g", {
    className: "street-walk",
    style: {
      "--walk-to": W - 130 + "px"
    }
  }, React.createElement("g", {
    className: "walk-bob"
  }, React.createElement("image", {
    href: FIGURE_SRC,
    x: "12",
    y: base - 108,
    width: "108",
    height: "108",
    preserveAspectRatio: "xMidYMax meet"
  })), React.createElement("ellipse", {
    cx: "66",
    cy: base + 2,
    rx: "26",
    ry: "3",
    fill: "rgb(var(--c-ink))",
    opacity: ".12"
  })))), React.createElement("div", {
    className: "flex items-center justify-between gap-4 px-6 py-2.5 border-t border-ink/10"
  }, React.createElement("span", {
    className: "mono text-[8.5px] tracking-[.22em] uppercase",
    style: {
      opacity: .4
    }
  }, caption), React.createElement("span", {
    className: "mono text-[8.5px] tracking-[.22em] uppercase",
    style: {
      opacity: .32
    }
  }, "scroll the line \u2192")));
}
const ICO4 = {
  chart: React.createElement("g", null, React.createElement("rect", {
    x: "3",
    y: "13",
    width: "4",
    height: "8",
    rx: "1"
  }), React.createElement("rect", {
    x: "10",
    y: "8",
    width: "4",
    height: "13",
    rx: "1"
  }), React.createElement("rect", {
    x: "17",
    y: "3",
    width: "4",
    height: "18",
    rx: "1"
  })),
  star: React.createElement("g", null, React.createElement("path", {
    d: "M12 2v20M2 12h20M5 5l14 14M19 5L5 19",
    strokeWidth: "2",
    stroke: "currentColor",
    fill: "none",
    strokeLinecap: "round"
  })),
  wedge: React.createElement("g", null, React.createElement("path", {
    d: "M12 2a10 10 0 100 20 10 10 0 000-20z",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }), React.createElement("path", {
    d: "M12 12l7-5a10 10 0 00-7-3z"
  })),
  layers: React.createElement("g", null, React.createElement("path", {
    d: "M12 2l9 5-9 5-9-5 9-5z"
  }), React.createElement("path", {
    d: "M3 12l9 5 9-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinejoin: "round",
    opacity: ".5"
  }), React.createElement("path", {
    d: "M3 17l9 5 9-5",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinejoin: "round",
    opacity: ".28"
  })),
  db: React.createElement("g", null, React.createElement("ellipse", {
    cx: "12",
    cy: "5.5",
    rx: "8",
    ry: "3.2",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }), React.createElement("path", {
    d: "M4 5.5v13c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2v-13",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }), React.createElement("path", {
    d: "M4 12c0 1.8 3.6 3.2 8 3.2s8-1.4 8-3.2",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    opacity: ".5"
  })),
  braces: React.createElement("g", null, React.createElement("path", {
    d: "M9 3H7a3 3 0 00-3 3v3a3 3 0 01-3 3 3 3 0 013 3v3a3 3 0 003 3h2M15 3h2a3 3 0 013 3v3a3 3 0 003 3 3 3 0 00-3 3v3a3 3 0 01-3 3h-2",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    transform: "translate(0.5 0)"
  })),
  burst: React.createElement("g", null, React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "3.2"
  }), React.createElement("path", {
    d: "M12 2v4.5M12 17.5V22M2 12h4.5M17.5 12H22M5 5l3.2 3.2M15.8 15.8L19 19M19 5l-3.2 3.2M8.2 15.8L5 19",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    fill: "none"
  })),
  caret: React.createElement("g", null, React.createElement("path", {
    d: "M5 3l14 8.2-6.4 1.6L9.5 19 5 3z"
  })),
  bolt: React.createElement("g", null, React.createElement("path", {
    d: "M13.5 2L4 13.5h6L9.5 22 20 10h-6.5L13.5 2z"
  })),
  nodes: React.createElement("g", null, React.createElement("circle", {
    cx: "5",
    cy: "6",
    r: "2.8"
  }), React.createElement("circle", {
    cx: "19",
    cy: "12",
    r: "2.8"
  }), React.createElement("circle", {
    cx: "5",
    cy: "18",
    r: "2.8"
  }), React.createElement("path", {
    d: "M7.6 7.2l8.8 3.8M7.6 16.8l8.8-3.8",
    stroke: "currentColor",
    strokeWidth: "1.8",
    fill: "none"
  })),
  branch: React.createElement("g", null, React.createElement("circle", {
    cx: "6.5",
    cy: "5",
    r: "2.6"
  }), React.createElement("circle", {
    cx: "6.5",
    cy: "19",
    r: "2.6"
  }), React.createElement("circle", {
    cx: "17.5",
    cy: "8",
    r: "2.6"
  }), React.createElement("path", {
    d: "M6.5 7.6v8.8M17.5 10.6c0 4-11 2.4-11 6",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8"
  })),
  stack3: React.createElement("g", null, React.createElement("circle", {
    cx: "8.5",
    cy: "6",
    r: "3.4"
  }), React.createElement("circle", {
    cx: "8.5",
    cy: "14.5",
    r: "3.4",
    opacity: ".62"
  }), React.createElement("circle", {
    cx: "15.5",
    cy: "6",
    r: "3.4",
    opacity: ".38"
  }), React.createElement("circle", {
    cx: "8.5",
    cy: "21",
    r: "2.8",
    opacity: ".24"
  })),
  grid: React.createElement("g", null, React.createElement("rect", {
    x: "3",
    y: "4",
    width: "18",
    height: "16",
    rx: "2",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }), React.createElement("path", {
    d: "M3 9.5h18M3 15h18M9.5 4v16",
    stroke: "currentColor",
    strokeWidth: "1.6",
    fill: "none"
  }))
};
const TOOLS4 = [{
  name: "Tableau",
  ico: "star",
  file: "images/logos/tableau.png"
}, {
  name: "dbt",
  ico: "wedge",
  file: "images/logos/dbt.svg"
}, {
  name: "Databricks",
  ico: "layers",
  slug: "databricks"
}, {
  name: "Azure Data Factory",
  ico: "nodes",
  file: "images/logos/azure-df.svg"
}, {
  name: "Postgres",
  ico: "db",
  slug: "postgresql"
}, {
  name: "Python",
  ico: "braces",
  slug: "python"
}, {
  name: "Claude",
  ico: "burst",
  slug: "claude"
}, {
  name: "Supabase",
  ico: "bolt",
  slug: "supabase"
}, {
  name: "Power BI",
  ico: "chart"
}, {
  name: "GitHub",
  ico: "branch",
  slug: "github",
  invert: true
}, {
  name: "PySpark",
  ico: "burst",
  slug: "apachespark"
}, {
  name: "Delta Live Tables",
  ico: "nodes"
}, {
  name: "SQL",
  ico: "db"
}, {
  name: "Pandas",
  ico: "chart",
  slug: "pandas"
}, {
  name: "Excel",
  ico: "grid",
  file: "images/logos/excel.png"
}];
function ToolIcon({
  name,
  slug,
  file,
  invert,
  size = 32
}) {
  if (invert === undefined) invert = ["github"].includes(slug);
  const {
    useState
  } = React;
  const [failed, setFailed] = useState(false);
  if (file && !failed) {
    return React.createElement("img", {
      src: file,
      alt: "",
      width: size,
      height: size,
      onError: () => setFailed(true),
      style: {
        width: size,
        height: size,
        display: "block"
      }
    });
  }
  if (slug && !failed) {
    return React.createElement("img", {
      src: `https://cdn.simpleicons.org/${slug}`,
      alt: "",
      width: size,
      height: size,
      className: invert ? "ico-invert" : "",
      onError: () => setFailed(true),
      style: {
        width: size,
        height: size,
        display: "block"
      }
    });
  }
  return React.createElement("svg", {
    className: "tool-ico",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    style: {
      width: size,
      height: size
    }
  }, ICO4[name]);
}
function ToolsGrid({
  tools = TOOLS4
}) {
  return React.createElement("div", {
    className: "grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-12 gap-x-2 gap-y-7"
  }, tools.map((t, i) => React.createElement("div", {
    key: t.name,
    className: "reveal flex flex-col items-center gap-2.5",
    style: {
      transitionDelay: i % 6 * 55 + "ms"
    }
  }, React.createElement("div", {
    className: "w-full aspect-square flex items-center justify-center",
    style: {
      background: "rgb(var(--c-paper2))"
    }
  }, React.createElement(ToolIcon, {
    name: t.ico,
    slug: t.slug,
    file: t.file,
    invert: t.invert,
    size: 38
  })), React.createElement("span", {
    className: "mono text-[8px] tracking-[.14em] uppercase text-center leading-tight",
    style: {
      opacity: .55
    }
  }, t.name))));
}
function ToolsRow({
  title,
  sub
}) {
  return React.createElement("section", {
    className: "shell py-24 md:py-28"
  }, React.createElement("div", {
    className: "max-w-[620px]"
  }, React.createElement("h2", {
    className: "claim text-[10vw] md:text-[46px]"
  }, title), React.createElement("p", {
    className: "text-[16px] leading-[1.65] mt-5",
    style: {
      opacity: .78
    }
  }, React.createElement(T, null, sub))), React.createElement("div", {
    className: "grid grid-cols-3 md:grid-cols-6 gap-y-10 gap-x-4 mt-16"
  }, TOOLS4.map((t, i) => React.createElement("div", {
    key: t.name,
    className: "reveal flex flex-col items-center gap-3",
    style: {
      transitionDelay: i % 6 * 60 + "ms"
    }
  }, React.createElement("div", {
    className: "tool-tile w-16 h-16 rounded-2xl bg-paper2 flex items-center justify-center font-black text-[17px]",
    style: {
      opacity: .85
    }
  }, React.createElement(ToolIcon, {
    name: t.ico,
    slug: t.slug,
    file: t.file,
    invert: t.invert
  })), React.createElement("span", {
    className: "mono text-[9.5px] tracking-[.14em] uppercase",
    style: {
      opacity: .6
    }
  }, t.name)))));
}
Object.assign(window, {
  DataBand,
  ToolsRow,
  ToolsGrid,
  TOOLS4,
  TRACKS4,
  Walker,
  ToolIcon,
  ICO4,
  WorkflowStreet,
  STREET4,
  SkillBars
});

/* ===== bench ===== */
const BENCH = {
  ae: {
    label: "Analytics engineering",
    sub: "DBT · DATABRICKS",
    fig: "001",
    desc: "Modelling and building pipelines",
    tech: ["dbt", "Databricks", "Kafka", "Azure Data Factory", "Spark declarative pipelines"],
    note: "bronze keeps the mistakes.\nsilver fixes them once.",
    layout: "stack",
    flow: {
      main: [{
        t: "Source systems",
        s: "batch or streaming",
        g: "▤",
        c: "blue"
      }, {
        t: "Bronze",
        s: "land it raw, as-is",
        g: "◗",
        c: "bronze"
      }, {
        t: "Silver",
        s: "conform + join into one big table",
        g: "◈",
        c: "silver"
      }, {
        t: "Gold",
        s: "data marts, one per team",
        g: "★",
        c: "gold"
      }, {
        t: "Publish",
        s: "semantic layer",
        g: "▸",
        c: "green"
      }],
      edges: ["ingest", "as-is", "modelled", "served"],
      bands: [{
        from: 1,
        to: 1,
        label: "Bronze · raw",
        c: "bronze"
      }, {
        from: 2,
        to: 2,
        label: "Silver · clean",
        c: "silver"
      }, {
        from: 3,
        to: 3,
        label: "Gold · serve",
        c: "gold"
      }],
      from: 3,
      back: 2,
      branchLabel: "a test fails",
      branch: [{
        t: "Fix the model",
        s: "dbt",
        g: "✎",
        c: "red"
      }, {
        t: "Re-run",
        s: "ci gate",
        g: "↺",
        c: "red"
      }]
    },
    log: [{
      k: ">",
      t: "run analytics-engineering"
    }, {
      k: "·",
      t: "bronze: kafka topics and lake files landed raw"
    }, {
      k: "·",
      t: "silver: conformed and joined into one big table, 41 tests"
    }, {
      k: "·",
      t: "gold: a mart per team, facts and dims off the obt"
    }, {
      k: "✓",
      t: "published to the semantic layer"
    }]
  },
  bi: {
    label: "Dashboards",
    sub: "TABLEAU · POWER BI",
    fig: "002",
    desc: "Turning models into views people decide on",
    tech: ["Tableau", "Power BI", "Figma"],
    note: "if nobody would act on it,\nit does not go on the page.",
    flow: {
      main: [{
        t: "The request",
        s: "what do you need to see?",
        g: "?",
        c: "indigo"
      }, {
        t: "Define it",
        s: "the decision behind it",
        g: "≡",
        c: "violet"
      }, {
        t: "Pick the encoding",
        s: "best way to say it",
        g: "◔",
        c: "orange"
      }, {
        t: "Frame it",
        s: "figma · boxes, no numbers",
        g: "⌗",
        c: "teal"
      }, {
        t: "In use",
        s: "opened weekly",
        g: "▸",
        c: "green"
      }],
      edges: ["asked", "defined", "chosen", "built"],
      bands: [{
        from: 1,
        to: 2,
        label: "Understand, then choose",
        c: "violet"
      }, {
        from: 3,
        to: 3,
        label: "Design before build",
        c: "teal"
      }],
      from: 2,
      back: 1,
      branchLabel: "wrong question",
      branch: [{
        t: "Ask again",
        s: "the user",
        g: "✎",
        c: "red"
      }, {
        t: "Re-cut the data",
        s: "sql",
        g: "↺",
        c: "red"
      }]
    },
    log: [{
      k: ">",
      t: "open dashboards"
    }, {
      k: "·",
      t: "the request: what do you need to see, and why?"
    }, {
      k: "·",
      t: "one decision per view, one definition per metric"
    }, {
      k: "·",
      t: "encoding chosen, then framed in figma"
    }, {
      k: "✓",
      t: "shipped — 2× tableau viz of the day"
    }]
  },
  px: {
    label: "Products",
    sub: "TRACKPERFORM · DRILLCAL",
    fig: "003",
    desc: "Small products built around the data",
    tech: ["Supabase", "Claude", "Python"],
    note: "coaches tell you the truth\nthe first week or never.",
    flow: {
      main: [{
        t: "Talk to people",
        s: "coaches, in their words",
        g: "☎",
        c: "pink"
      }, {
        t: "Problem validated",
        s: "same pain, three times",
        g: "✓",
        c: "violet"
      }, {
        t: "Prototype",
        s: "react · supabase",
        g: "▤",
        c: "blue"
      }, {
        t: "Test with coaches",
        s: "their own season",
        g: "◔",
        c: "orange"
      }, {
        t: "Reship",
        s: "in production",
        g: "▸",
        c: "green"
      }],
      edges: ["listen", "validated", "built", "notes"],
      bands: [{
        from: 1,
        to: 1,
        label: "Validate first",
        c: "violet"
      }, {
        from: 2,
        to: 3,
        label: "Build, then hand it over",
        c: "blue"
      }],
      from: 3,
      back: 2,
      branchLabel: "another way",
      branch: [{
        t: "Work it in",
        s: "their words",
        g: "✎",
        c: "red"
      }, {
        t: "Re-test",
        s: "same coach",
        g: "↺",
        c: "red"
      }]
    },
    log: [{
      k: ">",
      t: "open products"
    }, {
      k: "·",
      t: "conversations first — hard drives, whatsapp, no one place"
    }, {
      k: "·",
      t: "problem validated across several coaches"
    }, {
      k: "·",
      t: "prototype, tested on a real season, reshipped"
    }, {
      k: "✓",
      t: "trackperform live · drillcal launched"
    }]
  }
};
const BENCH_KEYS = ["ae", "bi", "px"];
const BC = {
  blue: {
    t: "#d5e8fb",
    i: "#1971c2"
  },
  bronze: {
    t: "#f6ddc4",
    i: "#a9581c"
  },
  silver: {
    t: "#e5e8ea",
    i: "#63696f"
  },
  gold: {
    t: "#fbeec0",
    i: "#a8790a"
  },
  green: {
    t: "#cbeed5",
    i: "#2b8a3e"
  },
  indigo: {
    t: "#dee2ff",
    i: "#3b5bdb"
  },
  violet: {
    t: "#e7dbff",
    i: "#6741d9"
  },
  orange: {
    t: "#ffe3cc",
    i: "#d9480f"
  },
  teal: {
    t: "#cdf1e7",
    i: "#087f5b"
  },
  pink: {
    t: "#ffdce8",
    i: "#c2255c"
  },
  red: {
    t: "#ffe0dd",
    i: "#c93a24"
  }
};
const BF = {
  w: 92,
  h: 62,
  stepX: 146,
  x0: 36,
  topY: 74,
  brY: 282,
  lane: 190,
  lane2: 228
};
const cut = (s, n) => s.length > n ? s.slice(0, n - 1) + "\u2026" : s;
const wrap2 = (s, max) => {
  if (s.length <= max) return [s];
  const w = s.split(" ");
  const out = [""];
  for (const word of w) {
    const line = out[out.length - 1];
    if (!line) out[out.length - 1] = word;else if ((line + " " + word).length <= max) out[out.length - 1] = line + " " + word;else out.push(word);
  }
  return out.slice(0, 2);
};
function FlowNode({
  n,
  x,
  y
}) {
  const {
      w: W,
      h: H
    } = BF,
    cx = x + W / 2;
  const c = BC[n.c] || BC.silver;
  const lines = wrap2(n.t, 13);
  return React.createElement("g", null, React.createElement("rect", {
    x: x + 3,
    y: y + 4,
    width: W,
    height: H,
    rx: "13",
    fill: c.i,
    opacity: ".14"
  }), React.createElement("rect", {
    x: x,
    y: y,
    width: W,
    height: H,
    rx: "13",
    fill: c.t,
    stroke: c.i,
    strokeWidth: "1.5"
  }), React.createElement("text", {
    x: cx,
    y: y + 25,
    textAnchor: "middle",
    fontSize: "16",
    fontFamily: "var(--f-mono)",
    fill: c.i
  }, n.g), lines.map((ln, i) => React.createElement("text", {
    key: i,
    x: cx,
    y: y + (lines.length > 1 ? 42 : 47) + i * 12,
    textAnchor: "middle",
    fontSize: "10.5",
    fontWeight: "600",
    fontFamily: "var(--f-body)",
    fill: "#23211c"
  }, ln)), React.createElement("text", {
    x: cx,
    y: y + H + 15,
    textAnchor: "middle",
    fontSize: "8",
    fontFamily: "var(--f-mono)",
    letterSpacing: ".7",
    fill: "#8b8f8b"
  }, cut(n.s, 26).toUpperCase()));
}
const bpath = (d, dash, col) => React.createElement("path", {
  d: d,
  stroke: col || "#b9bdb9",
  strokeWidth: "1.3",
  fill: "none",
  strokeDasharray: dash ? "5 5" : undefined
});
const bhead = (x, y, dir, col) => {
  const p = dir === "down" ? `M${x - 3.5} ${y - 4} l3.5 4 3.5 -4` : dir === "up" ? `M${x - 3.5} ${y + 4} l3.5 -4 3.5 4` : dir === "left" ? `M${x + 4} ${y - 3.5} l-4 3.5 4 3.5` : `M${x - 4} ${y - 3.5} l4 3.5 -4 3.5`;
  return React.createElement("path", {
    d: p,
    stroke: col || "#b9bdb9",
    strokeWidth: "1.3",
    fill: "none",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  });
};
const SF = {
  w: 96,
  h: 60,
  nx: 132,
  bx: 108,
  bw: 604,
  rows: [116, 236, 356],
  srcY: 8,
  pubX: 592
};
function Lake({
  x,
  y,
  w,
  h,
  c
}) {
  const ry = 6,
    top = y + ry;
  return React.createElement("g", null, React.createElement("path", {
    d: `M${x} ${top} v${h - ry * 2} a${w / 2} ${ry} 0 0 0 ${w} 0 V${top}`,
    fill: "#fff",
    stroke: c.i,
    strokeWidth: "1.2"
  }), React.createElement("ellipse", {
    cx: x + w / 2,
    cy: top,
    rx: w / 2,
    ry: ry,
    fill: c.t,
    stroke: c.i,
    strokeWidth: "1.2"
  }), [0.42, 0.68].map((r, i) => React.createElement("path", {
    key: i,
    d: `M${x} ${y + h * r} a${w / 2} ${ry} 0 0 0 ${w} 0`,
    fill: "none",
    stroke: c.i,
    strokeOpacity: ".35",
    strokeWidth: "1"
  })));
}
function Folder({
  x,
  y,
  w,
  h,
  c
}) {
  return React.createElement("g", null, React.createElement("path", {
    d: `M${x} ${y + 5} a3 3 0 0 1 3 -3 h${w * 0.34} l4 5 h${w * 0.6 - 7} a3 3 0 0 1 3 3 v${h - 8} a3 3 0 0 1 -3 3 H${x + 3} a3 3 0 0 1 -3 -3 Z`,
    fill: "#fff",
    stroke: c.i,
    strokeWidth: "1.2"
  }), React.createElement("path", {
    d: `M${x} ${y + 14} H${x + w}`,
    stroke: c.i,
    strokeWidth: "1.1"
  }), React.createElement("rect", {
    x: x + 0.6,
    y: y + 6,
    width: w - 1.2,
    height: "7.8",
    fill: c.t
  }));
}
function Stream({
  x,
  y,
  c
}) {
  return React.createElement("g", null, React.createElement("rect", {
    x: x,
    y: y + 4,
    width: "20",
    height: "30",
    rx: "4",
    fill: c.t,
    stroke: c.i,
    strokeWidth: "1.2"
  }), [0, 1, 2].map(i => React.createElement("path", {
    key: i,
    d: `M${x + 5} ${y + 12 + i * 7} h10`,
    stroke: c.i,
    strokeWidth: "1.1"
  })), [0, 1, 2].map(i => React.createElement("g", {
    key: "t" + i
  }, bpath(`M${x + 20} ${y + 19} H${x + 30} V${y + 8 + i * 11} H${x + 38}`, 0, c.i), React.createElement("rect", {
    x: x + 38,
    y: y + 3 + i * 11,
    width: 54 - i * 8,
    height: "10",
    rx: "5",
    fill: "#fff",
    stroke: c.i,
    strokeWidth: "1.1"
  }), React.createElement("rect", {
    x: x + 39.5,
    y: y + 4.4 + i * 11,
    width: (54 - i * 8) * 0.55,
    height: "7.2",
    rx: "3.6",
    fill: c.t
  }))));
}
function Tbl({
  x,
  y,
  w,
  h,
  c,
  label,
  rot
}) {
  const rows = [0.42, 0.62, 0.82];
  return React.createElement("g", {
    transform: rot ? `rotate(${rot} ${x + w / 2} ${y + h / 2})` : undefined
  }, React.createElement("rect", {
    x: x,
    y: y,
    width: w,
    height: h,
    rx: "3",
    fill: "#fff",
    stroke: c.i,
    strokeWidth: "1.2"
  }), React.createElement("path", {
    d: `M${x} ${y + 9} H${x + w}`,
    stroke: c.i,
    strokeWidth: "1.2"
  }), React.createElement("rect", {
    x: x + 0.6,
    y: y + 0.6,
    width: w - 1.2,
    height: "8.4",
    fill: c.t
  }), rows.map((r, i) => React.createElement("path", {
    key: i,
    d: `M${x + 5} ${y + h * r} H${x + w - 5}`,
    stroke: c.i,
    strokeOpacity: ".4",
    strokeWidth: "1"
  })), label && React.createElement("text", {
    x: x + w / 2,
    y: y + h + 11,
    textAnchor: "middle",
    fontSize: "8",
    fontFamily: "var(--f-mono)",
    letterSpacing: ".08em",
    fill: "#8b8f8b"
  }, label));
}
function StackNode({
  n,
  x,
  y,
  w,
  h
}) {
  const c = BC[n.c] || BC.silver,
    W = w || SF.w,
    H = h || SF.h,
    cx = x + W / 2;
  return React.createElement("g", null, React.createElement("rect", {
    x: x + 3,
    y: y + 4,
    width: W,
    height: H,
    rx: "13",
    fill: c.i,
    opacity: ".14"
  }), React.createElement("rect", {
    x: x,
    y: y,
    width: W,
    height: H,
    rx: "13",
    fill: c.t,
    stroke: c.i,
    strokeWidth: "1.5"
  }), React.createElement("text", {
    x: cx,
    y: y + 26,
    textAnchor: "middle",
    fontSize: "17",
    fontFamily: "var(--f-mono)",
    fill: c.i
  }, n.g), React.createElement("text", {
    x: cx,
    y: y + 45,
    textAnchor: "middle",
    fontSize: "11",
    fontWeight: "600",
    fontFamily: "var(--f-body)",
    fill: "#23211c"
  }, n.t));
}
function StackCanvas({
  d
}) {
  const f = d.flow,
    S = SF,
    red = BC.red.i;
  const layers = f.main.slice(1, 4),
    src = f.main[0],
    pub = f.main[4];
  const cy = i => S.rows[i] + S.h / 2;
  const cB = BC.bronze,
    cS = BC.silver,
    cG = BC.gold;
  const midX = S.nx + S.w / 2;
  return React.createElement("div", {
    className: "bench-flow"
  }, React.createElement("div", {
    className: "bench-bar2"
  }, React.createElement("span", {
    className: "bench-btn"
  }, "\u21B6"), React.createElement("span", {
    className: "bench-btn"
  }, "\u21B7"), React.createElement("span", {
    className: "bench-pill"
  }, React.createElement("i", null), d.label), React.createElement("span", {
    className: "bench-pill",
    style: {
      opacity: .65
    }
  }, "FIG. ", d.fig)), React.createElement("svg", {
    viewBox: "0 0 730 494",
    preserveAspectRatio: "xMidYMid meet",
    style: {
      display: "block",
      width: "100%",
      height: "auto",
      flex: "1 1 auto",
      minHeight: 0
    }
  }, React.createElement("text", {
    x: S.bx,
    y: S.srcY + 22,
    fontSize: "8.5",
    fontFamily: "var(--f-mono)",
    letterSpacing: ".14em",
    fill: BC.blue.i
  }, "SOURCE SYSTEMS"), React.createElement("text", {
    x: S.bx,
    y: S.srcY + 38,
    fontSize: "8",
    fontFamily: "var(--f-mono)",
    letterSpacing: ".12em",
    fill: "#8b8f8b"
  }, "BATCH OR STREAMING"), React.createElement(Folder, {
    x: 226,
    y: S.srcY + 4,
    w: 34,
    h: 30,
    c: BC.blue
  }), bpath(`M262 ${S.srcY + 20} H274`, 0, BC.blue.i), React.createElement(Lake, {
    x: 278,
    y: S.srcY + 2,
    w: 38,
    h: 36,
    c: BC.blue
  }), React.createElement("text", {
    x: 226,
    y: S.srcY + 52,
    fontSize: "8",
    fontFamily: "var(--f-mono)",
    letterSpacing: ".12em",
    fill: BC.blue.i
  }, "BATCH \xB7 FILES \u2192 LAKE"), React.createElement(Stream, {
    x: 382,
    y: S.srcY + 2,
    c: BC.blue
  }), React.createElement("text", {
    x: 382,
    y: S.srcY + 52,
    fontSize: "8",
    fontFamily: "var(--f-mono)",
    letterSpacing: ".12em",
    fill: BC.blue.i
  }, "STREAM \xB7 KAFKA TOPICS"), bpath(`M${midX} ${S.srcY + 52} V${S.rows[0] - 10}`), bhead(midX, S.rows[0] - 8, "down"), layers.map((n, i) => {
    const c = BC[n.c] || BC.silver;
    return React.createElement("g", {
      key: "bd" + i
    }, React.createElement("rect", {
      x: S.bx,
      y: S.rows[i] - 24,
      width: S.bw,
      height: S.h + (i === 2 ? 96 : 48),
      rx: "16",
      fill: c.t,
      opacity: ".3",
      stroke: c.i,
      strokeOpacity: ".45",
      strokeWidth: "1.1",
      strokeDasharray: "6 5"
    }), React.createElement("text", {
      x: S.bx + 14,
      y: S.rows[i] - 10,
      fontSize: "8.5",
      fontFamily: "var(--f-mono)",
      letterSpacing: ".14em",
      fill: c.i
    }, ("layer 0" + (i + 1) + " · " + n.s).toUpperCase()));
  }), React.createElement(Folder, {
    x: 250,
    y: S.rows[0] + 14,
    w: 34,
    h: 30,
    c: cB
  }), React.createElement("text", {
    x: 267,
    y: S.rows[0] + 58,
    textAnchor: "middle",
    fontSize: "8",
    fontFamily: "var(--f-mono)",
    letterSpacing: ".08em",
    fill: "#8b8f8b"
  }, "AS LANDED"), bpath(`M288 ${cy(0)} H302`, 0, cB.i), ["orders_raw", "events_raw", "billing_raw"].map((t, i) => React.createElement(Tbl, {
    key: t,
    x: 308 + i * 82,
    y: S.rows[0] + 8,
    w: 58,
    h: 38,
    c: cB,
    label: t.toUpperCase(),
    rot: i % 2 ? 1.2 : -1.1
  })), React.createElement("text", {
    x: 568,
    y: cy(0) + 4,
    fontSize: "16",
    fontFamily: "Caveat, cursive",
    fill: cB.i
  }, "copied, not corrected"), [0, 1, 2].map(i => React.createElement("g", {
    key: "sj" + i
  }, React.createElement(Tbl, {
    x: 248,
    y: S.rows[1] - 2 + i * 22,
    w: 44,
    h: 18,
    c: cS
  }), bpath(`M294 ${S.rows[1] + 7 + i * 22} H310 V${cy(1)}`, 0, cS.i), React.createElement("circle", {
    cx: 296,
    cy: S.rows[1] + 7 + i * 22,
    r: "2.2",
    fill: "#fff",
    stroke: cS.i,
    strokeWidth: "1.1"
  }))), React.createElement("g", null, React.createElement("circle", {
    cx: 324,
    cy: cy(1),
    r: "9",
    fill: "#fff",
    stroke: cS.i,
    strokeWidth: "1.2"
  }), React.createElement("circle", {
    cx: 334,
    cy: cy(1),
    r: "9",
    fill: "#fff",
    stroke: cS.i,
    strokeWidth: "1.2"
  }), React.createElement("path", {
    d: `M329 ${cy(1) - 7.5} a9 9 0 0 0 0 15 a9 9 0 0 0 0 -15`,
    fill: cS.t,
    stroke: cS.i,
    strokeWidth: "1.2"
  })), bpath(`M344 ${cy(1)} H352`, 0, cS.i), bhead(354, cy(1), "right", cS.i), React.createElement("text", {
    x: 248,
    y: S.rows[1] + 76,
    fontSize: "8",
    fontFamily: "var(--f-mono)",
    letterSpacing: ".1em",
    fill: cS.i
  }, "CONFORMED TABLES"), React.createElement("text", {
    x: 329,
    y: S.rows[1] + 76,
    textAnchor: "middle",
    fontSize: "8",
    fontFamily: "var(--f-mono)",
    letterSpacing: ".1em",
    fill: cS.i
  }, "JOIN"), React.createElement(Tbl, {
    x: 360,
    y: S.rows[1] + 6,
    w: 152,
    h: 44,
    c: cS,
    label: "OBT \xB7 ONE BIG TABLE"
  }), React.createElement("g", null, React.createElement("circle", {
    cx: 528,
    cy: cy(1) - 7,
    r: "7.5",
    fill: BC.green.t,
    stroke: BC.green.i,
    strokeWidth: "1.2"
  }), React.createElement("path", {
    d: `M524.5 ${cy(1) - 7} l2.6 2.8 l4.6 -5`,
    fill: "none",
    stroke: BC.green.i,
    strokeWidth: "1.4",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), React.createElement("text", {
    x: 542,
    y: cy(1) - 3,
    fontSize: "15.5",
    fontFamily: "Caveat, cursive",
    fill: cS.i
  }, "41 tests pass,"), React.createElement("text", {
    x: 542,
    y: cy(1) + 14,
    fontSize: "15.5",
    fontFamily: "Caveat, cursive",
    fill: cS.i
  }, "joined on keys \xB7 dbt"), ["finance", "ops", "commercial"].map((t, i) => {
    const mx = 248 + i * 108;
    return React.createElement("g", {
      key: t
    }, React.createElement("rect", {
      x: mx,
      y: S.rows[2] - 6,
      width: 96,
      height: 94,
      rx: "10",
      fill: "#fff",
      stroke: cG.i,
      strokeOpacity: ".5",
      strokeWidth: "1.1"
    }), React.createElement("path", {
      d: `M${mx + 11} ${S.rows[2] + 3} l1.9 3.9 l4.3 .6 l-3.1 3 l.7 4.2 l-3.8 -2 l-3.8 2 l.7 -4.2 l-3.1 -3 l4.3 -.6 Z`,
      fill: cG.t,
      stroke: cG.i,
      strokeWidth: "1"
    }), React.createElement("text", {
      x: mx + 22,
      y: S.rows[2] + 9,
      fontSize: "8",
      fontFamily: "var(--f-mono)",
      letterSpacing: ".08em",
      fill: cG.i
    }, t.toUpperCase()), React.createElement(Tbl, {
      x: mx + 24,
      y: S.rows[2] + 14,
      w: 48,
      h: 30,
      c: cG
    }), [0, 1].map(k => React.createElement("g", {
      key: k
    }, bpath(`M${mx + 20 + k * 56} ${S.rows[2] + 62} V${S.rows[2] + 48} H${mx + 40 + k * 14}`, 0, cG.i), React.createElement("rect", {
      x: mx + 2 + k * 56,
      y: S.rows[2] + 62,
      width: 36,
      height: 19,
      rx: "3",
      fill: cG.t,
      stroke: cG.i,
      strokeWidth: "1"
    }), React.createElement("text", {
      x: mx + 20 + k * 56,
      y: S.rows[2] + 75,
      textAnchor: "middle",
      fontSize: "8",
      fontFamily: "var(--f-mono)",
      fill: cG.i
    }, "DIM"))), React.createElement("text", {
      x: mx + 48,
      y: S.rows[2] + 37,
      textAnchor: "middle",
      fontSize: "8",
      fontFamily: "var(--f-mono)",
      fill: cG.i
    }, "FCT"));
  }), React.createElement("text", {
    x: 248,
    y: S.rows[2] + 102,
    fontSize: "8",
    fontFamily: "var(--f-mono)",
    letterSpacing: ".14em",
    fill: "#8b8f8b"
  }, "DATA MARTS \xB7 CUT FROM THE OBT \xB7 SAME NUMBERS, EVERY TEAM"), bpath(`M572 ${cy(2)} H${S.pubX - 10}`), bhead(S.pubX - 8, cy(2), "right"), [0, 1].map(i => React.createElement("g", {
    key: "dn" + i
  }, bpath(`M${midX} ${S.rows[i] + S.h} V${S.rows[i + 1] - 10}`), bhead(midX, S.rows[i + 1] - 8, "down"))), bpath(`M${S.nx} ${cy(1) + 12} H${S.bx - 22} V${cy(0) + 12} H${S.nx - 10}`, 1, red), bhead(S.nx - 8, cy(0) + 12, "right", red), React.createElement("text", {
    x: S.bx - 26,
    y: cy(0) + 40,
    fontSize: "8",
    fontFamily: "var(--f-mono)",
    letterSpacing: ".1em",
    fill: red,
    transform: `rotate(-90 ${S.bx - 26} ${cy(0) + 40})`
  }, f.branchLabel.toUpperCase(), " \xB7 FIX + RE-RUN"), layers.map((n, i) => React.createElement(StackNode, {
    key: i,
    n: n,
    x: S.nx,
    y: S.rows[i]
  })), React.createElement(StackNode, {
    n: pub,
    x: S.pubX,
    y: S.rows[2]
  }), React.createElement("g", null, React.createElement("rect", {
    x: S.pubX + 18,
    y: S.rows[2] + S.h + 8,
    width: 60,
    height: 34,
    rx: "4",
    fill: "#fff",
    stroke: BC.green.i,
    strokeWidth: "1.2"
  }), React.createElement("path", {
    d: `M${S.pubX + 18} ${S.rows[2] + S.h + 16} H${S.pubX + 78}`,
    stroke: BC.green.i,
    strokeWidth: "1.1"
  }), React.createElement("rect", {
    x: S.pubX + 18.6,
    y: S.rows[2] + S.h + 8.6,
    width: 58.8,
    height: "6.8",
    fill: BC.green.t
  }), [10, 16, 22].map((hh, i) => React.createElement("rect", {
    key: i,
    x: S.pubX + 24 + i * 13,
    y: S.rows[2] + S.h + 38 - hh,
    width: "8",
    height: hh - 2,
    rx: "1.5",
    fill: BC.green.t,
    stroke: BC.green.i,
    strokeWidth: "1"
  }))), React.createElement("text", {
    x: S.pubX + S.w / 2,
    y: S.rows[2] + S.h + 56,
    textAnchor: "middle",
    fontSize: "8",
    fontFamily: "var(--f-mono)",
    letterSpacing: ".7",
    fill: "#8b8f8b"
  }, pub.s.toUpperCase()), React.createElement("text", {
    x: 510,
    y: S.srcY + 24,
    fontSize: "15.5",
    fontFamily: "Caveat, cursive",
    fill: BC.blue.i
  }, "kafka or an http request \u2014"), React.createElement("text", {
    x: 510,
    y: S.srcY + 41,
    fontSize: "15.5",
    fontFamily: "Caveat, cursive",
    fill: BC.blue.i
  }, "whatever they already run on")));
}
function BenchCanvas({
  d
}) {
  if (d.layout === "stack") return React.createElement(StackCanvas, {
    d: d
  });
  const f = d.flow,
    {
      w: W,
      h: H,
      stepX,
      x0,
      topY,
      brY,
      lane,
      lane2
    } = BF;
  const X = i => x0 + i * stepX;
  const cy = topY + H / 2,
    brcy = brY + H / 2;
  const bn = k => X(f.from) - k * stepX;
  const b0 = bn(0),
    b1 = bn(f.branch.length - 1);
  const mgR = X(f.from) + W + 44,
    mgL = X(f.back) - 44;
  const red = BC.red.i;
  return React.createElement("div", {
    className: "bench-flow"
  }, React.createElement("div", {
    className: "bench-bar2"
  }, React.createElement("span", {
    className: "bench-btn"
  }, "\u21B6"), React.createElement("span", {
    className: "bench-btn"
  }, "\u21B7"), React.createElement("span", {
    className: "bench-pill"
  }, React.createElement("i", null), d.label), React.createElement("span", {
    className: "bench-pill",
    style: {
      opacity: .65
    }
  }, "FIG. ", d.fig)), React.createElement("svg", {
    viewBox: "0 0 730 476",
    preserveAspectRatio: "xMidYMid meet",
    style: {
      display: "block",
      width: "100%",
      height: "auto",
      flex: "1 1 auto",
      minHeight: 0
    }
  }, (f.bands || []).map((bd, i) => {
    const c = BC[bd.c] || BC.silver;
    const bx = X(bd.from) - 13,
      bw = X(bd.to) + W + 13 - bx;
    return React.createElement("g", {
      key: "bd" + i
    }, React.createElement("rect", {
      x: bx,
      y: topY - 40,
      width: bw,
      height: H + 74,
      rx: "16",
      fill: c.t,
      opacity: ".38",
      stroke: c.i,
      strokeOpacity: ".45",
      strokeWidth: "1.1",
      strokeDasharray: "6 5"
    }), React.createElement("text", {
      x: bx + 10,
      y: topY - 26,
      fontSize: "8.5",
      fontFamily: "var(--f-mono)",
      letterSpacing: ".14em",
      fill: c.i
    }, bd.label.toUpperCase()));
  }), React.createElement("rect", {
    x: b1 - 42,
    y: brY - 24,
    width: b0 - b1 + W + 58,
    height: H + 52,
    rx: "16",
    fill: BC.red.t,
    opacity: ".3",
    stroke: red,
    strokeOpacity: ".45",
    strokeWidth: "1.1",
    strokeDasharray: "6 5"
  }), React.createElement("text", {
    x: (b1 - 30 + b0 + W / 2) / 2,
    y: brY - 9,
    textAnchor: "middle",
    fontSize: "8.5",
    fontFamily: "var(--f-mono)",
    letterSpacing: ".12em",
    fill: red
  }, f.branchLabel.toUpperCase()), bpath(`M${X(f.from) + W} ${cy} H${mgR} V${lane} H${b0 + W / 2} V${brY - 8}`, 1, red), bhead(b0 + W / 2, brY - 6, "down", red), f.branch.length > 1 && React.createElement(React.Fragment, null, bpath(`M${b0 - 6} ${brcy} H${b1 + W + 10}`, 1, red), bhead(b1 + W + 8, brcy, "left", red)), bpath(`M${b1 - 6} ${brcy} H${b1 - 30} V${lane2} H${mgL} V${cy} H${X(f.back) - 10}`, 1, red), bhead(X(f.back) - 8, cy, "right", red), f.main.slice(0, -1).map((_, i) => React.createElement("g", {
    key: "e" + i
  }, bpath(`M${X(i) + W} ${cy} H${X(i + 1) - 11}`), bhead(X(i + 1) - 9, cy, "right"))), f.main.map((n, i) => React.createElement(FlowNode, {
    key: i,
    n: n,
    x: X(i),
    y: topY
  })), f.main.slice(0, -1).map((_, i) => React.createElement("text", {
    key: "el" + i,
    x: (X(i) + W + X(i + 1)) / 2,
    y: cy - 9,
    textAnchor: "middle",
    fontSize: "8",
    fontFamily: "var(--f-mono)",
    letterSpacing: ".6",
    fill: "#7e827e"
  }, (f.edges[i] || "").toUpperCase())), f.branch.map((n, k) => React.createElement(FlowNode, {
    key: "b" + k,
    n: n,
    x: bn(k),
    y: brY
  })), React.createElement("g", {
    transform: "translate(26 388) rotate(-2)"
  }, React.createElement("rect", {
    x: "0",
    y: "0",
    width: "216",
    height: "72",
    fill: "#fff3bf",
    stroke: "#e6cf6a",
    strokeWidth: "1"
  }), d.note.split("\n").map((ln, i) => React.createElement("text", {
    key: i,
    x: "14",
    y: 30 + i * 22,
    fontSize: "17",
    fontFamily: "Caveat, cursive",
    fill: "#5c4b12"
  }, ln)))));
}
function WorkBench({
  go
}) {
  const {
    useState
  } = React;
  const [key, setKey] = useState("ae");
  const d = BENCH[key];
  return React.createElement("section", {
    id: "how-i-work",
    className: "shell-pad pt-16 md:pt-24 pb-4"
  }, React.createElement("div", {
    className: "shellbox rounded-[32px] border border-ink/10 px-6 md:px-12 py-14 md:py-16",
    style: {
      background: "rgb(var(--c-card))"
    }
  }, React.createElement("div", {
    className: "grid lg:grid-cols-[minmax(0,1fr)_minmax(520px,1.15fr)] gap-10 lg:gap-14 items-stretch"
  }, React.createElement("div", null, React.createElement("span", {
    className: "inline-block px-4 py-2 rounded-lg border border-ink/15 mono text-[9.5px] tracking-[.18em] uppercase",
    style: {
      background: "rgb(var(--c-paper))",
      opacity: .8
    }
  }, "How I work"), React.createElement("h2", {
    "data-fill": true,
    className: "claim text-[8.5vw] md:text-[44px] mt-6 max-w-[440px]"
  }, "The three lanes I work in"), React.createElement("div", {
    className: "mt-9"
  }, BENCH_KEYS.map(k => {
    const b = BENCH[k],
      on = k === key;
    return React.createElement("button", {
      key: k,
      onMouseEnter: () => setKey(k),
      onFocus: () => setKey(k),
      onClick: () => setKey(k),
      className: "w-full text-left py-4 border-t border-ink/12 last:border-b transition-colors duration-300"
    }, React.createElement("span", {
      className: "text-[19px] md:text-[21px] font-semibold tracking-[-.02em] transition-colors duration-300 block",
      style: {
        color: on ? "rgb(var(--c-accent))" : "rgb(var(--c-ink))"
      }
    }, b.label), React.createElement("span", {
      className: "text-[13.5px] leading-[1.5] block mt-1.5",
      style: {
        opacity: on ? .72 : .45
      }
    }, b.desc), React.createElement("span", {
      className: "mono text-[8.5px] tracking-[.16em] uppercase block mt-2.5 leading-[1.7]",
      style: {
        opacity: on ? .6 : .3
      }
    }, b.tech.join(" · ")));
  })), React.createElement("button", {
    onClick: () => go("stack"),
    className: "ul mono text-[10px] tracking-[.2em] uppercase mt-7 inline-block",
    style: {
      opacity: .6
    }
  }, "See how I work \u2192")), React.createElement("div", {
    className: "min-w-0 flex"
  }, React.createElement(BenchCanvas, {
    d: d,
    key: key
  })))));
}
Object.assign(window, {
  WorkBench,
  BENCH,
  BENCH_KEYS,
  BC
});

/* ===== board ===== */
const BOARD_H = 138;
const TRACE_Y = 96;
const PROBE_X = 240;
const SPEED = 46;
const CHIPS = [{
  t: "Python",
  w: 92,
  h: 44
}, {
  t: "PySpark",
  w: 100,
  h: 50
}, {
  t: "dbt",
  w: 72,
  h: 54
}, {
  t: "Databricks",
  w: 112,
  h: 42
}, {
  t: "Delta Live Tables",
  w: 146,
  h: 38
}, {
  t: "Tableau",
  w: 90,
  h: 46
}, {
  t: "Power BI",
  w: 94,
  h: 52
}, {
  t: "Postgres",
  w: 96,
  h: 44
}];
const LAYOUT = (() => {
  let x = 40;
  const out = CHIPS.map(c => {
    const gx = x;
    x += 62 + c.w + 128;
    return {
      ...c,
      gx
    };
  });
  return {
    chips: out,
    tile: x
  };
})();
const TILE = LAYOUT.tile;
const PERIOD = +(TILE / SPEED).toFixed(2);
const SILK = ["R1", "C4", "U2", "X1", "L3", "D7", "Q5", "C9", "J1", "R12"];
const Cap = ({
  x
}) => React.createElement("g", {
  className: "part"
}, React.createElement("rect", {
  className: "cap",
  x: x,
  y: TRACE_Y - 24,
  width: "13",
  height: "24",
  rx: "6"
}), React.createElement("path", {
  className: "cap-band",
  d: `M${x} ${TRACE_Y - 18} h13`
}), React.createElement("path", {
  className: "pin",
  d: `M${x + 4} ${TRACE_Y} v6 M${x + 9} ${TRACE_Y} v6`
}));
const Res = ({
  x
}) => React.createElement("g", {
  className: "part"
}, React.createElement("path", {
  className: "pin",
  d: `M${x - 5} ${TRACE_Y - 7} h27`
}), React.createElement("rect", {
  className: "res",
  x: x,
  y: TRACE_Y - 13,
  width: "17",
  height: "13",
  rx: "2.5"
}), React.createElement("path", {
  className: "res-band",
  d: `M${x + 5} ${TRACE_Y - 13} v13 M${x + 11} ${TRACE_Y - 13} v13`
}));
const Can = ({
  x
}) => React.createElement("g", {
  className: "part"
}, React.createElement("rect", {
  className: "can",
  x: x,
  y: TRACE_Y - 16,
  width: "21",
  height: "16",
  rx: "8"
}), React.createElement("path", {
  className: "can-line",
  d: `M${x + 5} ${TRACE_Y - 12} h11`
}), React.createElement("path", {
  className: "pin",
  d: `M${x + 5} ${TRACE_Y} v6 M${x + 16} ${TRACE_Y} v6`
}));
const Coil = ({
  x
}) => React.createElement("g", {
  className: "part"
}, React.createElement("path", {
  className: "coil",
  d: `M${x} ${TRACE_Y} q3 -10 6 0 q3 -10 6 0 q3 -10 6 0 q3 -10 6 0`
}));
const Tran = ({
  x
}) => React.createElement("g", {
  className: "part"
}, React.createElement("path", {
  className: "tran",
  d: `M${x} ${TRACE_Y - 6} a8 8 0 0 1 16 0 z`
}), React.createElement("path", {
  className: "pin",
  d: `M${x + 4} ${TRACE_Y - 6} v6 M${x + 8} ${TRACE_Y - 6} v6 M${x + 12} ${TRACE_Y - 6} v6`
}));
const Hdr = ({
  x
}) => React.createElement("g", {
  className: "part"
}, React.createElement("rect", {
  className: "hdr",
  x: x,
  y: TRACE_Y - 8,
  width: "28",
  height: "8",
  rx: "1.5"
}), [0, 1, 2, 3, 4].map(i => React.createElement("path", {
  key: i,
  className: "pin",
  d: `M${x + 3 + i * 5.5} ${TRACE_Y - 8} v-8`
})));
const Via = ({
  x
}) => React.createElement("g", {
  className: "part"
}, React.createElement("circle", {
  className: "via",
  cx: x,
  cy: TRACE_Y - 6,
  r: "3.2"
}));
const Lamp = ({
  x,
  tall
}) => React.createElement("g", {
  className: "part"
}, tall ? React.createElement(React.Fragment, null, React.createElement("path", {
  className: "pin",
  d: `M${x} ${TRACE_Y} V${TRACE_Y - 34} q0 -7 9 -7`
}), React.createElement("circle", {
  className: "led-halo",
  cx: x + 11,
  cy: TRACE_Y - 41,
  r: "6.5"
}), React.createElement("circle", {
  className: "led",
  cx: x + 11,
  cy: TRACE_Y - 41,
  r: "3"
})) : React.createElement(React.Fragment, null, React.createElement("circle", {
  className: "led-halo",
  cx: x,
  cy: TRACE_Y - 9,
  r: "8"
}), React.createElement("circle", {
  className: "led",
  cx: x,
  cy: TRACE_Y - 9,
  r: "4"
}), React.createElement("path", {
  className: "pin",
  d: `M${x - 3} ${TRACE_Y - 5} v5 M${x + 3} ${TRACE_Y - 5} v5`
})));
const PART_SETS = [x => [React.createElement(Cap, {
  key: "a",
  x: x
}), React.createElement(Lamp, {
  key: "b",
  x: x + 45,
  tall: true
})], x => [React.createElement(Lamp, {
  key: "a",
  x: x + 6
}), React.createElement(Via, {
  key: "b",
  x: x + 44
})], x => [React.createElement(Lamp, {
  key: "a",
  x: x,
  tall: true
}), React.createElement(Tran, {
  key: "b",
  x: x + 32
})], x => [React.createElement(Coil, {
  key: "a",
  x: x
}), React.createElement(Lamp, {
  key: "b",
  x: x + 50
})]];
const TAIL_SETS = [x => [React.createElement(Res, {
  key: "a",
  x: x
}), React.createElement(Can, {
  key: "b",
  x: x + 38
})], x => [React.createElement(Hdr, {
  key: "a",
  x: x
}), React.createElement(Cap, {
  key: "b",
  x: x + 48
})], x => [React.createElement(Res, {
  key: "a",
  x: x
}), React.createElement(Coil, {
  key: "b",
  x: x + 42
})], x => [React.createElement(Via, {
  key: "a",
  x: x
}), React.createElement(Cap, {
  key: "b",
  x: x + 34
})]];
function litDelay(x) {
  let t = PERIOD * (x - PROBE_X) / TILE;
  while (t < 0) t += PERIOD;
  while (t > PERIOD) t -= PERIOD;
  return -(t - PERIOD * 0.03).toFixed(2) + "s";
}
function Scene({
  dx
}) {
  return React.createElement("g", {
    transform: `translate(${dx} 0)`
  }, React.createElement("path", {
    className: "trace",
    d: `M0 ${TRACE_Y} H${TILE}`
  }), LAYOUT.chips.map((c, i) => {
    const gx = c.gx,
      bodyX = gx + 62,
      bodyY = TRACE_Y - c.h;
    const pins = Math.max(5, Math.round(c.w / 16));
    const mid = bodyX + c.w / 2;
    return React.createElement("g", {
      key: c.t
    }, React.createElement("path", {
      className: "sig",
      d: `M${gx} ${TRACE_Y - 2} v-${c.h - 20} l22 -22 h44`
    }), PART_SETS[i % PART_SETS.length](gx - 14), React.createElement("g", {
      className: "chip",
      style: {
        animationDelay: litDelay(mid)
      }
    }, Array.from({
      length: pins
    }).map((_, p) => React.createElement("path", {
      key: p,
      className: "pin",
      d: `M${bodyX + 10 + p * (c.w - 20) / (pins - 1)} ${TRACE_Y} v6`
    })), React.createElement("rect", {
      className: "chip-body",
      x: bodyX,
      y: bodyY,
      width: c.w,
      height: c.h,
      rx: "3"
    }), React.createElement("circle", {
      className: "chip-dot",
      cx: bodyX + 8,
      cy: bodyY + 8,
      r: "2.4"
    }), React.createElement("rect", {
      className: "die",
      x: bodyX + 9,
      y: bodyY + 12,
      width: c.w - 18,
      height: c.h - 22,
      rx: "1.5"
    }), React.createElement("text", {
      className: "chip-label",
      x: mid,
      y: bodyY + c.h / 2 + 3.5,
      textAnchor: "middle"
    }, c.t)), TAIL_SETS[i % TAIL_SETS.length](bodyX + c.w + 14), React.createElement("text", {
      className: "silk",
      x: gx,
      y: TRACE_Y + 24,
      textAnchor: "middle"
    }, SILK[i % SILK.length]), React.createElement("text", {
      className: "silk",
      x: bodyX + c.w + 38,
      y: TRACE_Y + 24,
      textAnchor: "middle"
    }, SILK[(i + 5) % SILK.length]));
  }));
}
function CircuitBand() {
  const view = 1180;
  const pads = Math.ceil(view / 60) + 1;
  return React.createElement("div", {
    className: "circuit relative w-full overflow-hidden select-none"
  }, React.createElement("svg", {
    viewBox: `0 0 ${view} ${BOARD_H}`,
    className: "w-full",
    style: {
      display: "block"
    },
    "aria-hidden": "true"
  }, React.createElement("g", {
    className: "pads"
  }, Array.from({
    length: pads
  }).map((_, i) => React.createElement("g", {
    key: i
  }, React.createElement("circle", {
    className: "pad",
    cx: i * 60,
    cy: TRACE_Y + 13,
    r: "2.8"
  }), React.createElement("circle", {
    className: "pad-hole",
    cx: i * 60,
    cy: TRACE_Y + 13,
    r: "1.1"
  })))), React.createElement("g", {
    className: "world",
    style: {
      "--tile": -TILE + "px",
      "--roll": PERIOD + "s"
    }
  }, React.createElement(Scene, {
    dx: 0
  }), React.createElement(Scene, {
    dx: TILE
  }))), React.createElement("div", {
    className: "circuit-foot"
  }, React.createElement("span", null, "FIG. 010 \u2014 THE STACK, ON THE BOARD"), React.createElement("span", {
    className: "hidden sm:inline"
  }, "EACH CHIP LIGHTS AT THE PROBE")));
}
Object.assign(window, {
  CircuitBand,
  CHIPS,
  PERIOD
});

window.__V5 = true;

/* ===== word ===== */
(function () {
  const WORD = "mw";
  let nodes = [];
  function split(el) {
    if (el.dataset.mwDone) return;
    const walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const texts = [];
    while (walk.nextNode()) texts.push(walk.currentNode);
    texts.forEach(t => {
      if (!t.nodeValue.trim()) return;
      const frag = document.createDocumentFragment();
      t.nodeValue.split(/(\s+)/).forEach(chunk => {
        if (!chunk) return;
        if (/^\s+$/.test(chunk)) {
          frag.appendChild(document.createTextNode(chunk));
          return;
        }
        const word = document.createElement("span");
        word.style.whiteSpace = "nowrap";
        for (const ch of chunk) {
          const s = document.createElement("span");
          s.className = WORD;
          s.textContent = ch;
          word.appendChild(s);
        }
        frag.appendChild(word);
      });
      t.parentNode.replaceChild(frag, t);
    });
    el.dataset.mwDone = "1";
  }
  function collect() {
    nodes = [];
    document.querySelectorAll("[data-fill]").forEach(el => {
      split(el);
      nodes.push({
        el,
        words: el.querySelectorAll("." + WORD),
        kind: "fill"
      });
    });
    document.querySelectorAll("[data-spin]").forEach(el => {
      nodes.push({
        el,
        kind: "spin",
        amt: parseFloat(el.dataset.spin) || 22
      });
    });
    document.querySelectorAll("[data-flip]").forEach(el => {
      nodes.push({
        el,
        kind: "flip"
      });
    });
    nodes.forEach(n => {
      n.v = undefined;
    });
    kick();
  }
  function target(n, vh) {
    const r = n.el.getBoundingClientRect();
    if (n.kind === "fill") {
      const start = vh * 0.95,
        end = vh * 0.40;
      return Math.max(0, Math.min(1, (start - r.top) / (start - end)));
    }
    if (n.kind === "flip") {
      const start = vh * 0.95,
        end = vh * 0.45;
      return Math.max(0, Math.min(1, (start - r.top) / (start - end)));
    }
    return Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / vh));
  }
  function paint(n) {
    if (n.kind === "fill") {
      const total = n.words.length;
      if (!total) return;
      const spread = 7;
      for (let i = 0; i < total; i++) {
        const local = Math.max(0, Math.min(1, (n.v * (total + spread) - i) / spread));
        const e = local * local * (3 - 2 * local);
        n.words[i].style.opacity = (0.08 + 0.92 * e).toFixed(3);
      }
    } else if (n.kind === "flip") {
      const e = n.v * n.v * (3 - 2 * n.v);
      n.el.style.transform = "rotateY(" + ((1 - e) * -14).toFixed(2) + "deg) translateY(" + ((1 - e) * 18).toFixed(1) + "px)";
      n.el.style.opacity = (0.2 + 0.8 * e).toFixed(3);
    } else {
      n.el.style.transform = "rotate(" + (n.v * n.amt).toFixed(2) + "deg)";
    }
  }
  let running = false;
  function pass() {
    const vh = window.innerHeight;
    let moving = false;
    for (const n of nodes) {
      const t = target(n, vh);
      if (n.v === undefined) n.v = t;
      const d = t - n.v;
      if (Math.abs(d) > 0.0006) {
        n.v += d * 0.12;
        moving = true;
      } else n.v = t;
      paint(n);
    }
    if (moving || pass._hot > 0) {
      pass._hot = Math.max(0, (pass._hot || 0) - 1);
      requestAnimationFrame(pass);
    } else running = false;
  }
  function kick() {
    pass._hot = 90;
    if (!running) {
      running = true;
      requestAnimationFrame(pass);
    }
  }
  window.addEventListener("scroll", kick, {
    passive: true
  });
  window.addEventListener("resize", kick);
  const mo = new MutationObserver(() => {
    clearTimeout(mo._t);
    mo._t = setTimeout(collect, 60);
  });
  const boot = () => {
    const root = document.getElementById("root");
    if (!root) return setTimeout(boot, 80);
    mo.observe(root, {
      childList: true,
      subtree: true
    });
    collect();
    kick();
  };
  boot();
  window.__mwRefresh = collect;
})();
function useTyped(text, on, speed = 42) {
  const {
    useState,
    useEffect
  } = React;
  const [n, setN] = useState(on ? 0 : text.length);
  useEffect(() => {
    if (!on) {
      setN(text.length);
      return;
    }
    setN(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setN(i);
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, on, speed]);
  return text.slice(0, n);
}
Object.assign(window, {
  useTyped
});

/* ===== hero ===== */
const HERO5_LINKS = [{
  t: "TrackPerform",
  s: "client build · live",
  href: "https://trackperform.com"
}, {
  t: "DrillCal",
  s: "client build · launched",
  href: "https://drillcal.com"
}];
function Hero5({
  go,
  panel = "Panel"
}) {
  const now = EXPERIENCE[0] || {};
  const bare = panel === "Bare";
  return React.createElement("section", {
    className: "shell-pad pt-[86px] md:pt-[110px]"
  }, React.createElement("div", {
    className: "hero5 relative overflow-hidden shellbox md:min-h-[84svh] flex flex-col justify-end pt-20 md:pt-24 pb-12 md:pb-16 " + (bare ? "is-bare px-1 md:px-10 lg:px-14" : "rounded-[32px] px-6 md:px-12")
  }, React.createElement("div", {
    className: "grid grid-cols-12 gap-y-12 gap-x-8 md:gap-x-14 items-end relative"
  }, React.createElement("div", {
    className: "col-span-12 md:col-span-7"
  }, React.createElement("span", {
    className: "inline-block px-4 py-2 rounded-[7px] border border-ink/20 mono text-[9px] tracking-[.2em] uppercase",
    style: {
      background: bare ? "transparent" : "rgb(var(--c-paper) / .55)"
    }
  }, "Available for work"), React.createElement("h1", {
    className: "claim mt-7",
    style: {
      fontSize: "clamp(34px, 5.2vw, 62px)",
      maxWidth: "min(100%, 560px)"
    }
  }, "I build data models, pipelines and ", React.createElement("span", {
    className: "serif-it"
  }, "dashboards"), "."), React.createElement("div", {
    className: "flex flex-wrap items-center mt-9 mb-8"
  }, ["Analytics Engineer", "Data Analyst", "BI Analyst"].map((d, i) => React.createElement("span", {
    key: d,
    className: "mono text-[9.5px] tracking-[.18em] uppercase px-5 first:pl-0 " + (i ? "border-l border-ink/20" : ""),
    style: {
      opacity: .6
    }
  }, d))), React.createElement("p", {
    className: "text-[15px] md:text-[15.5px] leading-[1.7] max-w-[440px]",
    style: {
      opacity: .7
    }
  }, "Three years modelling data in dbt and Databricks, and designing the Tableau and Power BI surfaces teams decide on every week.")), React.createElement("div", {
    className: "col-span-12 md:col-span-5 md:pl-6"
  }, React.createElement("div", {
    className: "grid sm:grid-cols-2 md:grid-cols-1 gap-y-7 gap-x-8"
  }, React.createElement("div", null, React.createElement("div", {
    className: "mono text-[8.5px] tracking-[.2em] uppercase pb-2.5 border-b border-ink/15",
    style: {
      opacity: .45
    }
  }, "Currently"), React.createElement("div", {
    className: "text-[15px] font-semibold tracking-[-.01em] mt-3"
  }, now.role), React.createElement("div", {
    className: "text-[13.5px] mt-1",
    style: {
      opacity: .6
    }
  }, now.company, " \xB7 ", now.period)), React.createElement("div", null, React.createElement("div", {
    className: "mono text-[8.5px] tracking-[.2em] uppercase pb-2.5 border-b border-ink/15",
    style: {
      opacity: .45
    }
  }, "Products I've shaped"), HERO5_LINKS.map(l => React.createElement("a", {
    key: l.t,
    href: l.href,
    target: "_blank",
    rel: "noreferrer",
    className: "flex items-baseline justify-between gap-4 py-2.5 border-b border-ink/10 group",
    style: {
      color: "inherit"
    }
  }, React.createElement("span", {
    className: "text-[15px] font-semibold tracking-[-.01em] ul"
  }, l.t), React.createElement("span", {
    className: "mono text-[8.5px] tracking-[.16em] uppercase whitespace-nowrap",
    style: {
      opacity: .5
    }
  }, l.s, " \u2197")))), React.createElement("div", null, React.createElement("div", {
    className: "mono text-[8.5px] tracking-[.2em] uppercase pb-2.5 border-b border-ink/15",
    style: {
      opacity: .45
    }
  }, "Based in"), React.createElement("div", {
    className: "text-[15px] font-semibold tracking-[-.01em] mt-3"
  }, PROFILE.location, " ", React.createElement("span", {
    style: {
      opacity: .5
    }
  }, "(", PROFILE.tz, ")")), React.createElement("div", {
    className: "text-[13.5px] mt-1",
    style: {
      opacity: .6
    }
  }, PROFILE.mode, " \xB7 Any hours, any timezone"), React.createElement("div", {
    className: "flex items-center gap-2 mono text-[9px] tracking-[.16em] uppercase mt-3.5 text-accent"
  }, React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-accent inline-block"
  }), "Open to work"))), React.createElement("div", {
    className: "flex flex-wrap items-center gap-2.5 mt-10"
  }, React.createElement("button", {
    onClick: () => go("work"),
    className: "px-5 py-3 rounded-[5px] bg-accent text-white text-[13.5px] font-medium inline-flex items-center gap-2 hover:opacity-88 transition-opacity"
  }, "View selected work ", React.createElement("span", {
    className: "text-[11px]"
  }, "\u2197")), React.createElement("a", {
    href: `mailto:${PROFILE.email}`,
    className: "px-5 py-3 rounded-[5px] border border-ink/20 text-[13.5px] font-medium inline-flex items-center gap-2 hover:bg-ink hover:text-paper transition-colors",
    style: {
      color: "inherit"
    }
  }, "Get in touch ", React.createElement("span", {
    className: "text-[11px]"
  }, "\u2197")))))));
}
Object.assign(window, {
  Hero5,
  HERO5_LINKS
});

/* ===== about ===== */
const {
  useState: useStateH4,
  useEffect: useEffectH4
} = React;
const COPY4 = {
  line1: "I build data models, pipelines",
  line2: "and the dashboards on top of them",
  blurb: "Three years on ~dbt, Databricks and Azure Data Factory~, designing the Tableau and Power BI surfaces teams decide on. Built ^TrackPerform^ and ^DrillCal^ for clients — both launched.",
  blurb2: "Three years modelling data in dbt and Databricks, and designing the Tableau and Power BI surfaces teams decide on every week.",
  role: "Analytics Engineer · Data Analyst · Business Intelligence Analyst"
};
const GROUPS4 = [{
  id: "dashboards",
  label: "Dashboards & Analytics",
  note: "Civic and personal data visualisations, built in Tableau.",
  ids: ["09", "03"]
}, {
  id: "products",
  label: "Products & Web Apps",
  note: "Client builds, shipped — I own the data model and the interface.",
  ids: ["01", "02"]
}];
const FOCUS4 = [{
  k: "01",
  t: "Build and maintain data models",
  d: "dbt on Databricks and Azure Data Factory. Raw lands untouched, staging casts and de-duplicates, every model carries tests.",
  pop: [["dbt models", "60+"], ["tests on them", "41"], ["orchestration", "Azure DF"]]
}, {
  k: "02",
  t: "Build dashboards that guide decisions",
  d: "Tableau and Power BI. Built so the number a team came for is on screen before anyone touches a filter.",
  pop: [["Tableau Viz of the Day", "×2"], ["Vizzies nominated", "×4"], ["clicks to the answer", "0–1"]]
}, {
  k: "03",
  t: "Design and ship products",
  d: "TrackPerform and DrillCal — client builds, both launched and used by coaches to plan and read a week of training.",
  pop: [["products live", "2"], ["read time", "3 min → 3s"], ["metrics auto-mapped", "40+"]]
}];
const ABOUT_COPY = ["A dashboard is only as trustworthy as the pull underneath it, so I do ~both halves~ \u2014 the SQL, the models, the tests, and then the screen someone makes a decision on. Three years of that for finance, operations and commercial teams.", "I work as an ^analytics engineer, data analyst and BI analyst^ — and, increasingly, I build the product on top. Right now I'm most interested in the modern data stack: dbt, lakehouse architecture, and putting a real interface on the data instead of another spreadsheet.", "Currently at ~SessionHub~ in Lagos. I built ~TrackPerform~ and ~DrillCal~ for clients, both launched. Tableau Viz of the Day, twice, and longlisted for the Vizzies.", "I also write up what I break along the way \u2014 ^GitHub^ and ^LinkedIn^ are the honest record."];
const CARD_COPY = {
  "09": {
    kicker: "Analyst · Data viz",
    blurb: "Every African country's ~first head of state after independence~ and the one in office today, on one map. One ring per five years in power — and every mark is a ^calculated coordinate^, not a Tableau map.",
    stickers: [["108 leaders", -6, {
      top: "-14px",
      right: "18%"
    }], ["1 ring = 5 yrs", 7, {
      bottom: "-16px",
      left: "10%"
    }]]
  },
  "01": {
    kicker: "Client project · Product & Data",
    blurb: "Started as a club data-competition entry, became a product. AI reads any GPS export, maps the columns itself, and a Python service returns ~who is ready and who is overloaded~ — in ^seconds, not minutes^.",
    stickers: [["ACWR 1.34", -7, {
      top: "-14px",
      right: "16%"
    }], ["3 min → 3s", 6, {
      bottom: "-16px",
      right: "34%"
    }]]
  },
  "02": {
    kicker: "Client project · Data & Product",
    blurb: "A coaching journal: plan the next four weeks, keep every drill and video in a library that ~belongs to the coach, not the club~, and still know what you ran ^ten years later^.",
    stickers: [["7-day forecast", 5, {
      top: "-14px",
      left: "9%"
    }], ["120+ drills", -6, {
      bottom: "-16px",
      right: "14%"
    }]]
  },
  "03": {
    kicker: "Analyst · Data viz",
    blurb: "108,000 citizen service requests, 17 departments, 44 zip codes — mapped to show ~where the city actually fails its residents~. Picked as ^Tableau Viz of the Day^.",
    stickers: [["108k rows", -5, {
      top: "-14px",
      right: "22%"
    }], ["Viz of the Day", 7, {
      bottom: "-16px",
      left: "12%"
    }]]
  }
};
function HoverImage({
  src,
  className = "",
  children
}) {
  const {
    useState,
    useRef
  } = React;
  const [on, setOn] = useState(false);
  const [pt, setPt] = useState({
    x: 0,
    y: 0
  });
  const raf = useRef(0);
  const move = e => {
    const x = e.clientX,
      y = e.clientY;
    if (raf.current) return;
    raf.current = requestAnimationFrame(() => {
      raf.current = 0;
      setPt({
        x,
        y
      });
    });
  };
  return React.createElement("span", {
    className: "relative inline-block " + className,
    onMouseEnter: () => setOn(true),
    onMouseLeave: () => setOn(false),
    onMouseMove: move
  }, children, src && React.createElement("span", {
    className: "hover-media hidden md:block",
    style: {
      left: pt.x + 26,
      top: pt.y - 92,
      opacity: on ? 1 : 0,
      transform: on ? "scale(1) rotate(-2deg)" : "scale(.94) rotate(-2deg)"
    }
  }, React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: 260,
      height: 176,
      objectFit: "cover",
      borderRadius: 12,
      border: "3px solid #fff",
      boxShadow: "0 30px 60px -28px rgba(0,0,0,.55)"
    }
  })));
}
function CardMeta({
  work,
  light,
  compact
}) {
  const stack = (work.stack || []).slice(0, 6);
  if (work.viz) {
    const href = work.tableauUrl || PROFILE.tableau;
    return React.createElement("div", {
      className: "mt-5"
    }, React.createElement("div", {
      className: "pt-3.5 border-t flex flex-wrap items-center gap-x-4 gap-y-2",
      style: {
        borderColor: light ? "rgba(255,255,255,.28)" : "rgb(var(--c-ink) / .18)"
      }
    }, React.createElement("span", {
      className: "mono text-[10px] font-semibold tracking-[.14em] uppercase",
      style: {
        opacity: light ? 1 : .85
      }
    }, "Built with Tableau"), React.createElement("a", {
      href: href,
      target: "_blank",
      rel: "noreferrer",
      onClick: e => e.stopPropagation(),
      className: "mono text-[9.5px] font-semibold tracking-[.14em] uppercase underline decoration-1",
      style: {
        color: light ? "#fff" : "rgb(var(--c-accent))",
        textUnderlineOffset: "3px"
      }
    }, "View it live \u2197")));
  }
  const glass = on => ({
    border: "1px solid " + (on ? "rgba(255,255,255,.42)" : "rgb(var(--c-ink) / .28)"),
    background: on ? "rgba(10,12,11,.3)" : "rgba(255,255,255,.55)",
    backdropFilter: "blur(6px)",
    color: on ? "#fff" : "rgb(var(--c-ink))"
  });
  const label = {
    opacity: light ? 1 : .8
  };
  if (compact) {
    return React.createElement("div", {
      className: "pt-3 mt-3 border-t flex flex-wrap items-center gap-1.5",
      style: {
        borderColor: light ? "rgba(255,255,255,.28)" : "rgb(var(--c-ink) / .18)"
      }
    }, work.category && React.createElement("span", {
      className: "px-2.5 py-1.5 rounded-[6px] mono text-[9px] font-semibold tracking-[.12em] uppercase",
      style: glass(light)
    }, work.category), stack.slice(0, 3).map(t => React.createElement("span", {
      key: t,
      className: "px-2.5 py-1.5 rounded-[6px] mono text-[9px] font-semibold tracking-[.1em] uppercase",
      style: glass(light)
    }, t)));
  }
  return React.createElement("div", {
    className: "mt-5"
  }, React.createElement("div", {
    className: "pt-3.5 border-t",
    style: {
      borderColor: light ? "rgba(255,255,255,.28)" : "rgb(var(--c-ink) / .18)"
    }
  }, React.createElement("div", {
    className: "mono text-[8.5px] tracking-[.2em] uppercase",
    style: label
  }, "Category"), work.category && React.createElement("span", {
    className: "inline-block mt-2.5 px-3 py-2 rounded-[6px] mono text-[10px] font-semibold tracking-[.12em] uppercase",
    style: glass(light)
  }, work.category)), stack.length > 0 && React.createElement("div", {
    className: "pt-3.5 mt-4 border-t",
    style: {
      borderColor: light ? "rgba(255,255,255,.28)" : "rgb(var(--c-ink) / .18)"
    }
  }, React.createElement("div", {
    className: "mono text-[8.5px] tracking-[.2em] uppercase",
    style: label
  }, "Tech stack"), React.createElement("div", {
    className: "flex flex-wrap gap-1.5 mt-2.5"
  }, stack.map(t => React.createElement("span", {
    key: t,
    className: "px-2.5 py-1.5 rounded-[6px] mono text-[9.5px] font-semibold tracking-[.1em] uppercase",
    style: glass(light)
  }, t)))), work.skills && React.createElement("div", {
    className: "pt-3.5 mt-4 border-t",
    style: {
      borderColor: light ? "rgba(255,255,255,.28)" : "rgb(var(--c-ink) / .18)"
    }
  }, React.createElement("div", {
    className: "mono text-[8.5px] tracking-[.2em] uppercase",
    style: label
  }, "Skills"), React.createElement("div", {
    className: "text-[13px] leading-[1.55] mt-2",
    style: {
      opacity: 1
    }
  }, work.skills)));
}
function StatTable({
  stats,
  light
}) {
  return React.createElement("div", {
    className: "mt-9 max-w-[300px]"
  }, stats.map(([k, v]) => React.createElement("div", {
    key: k,
    className: "flex items-baseline justify-between gap-6 py-2.5 border-b",
    style: {
      borderColor: light ? "rgba(255,255,255,.26)" : "rgb(var(--c-ink) / .16)"
    }
  }, React.createElement("span", {
    className: "text-[13.5px] font-bold tracking-tight"
  }, k), React.createElement("span", {
    className: "mono text-[12.5px] whitespace-nowrap",
    style: {
      opacity: .8
    }
  }, v))));
}
function Sticker({
  label,
  rot,
  pos,
  light
}) {
  return React.createElement("div", {
    className: "absolute hidden md:block",
    style: {
      ...pos,
      transform: `rotate(${rot}deg)`
    }
  }, React.createElement("span", {
    className: "mono text-[9.5px] tracking-[.14em] uppercase px-3 py-2 rounded-lg shadow-[0_8px_20px_-10px_rgba(0,0,0,.45)]",
    style: {
      background: light ? "#fff" : "rgb(var(--c-paper))",
      color: "rgb(var(--c-ink))"
    }
  }, label));
}
function ProjectCard({
  work,
  tint,
  go,
  cards = "Tinted",
  order = 0
}) {
  const open = () => go("case:" + work.id);
  const tags = (work.stack && work.stack.length ? work.stack : String(work.tag || "").split("·").map(s => s.trim()).filter(Boolean)).slice(0, 6);
  const light = tint && tint.fg === "light";
  const cardStyle = tint ? {
    "--pc-hover": tint.bg,
    "--pc-hover-fg": light ? "#fff" : "rgb(var(--c-ink))"
  } : undefined;
  return React.createElement("div", {
    className: "reveal h-full",
    style: {
      transitionDelay: order % 3 * 80 + "ms"
    }
  }, React.createElement("div", {
    onClick: open,
    role: "link",
    tabIndex: "0",
    onKeyDown: e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    },
    className: "pcard2",
    style: cardStyle
  }, React.createElement("div", {
    className: "pcard2-img"
  }, React.createElement("img", {
    src: work.image,
    alt: work.title,
    loading: "lazy"
  })), React.createElement("div", {
    className: "pcard2-body"
  }, React.createElement("h3", {
    className: "pcard2-title"
  }, work.title), React.createElement("div", {
    className: "pcard2-tags"
  }, tags.map((t, i) => React.createElement("span", {
    key: i,
    className: "pcard2-tag"
  }, t))), React.createElement("span", {
    className: "pcard2-cta"
  }, "Case study \u2192"))));
}
function SelectedList({
  go,
  pal,
  cards = "Tinted"
}) {
  const {
    useState
  } = React;
  const rows = GROUPS4.flatMap(g => g.ids.map(id => ({
    g,
    w: SELECTED_WORKS.find(x => x.id === id)
  }))).filter(r => r.w);
  const [active, setActive] = useState(rows[0] ? rows[0].w.id : null);
  const tintOf = id => pal.cards[SELECTED_WORKS.findIndex(w => w.id === id) % pal.cards.length];
  return React.createElement("div", {
    className: "shell"
  }, React.createElement("div", {
    className: "relative rounded-[26px] overflow-hidden hidden md:block",
    style: {
      aspectRatio: "16 / 7",
      background: cards === "Paper" ? "rgb(var(--c-paper2))" : (tintOf(active) || {}).bg
    }
  }, rows.map(({
    w
  }) => React.createElement("div", {
    key: w.id,
    className: "absolute inset-0 flex items-center justify-center p-10 transition-all duration-[700ms]",
    style: {
      opacity: active === w.id ? 1 : 0,
      transform: active === w.id ? "translateY(0) scale(1)" : "translateY(18px) scale(.97)",
      pointerEvents: "none"
    }
  }, React.createElement("img", {
    src: w.image,
    alt: "",
    className: "max-h-full max-w-[74%] object-contain rounded-xl rotate-[-1.5deg]",
    style: {
      border: "3px solid rgba(255,255,255,.92)",
      boxShadow: "0 40px 80px -36px rgba(0,0,0,.55)"
    }
  }))), React.createElement("div", {
    className: "absolute left-7 top-6 mono text-[9.5px] tracking-[.2em] uppercase",
    style: {
      opacity: .55
    }
  }, (WORK_META[active] || {}).role || "Selected work")), React.createElement("div", {
    className: "mt-10 md:mt-12"
  }, GROUPS4.map(g => React.createElement("div", {
    key: g.id
  }, React.createElement("div", {
    className: "flex flex-wrap items-baseline justify-between gap-x-8 gap-y-2 pt-10 pb-4"
  }, React.createElement("span", {
    className: "mono text-[9.5px] tracking-[.2em] uppercase",
    style: {
      opacity: .45
    }
  }, g.label), React.createElement("span", {
    className: "mono text-[9px] tracking-[.14em] uppercase",
    style: {
      opacity: .32
    }
  }, g.note)), g.ids.map(id => {
    const w = SELECTED_WORKS.find(x => x.id === id);
    if (!w) return null;
    const m = WORK_META[id] || {};
    const on = active === id;
    return React.createElement("button", {
      key: id,
      onClick: () => go("case:" + id),
      onMouseEnter: () => setActive(id),
      onFocus: () => setActive(id),
      className: "w-full text-left border-t border-ink/15 py-7 md:py-8 block group"
    }, React.createElement("div", {
      className: "grid grid-cols-12 gap-4 md:gap-8 items-baseline"
    }, React.createElement("div", {
      className: "col-span-2 md:col-span-1 mono text-[10px] tracking-[.2em]",
      style: {
        opacity: on ? 1 : .35,
        color: on ? "rgb(var(--c-accent))" : "inherit"
      }
    }, id), React.createElement("div", {
      className: "col-span-10 md:col-span-5"
    }, React.createElement("h3", {
      className: "text-[30px] md:text-[42px] font-black tracking-[-.04em] leading-none transition-colors duration-300",
      style: {
        color: on ? "rgb(var(--c-accent))" : "inherit"
      }
    }, w.title), React.createElement("div", {
      className: "mono text-[9.5px] tracking-[.16em] uppercase mt-3",
      style: {
        opacity: .5
      }
    }, w.client, " \xB7 ", w.year)), React.createElement("div", {
      className: "col-span-12 md:col-span-4"
    }, React.createElement("p", {
      className: "text-[15px] leading-[1.6] max-w-md",
      style: {
        opacity: .75
      }
    }, m.outcome || w.blurb)), React.createElement("div", {
      className: "col-span-12 md:col-span-2 md:text-right"
    }, React.createElement("div", {
      className: "mono text-[8.5px] tracking-[.18em] uppercase",
      style: {
        opacity: .45
      }
    }, w.metric.label), React.createElement("div", {
      className: "text-[24px] md:text-[28px] font-black tracking-[-.04em] mt-1"
    }, w.metric.value), React.createElement("div", {
      className: "mono text-[9px] tracking-[.18em] uppercase mt-3 text-accent transition-opacity duration-300",
      style: {
        opacity: on ? 1 : 0
      }
    }, "See case study \u2197"))));
  }))), React.createElement("div", {
    className: "border-t border-ink/15"
  })));
}
function GroupHead({
  g,
  n
}) {
  return React.createElement("div", {
    className: "flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 pt-16 md:pt-20 pb-8 border-t border-ink/15"
  }, React.createElement("div", {
    className: "flex items-baseline gap-4"
  }, React.createElement("h3", {
    className: "text-[26px] md:text-[32px] font-black tracking-[-.045em] leading-none"
  }, g.label), React.createElement("span", {
    className: "mono text-[10px] tracking-[.18em] uppercase",
    style: {
      opacity: .4
    }
  }, n)), React.createElement("p", {
    className: "mono text-[9.5px] tracking-[.13em] uppercase max-w-[420px]",
    style: {
      opacity: .45
    }
  }, g.note));
}
function Hero4({
  go
}) {
  return React.createElement("section", {
    className: "shell pt-32 md:pt-44 pb-32 md:pb-48 md:min-h-[86svh] flex flex-col justify-center"
  }, React.createElement("div", {
    className: "grid grid-cols-12 gap-y-10 gap-x-10 md:gap-x-16 items-start"
  }, React.createElement("h1", {
    className: "col-span-12 md:col-span-7 claim",
    style: {
      fontSize: "clamp(34px, 5.6vw, 68px)"
    }
  }, COPY4.line1, React.createElement("br", null), React.createElement("span", {
    style: {
      opacity: .42
    }
  }, COPY4.line2)), React.createElement("div", {
    className: "col-span-12 md:col-span-5 md:pt-3"
  }, React.createElement("p", {
    className: "text-[16px] md:text-[17px] leading-[1.55] max-w-[400px]",
    style: {
      opacity: .72
    }
  }, COPY4.blurb2), React.createElement("div", {
    className: "flex flex-wrap items-center gap-3 mt-8"
  }, React.createElement("button", {
    onClick: () => go("work"),
    className: "px-6 py-3.5 rounded-[5px] bg-accent text-white text-[14px] font-medium inline-flex items-center gap-2.5 hover:opacity-88 transition-opacity"
  }, "View selected work ", React.createElement("span", {
    className: "text-[12px]"
  }, "\u2197")), React.createElement("button", {
    onClick: () => go("resume"),
    className: "px-6 py-3.5 rounded-[5px] border border-ink/20 text-[14px] font-medium inline-flex items-center gap-2.5 hover:bg-ink hover:text-paper transition-colors"
  }, "About me ", React.createElement("span", {
    className: "text-[12px]"
  }, "\u2197"))))));
}
function HeroBand({
  go
}) {
  const t = TRACKS4[0];
  return React.createElement("div", null, React.createElement("div", {
    className: "shell flex items-baseline justify-between gap-6 pb-4"
  }, React.createElement("div", {
    className: "flex items-baseline gap-3"
  }, React.createElement("span", {
    className: "mono text-[9px] tracking-[.16em] text-accent"
  }, "01"), React.createElement("span", {
    className: "text-[19px] font-semibold tracking-[-.02em]"
  }, "Analytics engineering"), React.createElement("span", {
    className: "text-[14px] hidden sm:inline",
    style: {
      opacity: .5
    }
  }, "source to decision")), React.createElement("button", {
    onClick: () => go("stack"),
    className: "mono text-[9px] tracking-[.16em] uppercase",
    style: {
      opacity: .4
    }
  }, "The full workflow")), React.createElement(WorkflowStreet, {
    stages: t.stages,
    caption: "analytics engineering \xB7 one pass"
  }));
}
function ArtSchema() {
  const I = "rgb(var(--c-ink))",
    A = "rgb(var(--c-accent))",
    A2 = "rgb(var(--c-accent2))";
  return React.createElement("svg", {
    viewBox: "0 0 200 140",
    className: "h-[150px] w-full",
    fill: "none"
  }, React.createElement("g", {
    stroke: I,
    strokeWidth: "1.4",
    opacity: ".35",
    fill: "none"
  }, React.createElement("path", {
    d: "M48 45 C 66 45, 68 69, 84 69"
  }), React.createElement("path", {
    d: "M48 73 H84"
  }), React.createElement("path", {
    d: "M48 101 C 66 101, 68 77, 84 77"
  })), React.createElement("path", {
    d: "M128 69 H150",
    stroke: A,
    strokeWidth: "1.6",
    opacity: ".75"
  }), React.createElement("path", {
    d: "M145 65 l6 4 -6 4",
    stroke: A,
    strokeWidth: "1.6",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), [35, 63, 91].map((y, i) => React.createElement("g", {
    key: i
  }, React.createElement("rect", {
    x: "12",
    y: y,
    width: "36",
    height: "22",
    rx: "6",
    fill: "rgb(var(--c-paper))",
    stroke: I,
    strokeWidth: "1.5"
  }), React.createElement("rect", {
    x: "18",
    y: y + 6,
    width: "17",
    height: "2.6",
    rx: "1.3",
    fill: I,
    opacity: ".32"
  }), React.createElement("rect", {
    x: "18",
    y: y + 12,
    width: "24",
    height: "2.6",
    rx: "1.3",
    fill: I,
    opacity: ".16"
  }))), React.createElement("text", {
    x: "30",
    y: "130",
    fontSize: "7",
    fill: I,
    opacity: ".42",
    textAnchor: "middle",
    fontFamily: "var(--f-mono)",
    letterSpacing: "1"
  }, "RAW"), React.createElement("rect", {
    x: "84",
    y: "53",
    width: "44",
    height: "34",
    rx: "9",
    fill: A,
    opacity: ".1"
  }), React.createElement("rect", {
    x: "84",
    y: "53",
    width: "44",
    height: "34",
    rx: "9",
    stroke: A,
    strokeWidth: "1.6"
  }), React.createElement("text", {
    x: "106",
    y: "75",
    fontSize: "13",
    fontWeight: "800",
    fill: A,
    textAnchor: "middle",
    fontFamily: "var(--f-mono)"
  }, "{ }"), React.createElement("text", {
    x: "106",
    y: "130",
    fontSize: "7",
    fill: I,
    opacity: ".42",
    textAnchor: "middle",
    fontFamily: "var(--f-mono)",
    letterSpacing: "1"
  }, "dbt"), React.createElement("rect", {
    x: "150",
    y: "40",
    width: "42",
    height: "58",
    rx: "7",
    fill: "rgb(var(--c-paper))",
    stroke: I,
    strokeWidth: "1.6"
  }), React.createElement("rect", {
    x: "150",
    y: "40",
    width: "42",
    height: "12",
    rx: "7",
    fill: I,
    opacity: ".9"
  }), React.createElement("rect", {
    x: "155",
    y: "44.5",
    width: "20",
    height: "3",
    rx: "1.5",
    fill: "rgb(var(--c-paper))",
    opacity: ".85"
  }), [0, 1, 2, 3].map(r => React.createElement("g", {
    key: r
  }, React.createElement("circle", {
    cx: "158",
    cy: 61 + r * 9,
    r: "2",
    fill: r === 1 ? A2 : I,
    opacity: r === 1 ? 1 : .3
  }), React.createElement("rect", {
    x: "164",
    y: 59.5 + r * 9,
    width: r === 3 ? 14 : 22,
    height: "3",
    rx: "1.5",
    fill: I,
    opacity: ".18"
  }))), React.createElement("text", {
    x: "171",
    y: "130",
    fontSize: "7",
    fill: I,
    opacity: ".42",
    textAnchor: "middle",
    fontFamily: "var(--f-mono)",
    letterSpacing: "1"
  }, "MODEL"), React.createElement("circle", {
    cx: "187",
    cy: "43",
    r: "8.5",
    fill: "rgb(var(--c-paper))",
    stroke: A2,
    strokeWidth: "1.4"
  }), React.createElement("path", {
    d: "M183 43 l3 3 5 -6",
    stroke: A2,
    strokeWidth: "1.7",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }));
}
function ArtDashboard() {
  const I = "rgb(var(--c-ink))",
    A = "rgb(var(--c-accent))",
    A2 = "rgb(var(--c-accent2))";
  const bars = [14, 22, 18, 30, 25, 38];
  return React.createElement("svg", {
    viewBox: "0 0 200 140",
    className: "h-[150px] w-full",
    fill: "none"
  }, React.createElement("rect", {
    x: "10",
    y: "12",
    width: "180",
    height: "116",
    rx: "10",
    fill: "rgb(var(--c-paper))",
    stroke: I,
    strokeWidth: "1.6"
  }), React.createElement("path", {
    d: "M10 33 H190",
    stroke: I,
    strokeWidth: "1.3",
    opacity: ".25"
  }), React.createElement("circle", {
    cx: "21",
    cy: "22",
    r: "2.2",
    fill: A,
    opacity: ".75"
  }), React.createElement("circle", {
    cx: "29",
    cy: "22",
    r: "2.2",
    fill: I,
    opacity: ".2"
  }), React.createElement("rect", {
    x: "150",
    y: "18",
    width: "30",
    height: "7",
    rx: "3.5",
    fill: I,
    opacity: ".1"
  }), React.createElement("rect", {
    x: "20",
    y: "44",
    width: "74",
    height: "44",
    rx: "7",
    fill: I,
    opacity: ".05"
  }), React.createElement("text", {
    x: "29",
    y: "59",
    fontSize: "7",
    fill: I,
    opacity: ".5",
    fontFamily: "var(--f-mono)",
    letterSpacing: ".6"
  }, "DAYS TO PAY"), React.createElement("text", {
    x: "29",
    y: "79",
    fontSize: "20",
    fontWeight: "800",
    fill: A,
    fontFamily: "var(--f-head)"
  }, "31.4"), bars.map((b, i) => React.createElement("rect", {
    key: i,
    x: 108 + i * 13,
    y: 88 - b,
    width: "8",
    height: b,
    rx: "2.5",
    fill: i === 5 ? A : I,
    opacity: i === 5 ? .9 : .22
  })), React.createElement("path", {
    d: "M108 92 H182",
    stroke: I,
    strokeWidth: "1.1",
    opacity: ".2"
  }), React.createElement("path", {
    d: "M22 118 l20 -10 16 5 18 -12 18 7 20 -9 22 5 24 -8",
    stroke: A2,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("circle", {
    cx: "180",
    cy: "99",
    r: "3",
    fill: A2
  }));
}
function ArtProduct() {
  const I = "rgb(var(--c-ink))",
    A = "rgb(var(--c-accent))",
    A2 = "rgb(var(--c-accent2))";
  return React.createElement("svg", {
    viewBox: "0 0 200 140",
    className: "h-[150px] w-full",
    fill: "none"
  }, React.createElement("rect", {
    x: "70",
    y: "28",
    width: "118",
    height: "82",
    rx: "9",
    fill: "rgb(var(--c-paper))",
    stroke: I,
    strokeWidth: "1.6"
  }), React.createElement("path", {
    d: "M70 44 H188",
    stroke: I,
    strokeWidth: "1.2",
    opacity: ".25"
  }), React.createElement("circle", {
    cx: "80",
    cy: "36",
    r: "1.8",
    fill: I,
    opacity: ".3"
  }), React.createElement("circle", {
    cx: "87",
    cy: "36",
    r: "1.8",
    fill: I,
    opacity: ".2"
  }), React.createElement("rect", {
    x: "100",
    y: "33",
    width: "60",
    height: "6",
    rx: "3",
    fill: I,
    opacity: ".08"
  }), React.createElement("rect", {
    x: "84",
    y: "52",
    width: "30",
    height: "4",
    rx: "2",
    fill: I,
    opacity: ".22"
  }), React.createElement("rect", {
    x: "84",
    y: "60",
    width: "46",
    height: "4",
    rx: "2",
    fill: I,
    opacity: ".12"
  }), React.createElement("path", {
    d: "M84 96 l14 -13 10 6 14 -17 12 10 16 -13",
    stroke: A,
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), React.createElement("circle", {
    cx: "150",
    cy: "69",
    r: "3",
    fill: A
  }), React.createElement("rect", {
    x: "18",
    y: "46",
    width: "52",
    height: "86",
    rx: "12",
    fill: "rgb(var(--c-paper))",
    stroke: I,
    strokeWidth: "1.7"
  }), React.createElement("rect", {
    x: "36",
    y: "51",
    width: "16",
    height: "3",
    rx: "1.5",
    fill: I,
    opacity: ".25"
  }), React.createElement("circle", {
    cx: "44",
    cy: "79",
    r: "15",
    stroke: I,
    strokeWidth: "3",
    opacity: ".14",
    fill: "none"
  }), React.createElement("path", {
    d: "M44 64 a15 15 0 0 1 12.5 23",
    stroke: A,
    strokeWidth: "3",
    fill: "none",
    strokeLinecap: "round"
  }), React.createElement("text", {
    x: "44",
    y: "83",
    fontSize: "11",
    fontWeight: "800",
    fill: A,
    textAnchor: "middle",
    fontFamily: "var(--f-head)"
  }, "1.3"), [0, 1, 2].map(r => React.createElement("g", {
    key: r
  }, React.createElement("circle", {
    cx: "28",
    cy: 104 + r * 8,
    r: "1.8",
    fill: r === 0 ? A2 : I,
    opacity: r === 0 ? .9 : .25
  }), React.createElement("rect", {
    x: "34",
    y: 102.5 + r * 8,
    width: r === 2 ? 16 : 26,
    height: "3",
    rx: "1.5",
    fill: I,
    opacity: ".16"
  }))), React.createElement("circle", {
    cx: "181",
    cy: "36",
    r: "3",
    fill: A2
  }));
}
const DO_ART = [ArtSchema, ArtDashboard, ArtProduct];
function DoArt({
  n
}) {
  const {
    useState,
    useEffect
  } = React;
  const [ok, setOk] = useState(false);
  const src = `images/illustrations/do-${n}.svg`;
  useEffect(() => {
    const im = new Image();
    im.onload = () => setOk(true);
    im.src = src;
  }, [src]);
  const Fallback = DO_ART[n - 1] || ArtSchema;
  if (!ok) return React.createElement("div", {
    className: "h-[150px] flex items-center justify-center"
  }, React.createElement(Fallback, null));
  return React.createElement("img", {
    src: src,
    alt: "",
    className: "h-[150px] w-full object-contain"
  });
}
function FocusRow() {
  return React.createElement("section", {
    id: "what-i-do",
    className: "shell-pad pb-4 pt-4"
  }, React.createElement("div", {
    className: "shellbox rounded-[32px] border border-ink/10 px-6 md:px-12 py-16 md:py-24",
    style: {
      background: "rgb(var(--c-card))"
    }
  }, React.createElement("div", {
    className: "text-center"
  }, React.createElement("span", {
    className: "inline-block px-4 py-2 rounded-lg border border-ink/15 mono text-[9.5px] tracking-[.18em] uppercase",
    style: {
      background: "rgb(var(--c-paper))",
      opacity: .8
    }
  }, "What I do"), React.createElement("h2", {
    "data-fill": true,
    className: "claim text-[8.5vw] md:text-[52px] max-w-[760px] mx-auto mt-7"
  }, "Here\u2019s what I can help you with"), React.createElement("p", {
    className: "text-[14px] md:text-[15px] leading-[1.65] max-w-[540px] mx-auto mt-7",
    style: {
      opacity: .62
    }
  }, "I care how a dashboard looks as much as what it says. The model gets the same care as the chart \u2014 to me that's one job, not two.")), React.createElement("div", {
    className: "grid md:grid-cols-3 gap-5 md:gap-6 mt-14"
  }, FOCUS4.map((f, i) => React.createElement("div", {
    key: f.k,
    className: "popwrap reveal relative rounded-[20px] border border-ink/15 p-7 md:p-8 text-center transition-colors duration-300 hover:border-ink/35",
    style: {
      transitionDelay: i * 90 + "ms"
    },
    tabIndex: "0"
  }, React.createElement(DoArt, {
    n: i + 1
  }), React.createElement("h3", {
    className: "text-[20px] md:text-[22px] font-bold tracking-[-.03em] leading-[1.2] mt-7 mx-auto max-w-[260px]"
  }, f.t), React.createElement("p", {
    className: "text-[14.5px] leading-[1.6] mt-3 mx-auto max-w-[300px]",
    style: {
      opacity: .7
    }
  }, f.d), React.createElement("div", {
    className: "pop rounded-2xl p-5 border border-ink/12 shadow-[0_26px_50px_-26px_rgba(0,0,0,.4)] text-left",
    style: {
      background: "rgb(var(--c-paper))"
    }
  }, f.pop.map(([k, v]) => React.createElement("div", {
    key: k,
    className: "flex items-baseline justify-between gap-4 py-2 border-b border-ink/10 last:border-0"
  }, React.createElement("span", {
    className: "mono text-[9.5px] tracking-[.14em] uppercase",
    style: {
      opacity: .55
    }
  }, k), React.createElement("span", {
    className: "mono text-[12px] font-semibold text-accent whitespace-nowrap"
  }, v)))))))));
}
function SelectedHead({
  go
}) {
  return React.createElement("div", {
    className: "shell pt-24 md:pt-28 pb-10 flex flex-wrap items-end justify-between gap-6"
  }, React.createElement("div", null, React.createElement("div", {
    className: "eyebrow",
    style: {
      opacity: .5
    }
  }, "Three of them, in full"), React.createElement("h2", {
    "data-fill": true,
    className: "claim text-[9vw] md:text-[44px] mt-4"
  }, "Selected works")), React.createElement("button", {
    onClick: () => go("work"),
    className: "ul mono text-[10px] tracking-[.2em] uppercase",
    style: {
      opacity: .6
    }
  }, "Full archive \u2192"));
}
function BuiltWith() {
  return React.createElement("section", {
    className: "shell py-24 md:py-32"
  }, React.createElement("h2", {
    className: "claim max-w-[900px]",
    style: {
      fontSize: "clamp(30px, 4.4vw, 52px)"
    }
  }, "My ", React.createElement("span", {
    style: {
      opacity: .42
    }
  }, "tech stack"), "."), React.createElement("p", {
    className: "text-[15.5px] md:text-[16.5px] leading-[1.6] max-w-[520px] mt-6",
    style: {
      opacity: .7
    }
  }, "AI is part of what I do, every day \u2014 not a novelty. These are the tools that take a question from a raw source table to a dashboard someone opens on Monday."), React.createElement("div", {
    className: "grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-10 gap-x-3 gap-y-6 mt-14 max-w-[820px]"
  }, TOOLS4.map((t, i) => React.createElement("div", {
    key: t.name,
    className: "reveal",
    style: {
      transitionDelay: i % 10 * 45 + "ms"
    }
  }, React.createElement("div", {
    className: "aspect-square rounded-[3px] border border-ink/12 flex items-center justify-center",
    style: {
      background: "rgb(var(--c-paper2))"
    }
  }, React.createElement(ToolIcon, {
    name: t.ico,
    slug: t.slug,
    file: t.file,
    invert: t.invert,
    size: 32
  })), React.createElement("div", {
    className: "mono text-[7.5px] tracking-[.12em] uppercase text-center mt-2 leading-[1.35]",
    style: {
      opacity: .55
    }
  }, t.name)))));
}
function SkillsHome() {
  const half = Math.ceil(SKILLS.length / 2);
  return React.createElement("section", {
    className: "shell py-20 md:py-24"
  }, React.createElement("div", {
    className: "flex flex-wrap items-end justify-between gap-6"
  }, React.createElement("div", null, React.createElement("div", {
    className: "eyebrow",
    style: {
      opacity: .5
    }
  }, "Skills"), React.createElement("h2", {
    "data-fill": true,
    className: "claim text-[9vw] md:text-[44px] mt-4"
  }, "Where the depth is")), React.createElement("p", {
    className: "mono text-[9.5px] tracking-[.14em] uppercase max-w-[320px]",
    style: {
      opacity: .45
    }
  }, "Modelling and SQL carry the work. PySpark and orchestration are growing.")), React.createElement("div", {
    className: "grid md:grid-cols-2 gap-x-14 gap-y-0 mt-7"
  }, React.createElement(SkillBars, {
    items: SKILLS.slice(0, half)
  }), React.createElement(SkillBars, {
    items: SKILLS.slice(half)
  })));
}
function WorkflowHome({
  go
}) {
  const {
    useState
  } = React;
  const [i, setI] = useState(0);
  const tr = TRACKS4[i];
  return React.createElement("section", {
    className: "pt-24 md:pt-28 pb-4"
  }, React.createElement("div", {
    className: "shell"
  }, React.createElement("div", {
    className: "flex items-baseline justify-between gap-6 pb-5 border-b border-ink/15"
  }, React.createElement("span", {
    className: "mono text-[9.5px] tracking-[.2em] uppercase",
    style: {
      opacity: .5
    }
  }, "How I work"), React.createElement("span", {
    className: "mono text-[9.5px] tracking-[.2em] uppercase",
    style: {
      opacity: .35
    }
  }, tr.n, " / 03")), React.createElement("div", {
    className: "grid grid-cols-12 gap-6 md:gap-10 pt-9"
  }, React.createElement("h2", {
    className: "col-span-12 md:col-span-7 claim text-[9.5vw] md:text-[52px]"
  }, tr.claim), React.createElement("div", {
    className: "col-span-12 md:col-span-5 md:pt-2"
  }, React.createElement("p", {
    className: "text-[15.5px] leading-[1.65] max-w-[330px]",
    style: {
      opacity: .78
    }
  }, tr.note), React.createElement("button", {
    onClick: () => go("stack"),
    className: "ul mono text-[10px] tracking-[.2em] uppercase mt-5 inline-block",
    style: {
      opacity: .6
    }
  }, "Walk it in full \u2192"))), React.createElement("div", {
    className: "flex flex-wrap gap-2 mt-10"
  }, TRACKS4.map((t, k) => React.createElement("button", {
    key: t.id,
    onClick: () => setI(k),
    className: "px-4 py-2.5 rounded-full mono text-[9.5px] tracking-[.16em] uppercase border transition-colors " + (k === i ? "bg-ink text-paper border-ink" : "border-ink/18 hover:border-ink/45")
  }, React.createElement("span", {
    style: {
      opacity: .55
    }
  }, t.n), "\xA0\xA0", t.label)))), React.createElement("div", {
    className: "mt-10"
  }, React.createElement(WorkflowStreet, {
    stages: tr.stages,
    caption: tr.label + " · one pass"
  })), React.createElement("div", {
    className: "shell mt-12"
  }, React.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-6 gap-x-6 gap-y-8"
  }, tr.stages.map((st, k) => React.createElement("div", {
    key: st.k,
    className: "pt-4 border-t border-ink/15"
  }, React.createElement("div", {
    className: "mono text-[9.5px] tracking-[.2em] text-accent"
  }, st.k), React.createElement("div", {
    className: "text-[17px] font-bold tracking-[-.03em] mt-2"
  }, st.t), React.createElement("div", {
    className: "mono text-[8.5px] tracking-[.14em] uppercase mt-1.5 leading-[1.5]",
    style: {
      opacity: .45
    }
  }, st.s))))));
}
function About4() {
  return React.createElement("section", {
    className: "shell py-24 md:py-32"
  }, React.createElement("div", {
    className: "grid grid-cols-12 gap-10 md:gap-16"
  }, React.createElement("div", {
    className: "col-span-12 md:col-span-5"
  }, React.createElement("h2", {
    className: "claim text-[11vw] md:text-[52px]"
  }, "Owning the whole line"), React.createElement("div", {
    className: "flip3d mt-8 w-full max-w-[300px]"
  }, React.createElement("img", {
    src: "images/profile.jpg",
    alt: "Uduak Afang",
    "data-flip": "1",
    className: "w-full rounded-xl object-cover aspect-[4/3]"
  }))), React.createElement("div", {
    className: "col-span-12 md:col-span-7 space-y-6 text-[16.5px] leading-[1.7]",
    style: {
      opacity: .88
    }
  }, ABOUT_COPY.map((s, i) => React.createElement("p", {
    key: i,
    className: i === 3 ? "text-[14.5px]" : "",
    style: i === 3 ? {
      opacity: .6
    } : null
  }, React.createElement(T, null, s))))));
}
function SoonGrid({
  soft
}) {
  return React.createElement("section", {
    className: "shell pt-20 pb-24"
  }, React.createElement("div", {
    className: "eyebrow mb-8",
    style: {
      opacity: .45
    }
  }, "Soon \xB7 in the workshop"), React.createElement("div", {
    className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
  }, SOON.map((s, i) => React.createElement("div", {
    key: s.title,
    className: "reveal popwrap relative rounded-[22px] p-6 flex flex-col min-h-[230px]",
    style: {
      background: soft[i % soft.length],
      transitionDelay: i * 80 + "ms"
    },
    tabIndex: "0"
  }, React.createElement("div", {
    className: "flex items-center justify-between gap-3"
  }, React.createElement("span", {
    className: "mono text-[8.5px] tracking-[.18em] uppercase px-2.5 py-1.5 rounded-md bg-accent text-white"
  }, "Soon"), React.createElement("span", {
    className: "mono text-[9px] tracking-[.16em] uppercase",
    style: {
      opacity: .45
    }
  }, s.tag)), React.createElement("h3", {
    className: "text-[24px] font-black tracking-[-.04em] leading-[1.1] mt-6"
  }, s.title), React.createElement("p", {
    className: "text-[14.5px] leading-[1.6] mt-3",
    style: {
      opacity: .75
    }
  }, s.blurb), React.createElement("div", {
    className: "mt-auto pt-6 flex items-center gap-2 mono text-[9px] tracking-[.16em] uppercase",
    style: {
      opacity: .45
    }
  }, React.createElement("span", {
    className: "w-1.5 h-1.5 rounded-full bg-accent inline-block"
  }), " in progress")))));
}
function Contact4({
  go
}) {
  return React.createElement("section", {
    className: "pt-28 pb-20 text-center px-6"
  }, React.createElement("h2", {
    className: "claim text-[10vw] md:text-[50px] max-w-[600px] mx-auto"
  }, "Send project enquiries"), React.createElement("a", {
    href: `mailto:${PROFILE.email}`,
    className: "mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink/18 mono text-[12px] tracking-[.06em] hover:bg-ink hover:text-paper transition-colors"
  }, "\u2709 ", PROFILE.email), go && React.createElement("div", {
    className: "flex flex-wrap items-center justify-center gap-3 mt-12"
  }, React.createElement("button", {
    onClick: () => go("work"),
    className: "px-7 py-4 rounded-[4px] bg-accent text-white text-[14px] font-medium inline-flex items-center gap-2.5 hover:opacity-88 transition-opacity"
  }, "Explore portfolio ", React.createElement("span", {
    className: "text-[12px]"
  }, "\u2197")), React.createElement("button", {
    onClick: () => go("resume"),
    className: "px-7 py-4 rounded-[4px] border border-ink/20 text-[14px] font-medium inline-flex items-center gap-2.5 hover:bg-ink hover:text-paper transition-colors"
  }, "Take a look at the r\xE9sum\xE9 ", React.createElement("span", {
    className: "text-[12px]"
  }, "\u2197"))), React.createElement("div", {
    className: "mono text-[9px] tracking-[.3em] text-accent mt-10",
    style: {
      opacity: .5
    }
  }, "09"));
}
function HomePage4({
  go,
  pal,
  band,
  cards,
  heroPanel
}) {
  useReveal4("home");
  return React.createElement("main", {
    className: "grain"
  }, window.__V5 && typeof Hero5 !== "undefined" ? React.createElement(Hero5, {
    go: go,
    panel: heroPanel
  }) : React.createElement(Hero4, {
    go: go
  }), React.createElement(FocusRow, null), React.createElement(SelectedHead, {
    go: go
  }), React.createElement("div", {
    id: "work-start",
    className: "shell",
    style: {
      overflowX: "clip"
    }
  }, GROUPS4.map(g => {
    const items = g.ids.map(id => SELECTED_WORKS.find(w => w.id === id)).filter(Boolean);
    return React.createElement("div", {
      key: g.id
    }, React.createElement(GroupHead, {
      g: g,
      n: String(g.id === "dashboards" ? (window.VIZ_ITEMS || []).length : items.length).padStart(2, "0")
    }), g.id === "dashboards" ? React.createElement(VizBoard, {
      go: go,
      pal: pal,
      pinned: false
    }) : React.createElement("div", {
      className: "card-grid"
    }, items.map((w, k) => React.createElement(ProjectCard, {
      key: w.id,
      work: w,
      tint: pal.cards[SELECTED_WORKS.indexOf(w) % pal.cards.length],
      go: go,
      cards: cards,
      order: SELECTED_WORKS.indexOf(w) >= 0 ? SELECTED_WORKS.indexOf(w) : k
    }))));
  })), React.createElement(WorkBench, {
    go: go
  }), React.createElement(SkillsHome, null), React.createElement(BuiltWith, null), React.createElement(About4, null), React.createElement(Contact4, {
    go: go
  }), React.createElement("div", {
    className: "shell-pad pb-8"
  }, React.createElement("div", {
    className: "shellbox rounded-[32px] overflow-hidden border border-ink/10"
  }, React.createElement(CircuitBand, null))));
}
Object.assign(window, {
  HomePage4,
  Contact4,
  ProjectCard,
  StatTable,
  SoonGrid,
  FocusRow,
  BuiltWith,
  GroupHead,
  HoverImage,
  SkillsHome,
  SelectedList,
  WorkflowHome,
  COPY4,
  CARD_COPY,
  FOCUS4,
  GROUPS4
});

/* ===== case-study ===== */
const {
  useState: useStateC4,
  useEffect: useEffectC4
} = React;
const CASE_COPY = {
  "01": {
    lede: "This is the story of ~TrackPerform~ — how a data-competition entry became an AI product that turns any club's messy GPS export into a ^per-athlete readiness read in seconds^.",
    chips: ["Client project", "Product Design", "Data Modelling", "Built with AI", "React + TypeScript", "Supabase", "Python", "Sports Science"],
    heads: ["It began as a competition entry", "The message that made it a product", "The issues in the files", "The fixes", "The features"],
    extra: {
      2: "Dates were their own trap. ~06/07~ is the 6th of July in Madrid and the 7th of June in New York, and the file never tells you which. Guess wrong and every rolling window behind the read is wrong with it.",
      3: "Underneath it all a Python service turns each athlete's load into an ~acute:chronic workload ratio~ — a seven-day load against a twenty-eight-day baseline — and colours it: green inside the ^0.8–1.3 band^, yellow below, red above. That one coloured number is the whole point of the product."
    }
  },
  "02": {
    lede: "This is the story of ~DrillCal~ — a coaching journal built for a client and his coaches: plan the next four weeks, keep every drill and video, and ^take all of it with you when the club changes^. Launched 1 August 2026.",
    chips: ["Client project", "Product Design", "Calendar UX", "Built with AI", "React + TypeScript", "Supabase", "Postgres RLS"],
    heads: ["It began in conversations with coaches", "The thing coaches kept saying", "The issues", "The fixes", "The features"],
    extra: {
      1: "The tenure numbers are the whole argument. A coach stays at a club ~two to four years~, works across four to eight teams in a career, and accumulates a few hundred drills doing it. Every one of those moves is a rebuild if the drills live in the club's drive.",
      3: "So the calendar was rewritten to keep duration as data rather than infer it from the slot: a dragged session carries its start and end with it, a period holds as many sessions as the day actually has, and an all-day item can be dropped into a time like anything else. Under it all, DrillCal is a deliberately ~transactional~ app — React on Supabase, with ^Postgres row-level security^ doing the load-bearing work: a shared team never means a shared library, because the rows themselves decide who can see what."
    }
  },
  "03": {
    lede: "108,000 service requests across ~seventeen city departments~. This is where I learned that a map is an argument, not a picture. Picked as ^Tableau Viz of the Day^.",
    chips: ["★ Analyst", "Data Viz", "Tableau", "Mapbox", "SQL", "Civic data"],
    heads: ["The question", "The data we actually had", "Building it", "What changed", "What I'd do next"],
    extra: {}
  }
};
const CASE_SQL = {
  "01": `# the one number the whole product exists to show
acute   = load.ewm(halflife=7,  min_periods=1).mean()   # ~1 week
chronic = load.ewm(halflife=28, min_periods=1).mean()   # ~4 weeks
acwr    = acute / chronic

risk = np.select(
    [acwr > 1.3, acwr < 0.8],
    ['high',     'detraining'],   # red,   yellow
    default='optimal')            # green: 0.8-1.3`,
  "02": `select
  d.drill_id,
  d.name,
  avg(d.typical_distance_m) as est_distance,
  avg(d.typical_hsr_m)      as est_hsr,
  count(s.session_id)       as times_run
from {{ ref('stg_drills') }} d
left join {{ ref('stg_sessions') }} s
  using (drill_id)
group by 1, 2`,
  "03": `select
  department,
  zip_code,
  priority,
  count(*) as requests,
  avg(closed_at - created_at) as avg_days_open
from {{ ref('stg_311_requests') }}
where created_at >= date '2023-01-01'
group by 1, 2, 3
order by avg_days_open desc`
};
const CASE_SQL_NAME = {
  "01": "services/load/acwr.py",
  "02": "models/dim_drills.sql",
  "03": "models/fct_311_requests.sql"
};
const CASE_FIGS = {
  "02": {
    0: [{
      src: "images/drillcal/hero.png",
      t: "DrillCal · the pitch",
      n: "The product's own pitch, which is also the shortest way to say what it does: plan your sessions, save your drills, coach with clarity. Everything below is the same idea in working form."
    }],
    2: [{
      src: "images/drillcal/daily-planner.png",
      t: "The daily planner · where the bug lived",
      n: "Drag a four-hour video-analysis session from the afternoon into the morning and it used to arrive with no time at all — start and end nulled, the block stretched across the full six-hour morning slot. Two more followed from the same assumption: items in the all-day row could not be dragged into a time, and each period could hold only one session, so a double day was impossible to plan."
    }],
    3: [{
      src: "images/drillcal/drills.png",
      t: "The drill library",
      n: "The fix that matters most is who owns this. Drills — title, category, duration, video, notes — belong to the coach's account, not to a team, so changing club means creating a new team and keeping the library. Categories are the ones coaches already use: technical, tactical, physical, goalkeeper, recovery, cognitive."
    }],
    4: [{
      src: "images/drillcal/tactical-board.png",
      t: "Tactical board",
      n: "Drawing on a pitch, saved against the drill it belongs to — so the shape and the session plan travel together instead of living in a screenshot on a phone."
    }, {
      src: "images/drillcal/players.png",
      t: "Players",
      n: "The squad, with positions and the sessions each player has been part of. Assistant coaches and analysts get their own roles, so a club can share a plan without handing over the library."
    }, {
      src: "images/drillcal/attendance.png",
      small: true,
      t: "Attendance · on the phone",
      n: "Taken on the touchline, where it actually happens: who turned up, against the session that was planned — which is what turns a plan into a record worth keeping."
    }]
  },
  "01": {
    0: [{
      src: "images/trackperform/chelsea-tableau.png",
      t: "Competition entry · Tableau",
      n: "Built in Tableau on Chelsea FC's open GPS dataset, released for their public data competition. Player load KPIs with an eight-day trend against the thirty-day average, a match-day calendar, and matchday HSR against the day after. Shortlisted."
    }],
    2: [{
      src: "images/diagrams/issues.svg",
      t: "What the files actually looked like",
      n: "Drawn from the real uploads. Sheet A packs a week into one sheet as tables inside tables — a date row, a generated-at row, a header row, a handful of players, four blank rows, then the same again. Sheet B is a single session with no date column anywhere, because to the person exporting it the date was obvious. Add 06/07 meaning July in Madrid and June in New York, and one metric arriving under four vendor names, and either the upload bounced or the wait outlasted the person doing it."
    }],
    3: [{
      src: "images/trackperform/detecting-structure.png",
      t: "Detecting file structure",
      n: "The intake now reads the file for shape before mapping a single column: where the data starts, which column is the date, whether the sheet is one session or a season split into blocks. Unusual formatting gets restructured and proposed back to you instead of rejected."
    }, {
      src: "images/diagrams/pipeline.svg",
      t: "Any export in, one coloured read out",
      n: "AI reads the structure, a mapper resolves the columns onto a shared schema, the load engine computes the ratios, the dashboard renders — and the first seven days return in a couple of seconds while the rest streams in behind you. Uploads are also bounded to a date window now, so a year of sessions can't hold the first read hostage. It runs serverless: the raw file lands in Supabase storage, a Python service on Google Cloud Run does the parsing and the maths, and the finished metrics go back into Supabase for the dashboard to read — so the heavy work never slows the app itself."
    }],
    4: [{
      src: "images/trackperform/performance-calendar.png",
      t: "ACWR calendar",
      n: "The feature the product exists for. Every metric, every day of the month, each cell carrying its EWMA ACWR level — green optimal (0.8–1.2), yellow below, red above. A month of readiness in one glance.",
      aside: {
        src: "images/diagrams/acwr.svg",
        t: "How the ratio is built",
        n: "A seven-day acute load over a twenty-eight-day chronic baseline. Green is the band to stay inside — not 'under 0.8'."
      }
    }, {
      src: "images/trackperform/team-load-dark.png",
      t: "Team load analysis",
      n: "Where a session lands: six team KPIs with a seven-day trend under each, so the day is read against the week before anyone looks at an individual."
    }, {
      src: "images/trackperform/daily-metrics-dark.png",
      t: "The daily page",
      n: "The first screen after an upload. Six team KPIs with a seven-day trend under each, match day detected automatically, and the squad ranked against targets you set — per athlete or per group."
    }, {
      src: "images/trackperform/player-monthly.png",
      t: "Max speed analysis",
      n: "Per-athlete speed across the last fifty sessions: peak speed, how often they cross 90% of it, neuromuscular state and recent form. Bars are coloured against their own maximum — green at 90–100%, amber 80–90%, red below."
    }, {
      src: "images/trackperform/rankings-light.png",
      t: "Rankings against targets",
      n: "The squad ranked on whichever metric a coach picks, each bar read against that metric's target range — so 'is this high?' is answered on the same row as the number."
    }]
  }
};
function CaseFigure({
  fig
}) {
  const cap = f => React.createElement("figcaption", null, React.createElement("span", {
    className: "mono text-[9.5px] tracking-[.18em] uppercase"
  }, f.t), React.createElement("span", {
    className: "case-fig-n"
  }, f.n));
  if (fig.aside) {
    return React.createElement("div", {
      className: "case-fig-pair reveal"
    }, React.createElement("figure", {
      className: "case-fig case-fig-flush"
    }, React.createElement("img", {
      src: fig.src,
      alt: fig.t,
      className: "w-full h-auto"
    }), cap(fig)), React.createElement("figure", {
      className: "case-fig case-fig-flush case-fig-aside"
    }, React.createElement("img", {
      src: fig.aside.src,
      alt: fig.aside.t,
      className: "w-full h-auto"
    }), cap(fig.aside)));
  }
  return React.createElement("figure", {
    className: "case-fig reveal " + (fig.small ? "case-fig-sm" : "")
  }, React.createElement("img", {
    src: fig.src,
    alt: fig.t,
    className: "w-full h-auto"
  }), cap(fig));
}
function CaseStudy4({
  id,
  go,
  pal
}) {
  const work = ALL_WORKS.find(w => w.id === id) || SELECTED_WORKS[0];
  const m = WORK_META[id] || WORK_META["01"];
  const cc = CASE_COPY[id] || CASE_COPY["01"];
  const idx = SELECTED_WORKS.findIndex(w => w.id === id);
  const tint = pal.cards[(idx < 0 ? 0 : idx) % pal.cards.length];
  const light = tint.fg === "light";
  useReveal4(id);
  const figsFor = i => CASE_FIGS[id] && CASE_FIGS[id][i] || [];
  const sections = [...(work.process || []).map(p => p.d), m.next];
  return React.createElement("main", {
    className: "grain"
  }, React.createElement("section", {
    className: "shell pt-32 md:pt-36"
  }, React.createElement("button", {
    onClick: () => go("work"),
    className: "mono text-[9px] tracking-[.2em] uppercase",
    style: {
      opacity: .5
    }
  }, "\u2190 All work"), React.createElement("h1", {
    className: "claim text-[12vw] md:text-[58px] max-w-[820px] mt-7"
  }, work.title), React.createElement("p", {
    className: "text-[16.5px] md:text-[18px] leading-[1.55] max-w-[560px] mt-5",
    style: {
      opacity: .78
    }
  }, React.createElement(T, null, cc.lede)), React.createElement("div", {
    className: "case-meta"
  }, React.createElement("div", null, React.createElement("span", null, "Role"), React.createElement("b", null, m.role)), React.createElement("div", null, React.createElement("span", null, "Tools"), React.createElement("b", null, work.tag)), React.createElement("div", null, React.createElement("span", null, "Year"), React.createElement("b", null, work.year)), React.createElement("div", null, React.createElement("span", null, work.url ? "Live" : "Status"), React.createElement("b", null, work.url ? React.createElement("a", {
    href: "https://" + work.url,
    target: "_blank",
    rel: "noreferrer",
    className: "case-meta-link"
  }, work.url, " \u2197") : m.status || "Live · client build")))), React.createElement("article", {
    className: "shell"
  }, sections.map((body, i) => React.createElement(React.Fragment, {
    key: i
  }, React.createElement("div", {
    className: "case-row reveal " + (i % 2 ? "case-row-alt" : "")
  }, React.createElement("div", null, React.createElement("div", {
    className: "mono text-[9px] tracking-[.2em] uppercase",
    style: {
      opacity: .4
    }
  }, String(i + 1).padStart(2, "0")), React.createElement("h2", {
    className: "text-[24px] md:text-[27px] font-semibold tracking-[-.025em] leading-[1.2] mt-3 max-w-[280px]"
  }, cc.heads[i])), React.createElement("div", null, React.createElement("p", {
    className: "text-[15.5px] md:text-[16.5px] leading-[1.7]",
    style: {
      opacity: .82
    }
  }, body), cc.extra && cc.extra[i] && React.createElement("p", {
    className: "text-[15.5px] md:text-[16.5px] leading-[1.7] mt-5",
    style: {
      opacity: .82
    }
  }, React.createElement(T, null, cc.extra[i])), i === 3 && id === "01" && React.createElement("div", {
    className: "mt-8"
  }, React.createElement(QueryCard, {
    lines: CASE_SQL["01"],
    name: CASE_SQL_NAME["01"]
  })))), figsFor(i).map(fg => React.createElement(CaseFigure, {
    key: fg.src,
    fig: fg
  })), false && i === 1 && React.createElement("div", {
    className: "grid md:grid-cols-2 gap-4 mt-12 reveal"
  }, React.createElement(SchemaCard, {
    name: id === "03" ? "fct_311_requests" : "fct_session_load",
    rows: id === "03" ? [["request_id", "int"], ["created_at", "ts"], ["department", "text"], ["zip", "text"], ["priority", "text"], ["days_open", "int"]] : [["player_id", "int"], ["session_date", "date"], ["total_distance_m", "num"], ["hsr_m", "num"], ["player_load", "num"], ["acwr", "num"]]
  }), React.createElement(QueryCard, {
    lines: CASE_SQL[id] || CASE_SQL["01"],
    name: CASE_SQL_NAME[id] || CASE_SQL_NAME["01"]
  })), id !== "01" && i === 3 && React.createElement("div", {
    className: "grid grid-cols-2 md:grid-cols-3 gap-4 mt-12 reveal"
  }, m.gallery.map((g, k) => React.createElement("img", {
    key: g + k,
    src: g,
    alt: "",
    className: "w-full h-[150px] md:h-[190px] object-cover object-top rounded-xl border border-ink/10"
  }))))), React.createElement("div", {
    className: "case-row reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "mono text-[9px] tracking-[.2em] uppercase",
    style: {
      opacity: .4
    }
  }, "Built with")), React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, (work.stack || m.tags).map(t => React.createElement("span", {
    key: t,
    className: "chip"
  }, t))))), React.createElement("section", {
    className: "shell mt-24 pb-24"
  }, (() => {
    const nx = SELECTED_WORKS[((idx < 0 ? 0 : idx) + 1) % SELECTED_WORKS.length];
    const nTint = pal.cards[SELECTED_WORKS.indexOf(nx) % pal.cards.length];
    const nLight = nTint.fg === "light";
    return React.createElement("button", {
      onClick: () => go("case:" + nx.id),
      className: "w-full text-left rounded-[28px] p-8 md:p-12 transition-transform duration-500 hover:-translate-y-1",
      style: {
        background: nTint.bg,
        color: nLight ? "#fff" : "rgb(var(--c-ink))"
      }
    }, React.createElement("div", {
      className: "mono text-[9.5px] tracking-[.18em] uppercase",
      style: {
        opacity: .6
      }
    }, "Next project"), React.createElement("div", {
      className: "flex flex-wrap items-end justify-between gap-6 mt-4"
    }, React.createElement("h3", {
      className: "claim text-[11vw] md:text-[54px]"
    }, nx.title), React.createElement("span", {
      className: "mono text-[10.5px] font-semibold tracking-[.12em] uppercase px-5 py-2.5 rounded-full",
      style: {
        background: nLight ? "#fff" : "rgb(var(--c-ink))",
        color: nLight ? "#111" : "rgb(var(--c-paper))"
      }
    }, "See case study \u2192")));
  })()), React.createElement(Contact4, null));
}
Object.assign(window, {
  CaseStudy4,
  CASE_COPY,
  CASE_FIGS
});

/* ===== case-viz ===== */
const VIZ_CASES = ["03", "09", "05", "04"];
const VIZ_COPY = {
  "09": {
    lede: "54 countries, 108 heads of state — the first one after independence and the one in office today, on ^one map^. Each ring is five years in power; the stem tells you whether power changed hands by election or by force.",
    shot: {
      src: "images/leaders.png",
      t: "The full viz",
      n: "Two nodes per country: a diamond for the first post-independence leader, a circle for the current one, with a stem running between them — solid where the transition was orderly, dashed where it was by force. The rings around a node count tenure, one ring per five years, so length of rule is a size you read rather than a number you look up. Colour is the system of government (authoritarian, military, monarchy, parliamentary, republic) and a green glow marks the countries whose system has changed since independence. A star marks the first leader since independence. The Africa outline is drawn from a fitted GeoJSON, and every mark sits on a coordinate I placed by hand."
    },
    beats: [{
      h: "The thought process",
      b: "Most political charts on Africa are a table of names and dates. The thing I actually wanted to see was whether the system a country carried out of independence is the system it lives under now — and that is a comparison, not a list. So the unit of the graphic became the country, and each country got exactly two marks: the first head of state after independence, and the one in office today.",
      b2: "Everything else follows from that pair. The stem between the two marks is the transition, so it carries how power moved: solid for orderly, dashed for by force. Tenure had to be comparable at a glance, so it became rings rather than a label — one ring per five years, which turns forty years in office into something you notice before you read a single word."
    }, {
      h: "It is not a map",
      b: "Tableau's built-in maps could not do this. The nodes needed to sit near their country but far enough apart to carry ten rings without colliding, so real latitude and longitude were the wrong coordinate system. I built my own: an Africa outline fitted to a flat GeoJSON for the background, and a coordinates CSV holding an x/y and an angle for every one of the 54 countries, placed and re-placed by hand until the crowded parts of the continent breathed.",
      b2: "From there every mark is geometry I calculate. ^MAKEPOINT^ places the nodes and the ring centres, ^MAKELINE^ draws the stems between them, and a set of parameters — scale, shift, ring step, rise — lets me nudge the whole composition without touching the data. The ring radius, the stem start point, the mid point of a curve: all of it is trigonometry in calculated fields, which is why the layout is reproducible instead of a picture I drew over."
    }, {
      h: "The classification problem",
      b: "The dataset is mine — I compiled it country by country: administration type, mode of entry, exit type, date sworn in and date left. The problem with a dataset you build yourself is that it tells the truth in too much detail. Administration type came out at about thirty distinct values, which is thirty colours nobody can read, so it gets folded into five groups that a legend can hold.",
      b2: "Exit type got the same treatment. Grouping is where a graphic like this either stays honest or quietly starts lying, so the rules are written down in the calculation rather than done in a legend by hand — one place to check, one place to correct."
    }, {
      h: "What the map says",
      b: "Five countries — Mali, Burkina Faso, Chad, Sudan and Niger — were all republics at independence, and all five are under military rule today. On the map they sit next to each other, which is why that annotation exists: the pattern is geographic, not just statistical.",
      b2: "Then the individual cases the rings expose. Uganda was a republic in 1962 and has been authoritarian since 1986, under the same person for all forty of those years. Teodoro Obiang has governed Equatorial Guinea for 555 months — ten full rings, more than anyone else on the continent. And out of a hundred and six people, two are women: Namibia's Nandi-Ndaitwah and Tanzania's Samia Hassan. No country's first head of state was a woman."
    }]
  },
  "03": {
    lede: "108,238 service requests, seventeen city departments, forty-four zip codes — drawn as ^one screen a city ops lead could read in a meeting^. Selected as Tableau Viz of the Day.",
    pub: [["16,462", "Views"], ["211", "Favourites"], ["Viz of the Day", "Tableau Public"]],
    shot: {
      src: "images/nyc.png",
      t: "Page 1 · Citywide overview",
      n: "The whole year on one screen. Total requests with its trend, the closed / open / overdue split beneath it, then the three priority classes — Standard, Hazardous, Emergency — each with its own monthly column chart and its own overdue count. The Mapbox layer on the right carries open requests by neighbourhood, sized by volume, filtered by the priority you are asking about."
    },
    beats: [{
      h: "The thought process",
      b: "Three numbers decide whether a 311 dashboard is useful: how many requests came in, how many are still open, and how long the open ones have been waiting. Everything on the page is one of those three cut a different way — by priority, by month, by neighbourhood. Nothing else earned a place.",
      b2: "So the layout reads left to right in the order the question gets asked. The totals column on the left is the health check. The priority row across the top is where it is coming from. The map is where it is happening. The frame was drawn in Figma before any of it was built in Tableau — boxes first, numbers second, so the hierarchy was settled while it was still cheap to move."
    }, {
      h: "What inspired it",
      b: "The dataset came out of Real World Fake Data — a community challenge that publishes a dataset shaped like a real operational system each month, so you design against the constraints an actual ops team would hand you rather than a tidy demo table. I started in the data, not in Tableau: what the columns could honestly answer came first, and it turned out to be a small list — volume, status, ageing, and where.",
      b2: "^“Helpdesk Dashboard” by Ann Pregler^ is what got the restraint right. It is an open-ticket monitoring view, and seeing 311 requests as a ticket queue settled the hardest decision for me — a dashboard does not need to hold everything the dataset can produce, only the few things somebody would act on. Priority as a row of cards, one hue per class, colour used only for status: that principle came from her board, not the layout.",
      b3: "The layout came from somewhere else. While working out how to structure it I found a dashboard layout on Pinterest and kept it open beside me — a fixed rail down the left holding the running totals, the priority cards sitting in their own row across the top, and each card carrying its own way in rather than a shared filter bar. That is the arrangement I borrowed: your eye lands on the totals, moves across the classes, then into whichever one is on fire.",
      b4: "Only then did I open Figma and draw the frame — empty boxes at real sizes, no numbers — and once the hierarchy held at that size I exported it and rebuilt it in Tableau. Everything after that was calculations."
    }, {
      h: "The two pages",
      b: "Page one answers \"how is the city doing\". Page two is for the person who already knows something is wrong and needs to say where — one priority class at a time, ranked by neighbourhood, department and request type, down to the individual request ID with its days open.",
      b2: "The two are wired together: the priority cards on page one are the way in, so the drill-down arrives pre-filtered and there is a Back button rather than a second set of controls. Every number on page two carries its prior-year value underneath, because a rate only means something next to the one before it."
    }, {
      h: "The plan, and how it held up",
      b: "One CSV, one extract, no database — every number on both pages is a Tableau calculation over the same table. Status came ready-made: ^CSR Status^ is open or closed and ^Is Overdue Flag^ is Y or N, so instead of inventing a target I crossed the two into the four states that matter — open, closed, closed and overdue, and the one nobody wants, open and overdue. That last bucket is the queue somebody has to actually work through, so it gets its own number rather than hiding inside \"open\".",
      b2: "The plan was that no figure should ever appear without something to judge it against. A year parameter drives the whole workbook: every measure is written twice, once for the selected year and once for the year before, with fixed-level counts holding the denominators steady so the rates do not shift when a filter moves. Ageing is one calculation doing two jobs — days since it was raised if it is still open, days to close if it is not — which is why one column can rank a live queue and a finished one at the same time."
    }]
  },
  "05": {
    lede: "Chelsea FC released a season of player physical data and asked what you could do with it. I built a ^player profile you navigate^ — GPS load, physical capability, recovery and priority areas behind an accordion menu that Tableau does not ship.",
    shot: {
      src: "images/player.png",
      t: "Page 1 · Player Info",
      n: "One player at a time. The bio panel holds the photo, height, weight and age, and the right-hand column is an accordion: Career Stats, Injury History and Priority Areas, one open at a time. Clicking a header swaps which section is showing rather than scrolling a longer page, so the profile stays one screen at every size."
    },
    beats: [{
      h: "The thought process",
      b: "The dataset arrives as four separate tables — GPS session data, physical capability tests, recovery status and individual priority areas — and the temptation is to give each one a page. But nobody in a performance meeting asks about a table. They ask about a player. So the player became the unit of the dashboard and everything else had to fit around a single profile.",
      b2: "That is a space problem before it is a chart problem. A profile wants a photo, a bio, a career history, an injury record, priority areas and the load metrics, and all of that on one screen is a wall. The way out was to accept that only one of those sections is ever being read at once — which is what turned the design into an accordion."
    }, {
      h: "What inspired it",
      b: "I collected the references before drawing anything: attendance dashboards with a fixed left rail, dark training-load boards, a heart-rate readout on a body silhouette, and two player-profile layouts that carry a photo next to a grid of small multiples. What I kept from them was the profile shape — identity on the left, metrics on the right — and the accordion menu, which came from a Tableau community pattern rather than a sports dashboard.",
      b2: "The accordion itself came from ^“Accordion Menu” by Lisa Trescott^ — a Tableau Public viz that builds an accordion out of dynamic zone visibility and parameter actions, credited in turn to Zak Geis's design tip. Seeing it work in Tableau is what made the profile layout possible; without that pattern the page is a scroll.",
      b3: "The dark and light references mattered as much as the layout. I drew the profile twice, in black and in white, because the panels that read well in one do not always survive the other, and the final design is a mix of both."
    }, {
      h: "The frames, then the two pages",
      b: "Every frame was drawn before a single mark was built: Player Performance in white and black, bio and load-demand variants, page one and page two as separate boards. Empty boxes at real sizes, the accordion drawn closed, the calendar block reserved on the right. Deciding the hierarchy in Figma is what kept the Tableau build from turning into a list of worksheets.",
      b2: "Page one is who the player is — bio, accordion, priority areas. Page two is load demand: distance and high-speed running against the match-day calendar, accelerations and decelerations at each threshold, heart-rate zones, peak speed, and each metric read against its benchmark rather than in isolation. Same player, two questions."
    }, {
      h: "How the accordion actually works",
      b: "Tableau has no accordion, so it is built out of one integer parameter and three parameter actions. Clicking a section header runs an action that sets the parameter to that section's number; a boolean per section reads the parameter and drives dynamic zone visibility, so exactly one panel is on the canvas at a time. The panels are not hidden with a filter — they are not rendered.",
      b2: "The header colour is the same trick twice: each section has a pair of string fields, one that returns the label when the parameter matches and one that returns it when it does not, so the active header colours itself and the other two stay black. And because Tableau highlights whatever you click, every interactive tile carries a dummy TRUE / FALSE field and a link action whose only job is to throw the default highlight away. That is the whole mechanism — no extensions, no JavaScript."
    }]
  },
  "04": {
    lede: "Nine podcast creators, four platforms, one screen — ^pick a creator and a window and the whole dashboard re-reads^. Built to answer whether a show is growing or just publishing.",
    shot: {
      src: "images/podcast.png",
      t: "The dashboard",
      n: "Creator selection drives everything: audience size and average listen time, the split between mobile and desktop, where the listeners are, and how episodes performed inside the chosen window. The same layout serves any creator in the workbook rather than one board per show."
    },
    beats: [{
      h: "The thought process",
      b: "Creator analytics fails in a specific way: every platform reports its own numbers, so you end up comparing four dashboards instead of reading one. The fix is not more charts, it is one comparable set of measures — listeners, listen time, device split, geography, per-episode performance — and a selector that swaps which creator you are looking at.",
      b2: "Publishing frequency and genre sit next to the audience numbers deliberately. A weekly show and a monthly show with the same listener count are not doing the same thing, and the dashboard should not let you forget which one you are reading."
    }, {
      h: "What inspired it",
      b: "The colours came from a menu I screenshotted somewhere and never found again — four pill buttons, each with its own soft tint and a matching outline. That palette is the reason the metric cards ended up as tinted panels rather than plain KPI boxes: one hue per measure, held quietly, so the numbers separate without a border between them.",
      b2: "The layout reference was a creator dashboard with a left rail and a row of stat cards over a plays chart, with the episode list kept to the side. What I took from it was the reading order — identity and navigation on the left, the four headline numbers across the top, then the trend, then the per-episode detail — not the styling."
    }, {
      h: "The frames, and what got cut",
      b: "I drew it dark first: navy board, lime studio mark, a creator's hub down the left. It looked good and read badly — the tinted metric cards that carry the whole idea lose their separation on a dark ground, and the palette I had borrowed stopped working. So the dark version was discarded rather than fixed.",
      b2: "The frame that survived is the white one: warm header band, a left rail listing dashboards and pages, and the body left empty until the hierarchy was settled. Everything after that was built in Tableau against that frame."
    }, {
      h: "The build",
      b: "Three parameters carry the workbook. A creator parameter picks the show. A time-frame parameter offers last 30, 60 or 90 days. And a reference date parameter defines what \"now\" means, because the dataset does not update — anchoring the window to a chosen date keeps the trend honest instead of quietly emptying as the file ages.",
      b2: "Underneath it is an Excel workbook of related tables — creators, audience stats, episodes — joined in Tableau rather than pre-flattened, so a measure is defined once and every panel reads the same definition."
    }]
  }
};
const VIZ_FIGS = {
  "05": {
    1: [{
      src: "images/cfc-accordion-ref.png",
      small: true,
      t: "Reference · the accordion pattern",
      n: "“Accordion Menu” by Lisa Trescott — not my work. An accordion built in Tableau from dynamic zone visibility and parameter actions, itself credited to a design tip by Zak Geis. This is the mechanism the player profile is built on."
    }, {
      src: "images/cfc-inspiration.png",
      t: "The reference board",
      n: "The inspirations I collected before drawing: a fixed-rail attendance dashboard, two dark training-load boards, a body-silhouette heart-rate readout, and two player profiles with a photo beside small multiples. None of these are my work — what I took was the profile shape and the accordion menu idea, not the graphics."
    }],
    2: [{
      src: "images/cfc-frames.png",
      t: "Figma · every frame before the build",
      n: "Page 1 and page 2 drawn in both black and white, with the note that the final design is a mix of both. The accordion is drawn closed, the calendar block is reserved on the right, and no numbers appear anywhere — settling the hierarchy at real sizes is what stopped the Tableau build from drifting."
    }],
    3: [{
      t: "The accordion, verbatim",
      n: "Three fields do the work. Left: the boolean that drives dynamic zone visibility for section one — the panel is not filtered, it is not rendered. Middle and right: the twin header fields, one returning the label when the parameter matches and one when it does not, which is how the open section colours itself while the others stay black. Parameter actions on each header set the parameter; a dummy TRUE / FALSE field throws away Tableau's default click highlight.",
      code: [{
        name: "Accordion P 1.",
        src: "//returns a true/false value when the accordion param=1\n//used to control dynamic zone visibility\n\n[Parameters].[Parameter 3]=1"
      }, {
        name: "p.Section 1 color_true",
        src: "//returns section 1 header when accordion param = 1\n//used to color the section 1 header purple\n\nIF [Parameters].[Parameter 3]=1\nTHEN 'Career Stats'\nELSE ''\nEND"
      }, {
        name: "p.Section 1 color_false",
        src: "//returns section 1 header when accordion param does not equal 1\n//used to color the section 1 header black\n\nIF [Parameters].[Parameter 3]<>1\nTHEN 'Career Stats'\nELSE ''\nEND"
      }]
    }]
  },
  "04": {
    1: [{
      src: "images/podcast-inspiration.png",
      t: "The reference board",
      n: "Two references, neither mine. The pill menu on the left is a screenshot I kept purely for the colours — one soft tint per item, outline matching — which became the tinted metric cards. The dashboard on the right set the reading order: rail, four stat cards, plays chart, episode list."
    }],
    2: [{
      src: "images/podcast-frame.png",
      t: "Figma · the final frame",
      n: "The white frame the build follows: warm header band with the studio mark, a left rail splitting dashboards from pages, and an empty body — boxes at real sizes, no numbers, so the hierarchy was settled before any worksheet existed."
    }, {
      src: "images/podcast-discarded.png",
      small: true,
      t: "Discarded · the dark version",
      n: "Drawn first and cut. Navy ground with a lime mark looked sharper as a picture, but the tinted metric cards stopped separating on it, which was the one thing the design was built around."
    }],
    3: [{
      t: "The three parameters",
      n: "Verbatim from the workbook. The creator parameter is a list of creator IDs; the time frame is a string of days so it can be aliased to readable labels; the reference date is what \"now\" means, so a fixed dataset still reads as a rolling window.",
      code: [{
        name: "Podcasters",
        src: "// list parameter · CR001 … CR009\n\"CR002\""
      }, {
        name: "Time frame",
        src: "// aliased: Last 30 / 60 / 90 Days\n\"30\""
      }, {
        name: "Reference Date",
        src: "// anchors the rolling window\n#2025-05-31#"
      }]
    }]
  },
  "09": {
    1: [{
      t: "Two calculations that build the picture",
      n: "Left: tenure becomes rings — a count, not a length, so five years is one ring and forty is eight. Right: how power moved. For the first leader it reads their own exit; for anyone after, it reads their mode of entry, and coup, military, liberation and war all resolve to the same thing. The stem is drawn dashed when this returns \"By force\".",
      code: [{
        name: "Rings · one per five years",
        src: "CEILING( [Tenure (Months)] / 60 )"
      }, {
        name: "Power moved",
        src: "IF [Is Earliest] AND NOT [Is Solo?] THEN\n    IF CONTAINS([First Gov Group],'force')\n    THEN 'By force' ELSE 'Orderly' END\nELSE\n    IF CONTAINS([Mode of Entry],'Coup')\n       OR CONTAINS([Mode of Entry],'Military')\n       OR CONTAINS([Mode of Entry],'Liberation')\n       OR CONTAINS([Mode of Entry],'War')\n    THEN 'By force' ELSE 'Orderly' END\nEND"
      }]
    }],
    2: [{
      t: "Thirty administration types, five colours",
      n: "The verbatim grouping calculation. Everything the legend shows is decided here — and the country whose group differs from its first leader's group is the one that gets the green glow.",
      code: [{
        name: "Gov Group · 30 → 5",
        src: "// Reducing 30 types by grouping to 5\n\nIF CONTAINS([Administration Type], \"Monarch\")\n    OR CONTAINS([Administration Type], \"Empire\")\n    OR CONTAINS([Administration Type], \"Dynastic\")\nTHEN \"Monarchy\"\n\nELSEIF CONTAINS([Administration Type], \"Junta\")\n    OR CONTAINS([Administration Type], \"Transitional\")\n    OR CONTAINS([Administration Type], \"Military\")\nTHEN \"Military-transitional\"\n\nELSEIF CONTAINS([Administration Type], \"Authoritarian\")\n    OR CONTAINS([Administration Type], \"One-Party\")\n    OR CONTAINS([Administration Type], \"Dictatorship\")\n    OR CONTAINS([Administration Type], \"Totalitarian\")\n    OR CONTAINS([Administration Type], \"Dominant\")\nTHEN \"Authoritarian-one-party\"\n\nELSEIF CONTAINS([Administration Type], \"Parliament\")\n    OR CONTAINS([Administration Type], \"Democracy\")\n    OR CONTAINS([Administration Type], \"Semi-Pres\")\nTHEN \"Parliamentary\"\n\nELSE \"Republic\"\nEND"
      }]
    }],
    3: [{
      t: "The two countries the pair logic has to skip",
      n: "Eritrea and South Sudan return one distinct leader — the first head of state never left — so there is no pair to compare and no stem to draw. This field catches them before the transition logic runs.",
      code: [{
        name: "Is Solo?",
        src: "// Eritrea and South Sudan, where the\n// first leader never left\n\n{FIXED [Country]: COUNTD([Leader Name])} = 1"
      }]
    }]
  },
  "03": {
    1: [{
      src: "images/nyc-311-frame.png",
      t: "Figma · the frame before the data",
      n: "My frame, drawn in Figma with the Pinterest layout pinned above it for reference: totals rail on the left, three priority cards across the top, then the two large panels for the ranked breakdown and the map. Empty boxes at real sizes — settling the hierarchy here is what stopped the Tableau build from drifting into a wall of charts."
    }, {
      src: "images/nyc-311-inspiration.png",
      small: true,
      t: "Reference",
      n: "Inspired by “Helpdesk Dashboard” by Ann Pregler — not my work. What I took from it was the restraint: priority as a row of cards, one colour per class, colour reserved for status."
    }],
    3: [{
      t: "Two calculations the whole thing leans on",
      n: "Left: the queue nobody wants — selected year, flagged overdue, still open — which is what makes 9,202 its own number instead of a slice of \"open\". Right: one field that ages a live request and a finished one at once, so the same column can rank both.",
      code: [{
        name: "Open and overdue · CSR",
        src: "IF [Parameters].[Year] = YEAR([Creation Date])\nAND [Is Overdue Flag] = 'Y'\nAND [CSR Status] = 'OPEN'\nTHEN [CSR Number]\nEND"
      }, {
        name: "Days to close or days open",
        src: "IF [CSR Status] = 'OPEN'\nTHEN TODAY() - [Creation Date]\nELSE [Closed Date] - [Creation Date]\nEND"
      }]
    }],
    2: [{
      src: "images/nyc-311-page2.png",
      t: "Page 2 · Priority drill-down",
      n: "Clicking a priority class on page one lands here with the filter already applied. The four cards along the left are the same measures as the overview but for that class alone — volume, average days to close, and the two overdue rates — each against last year. The heatmap underneath puts the year on a day-by-hour grid, and the table lists the actual overdue requests by ID, department and days open. The three ranked bars at the bottom answer where: neighbourhood, department, request type, with department clickable down to sub-department."
    }]
  }
};
function VizFigure({
  fig
}) {
  const cap = React.createElement("figcaption", null, React.createElement("span", {
    className: "mono text-[9.5px] tracking-[.18em] uppercase"
  }, fig.t), React.createElement("span", {
    className: "case-fig-n"
  }, fig.n));
  return React.createElement("figure", {
    className: "case-fig reveal" + (fig.small ? " case-fig-sm" : "")
  }, fig.code ? React.createElement("div", {
    className: "viz-code"
  }, fig.code.map((c, i) => React.createElement("div", {
    key: i,
    className: "viz-code-b"
  }, React.createElement("div", {
    className: "viz-code-h mono"
  }, c.name), React.createElement("pre", {
    className: "mono"
  }, c.src)))) : React.createElement("img", {
    src: fig.src,
    alt: fig.t,
    className: "w-full h-auto"
  }), cap);
}
function CaseViz5({
  id,
  go,
  pal
}) {
  const work = ALL_WORKS.find(w => w.id === id) || SELECTED_WORKS[0];
  const m = WORK_META[id] || WORK_META["03"];
  const cc = VIZ_COPY[id] || VIZ_COPY["03"];
  const idx = SELECTED_WORKS.findIndex(w => w.id === id);
  useReveal4(id);
  const figsFor = i => VIZ_FIGS[id] && VIZ_FIGS[id][i] || [];
  return React.createElement("main", {
    className: "grain"
  }, React.createElement("section", {
    className: "shell pt-32 md:pt-36"
  }, React.createElement("button", {
    onClick: () => go("work"),
    className: "mono text-[9px] tracking-[.2em] uppercase",
    style: {
      opacity: .5
    }
  }, "\u2190 All work"), React.createElement("h1", {
    className: "claim text-[12vw] md:text-[58px] max-w-[820px] mt-7"
  }, work.title), React.createElement("p", {
    className: "text-[16.5px] md:text-[18px] leading-[1.55] max-w-[600px] mt-5",
    style: {
      opacity: .78
    }
  }, React.createElement(T, null, cc.lede)), cc.pub && React.createElement("div", {
    className: "viz-pub"
  }, cc.pub.map(([v, l]) => React.createElement("div", {
    key: l
  }, React.createElement("b", null, v), React.createElement("span", null, l)))), React.createElement("div", {
    className: "case-meta"
  }, React.createElement("div", null, React.createElement("span", null, "Role"), React.createElement("b", null, m.role)), React.createElement("div", null, React.createElement("span", null, "Tools"), React.createElement("b", null, work.tag)), React.createElement("div", null, React.createElement("span", null, "Year"), React.createElement("b", null, work.year)), React.createElement("div", null, React.createElement("span", null, "Live"), React.createElement("b", null, work.tableauUrl ? React.createElement("a", {
    href: work.tableauUrl,
    target: "_blank",
    rel: "noreferrer",
    className: "case-meta-link"
  }, "View on Tableau Public \u2197") : work.client)))), React.createElement("article", {
    className: "shell"
  }, React.createElement(VizFigure, {
    fig: cc.shot
  }), cc.beats.map((s, i) => React.createElement(React.Fragment, {
    key: i
  }, React.createElement("div", {
    className: "case-row reveal " + (i % 2 ? "case-row-alt" : "")
  }, React.createElement("div", null, React.createElement("div", {
    className: "mono text-[9px] tracking-[.2em] uppercase",
    style: {
      opacity: .4
    }
  }, String(i + 1).padStart(2, "0")), React.createElement("h2", {
    className: "text-[24px] md:text-[27px] font-semibold tracking-[-.025em] leading-[1.2] mt-3 max-w-[280px]"
  }, s.h)), React.createElement("div", null, React.createElement("p", {
    className: "text-[15.5px] md:text-[16.5px] leading-[1.7]",
    style: {
      opacity: .82
    }
  }, React.createElement(T, null, s.b)), s.b2 && React.createElement("p", {
    className: "text-[15.5px] md:text-[16.5px] leading-[1.7] mt-5",
    style: {
      opacity: .82
    }
  }, React.createElement(T, null, s.b2)), s.b3 && React.createElement("p", {
    className: "text-[15.5px] md:text-[16.5px] leading-[1.7] mt-5",
    style: {
      opacity: .82
    }
  }, React.createElement(T, null, s.b3)), s.b4 && React.createElement("p", {
    className: "text-[15.5px] md:text-[16.5px] leading-[1.7] mt-5",
    style: {
      opacity: .82
    }
  }, React.createElement(T, null, s.b4)))), figsFor(i).map((fg, k) => React.createElement(VizFigure, {
    key: k,
    fig: fg
  })))), React.createElement("div", {
    className: "case-row reveal"
  }, React.createElement("div", null, React.createElement("div", {
    className: "mono text-[9px] tracking-[.2em] uppercase",
    style: {
      opacity: .4
    }
  }, "Built with")), React.createElement("div", {
    className: "flex flex-wrap gap-1.5"
  }, (m.tags || work.stack).map(t => React.createElement("span", {
    key: t,
    className: "chip"
  }, t))))), React.createElement("section", {
    className: "shell mt-24 pb-24"
  }, (() => {
    const nx = SELECTED_WORKS[((idx < 0 ? 0 : idx) + 1) % SELECTED_WORKS.length];
    const nTint = pal.cards[SELECTED_WORKS.indexOf(nx) % pal.cards.length];
    const nLight = nTint.fg === "light";
    return React.createElement("button", {
      onClick: () => go("case:" + nx.id),
      className: "w-full text-left rounded-[28px] p-8 md:p-12 transition-transform duration-500 hover:-translate-y-1",
      style: {
        background: nTint.bg,
        color: nLight ? "#fff" : "rgb(var(--c-ink))"
      }
    }, React.createElement("div", {
      className: "mono text-[9.5px] tracking-[.18em] uppercase",
      style: {
        opacity: .6
      }
    }, "Next project"), React.createElement("div", {
      className: "flex flex-wrap items-end justify-between gap-6 mt-4"
    }, React.createElement("h3", {
      className: "claim text-[11vw] md:text-[54px]"
    }, nx.title), React.createElement("span", {
      className: "mono text-[10.5px] font-semibold tracking-[.12em] uppercase px-5 py-2.5 rounded-full",
      style: {
        background: nLight ? "#fff" : "rgb(var(--c-ink))",
        color: nLight ? "#111" : "rgb(var(--c-paper))"
      }
    }, "See case study \u2192")));
  })()), React.createElement(Contact4, null));
}
Object.assign(window, {
  CaseViz5,
  VIZ_CASES,
  VIZ_COPY,
  VIZ_FIGS
});

/* ===== viz-board ===== */
const PINNED_ID = "09";
const VIZ_ITEMS = [{
  id: "09",
  title: "The Same Countries, Different Rules",
  label: "Data viz · Tableau",
  image: "images/leaders.png",
  tableauUrl: "https://public.tableau.com/views/AfricanHeadsofStateEarliestandLatest/SameCountryDifferentRules?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
}, {
  id: "03",
  title: "NYC 311 Service Requests",
  label: "Civic data viz · Tableau",
  image: "images/nyc.png",
  tableauUrl: "https://public.tableau.com/views/RWFDNYCCitizenRequestsServices/NYCCSRDashboard?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
}, {
  id: "05",
  title: "CFC Player Performance Insights",
  label: "Sports science · Tableau",
  image: "images/player.png",
  tableauUrl: "https://public.tableau.com/views/CFCPlayerPerformanceInsights/PlayerInfo?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
}, {
  id: "04",
  title: "Podcast Analytics",
  label: "Creator analytics · Tableau",
  image: "images/podcast.png",
  tableauUrl: "https://public.tableau.com/views/PodcastAnalytics/PodcastCreators?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link"
}];
const vizUrl = id => {
  const t = VIZ_ITEMS.find(x => x.id === id) || {};
  const w = typeof ALL_WORKS !== "undefined" && ALL_WORKS.find(x => x.id === id) || {};
  return t.tableauUrl || w.tableauUrl || PROFILE.tableau;
};
function VizLink({
  id,
  light
}) {
  return React.createElement("div", {
    className: "vb-built"
  }, React.createElement("span", {
    className: "mono"
  }, "Built with Tableau"), React.createElement("a", {
    href: vizUrl(id),
    target: "_blank",
    rel: "noreferrer",
    onClick: e => e.stopPropagation(),
    className: "mono vb-live"
  }, "View it live \u2197"));
}
function VizPin({
  go,
  id
}) {
  const {
    useState
  } = React;
  const [hov, setHov] = useState(false);
  const w = ALL_WORKS.find(x => x.id === id);
  if (!w) return null;
  const open = () => go("case:" + w.id);
  return React.createElement("div", {
    className: "vb-pin reveal",
    onClick: open,
    role: "link",
    tabIndex: "0",
    onKeyDown: e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    },
    onMouseEnter: () => setHov(true),
    onMouseLeave: () => setHov(false)
  }, React.createElement("div", {
    className: "vb-pin-shot"
  }, React.createElement("img", {
    src: w.image,
    alt: w.title,
    style: {
      transform: hov ? "scale(1.03)" : "scale(1)"
    }
  })), React.createElement("div", {
    className: "vb-pin-txt"
  }, React.createElement("div", {
    className: "mono text-[9.5px] tracking-[.2em] uppercase text-accent"
  }, "Pinned"), React.createElement("h3", {
    className: "text-[27px] md:text-[34px] font-black tracking-[-.045em] leading-[1] mt-3"
  }, w.title), React.createElement("p", {
    className: "text-[14px] leading-[1.55] mt-3.5",
    style: {
      opacity: .78
    }
  }, w.blurb), React.createElement(VizLink, {
    id: w.id
  }), React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      open();
    },
    className: "mt-5 self-start inline-flex items-center gap-2 pl-3.5 pr-4 py-2.5 rounded-full mono text-[10.5px] font-semibold tracking-[.12em] uppercase transition-transform duration-300",
    style: {
      background: "rgb(var(--c-ink))",
      color: "rgb(var(--c-paper))",
      transform: hov ? "translateY(-2px)" : "none"
    }
  }, React.createElement("span", {
    className: "w-3.5 h-3.5 rounded-full border border-current inline-flex items-center justify-center text-[7px] leading-none"
  }, "\u25B8"), "See case study")));
}
function VizTile({
  t,
  go,
  tint
}) {
  const hasCase = (window.VIZ_CASES || []).includes(t.id) || typeof CASE_COPY !== "undefined" && CASE_COPY[t.id];
  const open = hasCase ? () => go("case:" + t.id) : () => window.open(vizUrl(t.id), "_blank", "noopener");
  const tags = String(t.label || "").split("·").map(s => s.trim()).filter(Boolean);
  const light = tint && tint.fg === "light";
  const cardStyle = tint ? {
    "--pc-hover": tint.bg,
    "--pc-hover-fg": light ? "#fff" : "rgb(var(--c-ink))"
  } : undefined;
  return React.createElement("div", {
    className: "reveal h-full"
  }, React.createElement("div", {
    className: "pcard2",
    onClick: open,
    role: "link",
    tabIndex: "0",
    style: cardStyle,
    onKeyDown: e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        open();
      }
    }
  }, React.createElement("div", {
    className: "pcard2-img"
  }, React.createElement("img", {
    src: t.image,
    alt: t.title,
    loading: "lazy"
  })), React.createElement("div", {
    className: "pcard2-body"
  }, React.createElement("h3", {
    className: "pcard2-title"
  }, t.title), React.createElement("div", {
    className: "pcard2-tags"
  }, tags.map((x, i) => React.createElement("span", {
    key: i,
    className: "pcard2-tag"
  }, x))), React.createElement("span", {
    className: "pcard2-cta"
  }, hasCase ? "Case study →" : "View live ↗"))));
}
function VizBoard({
  go,
  pinId = PINNED_ID,
  pinned = true,
  pal
}) {
  const pin = pinned && VIZ_ITEMS.some(t => t.id === pinId) ? pinId : null;
  const tiles = VIZ_ITEMS.filter(t => t.id !== pin);
  const tints = pal && pal.cards || [];
  return React.createElement("div", {
    className: "vb"
  }, pin && React.createElement(VizPin, {
    go: go,
    id: pin
  }), React.createElement("div", {
    className: "card-grid " + (pin ? "mt-6 md:mt-7" : "")
  }, tiles.map((t, i) => React.createElement(VizTile, {
    key: t.id,
    t: t,
    go: go,
    tint: tints.length ? tints[(i + 1) % tints.length] : null
  }))));
}
Object.assign(window, {
  VizBoard,
  VizPin,
  VizTile,
  VizLink,
  VIZ_ITEMS,
  PINNED_ID,
  vizUrl
});

/* ===== works-resume ===== */
const {
  useState: useStateP4,
  useEffect: useEffectP4
} = React;
const STAGES4 = [{
  k: "01",
  t: "Source",
  s: "Postgres · CSV · APIs",
  d: "Four systems that disagree with each other: the ERP, a GPS export, a Google Sheet somebody maintains by hand, and a payments API. Nothing lines up on customer ID, and nothing agrees on what a week is."
}, {
  k: "02",
  t: "Ingest",
  s: "Python · Azure DF",
  d: "Scheduled extracts with schema detection, so a renamed column fails loudly instead of quietly producing a wrong number."
}, {
  k: "03",
  t: "Stage",
  s: "dbt · tests",
  d: "Raw lands untouched; staging renames, casts and de-duplicates. Every model carries not-null and uniqueness tests, so a broken feed never reaches a dashboard."
}, {
  k: "04",
  t: "Lakehouse",
  s: "Databricks · Delta",
  d: "Facts and dimensions in Delta tables. Incremental where volume demands it, full refresh where clarity matters more than minutes."
}, {
  k: "05",
  t: "Semantic",
  s: "Metrics layer",
  d: "One definition of revenue, churn, days-to-pay and ACWR. When finance and ops quote a number in the same meeting, it is the same number."
}, {
  k: "06",
  t: "Surface",
  s: "Tableau · Power BI · app",
  d: "The part most pipelines treat as an afterthought. Layout, hierarchy, colour and copy get designed — an unread dashboard is a failed pipeline."
}, {
  k: "07",
  t: "Decision",
  s: "Monday, 9am",
  d: "Someone opens a screen, sees which nine accounts are at risk, and acts. That is the only success metric the stack has."
}];
const LEDES = ["Seven stages between a ~messy source system~ and a decision. I work across all of them \u2014 which is the whole argument for hiring ^one person^ instead of splitting the line in half.", "Civic and client dashboards, personal studies, and the two products I ~built end-to-end~ for clients.", "~Claude~ and ~Cursor~ sit inside the loop every day — scaffolding models, drafting tests, reviewing SQL. The judgement calls stay ^mine^.", "Not a novelty \u2014 a daily practice. The judgement calls (grain, ownership, what a metric means) are still mine. ~Everything else moves faster than it used to.~"];
const WF_COMMON = [{
  t: "Work out the decision first",
  d: "Before the data — I need to know the one call the screen is there to help someone make."
}, {
  t: "The messy data is the job",
  d: "The tidy file is never the hard part. The ones that agree with nothing else are."
}, {
  t: "The model and the design are one decision",
  d: "What a row means, who can see it, how it reads on screen — usually the same call, made once."
}, {
  t: "Not done until someone acts on it",
  d: "A dashboard nobody opens didn't work. The point is the decision at the other end."
}];
const WF_ROWS = [{
  id: "ae",
  tab: "Analytics engineering",
  claim: "Raw data in, tested models out",
  d: "The line I own end to end — landing raw data, cleaning and shaping it, and handing the dashboard something it can trust. TrackPerform is the clearest example: any coach's export in, one clean read out, with the heavy work kept off the app.",
  flow: [{
    k: "01",
    t: "Upload",
    s: "coach's raw export"
  }, {
    k: "02",
    t: "Supabase Storage",
    s: "raw file, kept"
  }, {
    k: "03",
    t: "Cloud Run · Python",
    s: "clean + calculate"
  }, {
    k: "04",
    t: "Supabase tables",
    s: "clean metrics"
  }, {
    k: "05",
    t: "Dashboard",
    s: "reads in seconds"
  }]
}, {
  id: "bi",
  tab: "Dashboards & analysis",
  claim: "A question becomes a screen",
  d: "Turning a request into something a team actually opens. With NYC 311 the real work was the argument, not the data — where the city fails its residents, neighbourhood by neighbourhood. A map is an argument, not a picture. It was picked as Tableau Viz of the Day.",
  img: "images/nyc.png",
  cap: "NYC 311 · Tableau Viz of the Day"
}, {
  id: "px",
  tab: "Products",
  claim: "A problem becomes a shipped app",
  d: "When a dashboard isn't enough, I build the product around it — data model, pipeline and interface. DrillCal keeps a coach's whole library in their own account, on Postgres row-level security, so it moves with them when the club changes.",
  img: "images/drillcal/drills.png",
  cap: "DrillCal · the drill library"
}];
function StackPage4({
  go,
  pal
}) {
  const [tab, setTab] = useStateP4(0);
  useReveal4("stack");
  const row = WF_ROWS[tab];
  return React.createElement("main", {
    className: "grain"
  }, React.createElement("section", {
    className: "pt-32 md:pt-40 pb-10 md:pb-14 text-center px-6"
  }, React.createElement("div", {
    className: "eyebrow opacity-50"
  }, "The workflow"), React.createElement("h1", {
    "data-fill": true,
    className: "claim text-[11vw] md:text-[58px] max-w-[820px] mx-auto mt-6"
  }, "How I work"), React.createElement("p", {
    className: "text-[17px] leading-[1.65] max-w-[620px] mx-auto mt-6",
    style: {
      opacity: .85
    }
  }, React.createElement(T, null, "However different the projects look, they run on the same few decisions. Here's what stays the same \u2014 and where each kind of work goes its own way."))), React.createElement("section", {
    className: "shell pb-8 md:pb-12"
  }, React.createElement("div", {
    className: "flex items-baseline justify-between gap-6 border-b border-ink/12 pb-5 mb-9 md:mb-12"
  }, React.createElement("h2", {
    className: "claim text-[7.5vw] md:text-[30px]"
  }, "What stays the same"), React.createElement("span", {
    className: "mono text-[9.5px] tracking-[.2em] uppercase whitespace-nowrap",
    style: {
      opacity: .4
    }
  }, "every project")), React.createElement("div", {
    className: "grid md:grid-cols-2 gap-x-12 gap-y-9"
  }, WF_COMMON.map((c, i) => React.createElement("div", {
    key: c.t,
    className: "reveal flex gap-4",
    style: {
      transitionDelay: i * 60 + "ms"
    }
  }, React.createElement("span", {
    className: "mono text-[11px] text-accent pt-1"
  }, String(i + 1).padStart(2, "0")), React.createElement("div", null, React.createElement("h3", {
    className: "text-[17px] md:text-[19px] font-bold tracking-[-.02em] leading-snug"
  }, c.t), React.createElement("p", {
    className: "text-[14.5px] leading-[1.6] mt-2",
    style: {
      opacity: .72
    }
  }, c.d)))))), React.createElement("section", {
    className: "shell py-14 md:py-20"
  }, React.createElement("div", {
    className: "flex items-baseline justify-between gap-6 border-b border-ink/12 pb-5 mb-8"
  }, React.createElement("h2", {
    className: "claim text-[7.5vw] md:text-[30px]"
  }, "Where the work differs"), React.createElement("span", {
    className: "mono text-[9.5px] tracking-[.2em] uppercase whitespace-nowrap",
    style: {
      opacity: .4
    }
  }, "three lanes")), React.createElement("div", {
    className: "flex flex-wrap gap-2 mb-10"
  }, WF_ROWS.map((r, i) => React.createElement("button", {
    key: r.id,
    onClick: () => setTab(i),
    className: "px-4 py-2.5 rounded-full mono text-[10px] tracking-[.16em] uppercase transition-colors " + (i === tab ? "bg-ink text-paper" : "border border-ink/18 hover:border-ink/45")
  }, r.tab))), row.flow ? React.createElement("div", null, React.createElement("h3", {
    className: "claim text-[8vw] md:text-[34px] leading-[1.08] max-w-[640px]"
  }, row.claim), React.createElement("p", {
    className: "text-[15.5px] md:text-[16.5px] leading-[1.7] mt-5 max-w-[640px]",
    style: {
      opacity: .82
    }
  }, row.d), React.createElement("div", {
    className: "pipeflow mt-9"
  }, row.flow.map((s, k) => React.createElement(React.Fragment, {
    key: s.k
  }, React.createElement("div", {
    className: "pipenode"
  }, React.createElement("span", {
    className: "pipenode-k mono"
  }, s.k), React.createElement("span", {
    className: "pipenode-t"
  }, s.t), React.createElement("span", {
    className: "pipenode-s mono"
  }, s.s)), k < row.flow.length - 1 && React.createElement("span", {
    className: "pipearrow",
    "aria-hidden": "true"
  }))))) : React.createElement("div", {
    className: "grid md:grid-cols-12 gap-8 md:gap-12 items-center"
  }, React.createElement("div", {
    className: "md:col-span-6"
  }, React.createElement("h3", {
    className: "claim text-[8vw] md:text-[34px] leading-[1.08]"
  }, row.claim), React.createElement("p", {
    className: "text-[15.5px] md:text-[16.5px] leading-[1.7] mt-5",
    style: {
      opacity: .82
    }
  }, row.d)), React.createElement("figure", {
    className: "md:col-span-6"
  }, React.createElement("div", {
    className: "rounded-[16px] overflow-hidden border border-ink/12",
    style: {
      background: "rgb(var(--c-paper2))"
    }
  }, React.createElement("img", {
    src: row.img,
    alt: row.cap,
    loading: "lazy",
    className: "w-full block"
  })), React.createElement("figcaption", {
    className: "mono text-[8.5px] tracking-[.18em] uppercase mt-3",
    style: {
      opacity: .45
    }
  }, row.cap)))), React.createElement("section", {
    className: "shell py-16 md:py-24"
  }, React.createElement("div", {
    className: "shellbox rounded-[28px] border border-ink/12 px-7 md:px-14 py-12 md:py-16",
    style: {
      background: "rgb(var(--c-card))"
    }
  }, React.createElement("div", {
    className: "grid md:grid-cols-3 gap-8 md:gap-6 text-center md:text-left"
  }, [["2", "products shipped for clients (TrackPerform, DrillCal)"], ["×2", "Tableau Viz of the Day"], ["1", "person owning the data, the pipeline and the screen"]].map(([v, l]) => React.createElement("div", {
    key: l
  }, React.createElement("div", {
    className: "claim text-[12vw] md:text-[46px] text-accent leading-none"
  }, v), React.createElement("div", {
    className: "text-[13.5px] leading-[1.5] mt-3",
    style: {
      opacity: .7
    }
  }, l)))), React.createElement("p", {
    className: "text-[16px] md:text-[18px] leading-[1.6] max-w-[680px] mt-10 md:mt-12"
  }, React.createElement(T, null, "The maps, the data models, the pipelines, the products \u2014 that's all one person. Analytics engineer, data analyst, BI analyst: for me they've never been ~three separate jobs~.")), React.createElement("button", {
    onClick: () => go("work"),
    className: "mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white text-[13.5px] font-medium hover:opacity-88 transition-opacity"
  }, "See all my work ", React.createElement("span", {
    className: "text-[11px]"
  }, "\u2197")))), React.createElement(Contact4, null));
}
const WORK_GROUPS5 = [{
  id: "viz",
  label: "Dashboards & Analytics",
  note: "Civic and personal data visualisations, built in Tableau.",
  ids: ["09", "03"]
}, {
  id: "products",
  label: "Products & Web Apps",
  note: "Client builds — I own the data model, the pipeline and the interface.",
  ids: ["01", "02"]
}];
function WorksPage4({
  go,
  pal,
  cards
}) {
  useReveal4("works");
  return React.createElement("main", {
    className: "grain"
  }, React.createElement("section", {
    className: "pt-32 md:pt-40 pb-14 text-center px-6"
  }, React.createElement("div", {
    className: "eyebrow opacity-50"
  }, "Archive \xB7 ", ALL_WORKS.length, " projects"), React.createElement("h1", {
    className: "claim text-[12vw] md:text-[64px] mt-6"
  }, "All work"), React.createElement("p", {
    className: "text-[17px] leading-[1.6] max-w-[520px] mx-auto mt-6",
    style: {
      opacity: .85
    }
  }, React.createElement(T, null, LEDES[1]))), React.createElement("div", {
    className: "shell"
  }, WORK_GROUPS5.map(g => {
    const items = g.ids.map(id => SELECTED_WORKS.find(w => w.id === id)).filter(Boolean);
    return React.createElement("div", {
      key: g.id
    }, React.createElement(GroupHead, {
      g: g,
      n: String(g.id === "viz" ? (window.VIZ_ITEMS || []).length : items.length).padStart(2, "0")
    }), g.id === "viz" ? React.createElement(VizBoard, {
      go: go,
      pinned: false,
      pal: pal
    }) : React.createElement("div", {
      className: "card-grid"
    }, items.map((w, i) => React.createElement(ProjectCard, {
      key: w.id,
      work: w,
      tint: pal.cards[(i + 2) % pal.cards.length],
      go: go,
      cards: cards,
      order: i
    }))));
  })), React.createElement("div", {
    className: "pt-24"
  }), React.createElement(SoonGrid, {
    soft: pal.soft
  }), React.createElement(Contact4, null));
}
const CV_SHARED = {
  name: "Uduak Afang",
  contact: [["Phone", "+234 902-426-1252"], ["Email", "uduakafang@gmail.com"], ["Location", "Lagos, Nigeria · UTC+1 · Remote"], ["LinkedIn", "linkedin.com/in/uduakafang"]],
  education: {
    deg: "B.Sc. — University of Lagos",
    where: "Lagos, Nigeria"
  },
  achievements: [["2× Tableau Viz of the Day", "Two dashboards selected for Tableau's global daily featured Viz spotlight (personal Tableau Public work)."], ["4× Tableau Vizzies Nominated", "Nominated across four categories at the annual Tableau Public community awards."]],
  links: [["GitHub", "github.com/UduakAfang"], ["Tableau", "public.tableau.com/…"], ["Portfolio", "uduakafang.github.io"]]
};
const CV_VARIANTS = {
  ae: {
    label: "Analytics Engineer",
    title: "Analytics Engineer",
    overview: "Analytics engineer with 3+ years turning messy, multi-source data into tested, trustworthy models and the dashboards on top of them. Strong SQL and Python, hands-on with dbt, Databricks and Azure Data Factory, and a daily habit of using AI tools to move faster through modelling, testing and debugging. I own the line end-to-end — raw ingestion, a governed semantic layer, and the screen a stakeholder actually decides on — working independently in a remote environment.",
    experience: [{
      role: "BI Analyst",
      org: "SessionHub Softswitch Limited",
      meta: "Lagos, Nigeria · Mar 2023 – Present",
      bullets: ["Designed and built the company's invoice and financial reporting data model from scratch, consolidating scattered, untracked records into one governed, queryable semantic layer.", "Wrote optimised SQL (CTEs, window functions) to extract, clean and transform data across multiple source systems, eliminating manual prep for finance and ops.", "Automated reporting workflows with Azure Data Factory and Python, and use AI tools daily to scaffold models, draft tests and review SQL."]
    }, {
      role: "Data Analyst",
      org: "Demsco Travels & Tours",
      meta: "Lagos, Nigeria · Mar 2022 – Feb 2023",
      bullets: ["Migrated paper-based records into structured, query-ready datasets, improving data accuracy and cutting reporting time by 40%.", "Built Power BI dashboards tracking churn and retention for non-technical stakeholders."]
    }],
    projects: [{
      name: "TrackPerform",
      tag: "Data Pipeline & Modeling",
      year: "2025",
      bullets: ["Architected an asynchronous, serverless ELT pipeline (Supabase Storage → Python on Google Cloud Run → Supabase) that ingests inconsistent multi-source exports and standardises them into one semantic layer before they reach a dashboard.", "Defined a KPI framework from scratch and built automated data-quality checks that catch schema drift and inconsistencies as new sources are added."]
    }, {
      name: "DrillCal",
      tag: "Data Integrity & Audit Logging",
      year: "2025",
      bullets: ["Diagnosed a data integrity bug, then built pre-deletion snapshot logging and an append-only audit trail on Postgres row-level security as a governance safeguard."]
    }],
    skillsTech: ["SQL (SQL Server, PostgreSQL, BigQuery)", "dbt & Spark Pipelines", "Data Modeling (Dimensional, Semantic Layers)", "Azure Data Factory & Databricks", "ETL / ELT Pipeline Development", "Python (Pandas, NumPy, Flask)", "AI-Assisted Analytics (Claude, ChatGPT)", "Tableau & Power BI"],
    skillsSoft: ["Data Governance & Quality", "Testing & CI mindset", "Requirements Gathering", "Remote Self-Direction"]
  },
  da: {
    label: "Data Analyst",
    title: "Data Analyst — BI and AI",
    overview: "BI Analyst with 3+ years building dashboards and reporting that hold up under scrutiny, backed by hands-on SQL, cloud data pipeline experience (Azure Data Factory, Databricks), and a daily habit of using AI tools to accelerate analysis and automate repeatable work rather than treating them as a novelty. Comfortable turning ambiguous business questions into structured analyses, and translating findings for stakeholders who aren't looking at the data every day.",
    experience: [{
      role: "BI Analyst",
      org: "SessionHub Softswitch Limited",
      meta: "Lagos, Nigeria · Mar 2023 – Present",
      bullets: ["Built the company's invoice and financial reporting web dashboard and database from scratch, consolidating scattered, untracked records into one structured, queryable system.", "Use AI tools daily to accelerate analysis, debug code, and automate recurring reporting work — an everyday part of how I work, not an occasional experiment.", "Maintain the dashboard day to day, validating data accuracy and cross-checking figures before they reach a stakeholder or client."]
    }, {
      role: "Data Analyst",
      org: "Demsco Travels & Tours",
      meta: "Lagos, Nigeria · Mar 2022 – Feb 2023",
      bullets: ["Analyzed customer behaviour patterns to identify churn and retention signals, translating findings into Power BI dashboards used by non-technical stakeholders.", "Migrated paper-based records into structured, query-ready datasets, improving data accuracy and cutting reporting time by 40%."]
    }],
    projects: [{
      name: "TrackPerform",
      tag: "Multi-Source Analytics Platform",
      year: "2025",
      bullets: ["Built a full-stack platform (React, Python/Flask, Supabase/PostgreSQL) that consolidates inconsistent multi-source data into one reporting layer, using AI tools throughout the build to move faster through development and debugging.", "Defined a KPI framework from scratch (engagement and load-risk metrics, rolling trend tracking) and built the validation checks that catch data quality issues before they reach a dashboard."]
    }, {
      name: "DrillCal",
      tag: "Data Integrity & Audit Logging",
      year: "2025",
      bullets: ["Diagnosed a data integrity bug, then built pre-deletion snapshot logging and an append-only audit trail (Postgres row-level security) so records can't be silently altered."]
    }],
    skillsTech: ["SQL (SQL Server, PostgreSQL, BigQuery)", "Azure Data Factory & ADLS Gen2", "Databricks & Spark Pipelines", "dbt", "Tableau & Power BI", "AI-Assisted Analytics (Claude, ChatGPT)", "Python (Pandas, NumPy, Flask)", "Data Modeling & ETL"],
    skillsSoft: ["Product Metrics (Activation, Retention, Churn)", "Structured Problem-Solving", "Stakeholder Communication", "Data Quality & Validation"]
  },
  bi: {
    label: "BI Developer",
    title: "Business Intelligence Developer",
    overview: "BI Developer with 3+ years designing dashboards, data models, and reporting pipelines that hold up under scrutiny. Strong SQL and Power BI experience, hands-on with Azure-based data platforms (Data Factory, Databricks), and a daily habit of using AI tools to move faster through analysis and automation. Comfortable owning a data problem end-to-end, from raw ingestion to a dashboard a non-technical stakeholder trusts, while working independently in a remote environment.",
    experience: [{
      role: "BI Analyst",
      org: "SessionHub Softswitch Limited",
      meta: "Lagos, Nigeria · Mar 2023 – Present",
      bullets: ["Designed and built the company's invoice and financial reporting data model and dashboard from scratch, consolidating scattered, untracked records into one governed, queryable system.", "Own data accuracy and quality end-to-end: validate figures, document the underlying process, and cross-check before anything reaches a stakeholder or client.", "Use AI tools daily to accelerate analysis, debug pipeline issues, and automate recurring reporting work."]
    }, {
      role: "Data Analyst",
      org: "Demsco Travels & Tours",
      meta: "Lagos, Nigeria · Mar 2022 – Feb 2023",
      bullets: ["Built Power BI dashboards and data models tracking customer churn and retention, gathering requirements directly from non-technical stakeholders.", "Migrated paper-based records into structured, query-ready datasets, improving data accuracy and cutting reporting time by 40%."]
    }],
    projects: [{
      name: "TrackPerform",
      tag: "Data Pipeline & Modeling",
      year: "2025",
      bullets: ["Built the ETL layer for a full-stack analytics platform (Python/Flask, Supabase/PostgreSQL), ingesting inconsistent multi-source data and standardizing it into a consistent semantic layer before it reaches a dashboard.", "Defined a KPI framework from scratch and built automated data quality checks to catch schema drift and inconsistencies as new sources were added, using AI tools throughout the build."]
    }, {
      name: "DrillCal",
      tag: "Data Integrity & Audit Logging",
      year: "2025",
      bullets: ["Diagnosed a data integrity bug, then built pre-deletion snapshot logging and an append-only audit trail (Postgres row-level security) as a data governance safeguard."]
    }],
    skillsTech: ["Power BI & DAX", "SQL (SQL Server, PostgreSQL, BigQuery)", "Data Modeling (Dimensional, Semantic Layers)", "Azure Data Factory & Databricks", "dbt & Spark Pipelines", "ETL / ELT Pipeline Development", "AI-Assisted Analytics (Claude, ChatGPT)", "Python (Pandas, Flask)"],
    skillsSoft: ["Data Governance & Quality", "Requirements Gathering", "Technical Documentation", "Remote Self-Direction"]
  }
};
function CVSheet({
  v
}) {
  return React.createElement("div", {
    className: "cv-sheet",
    "aria-hidden": "true"
  }, React.createElement("div", {
    className: "cv-head"
  }, React.createElement("div", {
    className: "cv-name"
  }, CV_SHARED.name), React.createElement("div", {
    className: "cv-title"
  }, v.title)), React.createElement("div", {
    className: "cv-body"
  }, React.createElement("div", {
    className: "cv-main"
  }, React.createElement("div", {
    className: "cv-sec"
  }, "Professional Overview"), React.createElement("p", {
    className: "cv-overview"
  }, v.overview), React.createElement("div", {
    className: "cv-sec"
  }, "Work Experience"), v.experience.map(e => React.createElement("div", {
    key: e.org
  }, React.createElement("div", {
    className: "cv-role"
  }, e.role), React.createElement("div", {
    className: "cv-org"
  }, e.org), React.createElement("div", {
    className: "cv-meta"
  }, e.meta), React.createElement("ul", {
    className: "cv-list"
  }, e.bullets.map((b, i) => React.createElement("li", {
    key: i
  }, b))))), React.createElement("div", {
    className: "cv-sec"
  }, "Projects"), v.projects.map(p => React.createElement("div", {
    key: p.name
  }, React.createElement("div", {
    className: "cv-proj"
  }, React.createElement("b", null, p.name), " ", React.createElement("i", null, "\u2014 ", p.tag), React.createElement("span", null, p.year)), React.createElement("ul", {
    className: "cv-list"
  }, p.bullets.map((b, i) => React.createElement("li", {
    key: i
  }, b)))))), React.createElement("div", {
    className: "cv-side"
  }, React.createElement("div", {
    className: "cv-sec"
  }, "Contact"), CV_SHARED.contact.map(([k, val]) => React.createElement("div", {
    key: k,
    className: "cv-kv"
  }, React.createElement("b", null, k), React.createElement("span", null, val))), React.createElement("div", {
    className: "cv-sec"
  }, "Technical Skills"), v.skillsTech.map(s => React.createElement("div", {
    key: s,
    className: "cv-skill"
  }, s)), React.createElement("div", {
    className: "cv-sec"
  }, "Soft Skills"), v.skillsSoft.map(s => React.createElement("div", {
    key: s,
    className: "cv-skill"
  }, s)), React.createElement("div", {
    className: "cv-sec"
  }, "Education"), React.createElement("div", {
    className: "cv-org",
    style: {
      fontSize: "11.5px"
    }
  }, CV_SHARED.education.deg), React.createElement("div", {
    className: "cv-meta"
  }, CV_SHARED.education.where), React.createElement("div", {
    className: "cv-sec"
  }, "Achievements"), CV_SHARED.achievements.map(([t, d]) => React.createElement("div", {
    key: t,
    className: "cv-ach"
  }, React.createElement("b", null, t), React.createElement("p", null, d))), React.createElement("div", {
    className: "cv-sec"
  }, "Links"), CV_SHARED.links.map(([k, val]) => React.createElement("div", {
    key: k,
    className: "cv-link"
  }, React.createElement("b", null, k), React.createElement("span", null, val))))));
}
function downloadCV(label) {
  const run = () => {
    const el = document.querySelector(".cv-sheet");
    if (!el || !window.html2pdf) return;
    const prevLeft = el.style.left;
    el.style.left = "0px";
    const w = el.offsetWidth || 820;
    const h = Math.ceil(el.scrollHeight || el.offsetHeight);
    const restore = () => {
      el.style.left = prevLeft || "-10000px";
    };
    window.html2pdf().set({
      margin: 0,
      filename: "Uduak Afang - " + label + ".pdf",
      image: {
        type: "jpeg",
        quality: 0.98
      },
      html2canvas: {
        scale: 2,
        backgroundColor: "#ffffff",
        useCORS: true,
        windowWidth: w,
        scrollX: 0,
        scrollY: 0
      },
      jsPDF: {
        unit: "px",
        format: [w, h],
        orientation: h >= w ? "portrait" : "landscape"
      }
    }).from(el).save().then(restore, restore);
  };
  if (window.html2pdf) return run();
  const s = document.createElement("script");
  s.src = "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.3/html2pdf.bundle.min.js";
  s.onload = run;
  document.head.appendChild(s);
}
function ResumePage4({
  go,
  pal
}) {
  const [role, setRole] = useStateP4("ae");
  useReveal4("resume");
  return React.createElement("main", {
    className: "grain resume-doc"
  }, React.createElement("section", {
    className: "pt-32 md:pt-40 pb-12 text-center px-6"
  }, React.createElement("div", {
    className: "mono text-[10px] tracking-[.16em] uppercase max-w-[560px] mx-auto",
    style: {
      opacity: .55
    }
  }, COPY4.role), React.createElement("h1", {
    className: "claim text-[12vw] md:text-[64px] mt-6"
  }, "R\xE9sum\xE9"), React.createElement("p", {
    className: "text-[16.5px] leading-[1.65] max-w-[560px] mx-auto mt-6",
    style: {
      opacity: .85
    }
  }, PROFILE.blurb), React.createElement("div", {
    className: "mono text-[10.5px] tracking-[.14em] uppercase mt-7",
    style: {
      opacity: .55
    }
  }, PROFILE.location, " \xB7 ", PROFILE.tz, " \xB7 ", PROFILE.mode), React.createElement("div", {
    className: "resume-dl mt-9 flex flex-col items-center gap-3.5"
  }, React.createElement("div", {
    className: "mono text-[9px] tracking-[.2em] uppercase",
    style: {
      opacity: .45
    }
  }, "Download r\xE9sum\xE9 for"), React.createElement("div", {
    className: "flex flex-wrap justify-center gap-2"
  }, Object.keys(CV_VARIANTS).map(k => React.createElement("button", {
    key: k,
    onClick: () => setRole(k),
    className: "px-4 py-2 rounded-full mono text-[9.5px] tracking-[.14em] uppercase transition-colors " + (role === k ? "bg-ink text-paper" : "border border-ink/20 hover:border-ink/45")
  }, CV_VARIANTS[k].label))), React.createElement("button", {
    onClick: () => downloadCV(CV_VARIANTS[role].label),
    className: "mt-1 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-white text-[13.5px] font-medium hover:opacity-88 transition-opacity"
  }, "Download PDF ", React.createElement("span", {
    className: "text-[12px]"
  }, "\u2193")))), React.createElement("section", {
    className: "max-w-[820px] mx-auto px-6 md:px-10 pb-20"
  }, React.createElement("div", {
    className: "eyebrow opacity-45 mb-8"
  }, "Experience"), EXPERIENCE.map(e => React.createElement("div", {
    key: e.company,
    className: "reveal py-9 border-t border-ink/12"
  }, React.createElement("div", {
    className: "mono text-[10px] tracking-[.16em] uppercase",
    style: {
      opacity: .5
    }
  }, e.period), React.createElement("h3", {
    className: "text-[26px] md:text-[32px] font-black tracking-[-.04em] leading-tight mt-2"
  }, e.role), React.createElement("div", {
    className: "mono text-[10px] tracking-[.16em] uppercase mt-2",
    style: {
      opacity: .5
    }
  }, e.company, " \xB7 ", e.location), React.createElement("ul", {
    className: "mt-6 space-y-3"
  }, e.bullets.map((b, i) => React.createElement("li", {
    key: i,
    className: "flex gap-3 text-[15.5px] leading-[1.65]",
    style: {
      opacity: .82
    }
  }, React.createElement("span", {
    className: "text-accent mono text-[10px] pt-1.5"
  }, "0", i + 1), React.createElement("span", null, b)))))), React.createElement("div", {
    className: "grid md:grid-cols-2 gap-6 mt-12"
  }, React.createElement("div", {
    className: "rounded-[22px] p-7",
    style: {
      background: pal.soft[0]
    }
  }, React.createElement("div", {
    className: "eyebrow opacity-45 mb-4"
  }, "Education"), React.createElement("div", {
    className: "text-[21px] font-black tracking-[-.035em]"
  }, EDUCATION.degree, " \xB7 ", EDUCATION.school), React.createElement("div", {
    className: "mono text-[10px] tracking-[.16em] uppercase mt-2",
    style: {
      opacity: .5
    }
  }, EDUCATION.where, " \xB7 ", EDUCATION.year)), React.createElement("div", {
    className: "rounded-[22px] p-7",
    style: {
      background: pal.soft[1]
    }
  }, React.createElement("div", {
    className: "eyebrow opacity-45 mb-4"
  }, "Recognition"), React.createElement("div", {
    className: "space-y-2"
  }, AWARDS.map(a => React.createElement("div", {
    key: a.id,
    className: "flex gap-3 text-[14.5px]",
    style: {
      opacity: .82
    }
  }, React.createElement("span", {
    className: "mono text-[10px] pt-1",
    style: {
      opacity: .5
    }
  }, a.year), React.createElement("span", null, a.title)))))), React.createElement("div", {
    className: "mt-14"
  }, React.createElement("div", {
    className: "flex flex-wrap items-baseline justify-between gap-4 mb-6"
  }, React.createElement("div", {
    className: "eyebrow opacity-45"
  }, "Coverage"), React.createElement("div", {
    className: "mono text-[9px] tracking-[.16em] uppercase",
    style: {
      opacity: .35
    }
  }, "depth, not certificates")), React.createElement(SkillBars, {
    items: SKILLS
  }))), React.createElement("div", {
    className: "print:hidden"
  }, React.createElement(Contact4, null)), React.createElement(CVSheet, {
    v: CV_VARIANTS[role]
  }));
}
Object.assign(window, {
  StackPage4,
  WorksPage4,
  ResumePage4,
  STAGES4
});

/* ===== app ===== */
const {
  useState: useStateA4,
  useEffect: useEffectA4,
  useRef: useRefA4
} = React;
const TWEAKS4 = {
  "palette": ["#fcfcfc", "#1e3a31", "#d34530"],
  "typeface": "Geometric",
  "accent": "#2a2ae0",
  "accentOverride": false,
  "nameStyle": "Signature",
  "cards": "Tinted",
  "heroPanel": "Bare",
  "dark": false,
  "curtain": true,
  "band": true,
  "grain": true
};
const PKEYS4 = ["studiosnow"];
const CURTAIN_LABEL = {
  home: "Uduak Afang",
  work: "Selected works",
  stack: "The workflow",
  resume: "Résumé"
};
const CURTAIN_SUB = {
  home: "Data models, dashboards and the products around them",
  work: "Three builds in full, plus the archive",
  stack: "How a question becomes a dashboard",
  resume: "Three years of modelling, shipping and support"
};
function curtainSub(p) {
  const [kind] = String(p).split(":");
  return kind === "case" ? "The build, start to finish" : CURTAIN_SUB[kind] || CURTAIN_SUB.home;
}
const FOOT_NAV4 = [{
  id: "home",
  label: "Home"
}, {
  id: "work",
  label: "Works"
}, {
  id: "resume",
  label: "Résumé"
}];
function curtainLabel(p) {
  const [kind, arg] = String(p).split(":");
  if (kind === "case") {
    const w = typeof ALL_WORKS !== "undefined" && ALL_WORKS.find(x => x.id === arg) || null;
    return w ? w.title : "Case study";
  }
  return CURTAIN_LABEL[kind] || "Uduak Afang";
}
function hexToRgb4(hex, lift) {
  const v = hex.replace("#", "");
  const n = parseInt(v.length === 3 ? v.split("").map(c => c + c).join("") : v, 16);
  let [r, g, b] = [n >> 16 & 255, n >> 8 & 255, n & 255];
  if (lift) {
    r = Math.round(r + (255 - r) * lift);
    g = Math.round(g + (255 - g) * lift);
    b = Math.round(b + (255 - b) * lift);
  }
  return `${r} ${g} ${b}`;
}
const NAV4 = [{
  id: "home",
  label: "Home"
}, {
  id: "work",
  label: "Works"
}, {
  id: "resume",
  label: "Résumé"
}];
function CurtainTitle({
  text
}) {
  const typed = useTyped(text, true, 46);
  return React.createElement("span", {
    className: "curtain-type"
  }, typed);
}
function Nav4({
  page,
  go,
  dark,
  setDark
}) {
  const [stuck, setStuck] = useStateA4(false);
  const [open, setOpen] = useStateA4(false);
  useEffectA4(() => {
    const onScroll = () => setStuck(window.scrollY > 14);
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const base = page.split(":")[0];
  return React.createElement("header", {
    className: "fixed top-3 md:top-6 left-0 right-0 z-[100] flex flex-col items-center shell-pad"
  }, React.createElement("nav", {
    className: "relative w-full max-w-[var(--shell-max)] rounded-full flex items-center justify-between pl-2 pr-1.5 md:pl-3 md:pr-2 py-1.5 border transition-all duration-300 " + (stuck ? "bg-paper border-ink/14 shadow-[0_10px_30px_-20px_rgba(0,0,0,.28)]" : "bg-paper border-ink/12")
  }, React.createElement("button", {
    onClick: () => go("home"),
    className: "flex items-center h-9 pl-1.5 pr-2 md:pl-2 md:pr-3 leading-none shrink-0"
  }, React.createElement(Mark, {
    size: 15,
    className: "sig-nav"
  })), React.createElement("div", {
    className: "hidden md:flex items-center gap-0.5"
  }, NAV4.map(it => React.createElement("button", {
    key: it.id,
    onClick: () => go(it.id),
    className: "px-3.5 py-2 mono text-[10px] uppercase tracking-[.18em] rounded-full transition-colors " + (base === it.id || it.id === "work" && base === "case" ? "bg-ink text-paper" : "opacity-60 hover:opacity-100")
  }, it.label))), React.createElement("div", {
    className: "flex items-center gap-1 md:gap-1.5 shrink-0"
  }, React.createElement("button", {
    onClick: () => setDark(!dark),
    "aria-label": "Toggle dark mode",
    className: "w-8 h-8 rounded-full border border-ink/15 flex items-center justify-center hover:bg-ink hover:text-paper transition-colors shrink-0"
  }, React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 16 16",
    fill: "none"
  }, React.createElement("circle", {
    cx: "8",
    cy: "8",
    r: "6.2",
    stroke: "currentColor",
    strokeWidth: "1.3"
  }), React.createElement("path", {
    d: "M8 1.8a6.2 6.2 0 000 12.4z",
    fill: "currentColor"
  }))), React.createElement("a", {
    href: `mailto:${PROFILE.email}`,
    className: "hidden md:inline-block px-4 py-2 rounded-full bg-accent text-white mono text-[10px] uppercase tracking-[.18em] hover:opacity-85 transition-opacity"
  }, "Email"), React.createElement("button", {
    onClick: () => setOpen(!open),
    "aria-label": "Menu",
    "aria-expanded": open,
    className: "md:hidden w-9 h-8 rounded-full bg-accent text-white flex items-center justify-center"
  }, React.createElement("span", {
    className: "relative block w-[14px] h-[10px]"
  }, React.createElement("span", {
    className: "absolute left-0 w-full h-[1.5px] bg-white",
    style: {
      top: 1,
      transform: open ? "translateY(4px) rotate(45deg)" : "none",
      transition: "transform .25s"
    }
  }), React.createElement("span", {
    className: "absolute left-0 w-full h-[1.5px] bg-white",
    style: {
      top: 9,
      transform: open ? "translateY(-4px) rotate(-45deg)" : "none",
      transition: "transform .25s"
    }
  })))), open && React.createElement("div", {
    className: "md:hidden absolute top-[calc(100%+8px)] left-0 right-0 rounded-[22px] border border-ink/12 bg-paper shadow-[0_20px_50px_-24px_rgba(0,0,0,.35)] p-2"
  }, NAV4.map(it => React.createElement("button", {
    key: it.id,
    onClick: () => {
      setOpen(false);
      go(it.id);
    },
    className: "w-full text-left px-4 py-3 rounded-[15px] mono text-[10.5px] uppercase tracking-[.18em] transition-colors " + (base === it.id || it.id === "work" && base === "case" ? "bg-ink text-paper" : "hover:bg-ink/5")
  }, it.label)), React.createElement("a", {
    href: `mailto:${PROFILE.email}`,
    onClick: () => setOpen(false),
    className: "block mt-1 px-4 py-3 rounded-[15px] bg-accent text-white mono text-[10.5px] uppercase tracking-[.18em] text-center"
  }, "Email me"))));
}
function Footer4({
  go
}) {
  const work = [{
    id: "work",
    label: "Selected works"
  }, {
    id: "stack",
    label: "The workflow"
  }, {
    id: "resume",
    label: "Résumé"
  }];
  const connect = [["Email", "mailto:" + PROFILE.email], ["LinkedIn", PROFILE.linkedin], ["GitHub", PROFILE.github], ["Tableau Public", PROFILE.tableau]];
  return React.createElement("footer", {
    className: "shell-pad pb-4 md:pb-6"
  }, React.createElement("div", {
    className: "shellbox rounded-[32px] px-7 md:px-12 py-10 md:py-12",
    style: {
      background: "#151412",
      color: "#efece4"
    }
  }, React.createElement("div", {
    className: "grid grid-cols-12 gap-y-9 gap-x-8"
  }, React.createElement("div", {
    className: "col-span-12 md:col-span-6"
  }, React.createElement("h2", {
    "data-fill": true,
    className: "claim text-[8vw] md:text-[36px] leading-[1.05]"
  }, "Want to ", React.createElement("span", {
    className: "serif-it"
  }, "work together?")), React.createElement("a", {
    href: `mailto:${PROFILE.email}`,
    className: "mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-full text-[13.5px] font-medium",
    style: {
      background: "#efece4",
      color: "#151412"
    }
  }, "Book a call ", React.createElement("span", {
    className: "text-[11px]"
  }, "\u2197"))), React.createElement("div", {
    className: "col-span-6 md:col-span-3 md:col-start-8"
  }, React.createElement("div", {
    className: "text-[19px] font-semibold tracking-[-.02em]"
  }, "Work"), React.createElement("div", {
    className: "flex flex-col items-start gap-3 mt-5"
  }, work.map(n => React.createElement("button", {
    key: n.id,
    onClick: () => go(n.id),
    className: "text-[14.5px] text-left hover:opacity-100 transition-opacity",
    style: {
      opacity: .62,
      color: "inherit"
    }
  }, n.label)))), React.createElement("div", {
    className: "col-span-6 md:col-span-3"
  }, React.createElement("div", {
    className: "text-[19px] font-semibold tracking-[-.02em]"
  }, "Connect"), React.createElement("div", {
    className: "flex flex-col items-start gap-3 mt-5"
  }, connect.map(([l, href]) => React.createElement("a", {
    key: l,
    href: href,
    target: "_blank",
    rel: "noopener noreferrer",
    className: "text-[14.5px] hover:opacity-100 transition-opacity",
    style: {
      opacity: .62,
      color: "inherit"
    }
  }, l))))), React.createElement("div", {
    className: "flex flex-wrap items-center justify-between gap-4 mt-10 pt-5",
    style: {
      borderTop: "1px solid rgba(239,236,228,.14)"
    }
  }, React.createElement("span", {
    className: "mono text-[9px] tracking-[.18em] uppercase",
    style: {
      opacity: .45
    }
  }, "Uduak Afang \xB7 ", PROFILE.location, " \xB7 ", PROFILE.mode), React.createElement("span", {
    className: "mono text-[9px] tracking-[.18em] uppercase",
    style: {
      opacity: .3
    }
  }, "For the love of clean data \xB7 2022 \u2014 now"))));
}
function Loader4() {
  const [gone, setGone] = useStateA4(() => sessionStorage.getItem("ua-seen") === "1");
  const [out, setOut] = useStateA4(false);
  useEffectA4(() => {
    if (gone) return;
    document.body.style.overflow = "hidden";
    const a = setTimeout(() => setOut(true), 1500);
    const b = setTimeout(() => {
      setGone(true);
      sessionStorage.setItem("ua-seen", "1");
      document.body.style.overflow = "";
    }, 2350);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
      document.body.style.overflow = "";
    };
  }, [gone]);
  if (gone) return null;
  return React.createElement("div", {
    className: "loader4 " + (out ? "is-out" : "")
  }, React.createElement("div", {
    className: "text-center px-6"
  }, React.createElement("div", {
    className: "loader4-name"
  }, "Uduak Afang"), React.createElement("div", {
    className: "flex flex-wrap items-center justify-center gap-x-7 gap-y-2 mt-5"
  }, ["Analytics Engineer", "Data Analyst", "BI Analyst"].map((d, i) => React.createElement("span", {
    key: d,
    className: "loader4-tag",
    style: {
      animationDelay: 260 + i * 150 + "ms"
    }
  }, d)))));
}
function App4() {
  const [t, setTweak] = useTweaks(TWEAKS4);
  const [page, setPage] = useStateA4(() => decodeURIComponent(location.hash.replace("#", "")) || "home");
  const [curtain, setCurtain] = useStateA4("hold");
  const [intro, setIntro] = useStateA4(true);
  const [dest, setDest] = useStateA4("home");
  const busy = useRefA4(false);
  const sig = a => (Array.isArray(a) ? a : []).join("|").toLowerCase();
  const palKey = PKEYS4.find(k => sig(PAL4[k].swatch) === sig(t.palette)) || "studiosnow";
  const pal = resolvePal(palKey, t.dark);
  useEffectA4(() => {
    applyPal4(palKey, t.dark);
  }, [palKey, t.dark]);
  useEffectA4(() => {
    if (!t.curtain) {
      setCurtain(null);
      setIntro(false);
      return;
    }
    const a1 = setTimeout(() => setCurtain("up"), 1700);
    const a2 = setTimeout(() => {
      setCurtain(null);
      setIntro(false);
    }, 2400);
    return () => {
      clearTimeout(a1);
      clearTimeout(a2);
    };
  }, []);
  useEffectA4(() => {
    document.documentElement.dataset.type = "geometric";
  }, []);
  useEffectA4(() => {
    const r = document.documentElement.style;
    if (t.accentOverride && t.accent) r.setProperty("--c-accent", hexToRgb4(t.accent, t.dark ? 0.42 : 0));else r.setProperty("--c-accent", resolvePal(palKey, t.dark).accent);
  }, [t.accent, t.accentOverride, palKey, t.dark]);
  useEffectA4(() => {
    document.querySelectorAll(".sig").forEach(el => {
      el.classList.toggle("sig-off", t.nameStyle !== "Signature");
    });
  }, [t.nameStyle, page]);
  useEffectA4(() => {
    document.querySelectorAll(".grain").forEach(el => {
      el.style.backgroundImage = t.grain ? "" : "none";
    });
  }, [t.grain, page]);
  const go = p => {
    if (busy.current || p === page) return;
    const swap = () => {
      setPage(p);
      history.replaceState({}, "", "#" + p);
      window.scrollTo({
        top: 0,
        behavior: "auto"
      });
    };
    if (!t.curtain) {
      swap();
      return;
    }
    busy.current = true;
    setDest(p);
    setCurtain("down");
    setTimeout(() => {
      swap();
      setCurtain("up");
      setTimeout(() => {
        setCurtain(null);
        busy.current = false;
      }, 700);
    }, 700);
  };
  useEffectA4(() => {
    const onHash = () => {
      const h = decodeURIComponent(location.hash.replace("#", ""));
      if (h && h !== page) setPage(h);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, [page]);
  const [kind, arg] = page.split(":");
  return React.createElement("div", null, React.createElement(Loader4, null), React.createElement(Nav4, {
    page: page,
    go: go,
    dark: t.dark,
    setDark: v => setTweak("dark", v)
  }), kind === "home" && React.createElement(HomePage4, {
    go: go,
    pal: pal,
    band: t.band,
    cards: t.cards,
    heroPanel: t.heroPanel
  }), kind === "work" && React.createElement(WorksPage4, {
    go: go,
    pal: pal,
    cards: t.cards
  }), kind === "stack" && React.createElement(StackPage4, {
    go: go,
    pal: pal
  }), kind === "resume" && React.createElement(ResumePage4, {
    go: go,
    pal: pal
  }), kind === "case" && (window.VIZ_CASES || []).includes(arg) ? kind === "case" && React.createElement(CaseViz5, {
    id: arg,
    go: go,
    pal: pal
  }) : kind === "case" && React.createElement(CaseStudy4, {
    id: arg,
    go: go,
    pal: pal
  }), React.createElement(Footer4, {
    go: go
  }), curtain && React.createElement("div", {
    className: "curtain " + curtain
  }, React.createElement("div", {
    className: "px-8 text-center"
  }, React.createElement("div", {
    className: "eyebrow",
    style: {
      opacity: .55
    }
  }, String(dest).startsWith("case:") ? "Case study" : "Now loading"), React.createElement("div", {
    className: "claim text-[13vw] md:text-[76px] mt-4"
  }, React.createElement(CurtainTitle, {
    text: curtainLabel(dest)
  })), React.createElement("div", {
    className: "curtain-sub"
  }, intro ? "Data Analyst · Business Intelligence Analyst · Analytics Engineer" : curtainSub(dest)))));
}
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App4, null));
