import { FooterArc } from "@/components/Footer/FooterArc";
import { FooterBar } from "@/components/Footer/FooterBar";
import { FooterContactForm } from "@/components/Footer/FooterContactForm";

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-linear-to-b from-white via-turquoise/20 to-turquoise">
      <FooterArc />

      <div className="relative z-10">
        <FooterContactForm />
        <FooterBar />
      </div>
    </footer>
  );
}
