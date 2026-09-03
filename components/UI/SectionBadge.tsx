type SectionBadgeProps = {
  children: React.ReactNode;
  className?: string;
  /** Fondo sólido equivalente a turquoise/15 sobre blanco. */
  solid?: boolean;
};

export function SectionBadge({
  children,
  className = "",
  solid = false,
}: SectionBadgeProps) {
  const background = solid ? "bg-[#e5f9f8]" : "bg-turquoise/15";

  return (
    <span
      className={`inline-flex rounded-full px-4 py-1.5 text-sm font-medium ${background} ${className}`}
    >
      <span className="bg-gradient-to-r from-black to-turquoise bg-clip-text text-transparent">
        {children}
      </span>
    </span>
  );
}
