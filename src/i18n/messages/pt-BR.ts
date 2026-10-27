import { headerPomMenuMessages } from "../headerPomMenuMessages.ts";
import type { SiteMessages } from "@/i18n/types";
import coreMessages from "./pt-BR-core.ts";

const messages = {
  ...coreMessages,
  Taxonomy: {
    products: {
      pom: "Compostos de POM",
      pa6: "Compostos de PA6",
      pa66: "Compostos de PA66",
      ppa: "Compostos de PPA",
      pomResin: "Resina POM",
      conductiveAntistatic: "Compostos condutivos e antiestáticos",
    },
    productEyebrows: {
      coreLine: "Linha principal",
      additionalFamily: "Família poliamida",
      higherTemperature: "Poliamida de alta temperatura",
      supplement: "Resina base",
      crossMaterial: "Condutivo e antiestático",
    },
    applications: {
      automotive: "Automotivo",
      electronics: "Eletrônicos",
      "conveyor-automation": "Transportadores e automação",
      "motion-components": "Componentes de movimento",
      "water-control": "Controle de água",
      "washing-machine-components": "Máquina de lavar",
      "outdoor-equipment": "Equipamentos externos",
      "textile-machinery": "Máquinas têxteis",
    },
    componentSolutions: "Soluções por componente",
    resources: {
      "material-selection": {
        title: "Seleção de materiais",
        navigationLabel: "Escolher um material",
      },
      "processing-troubleshooting": {
        title: "Processamento e solução de problemas",
        navigationLabel: "Processar e solucionar",
      },
      "data-validation": {
        title: "Dados e validação",
        navigationLabel: "Localizar e validar dados",
      },
    },
  },
  Header: {
    pomMenu: headerPomMenuMessages["pt-br"],
    brandHomeLabel: "Página inicial da Taiyi Polymer",
    navigationAria: "Navegação principal",
    products: "Produtos",
    productCategories: "Categorias de produtos",
    productDescription:
      "Famílias de materiais e grades condutivos ou antiestáticos para diferentes matrizes poliméricas.",
    allProducts: "Todos os produtos",
    applications: "Aplicações",
    applicationAreas: "Áreas de aplicação",
    applicationDescription:
      "Explore aplicações comuns de peças moldadas por condição de trabalho e requisito de material.",
    allApplications: "Todas as aplicações",
    resources: "Recursos",
    technicalResources: "Recursos técnicos",
    resourceDescription:
      "Encontre guias práticos para seleção de materiais, solução de problemas de processamento e validação de dados.",
    allResources: "Todos os recursos",
    news: "Notícias",
    aboutUs: "Sobre nós",
    contact: "Contato",
    searchLabel: "Pesquisar fichas técnicas e recursos",
    languageSwitcherLabel: "Idioma",
    englishDestinationLabel: "Conteúdo em inglês",
    menu: "Menu",
    close: "Fechar",
    findGradeData: "Localizar dados de grades e TDS",
    findTds: "Buscar TDS",
    discussApplication: "Fale sobre sua aplicação",
  },
  Footer: {
    brandRelation: "Taiyi Polymer · Materiais de engenharia PLATFORM®",
    logoAlt: "Marca registrada PLATFORM",
    products: "Produtos",
    applications: "Aplicações",
    allApplications: "Todas as aplicações",
    resources: "Recursos",
    technicalData: "Dados dos grades e TDS",
    company: "Empresa",
    aboutUs: "Sobre nós",
    contactSales: "Falar com vendas",
    qualityCompliance: "Qualidade e conformidade",
    manufacturing: "Fabricação",
    email: "E-mail",
    call: "Telefone",
    emailAria: "Enviar e-mail para a Taiyi Polymer",
    callAria: "Ligar para a Taiyi Polymer",
    whatsappAria: "Falar com a Taiyi Polymer pelo WhatsApp",
    contactActionsAria: "Ações de contato no rodapé",
    navigationAria: "Navegação do rodapé",
    location: "Yancheng, Jiangsu, China",
    rightsReserved: "Todos os direitos reservados.",
    privacyPolicy: "Política de privacidade",
  },
  FloatingContact: {
    mailSubject: "Solicitação de requisitos de material",
    email: "E-mail",
    whatsapp: "WhatsApp",
    call: "Telefone",
    closeOptions: "Fechar opções de contato",
    openOptions: "Abrir opções de contato",
    salesContact: "Contato comercial",
    title: "Fale sobre sua aplicação",
    description:
      "Compartilhe com nossa equipe de materiais a peça, as metas de desempenho e os documentos necessários.",
    directOptionsAria: "Opções de contato direto",
    triggerLabel: "Discutir sua aplicação",
  },
  Analytics: {
    title: "Suas escolhas de privacidade",
    descriptionBeforeLink: "Usamos cookies opcionais do Google Analytics e do Google Ads para medir o uso do site e as consultas geradas por anúncios. Selecione “Aceitar todos” para permitir ambos. Leia nossa",
    privacyPolicy: "Política de privacidade",
    preferenceNotice: "Altere ou retire sua escolha nas Configurações de cookies. A publicidade personalizada permanece desativada.",
    acceptAll: "Aceitar todos",
    rejectOptional: "Continuar sem cookies opcionais",
    dismiss: "Fechar sem alterar as escolhas",
    settings: "Configurações de cookies",
  },
  Products: {
    metadata: {
      title: "Compostos de plásticos de engenharia | Taiyi Polymer",
      description:
        "Conheça os compostos de POM modificado, a resina POM base, famílias selecionadas de PA6, PA66 e PPA e compostos condutivos e antiestáticos da Taiyi Polymer.",
      imageAlt:
        "Diretório de materiais POM e plásticos de engenharia da Taiyi Polymer",
    },
    breadcrumbHome: "Início",
    breadcrumbProducts: "Produtos",
    hero: {
      eyebrow: "Diretório de produtos",
      title: "Materiais e grades",
      body:
        "O POM modificado PLATFORM® combina resistência ao desgaste, baixo atrito e estabilidade dimensional para engrenagens, mancais e peças de encaixe preciso. A Taiyi Polymer oferece grades lubrificados, reforçados e modificados ao impacto, além de PA6, PA66, PPA e materiais condutivos e antiestáticos para aplicações automotivas, elétricas, eletrônicas e industriais.",
      startAction: "Escolher pelos requisitos da peça",
      dataSheetsAction: "Encontrar dados de grades e TDS",
    },
    selection: {
      kicker: "Requisitos primeiro",
      title: "O que a peça precisa fazer?",
      body:
        "Compare os sistemas de modificação conforme os principais riscos de falha da peça e identifique as propriedades a verificar.",
      navigationAria: "Rotas de material por requisito da peça",
      paths: [
        {
          label: "Desgaste / Atrito",
          title: "Peças móveis ou deslizantes",
          description:
            "Para stick-slip e força, compare PTFE ou silicone; para folga crescente, desgaste e retenção mecânica.",
        },
        {
          label: "Rigidez / Dimensão",
          title: "Precisão sob carga",
          description:
            "Para flexão de suportes, compare módulo e fluência; para ajustes precisos, contração direcional e empenamento.",
        },
        {
          label: "Impacto / Montagem",
          title: "Encaixes ou cargas de choque",
          description:
            "Para trincas nas travas, confira tenacidade ao entalhe e deformação; para fixação contínua, retenção após fluência.",
        },
        {
          label: "Controle estático",
          title: "Função condutiva ou antiestática",
          description:
            "Defina método de resistência e aterramento, depois matriz e sistema CNT/carbono por temperatura, rigidez e dimensões.",
        },
      ],
    },
    families: {
      kicker: "Linha completa de materiais",
      title: "Explore todas as famílias de produtos",
      body:
        "Grades listados e aplicações em seis famílias de produtos.",
      items: [
        {
          title: "Compostos de POM modificado",
          label: "Linha principal",
          description:
            "Opções de POM resistentes ao desgaste, de baixo atrito, reforçadas, condutivas, antiestáticas e de alto impacto para peças moldadas de precisão.",
          metricLabel: "grades modificados",
        },
        {
          title: "Resina POM base",
          label: "Resina base",
          description:
            "Estabeleça referências de moldagem, dimensões e mecânica; escolha fluidez para peças gerais, complexas ou finas.",
          metricLabel: "grades base",
        },
        {
          title: "Compostos de PA6",
          label: "Poliamidas",
          description:
            "PA6 com vidro, tenacificação, retardante de chama, antidesgaste ou mineral; selecione por rigidez, tenacidade e fluidez.",
          metricLabel: "grades listados",
        },
        {
          title: "Compostos de PA66",
          label: "Poliamidas",
          description:
            "PA66 com vidro, retardante de chama ou antidesgaste; priorize rigidez sob carga quente e separe dimensões secas e condicionadas.",
          metricLabel: "grades listados",
        },
        {
          title: "Compostos de PPA",
          label: "Alta temperatura",
          description:
            "Se rigidez quente ou dimensões sob umidade limitarem PA66, compare PPA e verifique secagem, temperatura do molde e equipamento.",
          metricLabel: "grades listados",
        },
        {
          title: "Compostos condutivos e antiestáticos",
          label: "Multimaterial",
          description:
            "Compare opções antiestáticas com CNT e condutivas com fibra de carbono em matrizes de POM, ABS, PC, PA6, PA66, PPS, TPU e outras.",
          metricLabel: "grades listados",
        },
      ],
    },
    inquiry: {
      title: "Prepare uma lista preliminar de materiais",
      eyebrow: "Preparação da consulta",
      action: "Fale sobre sua aplicação",
      body:
        "Envie função, material atual e requisitos não atendidos, com desenhos ou condições disponíveis. Receba comparação de graus, TDS, suporte com amostras e verificações prioritárias.",
      contactSource: "Diretório de produtos",
    },
  },
} satisfies SiteMessages;

export default messages;
