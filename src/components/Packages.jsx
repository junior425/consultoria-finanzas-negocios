import { whatsappLink } from "../config";
import { img } from "../industries";
import WhatsAppIcon from "./WhatsAppIcon";

const PACKAGES = [
  {
    name: "Herramienta Simuladora Express",
    tagline: "Autoservicio",
    photo: "photo-1551288049-bebda4e38f71",
    photoAlt: "Tablero de indicadores del negocio en pantalla",
    description:
      "Proyección rápida de tu punto de equilibrio con la plantilla de tu sector.",
    features: [
      "Plantilla por sector lista para usar",
      "Punto de equilibrio en unidades y en ventas",
      "Simulación de 1.000 escenarios",
      "Resultado inmediato, sin instalar nada",
    ],
    cta: "Probar Simulador Gratis",
    href: "#simulador",
    highlight: false,
  },
  {
    name: "Diagnóstico Financiero 1-a-1",
    tagline: "Más solicitado",
    photo: "photo-1454165804606-c3d57bc86b40",
    photoAlt: "Asesoría financiera revisando cifras y proyecciones en el escritorio",
    description:
      "Sesión de auditoría y personalización del modelo con las cifras reales de tu negocio.",
    features: [
      "Auditoría de costos fijos, variables y mermas",
      "Modelo calibrado a tu operación",
      "Precios y margen objetivo por producto o servicio",
      "Informe de riesgo y zona segura de caja",
    ],
    cta: "Agendar Diagnóstico",
    whatsapp:
      "Hola, quiero agendar el Diagnóstico Financiero 1-a-1 para mi negocio.",
    highlight: true,
  },
  {
    name: "Acompañamiento Financiero Mensual",
    tagline: "Consultoría continua",
    photo: "photo-1521737604893-d14cc237f11d",
    photoAlt: "Equipo revisando indicadores del negocio en una reunión mensual",
    description:
      "Consultoría continua en control de costos, precios y flujo de caja mes a mes.",
    features: [
      "Revisión mensual de resultados y desviaciones",
      "Alertas tempranas de flujo de caja",
      "Ajuste de precios y escenarios de temporada",
      "Soporte por WhatsApp para decisiones del día a día",
    ],
    cta: "Hablar del acompañamiento",
    whatsapp:
      "Hola, me interesa el Acompañamiento Financiero Mensual para mi negocio.",
    highlight: false,
  },
];

export default function Packages() {
  return (
    <section id="planes" className="bg-white">
      <div className="section">
        <div className="max-w-2xl">
          <p className="eyebrow">Servicios</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-navy-800 sm:text-3xl">
            Empieza solo con la herramienta o hazlo acompañado.
          </h2>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {PACKAGES.map((pkg) => (
            <article
              key={pkg.name}
              className={`flex flex-col overflow-hidden rounded-2xl shadow-card ring-1 ${
                pkg.highlight
                  ? "bg-navy-800 text-white ring-growth-500"
                  : "bg-white ring-cream-200"
              }`}
            >
              <img
                src={img(pkg.photo, 700)}
                alt={pkg.photoAlt}
                loading="lazy"
                width="700"
                height="400"
                className="h-40 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <span
                  className={`self-start rounded-full px-3 py-1 text-xs font-bold ${
                    pkg.highlight
                      ? "bg-growth-500 text-navy-900"
                      : "bg-growth-50 text-growth-700"
                  }`}
                >
                  {pkg.tagline}
                </span>
                <h3
                  className={`mt-3 text-lg font-extrabold ${
                    pkg.highlight ? "text-white" : "text-navy-800"
                  }`}
                >
                  {pkg.name}
                </h3>
                <p
                  className={`mt-2 text-sm ${
                    pkg.highlight ? "text-navy-100" : "text-charcoal-600"
                  }`}
                >
                  {pkg.description}
                </p>
                <ul className="mt-4 flex-1 space-y-2.5">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex gap-2.5 text-sm ${
                        pkg.highlight ? "text-navy-100" : "text-charcoal-600"
                      }`}
                    >
                      <svg
                        className="mt-0.5 h-4 w-4 flex-none text-growth-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.7 5.3a1 1 0 0 1 0 1.4l-7.5 7.5a1 1 0 0 1-1.4 0L3.3 10.7a1 1 0 1 1 1.4-1.4l2.8 2.8 6.8-6.8a1 1 0 0 1 1.4 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {pkg.whatsapp ? (
                  <a
                    href={whatsappLink(pkg.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-growth-500 px-6 py-3.5 text-base font-bold text-navy-900 transition hover:bg-growth-400"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                    {pkg.cta}
                  </a>
                ) : (
                  <a href={pkg.href} className="btn-outline mt-6">
                    {pkg.cta}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
