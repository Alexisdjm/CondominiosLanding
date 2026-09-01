import { SendIcon } from "@/components/icons/SendIcon";

type SendCTAProps = {
  label?: string;
  className?: string;
};

export function SendCTA({ label = "Enviar", className = "" }: SendCTAProps) {
  return (
    <button type="submit" className={`send-cta ${className}`}>
      <div>
        <div className="send-cta__svg-wrapper">
          <SendIcon className="h-6 w-6" />
        </div>
      </div>
      <span>{label}</span>
    </button>
  );
}
