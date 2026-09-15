/* RobotArt — jointed side-view robot: hip → knee → foot, shoulder → elbow →
   grip, vented chest, lit visor and antenna. Origin (0,0) is the ground
   contact point, body extends to about y=-74. Every fill comes from the
   palette vars, so it recolours with the theme and works in dark mode. */

function RobotArt({ walking = true }) {
  const I = "rgb(var(--c-ink))";
  const P = "rgb(var(--c-paper))";
  const A = "rgb(var(--c-accent))";
  const A2 = "rgb(var(--c-accent2))";
  const limb = { fill: I };
  const back = { fill: I, opacity: .34 };
  const w = (n) => (walking ? n : "");

  const Leg = ({ cls, style }) => (
    <g transform="translate(1.5 -26)">
      <g className={w(cls)} style={{ transformOrigin: "0px 0px" }}>
        <rect x="-3.2" y="0" width="6.4" height="11" rx="2" {...style} />
        <circle cx="0" cy="11.5" r="2.8" {...style} />
        <g transform="translate(0 12)">
          <g className={w(cls === "rb-thighA" ? "rb-kneeA" : "rb-kneeB")} style={{ transformOrigin: "0px 0px" }}>
            <rect x="-2.8" y="0" width="5.6" height="10" rx="2" {...style} />
            <rect x="-4.6" y="9.4" width="9.6" height="4" rx="1.2" {...style} />
          </g>
        </g>
      </g>
    </g>
  );

  const Arm = ({ cls, style }) => (
    <g transform="translate(1.2 -44)">
      <g className={w(cls)} style={{ transformOrigin: "0px 0px" }}>
        <rect x="-2.6" y="0" width="5.2" height="9" rx="2" {...style} />
        <circle cx="0" cy="9.4" r="2.4" {...style} />
        <g transform="translate(0 10)">
          <g className={w(cls === "rb-armA" ? "rb-elbowA" : "rb-elbowB")} style={{ transformOrigin: "0px 0px" }}>
            <rect x="-2.4" y="0" width="4.8" height="8" rx="2" {...style} />
            <rect x="-3" y="7.4" width="6" height="4.4" rx="1.6" {...style} />
          </g>
        </g>
      </g>
    </g>
  );

  return (
    <g>
      <ellipse cx="1" cy="1.5" rx="13" ry="2.4" fill={I} opacity=".13" />
      <g className={w("rb-bob")}>
        {/* limbs behind the hull */}
        <Leg cls="rb-thighB" style={back} />
        <Arm cls="rb-armB" style={back} />

        {/* hull */}
        <rect x="-8" y="-46" width="18.5" height="21" rx="4" fill={I} />
        <rect x="-4.6" y="-41" width="11.5" height="1.8" rx=".9" fill={P} opacity=".4" />
        <rect x="-4.6" y="-37.4" width="11.5" height="1.8" rx=".9" fill={P} opacity=".4" />
        <circle cx="1.2" cy="-31" r="3.4" fill={A} />
        <circle cx="1.2" cy="-31" r="1.3" fill={P} opacity=".7" />

        {/* front limbs */}
        <Leg cls="rb-thighA" style={limb} />
        <Arm cls="rb-armA" style={limb} />

        {/* head */}
        <rect x="-1" y="-50" width="4.6" height="4.6" fill={I} opacity=".85" />
        <rect x="-7.5" y="-63" width="18" height="13.5" rx="4" fill={I} />
        <rect x="-3.4" y="-59.6" width="12" height="5.6" rx="2.4" fill={A} />
        <circle cx="0.2" cy="-56.8" r="1.4" fill={P} />
        <circle cx="5" cy="-56.8" r="1.4" fill={P} />
        <path d="M6.5 -63v-7" stroke={I} strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="6.5" cy="-71.5" r="2.4" fill={A2} />
      </g>
    </g>
  );
}

/* Standalone version for cards and empty states. */
function RobotFigure({ height = 200, walking = false, className = "" }) {
  return (
    <svg viewBox="-20 -80 42 86" height={height} className={className} style={{ display: "block", overflow: "visible" }} aria-hidden="true">
      <RobotArt walking={walking} />
    </svg>
  );
}

Object.assign(window, { RobotArt, RobotFigure });
