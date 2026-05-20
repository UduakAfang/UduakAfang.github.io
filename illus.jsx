/* eslint-disable no-undef */
/* Hand-tuned line illustrations for "How I can help you" and the
   Playbook. Single-color SVG, currentColor, ~340x420 viewBox. */

function IllustrationFrame({ children, style }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center text-ink" style={style}>
      <svg viewBox="0 0 340 420" className="w-full h-full" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </div>
  );
}

/* 1 — Dashboards: tablet showing a bar/line dashboard */
function IllusDashboard() {
  return (
    <IllustrationFrame>
      {/* tablet frame */}
      <rect x="36" y="50" width="268" height="320" rx="22" stroke="currentColor"/>
      <rect x="56" y="76" width="228" height="270" rx="10" stroke="currentColor" opacity=".4"/>
      {/* top stats row */}
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x={64 + i*74} y={92} width="56" height="34" rx="6" />
          <line x1={70 + i*74} y1={104} x2={106 + i*74} y2={104} />
          <line x1={70 + i*74} y1={114} x2={94 + i*74} y2={114} opacity=".5"/>
        </g>
      ))}
      {/* big chart */}
      <rect x="64" y="140" width="208" height="120" rx="6" opacity=".6"/>
      {/* bar columns */}
      {[0,1,2,3,4,5,6,7,8,9].map(i => (
        <rect key={i} x={76 + i*19} y={250 - (i*7 + 18)} width="10" height={i*7 + 18} fill="currentColor" />
      ))}
      <path d="M76 244 q24 -38 60 -22 t60 -42 t60 -16" stroke="#C7522A" strokeWidth="1.6" />
      {/* legend */}
      <rect x="64" y="278" width="208" height="60" rx="6" opacity=".4"/>
      {[0,1,2].map(i => (
        <g key={i} transform={`translate(${72 + i*68},296)`}>
          <circle cx="0" cy="0" r="4" fill="currentColor"/>
          <line x1="10" y1="0" x2="50" y2="0" />
          <line x1="10" y1="10" x2="40" y2="10" opacity=".5"/>
        </g>
      ))}
    </IllustrationFrame>
  );
}

/* 2 — SQL / ETL: a flowing pipeline with database cylinders */
function IllusPipeline() {
  return (
    <IllustrationFrame>
      {/* left DB */}
      <g transform="translate(40,140)">
        <ellipse cx="36" cy="0" rx="34" ry="10" />
        <path d="M2 0 V90 a 34 10 0 0 0 68 0 V0" />
        <ellipse cx="36" cy="30" rx="34" ry="10" opacity=".5"/>
        <ellipse cx="36" cy="60" rx="34" ry="10" opacity=".3"/>
      </g>
      {/* pipeline arrows */}
      <path d="M120 180 Q170 100 220 180" stroke="#C7522A" strokeWidth="1.8"/>
      <path d="M120 200 Q170 200 220 200" />
      <path d="M120 220 Q170 300 220 220" opacity=".5"/>
      {/* hub node */}
      <circle cx="170" cy="200" r="16" fill="#C7522A"/>
      <path d="M163 200 l5 5 l9 -10" stroke="#f4f1eb" strokeWidth="2"/>
      {/* right outputs */}
      <g transform="translate(238,150)">
        <rect width="60" height="36" rx="6"/>
        <line x1="8" y1="14" x2="40" y2="14"/>
        <line x1="8" y1="22" x2="32" y2="22" opacity=".5"/>
      </g>
      <g transform="translate(238,200)">
        <rect width="60" height="36" rx="6"/>
        <line x1="8" y1="14" x2="40" y2="14"/>
        <line x1="8" y1="22" x2="46" y2="22" opacity=".5"/>
      </g>
      <g transform="translate(238,250)">
        <rect width="60" height="36" rx="6"/>
        <line x1="8" y1="14" x2="34" y2="14"/>
        <line x1="8" y1="22" x2="40" y2="22" opacity=".5"/>
      </g>
      {/* annotations */}
      <text x="40" y="110" fontFamily="JetBrains Mono" fontSize="10" fill="currentColor" opacity=".55">SOURCE</text>
      <text x="146" y="170" fontFamily="JetBrains Mono" fontSize="10" fill="#C7522A">ETL</text>
      <text x="244" y="138" fontFamily="JetBrains Mono" fontSize="10" fill="currentColor" opacity=".55">STAGING · MART · VIEW</text>
    </IllustrationFrame>
  );
}

/* 3 — Web apps: layered browser windows */
function IllusWebApp() {
  return (
    <IllustrationFrame>
      {/* back window */}
      <rect x="60" y="80" width="220" height="160" rx="10" opacity=".4"/>
      <circle cx="74" cy="94" r="3" opacity=".4"/>
      <circle cx="84" cy="94" r="3" opacity=".4"/>
      <circle cx="94" cy="94" r="3" opacity=".4"/>
      {/* middle window */}
      <rect x="50" y="120" width="220" height="180" rx="10" fill="#f4f1eb"/>
      <rect x="50" y="120" width="220" height="180" rx="10"/>
      <circle cx="64" cy="134" r="3"/>
      <circle cx="74" cy="134" r="3"/>
      <circle cx="84" cy="134" r="3"/>
      <line x1="50" y1="148" x2="270" y2="148"/>
      {/* sidebar */}
      <rect x="60" y="158" width="60" height="132" rx="6" opacity=".25"/>
      {[0,1,2,3].map(i => <line key={i} x1="68" y1={172 + i*18} x2="112" y2={172 + i*18} opacity=".5"/>)}
      {/* main */}
      <rect x="130" y="158" width="130" height="58" rx="6"/>
      <text x="138" y="180" fontFamily="Saira Condensed" fontSize="18" fontWeight="900" fill="currentColor">+3.4×</text>
      <text x="138" y="200" fontFamily="JetBrains Mono" fontSize="9" fill="currentColor" opacity=".55">YOY GROWTH</text>
      {/* graph below */}
      <rect x="130" y="226" width="130" height="64" rx="6" opacity=".25"/>
      <path d="M140 280 q12 -28 24 -8 t24 -22 t24 -8 t24 -24" stroke="#C7522A" strokeWidth="1.6"/>
      {/* cursor */}
      <path d="M236 234 l10 26 l-6 -2 l-3 8 l-5 -2 l3 -8 l-7 -3 z" fill="currentColor"/>
      {/* mini code block */}
      <rect x="60" y="312" width="210" height="46" rx="6" opacity=".25"/>
      {[0,1,2].map(i => <line key={i} x1="70" y1={326 + i*10} x2={150 - i*20} y2={326 + i*10}/>)}
    </IllustrationFrame>
  );
}

/* 4 — Workflow automation: n8n-like node graph */
function IllusAutomation() {
  return (
    <IllustrationFrame>
      <g transform="translate(46,80)">
        {/* nodes */}
        {[
          { x:0,   y:60,  c:false, label:"TRIGGER" },
          { x:90,  y:30,  c:true,  label:"FETCH"   },
          { x:90,  y:130, c:false, label:"FETCH"   },
          { x:180, y:80,  c:true,  label:"MERGE"   },
          { x:255, y:30,  c:false, label:"NOTIFY"  },
          { x:255, y:130, c:false, label:"WRITE"   },
        ].map((n, i) => (
          <g key={i} transform={`translate(${n.x},${n.y})`}>
            <rect width="56" height="36" rx="8" fill={n.c ? "#1a1a1a" : "#f4f1eb"}/>
            <rect width="56" height="36" rx="8" />
            <circle cx="28" cy="18" r="6" fill={n.c ? "#f4f1eb" : "currentColor"}/>
            <text x="28" y="56" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" fill="currentColor" opacity=".6">{n.label}</text>
          </g>
        ))}
        {/* edges */}
        <path d="M56 78 C 74 60, 76 56, 90 48" stroke="#C7522A" strokeWidth="1.6"/>
        <path d="M56 78 C 74 96, 76 100, 90 148" stroke="#C7522A" strokeWidth="1.6"/>
        <path d="M146 48  C 162 64, 164 72, 180 88" />
        <path d="M146 148 C 162 132, 164 124, 180 100" />
        <path d="M236 88 C 250 76, 252 70, 255 48" />
        <path d="M236 100 C 250 116, 252 122, 255 148" />
      </g>
      <g transform="translate(46,304)">
        <rect width="250" height="50" rx="10" opacity=".25"/>
        <text x="14" y="22" fontFamily="JetBrains Mono" fontSize="10" fill="currentColor">▸ workflow.run.success</text>
        <text x="14" y="38" fontFamily="JetBrains Mono" fontSize="9" fill="currentColor" opacity=".55">Every Monday at 09:00 WAT</text>
      </g>
    </IllustrationFrame>
  );
}

/* 5 — Plate vs bowl (food metaphor visual for the playbook) */
function IllusPlatingMetaphor() {
  return (
    <IllustrationFrame>
      <g transform="translate(50,90)">
        <text x="0" y="0" fontFamily="JetBrains Mono" fontSize="10" opacity=".55">A · ON A BARE TABLE</text>
        <ellipse cx="105" cy="80" rx="100" ry="14" opacity=".25"/>
        <path d="M40 76 q60 -36 130 0 z" opacity=".7"/>
        <path d="M68 76 q40 -22 80 0" />
        <path d="M82 76 q24 -14 50 0" opacity=".5"/>
      </g>
      <g transform="translate(50,250)">
        <text x="0" y="0" fontFamily="JetBrains Mono" fontSize="10" fill="#C7522A">B · PLATED</text>
        <ellipse cx="105" cy="80" rx="110" ry="18" opacity=".18"/>
        <ellipse cx="105" cy="78" rx="100" ry="14" fill="#f4f1eb"/>
        <ellipse cx="105" cy="78" rx="100" ry="14"/>
        <circle cx="105" cy="72" r="22" fill="#C7522A"/>
        <circle cx="105" cy="72" r="22"/>
        <path d="M83 72 q22 -22 44 0" stroke="#f4f1eb" strokeWidth="2"/>
        <line x1="18" y1="92" x2="190" y2="92" opacity=".4"/>
        <text x="18" y="108" fontFamily="JetBrains Mono" fontSize="9" opacity=".55">same dish — different story</text>
      </g>
    </IllustrationFrame>
  );
}

window.IllusDashboard = IllusDashboard;
window.IllusPipeline = IllusPipeline;
window.IllusWebApp = IllusWebApp;
window.IllusAutomation = IllusAutomation;
window.IllusPlatingMetaphor = IllusPlatingMetaphor;
