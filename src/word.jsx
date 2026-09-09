/* v5 motion — scroll-driven word fill, scroll-spun media, typed curtain.
   Runs off one rAF-throttled scroll pass over anything marked [data-fill]
   or [data-spin], so components only need the attribute. */

(function () {
  const WORD = "mw";
  let nodes = [];

  function split(el) {
    if (el.dataset.mwDone) return;
    const walk = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const texts = [];
    while (walk.nextNode()) texts.push(walk.currentNode);
    texts.forEach((t) => {
      if (!t.nodeValue.trim()) return;
      const frag = document.createDocumentFragment();
      t.nodeValue.split(/(\s+)/).forEach((chunk) => {
        if (!chunk) return;
        if (/^\s+$/.test(chunk)) { frag.appendChild(document.createTextNode(chunk)); return; }
        const word = document.createElement("span");
        word.style.whiteSpace = "nowrap";
        for (const ch of chunk) {
          const s = document.createElement("span");
          s.className = WORD;
          s.textContent = ch;
          word.appendChild(s);
        }
        frag.appendChild(word);
      });
      t.parentNode.replaceChild(frag, t);
    });
    el.dataset.mwDone = "1";
  }

  function collect() {
    nodes = [];
    document.querySelectorAll("[data-fill]").forEach((el) => {
      split(el);
      nodes.push({ el, words: el.querySelectorAll("." + WORD), kind: "fill" });
    });
    document.querySelectorAll("[data-spin]").forEach((el) => {
      nodes.push({ el, kind: "spin", amt: parseFloat(el.dataset.spin) || 22 });
    });
    document.querySelectorAll("[data-flip]").forEach((el) => {
      nodes.push({ el, kind: "flip" });
    });
    nodes.forEach((n) => { n.v = undefined; });
    kick();
  }

  /* Every node eases toward its scroll target on a permanent rAF loop, so the
     motion keeps moving between scroll events instead of stepping with them. */
  function target(n, vh) {
    const r = n.el.getBoundingClientRect();
    if (n.kind === "fill") {
      const start = vh * 0.95, end = vh * 0.40;
      return Math.max(0, Math.min(1, (start - r.top) / (start - end)));
    }
    if (n.kind === "flip") {
      const start = vh * 0.95, end = vh * 0.45;
      return Math.max(0, Math.min(1, (start - r.top) / (start - end)));
    }
    return Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / vh));
  }

  function paint(n) {
    if (n.kind === "fill") {
      const total = n.words.length;
      if (!total) return;
      /* A short, crisp wave = a defined "fill front" sweeping the line as you
         scroll, rather than a soft global fade. Letters sit as faint grey
         (0.08) and fill to solid ink as the front passes — monochrome and
         restrained, the way Apple reveals headline copy. */
      const spread = 7;
      for (let i = 0; i < total; i++) {
        const local = Math.max(0, Math.min(1, (n.v * (total + spread) - i) / spread));
        const e = local * local * (3 - 2 * local);
        n.words[i].style.opacity = (0.08 + 0.92 * e).toFixed(3);
      }
    } else if (n.kind === "flip") {
      const e = n.v * n.v * (3 - 2 * n.v);
      n.el.style.transform = "rotateY(" + ((1 - e) * -152).toFixed(2) + "deg)";
      n.el.style.opacity = (0.25 + 0.75 * e).toFixed(3);
    } else {
      n.el.style.transform = "rotate(" + (n.v * n.amt).toFixed(2) + "deg)";
    }
  }

  let running = false;
  function pass() {
    const vh = window.innerHeight;
    let moving = false;
    for (const n of nodes) {
      const t = target(n, vh);
      if (n.v === undefined) n.v = t;
      const d = t - n.v;
      if (Math.abs(d) > 0.0006) { n.v += d * 0.12; moving = true; } else n.v = t;
      paint(n);
    }
    if (moving || pass._hot > 0) { pass._hot = Math.max(0, (pass._hot || 0) - 1); requestAnimationFrame(pass); }
    else running = false;
  }
  function kick() { pass._hot = 90; if (!running) { running = true; requestAnimationFrame(pass); } }

  window.addEventListener("scroll", kick, { passive: true });
  window.addEventListener("resize", kick);
  /* the app re-renders whole pages, so re-collect after paint */
  const mo = new MutationObserver(() => { clearTimeout(mo._t); mo._t = setTimeout(collect, 60); });
  const boot = () => {
    const root = document.getElementById("root");
    if (!root) return setTimeout(boot, 80);
    mo.observe(root, { childList: true, subtree: true });
    collect();
    kick();
  };
  boot();
  window.__mwRefresh = collect;
})();

/* Typed-out text for the curtain. */
function useTyped(text, on, speed = 42) {
  const { useState, useEffect } = React;
  const [n, setN] = useState(on ? 0 : text.length);
  useEffect(() => {
    if (!on) { setN(text.length); return; }
    setN(0);
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setN(i);
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, on, speed]);
  return text.slice(0, n);
}

Object.assign(window, { useTyped });
