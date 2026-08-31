import { img } from "../industries";
import { MonteCarloHistogram, ProbabilityDial } from "./Charts";

const INPUTS = [
  { label: "Costos fijos", detail: "Arriendo, nómina, servicios" },
  { label: "Precio unitario", detail: "Ticket promedio o precio de plato" },
  { label: "Volumen de ventas", detail: "Cubiertos, lotes, citas o unidades" },
];

const OUTPUTS = [
  {
    label: "Margen de riesgo",
    detail: "Qué tan lejos estás de perder plata en un mes flojo",
  },
  {
    label: "Zona segura de flujo de caja",
    detail: "El rango de ventas donde tu caja aguanta",
  },
  {
    label: "Probabilidad de utilidad",
    detail: "En cuántos de los 1.000 escenarios ganas",
  },
];

const VARIABLES = [
  "Días lluviosos",
  "Aumento de insumos",
  "Variación de clientes",
  "Temporadas bajas",
  "Rotación de personal",
  "Descuentos y promociones",
];

export default function MonteCarloExplainer() {
  return (
    <section id="montecarlo" className="bg-white">
      <div className="section">
        <div className="max-w-3xl">
          <p className="eyebrow">Simulación Montecarlo, en español claro</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-navy-800 sm:text-3xl">
            Evaluamos 1.000 escenarios posibles para tu negocio.
          </h2>
          <p className="mt-3 text-base leading-relaxed text-charcoal-600">
            Días lluviosos, aumentos de insumos, variación de clientes,
            temporadas bajas: probamos tu negocio en mil futuros distintos para
            decirte con certeza tu probabilidad de margen de ganancia. Sin
            fórmulas, sin tecnicismos.
          </p>
        </div>

        <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-3">
          <div className="card p-6">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-navy-50 text-sm font-extrabold text-navy-800">
              1
            </span>
            <h3 className="mt-4 text-lg font-extrabold text-navy-800">
              Entran datos simples
            </h3>
            <ul className="mt-4 space-y-3">
              {INPUTS.map((input) => (
                <li
                  key={input.label}
                  className="rounded-xl bg-cream-100 p-3.5 ring-1 ring-cream-200"
                >
                  <p className="text-sm font-bold text-navy-800">
                    {input.label}
                  </p>
                  <p className="text-xs text-charcoal-400">{input.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="card overflow-hidden">
            <img
              src={img("photo-1543286386-713bdd548da4", 800)}
              alt="Gráfica de crecimiento dibujada a mano sobre el escritorio de trabajo"
              loading="lazy"
              width="800"
              height="500"
              className="h-40 w-full object-cover"
            />
            <div className="p-6">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-navy-50 text-sm font-extrabold text-navy-800">
                2
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-navy-800">
                Simulamos la incertidumbre real
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {VARIABLES.map((variable) => (
                  <span
                    key={variable}
                    className="rounded-full bg-growth-50 px-3 py-1.5 text-xs font-semibold text-growth-700 ring-1 ring-growth-100"
                  >
                    {variable}
                  </span>
                ))}
              </div>
              <MonteCarloHistogram className="mt-5" />
            </div>
          </div>

          <div className="card bg-navy-800 p-6 text-white">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-growth-500 text-sm font-extrabold text-navy-900">
              3
            </span>
            <h3 className="mt-4 text-lg font-extrabold">
              Sales con decisiones, no con dudas
            </h3>
            <ul className="mt-4 space-y-3">
              {OUTPUTS.map((output) => (
                <li
                  key={output.label}
                  className="rounded-xl bg-white/10 p-3.5 ring-1 ring-white/15"
                >
                  <p className="text-sm font-bold text-growth-300">
                    {output.label}
                  </p>
                  <p className="text-xs text-navy-100">{output.detail}</p>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl bg-white p-4">
              <ProbabilityDial
                value={82}
                label="De cada 100 meses simulados, 82 cierran con utilidad"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
