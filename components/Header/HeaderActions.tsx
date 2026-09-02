import { UserIcon } from "@/components/icons/UserIcon";
import { CustomCTA } from "@/components/UI";

export function HeaderActions() {
  return (
    <div className="hidden items-center gap-4 shrink-0 nav:flex">
      <button
        type="button"
        aria-label="Cuenta de usuario"
        className="flex items-center justify-center text-black transition-colors hover:text-turquoise"
      >
        <UserIcon />
      </button>

      <CustomCTA href="/contacto" label="Contáctanos" className="rounded-full border-none hover:text-white" color="turquoise" />
    </div>
  );
}
