interface InlineAvatarProps {
  initials: string;
  className?: string;
}

export function InlineAvatar({
  initials,
  className = 'h-16 w-16',
}: InlineAvatarProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      role="img"
      aria-labelledby="avatarTitle"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title id="avatarTitle">Avatar placeholder</title>
      <circle cx="32" cy="32" r="30" fill="#0e5b4a" opacity="0.12" />
      <circle cx="32" cy="32" r="24" fill="#0e5b4a" />
      <text
        x="32"
        y="38"
        textAnchor="middle"
        fontSize="18"
        fontFamily="'Helvetica Neue', Arial, sans-serif"
        fontWeight="700"
        fill="#faf3e0"
      >
        {initials}
      </text>
    </svg>
  );
}
