type GradientBGProps = {
  className?: string;
  showTopFade?: boolean;
};

export function GradientBG({
  className = "",
}: GradientBGProps) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 ${className}`}
      aria-hidden="true"
    >
      <div
        className="absolute bottom-0 left-1/2 aspect-square w-[80vw] -translate-x-1/2 translate-y-[65%] rounded-full bg-turquoise blur-[72px] sm:blur-[88px] lg:w-[85vw] lg:blur-[100px]"
      />
    </div>
  );
}
