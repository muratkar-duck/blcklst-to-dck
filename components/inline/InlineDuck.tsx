export function InlineDuck({
  className = 'h-40 w-full',
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 140"
      role="img"
      aria-labelledby="duckTitle duckDesc"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="duckTitle">Friendly duck illustration</title>
      <desc id="duckDesc">
        Abstract duck composed of circles and organic shapes.
      </desc>
      <rect width="200" height="140" rx="28" fill="#faf3e0" />
      <g transform="translate(30 30)">
        <ellipse
          cx="62"
          cy="48"
          rx="58"
          ry="44"
          fill="#0e5b4a"
          opacity="0.15"
        />
        <ellipse cx="68" cy="46" rx="54" ry="40" fill="#0e5b4a" opacity="0.2" />
        <circle cx="70" cy="46" r="36" fill="#0e5b4a" />
        <circle cx="112" cy="34" r="24" fill="#0e5b4a" />
        <circle cx="122" cy="30" r="7" fill="#ffaa06" />
        <circle cx="126" cy="30" r="3" fill="#0e5b4a" />
        <path
          d="M36 62c18 14 60 18 92 6 0 0-10 26-40 30-32 4-52-16-52-36z"
          fill="#ffaa06"
          opacity="0.85"
        />
        <path
          d="M88 26c8-12 24-18 36-12 4 2 6 6 6 10-14 8-28 8-42 2z"
          fill="#ffaa06"
          opacity="0.65"
        />
      </g>
    </svg>
  );
}
