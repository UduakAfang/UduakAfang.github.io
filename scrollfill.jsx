/* eslint-disable no-undef */
/* Scroll-driven outline -> filled text. Lets section titles "draw in"
   as the user scrolls into them. */

const { useState: useStateS, useEffect: useEffectS, useRef: useRefS } = React;

/**
 * <ScrollFillText> — renders text in two layers:
 *   outline (stroked, no fill) on top, hidden when fully filled
 *   filled  (solid color) beneath, clipped to a horizontal rect that grows
 *
 * Props:
 *   children   — the string to render
 *   fill       — the fill color when "filled"
 *   stroke     — outline color
 *   serif      — optional inner serif italic span treatment (the brick word)
 */
function ScrollFillText({ children, fill = "#1a1a1a", stroke = "#1a1a1a", className = "", style = {}, threshold = 0.85 }) {
  const ref = useRefS(null);
  const [progress, setProgress] = useStateS(0);

  useEffectS(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // fill from the moment the title enters the bottom 80% of viewport,
        // complete by the moment it crosses 50% of viewport.
        const start = vh * threshold;
        const end   = vh * 0.30;
        const t     = Math.max(0, Math.min(1, (start - r.top) / (start - end)));
        setProgress(t);
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, [threshold]);

  return (
    <span
      ref={ref}
      className={"sft inline-block relative " + className}
      style={{
        ...style,
        color: stroke,
        WebkitTextStrokeColor: stroke,
        WebkitTextStrokeWidth: "1.2px",
        WebkitTextFillColor: "transparent",
      }}
    >
      {/* outline (this element's own color) */}
      <span>{children}</span>
      {/* filled overlay */}
      <span
        aria-hidden
        className="absolute inset-0 overflow-hidden whitespace-nowrap pointer-events-none"
        style={{
          width: progress * 100 + "%",
          color: fill,
          WebkitTextStrokeColor: "transparent",
          WebkitTextStrokeWidth: "0px",
          WebkitTextFillColor: fill,
        }}
      >
        {children}
      </span>
    </span>
  );
}

window.ScrollFillText = ScrollFillText;
