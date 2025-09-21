interface InlinePosterProps {
  className?: string;
}

export function InlinePoster({ className = 'h-40 w-full' }: InlinePosterProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 160 220"
      role="img"
      aria-labelledby="posterTitle"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="posterTitle">Project poster placeholder</title>
      <rect width="160" height="220" rx="18" fill="#0e5b4a" opacity="0.08" />
      <rect
        x="12"
        y="14"
        width="136"
        height="192"
        rx="14"
        fill="#0e5b4a"
        opacity="0.25"
      />
      <path
        d="M26 158l28-38 26 22 34-46 20 24v52H26z"
        fill="#ffaa06"
        opacity="0.7"
      />
      <circle cx="62" cy="70" r="22" fill="#ffaa06" opacity="0.6" />
      <rect
        x="26"
        y="180"
        width="108"
        height="12"
        rx="6"
        fill="#0e5b4a"
        opacity="0.5"
      />
    </svg>
  );
}
