const PROFILE = {
  name: "Uduak Afang",
  role: "Business Intelligence Analyst",
  location: "Lagos, Nigeria",
  tz: "UTC+1",
  mode: "Fully Remote",
  email: "uduakafang@gmail.com",
  linkedin: "https://linkedin.com/in/uduakafang",
  github:   "https://github.com/UduakAfang",
  tableau:  "https://public.tableau.com",
  blurb:
    "BI Analyst with 3+ years building dashboards and pipelines that finance, operations and commercial teams actually trust. I own the work end-to-end — from the raw SQL pull to the design of the screen a stakeholder opens on a Monday morning.",
};

// Selected works — the home page only shows these, grouped by category
const SELECTED_WORKS = [
  {
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
    blurb:
      "Every African country's first head of state after independence and the one in office today, on one map. Each ring is five years in power; the stem tells you whether power changed hands by election or by force.",
    metric: { value: "108", label: "Heads of state" },
    image: "images/leaders.png",
    process: [
      { n: "01", t: "The question", d: "Did the systems of government African countries carried out of independence survive, and who is still standing in them?" },
      { n: "02", t: "The data", d: "A dataset I compiled myself — 54 countries, 108 slots, 106 distinct people — with administration type, mode of entry, exit type and dates sworn in and out." },
      { n: "03", t: "The build", d: "Not a real map: a fitted Africa outline, one hand-placed coordinate per country, and every mark drawn with MAKEPOINT and MAKELINE off calculated coordinates." },
      { n: "04", t: "The result", d: "The coup belt reads as a block, and one ring count runs longer than every other on the continent." },
    ],
    stack: ["Tableau", "MAKEPOINT / MAKELINE", "LOD calcs", "Parameters", "Figma"],
  },
  {
    id: "01",
    no: "03 / 04",
    year: "2025–26",
    tag: "React · TypeScript · Supabase · Python",
    title: "TrackPerform",
    category: "AI-Built Product · Web App",
    skills: "AI-assisted data extraction · Data modelling · Product design · Full-stack build",
    client: "Client project · subscription product",
    blurb:
      "A subscription product for coaches and sports scientists: upload a GPS export from any vendor, in almost any shape, and get a per-athlete readiness read in seconds. AI reads the file's structure, maps the columns and a Python service returns the load ratio.",
    metric: { value: "40+", label: "Metrics auto-mapped" },
    image: "images/trackperform/daily-metrics-dark.png",
    url: "trackperform.com",
    process: [
      {
        n: "01",
        t: "It began as a competition entry",
        d: "TrackPerform didn't start as a company. It started as a competition. Chelsea FC released a set of GPS tracking data and asked people to analyse it in whatever BI tool they liked. I built the dashboard in Tableau — player load, an acute-versus-chronic view of training demand, a match-day calendar, a full player profile. It got shortlisted. It didn't win, but building it taught me exactly what a load dashboard has to say, and to whom. That mattered more than the result.",
      },
      {
        n: "02",
        t: "The message that made it a product",
        d: "A physical trainer at a top-flight European club reached out. He'd seen the competition work and wanted the same thing built around his own squad's data, so I built it again with his real numbers. When it was done he asked the question that became the company: could this build itself? Instead of him sending a spreadsheet and waiting for me to hand-assemble a dashboard, could a coach upload their GPS export — in whatever shape it arrived — and get the analysis back automatically? My first instinct was that it wasn't possible. But I'd built the thing twice by hand, so I knew exactly what had to happen between a raw export and a finished read. The question was whether AI could handle the messy middle: reading a file it had never seen and working out what every column meant. It could.",
      },
      {
        n: "03",
        t: "The data we actually had",
        d: "We launched to an encouraging start — the design landed and around forty coaches and sport scientists signed up. Then the files arrived and the real problem showed its face: everyone's spreadsheet was different. The club I'd built for used one tidy, standard export. Nobody else did. Some packed a whole week into a single sheet split into little stacked tables — instant rejection. Others uploaded one session with no dates at all, because to them the date was obvious. Two things were quietly killing it: uploads bounced on formats I hadn't anticipated, and even when they worked the analysis took two to three minutes to appear. People uploaded once, watched a spinner, and left.",
      },
      {
        n: "04",
        t: "Fixing the two things that lost people",
        d: "I rebuilt the intake around one assumption: no two files agree. AI now reads the raw export and works out its structure on its own — where the data starts, which column is the date, whether the sheet is one day or a whole season broken into blocks. If it's a single day with no date it stops and asks instead of guessing. If a date is ambiguous it resolves the US-versus-European format instead of silently picking wrong. Column mapping went from a wall to a handful of confirmations. Then I killed the wait: instead of computing a whole season before showing anything, the dashboard returns your first seven days in a couple of seconds and streams the rest in behind you.",
      },
    ],
    stack: ["React", "TypeScript", "Vite", "Supabase", "Python / Flask", "pandas", "numpy", "shadcn/ui"],
  },
  {
    id: "02",
    no: "04 / 04",
    year: "2026",
    tag: "React · Supabase",
    title: "DrillCal",
    category: "AI-Built Product · Web App",
    skills: "Load forecasting · Calendar UX · Data modelling · Product design",
    client: "Client project · launched",
    blurb:
      "A coaching journal for planning the week: drill library, day-and-period calendar, tactical board and attendance — built so the playbook belongs to the coach, not the club. Launched 1 August 2026.",
    metric: { value: "30+", label: "Signups since launch" },
    image: "images/drillcal/daily-planner.png",
    url: "drillcal.com",
    process: [
      {
        n: "01",
        t: "It began in conversations with coaches",
        d: "The idea came from a coach — someone who works with players every day and knew the problem from the inside — and it came out of talking to more of them. Their work was scattered across hard drives, folders in Google Drive, WhatsApp threads, and files saved straight to a laptop with no backup anywhere. Nobody had one place to plan a day, let alone a season. I was brought in to build it.",
      },
      {
        n: "02",
        t: "The thing coaches kept saying",
        d: "The loss was the sharper pain. Videos of sessions often belong to the club — fine while you are there, gone the day you leave. Drills, plans, notes go the same way, or disappear with a laptop. So one rule was settled before anything was designed: the library belongs to the coach's account, not to a team. Change club, create a new team, import the drills you built at the last one, carry on. Ten years and five teams later it is all still there — what you ran on a given day, and who turned up for it.",
      },
      {
        n: "03",
        t: "The issues",
        d: "The calendar broke in the exact way that matters. Drag a session to a different part of the day and its duration disappeared — a four-hour block landing in the morning slot came back with no start or end time at all and stretched across the full six hours. Underneath it were two more assumptions: an all-day item could not be dragged into a time, and a period could hold only one session, so a training day with two sessions in it simply could not be planned.",
      },
      {
        n: "04",
        t: "The fixes",
        d: "The root cause was that the calendar treated a slot as the truth and the times as decoration. Inverting that fixed all three at once: duration travels with the session, a period holds as many sessions as the day has, and an all-day item can be dropped into a time like anything else. Everything above it — the library, the tactical board, attendance — sits on Postgres row-level security, so a shared team never means a shared library.",
      },
    ],
    stack: ["React", "Supabase", "Python", "Claude"],
  },
  {
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
    blurb:
      "A civic dashboard analysing 108k+ citizen service requests across 17 departments and 44 zip codes. Selected for Tableau Viz of the Day.",
    metric: { value: "108k+", label: "Requests analysed" },
    image: "images/nyc.png",
    process: [
      {
        n: "01",
        t: "The question",
        d: "Where in the city does the 311 system fail — by neighbourhood, by category, by priority — and how long do residents wait?",
      },
      {
        n: "02",
        t: "The data",
        d: "NYC Open Data 311 export: 108k+ rows over 12 months, 17 departments, 44 zip codes. Cleaned in SQL, joined with NYC neighborhood polygons.",
      },
      {
        n: "03",
        t: "The build",
        d: "Tableau + Mapbox. Priority colour scheme (Standard / Hazardous / Emergency). Overdue vs Open status. Bubble overlay for request density.",
      },
      {
        n: "04",
        t: "The result",
        d: "Selected as Tableau Viz of the Day. Used by community groups in conversations with city ops.",
      },
    ],
    stack: ["Tableau", "Figma"],
  },
];

// Full archive shown on /works
const ALL_WORKS = [
  ...SELECTED_WORKS,
  {
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
    blurb:
      "A single dashboard for podcast creators that consolidates Spotify, Apple, YouTube and Amazon Music — tracking new subscribers, listens, unique listeners and engagement per episode.",
    metric: { value: "4", label: "Platforms unified" },
    image: "images/podcast.png",
  },
  {
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
    blurb:
      "A two-tab sports-science dashboard combining player biography with six physical KPIs — ACWR, total distance, HSR, sprint distance — so coaching staff can read readiness without switching tools.",
    metric: { value: "6", label: "KPIs tracked" },
    image: "images/player.png",
  },
];

// Skills + tools (kept close to existing site, simplified)
const SKILLS = [
  { name: "Tableau",             pct: 96, note: "LOD · calc fields · actions" },
  { name: "SQL",                 pct: 94, note: "BigQuery · SQL Server · Postgres" },
  { name: "Prompt Engineering",  pct: 90, note: "LLM tooling · structured prompts" },
  { name: "Python",              pct: 88, note: "Pandas · NumPy · Flask" },
  { name: "ELT / dbt",           pct: 85, note: "Data modelling · staging models · tests · Jinja" },
  { name: "Power BI",            pct: 80, note: "DAX · Power Query" },
  { name: "PySpark",             pct: 74, note: "Databricks notebooks · Azure Data Factory" },
];

const TOOLS = [
  "Tableau","SQL","BigQuery","Python","PostgreSQL",
  "Power BI","dbt","Azure Data Factory","Git","Figma","Supabase","Excel"
];

const EXPERIENCE = [
  {
    period: "Mar 2023 — Present",
    role: "Business Intelligence Analyst",
    company: "SessionHub Softswitch Limited",
    location: "Lagos, Nigeria",
    bullets: [
      "Built Tableau dashboards (LOD, calculated fields, actions) tracking NGN 5M+ in outstanding invoices; validated end-to-end from SQL Server to stakeholders.",
      "Wrote optimised SQL (CTEs, window functions) to extract, clean and transform raw data across multiple source systems — eliminated manual prep for ops and finance.",
      "Automated reporting workflows via Azure Data Factory and Python — cut manual overhead, kept delivery reliable across business units.",
      "Built Power BI dashboards surfacing customer churn signals and channel performance trends, informing retention campaigns.",
    ],
  },
  {
    period: "Mar 2022 — Feb 2023",
    role: "Data Analyst",
    company: "Demsco Travels & Tours",
    location: "Lagos, Nigeria",
    bullets: [
      "Migrated paper records to structured Excel reporting with data-validation standards — cut reporting time by 40%.",
      "Designed daily/weekly performance scorecards consumed by the operations and sales leads.",
    ],
  },
];

const EDUCATION = {
  degree: "B.Sc.",
  school: "University of Lagos",
  where:  "Lagos, Nigeria",
  year:   "2018 — 2022",
};

const AWARDS = [
  { id: "1", year: "×2", title: "Tableau Viz of the Day", body: "Two dashboards selected for Tableau's global daily featured Viz" },
  { id: "3", year: "×4", title: "Tableau Vizzies Nominated", body: "Nominated across four categories at the Tableau Public community awards" },
  { id: "4", year: "2024", title: "Upwork Top Rated",        body: "Top 1% freelancer for BI work" },
];

/* ---- expose globally for other Babel scripts ---- */
Object.assign(window, {
  PROFILE, SELECTED_WORKS, ALL_WORKS,
  SKILLS, TOOLS, EXPERIENCE, EDUCATION, AWARDS,
});
