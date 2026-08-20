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
      "washing-machine-components": "Componentes de lavadoras",
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
    allResources: "Todos os recursos",
    aboutUs: "Sobre nós",
    contact: "Contato",
    searchLabel: "Pesquisar fichas técnicas e recursos",
    languageSwitcherLabel: "Idioma",
    menu: "Menu",
    close: "Fechar",
    findGradeData: "Localizar dados de grades e TDS",
    discussApplication: "Fale sobre sua aplicação",
  },
  Footer: {
    brandRelation: "Taiyi Polymer · Materiais de engenharia PLATFORM®",
    logoAlt: "Marca registrada PLATFORM",
    pitchTitle: "Decisões de material baseadas na peça.",
    pitchCopy:
      "Conte-nos sobre a peça, as condições de operação e as metas de desempenho. Ajudaremos a selecionar grades relevantes e a confirmar amostras e documentos técnicos disponíveis para avaliação.",
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
    title: "Preferências de análise",
    descriptionBeforeLink:
      "Usamos o Google Analytics para entender o uso do site e melhorar as informações sobre materiais. A análise permanece desativada até você aceitar. Leia nossa",
    privacyPolicy: "Política de privacidade",
    currentChoice: "Escolha atual:",
    accepted: "aceita",
    notAccepted: "não aceita",
    accept: "Aceitar análise",
    continueWithout: "Continuar sem análise",
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
      subtitle: "POM modificado como linha principal",
      body:
        "Explore o POM modificado como linha principal, com resina POM base e opções selecionadas de PA6, PA66, PPA, condutivas e antiestáticas quando a aplicação exige outro equilíbrio de propriedades.",
      startAction: "Escolher pelos requisitos da peça",
      dataSheetsAction: "Encontrar dados de grades e TDS",
    },
    selection: {
      kicker: "Requisitos primeiro",
      title: "O que a peça precisa fazer?",
      body:
        "Escolha a rota de triagem mais próxima. Cada rota explica as compensações importantes antes da comparação de um grade específico.",
      note:
        "Precisa de temperatura mais alta ou de outra família de polímeros? Veja abaixo toda a linha de materiais.",
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
        "O POM modificado é a linha principal. A resina base, opções selecionadas de PA6, PA66 e PPA e soluções multimateriais de controle estático continuam disponíveis quando a aplicação exigir outra direção.",
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
