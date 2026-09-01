type MenuIconProps = {
  className?: string;
  width?: number;
};

export function MenuIcon({ className, width = 40 }: MenuIconProps) {
  const height = Math.round(width * 0.5);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 40 20"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M0 4H40"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M0 16H26"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
