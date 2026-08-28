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
      additionalFamily: "Família adicional",
      higherTemperature: "Alta temperatura",
      supplement: "Complemento",
      crossMaterial: "Multimaterial",
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
    brandHomeLabel: "Página inicial da Taiyi Polymer",
    navigationAria: "Navegação principal",
    products: "Produtos",
    productCategories: "Categorias de produtos",
    productDescription:
      "Comece por uma família de materiais ou compare grades condutivos e antiestáticos entre diferentes matrizes.",
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
    discussApplication: "Fale sobre sua aplicação",
  },
  Footer: {
    brandRelation: "Taiyi Polymer · Materiais de engenharia PLATFORM®",
    logoAlt: "Marca registrada PLATFORM",
    pitchTitle: "Materiais, documentos e suporte ao fornecimento.",
    pitchCopy:
      "Conheça os materiais de engenharia PLATFORM®, os dados de grades e os documentos técnicos, ou fale com a Taiyi Polymer sobre amostras, fornecimento e qualificações da empresa.",
    discussApplication: "Fale sobre sua aplicação",
    products: "Produtos",
    applications: "Aplicações",
    allApplications: "Todas as aplicações",
    resources: "Recursos",
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
    triggerLabel: "Contato",
  },
  Analytics: {
    title: "Suas escolhas de privacidade",
    descriptionBeforeLink:
      "Usamos cookies de análise opcionais para entender como os visitantes usam este site e melhorar nossas informações sobre materiais. A análise permanece desativada até você aceitar. Você pode alterar sua escolha a qualquer momento nas Configurações de cookies. Leia nossa",
    privacyPolicy: "Política de privacidade",
    currentChoice: "Escolha atual:",
    accepted: "aceita",
    notAccepted: "não aceita",
    accept: "Aceitar cookies de análise",
    continueWithout: "Continuar sem cookies de análise",
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
      title: "Compostos de plásticos de engenharia",
      body:
        "O POM modificado é a linha principal. A resina POM base e uma seleção de compostos de PA6, PA66 e PPA complementam o portfólio quando a peça exige outro equilíbrio entre desempenho e processamento.",
      startAction: "Escolher pelos requisitos da peça",
      dataSheetsAction: "Encontrar dados de grades e TDS",
    },
    selection: {
      kicker: "Requisitos primeiro",
      title: "O que a peça precisa fazer?",
      body:
        "Escolha a rota mais próxima do requisito da peça para definir os fatores que precisam ser equilibrados antes de comparar grades específicos.",
      navigationAria: "Rotas de material por requisito da peça",
      paths: [
        {
          label: "Desgaste / Atrito",
          title: "Peças móveis ou deslizantes",
          description:
            "Compare carga, velocidade, contrapeça, lubrificação, ruído e a vida útil de desgaste necessária.",
        },
        {
          label: "Rigidez / Dimensão",
          title: "Precisão sob carga",
          description:
            "Compare rigidez, fluência, retração, empenamento e orientação do fluxo na peça moldada.",
        },
        {
          label: "Impacto / Montagem",
          title: "Encaixes ou cargas de choque",
          description:
            "Verifique impacto, temperatura, linhas de solda e tensão de montagem antes de definir a tenacidade.",
        },
        {
          label: "Controle estático",
          title: "Função condutiva ou antiestática",
          description:
            "Defina a resistência-alvo, o aterramento, a geometria, a cor e o método de ensaio antes de escolher a matriz.",
        },
      ],
    },
    families: {
      kicker: "Linha completa de materiais",
      title: "Explore todas as famílias de produtos",
      body:
        "Compare os grades listados e as aplicações das seis famílias e, em seguida, abra a família mais adequada para continuar a seleção.",
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
          label: "Fornecimento selecionado",
          description:
            "Opções selecionadas de resina base para comparação de POM, documentos técnicos e amostragem de projetos.",
          metricLabel: "grades base",
        },
        {
          title: "Compostos de PA6",
          label: "Família adicional",
          description:
            "Compostos de PA6 selecionados para peças reforçadas, modificadas para impacto, retardantes de chama, sujeitas a desgaste e com carga mineral.",
          metricLabel: "grades listados",
        },
        {
          title: "Compostos de PA66",
          label: "Família adicional",
          description:
            "Compostos de PA66 selecionados para peças reforçadas, retardantes de chama, sujeitas a desgaste e dimensionalmente estáveis.",
          metricLabel: "grades listados",
        },
        {
          title: "Compostos de PPA",
          label: "Alta temperatura",
          description:
            "Compostos de PPA para peças moldadas em temperaturas mais altas que exigem rigidez e estabilidade dimensional.",
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
        "Informe a aplicação, o estágio do molde, o número de cavidades, a preocupação com retração ou empenamento, os principais requisitos de desempenho, a referência atual de material, a cor, os documentos necessários e o volume estimado. Esses dados identificam a família relevante e orientam o acompanhamento de dados de grade, documentos e amostras.",
      contactSource: "Diretório de produtos",
    },
  },
} satisfies SiteMessages;

export default messages;
