import { useState } from "react";
import { BRAND_NAME, whatsappLink } from "../config";
import WhatsAppIcon from "./WhatsAppIcon";

const LINKS = [
  { href: "#sectores", label: "Sectores" },
  { href: "#montecarlo", label: "Cómo funciona" },
  { href: "#planes", label: "Planes" },
  { href: "#simulador", label: "Simulador" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-navy-700/40 bg-navy-800/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6">
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-growth-500 text-sm font-extrabold text-navy-900">
            PC
          </span>
          <span className="text-base font-extrabold tracking-tight text-white">
            {BRAND_NAME}
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-navy-100 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={whatsappLink(
              "Hola, quiero agendar un diagnóstico financiero para mi negocio.",
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-growth-300"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
          <a
            href="#simulador"
            className="rounded-lg bg-growth-500 px-4 py-2.5 text-sm font-bold text-navy-900 transition hover:bg-growth-400"
          >
            Probar Simulador Gratis
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-navy-600 text-white lg:hidden"
          aria-expanded={open}
          aria-label="Abrir menú"
        >
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              d={open ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
            />
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-navy-700 bg-navy-800 px-5 pb-5 pt-2 lg:hidden">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block border-b border-navy-700/60 py-3 text-sm font-semibold text-navy-100"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#simulador"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-lg bg-growth-500 px-4 py-3 text-center text-sm font-bold text-navy-900"
          >
            Probar Simulador Gratis
          </a>
        </nav>
      )}
    </header>
  );
}
