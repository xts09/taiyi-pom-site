import type { ProductFunnelMessages } from "@/i18n/productFunnelTypes";

const messages = {
  common: {
    home: "Início",
    products: "Produtos",
    category: "Resina POM base",
    technicalData: "Dados técnicos",
    contact: "Contato",
    contactSourceCategory: "Categoria de resina POM base",
    contactSourceGrade: "Página do produto XT-100",
    contactSourceTechnicalData: "Dados técnicos do XT-100",
  },
  category: {
    metadata: {
      title: "Resinas POM base para moldagem de precisão | Taiyi Polymer",
      description:
        "Compare resinas POM base da Taiyi Polymer por fluidez, resistência à tração, HDT e requisitos do projeto de moldagem por injeção.",
      imageAlt: "Resina POM base natural da Taiyi Polymer",
    },
    hero: {
      eyebrow: "Diretório de materiais",
      title: "Resina POM base",
      description:
        "Compare grades base para peças injetadas de precisão ou uso geral considerando fluidez, perfil mecânico, HDT e geometria da peça.",
      overviewLabel: "Critérios de seleção",
      overview:
        "A triagem começa pelo caminho de fluxo, espessura, condição do molde e desempenho exigido. A aprovação final depende de teste no processo real do cliente.",
      documentsTitle: "Documentos por grade e projeto",
      documentsBody:
        "A disponibilidade de TDS, SDS, COA, REACH e RoHS é confirmada conforme o grade, o mercado de destino e a etapa do projeto.",
      contactAction: "Falar sobre a aplicação",
      technicalDataAction: "Abrir dados técnicos",
    },
    navigation: {
      aria: "Navegação da categoria de resina POM base",
      title: "Resina POM base",
      subtitle: "Comparar fluidez, resistência e requisitos de ferramental",
      grades: "Grades",
      faq: "FAQ",
    },
    directory: {
      kicker: "Seleção de grades",
      title: "Comparar grades de POM base",
      body:
        "Os dados apoiam a triagem técnica. Quando a página localizada de um grade ainda não foi liberada, a ação abre diretamente uma avaliação de projeto.",
      countSuffix: "grades listados",
      grade: "Grade",
      keyData: "Dados principais",
      route: "Próxima etapa",
      mfi: "MFI",
      tensile: "Tração",
      hdt: "HDT",
      color: "Cor",
      natural: "Natural",
      detailAction: "Detalhes do grade",
      reviewAction: "Avaliação do projeto",
      summaries: {
        "etm090nc-base-pom-resin":
          "Grade padrão com bom equilíbrio entre resistência e estabilidade dimensional.",
        "etm130-base-pom-resin":
          "Fluidez média e perfil mecânico equilibrado.",
        "etm1500-base-pom-resin":
          "Fluidez ultra-alta para facilitar o preenchimento de peças complexas.",
        "etm1800-base-pom-resin":
          "Direção de fluidez máxima para peças com caminho de fluxo crítico.",
        "etm270-base-pom-resin":
          "Alta fluidez para peças de parede fina e componentes de precisão.",
        "etm450-base-pom-resin":
          "Alta fluidez para peças de precisão, elétricas e automotivas.",
        "etm750-base-pom-resin":
          "Fluidez muito alta para peças de parede fina ou sensíveis ao preenchimento.",
        "xt-100-base-pom-resin":
          "POM de baixa densidade e direção de alto impacto para peças injetadas de precisão ou uso geral.",
      },
    },
    faq: {
      kicker: "FAQ",
      title: "Perguntas de triagem",
      items: [
        {
          question: "Como escolher a faixa de fluidez?",
          answer:
            "Espessura, caminho de fluxo, ponto de injeção, número de cavidades e condição do molde determinam a fluidez necessária. Um MFI maior, isoladamente, não garante melhor desempenho da peça.",
        },
        {
          question: "Os grades podem ser substituídos diretamente?",
          answer:
            "Não. As fichas técnicas servem para triagem; geometria, molde, processamento, dimensões e uso final devem ser validados no processo real.",
        },
        {
          question: "Quais documentos podem ser solicitados?",
          answer:
            "A disponibilidade de TDS, SDS, COA, REACH e RoHS é confirmada para o grade e o projeto específicos.",
        },
      ],
    },
    inquiry: {
      eyebrow: "Avaliação do projeto",
      title: "Preparar uma lista preliminar de grades utilizável",
      body:
        "Envie a função da peça, espessura, caminho de fluxo, estágio do molde, material atual, metas, cor, documentos necessários e volume estimado. Esses dados orientam as próximas etapas de dados, amostras e testes.",
      action: "Enviar dados do projeto",
      steps: ["Geometria da peça", "Processo e molde", "Documentos e amostras"],
    },
  },
  grade: {
    metadata: {
      title: "XT-100 POM de baixa densidade e alto impacto | Taiyi Polymer",
      description:
        "Avalie o POM XT-100 por densidade, MFI, tração, impacto e HDT e solicite documentos ou amostra para avaliação técnica.",
      imageAlt: "Grânulos naturais de POM XT-100 da Taiyi Polymer",
    },
    breadcrumb: "XT-100",
    eyebrow: "POM de baixa densidade e direção de alto impacto · Moldagem por injeção",
    positioning:
      "Um grade candidato para peças injetadas de precisão ou uso geral quando densidade, impacto e um perfil equilibrado de fluxo precisam ser avaliados em conjunto.",
    summary:
      "Os valores publicados apoiam a seleção inicial. A adequação deve ser confirmada com a geometria real, o molde, a janela de processo e as condições de uso.",
    documentSupport: "Suporte documental",
    documentNote: "Disponibilidade confirmada por grade, mercado de destino e projeto.",
    sampleAction: "Solicitar amostra de XT-100",
    evaluationAction: "Solicitar avaliação do grade",
    independentNote: "Grade independente da Taiyi · Teste com amostra recomendado",
    snapshot: {
      aria: "Resumo de dados do XT-100",
      title: "Perfil de triagem do XT-100",
      body:
        "Analise primeiro fluidez, tração, HDT e cor; depois valide a peça e o processo.",
      mfi: "MFI",
      tensile: "Tração",
      hdt: "HDT",
      color: "Cor",
      flowNote: "Perfil de baixa densidade e direção de alto impacto",
      colorValue: "Natural",
    },
    sectionNav: {
      aria: "Seções da página do produto XT-100",
      properties: "Dados",
      fit: "Perfil do material",
      evaluation: "Rota de avaliação",
      notes: "Observações",
    },
    properties: {
      kicker: "Evidência técnica",
      title: "Valores de referência para triagem",
      body:
        "Leia os valores junto com unidades, normas e condições de ensaio. Eles não substituem teste de moldagem nem aprovação específica do cliente.",
      property: "Propriedade",
      value: "Valor",
      unit: "Unidade",
      method: "Método de ensaio",
      requestAction: "Solicitar documentos atuais",
      labels: {
        Density: "Densidade",
        "Melt Flow Rate (MFI)": "Índice de fluidez (MFI)",
        "Molding Shrinkage": "Contração de moldagem",
        "Water Absorption": "Absorção de água",
        "Tensile Strength": "Resistência à tração",
        "Tensile Strain at Break": "Alongamento na ruptura",
        "Flexural Strength": "Resistência à flexão",
        "Flexural Modulus": "Módulo de flexão",
        "Charpy Notched Impact Strength": "Resistência ao impacto Charpy com entalhe",
        "Izod Notched Impact Strength": "Resistência ao impacto Izod com entalhe",
        "Melting Temperature": "Temperatura de fusão",
        "Heat Deflection Temperature": "Temperatura de deflexão térmica",
        "Coefficient of Linear Thermal Expansion, CLTE":
          "Coeficiente de expansão térmica linear (CLTE)",
        "Volume Resistivity": "Resistividade volumétrica",
        "Surface Resistivity": "Resistividade superficial",
        "Dielectric Strength": "Rigidez dielétrica",
      },
      internalMethod: "Método interno",
      injectionMolding: "Moldagem por injeção",
    },
    featuresTitle: "Características para triagem",
    features: [
      "Direção de baixa densidade",
      "Direção de alto impacto",
      "Indicado para moldagem por injeção",
      "Cor natural",
    ],
    applicationsTitle: "Aplicações para avaliação",
    applications: [
      "Peças plásticas de engenharia de precisão",
      "Componentes automotivos",
      "Peças elétricas e eletrônicas",
      "Peças industriais moldadas por injeção",
    ],
    evaluation: {
      kicker: "Rota de avaliação técnica",
      title: "Passar da análise de dados à decisão sobre a peça",
      body:
        "XT-100 é oferecido como grade candidato para avaliação. A aprovação final deve seguir teste no molde do cliente e nas condições reais de uso.",
      steps: [
        {
          title: "Descrever a aplicação",
          body: "Enviar geometria, processo, material atual e metas principais.",
        },
        {
          title: "Revisar dados e amostra",
          body: "Definir documentos, cor, quantidade de amostra e ensaios relevantes.",
        },
        {
          title: "Validar no seu processo",
          body: "Verificar preenchimento, dimensões, aparência e desempenho final na peça real.",
        },
      ],
    },
    notes: {
      title: "Observações sobre a avaliação do material",
      body:
        "Esta página apoia a triagem preliminar do XT-100. Projeto da peça, molde, processamento, metas de desempenho e requisitos do cliente podem alterar o resultado. Solicite os documentos atuais e confirme o grade por amostragem e testes de aplicação.",
    },
    inquiry: {
      eyebrow: "Avaliação de projeto XT-100",
      title: "Avaliar XT-100 para a sua peça moldada?",
      body:
        "Envie aplicação, processo, material atual, propriedades desejadas, cor, volume estimado e documentos necessários. Prepararemos a avaliação do grade e da amostra.",
      action: "Solicitar avaliação do XT-100",
    },
  },
  technicalData: {
    metadata: {
      title: "Dados técnicos e TDS de POM | Taiyi Polymer",
      description:
        "Consulte dados validados de POM com unidades, normas e condições de ensaio e solicite TDS e documentos de projeto atualizados.",
      imageAlt: "Dados técnicos de POM e verificação de TDS na Taiyi Polymer",
    },
    eyebrow: "Dados e evidências",
    title: "Dados técnicos para avaliação de materiais",
    description:
      "Esta versão publica apenas grades cuja página técnica e explicações foram totalmente revisadas. Cada valor deve ser lido com sua unidade, norma e condição de ensaio.",
    evidenceTitle: "Dados de grade liberados",
    evidenceBody:
      "XT-100 é o primeiro conjunto de dados totalmente localizado desta etapa. Outros grades serão adicionados somente após a mesma revisão técnica e linguística.",
    gradeLabel: "Grade",
    materialLabel: "Material",
    statusLabel: "Status dos dados",
    statusValue: "Dados web disponíveis · PDF a confirmar mediante solicitação",
    viewAction: "Abrir dados do XT-100",
    requestAction: "Solicitar TDS atual",
    scopeTitle: "O que verificar antes da aprovação",
    scopeItems: [
      "Norma, unidade e condição de ensaio de cada valor",
      "Geometria, molde e janela real de processamento",
      "Revisão do documento, mercado de destino e requisitos do cliente",
    ],
    inquiryEyebrow: "Verificação documental",
    inquiryTitle: "Precisa de TDS, SDS, COA, REACH ou RoHS?",
    inquiryBody:
      "Informe o grade, o mercado de destino, a aplicação, a etapa do projeto e os documentos necessários. A disponibilidade e a revisão atual serão confirmadas para o projeto.",
    inquiryAction: "Solicitar documentos",
  },
} satisfies ProductFunnelMessages;

export default messages;
