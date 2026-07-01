import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { about, differentiators, site } from "@/lib/content";

export function WhyVisura() {
  return (
    <section className="mx-auto max-w-wrap px-5 py-20 lg:px-8 lg:py-28">
      <Reveal className="mb-12 max-w-2xl">
        <Eyebrow>Por que Visura</Eyebrow>
        <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
          Diferenciais operacionais
        </h2>
      </Reveal>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {differentiators.map((d, i) => (
          <Reveal as="li" key={d} delay={(i % 3) * 90}>
            <div className="flex h-full items-start gap-3 rounded-xl border border-ink-700/70 bg-ink-900/50 p-6 transition-colors hover:border-teal-700/60">
              <svg width="20" height="14" viewBox="0 0 22 10" aria-hidden="true" className="mt-1 shrink-0 text-teal-500">
                <path d="M1 1l4 4-4 4M9 1l4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              <p className="leading-relaxed text-mist/90">{d}</p>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export function About() {
  return (
    <section id="sobre" className="border-y border-ink-800/80 bg-ink-900/40">
      <div className="mx-auto max-w-wrap px-5 py-20 lg:px-8 lg:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <Eyebrow>Sobre a Visura</Eyebrow>
            <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              Estrutura, tecnologia e expertise a serviço da sua gestão
            </h2>
            <p className="mt-6 leading-relaxed text-muted">{about.institutional}</p>
            <p className="mt-8 border-l-2 border-teal-600 pl-4 font-display text-xl italic text-teal-300">
              &ldquo;{site.tagline}&rdquo;
            </p>
            <p className="mt-6 text-sm text-muted">
              Fundada por Pedro Perruolo, Bernardo Nascimento e Daniel Poffo ·{" "}
              {site.city}
            </p>
          </Reveal>

          <div className="space-y-4">
            {about.pillars.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="rounded-xl border border-ink-700/70 bg-ink-950/50 p-7">
                  <h3 className="font-display text-xl font-medium text-mist">{p.title}</h3>
                  <p className="mt-2.5 leading-relaxed text-muted">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
