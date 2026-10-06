/* Scroll motion, site-wide. GSAP + ScrollTrigger (loaded in index.html) drive
   everything here; if they fail to load, or the visitor prefers reduced motion,
   the page stays exactly as it renders without them.

   One hook, re-run on every page change:
   - the hero drifts up and softens as you scroll past it
   - cards rise in with a small tilt that settles, a few at a time
   - the work inside each card drifts slightly against the scroll (parallax)
   - KPI numbers count up the first time they appear
   - timeline bars grow with the scroll
   - section headings rise in */

function useMotion(page) {
  const { useEffect } = React;
  useEffect(() => {
    const g = window.gsap, ST = window.ScrollTrigger;
    if (!g || !ST) return;
    if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    g.registerPlugin(ST);
    if (window.Flip) g.registerPlugin(window.Flip);

    let ctx;
    // Wait a frame so the new page (swapped in under the curtain) is in the DOM.
    const start = setTimeout(() => {
      ctx = g.context(() => {
        /* Hero: content drifts up and fades a little as it leaves. */
        const hero = document.querySelector(".hero5");
        const heroInner = hero && hero.querySelector(":scope > .grid");
        if (heroInner) {
          g.to(heroInner, { yPercent: -14, opacity: .35, ease: "none",
            scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true } });
        }

        /* Cards: rise in with a tilt that settles. Below-the-fold cards start
           hidden; transforms are cleared afterwards so CSS hover still works. */
        const cards = g.utils.toArray(".pcard2, .popwrap, .wk-kpi, .rs-time, .impact-card");
        const fold = window.innerHeight * .92;
        const later = cards.filter((c) => c.getBoundingClientRect().top > fold);
        g.set(later, { opacity: 0, y: 70, rotation: (i) => (i % 2 ? 2.5 : -2.5) });
        ST.batch(later, {
          start: "top 90%", once: true,
          onEnter: (batch) => g.to(batch, {
            opacity: 1, y: 0, rotation: 0, duration: .95, ease: "back.out(1.4)", stagger: .09,
            onComplete: function () { g.set(this.targets(), { clearProps: "transform,opacity" }); },
          }),
        });

        /* Parallax on the work inside each picture panel. */
        g.utils.toArray(".pshot-in").forEach((el) => {
          g.fromTo(el, { yPercent: 7 }, { yPercent: -7, ease: "none",
            scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true } });
        });

        /* Numbers count up once. */
        g.utils.toArray("[data-count]").forEach((el) => {
          const n = +el.dataset.count, sfx = el.dataset.suffix || "", o = { v: 0 };
          el.textContent = "0" + sfx;
          g.to(o, { v: n, duration: 1.1, ease: "power2.out",
            onUpdate: () => { el.textContent = Math.round(o.v) + sfx; },
            scrollTrigger: { trigger: el, start: "top 92%", once: true } });
        });

        /* Timeline bars grow with the scroll. */
        g.utils.toArray("[data-grow]").forEach((el, i) => {
          g.fromTo(el, { scaleX: 0 }, { scaleX: 1, ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 92%", end: "top 60%", scrub: .6 } });
        });

        /* Section headings rise in. Headings already driven by the [data-fill]
           scroll effect are left to it. */
        g.utils.toArray("h2.claim:not([data-fill]), main h1.claim").forEach((h) => {
          if (h.closest(".hero5") || h.getBoundingClientRect().top < fold) return;
          g.from(h, { y: 46, opacity: 0, duration: .9, ease: "power3.out",
            scrollTrigger: { trigger: h, start: "top 90%", once: true } });
        });
      });
      ST.refresh();
    }, 80);
    const late = setTimeout(() => ST.refresh(), 1200);   // images and fonts settle
    return () => { clearTimeout(start); clearTimeout(late); if (ctx) ctx.revert(); };
  }, [page]);
}

Object.assign(window, { useMotion });
