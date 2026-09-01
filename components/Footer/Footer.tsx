import { FooterBar } from "@/components/Footer/FooterBar";
import { FooterContactForm } from "@/components/Footer/FooterContactForm";

export function Footer() {
  return (
    <footer className="w-full bg-linear-to-b from-white via-turquoise/20 to-turquoise">
      <FooterContactForm />
      <FooterBar />
    </footer>
  );
}
