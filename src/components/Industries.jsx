import { useState } from "react";
import { whatsappLink } from "../config";
import { INDUSTRIES, img } from "../industries";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Industries() {
  const [activeId, setActiveId] = useState(INDUSTRIES[0].id);
  const active = INDUSTRIES.find((i) => i.id === activeId);

  return (
    <section id="sectores" className="bg-cream-100">
      <div className="section">
        <div className="max-w-2xl">
          <p className="eyebrow">Plantillas por sector</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-navy-800 sm:text-3xl">
            Tu negocio no se mide como los demás. Elige tu sector.
          </h2>
          <p className="mt-3 text-base text-charcoal-600">
            Cada plantilla trae los indicadores que de verdad mueven tu
            rentabilidad, ya cargados y listos para simular.
          </p>
        </div>

        <div className="mt-8 -mx-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:px-0">
          <div
            className="flex gap-2 sm:flex-wrap"
            role="tablist"
            aria-label="Sectores"
          >
            {INDUSTRIES.map((industry) => (
              <button
                key={industry.id}
                type="button"
                role="tab"
                aria-selected={industry.id === activeId}
                onClick={() => setActiveId(industry.id)}
                className={`flex-none rounded-xl px-4 py-2.5 text-sm font-bold transition ${
                  industry.id === activeId
                    ? "bg-navy-800 text-white shadow-soft"
                    : "bg-white text-navy-800 ring-1 ring-cream-200 hover:bg-navy-50"
                }`}
              >
                {industry.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-cream-200 lg:grid-cols-2">
          <img
            src={img(active.photo, 900)}
            alt={active.photoAlt}
            loading="lazy"
            width="900"
            height="700"
            className="h-56 w-full object-cover sm:h-72 lg:h-full lg:max-h-[520px]"
          />
          <div className="p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-growth-600">
              {active.short}
            </p>
            <h3 className="mt-2 text-xl font-extrabold text-navy-800 sm:text-2xl">
              {active.headline}
            </h3>
            <ul className="mt-5 space-y-3">
              {active.metrics.map((metric) => (
                <li key={metric} className="flex gap-3 text-sm text-charcoal-600">
                  <span className="mt-1.5 h-2 w-2 flex-none rounded-full bg-growth-500" />
                  {metric}
                </li>
              ))}
            </ul>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {[active.kpi, active.secondary].map((kpi) => (
                <div
                  key={kpi.label}
                  className="rounded-xl bg-cream-100 p-4 ring-1 ring-cream-200"
                >
                  <p className="text-xl font-extrabold text-navy-800">
                    {kpi.value}
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-charcoal-400">
                    {kpi.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a href="#simulador" className="btn-outline">
                Simular mi negocio
              </a>
              <a
                href={whatsappLink(
                  `Hola, tengo un negocio del sector ${active.name} y quiero un diagnóstico financiero.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-growth-500 px-6 py-3.5 text-base font-bold text-navy-900 transition hover:bg-growth-400"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Hablar por WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {INDUSTRIES.map((industry) => (
            <button
              key={industry.id}
              type="button"
              onClick={() => setActiveId(industry.id)}
              className={`group overflow-hidden rounded-xl bg-white text-left shadow-soft ring-1 transition hover:-translate-y-0.5 ${
                industry.id === activeId
                  ? "ring-2 ring-growth-500"
                  : "ring-cream-200"
              }`}
            >
              <img
                src={img(industry.photo, 400)}
                alt={industry.photoAlt}
                loading="lazy"
                width="400"
                height="300"
                className="h-20 w-full object-cover sm:h-24"
              />
              <span className="block px-3 py-2.5 text-xs font-bold text-navy-800">
                {industry.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
