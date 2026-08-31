import { useState } from "react";
import { SALES_RANGES, SECTORS, whatsappLink } from "../config";
import { img } from "../industries";
import WhatsAppIcon from "./WhatsAppIcon";

const EMPTY = { name: "", phone: "", sector: "", sales: "" };

export default function LeadForm() {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);

  const update = (key) => (event) =>
    setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const message = `Hola, soy ${form.name}. Quiero un diagnóstico financiero para mi negocio.
Sector: ${form.sector}
Ventas mensuales estimadas: ${form.sales}
Mi WhatsApp: ${form.phone}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="diagnostico" className="bg-navy-800">
      <div className="section grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="text-white">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-growth-300">
            Diagnóstico sin costo
          </p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">
            Obtén un Diagnóstico Financiero de tu Comercio
          </h2>
          <p className="mt-3 text-base text-navy-100">
            Déjanos tus datos y te enviamos por WhatsApp la plantilla inicial de
            tu sector junto con la lectura de tu punto de equilibrio.
          </p>
          <figure className="mt-6 overflow-hidden rounded-2xl shadow-card ring-1 ring-white/10">
            <img
              src={img("photo-1521017432531-fbd92d768814", 900)}
              alt="Interior de un café con clientes y barra de atención"
              loading="lazy"
              width="900"
              height="600"
              className="h-48 w-full object-cover sm:h-60"
            />
          </figure>
        </div>

        <div className="card p-6 sm:p-8">
          {sent ? (
            <div className="py-6 text-center">
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-growth-50 text-growth-600">
                <WhatsAppIcon className="h-7 w-7" />
              </span>
              <h3 className="mt-4 text-xl font-extrabold text-navy-800">
                ¡Listo, {form.name.split(" ")[0]}!
              </h3>
              <p className="mt-2 text-sm text-charcoal-600">
                Abrimos WhatsApp con tu información. Si no se abrió, toca el
                botón de abajo.
              </p>
              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-growth-500 px-6 py-3.5 text-base font-bold text-navy-900"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Abrir WhatsApp
              </a>
              <button
                type="button"
                onClick={() => {
                  setForm(EMPTY);
                  setSent(false);
                }}
                className="mt-4 block w-full text-sm font-semibold text-navy-500 underline"
              >
                Enviar otro negocio
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="block">
                <span className="text-xs font-bold text-charcoal-600">
                  Nombre
                </span>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={update("name")}
                  placeholder="Tu nombre y apellido"
                  className="mt-1 w-full rounded-xl border border-cream-200 bg-cream-50 px-3.5 py-3 text-base text-navy-800 focus:border-growth-500 focus:outline-none focus:ring-2 focus:ring-growth-100"
                />
              </label>

              <label className="block">
                <span className="text-xs font-bold text-charcoal-600">
                  Número de WhatsApp
                </span>
                <input
                  type="tel"
                  required
                  inputMode="tel"
                  pattern="[0-9+\s()-]{7,}"
                  value={form.phone}
                  onChange={update("phone")}
                  placeholder="Ej. 320 123 4567"
                  className="mt-1 w-full rounded-xl border border-cream-200 bg-cream-50 px-3.5 py-3 text-base text-navy-800 focus:border-growth-500 focus:outline-none focus:ring-2 focus:ring-growth-100"
                />
              </label>

              <label className="block">
                <span className="text-xs font-bold text-charcoal-600">
                  Sector de tu negocio
                </span>
                <select
                  required
                  value={form.sector}
                  onChange={update("sector")}
                  className="mt-1 w-full rounded-xl border border-cream-200 bg-cream-50 px-3.5 py-3 text-base text-navy-800 focus:border-growth-500 focus:outline-none focus:ring-2 focus:ring-growth-100"
                >
                  <option value="">Selecciona tu sector</option>
                  {SECTORS.map((sector) => (
                    <option key={sector} value={sector}>
                      {sector}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="text-xs font-bold text-charcoal-600">
                  Ventas mensuales estimadas
                </span>
                <select
                  required
                  value={form.sales}
                  onChange={update("sales")}
                  className="mt-1 w-full rounded-xl border border-cream-200 bg-cream-50 px-3.5 py-3 text-base text-navy-800 focus:border-growth-500 focus:outline-none focus:ring-2 focus:ring-growth-100"
                >
                  <option value="">Selecciona un rango</option>
                  {SALES_RANGES.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
              </label>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-growth-500 px-6 py-4 text-base font-extrabold text-navy-900 transition hover:bg-growth-400"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Quiero mi diagnóstico gratis
              </button>

              <p className="text-center text-xs text-charcoal-400">
                Tus datos están seguros. Te contactaremos por WhatsApp para
                enviarte tu plantilla inicial.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
