/** Static Tailwind build — replaces the runtime Play CDN so mobile Safari
    doesn't generate CSS at load. Mirrors the old inline config. */
module.exports = {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        ink:     "rgb(var(--c-ink) / <alpha-value>)",
        paper:   "rgb(var(--c-paper) / <alpha-value>)",
        paper2:  "rgb(var(--c-paper2) / <alpha-value>)",
        accent:  "rgb(var(--c-accent) / <alpha-value>)",
        accent2: "rgb(var(--c-accent2) / <alpha-value>)",
      },
      fontFamily: {
        sans:  ["Satoshi", "system-ui", "sans-serif"],
        mono:  ['"JetBrains Mono"', "ui-monospace", "monospace"],
        serif: ['"Instrument Serif"', "serif"],
      },
    },
  },
  plugins: [],
};
