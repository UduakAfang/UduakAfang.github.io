/* eslint-disable no-undef */

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

// THREE selected works — the home page only shows these
const SELECTED_WORKS = [
  {
    id: "01",
    no: "01 / 03",
    year: "2025",
    tag: "React · Next.js · Supabase",
    title: "TrackPerform",
    client: "Independent · sports-tech build",
    blurb:
      "A full-stack web app for soccer coaches and sports scientists — upload GPS / training CSVs, auto-map columns, and surface ACWR levels, weekly overviews and per-player load.",
    metric: { value: "20+", label: "Auto metrics" },
    image: "images/trackperform.png",
    url: "trackperform.com",
    process: [
      {
        n: "01",
        t: "The problem",
        d: "Sports-science teams spend hours in Excel mapping inconsistent GPS exports (Catapult, STATSports, Polar) into a usable shape. By Monday morning, the coach still doesn’t know who’s overloaded.",
      },
      {
        n: "02",
        t: "The data",
        d: "Per-session GPS rows (Total Distance, HSR, Sprint Distance, Player Load, Decel/Accel) joined to player biography and an injury log. 12-month retention; refresh on upload.",
      },
      {
        n: "03",
        t: "The build",
        d: "Next.js + Supabase. Schema-detecting CSV parser. EWMA-based ACWR calc. Per-player report pages and a coach dashboard for the squad.",
      },
      {
        n: "04",
        t: "The result",
        d: "What used to be a weekly half-day spreadsheet job became a 90-second upload. Coaches now check readiness before they pick the lineup.",
      },
    ],
    stack: ["Next.js", "React", "Supabase", "Postgres", "Tailwind", "D3"],
  },
  {
    id: "02",
    no: "02 / 03",
    year: "2025",
    tag: "Tableau · Web App",
    title: "DrillCal",
    client: "Independent · sports niche",
    blurb:
      "A training-load companion to TrackPerform: drill library, calendar planning and load forecasting so coaches can plan the week ahead instead of reacting to it.",
    metric: { value: "7-day", label: "Forecast horizon" },
    image: "images/drillcal.png",
    url: "drillcal.com",
    process: [
      {
        n: "01",
        t: "The problem",
        d: "Coaches were guessing the physical cost of a session before running it. Without a forecast, weekly load planning is back-fitted from what actually happened.",
      },
      {
        n: "02",
        t: "The data",
        d: "A drill library tagged with typical Distance / HSR / Sprint values, joined to a squad calendar and historical load per player.",
      },
      {
        n: "03",
        t: "The build",
        d: "Calendar drag-and-drop UI, drill-to-load model, projected ACWR ribbon. Same Supabase backbone as TrackPerform so data flows between them.",
      },
      {
        n: "04",
        t: "The result",
        d: "Coaches plan the week in 20 minutes and adjust on signal, not on hunch.",
      },
    ],
    stack: ["React", "Supabase", "D3", "Tableau"],
  },
  {
    id: "03",
    no: "03 / 03",
    year: "2023",
    tag: "Tableau · Mapbox",
    title: "NYC 311 Service Requests",
    client: "Personal · Real World Fake Data",
    blurb:
      "A civic dashboard analysing 108k+ citizen service requests across 17 departments and 44 zip codes. Selected for Tableau Viz of the Day; nominated at the Vizzies.",
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
        d: "Selected as Tableau Viz of the Day; nominated for 4 Vizzies. Used by community groups in conversations with city ops.",
      },
    ],
    stack: ["Tableau", "Mapbox", "SQL", "Figma"],
  },
];

// Full archive shown on /works
const ALL_WORKS = [
  ...SELECTED_WORKS,
  {
    id: "04",
    no: "04",
    year: "2024",
    tag: "Tableau · Data Viz",
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
    tag: "Tableau · Sports Science",
    title: "CFC Player Load Demand",
    client: "Chelsea FC (personal study)",
    blurb:
      "A two-tab sports-science dashboard combining player biography with six physical KPIs — ACWR, total distance, HSR, sprint distance — so coaching staff can read readiness without switching tools.",
    metric: { value: "6", label: "KPIs tracked" },
    image: "images/player.png",
  },
  {
    id: "06",
    no: "06",
    year: "2024",
    tag: "Tableau · Survey",
    title: "Music & Mental Health",
    client: "Personal Project",
    blurb:
      "Survey-driven viz exploring how music genres correlate with self-reported anxiety, depression and insomnia scores across 700+ respondents.",
    metric: { value: "700+", label: "Responses" },
    image: "images/music.png",
  },
  {
    id: "07",
    no: "07",
    year: "2024",
    tag: "Power BI · ETL",
    title: "Retail Sales Dashboard",
    client: "SessionHub Limited",
    blurb:
      "Power BI dashboard surfacing customer churn signals and channel performance trends — informed retention campaigns and improved re-activation.",
    metric: { value: "NGN 5M+", label: "AR tracked" },
    image: "images/sales.png",
  },
  {
    id: "08",
    no: "08",
    year: "2023",
    tag: "Tableau · Civic",
    title: "Access to Drinking Water · Nigeria",
    client: "Personal Project",
    blurb:
      "State-level analysis of household water access across Nigeria, identifying the gaps between SDG-6 targets and the on-the-ground reality.",
    metric: { value: "36", label: "States mapped" },
    image: "images/water.png",
  },
];

// Skills + tools (kept close to existing site, simplified)
const SKILLS = [
  { name: "Tableau",             pct: 96, note: "LOD · calc fields · actions" },
  { name: "SQL",                 pct: 94, note: "BigQuery · SQL Server · Postgres" },
  { name: "Prompt Engineering",  pct: 90, note: "LLM tooling · structured prompts" },
  { name: "Python",              pct: 88, note: "Pandas · NumPy · Flask" },
  { name: "ETL / dbt",           pct: 85, note: "Staging · models · tests" },
  { name: "Power BI",            pct: 80, note: "DAX · Power Query" },
  { name: "n8n",                 pct: 78, note: "Workflow automation" },
];

const TOOLS = [
  "Tableau","SQL","BigQuery","Python","PostgreSQL",
  "Power BI","dbt","n8n","Git","Figma","Supabase","Excel"
];

const EXPERIENCE = [
  {
    period: "Mar 2023 — Present",
    role: "Business Intelligence Analyst",
    company: "SessionHub Limited",
    location: "Lagos, Nigeria",
    bullets: [
      "Built Tableau dashboards (LOD, calculated fields, actions) tracking NGN 5M+ in outstanding invoices; validated end-to-end from SQL Server to stakeholders.",
      "Wrote optimised SQL (CTEs, window functions) to extract, clean and transform raw data across multiple source systems — eliminated manual prep for ops and finance.",
      "Automated reporting workflows via n8n and Python — cut manual overhead, kept delivery reliable across business units.",
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
  { id: "1", year: "2024", title: "Tableau Viz of the Day", body: "NYC 311 Service Requests dashboard" },
  { id: "2", year: "2023", title: "Tableau Viz of the Day", body: "Drinking Water Access — Nigeria" },
  { id: "3", year: "2024", title: "Vizzies Nominee × 4",     body: "Tableau Public community awards" },
  { id: "4", year: "2024", title: "Upwork Top Rated",        body: "Top 1% freelancer for BI work" },
];

/* ---- expose globally for other Babel scripts ---- */
Object.assign(window, {
  PROFILE, SELECTED_WORKS, ALL_WORKS,
  SKILLS, TOOLS, EXPERIENCE, EDUCATION, AWARDS,
});
