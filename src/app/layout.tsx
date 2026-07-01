import type { Metadata } from "next";
import "./globals.css";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Visura Soluções Financeiras — BPO Financeiro e Inteligência para PMEs",
    template: "%s | Visura Soluções Financeiras",
  },
  description:
    "Terceirização e inteligência financeira para pequenas e médias empresas: BPO Financeiro com Assessoria, Consultoria, Valuation, Business Intelligence, Análise de Setor e Viabilidade Econômica. Operação direta no seu ERP, com dashboards e acompanhamento próximo.",
  openGraph: {
    title: "Visura Soluções Financeiras",
    description:
      "Pensada para expandir, preparada para entregar. BPO Financeiro e inteligência de dados para PMEs.",
    url: site.url,
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Visura Soluções Financeiras" }],
  },
  icons: { icon: "/favicon.svg" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=Schibsted+Grotesk:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
