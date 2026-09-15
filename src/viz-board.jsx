/* Visualisations read differently from products: the board is a glass grid.
   Project cards stay reserved for end-to-end work.
   PINNED_ID is site-wide — whichever group holds that project shows it big. */

const PINNED_ID = "09";

/* A visualisation says one thing about itself: built with Tableau, and here is
   where to go and look at it. tableauUrl stays empty until the real Tableau
   Public URL arrives, and falls back to the profile. */
const VIZ_ITEMS = [
  { id: "09", title: "The Same Countries, Different Rules", label: "Data viz · Tableau", image: "images/leaders.png", tableauUrl: "https://public.tableau.com/views/AfricanHeadsofStateEarliestandLatest/SameCountryDifferentRules?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" },
  { id: "03", title: "NYC 311 Service Requests", label: "Civic data viz · Tableau", image: "images/nyc.png", tableauUrl: "https://public.tableau.com/views/RWFDNYCCitizenRequestsServices/NYCCSRDashboard?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" },
  { id: "05", title: "CFC Player Performance Insights", label: "Sports science · Tableau", image: "images/player.png", tableauUrl: "https://public.tableau.com/views/CFCPlayerPerformanceInsights/PlayerInfo?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" },
  { id: "04", title: "Podcast Analytics", label: "Creator analytics · Tableau", image: "images/podcast.png", tableauUrl: "https://public.tableau.com/views/PodcastAnalytics/PodcastCreators?:language=en-GB&:sid=&:redirect=auth&:display_count=n&:origin=viz_share_link" },
];

const vizUrl = (id) => {
  const t = VIZ_ITEMS.find((x) => x.id === id) || {};
  const w = (typeof ALL_WORKS !== "undefined" && ALL_WORKS.find((x) => x.id === id)) || {};
  return t.tableauUrl || w.tableauUrl || PROFILE.tableau;
};

function VizLink({ id, light }) {
  return (
    <div className="vb-built">
      <span className="mono">Built with Tableau</span>
      <a href={vizUrl(id)} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()} className="mono vb-live">View it live ↗</a>
    </div>
  );
}

function VizPin({ go, id }) {
  const { useState } = React;
  const [hov, setHov] = useState(false);
  const w = ALL_WORKS.find((x) => x.id === id);
  if (!w) return null;
  const open = () => go("case:" + w.id);
  return (
    <div className="vb-pin reveal" onClick={open} role="link" tabIndex="0"
         onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } }}
         onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}>
      <div className="vb-pin-shot">
        <img src={w.image} alt={w.title} style={{ transform: hov ? "scale(1.03)" : "scale(1)" }} />
      </div>
      <div className="vb-pin-txt">
        <div className="mono text-[9.5px] tracking-[.2em] uppercase text-accent">Pinned</div>
        <h3 className="text-[27px] md:text-[34px] font-black tracking-[-.045em] leading-[1] mt-3">{w.title}</h3>
        <p className="text-[14px] leading-[1.55] mt-3.5" style={{ opacity: .78 }}>{w.blurb}</p>
        <VizLink id={w.id} />
        <button onClick={(e) => { e.stopPropagation(); open(); }}
          className="mt-5 self-start inline-flex items-center gap-2 pl-3.5 pr-4 py-2.5 rounded-full mono text-[10.5px] font-semibold tracking-[.12em] uppercase transition-transform duration-300"
          style={{ background: "rgb(var(--c-ink))", color: "rgb(var(--c-paper))", transform: hov ? "translateY(-2px)" : "none" }}>
          <span className="w-3.5 h-3.5 rounded-full border border-current inline-flex items-center justify-center text-[7px] leading-none">▸</span>
          See case study
        </button>
      </div>
    </div>
  );
}

/* Every visualisation is clickable. Where a case study exists the tile opens
   it; the rest open the viz itself until their write-ups are in. */
function VizTile({ t, go, tint }) {
  const hasCase = (window.VIZ_CASES || []).includes(t.id) || (typeof CASE_COPY !== "undefined" && CASE_COPY[t.id]);
  const open = hasCase
    ? () => go("case:" + t.id)
    : () => window.open(vizUrl(t.id), "_blank", "noopener");
  const tags = String(t.label || "").split("·").map((s) => s.trim()).filter(Boolean);
  const light = tint && tint.fg === "light";
  const cardStyle = { background: (tint && tint.bg) || "rgb(var(--c-card))", color: light ? "#fff" : "rgb(var(--c-ink))" };
  return (
    <div className="reveal h-full">
      <div className="pcard2" onClick={open} role="link" tabIndex="0" style={cardStyle}
           onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } }}>
        <div className="pcard2-img"><img src={t.image} alt={t.title} loading="lazy" /></div>
        <div className="pcard2-body">
          <h3 className="pcard2-title">{t.title}</h3>
          <div className="pcard2-tags">{tags.map((x, i) => <span key={i} className="pcard2-tag">{x}</span>)}</div>
          <span className="pcard2-cta">{hasCase ? "Case study →" : "View live ↗"}</span>
        </div>
      </div>
    </div>
  );
}

function VizBoard({ go, pinId = PINNED_ID, pinned = true, pal }) {
  const pin = pinned && VIZ_ITEMS.some((t) => t.id === pinId) ? pinId : null;
  const tiles = VIZ_ITEMS.filter((t) => t.id !== pin);
  const tints = (pal && pal.cards) || [];
  return (
    <div className="vb">
      {pin && <VizPin go={go} id={pin} />}
      <div className={"card-grid " + (pin ? "mt-6 md:mt-7" : "")}>
        {tiles.map((t, i) => <VizTile key={t.id} t={t} go={go} tint={tints.length ? tints[(i + 1) % tints.length] : null} />)}
      </div>
    </div>
  );
}

Object.assign(window, { VizBoard, VizPin, VizTile, VizLink, VIZ_ITEMS, PINNED_ID, vizUrl });
