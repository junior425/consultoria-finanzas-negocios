import { whatsappLink } from "../config";
import { img } from "../industries";
import { BreakEvenChart, MonteCarloHistogram, ProbabilityDial } from "./Charts";
import WhatsAppIcon from "./WhatsAppIcon";

const PHOTOS = [
  {
    id: "photo-1577219491135-ce391730fb2c",
    alt: "Chef emplatando en la cocina de un restaurante",
    caption: "Restaurantes y cafés",
  },
  {
    id: "photo-1460925895917-afdab827c52f",
    alt: "Emprendedor analizando gráficas financieras en una tablet",
    caption: "Decisiones con datos",
  },
];

const TRUST = [
  "1.000 escenarios simulados",
  "Sin hojas de cálculo complejas",
  "Resultados en 5 minutos",
];

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-navy-800 text-white"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 15%, #1b54a3 0, transparent 45%), radial-gradient(circle at 85% 0%, #10b981 0, transparent 40%)",
        }}
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-5 pb-14 pt-12 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-14 lg:pb-20 lg:pt-16">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-growth-500/15 px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-growth-300 ring-1 ring-growth-500/30">
            Toma el control financiero de tu comercio o negocio HORECA
          </p>
          <h1 className="mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight sm:text-4xl lg:text-[2.9rem]">
            Descubre el{" "}
            <span className="text-growth-400">Punto de Equilibrio Real</span> y
            el Riesgo de tu Negocio con Simulaciones Predictivas.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-100 sm:text-lg">
            Diseñado para dueños de restaurantes, cafés, hoteles, panaderías,
            barberías y comercios que buscan proteger su flujo de caja sin
            complicaciones matemáticas.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a href="#simulador" className="btn-primary">
              Probar Simulador Gratis
            </a>
            <a
              href={whatsappLink(
                "Hola, quiero agendar un diagnóstico financiero para mi negocio.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Agendar Diagnóstico por WhatsApp
            </a>
          </div>

          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-sm text-navy-100">
            {TRUST.map((item) => (
              <li key={item} className="flex items-center gap-2">
                <svg
                  className="h-4 w-4 flex-none text-growth-400"
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
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {PHOTOS.map((photo) => (
            <figure
              key={photo.id}
              className="relative overflow-hidden rounded-2xl shadow-card ring-1 ring-white/10"
            >
              <img
                src={img(photo.id, 700)}
                alt={photo.alt}
                loading="eager"
                width="700"
                height="500"
                className="h-40 w-full object-cover sm:h-52"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-900/90 to-transparent px-3 pb-2.5 pt-8 text-xs font-semibold">
                {photo.caption}
              </figcaption>
            </figure>
          ))}

          <div className="col-span-2 rounded-2xl bg-white p-4 text-charcoal-700 shadow-card sm:p-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-bold text-navy-800">
                Simulación Montecarlo · Utilidad mensual
              </p>
              <span className="rounded-full bg-growth-50 px-2.5 py-1 text-xs font-bold text-growth-700">
                Zona segura de caja
              </span>
            </div>
            <MonteCarloHistogram className="mt-3" />
            <div className="mt-4 grid gap-4 border-t border-cream-200 pt-4 sm:grid-cols-2">
              <ProbabilityDial value={82} />
              <BreakEvenChart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
