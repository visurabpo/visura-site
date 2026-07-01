import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { journey, methodology } from "@/lib/content";

function Timeline({
  items,
  compact = false,
}: {
  items: { step: string; title: string; text: string }[];
  compact?: boolean;
}) {
  return (
    <ol className={`grid gap-4 ${compact ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-5"}`}>
      {items.map((m, i) => (
        <Reveal as="li" key={m.step} delay={i * 80}>
          <div className="relative h-full rounded-xl border border-ink-700/70 bg-ink-900/50 p-5">
            <span className="font-mono text-xs text-teal-500">{m.step}</span>
            <h3 className="mt-2 font-medium text-mist">{m.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{m.text}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

export default function Method() {
  return (
    <section id="metodo" className="border-y border-ink-800/80 bg-ink-900/40">
      <div className="mx-auto max-w-wrap space-y-16 px-5 py-20 lg:px-8 lg:py-28">
        <div>
          <Reveal className="mb-10 max-w-2xl">
            <Eyebrow>Como começamos</Eyebrow>
            <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              Metodologia de implantação em 5 passos
            </h2>
          </Reveal>
          <Timeline items={methodology} />
        </div>

        <div>
          <Reveal className="mb-10 max-w-2xl">
            <Eyebrow>Como operamos no dia a dia</Eyebrow>
            <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
              A jornada depois que você é cliente
            </h2>
            <p className="mt-4 text-muted">
              Da reunião de onboarding ao alinhamento semestral com a direção:
              um ciclo contínuo de operação, repasse e planejamento.
            </p>
          </Reveal>
          <Timeline items={journey} compact />
        </div>
      </div>
    </section>
  );
}
