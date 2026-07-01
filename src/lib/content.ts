// ============================================================================
// CONTEÚDO DO SITE — edite textos, números e listas aqui.
// Regra: nenhuma métrica fora das confirmadas abaixo. Se faltar dado,
// use o marcador [CONFIRMAR COM PEDRO] em vez de inventar.
// ============================================================================

export const site = {
  name: "Visura Soluções Financeiras",
  url: "https://visura.com.br",
  tagline: "Pensada para expandir, preparada para entregar.",
  whatsapp: "+55 48 99199-0925",
  whatsappHref: "https://wa.me/5548991990925",
  email: "contato@visura.com.br",
  instagram: "@visurabpo",
  instagramHref: "https://instagram.com/visurabpo",
  city: "Florianópolis/SC",
};

// Métricas confirmadas (apresentação comercial + confirmação do Pedro em 07/2026)
export const metrics = [
  { value: 28, prefix: "R$ ", suffix: "M", label: "em reais geridos", decimals: 0 },
  { value: 40, prefix: "", suffix: "%", label: "de redução de custos", decimals: 0 },
  { value: 91, prefix: "", suffix: "%", label: "de satisfação do cliente", decimals: 0 },
  { value: 130, prefix: "", suffix: "", label: "de SLA médio em demandas", decimals: 0, formatAsHours: true }, // 130 min = 2h10
];

export const heroBullets = [
  "Operação direta no seu ERP",
  "R$ 28M em reais geridos",
  "SLA médio de 2h10",
];

export const clients = [
  "IT2S Group",
  "Vox Technologies",
  "C2R Advocacia",
  "2Comply",
  "Schiefler Advocacia",
  "Adapt EdTech",
  "D&M Contabilidade",
  "ESAG Ventures",
  "Muller Contabilidade",
  "ContaAzul",
  "Bling",
  "R&D Life Soluções em Seguros",
];

export const pains = [
  {
    title: "Tempo da liderança consumido pelo financeiro",
    text: "Sócios e lideranças gastam tempo precioso com rotinas operacionais manuais em vez de focar em crescer o negócio.",
  },
  {
    title: "Falta de visibilidade para decidir com segurança",
    text: "Sem informações organizadas e atualizadas, a decisão fica mais lenta, menos precisa e mais dependente de percepção do que de dados.",
  },
  {
    title: "Processos financeiros crescem sem padronização",
    text: "Processos sem fluxo definido geram retrabalho, desalinhamento entre áreas e perda de eficiência.",
  },
  {
    title: "Crescimento sem controle compromete resultados",
    text: "Mesmo com aumento de receita, a empresa pode perder eficiência, previsibilidade de caixa e capacidade de planejamento se o financeiro não evolui na mesma velocidade.",
  },
];

export type Service = {
  slug: string;
  name: string;
  definition?: string;
  summary: string;
  flagship?: boolean;
  scope?: string[];
  pillars?: { title: string; items: { name: string; desc: string }[] }[];
  methods?: string;
  deliverables?: string;
  idealFor?: string;
  includes?: string;
};

export const services: Service[] = [
  {
    slug: "bpo-financeiro",
    name: "BPO Financeiro com Assessoria",
    definition:
      "(sf) as.ses.so.ri.a — Serviço de apoio técnico e acompanhamento contínuo que organiza a operação, estrutura processos e fornece dados à gestão.",
    summary:
      "Nosso serviço mais completo: a operação financeira inteira executada pela Visura, dentro do seu ERP, com acompanhamento próximo e dados para a gestão.",
    flagship: true,
    scope: [
      "Gestão de Recebimentos",
      "Gestão de Pagamentos",
      "Gestão de Fluxo de Caixa",
      "Gestão de Notas Fiscais",
      "Conciliação Bancária",
      "Emissão de Boletos e Protestos",
      "Dashboard Financeiro Mensal",
      "Acompanhamento Próximo ao Cliente",
      "Cobrança de Inadimplentes",
      "Operação via ERP do Cliente",
    ],
    includes:
      "Inclui acesso ao Dashboard Financeiro — exclusivo deste plano.",
  },
  {
    slug: "consultoria-financeira",
    name: "Consultoria Financeira",
    definition:
      "(sf) con.sul.to.ri.a — Atuação analítica e estratégica voltada à interpretação de dados, recomendação de caminhos e apoio à tomada de decisão.",
    summary:
      "Atuação analítica e estratégica em três pilares: diagnóstico, inteligência para decisão e planejamento.",
    pillars: [
      {
        title: "Diagnóstico Financeiro",
        items: [
          {
            name: "Identificação de Gargalos",
            desc: "Mapeamento de ineficiências, riscos financeiros e pontos de atenção que afetam a saúde gerencial e o fluxo de caixa.",
          },
          {
            name: "Otimização de Custos",
            desc: "Análise de despesas, estrutura de gastos e oportunidades de melhoria.",
          },
          {
            name: "Leitura Crítica de Fluxos",
            desc: "Avaliação de rotinas, controles e fluxo financeiro para identificar fragilidades.",
          },
        ],
      },
      {
        title: "Inteligência para Decisão",
        items: [
          {
            name: "Relatório de Resultados Financeiros",
            desc: "Report com análises, tendências, projeções e leituras recomendativas.",
          },
          {
            name: "Reuniões Mensais com a Liderança",
            desc: "Repasse de resultados e discussão de direcionamentos estratégicos.",
          },
          {
            name: "Visão Gerencial e Recomendativa",
            desc: "Interpretação dos números com profundidade para decisões mais seguras e rápidas.",
          },
        ],
      },
      {
        title: "Planejamento e Direção",
        items: [
          {
            name: "Planejamento Financeiro e Orçamento",
            desc: "Construção orçamentária, definição de metas e priorização financeira.",
          },
          {
            name: "Modelagem Financeira Futura",
            desc: "Projeções e simulações para decisões de crescimento, investimento e sustentabilidade.",
          },
          {
            name: "Estruturação e Capacitação",
            desc: "Criação de fluxos internos, políticas financeiras e capacitação de equipe.",
          },
        ],
      },
    ],
    includes:
      "Inclui o Relatório de Resultados Financeiros — exclusivo deste plano.",
  },
  {
    slug: "valuation",
    name: "Valuation",
    summary:
      "O valor econômico justo da sua empresa, calculado com rigor técnico e estudo setorial.",
    methods:
      "Mais de 8 metodologias aplicadas conforme a necessidade de avaliação.",
    deliverables:
      "Relatório executivo de Valuation detalhado, com análise financeira histórica, projeções futuras baseadas em estudo setorial e histórico da empresa, análise de sensibilidade e cenários, e valor econômico justo da empresa.",
    idealFor:
      "Empresas captando investimento, negócios em processo de M&A, sucessões e saídas de sócios, planejamento estratégico de longo prazo e empreendedores que querem saber o valor econômico do próprio negócio.",
  },
  {
    slug: "business-intelligence",
    name: "Business Intelligence",
    summary:
      "Dashboards executivos e integração de dados para gestores que decidem olhando números, não achismos.",
    methods:
      "Diagnóstico da fonte de dados, controle de qualidade da coleta, criação dos dashboards, implementação em nuvem interna, treinamento da equipe e suporte pós-entrega.",
    deliverables:
      "Dashboards executivos operacionais, gerenciais, administrativos ou financeiros; planilhas gerenciais; integração com ERPs e sistemas da organização; treinamento de equipe.",
    idealFor:
      "Empresas em fase de crescimento ou com equipes de gestores que querem visualizar dados internos de forma rápida e objetiva; negócios data-driven ou com múltiplas unidades e filiais.",
  },
  {
    slug: "analise-de-setor",
    name: "Análise de Setor",
    summary:
      "Leitura estratégica do seu mercado: competidores, nichos e posições competitivas.",
    methods:
      "Avaliação de tendências de mercado, análise competitiva e de nichos emergentes, comparação com benchmarks e dados do setor, estudo da performance interna e do mercado para identificar oportunidades e ameaças.",
    deliverables:
      "Relatório estratégico detalhado com insights sobre comportamento do setor, competidores, segmentos de clientes e posições competitivas.",
    idealFor:
      "Negócios em fase de rebranding, empresas em expansão ou que querem melhorar seu posicionamento frente a rivais de mercado.",
  },
  {
    slug: "viabilidade-economica",
    name: "Viabilidade Econômica",
    summary:
      "Parecer técnico fundamentado antes de investir capital: CAPEX, ROI, VPL, TIR e payback.",
    methods:
      "Estudo completo de viabilidade analisando estado de mercado, projeção financeira, análise de indicadores e identificação de riscos.",
    deliverables:
      "Parecer técnico com recomendação fundamentada sobre viabilidade do negócio estudado, com cálculos de CAPEX, ROI, VPL, TIR, payback e projeções de cenários futuros baseadas em mercado.",
    idealFor:
      "Novos empreendedores validando a viabilidade de um negócio antes de investir capital; empresas planejando abrir novas unidades, entrar em novos mercados ou explorar alternativas.",
  },
];

export const comparison = {
  headline: "O mercado oferece partes. A Visura entrega o todo.",
  sub: "Por que soluções isoladas não resolvem problemas integrados.",
  rows: [
    { dim: "Escopo", trad: "Atuação limitada", visura: "Soluções ponta-a-ponta" },
    { dim: "Processos", trad: "Rotinas sem padrão", visura: "Fluxos padronizados e adaptáveis" },
    { dim: "Informação", trad: "Dados sem contexto", visura: "Dados para decisão" },
    { dim: "Visibilidade", trad: "Baixa transparência", visura: "Clareza gerencial e contato próximo" },
    { dim: "Suporte", trad: "Reativo e demorado", visura: "Proativo, com análise contínua" },
  ],
};

export const methodology = [
  { step: "01", title: "Diagnóstico", text: "Análise profunda da situação financeira atual e processos." },
  { step: "02", title: "Estruturação", text: "Implementação de fluxos de trabalho otimizados e integração com ERP." },
  { step: "03", title: "Execução", text: "Gestão diária de operações com precisão de nível executivo." },
  { step: "04", title: "Monitoramento", text: "Acompanhamento contínuo através de dashboards e indicadores." },
  { step: "05", title: "Crescimento", text: "Ajustes estratégicos baseados em dados de desempenho." },
];

export const journey = [
  { step: "01", title: "Reunião de Onboarding", text: "Alinhamento de objetivos financeiros e compreensão de processos internos." },
  { step: "02", title: "Coleta de Dados", text: "Levantamento de todas as informações financeiras e documentos da empresa." },
  { step: "03", title: "Mapeamento de Prioridades", text: "Análise e definição de prioridades no planejamento financeiro." },
  { step: "04", title: "Controle das Operações Diárias", text: "Monitoramento do fluxo de caixa e operações diárias." },
  { step: "05", title: "Repasse Mensal", text: "Reunião mensal dos resultados financeiros com o cliente." },
  { step: "06", title: "Reunião de Alinhamento", text: "Revisão semestral do desempenho financeiro, alinhando pontos sobre o futuro da empresa com a direção." },
];

export const differentiators = [
  "Operação direta dentro do ERP do cliente",
  "Redução significativa de custos operacionais",
  "Rotinas financeiras estruturadas e disciplinadas",
  "Visibilidade estratégica com dashboards em tempo real",
  "Suporte especializado de nível sênior sem overhead interno",
  "Capacidade de gestão multi-empresa",
];

export const about = {
  pillars: [
    {
      title: "Estrutura",
      text: "Atuação com método, organização e processos bem definidos para trazer mais clareza, consistência e segurança à gestão.",
    },
    {
      title: "Tecnologia",
      text: "Uso de ferramentas e automações que aumentam a eficiência, melhoram o controle e apoiam uma operação mais inteligente.",
    },
    {
      title: "Expertise",
      text: "Experiência prática e visão analítica reunidas para desenvolver soluções aderentes à realidade e aos objetivos de cada cliente.",
    },
  ],
  institutional:
    "A Visura foi fundada com o princípio de que pequenas e médias empresas merecem o mesmo nível de controle financeiro que grandes corporações. Não apenas executamos rotinas; profissionalizamos sua área financeira. Nosso time traz senioridade e uma abordagem consultiva, garantindo que cada relatório, dashboard e análise sirva um único propósito: ajudar empresários e gestores a tomar decisões melhores, mais rápidas e mais lucrativas.",
};

export const faq = [
  {
    q: "Como funciona o processo de entrada com a Visura?",
    a: "Iniciamos com um diagnóstico financeiro completo da empresa. A partir disso, desenhamos um plano de ação personalizado, definindo escopo, cronograma e métricas de acompanhamento para uma transição organizada e sem impactos na operação.",
  },
  {
    q: "A Visura atende empresas de quais segmentos?",
    a: "Varejo, tecnologia, indústria, serviços e startups. Nossa metodologia é adaptável às particularidades financeiras de cada setor.",
  },
  {
    q: "Vocês trabalham com ERP do cliente?",
    a: "Sim. Operamos diretamente dentro do ERP já utilizado pela empresa, com integração total e sem retrabalho ou migração desnecessária.",
  },
  {
    q: "A Visura também entrega relatórios e indicadores?",
    a: "Sim. Dashboards interativos, relatórios gerenciais e indicadores financeiros em tempo real.",
  },
  {
    q: "O atendimento é consultivo ou apenas operacional?",
    a: "Combina execução operacional de alto nível com visão consultiva estratégica.",
  },
  {
    q: "Como é definido o escopo de cada projeto?",
    a: "Construído de forma colaborativa após o diagnóstico inicial, alinhado às necessidades e prioridades da empresa.",
  },
  {
    q: "Como é tratada a confidencialidade dos dados da minha empresa?",
    a: "Todas as informações financeiras são tratadas com sigilo contratual e em conformidade com a LGPD. O acesso aos dados é restrito à equipe responsável pela sua operação.",
  },
  {
    q: "Preciso trocar de sistema para trabalhar com a Visura?",
    a: "Não. A operação acontece dentro do ERP que sua empresa já usa. Na fase de diagnóstico, validamos a integração com o seu sistema atual.",
  },
];

export const revenueBrackets = [
  "Até R$ 50 mil/mês",
  "R$ 50 mil a R$ 200 mil/mês",
  "R$ 200 mil a R$ 500 mil/mês",
  "R$ 500 mil a R$ 1 milhão/mês",
  "Acima de R$ 1 milhão/mês",
];

export const dataDisclaimer =
  "Os dados contidos nesta página são puramente fictícios, utilizados para fins de demonstração.";
