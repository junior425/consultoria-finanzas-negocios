# Punto Claro · Landing de consultoría financiera + simulador

Landing page de campaña (Meta Ads, Google, LinkedIn) para una plataforma de
consultoría financiera y simulación de negocios dirigida a dueños de comercios,
con foco en HORECA (restaurantes, bares, cafés, catering), hoteles, panaderías,
barberías, veterinarias y retail.

Propuesta de valor: calcular el **punto de equilibrio real** y proyectar el
**flujo de caja** con **simulaciones predictivas de Montecarlo**.

## Stack

React 19 + Vite + Tailwind CSS. Sin backend: el simulador corre en el
navegador y los leads se envían por deep link de WhatsApp (`wa.me`).

Requiere Node 22 (con Node 20 oxlint/rolldown fallan con "Cannot find native binding").

## Comandos

```bash
npm install
npm run dev      # servidor de desarrollo
npm run lint     # oxlint
npm run build    # build de producción
```

## Estructura

- `src/App.jsx` — orden de secciones de la landing.
- `src/components/Hero.jsx` — hero con fotografía real y gráficas de Montecarlo.
- `src/components/Industries.jsx` — selector visual de sectores con métricas propias.
- `src/components/MonteCarloExplainer.jsx` — explicación no técnica (inputs vs. outputs).
- `src/components/Simulator.jsx` — simulador express: punto de equilibrio + 1.000 escenarios.
- `src/components/Packages.jsx` — los tres paquetes de servicio.
- `src/components/LeadForm.jsx` — formulario de captura que abre WhatsApp.
- `src/components/Charts.jsx` — gráficas SVG (histograma, punto de equilibrio, dial).
- `src/industries.js` — datos y fotos por sector (`img()` construye las URLs de Unsplash).
- `src/config.js` — número de WhatsApp, marca, sectores y rangos de ventas del formulario.

## Configuración

El número de WhatsApp y el nombre de marca están en `src/config.js`.

Las cifras del simulador (`PRESETS` en `src/components/Simulator.jsx`) son
valores de referencia en pesos colombianos y las variaciones simuladas son
±22% en demanda, ±9% en insumos y ±4% en costos fijos.
