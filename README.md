# Site institucional — Visura Soluções Financeiras

Site one-page em **Next.js (App Router) + TypeScript + Tailwind CSS**, pronto para deploy na Vercel. Roda sem nenhuma variável de ambiente obrigatória.

## Rodar localmente

```bash
npm install
npm run dev
# http://localhost:3000
```

Build de produção:

```bash
npm run build
npm start
```

## Deploy na Vercel

1. Suba a pasta num repositório GitHub.
2. Em [vercel.com/new](https://vercel.com/new), importe o repositório.
3. A Vercel detecta Next.js automaticamente — não precisa configurar nada.
4. (Opcional) Adicione a env var do formulário (abaixo) em *Settings → Environment Variables* e faça redeploy.

## Onde editar textos, números e listas

**Tudo está em um único arquivo: `src/lib/content.ts`.** Serviços, métricas, FAQ, dores, comparativo, diferenciais, jornada, contatos e disclaimer. Os componentes só renderizam o que está lá.

Regra mantida do briefing: nenhuma métrica fora das confirmadas. Métricas em uso na seção de resultados (confirmadas em jul/2026):

- R$ 28M em reais geridos
- 40% de redução de custos
- 91% de satisfação do cliente (valor da apresentação comercial, confirmado por Pedro)
- 2h10 de SLA médio (representado como `130` minutos com `formatAsHours: true` para o count-up animar em formato XhMM)

O "100% de decisões orientadas por dados" aparece como texto de apoio na mesma seção, não como contador.

## Formulário de diagnóstico (webhook n8n)

O formulário funciona sem backend: sem webhook configurado, ele simula o envio (loga o lead no console) e mostra o estado de sucesso. Para plugar no n8n:

1. Crie um workflow no n8n com um nó **Webhook** (método POST).
2. Configure na Vercel (ou em `.env.local` para dev):

```bash
NEXT_PUBLIC_FORM_WEBHOOK_URL=https://n8n.visura.com.br/webhook/site-diagnostico
```

3. O payload enviado é JSON com: `nome`, `email`, `whatsapp`, `empresa`, `faturamento`, `interesse`, `mensagem`, `origem: "site-visura"`, `ts`.

Estados de loading, sucesso e erro já tratados no componente `src/components/DiagnosticForm.tsx`.

## Assets a substituir por arquivos reais

| Item | Onde está hoje | O que fazer |
|---|---|---|
| Logo Visura | SVG inline (`Logo` em `src/components/Header.tsx`) e `public/favicon.svg` | Substituir pelo arquivo oficial do "V" (versões branca/preta). Basta trocar o SVG inline e o favicon. |
| Logos de clientes | Wordmarks tipográficas em `src/components/ClientsMarquee.tsx` | Colocar os arquivos em `public/clients/` (SVG de preferência, monocromático claro) e trocar o `<li>` de texto por `<Image src={"/clients/arquivo.svg"} alt={nome} height={28} width={...} />`. |
| OG image | Referenciada como `/og-image.png` no `layout.tsx`, arquivo não incluído | Criar um PNG 1200×630 com a identidade da marca e salvar em `public/og-image.png`. |
| Política de Privacidade | Placeholder no footer | Publicar a página e trocar o texto por um link. Marcado com `[CONFIRMAR COM PEDRO]` no código. |

## Pendências marcadas no código

Busque por `[CONFIRMAR COM PEDRO]` no projeto:

- Link da Política de Privacidade no footer.
- Formato oficial do WhatsApp: o site usa `+55 48 99199-0925` (formato completo com nono dígito). A apresentação comercial traz `(48) 9199-0925` — confirmar/atualizar a fonte que estiver desatualizada.

## Estrutura

```
src/
  app/           layout (SEO/fontes), page, globals.css, sitemap, robots
  components/    uma seção por componente
  lib/content.ts todo o conteúdo editável
public/          favicon (e futuros logos/og-image)
```

## Notas técnicas

- Fontes via Google Fonts (`<link>` no layout): Fraunces (títulos), Schibsted Grotesk (corpo), IBM Plex Mono (dados). Se quiser self-hosting/otimização, migre para `next/font`.
- Animações (reveal em scroll, count-up, trace do gráfico, marquee) respeitam `prefers-reduced-motion`.
- Dashboard e relatório mostrados nas seções de produto usam dados fictícios com o disclaimer oficial ("os dados contidos nesta página são puramente fictícios…").
- Acessibilidade: foco visível, `aria-expanded`/`aria-controls` nos accordions, labels em todos os campos do formulário, tabela comparativa com versão em cards no mobile.
