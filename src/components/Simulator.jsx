import { useMemo, useState } from "react";
import { whatsappLink } from "../config";
import WhatsAppIcon from "./WhatsAppIcon";

const PRESETS = {
  horeca: {
    label: "Restaurante / Café",
    fixedCosts: 18000000,
    price: 38000,
    variableCost: 15000,
    volume: 950,
    unit: "cubiertos",
  },
  hotel: {
    label: "Hotel / Hostal",
    fixedCosts: 26000000,
    price: 180000,
    variableCost: 55000,
    volume: 260,
    unit: "noches vendidas",
  },
  panaderia: {
    label: "Panadería",
    fixedCosts: 12000000,
    price: 6500,
    variableCost: 2600,
    volume: 4200,
    unit: "unidades",
  },
  barberia: {
    label: "Barbería",
    fixedCosts: 7000000,
    price: 35000,
    variableCost: 14000,
    volume: 420,
    unit: "servicios",
  },
  veterinaria: {
    label: "Veterinaria",
    fixedCosts: 14000000,
    price: 90000,
    variableCost: 38000,
    volume: 300,
    unit: "atenciones",
  },
  retail: {
    label: "Retail / Comercio",
    fixedCosts: 10000000,
    price: 55000,
    variableCost: 33000,
    volume: 700,
    unit: "unidades",
  },
};

const cop = new Intl.NumberFormat("es-CO", {
  style: "currency",
  currency: "COP",
  maximumFractionDigits: 0,
});

function createRandom(seed) {
  let state = seed;
  return () => {
    state = (state * 1664525 + 1013904223) % 4294967296;
    return state / 4294967296;
  };
}

function gaussian(random) {
  return (random() + random() + random() + random() + random() + random() - 3) / 1.5;
}

function simulate({ fixedCosts, price, variableCost, volume }) {
  const contribution = price - variableCost;
  const breakEvenUnits = contribution > 0 ? Math.ceil(fixedCosts / contribution) : null;
  const random = createRandom(20260831);
  const profits = [];

  for (let i = 0; i < 1000; i += 1) {
    const demandShock = 1 + gaussian(random) * 0.22;
    const costShock = 1 + gaussian(random) * 0.09;
    const fixedShock = 1 + gaussian(random) * 0.04;
    const simulatedVolume = Math.max(0, volume * demandShock);
    const simulatedContribution = price - variableCost * costShock;
    profits.push(simulatedVolume * simulatedContribution - fixedCosts * fixedShock);
  }

  profits.sort((a, b) => a - b);
  const percentile = (p) => profits[Math.min(999, Math.floor((p / 100) * 1000))];
  const positive = profits.filter((p) => p > 0).length;

  return {
    breakEvenUnits,
    breakEvenRevenue: breakEvenUnits ? breakEvenUnits * price : null,
    baseProfit: volume * contribution - fixedCosts,
    probability: Math.round((positive / profits.length) * 100),
    p10: percentile(10),
    p50: percentile(50),
    p90: percentile(90),
    profits,
  };
}

function Histogram({ profits }) {
  const buckets = 22;
  const min = profits[0];
  const max = profits[profits.length - 1];
  const span = max - min || 1;
  const counts = new Array(buckets).fill(0);
  profits.forEach((value) => {
    const index = Math.min(buckets - 1, Math.floor(((value - min) / span) * buckets));
    counts[index] += 1;
  });
  const peak = Math.max(...counts);
  const zeroIndex = Math.min(
    buckets,
    Math.max(0, Math.round(((0 - min) / span) * buckets)),
  );
  const barW = 320 / buckets;

  return (
    <svg
      viewBox="0 0 320 130"
      className="h-auto w-full"
      role="img"
      aria-label="Distribución de utilidad en 1.000 escenarios simulados"
    >
      {counts.map((count, i) => {
        const height = (count / peak) * 104;
        return (
          <rect
            key={i}
            x={i * barW + 1.5}
            y={112 - height}
            width={barW - 3}
            height={height}
            rx="2.5"
            fill={i < zeroIndex ? "#fca5a5" : "#10b981"}
          />
        );
      })}
      <line
        x1={zeroIndex * barW}
        y1="4"
        x2={zeroIndex * barW}
        y2="112"
        stroke="#0b2545"
        strokeWidth="2"
        strokeDasharray="5 4"
      />
      <line x1="0" y1="112" x2="320" y2="112" stroke="#e2e8f0" />
      <text x="4" y="126" fontSize="9" className="fill-slate-500">
        Pérdida
      </text>
      <text x="286" y="126" fontSize="9" className="fill-growth-600">
        Utilidad
      </text>
    </svg>
  );
}

const FIELDS = [
  { key: "fixedCosts", label: "Costos fijos mensuales", step: 500000 },
  { key: "price", label: "Precio o ticket promedio", step: 1000 },
  { key: "variableCost", label: "Costo variable por unidad", step: 500 },
  { key: "volume", label: "Ventas estimadas al mes", step: 10 },
];

export default function Simulator() {
  const [presetKey, setPresetKey] = useState("horeca");
  const [values, setValues] = useState(PRESETS.horeca);

  const result = useMemo(() => simulate(values), [values]);

  const applyPreset = (key) => {
    setPresetKey(key);
    setValues(PRESETS[key]);
  };

  return (
    <section id="simulador" className="bg-cream-100">
      <div className="section">
        <div className="max-w-2xl">
          <p className="eyebrow">Herramienta simuladora express</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-navy-800 sm:text-3xl">
            Calcula tu punto de equilibrio y tu riesgo ahora mismo.
          </h2>
          <p className="mt-3 text-base text-charcoal-600">
            Ajusta cuatro datos y corremos 1.000 escenarios en tu navegador. Sin
            registro, sin descargar nada.
          </p>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="card p-6">
            <p className="text-sm font-bold text-navy-800">
              1. Elige una plantilla
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {Object.entries(PRESETS).map(([key, preset]) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => applyPreset(key)}
                  className={`rounded-lg px-3 py-2 text-xs font-bold transition ${
                    key === presetKey
                      ? "bg-navy-800 text-white"
                      : "bg-cream-100 text-navy-800 ring-1 ring-cream-200"
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>

            <p className="mt-6 text-sm font-bold text-navy-800">
              2. Ajusta tus números
            </p>
            <div className="mt-3 space-y-4">
              {FIELDS.map((field) => (
                <label key={field.key} className="block">
                  <span className="text-xs font-semibold text-charcoal-400">
                    {field.label}
                  </span>
                  <input
                    type="number"
                    min="0"
                    step={field.step}
                    value={values[field.key]}
                    onChange={(event) =>
                      setValues((prev) => ({
                        ...prev,
                        [field.key]: Number(event.target.value) || 0,
                      }))
                    }
                    className="mt-1 w-full rounded-xl border border-cream-200 bg-cream-50 px-3.5 py-3 text-base font-semibold text-navy-800 focus:border-growth-500 focus:outline-none focus:ring-2 focus:ring-growth-100"
                  />
                </label>
              ))}
            </div>
          </div>

          <div className="card p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-charcoal-400">
                  Punto de equilibrio
                </p>
                <p className="mt-1 text-3xl font-extrabold text-navy-800">
                  {result.breakEvenUnits
                    ? `${result.breakEvenUnits.toLocaleString("es-CO")} ${values.unit}`
                    : "Sin margen de contribución"}
                </p>
                {result.breakEvenRevenue !== null && (
                  <p className="text-sm text-charcoal-400">
                    equivalen a {cop.format(result.breakEvenRevenue)} en ventas
                  </p>
                )}
              </div>
              <div className="rounded-xl bg-growth-50 px-4 py-3 text-center ring-1 ring-growth-100">
                <p className="text-2xl font-extrabold text-growth-700">
                  {result.probability}%
                </p>
                <p className="text-xs font-semibold text-growth-700">
                  escenarios con utilidad
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-xl bg-cream-100 p-4 ring-1 ring-cream-200">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-charcoal-400">
                1.000 escenarios simulados
              </p>
              <Histogram profits={result.profits} />
            </div>

            <dl className="mt-5 grid grid-cols-3 gap-3 text-center">
              {[
                { label: "Mes malo (P10)", value: result.p10 },
                { label: "Mes típico (P50)", value: result.p50 },
                { label: "Mes bueno (P90)", value: result.p90 },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl bg-cream-100 p-3 ring-1 ring-cream-200"
                >
                  <dt className="text-[11px] font-semibold text-charcoal-400">
                    {item.label}
                  </dt>
                  <dd
                    className={`mt-1 text-sm font-extrabold ${
                      item.value >= 0 ? "text-growth-700" : "text-rose-600"
                    }`}
                  >
                    {cop.format(Math.round(item.value))}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href={whatsappLink(
                `Hola, usé el simulador (${PRESETS[presetKey].label}). Mi punto de equilibrio salió en ${
                  result.breakEvenUnits ?? "n/d"
                } ${values.unit} y quiero un diagnóstico financiero.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-growth-500 px-6 py-3.5 text-base font-bold text-navy-900 transition hover:bg-growth-400"
            >
              <WhatsAppIcon className="h-5 w-5" />
              Quiero revisar estos números con un experto
            </a>
            <p className="mt-3 text-xs text-charcoal-400">
              Resultado estimado con variaciones típicas de demanda (±22%),
              insumos (±9%) y costos fijos (±4%). En el diagnóstico 1-a-1
              calibramos el modelo con tus cifras reales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
