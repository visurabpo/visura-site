"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { faq } from "@/lib/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-wrap px-5 py-20 lg:px-8 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="font-display text-3xl font-medium leading-tight tracking-tight sm:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="mt-4 max-w-sm text-muted">
            Não achou sua dúvida aqui? Fale direto com um especialista pelo
            WhatsApp ou peça um diagnóstico gratuito.
          </p>
        </Reveal>

        <div className="divide-y divide-ink-800 rounded-2xl border border-ink-700/70 bg-ink-900/40">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={i * 40}>
                <div>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-btn-${i}`}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className={`font-medium ${isOpen ? "text-teal-300" : "text-mist"}`}>
                      {item.q}
                    </span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 12 12"
                      aria-hidden="true"
                      className={`shrink-0 text-teal-400 transition-transform duration-300 ${
                        isOpen ? "rotate-90" : ""
                      }`}
                    >
                      <path d="M3 2l5 4-5 4" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </button>
                  <div
                    id={`faq-panel-${i}`}
                    role="region"
                    aria-labelledby={`faq-btn-${i}`}
                    className="acc-panel"
                    data-open={isOpen}
                  >
                    <div className="acc-inner">
                      <p className="px-6 pb-6 leading-relaxed text-muted">{item.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
