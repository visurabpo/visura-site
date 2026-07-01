import { clients } from "@/lib/content";

/**
 * Enquanto os arquivos de logo reais não são adicionados em /public/clients,
 * exibimos wordmarks tipográficas. Para trocar por imagens, substitua o <span>
 * por <Image src={`/clients/${slug}.svg`} ... /> — ver README.
 */
export default function ClientsMarquee() {
  const items = [...clients, ...clients]; // duplicado para o loop contínuo
  return (
    <section aria-label="Empresas que confiam na Visura" className="border-y border-ink-800/80 bg-ink-900/40 py-10">
      <p className="mb-7 text-center font-mono text-xs uppercase tracking-[0.22em] text-muted">
        Empresas que confiam na Visura
      </p>
      <div className="marquee relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <ul className="marquee-track flex items-center gap-14 px-7">
          {items.map((c, i) => (
            <li
              key={`${c}-${i}`}
              aria-hidden={i >= clients.length}
              className="whitespace-nowrap font-display text-lg text-mist/45 transition-colors hover:text-teal-300"
            >
              {c}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
