import { BRAND_NAME, BRAND_TAGLINE, whatsappLink } from "../config";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-base font-extrabold text-white">{BRAND_NAME}</p>
          <p className="mt-1 text-sm">{BRAND_TAGLINE}</p>
          <p className="mt-3 text-xs text-navy-200">
            Punto de equilibrio, control de costos y flujo de caja para negocios
            HORECA, panaderías, barberías, veterinarias, hoteles y retail.
          </p>
        </div>
        <a
          href={whatsappLink(
            "Hola, quiero agendar un diagnóstico financiero para mi negocio.",
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-growth-500 px-6 py-3.5 text-base font-bold text-navy-900"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Agendar diagnóstico
        </a>
      </div>
      <div className="border-t border-navy-800 px-5 py-5 text-center text-xs text-navy-200 sm:px-6">
        © {new Date().getFullYear()} {BRAND_NAME}. Fotografías de Unsplash.
      </div>
    </footer>
  );
}
