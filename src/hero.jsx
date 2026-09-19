/* Hero5 — the alternative opening: one soft-gradient panel read as two
   implicit columns. Statement, discipline row and paragraph run down the
   left; a quiet information stack sits bottom-right. No image. */

const HERO5_LINKS = [
  { t: "TrackPerform", s: "client build · live", href: "https://trackperform.com" },
  { t: "DrillCal", s: "client build · launched", href: "https://drillcal.com" },
];

function Hero5({ go, panel = "Panel" }) {
  const now = EXPERIENCE[0] || {};
  const bare = panel === "Bare";
  return (
    <section className="shell-pad pt-[86px] md:pt-[110px]">
      <div className={"hero5 relative overflow-hidden shellbox md:min-h-[84svh] flex flex-col justify-end pt-20 md:pt-24 pb-12 md:pb-16 " +
        (bare ? "is-bare px-1 md:px-10 lg:px-14" : "rounded-[32px] px-6 md:px-12")}>
        <div className="grid grid-cols-12 gap-y-12 gap-x-8 md:gap-x-14 items-end relative">
          <div className="col-span-12 md:col-span-7">
            <span className="inline-block px-4 py-2 rounded-[7px] border border-ink/20 mono text-[9px] tracking-[.2em] uppercase" style={{ background: bare ? "transparent" : "rgb(var(--c-paper) / .55)" }}>
              Available for work
            </span>
            <h1 className="claim mt-7" style={{ fontSize: "clamp(34px, 5.2vw, 62px)", maxWidth: "min(100%, 560px)" }}>
              I build data models, pipelines and <span className="serif-it">dashboards</span>.
            </h1>
            <div className="flex flex-wrap items-center mt-9 mb-8">
              {["Analytics Engineer", "Data Analyst", "BI Analyst"].map((d, i) => (
                <span key={d} className={"mono text-[9.5px] tracking-[.18em] uppercase px-5 first:pl-0 " + (i ? "border-l border-ink/20" : "")} style={{ opacity: .6 }}>{d}</span>
              ))}
            </div>
            <p className="text-[15px] md:text-[15.5px] leading-[1.7] max-w-[440px]" style={{ opacity: .86 }}>
              Three years modelling data in dbt and Databricks, and designing the Tableau and
              Power BI surfaces teams decide on every week.
            </p>
            <div className="flex flex-wrap items-center gap-x-7 gap-y-3 mt-9 pt-7 border-t border-ink/12">
              {[["2×", "Tableau Viz of the Day"], ["4×", "Vizzies nominated"], ["3 yrs", "building BI"], ["2", "products shipped"]].map(([v, l]) => (
                <div key={l} className="flex items-baseline gap-1.5">
                  <span className="text-[16px] font-black tracking-[-.03em] text-accent leading-none">{v}</span>
                  <span className="mono text-[9px] tracking-[.13em] uppercase" style={{ opacity: .6 }}>{l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-12 md:col-span-5 md:pl-6">
            <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-y-7 gap-x-8">
              <div>
                <div className="mono text-[8.5px] tracking-[.2em] uppercase pb-2.5 border-b border-ink/15" style={{ opacity: .45 }}>Currently</div>
                <div className="text-[15px] font-semibold tracking-[-.01em] mt-3">{now.role}</div>
                <div className="text-[13.5px] mt-1" style={{ opacity: .6 }}>{now.company} · {now.period}</div>
              </div>

              <div>
                <div className="mono text-[8.5px] tracking-[.2em] uppercase pb-2.5 border-b border-ink/15" style={{ opacity: .45 }}>Products I've shaped</div>
                {HERO5_LINKS.map((l) => (
                  <a key={l.t} href={l.href} target="_blank" rel="noreferrer"
                     className="flex items-baseline justify-between gap-4 py-2.5 border-b border-ink/10 group" style={{ color: "inherit" }}>
                    <span className="text-[15px] font-semibold tracking-[-.01em] ul">{l.t}</span>
                    <span className="mono text-[8.5px] tracking-[.16em] uppercase whitespace-nowrap" style={{ opacity: .5 }}>{l.s} ↗</span>
                  </a>
                ))}
              </div>

              <div>
                <div className="mono text-[8.5px] tracking-[.2em] uppercase pb-2.5 border-b border-ink/15" style={{ opacity: .45 }}>Based in</div>
                <div className="text-[15px] font-semibold tracking-[-.01em] mt-3">{PROFILE.location} <span style={{ opacity: .5 }}>({PROFILE.tz})</span></div>
                <div className="text-[13.5px] mt-1" style={{ opacity: .6 }}>{PROFILE.mode} · Any hours, any timezone</div>
                <div className="flex items-center gap-2 mono text-[9px] tracking-[.16em] uppercase mt-3.5 text-accent">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />Open to work
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 mt-10">
              <button onClick={() => go("work")}
                className="px-5 py-3 rounded-[5px] bg-accent text-white text-[13.5px] font-medium inline-flex items-center gap-2 hover:opacity-88 transition-opacity">
                View selected work <span className="text-[11px]">↗</span>
              </button>
              <a href={`mailto:${PROFILE.email}`}
                className="px-5 py-3 rounded-[5px] border border-ink/20 text-[13.5px] font-medium inline-flex items-center gap-2 hover:bg-ink hover:text-paper transition-colors" style={{ color: "inherit" }}>
                Get in touch <span className="text-[11px]">↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero5, HERO5_LINKS });
