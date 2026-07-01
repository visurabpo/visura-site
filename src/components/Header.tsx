"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/content";

const links = [
  { href: "#solucoes", label: "Soluções" },
  { href: "#resultados", label: "Resultados" },
  { href: "#metodo", label: "Método" },
  { href: "#sobre", label: "Sobre" },
  { href: "#faq", label: "FAQ" },
];

export function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="14" className="fill-ink-800" />
      <path d="M14 18 L32 48 L50 18 L41 18 L32 34 L23 18 Z" className="fill-teal-500" />
    </svg>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-ink-700/70 bg-ink-950/85 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-wrap items-center justify-between gap-6 px-5 lg:px-8">
        <a href="#topo" className="flex items-center gap-3" aria-label="Visura — início">
          <Logo />
          <span className="font-display text-lg font-medium tracking-tight">
            Visura
            <span className="ml-2 hidden font-sans text-[11px] font-medium uppercase tracking-[0.18em] text-muted sm:inline">
              Soluções Financeiras
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted transition-colors hover:text-mist"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink-700 px-4 py-2 text-sm text-mist transition-colors hover:border-teal-600 hover:text-teal-300"
          >
            Falar com especialista
          </a>
          <a
            href="#diagnostico"
            className="rounded-full bg-teal-500 px-4 py-2 text-sm font-semibold text-ink-950 transition-colors hover:bg-teal-400"
          >
            Diagnóstico grátis
          </a>
        </div>

        <button
          className="lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M3 7h18M3 12h18M3 17h18" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          id="menu-mobile"
          className="border-t border-ink-700 bg-ink-950/95 px-5 pb-6 pt-3 backdrop-blur-md lg:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Navegação móvel">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-2.5 text-base text-mist/90 hover:bg-ink-800"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            <a
              href="#diagnostico"
              onClick={() => setOpen(false)}
              className="rounded-full bg-teal-500 px-4 py-2.5 text-center text-sm font-semibold text-ink-950"
            >
              Diagnóstico grátis
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-ink-700 px-4 py-2.5 text-center text-sm"
            >
              Falar com especialista
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
