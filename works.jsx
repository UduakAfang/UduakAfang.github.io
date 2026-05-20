/* eslint-disable no-undef */
/* Works page — full archive in a dashboard-style grid */

const { useState: useStateW, useMemo: useMemoW } = React;

function WorksPage({ go }) {
  const [filter, setFilter] = useStateW("All");
  const [open, setOpen] = useStateW(null);

  const cats = useMemoW(() => {
    const set = new Set(["All"]);
    ALL_WORKS.forEach(w => set.add((w.tag.split("·")[0] || "").trim()));
    return Array.from(set);
  }, []);

  const items = ALL_WORKS.filter(w => filter === "All" || w.tag.startsWith(filter));

  // pin the first three (selected) at the top
  const pinned = items.filter(w => SELECTED_WORKS.find(s => s.id === w.id));
  const archive = items.filter(w => !SELECTED_WORKS.find(s => s.id === w.id));

  return (
    <main className="bg-paper text-ink min-h-screen">
      {/* Header / dashboard chrome */}
      <section className="pt-28 md:pt-36 pb-10">
        <div className="max-w-[1320px] mx-auto px-6 md:px-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mono text-[11px] uppercase tracking-[0.22em] text-ink/55 mb-10">
            <button onClick={() => go("home")} className="hover:text-ink">Home</button>
            <span>/</span>
            <span className="text-ink">Works</span>
          </div>

          {/* Title row */}
          <div className="flex items-end justify-between gap-6 flex-wrap mb-10">
            <div>
              <div className="pagenum opacity-50 mb-3">§ 02 · Project Archive</div>
              <h1 className="display text-7xl md:text-[9rem] leading-[0.85]">
                <ScrollFillText fill="#1a1a1a" stroke="#1a1a1a">WORKS</ScrollFillText><span className="text-brick">.</span>
              </h1>
              <p className="mt-4 text-ink/65 max-w-xl">
                Every dashboard, pipeline and web app I've shipped — pinned, filterable, and open
                to a case study on click.
              </p>
            </div>
            <div className="text-right">
              <div className="display text-5xl leading-none">{ALL_WORKS.length.toString().padStart(2, "0")}</div>
              <div className="mono text-[10px] uppercase tracking-widest opacity-55">Total entries · 2022→26</div>
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex items-center justify-between flex-wrap gap-4 p-3 rounded-2xl bg-white border border-ink/10">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="mono text-[10px] uppercase tracking-widest opacity-55 px-2">Filter</span>
              {cats.map(c => (
                <button
                  key={c}
                  onClick={() => setFilter(c)}
                  className={
                    "px-3.5 py-1.5 rounded-full mono text-[11px] uppercase tracking-[0.22em] transition-colors " +
                    (filter === c ? "bg-ink text-paper" : "text-ink/70 hover:bg-ink/5")
                  }
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3 text-ink/55 mono text-[11px] uppercase tracking-widest px-2">
              <span>View</span>
              <button className="px-2 py-1 rounded bg-ink/5 text-ink">Grid</button>
              <span className="opacity-50">List</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pinned (selected works) */}
      {pinned.length > 0 && (
        <section className="pb-10">
          <div className="max-w-[1320px] mx-auto px-6 md:px-12">
            <div className="flex items-center gap-3 mb-5">
              <div className="num-dot">★</div>
              <div>
                <div className="font-semibold">Pinned · Selected works</div>
                <div className="mono text-[10px] uppercase tracking-widest opacity-55">Highlighted on the homepage</div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {pinned.map(w => (
                <SelectedWorkCard key={w.id} work={w} onOpen={setOpen} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Full archive */}
      <section className="pb-32 pt-6">
        <div className="max-w-[1320px] mx-auto px-6 md:px-12">
          <div className="flex items-center gap-3 mb-5">
            <div className="num-dot">⌗</div>
            <div>
              <div className="font-semibold">All projects</div>
              <div className="mono text-[10px] uppercase tracking-widest opacity-55">Sorted by year · newest first</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {archive.map(w => (
              <ArchiveCard key={w.id} work={w} onOpen={setOpen} />
            ))}
            {/* "request" tile that calls to commission */}
            <article
              className="card-lift rounded-[22px] p-4 flex flex-col border border-dashed border-ink/25 bg-paper2/40 cursor-pointer"
              onClick={() => go("home")}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="mono text-[10px] uppercase tracking-widest text-ink/55">No.next</span>
                <span className="mono text-[10px] uppercase tracking-widest text-ink/55">2026</span>
              </div>
              <div className="relative rounded-[16px] bg-paper paper-grain flex items-center justify-center" style={{ aspectRatio: "16 / 10" }}>
                <Plus size={36} className="text-ink/30" />
              </div>
              <h4 className="mt-3 text-lg font-semibold leading-tight">Your dashboard goes here.</h4>
              <p className="mt-1 text-[12.5px] text-ink/60 leading-snug">
                Got a messy data problem? I'd love to take a look.
              </p>
              <div className="mt-3 inline-flex items-center gap-2 mono text-[10px] uppercase tracking-widest text-brick">
                Start a project <ArrowUR size={11} />
              </div>
            </article>
          </div>
        </div>
      </section>

      {open && <CaseModal work={open} onClose={() => setOpen(null)} />}
    </main>
  );
}

window.WorksPage = WorksPage;
