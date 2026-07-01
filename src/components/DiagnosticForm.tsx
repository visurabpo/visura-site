"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { revenueBrackets, services } from "@/lib/content";

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-ink-700 bg-ink-950/70 px-4 py-3 text-sm text-mist placeholder:text-muted/60 transition-colors focus:border-teal-600";

export default function DiagnosticForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus("loading");

    const webhook = process.env.NEXT_PUBLIC_FORM_WEBHOOK_URL;

    try {
      if (webhook) {
        const res = await fetch(webhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...data, origem: "site-visura", ts: new Date().toISOString() }),
        });
        if (!res.ok) throw new Error(`Webhook respondeu ${res.status}`);
      } else {
        // Sem webhook configurado: simula envio para a versão inicial.
        // Configure NEXT_PUBLIC_FORM_WEBHOOK_URL (ex.: endpoint do n8n) — ver README.
        await new Promise((r) => setTimeout(r, 900));
        console.info("[Visura] Lead capturado (sem webhook configurado):", data);
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("[Visura] Falha ao enviar formulário:", err);
      setStatus("error");
    }
  }

  return (
    <section id="diagnostico" className="border-t border-ink-800/80 bg-ink-900/40">
      <div className="mx-auto grid max-w-wrap gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-28">
        <Reveal>
          <Eyebrow>Comece agora</Eyebrow>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            Diagnóstico financeiro gratuito
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted">
            Conte um pouco sobre a sua empresa e receba uma análise inicial da
            sua área financeira, sem compromisso. A partir do diagnóstico,
            desenhamos um plano de ação personalizado com escopo, cronograma e
            métricas de acompanhamento.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Transição organizada, sem impactos na operação",
              "Escopo construído de forma colaborativa",
              "Resposta rápida: SLA médio de 2h10 em demandas",
            ].map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-mist/85">
                <svg width="10" height="12" viewBox="0 0 12 12" aria-hidden="true" className="mt-1 shrink-0">
                  <path d="M2 2l5 4-5 4" fill="none" stroke="#2FBFAE" strokeWidth="2" />
                </svg>
                {b}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          {status === "success" ? (
            <div
              role="status"
              className="flex h-full flex-col items-start justify-center rounded-2xl border border-teal-700/70 bg-teal-900/20 p-10"
            >
              <p className="font-display text-2xl text-teal-300">Recebido!</p>
              <p className="mt-3 leading-relaxed text-mist/90">
                Sua solicitação de diagnóstico foi enviada. Nossa equipe entra
                em contato pelo WhatsApp ou e-mail informado.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-medium text-teal-400 hover:text-teal-300"
              >
                Enviar outra solicitação
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              aria-label="Formulário de diagnóstico gratuito"
              className="rounded-2xl border border-ink-700/70 bg-ink-950/50 p-7 sm:p-9"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="f-nome" className="mb-1.5 block text-sm text-mist/90">
                    Nome
                  </label>
                  <input id="f-nome" name="nome" required autoComplete="name" placeholder="Seu nome" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="f-email" className="mb-1.5 block text-sm text-mist/90">
                    E-mail corporativo
                  </label>
                  <input
                    id="f-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="voce@suaempresa.com.br"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="f-whats" className="mb-1.5 block text-sm text-mist/90">
                    WhatsApp
                  </label>
                  <input
                    id="f-whats"
                    name="whatsapp"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="(48) 9 9999-9999"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="f-empresa" className="mb-1.5 block text-sm text-mist/90">
                    Empresa
                  </label>
                  <input id="f-empresa" name="empresa" required autoComplete="organization" placeholder="Nome da empresa" className={inputClass} />
                </div>
                <div>
                  <label htmlFor="f-faixa" className="mb-1.5 block text-sm text-mist/90">
                    Faixa de faturamento
                  </label>
                  <select id="f-faixa" name="faturamento" required defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      Selecione
                    </option>
                    {revenueBrackets.map((r) => (
                      <option key={r} value={r}>
                        {r}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="f-frente" className="mb-1.5 block text-sm text-mist/90">
                    Frente de interesse
                  </label>
                  <select id="f-frente" name="interesse" required defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      Selecione
                    </option>
                    {services.map((s) => (
                      <option key={s.slug} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                    <option value="Ainda não sei">Ainda não sei</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="f-msg" className="mb-1.5 block text-sm text-mist/90">
                    Conte um pouco do seu momento <span className="text-muted">(opcional)</span>
                  </label>
                  <textarea
                    id="f-msg"
                    name="mensagem"
                    rows={4}
                    placeholder="Principais desafios do financeiro hoje, sistemas que usam, o que gostaria de melhorar…"
                    className={inputClass}
                  />
                </div>
              </div>

              {status === "error" && (
                <p role="alert" className="mt-4 rounded-lg border border-red-900/70 bg-red-950/40 px-4 py-3 text-sm text-red-300">
                  Não foi possível enviar agora. Tente novamente em instantes ou
                  fale direto conosco pelo WhatsApp.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-6 w-full rounded-full bg-teal-500 px-6 py-3.5 text-sm font-semibold text-ink-950 transition-colors hover:bg-teal-400 disabled:cursor-wait disabled:opacity-70"
              >
                {status === "loading" ? "Enviando…" : "Solicitar diagnóstico gratuito"}
              </button>

              <p className="mt-4 text-xs leading-relaxed text-muted">
                Ao enviar, você concorda que a Visura utilize seus dados para
                entrar em contato sobre esta solicitação, em conformidade com a
                LGPD. Seus dados não são compartilhados com terceiros.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
