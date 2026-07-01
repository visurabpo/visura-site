"use client";

import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import CountUp from "./CountUp";
import { comparison, metrics } from "@/lib/content";

export function Comparison() {
  return (
    <section className="mx-auto max-w-wrap px-5 py-20 lg:px-8 lg:py-28">
      <Reveal className="mb-10 max-w-2xl">
        <Eyebrow>Por que integrado</Eyebrow>
        <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
          {comparison.headline}
        </h2>
        <p className="mt-4 text-muted">{comparison.sub}</p>
      </Reveal>

      {/* Tabela (desktop) */}
      <Reveal className="hidden overflow-hidden rounded-2xl border border-ink-700/70 md:block">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-ink-700/70 bg-ink-900/60">
              <th scope="col" className="px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Dimensão
              </th>
              <th scope="col" className="px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Abordagem tradicional
              </th>
              <th scope="col" className="px-6 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-teal-400">
                Abordagem Visura
              </th>
            </tr>
          </thead>
          <tbody>
            {comparison.rows.map((r) => (
              <tr key={r.dim} className="border-b border-ink-800/70 last:border-0">
                <th scope="row" className="px-6 py-4 font-medium text-mist">
                  {r.dim}
                </th>
                <td className="px-6 py-4 text-muted">{r.trad}</td>
                <td className="bg-teal-900/15 px-6 py-4 font-medium text-teal-300">{r.visura}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>

      {/* Cards (mobile) */}
      <ul className="space-y-3 md:hidden">
        {comparison.rows.map((r, i) => (
          <Reveal as="li" key={r.dim} delay={i * 60}>
            <div className="rounded-xl border border-ink-700/70 bg-ink-900/50 p-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">{r.dim}</p>
              <p className="mt-2 text-sm text-muted line-through decoration-muted/40">{r.trad}</p>
              <p className="mt-1 text-sm font-medium text-teal-300">{r.visura}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export function Results() {
  return (
    <section id="resultados" className="border-y border-ink-800/80 bg-ink-900/40">
      <div className="mx-auto max-w-wrap px-5 py-20 lg:px-8 lg:py-24">
        <Reveal className="mb-12 max-w-2xl">
          <Eyebrow>Nossos números</Eyebrow>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            Resultados que sustentam a confiança
          </h2>
          <p className="mt-4 text-muted">
            Operação estruturada, dados organizados e 100% das decisões
            estratégicas orientadas por dados.
          </p>
        </Reveal>

        <dl className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 100}>
              <div className="rounded-2xl border border-ink-700/70 bg-ink-950/50 p-7">
                <dd className="font-display text-4xl font-medium tracking-tight text-teal-400 lg:text-5xl">
                  <CountUp
                    to={m.value}
                    format={(v) =>
                      m.formatAsHours
                        ? `${Math.floor(v / 60)}h${String(Math.round(v) % 60).padStart(2, "0")}`
                        : `${m.prefix}${Math.round(v)}${m.suffix}`
                    }
                  />
                </dd>
                <dt className="mt-2 text-sm text-muted">{m.label}</dt>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
