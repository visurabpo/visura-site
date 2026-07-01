import { services, site } from "@/lib/content";
import { Logo } from "./Header";

export default function Footer() {
  return (
    <footer className="border-t border-ink-800/80 bg-ink-950">
      <div className="mx-auto grid max-w-wrap gap-12 px-5 py-16 lg:grid-cols-[1.3fr_1fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Logo />
            <span className="font-display text-lg font-medium">Visura</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Terceirização e inteligência financeira para pequenas e médias
            empresas. {site.city}.
          </p>
          <p className="mt-4 font-display text-sm italic text-teal-400">{site.tagline}</p>
        </div>

        <nav aria-label="Soluções">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Soluções</p>
          <ul className="space-y-2.5">
            {services.map((s) => (
              <li key={s.slug}>
                <a href="#solucoes" className="text-sm text-mist/80 transition-colors hover:text-teal-300">
                  {s.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Empresa">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Empresa</p>
          <ul className="space-y-2.5">
            <li><a href="#sobre" className="text-sm text-mist/80 hover:text-teal-300">Sobre a Visura</a></li>
            <li><a href="#metodo" className="text-sm text-mist/80 hover:text-teal-300">Metodologia</a></li>
            <li><a href="#resultados" className="text-sm text-mist/80 hover:text-teal-300">Resultados</a></li>
            <li><a href="#faq" className="text-sm text-mist/80 hover:text-teal-300">FAQ</a></li>
            <li><a href="#diagnostico" className="text-sm text-mist/80 hover:text-teal-300">Diagnóstico grátis</a></li>
          </ul>
        </nav>

        <div>
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">Contato</p>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-mist/80 hover:text-teal-300">
                WhatsApp {site.whatsapp}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="text-mist/80 hover:text-teal-300">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.instagramHref} target="_blank" rel="noopener noreferrer" className="text-mist/80 hover:text-teal-300">
                Instagram {site.instagram}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-800/80">
        <div className="mx-auto flex max-w-wrap flex-col items-center justify-between gap-3 px-5 py-6 text-xs text-muted sm:flex-row lg:px-8">
          <p>© {new Date().getFullYear()} Visura Soluções Financeiras. Todos os direitos reservados.</p>
          {/* Substituir pelo link real quando a política estiver publicada — [CONFIRMAR COM PEDRO] */}
          <p>Política de Privacidade em breve</p>
        </div>
      </div>
    </footer>
  );
}
