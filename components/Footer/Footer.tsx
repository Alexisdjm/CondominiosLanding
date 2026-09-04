import { FooterBar } from "@/components/Footer/FooterBar";
import { FooterColumns } from "@/components/Footer/FooterColumns";
import { FooterContactForm } from "@/components/Footer/FooterContactForm";

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-gray-light">
      <div className="relative z-10">
        <FooterContactForm />
        <FooterColumns />
        <FooterBar />
      </div>
    </footer>
  );
}
