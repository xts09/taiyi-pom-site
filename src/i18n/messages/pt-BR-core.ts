import type { SiteMessages } from "@/i18n/types";
import { homeTaskFirstLocaleMessages } from "../homeTaskFirstLocaleMessages.ts";

const messages = {
  Home: {
    metadata: {
      title: "Compostos de POM modificado para peças industriais | Taiyi Polymer",
      description:
        "A Taiyi Polymer fabrica compostos de POM modificado para peças moldadas de precisão resistentes ao desgaste, de baixo atrito, reforçadas, condutivas e antiestáticas, com suporte selecionado em PA6, PA66 e PPA.",
      imageAlt: "Fabricação de compostos de POM modificado na Taiyi Polymer",
    },
    hero: {
      eyebrowDesktop: "TAIYI POLYMER · MATERIAIS PLATFORM®",
      eyebrowMobile: "TAIYI POLYMER · PLATFORM®",
      title: "Fabricante de POM modificado para peças moldadas de precisão",
      body:
        "A Taiyi Polymer desenvolve compostos de POM modificado para peças de precisão resistentes ao desgaste, de baixo atrito, reforçadas, condutivas e antiestáticas, com suporte selecionado em PA6, PA66 e PPA da triagem de grades à produção.",
      exploreAction: "Encontrar material por peça",
      contactAction: "Encontrar grades & TDS",
    },
    metrics: [
      { label: "Capacidade anual de compostos", note: "Toneladas métricas por ano" },
      { label: "Raízes industriais", note: "Tradição na fabricação de plásticos de engenharia" },
      { label: "Linhas de dupla rosca", note: "Linhas internas de extrusão" },
      { label: "Área da unidade", note: "Metros quadrados" },
      { label: "Equipamentos de ensaio", note: "Unidades internas" },
    ],
    materials: {
      title: "Linha de materiais",
      body:
        "Comece pelo POM modificado, nossa principal linha de produtos. Também avaliamos compostos selecionados de PA6, PA66 e PPA quando a peça precisa de outro equilíbrio entre rigidez, resistência térmica e comportamento de processamento.",
      documentSupport: "Documentos conforme a grade e o projeto",
      dataSheetsAction: "Encontrar dados de grade e TDS",
      coreLabel: "Linha principal",
      coreDirectionsAria: "Direções de desempenho dos compostos de POM",
      coreDirections: [
        "Resistência ao desgaste",
        "Baixo atrito",
        "Reforço",
        "Condutividade",
        "Antiestático",
      ],
      allFamiliesAction: "Ver todas as famílias",
      additionalFamiliesAria: "Famílias de materiais adicionais",
      items: [
        {
          title: "Compostos de POM",
          description:
            "Linha principal para peças moldadas que exigem resistência ao desgaste, baixo atrito, reforço, condutividade ou desempenho antiestático.",
          action: "Ver compostos de POM",
          specs: [
            ["Papel", "Linha principal"],
            ["Direções", "Desgaste / Atrito / Reforço"],
            ["Aplicação", "Peças moldadas de precisão"],
            ["Dados", "TDS por grade"],
          ],
        },
        {
          title: "Compostos de PA6",
          description:
            "Compostos selecionados de PA6 para peças reforçadas, modificadas para impacto, retardantes de chama, sujeitas a desgaste ou com carga mineral.",
          action: "Ver compostos de PA6",
          specs: [
            ["Papel", "Família adicional"],
            ["Material", "PA6"],
            ["Aplicação", "Peças reforçadas / de impacto"],
            ["Escopo", "Conforme o projeto"],
          ],
        },
        {
          title: "Compostos de PA66",
          description:
            "Compostos selecionados de PA66 para peças reforçadas, retardantes de chama, sujeitas a desgaste e dimensionalmente estáveis.",
          action: "Ver compostos de PA66",
          specs: [
            ["Papel", "Família adicional"],
            ["Material", "PA66"],
            ["Aplicação", "Peças rígidas / expostas ao calor"],
            ["Escopo", "Conforme o projeto"],
          ],
        },
        {
          title: "Compostos de PPA",
          description:
            "Suporte por projeto em compostos de PPA para peças moldadas em temperaturas mais altas que exigem rigidez e estabilidade dimensional.",
          action: "Ver compostos de PPA",
          specs: [
            ["Papel", "Família adicional"],
            ["Material", "PPA"],
            ["Aplicação", "Peças para alta temperatura"],
            ["Escopo", "Conforme o projeto"],
          ],
        },
        {
          title: "Resina POM base",
          description:
            "Linha complementar de fornecimento para clientes que precisam de resinas POM base selecionadas além do suporte em compostos.",
          action: "Ver grades de resina",
          specs: [
            ["Papel", "Linha complementar"],
            ["Uso", "Fornecimento selecionado"],
            ["Aplicação", "Necessidade de resina base"],
            ["Cor", "Natural"],
          ],
        },
      ],
    },
    qualification: {
      title: "Como montamos uma lista preliminar de grades",
      intro:
        "Comparamos a peça, o molde, as condições de operação e os documentos necessários para selecionar grades candidatas antes da análise de TDS, amostras e testes de moldagem.",
      applicationAction: "Explorar caminhos de aplicação",
      figureAlt: "Grânulos pretos de plástico de engenharia em uma placa de laboratório.",
      figureLabel: "Evidências para análise",
      figureCaption:
        "Os materiais candidatos são verificados em relação às restrições da peça, do processamento e da documentação.",
      stepsAria: "Etapas de qualificação de grades",
      steps: [
        {
          stage: "Entrada",
          title: "Peça e ferramental",
          description:
            "Tipo de peça, estágio do molde, número de cavidades, ponto de injeção, modo de movimento e ambiente de montagem.",
        },
        {
          stage: "Processamento",
          title: "Processamento e controle dimensional",
          description:
            "Fluidez, preenchimento multicavidade, retração, empenamento, estabilidade dimensional e requisitos de cor.",
        },
        {
          stage: "Desempenho",
          title: "Metas de desempenho",
          description:
            "Desgaste, atrito, rigidez, impacto, condutividade, comportamento antiestático e temperatura de trabalho.",
        },
        {
          stage: "Decisão",
          title: "Lista preliminar de grades",
          description:
            "As grades candidatas são comparadas antes da confirmação dos documentos disponíveis e da necessidade de testes com amostras.",
        },
      ],
    },
    quality: {
      title: "Credenciais para qualificação de fornecedores",
      body:
        "Reconhecimentos empresariais e certificados de sistemas de gestão da Jiangsu Taiyi Nano Technology Co., Ltd., junto com a documentação de materiais, agilizam a avaliação de fornecedores pelas equipes de compras.",
      panelAria: "Credenciais da empresa e documentação de materiais",
      qualifications: [
        { category: "Reconhecimento empresarial", title: "Empresa Nacional de Alta Tecnologia" },
        {
          category: "Designação provincial",
          title: "PME Especializada e Inovadora da Província de Jiangsu",
        },
        { category: "Propriedade intelectual", title: "29 patentes concedidas" },
      ],
      documentSupportTitle: "Suporte documental",
      documentSupportBody: "Disponibilidade confirmada conforme a grade e o projeto.",
      documentListAria: "Documentos de material disponíveis conforme a grade e o projeto",
      documentNames: {
        TDS: "Ficha técnica",
        SDS: "Ficha de dados de segurança",
        COA: "Certificado de análise",
        REACH: "Registro, Avaliação, Autorização e Restrição de Substâncias Químicas",
        RoHS: "Restrição de substâncias perigosas",
      },
      certifications: [
        {
          system: "Gestão da qualidade automotiva",
          scope:
            "Fabricação de grânulos plásticos, excluindo o projeto do produto conforme a cláusula 8.3.",
        },
        {
          system: "Gestão da qualidade",
          scope: "Produção de materiais nanopoliméricos (partículas plásticas).",
        },
        {
          system: "Gestão ambiental",
          scope:
            "Gestão ambiental nas áreas comerciais relacionadas a materiais nanopoliméricos (partículas plásticas).",
        },
        {
          system: "Saúde e segurança ocupacional",
          scope:
            "Gestão de saúde e segurança ocupacional nas áreas comerciais relacionadas a materiais nanopoliméricos (partículas plásticas).",
        },
      ],
      featuredDescription: "Sistema de gestão da qualidade automotiva",
      certificateAvailable: "Certificado em PDF disponível para consulta",
      certifiedScope: "Escopo certificado",
      openCertificate: "Abrir certificado em PDF",
      openCertificateAria: "Abrir o certificado {standard} em PDF",
      scopePrefix: "Escopo:",
      openPdf: "Abrir PDF",
    },
    exportNetwork: {
      eyebrow: "REDE DE FORNECIMENTO",
      title: "Rotas de exportação",
      description:
        "As rotas de projeto conectam a unidade de Yancheng a destinos na Ásia Central, Europa, Leste Asiático e Américas.",
      mapAlt:
        "Mapa-múndi mostrando a unidade de produção da Taiyi e as regiões de exportação na Ásia Central, Europa, Leste Asiático e Américas.",
      legendAria: "Legenda do mapa",
      productionBase: "Unidade de produção",
      exportRegion: "Região de exportação",
      regionsTitle: "Regiões de projeto",
      regionsBody: "Selecione uma região para destacar suas rotas no mapa.",
      factsAria: "Dados da rede de exportação",
      productionBaseValue: "Yancheng, Jiangsu, China",
      listedDestinations: "Destinos indicados",
      listedDestinationsValue: "9 destinos exibidos",
      routes: [
        { region: "Ásia Central", coverage: "Uzbequistão e Cazaquistão" },
        { region: "Europa", coverage: "Polônia e Turquia" },
        { region: "Leste Asiático", coverage: "Coreia do Sul e Japão" },
        { region: "Américas", coverage: "México, Brasil e Argentina" },
      ],
    },
    inquiry: {
      eyebrow: "Análise da aplicação",
      title: "Compartilhe os requisitos da sua peça",
      body:
        "Com as informações abaixo, reduzimos as direções de material e esclarecemos os dados de grades, documentos e amostras disponíveis.",
      checklistLabel: "Informações úteis para começar",
      checklist: [
        "Função da peça e modo de movimento",
        "Status do molde e restrições de processamento",
        "Metas prioritárias de desempenho",
        "Material atual, evidências de falha e prazo",
      ],
      action: "Fale sobre sua aplicação",
    },
    taskFirst: homeTaskFirstLocaleMessages["pt-br"],
  },
  Contact: {
    metadata: {
      title: "Fale sobre uma necessidade de material | Taiyi Polymer",
      description:
        "Entre em contato com a Jiangsu Taiyi Nano Technology Co., Ltd. sobre POM modificado, compostos de plásticos de engenharia, resina POM, seleção de materiais, documentos, amostras e avaliação de projetos.",
      imageAlt: "Linha de produção de plásticos de engenharia da Taiyi Polymer",
    },
    breadcrumbHome: "Início",
    breadcrumbContact: "Contato",
    hero: {
      title: "Solicite uma análise de material",
      description:
        "Informe a função da peça, as condições de operação e os requisitos desejados. Identificaremos as famílias de materiais relevantes, confirmaremos os documentos disponíveis e indicaremos a próxima etapa de amostragem ou avaliação.",
    },
    formPanel: {
      title: "Comece pelo essencial",
      body:
        "Empresa, e-mail e aplicação são suficientes para começar. Acrescente detalhes técnicos somente se já estiverem disponíveis.",
      requiredBefore: "Os campos marcados com",
      requiredAfter: "são obrigatórios.",
    },
    sales: {
      title: "Contato comercial",
      contactPerson: "Pessoa de contato",
      role: "Gerente de vendas",
      company: "Empresa",
      email: "E-mail",
      whatsapp: "WhatsApp",
      location: "Localização",
      locationValue: "Yancheng, Jiangsu, China",
      reviewTitle: "O que podemos avaliar",
      reviewItems: [
        "Famílias de materiais relevantes e grades candidatas",
        "Documentos técnicos disponíveis e necessidade de amostras",
      ],
      emailDirectly: "Enviar e-mail",
    },
    directEmail: {
      greeting: "Olá, Ethan,",
      application: "Aplicação ou peça",
      material: "Material ou grade atual",
      reference: "Grade de referência",
      candidates: "Lista preliminar de candidatos",
      requirement: "Requisito prioritário",
      keyRequirements: "Requisitos principais:",
      documentNeeds: "Documentos necessários:",
      closing: "Atenciosamente,",
      subject: "Solicitação de análise de material",
    },
    context: {
      grade: "Grade de interesse",
      reference: "Grade de referência",
      candidates: "Lista preliminar de candidatos",
      requirement: "Requisito prioritário",
      intent: "Objetivo da consulta",
      sampleIntent: "Solicitação de amostra",
      evaluationIntent: "Avaliação de grade",
      tdsIntent: "TDS ou documentos",
      quoteSupplyIntent: "Cotação ou conversa sobre fornecimento",
    },
    form: {
      contextFrom: "Contexto",
      contextPrefilled: "Estes dados foram preenchidos previamente. Você pode editar qualquer campo.",
      clearContext: "Limpar contexto",
      inquiryTypeLabel: "Do que você precisa?",
      inquiryTypePlaceholder: "Selecione um tipo de solicitação",
      inquiryTypeOptions: {
        "grade-evaluation": "Recomendação de grade",
        tds: "TDS ou documentos",
        sample: "Amostra",
        "quote-supply": "Cotação ou conversa sobre fornecimento",
      },
      companyLabel: "Empresa",
      companyPlaceholder: "Nome da empresa",
      emailLabel: "E-mail",
      materialLabel: "Família de materiais (opcional)",
      materialPlaceholder: "Escolha uma família de materiais",
      materialOptionLabels: {
        "Modified POM Compounds": "Compostos de POM modificado",
        "Wear-Resistant & Low-Friction POM": "POM resistente ao desgaste e de baixo atrito",
        "High-Impact POM": "POM de alto impacto",
        "UV-Resistant POM": "POM resistente a UV",
        "Glass Fiber Reinforced POM": "POM reforçado com fibra de vidro",
        "Glass Bead Filled POM": "POM com microesferas de vidro",
        "Carbon Fiber Reinforced POM Compound": "Composto de POM reforçado com fibra de carbono",
        "Conductive / Antistatic POM": "POM condutivo / antiestático",
        "Base POM Resin": "Resina POM base",
        "Ultra-High Flow POM": "POM de fluidez ultra-alta",
        "PA6 Compounds": "Compostos de PA6",
        "PA66 Compounds": "Compostos de PA66",
        "PPA Compounds": "Compostos de PPA",
        "Conductive & Antistatic Compounds": "Compostos condutivos e antiestáticos",
        "Other Engineering Plastic Compound": "Outro composto de plástico de engenharia",
      },
      applicationLabel: "Aplicação / Peça",
      applicationPlaceholder: "Engrenagem, presilha, carcaça…",
      detailsLabel: "Detalhes da necessidade (opcional)",
      detailsPlaceholder:
        "Grade atual, condições de operação, propriedades desejadas, volume anual ou documentos necessários.",
      sending: "Enviando…",
      submit: "Enviar requisitos do projeto",
      fallbackNote: "Se o envio direto não estiver disponível, um rascunho de e-mail será aberto.",
      sentStatus: "Enviado. Avaliaremos sua necessidade e responderemos por e-mail.",
      fallbackStatus:
        "Um rascunho de e-mail foi preparado, e o texto da consulta foi copiado quando possível.",
      emailDraft: {
        notSpecified: "Não informado",
        greeting: "Olá, Ethan,",
        intro: "Por favor, avalie a seguinte necessidade de material:",
        company: "Empresa",
        email: "E-mail",
        material: "Material de interesse",
        application: "Aplicação / Peça",
        inquiryType: "Sua necessidade",
        grade: "Grade",
        source: "Origem",
        details: "Detalhes da necessidade:",
        closing: "Atenciosamente,",
        subjectPrefix: "Necessidade de material",
      },
    },
  },
} satisfies Pick<SiteMessages, "Home" | "Contact">;

export default messages;
