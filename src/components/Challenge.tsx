import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { pains } from "@/lib/content";

export default function Challenge() {
  return (
    <section className="mx-auto max-w-wrap px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <Reveal>
            <Eyebrow>O contexto</Eyebrow>
            <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              O desafio de crescer com controle
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-muted">
              Empresas em expansão enfrentam desafios estruturais que afetam a
              agilidade das decisões e a previsibilidade dos resultados. À
              medida que a operação cresce, a gestão financeira exige mais
              organização, controle e inteligência.
            </p>
          </Reveal>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2">
          {pains.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 90}>
              <div className="h-full rounded-xl border border-ink-700/70 bg-ink-900/50 p-6 transition-colors hover:border-teal-700/60">
                <svg width="20" height="14" viewBox="0 0 22 10" aria-hidden="true" className="mb-4 text-teal-500">
                  <path d="M1 1l4 4-4 4M9 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" />
                </svg>
                <h3 className="font-medium leading-snug text-mist">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
