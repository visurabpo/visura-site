import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { dataDisclaimer } from "@/lib/content";

function ReportMock() {
  return (
    <div className="overflow-hidden rounded-2xl border border-ink-700 bg-ink-900/80 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)]">
      <div className="border-b border-ink-700/80 bg-ink-950/60 px-5 py-4">
        <p className="font-display text-sm text-mist">Relatório de Resultados — Abril/2026</p>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">Análise Financeira</p>
      </div>
      <div className="space-y-4 p-5">
        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-teal-400">Resultados</p>
          <div className="grid grid-cols-3 gap-2">
            {[
              { l: "Faturamento", v: "R$ 412 mil" },
              { l: "Despesas", v: "R$ 289 mil" },
              { l: "Lucro real", v: "+12,4%" },
            ].map((x) => (
              <div key={x.l} className="rounded-lg border border-ink-700/70 bg-ink-950/60 p-3">
                <p className="text-[10px] text-muted">{x.l}</p>
                <p className="mt-0.5 font-mono text-xs font-medium text-mist">{x.v}</p>
              </div>
            ))}
          </div>
          <p className="mt-2 text-[11px] leading-relaxed text-muted">
            Leitura textual do período, comparando o desempenho com a média do
            mercado e do setor.
          </p>
        </div>
        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-teal-400">Expectativa</p>
          <div className="flex h-16 items-end gap-1.5" aria-hidden="true">
            {[36, 48, 42, 58, 52, 64, 70, 60].map((h, i) => (
              <div
                key={i}
                style={{ height: `${h}%` }}
                className={`flex-1 rounded-t ${i >= 6 ? "bg-teal-500/80" : "bg-mist/20"}`}
              />
            ))}
          </div>
          <p className="mt-1.5 text-[11px] text-muted">Receitas e despesas vs. meses anteriores e futuros.</p>
        </div>
        <div>
          <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-teal-400">Áreas de faturamento</p>
          {[
            { l: "Plano A", w: 62 },
            { l: "Plano B", w: 27 },
            { l: "Avulsos", w: 11 },
          ].map((x) => (
            <div key={x.l} className="mb-1.5 flex items-center gap-2">
              <span className="w-14 shrink-0 text-[10px] text-muted">{x.l}</span>
              <div className="h-2 flex-1 rounded-full bg-ink-700/60">
                <div className="h-2 rounded-full bg-teal-500/70" style={{ width: `${x.w}%` }} />
              </div>
              <span className="w-8 text-right font-mono text-[10px] text-mist/80">{x.w}%</span>
            </div>
          ))}
          <p className="mt-1.5 text-[11px] text-muted">
            Participação por linha de serviço, nível de inadimplência, valor em
            aberto e clientes inadimplentes.
          </p>
        </div>
        <p className="text-[10px] leading-snug text-muted/80">{dataDisclaimer}</p>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <section className="mx-auto max-w-wrap space-y-24 px-5 py-20 lg:px-8 lg:py-28">
      {/* Dashboard Financeiro */}
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Produto · exclusivo do BPO Financeiro + Assessoria</Eyebrow>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            Dashboard Financeiro
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            Transforma dados financeiros em visualizações claras e estratégicas
            para acompanhamento e tomada de decisão. Visão Geral, Contas a
            Pagar, Contas a Receber, Inadimplentes e Fluxo de Caixa em um só
            lugar, com seletor de período, data de corte e conta bancária.
          </p>
          <ul className="mt-6 space-y-2.5">
            {[
              "Indicadores de Lucro Percentual, Lucro Líquido, Entradas e Saídas Totais",
              "Gráficos de entradas e saídas ao longo do período",
              "Totais por área, cliente e centro de custo em barras horizontais",
              "Acesso com identidade visual Visura",
            ].map((f) => (
              <li key={f} className="flex items-start gap-2 text-sm text-mist/85">
                <svg width="10" height="12" viewBox="0 0 12 12" aria-hidden="true" className="mt-1 shrink-0">
                  <path d="M2 2l5 4-5 4" fill="none" stroke="#2FBFAE" strokeWidth="2" />
                </svg>
                {f}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <div className="rounded-2xl border border-ink-700 bg-ink-900/70 p-6">
            <p className="font-display text-lg text-mist">Dashboard Financeiro</p>
            <p className="mt-1 text-sm text-muted">Seja bem-vindo!</p>
            <div className="mt-5 space-y-3" aria-hidden="true">
              <div className="h-9 rounded-lg border border-ink-700/70 bg-ink-950/60" />
              <div className="h-9 rounded-lg border border-ink-700/70 bg-ink-950/60" />
              <div className="flex h-9 items-center justify-center rounded-lg bg-teal-500 text-sm font-semibold text-ink-950">
                Entrar
              </div>
            </div>
            <p className="mt-5 text-[10px] text-muted/80">{dataDisclaimer}</p>
          </div>
        </Reveal>
      </div>

      {/* Relatório de Resultados */}
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="lg:order-2">
          <Eyebrow>Produto · exclusivo da Consultoria Financeira</Eyebrow>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            Relatório de Resultados Financeiros
          </h2>
          <p className="mt-5 leading-relaxed text-muted">
            Mais do que apresentar números, é uma leitura consultiva sobre o
            desempenho financeiro da empresa: insights, rankings, pontos de
            atenção e perspectivas para os próximos períodos.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Enquanto o dashboard organiza a visualização dos dados, o relatório
            aprofunda a análise e propõe leituras estratégicas personalizadas.
          </p>
        </Reveal>
        <Reveal delay={120} className="lg:order-1">
          <ReportMock />
        </Reveal>
      </div>
    </section>
  );
}
