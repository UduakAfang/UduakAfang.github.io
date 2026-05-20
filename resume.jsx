/* eslint-disable no-undef */
/* Resume page — Aileen Luo-inspired editorial layout with download button */

const { useEffect: useEffectR } = React;

function ResumePage({ go }) {
  useEffectR(() => {
    const sel = ".reveal, .reveal-pop, .flip-reveal, .flip-reveal-alt";
    const els = document.querySelectorAll(sel);
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add("in");
        else e.target.classList.remove("in");
      });
    }, { threshold: 0.1 });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, []);

  return (
    <main className="bg-paper2 text-ink min-h-screen overflow-x-hidden">
      {/* Title strip */}
      <section className="pt-28 md:pt-36 pb-10">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="flex items-center gap-2 mono text-[11px] uppercase tracking-[0.22em] text-ink/55 mb-10">
            <button onClick={() => go("home")} className="hover:text-ink">Home</button>
            <span>/</span>
            <span className="text-ink">Résumé</span>
          </div>

          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="pagenum opacity-50 mb-3">§ 06 · Curriculum Vitæ</div>
              <h1 className="display text-5xl md:text-7xl lg:text-[8.5rem] leading-[0.85]">
                <ScrollFillText fill="#1a1a1a" stroke="#1a1a1a">RÉSUMÉ</ScrollFillText><span className="text-brick">.</span>
              </h1>
              <p className="mt-3 text-ink/65 max-w-md">A long-form version of who I am, what I've built, and where to find me.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="px-5 py-3 rounded-full bg-ink text-paper hover:bg-brick transition-colors mono text-[11px] uppercase tracking-[0.22em] inline-flex items-center gap-2">
                Download PDF
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></svg>
              </button>
              <button className="px-5 py-3 rounded-full border border-ink/20 hover:border-ink mono text-[11px] uppercase tracking-[0.22em] inline-flex items-center gap-2">
                Print
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The paper document */}
      <section className="pb-32">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12">
          <div className="bg-paper rounded-[32px] shadow-[0_30px_60px_-40px_rgba(26,26,26,0.35)] overflow-hidden reveal">

            {/* Editorial header (the Aileen-Luo bar) */}
            <div className="relative bg-brick px-5 sm:px-10 md:px-16 pt-8 pb-16">
              {/* tiny meta bar across the top */}
              <div className="flex items-center justify-between mono text-[10px] uppercase tracking-[0.3em] text-paper/80 mb-12 gap-4">
                <span>U. AFANG · 2026 · Résumé v3.2</span>
                <span className="hidden md:inline">Letter · A4</span>
                <span>Lagos / Remote</span>
              </div>
              <div className="display text-paper text-4xl sm:text-6xl md:text-[8rem] leading-[0.85]">
                Uduak Afang
              </div>
              <div className="mt-3 mono text-paper/85 uppercase tracking-[0.22em] text-[11px]">
                Business Intelligence Analyst · End-to-end · Remote
              </div>
            </div>

            {/* tear strip */}
            <div className="dash-div mx-5 sm:mx-10 md:mx-16 -mt-3 relative z-10 bg-paper" />

            <div className="px-4 sm:px-8 md:px-16 py-10 sm:py-14 grid grid-cols-12 gap-6 sm:gap-10">

              {/* LEFT — about / contact / skills */}
              <aside className="col-span-12 lg:col-span-4 space-y-10">
                {/* contact */}
                <div>
                  <div className="eyebrow opacity-55 mb-3">Contact</div>
                  <div className="text-sm space-y-1.5">
                    <Row label="Email">{PROFILE.email}</Row>
                    <Row label="LinkedIn">linkedin.com/in/uduakafang</Row>
                    <Row label="GitHub">github.com/UduakAfang</Row>
                    <Row label="Where">{PROFILE.location} · {PROFILE.tz}</Row>
                    <Row label="Status">Open to work · {PROFILE.mode}</Row>
                  </div>
                </div>

                {/* about */}
                <div>
                  <div className="eyebrow opacity-55 mb-3">About</div>
                  <p className="text-sm leading-relaxed text-ink/75">
                    BI Analyst with 3+ years building Tableau dashboards and SQL pipelines
                    for finance, ops and commercial teams. I own work end-to-end — extracting raw data,
                    modelling it, and shaping it into dashboards stakeholders trust.
                  </p>
                </div>

                {/* skills histogram */}
                <div>
                  <div className="eyebrow opacity-55 mb-3">Skills · Self-assessed</div>
                  <ResumeBars skills={SKILLS} />
                </div>

                {/* tools */}
                <div>
                  <div className="eyebrow opacity-55 mb-3">Tools</div>
                  <div className="flex flex-wrap gap-1.5">
                    {TOOLS.map(t => (
                      <span key={t} className="px-2.5 py-1 rounded-full bg-ink/5 border border-ink/10 mono text-[10px] uppercase tracking-widest">{t}</span>
                    ))}
                  </div>
                </div>

                {/* education */}
                <div>
                  <div className="eyebrow opacity-55 mb-3">Education</div>
                  <div className="text-sm">
                    <div className="font-bold">{EDUCATION.degree}, {EDUCATION.school}</div>
                    <div className="mono text-[10px] uppercase tracking-widest opacity-60 mt-0.5">
                      {EDUCATION.where} · {EDUCATION.year}
                    </div>
                  </div>
                </div>

                {/* languages */}
                <div>
                  <div className="eyebrow opacity-55 mb-3">Languages</div>
                  <div className="grid grid-cols-2 gap-y-2 text-sm">
                    <div className="font-semibold">English</div><div className="mono text-[10px] opacity-60 uppercase tracking-widest text-right self-center">Native</div>
                    <div className="font-semibold">Ibibio</div> <div className="mono text-[10px] opacity-60 uppercase tracking-widest text-right self-center">Native</div>
                    <div className="font-semibold">SQL</div>    <div className="mono text-[10px] opacity-60 uppercase tracking-widest text-right self-center">Fluent</div>
                  </div>
                </div>
              </aside>

              {/* RIGHT — experience / projects / awards */}
              <div className="col-span-12 lg:col-span-8 space-y-12">

                {/* timeline ribbon */}
                <div>
                  <div className="eyebrow opacity-55 mb-4">Trajectory · 2018 → 2026</div>
                  <div className="rounded-2xl border border-ink/10 bg-paper2/50 p-6">
                    <TimelineRibbon
                      items={[
                        { from: 2018, to: 2022, label: "B.Sc. · UniLag",          color: "rgba(26,26,26,.4)" },
                        { from: 2022, to: 2023, label: "Demsco · Data Analyst",   color: "#5e6342" },
                        { from: 2023, to: 2026, label: "SessionHub · BI Analyst", color: "#C7522A" },
                        { from: 2024, to: 2026, label: "Independent · Freelance", color: "#1a1a1a" },
                      ]}
                    />
                  </div>
                </div>

                {/* experience */}
                <div>
                  <div className="eyebrow opacity-55 mb-4">Experience</div>
                  <ol className="space-y-8">
                    {EXPERIENCE.map((e, i) => (
                      <li key={i} className="grid grid-cols-12 gap-4 pb-8 dash-div last:border-0">
                        <div className="col-span-12 md:col-span-3 mono text-[10px] uppercase tracking-widest text-ink/55">
                          {e.period}
                          <div className="text-ink/40 mt-1">{e.location}</div>
                        </div>
                        <div className="col-span-12 md:col-span-9">
                          <div className="flex items-baseline justify-between gap-3 flex-wrap">
                            <h3 className="display text-2xl">{e.role}</h3>
                            <span className="text-sm text-ink/65">{e.company}</span>
                          </div>
                          <ul className="mt-3 space-y-1.5">
                            {e.bullets.map((b, bi) => (
                              <li key={bi} className="flex gap-3 text-[14px] leading-relaxed text-ink/75">
                                <span className="text-brick mono">▸</span><span>{b}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* selected projects (cross-reference to /works) */}
                <div>
                  <div className="eyebrow opacity-55 mb-4">Selected Projects</div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {SELECTED_WORKS.map(w => (
                      <div key={w.id} className="rounded-2xl p-4 border border-ink/10 bg-paper2/50">
                        <div className="mono text-[10px] uppercase tracking-widest opacity-50 mb-1">No.{w.no}</div>
                        <div className="font-bold text-sm leading-tight">{w.title}</div>
                        <div className="mono text-[10px] uppercase tracking-widest opacity-55 mt-1">{w.tag}</div>
                      </div>
                    ))}
                  </div>
                  <button onClick={() => go("works")} className="mt-4 inline-flex items-center gap-2 mono text-[11px] uppercase tracking-widest text-ink hover:text-brick">
                    View full archive <ArrowUR size={12} />
                  </button>
                </div>

                {/* awards */}
                <div>
                  <div className="eyebrow opacity-55 mb-4">Recognition</div>
                  <ul className="space-y-3">
                    {AWARDS.map((a) => (
                      <li key={a.id} className="grid grid-cols-12 gap-4 items-start pb-3 dash-div last:border-0">
                        <div className="col-span-2 mono text-[10px] uppercase tracking-widest text-ink/55">{a.year}</div>
                        <div className="col-span-10">
                          <div className="font-bold">{a.title}</div>
                          <div className="text-sm text-ink/65">{a.body}</div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* signature */}
                <div className="pt-6 dash-div" />
                <div className="flex items-center justify-between mono text-[10px] uppercase tracking-widest opacity-60">
                  <span>Document · u-afang-resume-2026.pdf</span>
                  <span>Page 1 / 1 · printed on demand</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Row({ label, children }) {
  return (
    <div className="grid grid-cols-12 gap-2 dash-div pb-1.5">
      <div className="col-span-4 mono text-[10px] uppercase tracking-widest text-ink/55 pt-1">{label}</div>
      <div className="col-span-8 text-ink/90">{children}</div>
    </div>
  );
}

window.ResumePage = ResumePage;
