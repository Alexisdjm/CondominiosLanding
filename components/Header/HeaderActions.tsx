import { UserIcon } from "@/components/icons/UserIcon";
import { CustomCTA } from "@/components/UI/CustomCTA";

export function HeaderActions() {
  return (
    <div className="hidden items-center gap-4 shrink-0 md:flex">
      <button
        type="button"
        aria-label="Cuenta de usuario"
        className="flex items-center justify-center text-black transition-colors hover:text-turquoise"
      >
        <UserIcon />
      </button>

      <CustomCTA href="/contacto" label="Contáctanos" />
    </div>
  );
}
