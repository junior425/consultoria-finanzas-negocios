export const WHATSAPP_NUMBER = "573233058573";

export const BRAND_NAME = "Punto Claro";

export const BRAND_TAGLINE = "Consultoría financiera + simulador predictivo";

export function whatsappLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const SECTORS = [
  "HORECA - Restaurantes/Cafés/Bares",
  "Hoteles y Hostales",
  "Panadería y Pastelería",
  "Barbería y Estética",
  "Veterinaria / Pet Shop",
  "Retail / Comercio General",
  "Otro",
];

export const SALES_RANGES = [
  "Menos de $10 millones / mes",
  "$10 a $30 millones / mes",
  "$30 a $80 millones / mes",
  "$80 a $200 millones / mes",
  "Más de $200 millones / mes",
];
