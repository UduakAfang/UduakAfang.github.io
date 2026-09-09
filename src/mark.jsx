/* v4 theme — palettes carry global colours AND per-card tints */

const PAL4 = {
  studio: {
    label: "Studio (bone & red)",
    swatch: ["#ebe9df", "#2e2c25", "#d34530"],
    light: {
      paper: "235 233 223", paper2: "245 244 244", ink: "46 44 37",
      accent: "211 69 48", accent2: "133 124 106",
      cards: [{ bg: "#f5f4f4", fg: "dark" }, { bg: "#151410", fg: "light" }, { bg: "#d34530", fg: "light" }],
      soft: ["#e3e0d4", "#f0eee6"],
    },
    dark: {
      paper: "21 20 16", paper2: "31 29 24", ink: "235 233 223",
      accent: "224 92 68", accent2: "156 146 126",
      cards: [{ bg: "#242219", fg: "light" }, { bg: "#0c0b09", fg: "light" }, { bg: "#b8351f", fg: "light" }],
      soft: ["#1e1c17", "#181712"],
    },
  },
};

PAL4.warm = {
  label: "Warm (bone & rust)",
  swatch: ["#f4efe6", "#231f1c", "#d2552b"],
  light: {
    paper: "244 239 230", paper2: "235 229 218", ink: "35 31 28",
    accent: "197 74 34", accent2: "94 106 76",
    cards: [{ bg: "#ece5d8", fg: "dark" }, { bg: "#e2e6da", fg: "dark" }, { bg: "#c54a22", fg: "light" }],
    soft: ["#eee7db", "#e7e9de"],
  },
  dark: {
    paper: "26 23 21", paper2: "35 31 28", ink: "238 232 222",
    accent: "226 116 74", accent2: "150 162 118",
    cards: [{ bg: "#2b2622", fg: "light" }, { bg: "#252a22", fg: "light" }, { bg: "#9c3a18", fg: "light" }],
    soft: ["#241f1c", "#20231d"],
  },
};

/* White-based sets — a clean paper with one committed accent each. */
function whitePal(label, sw, accent, accent2, darkAccent, tints) {
  return {
    label, swatch: sw,
    light: {
      paper: "255 255 255", paper2: "245 245 243", ink: "18 18 20",
      accent, accent2,
      cards: tints, soft: ["#f6f6f4", "#f1f1ef"],
    },
    dark: {
      paper: "16 17 19", paper2: "24 25 28", ink: "234 234 232",
      accent: darkAccent, accent2,
      cards: [{ bg: "#1e2029", fg: "light" }, { bg: "#0e0f11", fg: "light" }, { bg: "#252730", fg: "light" }, { bg: "#1b2420", fg: "light" }, { bg: "#2a2320", fg: "light" }, { bg: "#17222b", fg: "light" }],
      soft: ["#1a1b1e", "#171819"],
    },
  };
}

PAL4.lumen = whitePal("Lumen (white & lime)", ["#ffffff", "#0d0d0d", "#b6e21a"],
  "150 200 20", "118 122 110", "198 240 60",
  [{ bg: "#f4f7e8", fg: "dark" }, { bg: "#d6f56a", fg: "dark" }, { bg: "#0d0d0d", fg: "light" },
   { bg: "#e9eff8", fg: "dark" }, { bg: "#f6ead2", fg: "dark" }, { bg: "#3f4d12", fg: "light" }]);

PAL4.cobalt = whitePal("Cobalt (white & blue)", ["#ffffff", "#121214", "#1f4fe0"],
  "31 79 224", "120 126 140", "122 158 255",
  [{ bg: "#f8e2c5", fg: "dark" }, { bg: "#f5f5f7", fg: "dark" }, { bg: "#f6643e", fg: "light" },
   { bg: "#eef1fb", fg: "dark" }, { bg: "#1f4fe0", fg: "light" }, { bg: "#121214", fg: "light" }]);
/* The three given tones also carry Cobalt's secondary accent and soft cards, so
   the sand and coral show up beyond the project cards. */
PAL4.cobalt.light.accent2 = "216 78 44";
PAL4.cobalt.light.soft = ["#fdf3e6", "#f5f5f7"];
PAL4.cobalt.dark.accent2 = "246 122 88";

PAL4.forest = whitePal("Forest (white & green)", ["#ffffff", "#101613", "#1f7a4c"],
  "26 108 68", "130 140 128", "94 200 148",
  [{ bg: "#eaf4ee", fg: "dark" }, { bg: "#1f7a4c", fg: "light" }, { bg: "#101613", fg: "light" },
   { bg: "#f1ead6", fg: "dark" }, { bg: "#d8e6ab", fg: "dark" }, { bg: "#2b4a54", fg: "light" }]);

/* Snow variants — same ink, accents and card tints as Warm and Studio, but the
   page paper is a near-white #fcfcfc so the tinted panels do the warming. */
PAL4.warmsnow = {
  label: "Warm Snow (snow, matcha & coffee)",
  swatch: ["#fcfcfc", "#4f3a2e", "#dfe7c8"],
  light: {
    paper: "252 252 252", paper2: "243 238 230", ink: "35 31 28",
    accent: "197 74 34", accent2: "92 110 66",
    cards: [{ bg: "#dfe7c8", fg: "dark" }, { bg: "#4f3a2e", fg: "light" }, { bg: "#e9b153", fg: "dark" },
            { bg: "#f0e6d6", fg: "dark" }, { bg: "#2f4f42", fg: "light" }, { bg: "#c54a22", fg: "light" }],
    soft: ["#eef2e2", "#f7efe2"],
  },
  dark: { ...PAL4.warm.dark, cards: [{ bg: "#2b2622", fg: "light" }, { bg: "#252a22", fg: "light" }, { bg: "#9c3a18", fg: "light" }, { bg: "#332b24", fg: "light" }, { bg: "#1f2a24", fg: "light" }, { bg: "#4a3a1c", fg: "light" }] },
};

PAL4.studiosnow = {
  label: "Studio Snow (snow, pine & red)",
  swatch: ["#fcfcfc", "#1e3a31", "#d34530"],
  light: {
    paper: "252 252 252", paper2: "237 235 226", ink: "46 44 37",
    accent: "211 69 48", accent2: "47 82 68",
    cards: [{ bg: "#1e3a31", fg: "light" }, { bg: "#f8e2c5", fg: "dark" }, { bg: "#d34530", fg: "light" },
            { bg: "#e7ecdf", fg: "dark" }, { bg: "#3b2b26", fg: "light" }, { bg: "#f6643e", fg: "light" }],
    soft: ["#e9efe8", "#f4ecdd"],
  },
  dark: { ...PAL4.studio.dark, cards: [{ bg: "#1b2a24", fg: "light" }, { bg: "#242219", fg: "light" }, { bg: "#b8351f", fg: "light" }, { bg: "#22271f", fg: "light" }, { bg: "#2c211c", fg: "light" }, { bg: "#4a3a1c", fg: "light" }] },
};

function resolvePal(key, dark) {
  const p = PAL4[key] || PAL4.studiosnow;
  return p[dark ? "dark" : "light"];
}

function applyPal4(key, dark) {
  const p = resolvePal(key, dark);
  const r = document.documentElement.style;
  document.documentElement.setAttribute("data-dark", dark ? "1" : "0");
  r.setProperty("--c-paper", p.paper);
  r.setProperty("--c-paper2", p.paper2);
  r.setProperty("--c-ink", p.ink);
  r.setProperty("--c-accent", p.accent);
  r.setProperty("--c-accent2", p.accent2);
  /* Panel colour for the "What I do" block: pure white only when the page paper
     is warm/tinted enough for white to read as a distinct layer. On white-paper
     palettes it falls back to paper2 so the panel still separates. */
  const chan = p.paper.split(" ").map(Number);
  const nearWhite = Math.min.apply(null, chan) >= 253;
  r.setProperty("--c-card", dark || nearWhite ? p.paper2 : "255 255 255");
  /* One step down from --c-card, so stacked panels read as different levels. */
  r.setProperty("--c-card2", dark ? p.paper : p.paper2);
  /* One barely-there step off the page, to mark a section change. */
  const bandLight = chan.map((v) => Math.max(0, v - 7)).join(" ");
  r.setProperty("--c-band", dark ? p.paper2 : bandLight);
}

/* Tinted copy — ~blue~ and ^olive^ words, the way the reference sites
   colour individual words inside a paragraph. Keeps body text feeling hand-set. */
function T({ children, light }) {
  /* Only marker-annotated strings get split; anything else renders untouched. */
  if (typeof children !== "string") return <>{children}</>;
  const parts = children.split(/(~[^~]+~|\^[^^]+\^)/g);
  return (
    <React.Fragment>
      {parts.map((p, i) => {
        const tinted = (p.startsWith("~") && p.endsWith("~") || p.startsWith("^") && p.endsWith("^")) && p.length > 2;
        if (!tinted) return <React.Fragment key={i}>{p}</React.Fragment>;
        const body = p.slice(1, -1);
        if (light) return <span key={i} style={{ opacity: 1, fontWeight: 600 }}>{body}</span>;
        return <span key={i} className={p.startsWith("~") ? "text-accent" : "text-accent2"}>{body}</span>;
      })}
    </React.Fragment>
  );
}

/* Sig — the signature IS the mark now. No monogram. */
/* First name in ink, last name in accent — the two-tone signature. */
function Mark({ size = 46, className = "", flip = false }) {
  const a = flip ? "rgb(var(--c-accent))" : "rgb(var(--c-ink))";
  const b = flip ? "rgb(var(--c-ink))" : "rgb(var(--c-accent))";
  return (
    <span className={"sig inline-block select-none whitespace-nowrap " + className}
          style={{ fontSize: size * 1.85, lineHeight: 1.05 }}>
      <span style={{ color: a }}>Uduak</span>{" "}<span style={{ color: b }}>Afang</span>
    </span>
  );
}

/* Reveals are driven by scroll position, not IntersectionObserver: IO does not
   fire reliably inside the preview iframe, and a rAF-throttled scroll pass is
   both dependable and cheaper than observing the whole document for mutations. */
function useReveal4(dep) {
  const { useEffect } = React;
  useEffect(() => {
    let queued = 0, alive = true;
    const pass = () => {
      queued = 0;
      if (!alive) return;
      const fold = window.innerHeight * 0.96;
      document.querySelectorAll(".reveal:not(.in)").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.height && r.top < fold) el.classList.add("in");
      });
    };
    const kick = () => { if (!queued) queued = requestAnimationFrame(pass); };
    pass();
    window.addEventListener("scroll", kick, { passive: true });
    window.addEventListener("resize", kick);
    const t = setInterval(kick, 400);
    return () => {
      alive = false;
      cancelAnimationFrame(queued);
      clearInterval(t);
      window.removeEventListener("scroll", kick);
      window.removeEventListener("resize", kick);
    };
  }, [dep]);
}

Object.assign(window, { PAL4, resolvePal, applyPal4, T, Mark, useReveal4 });
