import Image from "next/image";

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
    <Image
      src="/logo.svg"
      width={width}
      height={height}
      alt=""
      className={className}
      aria-hidden
      unoptimized
    />
  );
}
