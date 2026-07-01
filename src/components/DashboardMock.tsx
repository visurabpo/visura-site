"use client";

import { useEffect, useRef, useState } from "react";
import CountUp from "./CountUp";
import { dataDisclaimer } from "@/lib/content";

// Dados fictícios de demonstração (fluxo de caixa mensal, em R$ mil)
const MONTHS = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun"];
const ENTRADAS = [182, 205, 198, 231, 244, 268];
const SAIDAS = [141, 156, 162, 168, 173, 181];

const menu = [
  "Visão Geral",
  "Contas a Pagar",
  "Contas a Receber",
  "Inadimplentes",
  "Fluxo de Caixa",
];

const W = 520;
const H = 170;
const PAD = { l: 8, r: 8, t: 14, b: 22 };

function toPoints(values: number[], min: number, max: number) {
  const iw = W - PAD.l - PAD.r;
  const ih = H - PAD.t - PAD.b;
  return values.map((v, i) => ({
    x: PAD.l + (i / (values.length - 1)) * iw,
    y: PAD.t + ih - ((v - min) / (max - min)) * ih,
  }));
}

function pathFrom(pts: { x: number; y: number }[]) {
  return pts.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
}

export default function DashboardMock() {
  const cardRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState<number | null>(null);
  const [inView, setInView] = useState(false);
  const reduce = useRef(false);

  useEffect(() => {
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const el = cardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const min = Math.min(...SAIDAS) - 20;
  const max = Math.max(...ENTRADAS) + 20;
  const pIn = toPoints(ENTRADAS, min, max);
  const pOut = toPoints(SAIDAS, min, max);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduce.current) return;
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ x: py * -4, y: px * 6 });
  };

  const onChartMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const svg = svgRef.current;
    if (!svg) return;
    const r = svg.getBoundingClientRect();
    const relX = ((e.clientX - r.left) / r.width) * W;
    let nearest = 0;
    let best = Infinity;
    pIn.forEach((p, i) => {
      const d = Math.abs(p.x - relX);
      if (d < best) {
        best = d;
        nearest = i;
      }
    });
    setHover(nearest);
  };

  const brl = (v: number) =>
    v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });

  return (
    <div style={{ perspective: "1200px" }}>
      <div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={() => setTilt({ x: 0, y: 0 })}
        style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        className="overflow-hidden rounded-2xl border border-ink-700 bg-ink-900/90 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.7)] transition-transform duration-200 ease-out"
      >
        {/* Barra superior */}
        <div className="flex items-center justify-between border-b border-ink-700/80 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-ink-700" />
            <span className="h-2.5 w-2.5 rounded-full bg-teal-600" />
          </div>
          <p className="font-mono text-[11px] text-muted">
            Dashboard Financeiro — Junho/2026 · Conta principal
          </p>
        </div>

        <div className="flex">
          {/* Menu lateral */}
          <nav
            aria-label="Menu do dashboard (demonstração)"
            className="hidden w-40 shrink-0 border-r border-ink-700/80 p-3 sm:block"
          >
            <ul className="space-y-1">
              {menu.map((m, i) => (
                <li key={m}>
                  <span
                    className={`block rounded-md px-2.5 py-1.5 text-xs ${
                      i === 0
                        ? "bg-teal-900/60 font-medium text-teal-300"
                        : "text-muted"
                    }`}
                  >
                    {m}
                  </span>
                </li>
              ))}
            </ul>
          </nav>

          {/* Conteúdo */}
          <div className="min-w-0 flex-1 p-4">
            <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
              {[
                { label: "Lucro Percentual", to: 32.4, fmt: (v: number) => `${v.toFixed(1)}%` },
                { label: "Lucro Líquido", to: 87, fmt: (v: number) => `R$ ${Math.round(v)} mil` },
                { label: "Entradas Totais", to: 268, fmt: (v: number) => `R$ ${Math.round(v)} mil` },
                { label: "Saídas Totais", to: 181, fmt: (v: number) => `R$ ${Math.round(v)} mil` },
              ].map((kpi) => (
                <div key={kpi.label} className="rounded-lg border border-ink-700/70 bg-ink-950/60 p-2.5">
                  <p className="text-[10px] uppercase tracking-wide text-muted">{kpi.label}</p>
                  <p className="mt-1 font-mono text-sm font-medium text-mist">
                    {inView ? <CountUp to={kpi.to} format={kpi.fmt} /> : kpi.fmt(0)}
                  </p>
                </div>
              ))}
            </div>

            {/* Gráfico */}
            <div className="mt-3 rounded-lg border border-ink-700/70 bg-ink-950/60 p-3">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[11px] font-medium text-mist/90">Fluxo de Caixa</p>
                <div className="flex gap-3 text-[10px] text-muted">
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-3 rounded-full bg-teal-400" /> Entradas
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-3 rounded-full bg-mist/40" /> Saídas
                  </span>
                </div>
              </div>
              <svg
                ref={svgRef}
                viewBox={`0 0 ${W} ${H}`}
                className="w-full cursor-crosshair"
                role="img"
                aria-label="Gráfico de fluxo de caixa com dados fictícios de demonstração"
                onMouseMove={onChartMove}
                onMouseLeave={() => setHover(null)}
              >
                <defs>
                  <linearGradient id="fillIn" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2FBFAE" stopOpacity="0.28" />
                    <stop offset="100%" stopColor="#2FBFAE" stopOpacity="0" />
                  </linearGradient>
                </defs>

                {[0.25, 0.5, 0.75].map((f) => (
                  <line
                    key={f}
                    x1={PAD.l}
                    x2={W - PAD.r}
                    y1={PAD.t + f * (H - PAD.t - PAD.b)}
                    y2={PAD.t + f * (H - PAD.t - PAD.b)}
                    stroke="#232C2A"
                    strokeWidth="1"
                  />
                ))}

                <path
                  d={`${pathFrom(pIn)} L${pIn[pIn.length - 1].x},${H - PAD.b} L${pIn[0].x},${H - PAD.b} Z`}
                  fill="url(#fillIn)"
                  className={`chart-fill ${inView ? "is-in" : ""}`}
                />
                <path
                  d={pathFrom(pOut)}
                  fill="none"
                  stroke="#8A9694"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  pathLength={1}
                  className={`chart-line ${inView ? "is-in" : ""}`}
                  style={{ animationDelay: "0.25s" }}
                />
                <path
                  d={pathFrom(pIn)}
                  fill="none"
                  stroke="#2FBFAE"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  pathLength={1}
                  className={`chart-line ${inView ? "is-in" : ""}`}
                />

                {MONTHS.map((m, i) => (
                  <text
                    key={m}
                    x={pIn[i].x}
                    y={H - 6}
                    textAnchor="middle"
                    fontSize="10"
                    fill="#96A3A0"
                  >
                    {m}
                  </text>
                ))}

                {hover !== null && (
                  <g>
                    <line
                      x1={pIn[hover].x}
                      x2={pIn[hover].x}
                      y1={PAD.t}
                      y2={H - PAD.b}
                      stroke="#2FBFAE"
                      strokeOpacity="0.4"
                      strokeDasharray="3 3"
                    />
                    <circle cx={pIn[hover].x} cy={pIn[hover].y} r="3.5" fill="#2FBFAE" />
                    <circle cx={pOut[hover].x} cy={pOut[hover].y} r="3" fill="#8A9694" />
                  </g>
                )}
              </svg>

              <div className="h-6">
                {hover !== null && (
                  <p className="font-mono text-[11px] text-muted">
                    {MONTHS[hover]}:{" "}
                    <span className="text-teal-300">{brl(ENTRADAS[hover] * 1000)}</span> entradas ·{" "}
                    <span className="text-mist/80">{brl(SAIDAS[hover] * 1000)}</span> saídas
                  </p>
                )}
              </div>
            </div>

            <p className="mt-3 text-[10px] leading-snug text-muted/80">{dataDisclaimer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
