/** Decorative band: circuit lines converging on a globe, as on the About page. */
function Side() {
  const line = "fill-none stroke-[#9a9690] stroke-[1.2]";
  const node = "fill-[#7d7a76]";
  const dot = "fill-orange";
  return (
    <g>
      <path className={line} d="M0 14 H150 V30 H430" />
      <rect className={node} x="146" y="18" width="7" height="7" />
      <circle className={dot} cx="440" cy="30" r="3.6" />

      <path className={line} d="M0 44 H436" />
      <rect className={node} x="250" y="40.5" width="7" height="7" />
      <circle className={dot} cx="446" cy="44" r="3.6" />

      <path className={line} d="M0 76 H300 V58 H432" />
      <rect className={node} x="296.5" y="64" width="7" height="7" />
      <circle className={dot} cx="442" cy="58" r="3.6" />

      <path className={line} d="M0 94 H360 V84 H400" />
      <rect className={node} x="356.5" y="87" width="7" height="7" />
    </g>
  );
}

const networkPoints: [number, number][] = [
  [-14, -24],
  [7, -32],
  [23, -12],
  [15, 18],
  [-7, 26],
  [-18, 0],
];

export default function CircuitBanner() {
  return (
    <div className="mt-10 overflow-hidden bg-sand" aria-hidden>
      <svg viewBox="0 0 1000 110" preserveAspectRatio="xMidYMid slice" className="block h-24 w-full sm:h-28">
        <Side />
        <g transform="translate(1000 0) scale(-1 1)">
          <Side />
        </g>

        {/* Globe */}
        <g transform="translate(500 55)">
          <circle r="42" className="fill-white stroke-ink stroke-2" />
          <g className="fill-none stroke-ink/70 stroke-[0.9]">
            <ellipse rx="16" ry="42" />
            <ellipse rx="32" ry="42" />
            <line x1="0" y1="-42" x2="0" y2="42" />
            <line x1="-42" y1="0" x2="42" y2="0" />
            <line x1="-37" y1="-20" x2="37" y2="-20" />
            <line x1="-37" y1="20" x2="37" y2="20" />
          </g>
          <polygon
            points={networkPoints.map((p) => p.join(",")).join(" ")}
            className="fill-none stroke-orange stroke-[2.2]"
            strokeLinejoin="round"
          />
          <line x1="-14" y1="-24" x2="-7" y2="26" className="stroke-orange stroke-[1.6]" />
          <line x1="7" y1="-32" x2="15" y2="18" className="stroke-orange stroke-[1.6]" />
          {networkPoints.map(([x, y]) => (
            <circle key={`${x},${y}`} cx={x} cy={y} r="4" className="fill-orange" />
          ))}
        </g>
      </svg>
    </div>
  );
}
