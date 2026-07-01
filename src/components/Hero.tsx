import Reveal from "./Reveal";
import DashboardMock from "./DashboardMock";
import { heroBullets, site } from "@/lib/content";

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-[140px]">
      <div
        aria-hidden="true"
        className="chevron-bg pointer-events-none absolute right-0 top-0 h-72 w-72 opacity-60 [mask-image:radial-gradient(closest-side,black,transparent)]"
      />
      <div className="mx-auto grid max-w-wrap items-center gap-14 px-5 pb-20 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:pb-28">
        <div>
          <Reveal>
            <p className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-teal-400">
              <svg width="22" height="10" viewBox="0 0 22 10" aria-hidden="true">
                <path d="M1 1l4 4-4 4M9 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              Terceirização e inteligência financeira para PMEs
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="font-display text-4xl font-medium leading-[1.08] tracking-tight text-mist sm:text-5xl lg:text-[3.4rem]">
              O financeiro da sua empresa,{" "}
              <span className="text-teal-400">profissionalizado</span> de ponta a ponta.
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              BPO Financeiro, consultoria e inteligência de dados para empresas
              que querem crescer com controle, previsibilidade e decisões
              orientadas por dados.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#diagnostico"
                className="rounded-full bg-teal-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-colors hover:bg-teal-400"
              >
                Diagnóstico grátis
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-ink-700 px-6 py-3 text-sm font-medium text-mist transition-colors hover:border-teal-600 hover:text-teal-300"
              >
                Falar com especialista
              </a>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
              {heroBullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-muted">
                  <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                    <path d="M2 2l5 4-5 4" fill="none" stroke="#2FBFAE" strokeWidth="2" />
                  </svg>
                  {b}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:pl-2">
          <DashboardMock />
        </Reveal>
      </div>
    </section>
  );
}
