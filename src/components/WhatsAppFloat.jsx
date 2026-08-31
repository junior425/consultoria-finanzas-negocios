import { whatsappLink } from "../config";
import WhatsAppIcon from "./WhatsAppIcon";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink(
        "Hola, quiero agendar un diagnóstico financiero para mi negocio.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3.5 font-bold text-white shadow-card transition hover:brightness-105"
    >
      <WhatsAppIcon className="h-6 w-6" />
      <span className="hidden text-sm sm:inline">Diagnóstico gratis</span>
    </a>
  );
}
