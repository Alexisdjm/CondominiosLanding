type LogoIconProps = {
  width?: number;
  height?: number;
  className?: string;
};

export function LogoIcon({
  width = 47,
  height = 44,
  className,
}: LogoIconProps) {
  return (
    <img
      src="/logo.svg"
      width={width}
      height={height}
      alt=""
      className={className}
      aria-hidden="true"
    />
  );
}
