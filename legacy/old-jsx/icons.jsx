/* eslint-disable no-undef */
/* Real, simplified SVG marks for the tools Uduak uses. All single-color
   (currentColor) so they sit calmly inside the design system. */

function I(props, children) {
  return React.createElement(
    "svg",
    { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round", width: props.size || 22, height: props.size || 22, className: props.className || "" },
    children
  );
}

const ICONS = {
  Tableau: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={p.size || 22} height={p.size || 22} className={p.className}>
      <path d="M11 2h2v3h3v2h-3v3h-2V7H8V5h3z"/>
      <path d="M11 14h2v3h3v2h-3v3h-2v-3H8v-2h3z" opacity=".55"/>
      <path d="M2 11h3V8h2v3h3v2H7v3H5v-3H2z" opacity=".8"/>
      <path d="M14 11h3V8h2v3h3v2h-3v3h-2v-3h-3z" opacity=".8"/>
    </svg>
  ),
  SQL: (p) => I(p, [
    <ellipse key="a" cx="12" cy="5.5" rx="8" ry="2.8" />,
    <path key="b" d="M4 5.5V18c0 1.6 3.6 2.9 8 2.9s8-1.3 8-2.9V5.5" />,
    <path key="c" d="M4 12c0 1.6 3.6 2.9 8 2.9s8-1.3 8-2.9" />,
  ]),
  BigQuery: (p) => I(p, [
    <circle key="a" cx="10" cy="10" r="6.4" />,
    <line key="b" x1="14.6" y1="14.6" x2="20" y2="20" strokeWidth="2.2"/>,
    <rect key="c" x="7" y="11" width="1.5" height="3.4" rx=".5" fill="currentColor" />,
    <rect key="d" x="9.5" y="8.5" width="1.5" height="5.9" rx=".5" fill="currentColor" />,
    <rect key="e" x="12" y="10" width="1.5" height="4.4" rx=".5" fill="currentColor" />,
  ]),
  Python: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={p.size || 22} height={p.size || 22} className={p.className}>
      <path d="M11.9 2C9.14 2 7.5 3.12 7.5 4.5V7H12v1H6C4.07 8 2.5 9.57 2.5 11.5S4.07 15 6 15h1.5v-2.5C7.5 11.12 8.62 10 10 10h4c1.38 0 2.5-1.12 2.5-2.5V4.5C16.5 3.12 14.66 2 11.9 2zm-2 1.75a.75.75 0 110 1.5.75.75 0 010-1.5z" />
      <path d="M12.1 22c2.76 0 4.4-1.12 4.4-2.5V17H12v-1h6c1.93 0 3.5-1.57 3.5-3.5S19.93 9 18 9h-1.5v2.5c0 1.38-1.12 2.5-2.5 2.5h-4c-1.38 0-2.5 1.12-2.5 2.5v3C7.5 20.88 9.34 22 12.1 22zm2-1.75a.75.75 0 110-1.5.75.75 0 010 1.5z" opacity=".55"/>
    </svg>
  ),
  PostgreSQL: (p) => I(p, [
    <path key="a" d="M17.5 15.5c.5-2 .6-4.5.5-7a6 6 0 00-12 0c.1 3 .6 5 1 7" />,
    <path key="b" d="M8 15.5c0 1.5-.5 3.2-1 4.8" />,
    <path key="c" d="M16 15.5c.2 1.6.7 2.6 1.5 3.5" />,
    <circle key="d" cx="10" cy="10" r=".9" fill="currentColor" />,
    <circle key="e" cx="14" cy="10" r=".9" fill="currentColor" />,
  ]),
  "Power BI": (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={p.size || 22} height={p.size || 22} className={p.className}>
      <rect x="3.5" y="14" width="3" height="6" rx="1" opacity=".55"/>
      <rect x="8" y="10" width="3" height="10" rx="1" opacity=".75"/>
      <rect x="12.5" y="6" width="3" height="14" rx="1" opacity=".9"/>
      <rect x="17" y="3.5" width="3" height="16.5" rx="1"/>
    </svg>
  ),
  dbt: (p) => I(p, [
    <circle key="a" cx="12" cy="12" r="9" />,
    <path key="b" d="M9 8h2a3 3 0 010 6H9V8z" fill="currentColor" />,
    <line key="c" x1="9" y1="12" x2="15" y2="12" strokeWidth="2"/>,
  ]),
  "ETL / dbt": (p) => I(p, [
    <circle key="a" cx="12" cy="12" r="9" />,
    <path key="b" d="M9 8h2a3 3 0 010 6H9V8z" fill="currentColor" />,
  ]),
  n8n: (p) => I(p, [
    <circle key="a" cx="5" cy="8" r="2.4" />,
    <circle key="b" cx="19" cy="8" r="2.4" />,
    <circle key="c" cx="5" cy="16" r="2.4" />,
    <circle key="d" cx="19" cy="16" r="2.4" />,
    <line key="e" x1="7.4" y1="8" x2="16.6" y2="8" />,
    <line key="f" x1="7.4" y1="16" x2="16.6" y2="16" />,
    <line key="g" x1="5" y1="10.4" x2="5" y2="13.6" />,
    <line key="h" x1="19" y1="10.4" x2="19" y2="13.6" />,
  ]),
  Git: (p) => I(p, [
    <circle key="a" cx="7" cy="6.5" r="2" />,
    <circle key="b" cx="17" cy="6.5" r="2" />,
    <circle key="c" cx="12" cy="17.5" r="2" />,
    <path key="d" d="M7 8.5v5a4 4 0 004 4" />,
    <path key="e" d="M17 8.5v3a4 4 0 01-4 4" />,
  ]),
  Figma: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={p.size || 22} height={p.size || 22} className={p.className}>
      <path d="M8 2h4v6H8a3 3 0 010-6z" opacity=".9"/>
      <path d="M12 2h4a3 3 0 010 6h-4V2z" opacity=".75"/>
      <path d="M8 8h4v6H8a3 3 0 010-6z" opacity=".55"/>
      <circle cx="14" cy="11" r="3"/>
      <path d="M8 14h4v5a3 3 0 11-3-3" opacity=".85" fill="none" stroke="currentColor" strokeWidth="1.6"/>
    </svg>
  ),
  Supabase: (p) => (
    <svg viewBox="0 0 24 24" fill="currentColor" width={p.size || 22} height={p.size || 22} className={p.className}>
      <path d="M13.5 21.5c-.3.4-.9.1-.9-.4V13h6.8c.7 0 1.1-.8.6-1.3L11.5 2.5c-.3-.4-.9-.1-.9.4V11H3.8c-.7 0-1.1.8-.6 1.3l8.3 9.2z" />
    </svg>
  ),
  Excel: (p) => I(p, [
    <rect key="a" x="3" y="4" width="18" height="16" rx="2" />,
    <path key="b" d="M9 8l6 8M15 8l-6 8" />,
  ]),
  "Prompt Engineering": (p) => I(p, [
    <path key="a" d="M3 7l4 5-4 5" />,
    <line key="b" x1="11" y1="17" x2="21" y2="17" />,
    <line key="c" x1="11" y1="12" x2="18" y2="12" />,
    <line key="d" x1="11" y1="7"  x2="21" y2="7"  />,
  ]),
};

function ToolIcon({ name, size = 22, className = "" }) {
  const C = ICONS[name];
  if (!C) {
    // fallback: monogram
    return (
      <span className={"inline-flex items-center justify-center rounded-md bg-ink/10 font-bold mono text-[10px] uppercase " + className}
            style={{ width: size, height: size }}>
        {(name || "?")[0]}
      </span>
    );
  }
  return <C size={size} className={className} />;
}

window.ToolIcon = ToolIcon;
window.ICONS = ICONS;
