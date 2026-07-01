"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { services, type Service } from "@/lib/content";

function ServiceDetail({ s }: { s: Service }) {
  return (
    <div className="space-y-5 pt-5">
      {s.scope && (
        <div>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-teal-400">
            Escopo — {s.scope.length} frentes de entrega
          </p>
          <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
            {s.scope.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-mist/85">
                <svg width="10" height="12" viewBox="0 0 12 12" aria-hidden="true" className="mt-1 shrink-0">
                  <path d="M2 2l5 4-5 4" fill="none" stroke="#2FBFAE" strokeWidth="2" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      {s.pillars &&
        s.pillars.map((p) => (
          <div key={p.title}>
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.18em] text-teal-400">
              {p.title}
            </p>
            <ul className="space-y-2.5">
              {p.items.map((it) => (
                <li key={it.name} className="text-sm leading-relaxed">
                  <span className="font-medium text-mist">{it.name}</span>
                  <span className="text-muted"> — {it.desc}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

      {s.methods && (
        <div>
          <p className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-teal-400">
            Metodologias
          </p>
          <p className="text-sm leading-relaxed text-muted">{s.methods}</p>
        </div>
      )}
      {s.deliverables && (
        <div>
          <p className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-teal-400">
            Entregáveis
          </p>
          <p className="text-sm leading-relaxed text-muted">{s.deliverables}</p>
        </div>
      )}
      {s.idealFor && (
        <div>
          <p className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-teal-400">
            Para quem é ideal
          </p>
          <p className="text-sm leading-relaxed text-muted">{s.idealFor}</p>
        </div>
      )}
      {s.includes && (
        <p className="rounded-lg border border-teal-900 bg-teal-900/25 px-4 py-3 text-sm text-teal-300">
          {s.includes}
        </p>
      )}
    </div>
  );
}

export default function Services() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="solucoes" className="mx-auto max-w-wrap px-5 py-20 lg:px-8 lg:py-28">
      <Reveal className="mb-12 max-w-2xl">
        <Eyebrow>Ecossistema Visura</Eyebrow>
        <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
          Seis frentes para toda etapa do ciclo de vida da sua empresa
        </h2>
        <p className="mt-5 leading-relaxed text-muted">
          Do planejamento financeiro até o momento de venda: uma gama de
          serviços projetada para acompanhar a empresa em cada fase.
        </p>
      </Reveal>

      <ul className="grid gap-5 md:grid-cols-2">
        {services.map((s, i) => {
          const isOpen = open === s.slug;
          return (
            <Reveal as="li" key={s.slug} delay={(i % 2) * 90}>
              <article
                className={`flex h-full flex-col rounded-2xl border p-7 transition-colors ${
                  s.flagship
                    ? "border-teal-700/70 bg-gradient-to-b from-teal-900/30 to-ink-900/60"
                    : "border-ink-700/70 bg-ink-900/50 hover:border-teal-700/50"
                }`}
              >
                {s.flagship && (
                  <p className="mb-3 w-fit rounded-full border border-teal-700/70 bg-teal-900/40 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-teal-300">
                    Serviço mais completo
                  </p>
                )}
                <h3 className="font-display text-xl font-medium tracking-tight text-mist sm:text-2xl">
                  {s.name}
                </h3>
                {s.definition && (
                  <p className="mt-2 font-display text-sm italic text-muted/80">{s.definition}</p>
                )}
                <p className="mt-3 leading-relaxed text-muted">{s.summary}</p>

                <div className="acc-panel mt-auto" data-open={isOpen}>
                  <div className="acc-inner">
                    <ServiceDetail s={s} />
                  </div>
                </div>

                <button
                  onClick={() => setOpen(isOpen ? null : s.slug)}
                  aria-expanded={isOpen}
                  className="mt-5 flex w-fit items-center gap-2 text-sm font-medium text-teal-400 transition-colors hover:text-teal-300"
                >
                  {isOpen ? "Fechar detalhes" : "Ver escopo completo"}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    aria-hidden="true"
                    className={`transition-transform ${isOpen ? "rotate-90" : ""}`}
                  >
                    <path d="M3 2l5 4-5 4" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>
              </article>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
