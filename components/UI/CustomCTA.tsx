import Link from "next/link";

type CustomCTAProps = {
  href: string;
  label: string;
  className?: string;
  color?: "turquoise" | "black" | "white";
  onClick?: () => void;
};

const colorStyles = {
  turquoise: {
    link: "border-transparent text-turquoise",
    fill: "bg-turquoise",
    bg: "bg-transparent",
  },
  black: {
    link: "border-white text-white",
    fill: "bg-black",
    bg: "bg-turquoise",
  },
  white: {
    link: "border-black text-white",
    fill: "bg-white",
    bg: "bg-black",
  },
} as const;

export function CustomCTA({
  href,
  label,
  className = "",
  color = "black",
  onClick,
}: CustomCTAProps) {
  const styles = colorStyles[color];

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative inline-flex min-h-[2.9em] cursor-pointer items-center ${styles.bg} justify-center overflow-hidden px-6 text-sm font-semibold transition-colors duration-300 ${styles.link} ${className}`}
    >
      <span
        className={`absolute left-full top-full h-[100px] w-[250px] rounded-full transition-all duration-600 group-hover:-left-7.5 group-hover:-top-7.5 ${styles.fill}`}
        aria-hidden="true"
      />
      <span className="relative z-10">{label}</span>
    </Link>
  );
}
