/* eslint-disable no-undef */
/* Cards — the "Discovering peace" pattern with numbered indicator. */

const { useState } = React;

function ArrowUR({ size = 14, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function Plus({ size = 14, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function Pin({ size = 12, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s-7-6-7-12a7 7 0 1 1 14 0c0 6-7 12-7 12Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

/* ─────── Selected-Work card (Discovering peace pattern, numbered) ───────
   Equal heights via h-full + flex column. Title clamps to two lines, blurb
   to three lines so every card is the same height. */
function SelectedWorkCard({ work, onOpen }) {
  const [hover, setHover] = useState(false);
  const cardRef = React.useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setTilt({ rx: (y - 0.5) * -8, ry: (x - 0.5) * 8 });
  };
  const handleMouseLeave = () => { setHover(false); setTilt({ rx: 0, ry: 0 }); };

  return (
    <article
      ref={cardRef}
      className="relative bg-white rounded-[28px] p-7 flex flex-col h-full"
      style={{
        boxShadow: hover
          ? "0 24px 48px -16px rgba(26,26,26,.22), 0 1px 0 rgba(26,26,26,.06)"
          : "0 1px 0 rgba(26,26,26,.06), 0 18px 40px -28px rgba(26,26,26,.25)",
        transform: `perspective(800px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transition: hover
          ? "box-shadow 0.4s ease, transform 0.15s ease"
          : "box-shadow 0.4s ease, transform 0.5s cubic-bezier(0.2,0.6,0.2,1)",
        willChange: "transform",
      }}
      onMouseEnter={() => setHover(true)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* top row */}
      <header className="flex items-center justify-between mb-6 gap-2">
        <span className="tag-pill truncate">{work.tag}</span>
        <div className="flex items-center gap-2 mono text-[10px] uppercase tracking-widest opacity-70 flex-shrink-0">
          <span className="opacity-50">{work.no}</span>
          <span className="inline-block w-px h-3 bg-ink/30" />
          <span>{work.year}</span>
        </div>
      </header>

      {/* heading — clamp to 2 lines so heights match */}
      <h3
        className="text-[28px] md:text-[30px] leading-[1.08] font-medium tracking-tight"
        style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", minHeight: "2.16em" }}
      >
        {work.title}
      </h3>

      {/* blurb — clamp to 3 lines */}
      <p
        className="mt-3 text-[15px] leading-relaxed text-ink/65"
        style={{ display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}
      >
        {work.blurb}
      </p>

      {/* image well */}
      <div className="mt-6 relative overflow-hidden rounded-[22px] bg-paper2 border border-ink/10" style={{ aspectRatio: "4 / 3" }}>
        <img
          src={work.image}
          alt={work.title}
          loading="eager"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-out"
          style={{ transform: hover ? "scale(1.04)" : "scale(1.0)" }}
        />
        {/* gradient for legibility */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
             style={{ background: "linear-gradient(to top, rgba(0,0,0,.55), rgba(0,0,0,0))" }} />
        {/* location pin */}
        <div className="absolute left-4 bottom-4 right-4 flex items-end justify-between gap-2 text-white">
          <div className="flex items-center gap-2 min-w-0">
            <Pin size={14} />
            <div className="leading-tight min-w-0">
              <div className="text-[12px] font-semibold truncate">{work.client}</div>
              <div className="mono text-[10px] opacity-80 uppercase tracking-widest">{work.year}</div>
            </div>
          </div>
          {work.url && (
            <span className="mono text-[10px] uppercase tracking-widest bg-white/15 backdrop-blur px-2 py-1 rounded-full flex-shrink-0">
              {work.url}
            </span>
          )}
        </div>
      </div>

      {/* See case study */}
      <button
        onClick={() => onOpen && onOpen(work)}
        className="mt-6 inline-flex items-center justify-between gap-2 w-full px-5 py-3 rounded-full border border-ink/15 hover:border-ink hover:bg-ink hover:text-paper transition-colors group"
      >
        <span className="mono text-[11px] uppercase tracking-[0.22em]">See case study</span>
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-ink text-paper group-hover:bg-paper group-hover:text-ink transition-colors">
          <ArrowUR size={13} />
        </span>
      </button>
    </article>
  );
}

/* ─────── Compact archive card (works page row) ─────── */
function ArchiveCard({ work, onOpen }) {
  return (
    <article
      onClick={() => onOpen && onOpen(work)}
      className="card-lift bg-white rounded-[22px] p-4 cursor-pointer flex flex-col h-full"
      style={{ boxShadow: "0 1px 0 rgba(26,26,26,.06), 0 14px 30px -28px rgba(26,26,26,.25)" }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="mono text-[10px] uppercase tracking-widest text-ink/55">No.{work.no}</span>
        <span className="mono text-[10px] uppercase tracking-widest text-ink/55">{work.year}</span>
      </div>
      <div className="relative overflow-hidden rounded-[16px] bg-paper2" style={{ aspectRatio: "16 / 10" }}>
        <img src={work.image} alt={work.title} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" />
      </div>
      <div className="flex items-center gap-2 mt-3">
        <span className="tag-pill ghost">{work.tag.split("·")[0].trim()}</span>
      </div>
      <h4
        className="mt-2 text-lg leading-tight font-semibold"
        style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden", minHeight: "2.4em" }}
      >
        {work.title}
      </h4>
      <p
        className="text-[12.5px] leading-snug text-ink/60 mt-1"
        style={{ display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}
      >
        {work.blurb}
      </p>
      <div className="mt-auto pt-3 inline-flex items-center gap-2 mono text-[10px] uppercase tracking-widest text-ink hover:text-brick">
        Open <ArrowUR size={11} />
      </div>
    </article>
  );
}

/* ──── enhanced case modal with the user's requested detail ──── */
function CaseModal({ work, onClose }) {
  if (!work) return null;
  const hasProcess = Array.isArray(work.process) && work.process.length > 0;
  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-ink/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-paper rounded-[28px] w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-ink/10 hover:bg-ink/20 flex items-center justify-center">
          <Plus size={16} className="rotate-45" />
        </button>

        {/* Cover */}
        <div className="aspect-[16/9] w-full bg-paper2 overflow-hidden rounded-t-[28px] relative">
          <img src={work.image} alt={work.title} className="w-full h-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none"
               style={{ background: "linear-gradient(to top, rgba(0,0,0,.7), rgba(0,0,0,0))" }} />
          <div className="absolute left-6 bottom-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-3">
              <span className="tag-pill">{work.tag}</span>
              <span className="mono text-[10px] uppercase tracking-widest opacity-80">{work.year} · {work.client}</span>
            </div>
            <h3 className="display text-5xl md:text-6xl">{work.title}</h3>
          </div>
        </div>

        <div className="p-8 md:p-10 space-y-8">
          <p className="text-base md:text-lg leading-relaxed text-ink/75">{work.blurb}</p>

          {/* Quick facts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              ["Role",   "BI Analyst · Builder"],
              ["Year",   work.year],
              ["Client", work.client],
              ["Live at", work.url || "Internal · case study"],
            ].map(([k, v], i) => (
              <div key={i} className="p-4 rounded-2xl bg-paper2/60 border border-ink/10">
                <div className="mono text-[10px] uppercase tracking-widest opacity-55">{k}</div>
                <div className="mt-1 text-ink font-semibold text-sm leading-snug">{v}</div>
              </div>
            ))}
          </div>

          {hasProcess && (
            <div>
              <div className="eyebrow opacity-55 mb-4">The process</div>
              <ol className="space-y-3">
                {work.process.map((p) => (
                  <li key={p.n} className="grid grid-cols-12 gap-4 items-start p-5 rounded-2xl bg-white border border-ink/10">
                    <div className="col-span-2 md:col-span-1">
                      <div className="display text-3xl text-brick leading-none">{p.n}</div>
                    </div>
                    <div className="col-span-10 md:col-span-11">
                      <div className="font-bold">{p.t}</div>
                      <p className="text-sm leading-relaxed text-ink/70 mt-1">{p.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {work.stack && (
            <div>
              <div className="eyebrow opacity-55 mb-3">Stack</div>
              <div className="flex flex-wrap gap-2">
                {work.stack.map((s) => (
                  <span key={s} className="tag-pill ghost">{s}</span>
                ))}
              </div>
            </div>
          )}

          {work.url && (
            <a href={`https://${work.url}`} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center justify-between gap-2 px-5 py-3 rounded-full bg-ink text-paper hover:bg-brick transition-colors group">
              <span className="mono text-[11px] uppercase tracking-[0.22em]">Visit · {work.url}</span>
              <ArrowUR size={13} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { SelectedWorkCard, ArchiveCard, CaseModal, ArrowUR, Plus, Pin });
