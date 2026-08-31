const HISTOGRAM = [
  3, 6, 11, 18, 28, 42, 58, 74, 88, 96, 100, 94, 82, 68, 52, 38, 26, 17, 10, 5,
];

export function MonteCarloHistogram({ className = "" }) {
  const safeFrom = 7;
  return (
    <figure className={className}>
      <svg
        viewBox="0 0 320 150"
        className="h-auto w-full"
        role="img"
        aria-label="Histograma de 1.000 escenarios simulados de utilidad mensual"
      >
        <defs>
          <linearGradient id="mcBar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#34d399" />
            <stop offset="100%" stopColor="#059669" />
          </linearGradient>
        </defs>
        {HISTOGRAM.map((h, i) => {
          const barW = 320 / HISTOGRAM.length;
          const height = (h / 100) * 112;
          return (
            <rect
              key={i}
              x={i * barW + 1.5}
              y={124 - height}
              width={barW - 3}
              height={height}
              rx="2.5"
              fill={i < safeFrom ? "#cbd5e1" : "url(#mcBar)"}
            />
          );
        })}
        <line
          x1={(320 / HISTOGRAM.length) * safeFrom}
          y1="6"
          x2={(320 / HISTOGRAM.length) * safeFrom}
          y2="124"
          stroke="#0b2545"
          strokeWidth="2"
          strokeDasharray="5 4"
        />
        <text x="8" y="18" className="fill-slate-500" fontSize="9">
          Pérdida
        </text>
        <text
          x={(320 / HISTOGRAM.length) * safeFrom + 8}
          y="18"
          className="fill-navy-800"
          fontSize="9"
          fontWeight="700"
        >
          Punto de equilibrio
        </text>
        <line x1="0" y1="124" x2="320" y2="124" stroke="#e2e8f0" />
      </svg>
      <figcaption className="mt-2 text-xs text-charcoal-400">
        1.000 escenarios simulados · 82% terminan sobre el punto de equilibrio
      </figcaption>
    </figure>
  );
}

export function BreakEvenChart({ className = "" }) {
  return (
    <figure className={className}>
      <svg
        viewBox="0 0 320 150"
        className="h-auto w-full"
        role="img"
        aria-label="Gráfica de ingresos vs. costos mostrando el punto de equilibrio"
      >
        <defs>
          <linearGradient id="beFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map((i) => (
          <line
            key={i}
            x1="0"
            y1={20 + i * 32}
            x2="320"
            y2={20 + i * 32}
            stroke="#e2e8f0"
          />
        ))}
        <path d="M170 62 L300 14 L300 116 L170 116 Z" fill="url(#beFill)" />
        <polyline
          points="20,116 300,14"
          fill="none"
          stroke="#10b981"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <polyline
          points="20,84 300,44"
          fill="none"
          stroke="#0b2545"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <polyline
          points="20,116 300,116"
          fill="none"
          stroke="#94a3b8"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
        <circle cx="170" cy="62" r="6" fill="#0b2545" />
        <circle cx="170" cy="62" r="11" fill="#0b2545" fillOpacity="0.14" />
        <text
          x="150"
          y="44"
          fontSize="10"
          fontWeight="700"
          className="fill-navy-800"
          textAnchor="middle"
        >
          Equilibrio
        </text>
        <text x="238" y="12" fontSize="9" className="fill-growth-600">
          Ingresos
        </text>
        <text x="238" y="60" fontSize="9" className="fill-navy-800">
          Costo total
        </text>
      </svg>
      <figcaption className="mt-2 text-xs text-charcoal-400">
        Ventas necesarias para cubrir costos fijos + variables
      </figcaption>
    </figure>
  );
}

export function ProbabilityDial({ value = 82, label = "Probabilidad de margen positivo" }) {
  const radius = 46;
  const circumference = Math.PI * radius;
  const dash = (value / 100) * circumference;
  return (
    <div className="flex items-center gap-4">
      <svg viewBox="0 0 110 62" className="w-28" role="img" aria-label={label}>
        <path
          d="M9 55 A46 46 0 0 1 101 55"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M9 55 A46 46 0 0 1 101 55"
          fill="none"
          stroke="#10b981"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${dash} ${circumference}`}
        />
        <text
          x="55"
          y="52"
          textAnchor="middle"
          fontSize="22"
          fontWeight="800"
          className="fill-navy-800"
        >
          {value}%
        </text>
      </svg>
      <p className="text-sm font-semibold leading-snug text-navy-800">{label}</p>
    </div>
  );
}
