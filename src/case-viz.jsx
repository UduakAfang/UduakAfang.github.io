/* Data-viz case study — no question/data build-up. The dashboard leads, then
   the thinking behind it. Used for dashboard projects (see VIZ_CASES). */

const VIZ_CASES = ["03", "09", "05", "04"];

const VIZ_COPY = {
  "09": {
    lede: "54 countries, 108 heads of state — the first one after independence and the one in office today, on ^one map^. Each ring is five years in power; the stem tells you whether power changed hands by election or by force.",
    shot: {
      src: "images/leaders.png",
      t: "The full viz",
      n: "Two nodes per country: a diamond for the first post-independence leader, a circle for the current one, with a stem running between them — solid where the transition was orderly, dashed where it was by force. The rings around a node count tenure, one ring per five years, so length of rule is a size you read rather than a number you look up. Colour is the system of government (authoritarian, military, monarchy, parliamentary, republic) and a green glow marks the countries whose system has changed since independence. A star marks the first leader since independence. The Africa outline is drawn from a fitted GeoJSON, and every mark sits on a coordinate I placed by hand.",
    },
    beats: [
      {
        h: "The thought process",
        b: "Most political charts on Africa are a table of names and dates. The thing I actually wanted to see was whether the system a country carried out of independence is the system it lives under now — and that is a comparison, not a list. So the unit of the graphic became the country, and each country got exactly two marks: the first head of state after independence, and the one in office today.",
        b2: "Everything else follows from that pair. The stem between the two marks is the transition, so it carries how power moved: solid for orderly, dashed for by force. Tenure had to be comparable at a glance, so it became rings rather than a label — one ring per five years, which turns forty years in office into something you notice before you read a single word.",
      },
      {
        h: "It is not a map",
        b: "Tableau's built-in maps could not do this. The nodes needed to sit near their country but far enough apart to carry ten rings without colliding, so real latitude and longitude were the wrong coordinate system. I built my own: an Africa outline fitted to a flat GeoJSON for the background, and a coordinates CSV holding an x/y and an angle for every one of the 54 countries, placed and re-placed by hand until the crowded parts of the continent breathed.",
        b2: "From there every mark is geometry I calculate. ^MAKEPOINT^ places the nodes and the ring centres, ^MAKELINE^ draws the stems between them, and a set of parameters — scale, shift, ring step, rise — lets me nudge the whole composition without touching the data. The ring radius, the stem start point, the mid point of a curve: all of it is trigonometry in calculated fields, which is why the layout is reproducible instead of a picture I drew over.",
      },
      {
        h: "The classification problem",
        b: "The dataset is mine — I compiled it country by country: administration type, mode of entry, exit type, date sworn in and date left. The problem with a dataset you build yourself is that it tells the truth in too much detail. Administration type came out at about thirty distinct values, which is thirty colours nobody can read, so it gets folded into five groups that a legend can hold.",
        b2: "Exit type got the same treatment. Grouping is where a graphic like this either stays honest or quietly starts lying, so the rules are written down in the calculation rather than done in a legend by hand — one place to check, one place to correct.",
      },
      {
        h: "What the map says",
        b: "Five countries — Mali, Burkina Faso, Chad, Sudan and Niger — were all republics at independence, and all five are under military rule today. On the map they sit next to each other, which is why that annotation exists: the pattern is geographic, not just statistical.",
        b2: "Then the individual cases the rings expose. Uganda was a republic in 1962 and has been authoritarian since 1986, under the same person for all forty of those years. Teodoro Obiang has governed Equatorial Guinea for 555 months — ten full rings, more than anyone else on the continent. And out of a hundred and six people, two are women: Namibia's Nandi-Ndaitwah and Tanzania's Samia Hassan. No country's first head of state was a woman.",
      },
    ],
  },
  "03": {
    lede: "108,238 service requests, seventeen city departments, forty-four zip codes — drawn as ^one screen a city ops lead could read in a meeting^. Selected as Tableau Viz of the Day.",
    pub: [["16,462", "Views"], ["211", "Favourites"], ["Viz of the Day", "Tableau Public"]],
    shot: {
      src: "images/nyc.png",
      t: "Page 1 · Citywide overview",
      n: "The whole year on one screen. Total requests with its trend, the closed / open / overdue split beneath it, then the three priority classes — Standard, Hazardous, Emergency — each with its own monthly column chart and its own overdue count. The Mapbox layer on the right carries open requests by neighbourhood, sized by volume, filtered by the priority you are asking about.",
    },
    beats: [
      {
        h: "The thought process",
        b: "Three numbers decide whether a 311 dashboard is useful: how many requests came in, how many are still open, and how long the open ones have been waiting. Everything on the page is one of those three cut a different way — by priority, by month, by neighbourhood. Nothing else earned a place.",
        b2: "So the layout reads left to right in the order the question gets asked. The totals column on the left is the health check. The priority row across the top is where it is coming from. The map is where it is happening. The frame was drawn in Figma before any of it was built in Tableau — boxes first, numbers second, so the hierarchy was settled while it was still cheap to move.",
      },
      {
        h: "What inspired it",
        b: "The dataset came out of Real World Fake Data — a community challenge that publishes a dataset shaped like a real operational system each month, so you design against the constraints an actual ops team would hand you rather than a tidy demo table. I started in the data, not in Tableau: what the columns could honestly answer came first, and it turned out to be a small list — volume, status, ageing, and where.",
        b2: "^“Helpdesk Dashboard” by Ann Pregler^ is what got the restraint right. It is an open-ticket monitoring view, and seeing 311 requests as a ticket queue settled the hardest decision for me — a dashboard does not need to hold everything the dataset can produce, only the few things somebody would act on. Priority as a row of cards, one hue per class, colour used only for status: that principle came from her board, not the layout.",
        b3: "The layout came from somewhere else. While working out how to structure it I found a dashboard layout on Pinterest and kept it open beside me — a fixed rail down the left holding the running totals, the priority cards sitting in their own row across the top, and each card carrying its own way in rather than a shared filter bar. That is the arrangement I borrowed: your eye lands on the totals, moves across the classes, then into whichever one is on fire.",
        b4: "Only then did I open Figma and draw the frame — empty boxes at real sizes, no numbers — and once the hierarchy held at that size I exported it and rebuilt it in Tableau. Everything after that was calculations.",
      },
      {
        h: "The two pages",
        b: "Page one answers \"how is the city doing\". Page two is for the person who already knows something is wrong and needs to say where — one priority class at a time, ranked by neighbourhood, department and request type, down to the individual request ID with its days open.",
        b2: "The two are wired together: the priority cards on page one are the way in, so the drill-down arrives pre-filtered and there is a Back button rather than a second set of controls. Every number on page two carries its prior-year value underneath, because a rate only means something next to the one before it.",
      },
      {
        h: "The plan, and how it held up",
        b: "One CSV, one extract, no database — every number on both pages is a Tableau calculation over the same table. Status came ready-made: ^CSR Status^ is open or closed and ^Is Overdue Flag^ is Y or N, so instead of inventing a target I crossed the two into the four states that matter — open, closed, closed and overdue, and the one nobody wants, open and overdue. That last bucket is the queue somebody has to actually work through, so it gets its own number rather than hiding inside \"open\".",
        b2: "The plan was that no figure should ever appear without something to judge it against. A year parameter drives the whole workbook: every measure is written twice, once for the selected year and once for the year before, with fixed-level counts holding the denominators steady so the rates do not shift when a filter moves. Ageing is one calculation doing two jobs — days since it was raised if it is still open, days to close if it is not — which is why one column can rank a live queue and a finished one at the same time.",
      },
    ],
  },
  "05": {
    lede: "Chelsea FC released a season of player physical data and asked what you could do with it. I built a ^player profile you navigate^ — GPS load, physical capability, recovery and priority areas behind an accordion menu that Tableau does not ship.",
    shot: {
      src: "images/player.png",
      t: "Page 1 · Player Info",
      n: "One player at a time. The bio panel holds the photo, height, weight and age, and the right-hand column is an accordion: Career Stats, Injury History and Priority Areas, one open at a time. Clicking a header swaps which section is showing rather than scrolling a longer page, so the profile stays one screen at every size.",
    },
    beats: [
      {
        h: "The thought process",
        b: "The dataset arrives as four separate tables — GPS session data, physical capability tests, recovery status and individual priority areas — and the temptation is to give each one a page. But nobody in a performance meeting asks about a table. They ask about a player. So the player became the unit of the dashboard and everything else had to fit around a single profile.",
        b2: "That is a space problem before it is a chart problem. A profile wants a photo, a bio, a career history, an injury record, priority areas and the load metrics, and all of that on one screen is a wall. The way out was to accept that only one of those sections is ever being read at once — which is what turned the design into an accordion.",
      },
      {
        h: "What inspired it",
        b: "I collected the references before drawing anything: attendance dashboards with a fixed left rail, dark training-load boards, a heart-rate readout on a body silhouette, and two player-profile layouts that carry a photo next to a grid of small multiples. What I kept from them was the profile shape — identity on the left, metrics on the right — and the accordion menu, which came from a Tableau community pattern rather than a sports dashboard.",
        b2: "The accordion itself came from ^“Accordion Menu” by Lisa Trescott^ — a Tableau Public viz that builds an accordion out of dynamic zone visibility and parameter actions, credited in turn to Zak Geis's design tip. Seeing it work in Tableau is what made the profile layout possible; without that pattern the page is a scroll.",
        b3: "The dark and light references mattered as much as the layout. I drew the profile twice, in black and in white, because the panels that read well in one do not always survive the other, and the final design is a mix of both.",
      },
      {
        h: "The frames, then the two pages",
        b: "Every frame was drawn before a single mark was built: Player Performance in white and black, bio and load-demand variants, page one and page two as separate boards. Empty boxes at real sizes, the accordion drawn closed, the calendar block reserved on the right. Deciding the hierarchy in Figma is what kept the Tableau build from turning into a list of worksheets.",
        b2: "Page one is who the player is — bio, accordion, priority areas. Page two is load demand: distance and high-speed running against the match-day calendar, accelerations and decelerations at each threshold, heart-rate zones, peak speed, and each metric read against its benchmark rather than in isolation. Same player, two questions.",
      },
      {
        h: "How the accordion actually works",
        b: "Tableau has no accordion, so it is built out of one integer parameter and three parameter actions. Clicking a section header runs an action that sets the parameter to that section's number; a boolean per section reads the parameter and drives dynamic zone visibility, so exactly one panel is on the canvas at a time. The panels are not hidden with a filter — they are not rendered.",
        b2: "The header colour is the same trick twice: each section has a pair of string fields, one that returns the label when the parameter matches and one that returns it when it does not, so the active header colours itself and the other two stay black. And because Tableau highlights whatever you click, every interactive tile carries a dummy TRUE / FALSE field and a link action whose only job is to throw the default highlight away. That is the whole mechanism — no extensions, no JavaScript.",
      },
    ],
  },
  "04": {
    lede: "Nine podcast creators, four platforms, one screen — ^pick a creator and a window and the whole dashboard re-reads^. Built to answer whether a show is growing or just publishing.",
    shot: {
      src: "images/podcast.png",
      t: "The dashboard",
      n: "Creator selection drives everything: audience size and average listen time, the split between mobile and desktop, where the listeners are, and how episodes performed inside the chosen window. The same layout serves any creator in the workbook rather than one board per show.",
    },
    beats: [
      {
        h: "The thought process",
        b: "Creator analytics fails in a specific way: every platform reports its own numbers, so you end up comparing four dashboards instead of reading one. The fix is not more charts, it is one comparable set of measures — listeners, listen time, device split, geography, per-episode performance — and a selector that swaps which creator you are looking at.",
        b2: "Publishing frequency and genre sit next to the audience numbers deliberately. A weekly show and a monthly show with the same listener count are not doing the same thing, and the dashboard should not let you forget which one you are reading.",
      },
      {
        h: "What inspired it",
        b: "The colours came from a menu I screenshotted somewhere and never found again — four pill buttons, each with its own soft tint and a matching outline. That palette is the reason the metric cards ended up as tinted panels rather than plain KPI boxes: one hue per measure, held quietly, so the numbers separate without a border between them.",
        b2: "The layout reference was a creator dashboard with a left rail and a row of stat cards over a plays chart, with the episode list kept to the side. What I took from it was the reading order — identity and navigation on the left, the four headline numbers across the top, then the trend, then the per-episode detail — not the styling.",
      },
      {
        h: "The frames, and what got cut",
        b: "I drew it dark first: navy board, lime studio mark, a creator's hub down the left. It looked good and read badly — the tinted metric cards that carry the whole idea lose their separation on a dark ground, and the palette I had borrowed stopped working. So the dark version was discarded rather than fixed.",
        b2: "The frame that survived is the white one: warm header band, a left rail listing dashboards and pages, and the body left empty until the hierarchy was settled. Everything after that was built in Tableau against that frame.",
      },
      {
        h: "The build",
        b: "Three parameters carry the workbook. A creator parameter picks the show. A time-frame parameter offers last 30, 60 or 90 days. And a reference date parameter defines what \"now\" means, because the dataset does not update — anchoring the window to a chosen date keeps the trend honest instead of quietly emptying as the file ages.",
        b2: "Underneath it is an Excel workbook of related tables — creators, audience stats, episodes — joined in Tableau rather than pre-flattened, so a measure is defined once and every panel reads the same definition.",
      },
    ],
  },
};

const VIZ_FIGS = {
  "05": {
    1: [{ src: "images/cfc-accordion-ref.png", small: true, t: "Reference · the accordion pattern", n: "“Accordion Menu” by Lisa Trescott — not my work. An accordion built in Tableau from dynamic zone visibility and parameter actions, itself credited to a design tip by Zak Geis. This is the mechanism the player profile is built on." },
        { src: "images/cfc-inspiration.png", t: "The reference board", n: "The inspirations I collected before drawing: a fixed-rail attendance dashboard, two dark training-load boards, a body-silhouette heart-rate readout, and two player profiles with a photo beside small multiples. None of these are my work — what I took was the profile shape and the accordion menu idea, not the graphics." }],
    2: [{ src: "images/cfc-frames.png", t: "Figma · every frame before the build", n: "Page 1 and page 2 drawn in both black and white, with the note that the final design is a mix of both. The accordion is drawn closed, the calendar block is reserved on the right, and no numbers appear anywhere — settling the hierarchy at real sizes is what stopped the Tableau build from drifting." }],
    3: [{
      t: "The accordion, verbatim",
      n: "Three fields do the work. Left: the boolean that drives dynamic zone visibility for section one — the panel is not filtered, it is not rendered. Middle and right: the twin header fields, one returning the label when the parameter matches and one when it does not, which is how the open section colours itself while the others stay black. Parameter actions on each header set the parameter; a dummy TRUE / FALSE field throws away Tableau's default click highlight.",
      code: [
        { name: "Accordion P 1.", src: "//returns a true/false value when the accordion param=1\n//used to control dynamic zone visibility\n\n[Parameters].[Parameter 3]=1" },
        { name: "p.Section 1 color_true", src: "//returns section 1 header when accordion param = 1\n//used to color the section 1 header purple\n\nIF [Parameters].[Parameter 3]=1\nTHEN 'Career Stats'\nELSE ''\nEND" },
        { name: "p.Section 1 color_false", src: "//returns section 1 header when accordion param does not equal 1\n//used to color the section 1 header black\n\nIF [Parameters].[Parameter 3]<>1\nTHEN 'Career Stats'\nELSE ''\nEND" },
      ],
    }],
  },
  "04": {
    1: [{ src: "images/podcast-inspiration.png", t: "The reference board", n: "Two references, neither mine. The pill menu on the left is a screenshot I kept purely for the colours — one soft tint per item, outline matching — which became the tinted metric cards. The dashboard on the right set the reading order: rail, four stat cards, plays chart, episode list." }],
    2: [
      { src: "images/podcast-frame.png", t: "Figma · the final frame", n: "The white frame the build follows: warm header band with the studio mark, a left rail splitting dashboards from pages, and an empty body — boxes at real sizes, no numbers, so the hierarchy was settled before any worksheet existed." },
      { src: "images/podcast-discarded.png", small: true, t: "Discarded · the dark version", n: "Drawn first and cut. Navy ground with a lime mark looked sharper as a picture, but the tinted metric cards stopped separating on it, which was the one thing the design was built around." },
    ],
    3: [{
      t: "The three parameters",
      n: "Verbatim from the workbook. The creator parameter is a list of creator IDs; the time frame is a string of days so it can be aliased to readable labels; the reference date is what \"now\" means, so a fixed dataset still reads as a rolling window.",
      code: [
        { name: "Podcasters", src: "// list parameter · CR001 … CR009\n\"CR002\"" },
        { name: "Time frame", src: "// aliased: Last 30 / 60 / 90 Days\n\"30\"" },
        { name: "Reference Date", src: "// anchors the rolling window\n#2025-05-31#" },
      ],
    }],
  },
  "09": {
    1: [{
      t: "Two calculations that build the picture",
      n: "Left: tenure becomes rings — a count, not a length, so five years is one ring and forty is eight. Right: how power moved. For the first leader it reads their own exit; for anyone after, it reads their mode of entry, and coup, military, liberation and war all resolve to the same thing. The stem is drawn dashed when this returns \"By force\".",
      code: [
        { name: "Rings · one per five years", src: "CEILING( [Tenure (Months)] / 60 )" },
        { name: "Power moved", src: "IF [Is Earliest] AND NOT [Is Solo?] THEN\n    IF CONTAINS([First Gov Group],'force')\n    THEN 'By force' ELSE 'Orderly' END\nELSE\n    IF CONTAINS([Mode of Entry],'Coup')\n       OR CONTAINS([Mode of Entry],'Military')\n       OR CONTAINS([Mode of Entry],'Liberation')\n       OR CONTAINS([Mode of Entry],'War')\n    THEN 'By force' ELSE 'Orderly' END\nEND" },
      ],
    }],
    2: [{
      t: "Thirty administration types, five colours",
      n: "The verbatim grouping calculation. Everything the legend shows is decided here — and the country whose group differs from its first leader's group is the one that gets the green glow.",
      code: [
        { name: "Gov Group · 30 → 5", src: "// Reducing 30 types by grouping to 5\n\nIF CONTAINS([Administration Type], \"Monarch\")\n    OR CONTAINS([Administration Type], \"Empire\")\n    OR CONTAINS([Administration Type], \"Dynastic\")\nTHEN \"Monarchy\"\n\nELSEIF CONTAINS([Administration Type], \"Junta\")\n    OR CONTAINS([Administration Type], \"Transitional\")\n    OR CONTAINS([Administration Type], \"Military\")\nTHEN \"Military-transitional\"\n\nELSEIF CONTAINS([Administration Type], \"Authoritarian\")\n    OR CONTAINS([Administration Type], \"One-Party\")\n    OR CONTAINS([Administration Type], \"Dictatorship\")\n    OR CONTAINS([Administration Type], \"Totalitarian\")\n    OR CONTAINS([Administration Type], \"Dominant\")\nTHEN \"Authoritarian-one-party\"\n\nELSEIF CONTAINS([Administration Type], \"Parliament\")\n    OR CONTAINS([Administration Type], \"Democracy\")\n    OR CONTAINS([Administration Type], \"Semi-Pres\")\nTHEN \"Parliamentary\"\n\nELSE \"Republic\"\nEND" },
      ],
    }],
    3: [{
      t: "The two countries the pair logic has to skip",
      n: "Eritrea and South Sudan return one distinct leader — the first head of state never left — so there is no pair to compare and no stem to draw. This field catches them before the transition logic runs.",
      code: [
        { name: "Is Solo?", src: "// Eritrea and South Sudan, where the\n// first leader never left\n\n{FIXED [Country]: COUNTD([Leader Name])} = 1" },
      ],
    }],
  },
  "03": {
    1: [
      { src: "images/nyc-311-frame.png", t: "Figma · the frame before the data", n: "My frame, drawn in Figma with the Pinterest layout pinned above it for reference: totals rail on the left, three priority cards across the top, then the two large panels for the ranked breakdown and the map. Empty boxes at real sizes — settling the hierarchy here is what stopped the Tableau build from drifting into a wall of charts." },
      { src: "images/nyc-311-inspiration.png", small: true, t: "Reference", n: "Inspired by “Helpdesk Dashboard” by Ann Pregler — not my work. What I took from it was the restraint: priority as a row of cards, one colour per class, colour reserved for status." },
    ],
    3: [{
      t: "Two calculations the whole thing leans on",
      n: "Left: the queue nobody wants — selected year, flagged overdue, still open — which is what makes 9,202 its own number instead of a slice of \"open\". Right: one field that ages a live request and a finished one at once, so the same column can rank both.",
      code: [
        { name: "Open and overdue · CSR", src: "IF [Parameters].[Year] = YEAR([Creation Date])\nAND [Is Overdue Flag] = 'Y'\nAND [CSR Status] = 'OPEN'\nTHEN [CSR Number]\nEND" },
        { name: "Days to close or days open", src: "IF [CSR Status] = 'OPEN'\nTHEN TODAY() - [Creation Date]\nELSE [Closed Date] - [Creation Date]\nEND" },
      ],
    }],
    2: [{ src: "images/nyc-311-page2.png", t: "Page 2 · Priority drill-down", n: "Clicking a priority class on page one lands here with the filter already applied. The four cards along the left are the same measures as the overview but for that class alone — volume, average days to close, and the two overdue rates — each against last year. The heatmap underneath puts the year on a day-by-hour grid, and the table lists the actual overdue requests by ID, department and days open. The three ranked bars at the bottom answer where: neighbourhood, department, request type, with department clickable down to sub-department." }],
  },
};

function VizFigure({ fig }) {
  const cap = (
    <figcaption>
      <span className="mono text-[9.5px] tracking-[.18em] uppercase">{fig.t}</span>
      <span className="case-fig-n">{fig.n}</span>
    </figcaption>
  );
  return (
    <figure className={"case-fig reveal" + (fig.small ? " case-fig-sm" : "")}>
      {fig.code
        ? <div className="viz-code">{fig.code.map((c, i) => (
            <div key={i} className="viz-code-b">
              <div className="viz-code-h mono">{c.name}</div>
              <pre className="mono">{c.src}</pre>
            </div>))}</div>
        : <img src={fig.src} alt={fig.t} className="w-full h-auto" />}
      {cap}
    </figure>
  );
}

function CaseViz5({ id, go, pal }) {
  const work = ALL_WORKS.find((w) => w.id === id) || SELECTED_WORKS[0];
  const m = WORK_META[id] || WORK_META["03"];
  const cc = VIZ_COPY[id] || VIZ_COPY["03"];
  const idx = SELECTED_WORKS.findIndex((w) => w.id === id);
  useReveal4(id);
  const figsFor = (i) => (VIZ_FIGS[id] && VIZ_FIGS[id][i]) || [];

  return (
    <main className="grain">
      <section className="shell pt-32 md:pt-36">
        <button onClick={() => go("work")} className="mono text-[9px] tracking-[.2em] uppercase" style={{ opacity: .5 }}>← All work</button>
        <h1 className="claim text-[12vw] md:text-[58px] max-w-[820px] mt-7">{work.title}</h1>
        <p className="text-[16.5px] md:text-[18px] leading-[1.55] max-w-[600px] mt-5" style={{ opacity: .86 }}><T>{cc.lede}</T></p>
        {cc.pub && (
          <div className="viz-pub">
            {cc.pub.map(([v, l]) => <div key={l}><b>{v}</b><span>{l}</span></div>)}
          </div>
        )}
        <div className="case-meta">
          <div><span>Role</span><b>{m.role}</b></div>
          <div><span>Tools</span><b>{work.tag}</b></div>
          <div><span>Year</span><b>{work.year}</b></div>
          <div><span>Live</span><b>{work.tableauUrl
            ? <a href={work.tableauUrl} target="_blank" rel="noreferrer" className="case-meta-link">View on Tableau Public ↗</a>
            : work.client}</b></div>
        </div>
      </section>

      <article className="shell">
        <VizFigure fig={cc.shot} />

        {cc.beats.map((s, i) => (
          <React.Fragment key={i}>
            <div className={"case-row reveal " + (i % 2 ? "case-row-alt" : "")}>
              <div>
                <div className="mono text-[9px] tracking-[.2em] uppercase" style={{ opacity: .4 }}>{String(i + 1).padStart(2, "0")}</div>
                <h2 className="text-[24px] md:text-[27px] font-semibold tracking-[-.025em] leading-[1.2] mt-3 max-w-[280px]">{s.h}</h2>
              </div>
              <div>
                <p className="text-[15.5px] md:text-[16.5px] leading-[1.7]" style={{ opacity: .86 }}><T>{s.b}</T></p>
                {s.b2 && <p className="text-[15.5px] md:text-[16.5px] leading-[1.7] mt-5" style={{ opacity: .86 }}><T>{s.b2}</T></p>}
                {s.b3 && <p className="text-[15.5px] md:text-[16.5px] leading-[1.7] mt-5" style={{ opacity: .86 }}><T>{s.b3}</T></p>}
                {s.b4 && <p className="text-[15.5px] md:text-[16.5px] leading-[1.7] mt-5" style={{ opacity: .86 }}><T>{s.b4}</T></p>}
              </div>
            </div>
            {figsFor(i).map((fg, k) => <VizFigure key={k} fig={fg} />)}
          </React.Fragment>
        ))}

        <div className="case-row reveal">
          <div><div className="mono text-[9px] tracking-[.2em] uppercase" style={{ opacity: .4 }}>Built with</div></div>
          <div className="flex flex-wrap gap-1.5">
            {(m.tags || work.stack).map((t) => <span key={t} className="chip">{t}</span>)}
          </div>
        </div>
      </article>

      <section className="shell mt-24 pb-24">
        {(() => {
          const nx = SELECTED_WORKS[((idx < 0 ? 0 : idx) + 1) % SELECTED_WORKS.length];
          const nTint = pal.cards[(SELECTED_WORKS.indexOf(nx)) % pal.cards.length];
          const nLight = nTint.fg === "light";
          return (
            <button onClick={() => go("case:" + nx.id)} className="w-full text-left rounded-[28px] p-8 md:p-12 transition-transform duration-500 hover:-translate-y-1"
                    style={{ background: nTint.bg, color: nLight ? "#fff" : "rgb(var(--c-ink))" }}>
              <div className="mono text-[9.5px] tracking-[.18em] uppercase" style={{ opacity: .6 }}>Next project</div>
              <div className="flex flex-wrap items-end justify-between gap-6 mt-4">
                <h3 className="claim text-[11vw] md:text-[54px]">{nx.title}</h3>
                <span className="mono text-[10.5px] font-semibold tracking-[.12em] uppercase px-5 py-2.5 rounded-full"
                      style={{ background: nLight ? "#fff" : "rgb(var(--c-ink))", color: nLight ? "#111" : "rgb(var(--c-paper))" }}>
                  See case study →
                </span>
              </div>
            </button>
          );
        })()}
      </section>

      <Contact4 />
    </main>
  );
}

Object.assign(window, { CaseViz5, VIZ_CASES, VIZ_COPY, VIZ_FIGS });
