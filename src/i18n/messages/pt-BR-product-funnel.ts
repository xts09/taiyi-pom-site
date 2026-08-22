import type { ProductFunnelMessages } from "@/i18n/productFunnelTypes";

const messages = {
  common: {
    home: "Início",
    products: "Produtos",
    category: "Resina POM base",
    technicalData: "Dados técnicos",
    contact: "Contato",
    contactSourceCategory: "Categoria de produto",
    contactSourceGrade: "Página localizada de grade POM",
    contactSourceTechnicalData: "Dados técnicos de POM localizados",
  },
  category: {
    metadata: {
      title: "Resinas POM base para moldagem de precisão | Taiyi Polymer",
      description:
        "Compare resinas POM base da Taiyi Polymer por fluidez, resistência à tração, HDT e requisitos do projeto de moldagem por injeção.",
      imageAlt: "Resina POM base natural da Taiyi Polymer",
    },
    hero: {
      eyebrow: "Família de POM modificado",
      title: "Resina POM base",
      description:
        "Compare grades base para peças injetadas de precisão ou uso geral considerando fluidez, perfil mecânico, HDT e geometria da peça.",
      overviewLabel: "Caminho de seleção",
      overview:
        "Faça uma pré-seleção entre os grades listados e abra a página do grade para consultar valores publicados, notas de aplicação e o status dos documentos.",
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
      black: "Preto",
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
  categoryProfiles: {
    "glass-bead-filled-pom-compound": {
      categoryLabel: "POM com microesferas de vidro",
      metadata: {
        title: "POM com microesferas de vidro | Taiyi Polymer",
        description:
          "Avalie POM com microesferas de vidro por contração, perfil térmico, requisitos da peça e documentos disponíveis.",
        imageAlt: "POM natural com microesferas de vidro da Taiyi Polymer",
      },
      hero: {
        eyebrow: "Família de POM modificado",
        title: "POM com microesferas de vidro",
        description:
          "Avalie o EGB25, com 25% de microesferas de vidro, por fluidez, contração longitudinal e transversal, perfil térmico e requisitos da peça moldada.",
        overviewLabel: "Caminho de seleção",
        overview:
          "Faça uma pré-seleção entre os grades listados e abra a página do grade para consultar valores publicados, notas de aplicação e o status dos documentos.",
      },
      navigation: {
        aria: "Navegação das seções de POM com microesferas de vidro",
        title: "POM com microesferas de vidro",
        subtitle: "Compare contração, perfil térmico e requisitos da peça",
      },
      directory: {
        kicker: "Seleção de grade",
        title: "Avalie o grade de POM com microesferas de vidro",
        body:
          "O EGB25 está integralmente revisado neste idioma. Os dados apoiam a triagem; a aprovação final deve ocorrer no molde e na aplicação do cliente.",
        summaries: {
          "egb25-glass-bead-pom":
            "POM com 25% de microesferas de vidro para avaliar o equilíbrio entre contração longitudinal e transversal.",
        },
      },
      faq: {
        kicker: "FAQ",
        title: "Dúvidas sobre microesferas de vidro",
        items: [
          {
            question: "Por que comparar a contração longitudinal e transversal?",
            answer:
              "As microesferas de vidro podem favorecer um perfil de contração mais equilibrado, mas geometria, ponto de injeção, espessura e processo continuam influenciando a peça real.",
          },
          {
            question: "O EGB25 pode ser aprovado sem teste no molde?",
            answer:
              "Não. Os valores da ficha técnica apoiam a triagem. Dimensões, empenamento, superfície e desempenho devem ser confirmados no molde e no processo previstos.",
          },
          {
            question: "Quais documentos podem ser solicitados?",
            answer:
              "A disponibilidade de TDS, SDS, COA, REACH e RoHS é confirmada conforme o grade, o mercado de destino e o projeto.",
          },
        ],
      },
      inquiry: {
        eyebrow: "Avaliação de projeto EGB25",
        title: "Avalie o EGB25 para suas metas dimensionais",
        body:
          "Envie geometria, espessura, ponto de injeção, estágio do molde, contrações atuais, tolerâncias, cor e documentos necessários. Prepararemos a avaliação do grade e da amostra.",
        steps: ["Geometria e injeção", "Contração e tolerância", "Documentos e amostra"],
      },
    },
    "glass-fiber-reinforced-pom-compound": {
      categoryLabel: "POM reforçado com fibra de vidro",
      metadata: {
        title: "POM com fibra de vidro: grades | Taiyi Polymer",
        description:
          "Compare POM com 10% a 30% de fibra de vidro por rigidez, contração, perfil térmico e requisitos do projeto.",
        imageAlt: "POM natural reforçado com fibra de vidro da Taiyi Polymer",
      },
      hero: {
        eyebrow: "Família de POM modificado",
        title: "POM reforçado com fibra de vidro",
        description:
          "Compare grades de POM com 10% a 30% de fibra de vidro por fluidez, rigidez, contração, perfil térmico e requisitos da peça.",
        overviewLabel: "Caminho de seleção",
        overview:
          "Faça uma pré-seleção entre os grades listados e abra a página do grade para consultar valores publicados, notas de aplicação e o status dos documentos.",
      },
      navigation: {
        aria: "Navegação das seções de POM reforçado com fibra de vidro",
        title: "POM reforçado com fibra de vidro",
        subtitle: "Compare teor de fibra, rigidez, contração e processamento",
      },
      directory: {
        kicker: "Seleção de grade",
        title: "Compare grades de POM reforçado com fibra de vidro",
        body:
          "O EGH502H tem uma página integralmente revisada neste idioma. Para os demais grades, a próxima etapa leva à avaliação do projeto até que suas páginas técnicas atinjam o mesmo nível de liberação.",
        summaries: {
          "egh202h-glass-fiber-pom": "10% de fibra de vidro para aumento moderado de rigidez.",
          "egh302h-glass-fiber-pom": "15% de fibra de vidro para maior resistência e rigidez.",
          "egh402h-glass-fiber-pom": "20% de fibra de vidro, alta rigidez e menor contração.",
          "egh402t-glass-fiber-pom": "20% de fibra de vidro com fluidez e controle dimensional equilibrados.",
          "egh502h-glass-fiber-pom": "25% de fibra de vidro para alta rigidez, resistência à fluência e baixa contração.",
          "egh502t-glass-fiber-pom": "25% de fibra de vidro para rigidez e fluidez de processamento controlada.",
          "egh580h-glass-fiber-pom": "25% de fibra de vidro para alta resistência à flexão e controle dimensional.",
          "egh580t-glass-fiber-pom": "25% de fibra de vidro com impacto e fluidez equilibrados.",
          "egh602h-glass-fiber-pom": "30% de fibra de vidro para alta rigidez e estabilidade dimensional.",
          "egh602t-glass-fiber-pom": "30% de fibra de vidro para menor contração e processamento estável.",
        },
      },
      faq: {
        kicker: "FAQ",
        title: "Dúvidas sobre reforço com fibra de vidro",
        items: [
          {
            question: "Como escolher o teor de fibra de vidro?",
            answer:
              "Rigidez, carga, espessura, contração, empenamento, comprimento de fluxo e acabamento devem ser avaliados em conjunto. Mais fibra não é automaticamente melhor para toda peça.",
          },
          {
            question: "Por que a orientação das fibras é importante?",
            answer:
              "As fibras se orientam com o fluxo do fundido. Ponto de injeção, direção do fluxo e geometria podem alterar significativamente propriedades, contração e empenamento na peça real.",
          },
          {
            question: "Todos os grades listados já estão integralmente localizados?",
            answer:
              "Não. Atualmente, o EGH502H possui a página no idioma integralmente revisada. Os demais grades passam primeiro por avaliação de dados e amostra vinculada ao projeto.",
          },
        ],
      },
      inquiry: {
        eyebrow: "Avaliação do projeto",
        title: "Defina um grade de POM reforçado com fibra de vidro",
        body:
          "Envie metas de carga e rigidez, geometria, espessura, ponto de injeção, estágio do molde, contração ou empenamento atual, cor e documentos necessários. Prepararemos uma lista de grades e a etapa de amostragem.",
        steps: ["Carga e rigidez", "Molde e fluxo das fibras", "Documentos e amostra"],
      },
    },
    "high-impact-pom-compound": {
      categoryLabel: "POM de alto impacto",
      metadata: {
        title: "POM de alto impacto: grades e dados | Taiyi Polymer",
        description:
          "Compare grades de POM modificado para impacto por resistência ao impacto, baixa temperatura, alongamento, fluidez e risco do projeto.",
        imageAlt: "POM natural de alto impacto da Taiyi Polymer",
      },
      hero: {
        eyebrow: "Família de POM modificado",
        title: "POM de alto impacto",
        description:
          "Compare seis grades de POM voltados a maior resistência ao impacto e requisitos de baixa temperatura por fluidez, alongamento, resistência e perfil térmico.",
        overviewLabel: "Caminho de seleção",
        overview:
          "Faça uma pré-seleção entre os grades listados e abra a página do grade para consultar valores publicados, notas de aplicação e o status dos documentos.",
      },
      navigation: {
        aria: "Navegação das seções de POM de alto impacto",
        title: "POM de alto impacto",
        subtitle: "Compare impacto, alongamento, fluidez e requisitos de baixa temperatura",
      },
      directory: {
        kicker: "Seleção de grade",
        title: "Compare grades de POM de alto impacto",
        body:
          "EHI402T e EDR180 possuem páginas integralmente revisadas neste idioma. Para os demais grades, a próxima etapa leva à avaliação de dados e amostra vinculada ao projeto.",
        summaries: {
          "edr100-high-impact-pom": "POM modificado para impacto em peças funcionais que exigem maior tenacidade.",
          "edr180-high-impact-pom": "POM modificado para impacto com foco em baixa temperatura e alto alongamento na ruptura.",
          "ehi100st-high-impact-pom": "Equilíbrio entre rigidez e tenacidade para peças moldadas.",
          "ehi202t-high-impact-pom": "POM modificado para impacto em componentes automotivos, elétricos, sanitários e industriais.",
          "ehi402t-high-impact-pom": "Tenacidade melhorada com perfil de processamento equilibrado.",
          "ehi602t-high-impact-pom": "Maior resistência ao impacto e alongamento para peças solicitadas.",
        },
      },
      faq: {
        kicker: "FAQ",
        title: "Dúvidas sobre modificação para impacto",
        items: [
          {
            question: "Como fazer a triagem de um grade de POM de alto impacto?",
            answer:
              "Condição de carga, entalhes, espessura, temperatura de uso, alongamento desejado, rigidez e comprimento de fluxo devem ser avaliados em conjunto. Um único valor de impacto não basta para aprovação.",
          },
          {
            question: "Alto impacto significa aprovação automática em baixa temperatura?",
            answer:
              "Não. Esses grades são voltados a impacto e baixa temperatura, mas temperatura real, duração da carga, geometria e condição de ensaio precisam ser confirmadas para o projeto.",
          },
          {
            question: "Todos os seis grades já estão integralmente localizados?",
            answer:
              "Não. EHI402T e EDR180 possuem atualmente páginas no idioma integralmente revisadas. Os demais grades passam primeiro por avaliação vinculada ao projeto.",
          },
        ],
      },
      inquiry: {
        eyebrow: "Avaliação do projeto",
        title: "Defina um POM de alto impacto",
        body:
          "Envie condição de carga, temperatura de uso, geometria, espessura, material atual, modo de falha, valores-alvo, cor e documentos necessários. Prepararemos uma lista de grades e a etapa de amostragem.",
        steps: ["Carga e temperatura", "Geometria e risco de falha", "Documentos e amostra"],
      },
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
    summary:
      "XT-100 é um grade candidato para peças injetadas de precisão ou uso geral quando densidade, resistência ao impacto e um perfil equilibrado de fluxo precisam ser avaliados em conjunto. Os valores publicados apoiam a seleção inicial; confirme a adequação com a geometria real, o molde, a janela de processo e as condições de uso.",
    documentSupport: "Suporte documental",
    documentNote: "Disponibilidade confirmada por grade, mercado de destino e projeto.",
    sampleAction: "Solicitar amostra de XT-100",
    evaluationAction: "Solicitar avaliação do grade",
    independentNote: "Grade independente da Taiyi · Teste com amostra recomendado",
    snapshot: {
      aria: "Resumo de dados do XT-100",
      title: "Perfil de triagem do XT-100",
      body:
        "Valores de referência e métodos de ensaio publicados para a comparação inicial de grades.",
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
  gradeProfiles: {
    "etm450-base-pom-resin": {
      metadata: {
        title: "ETM450 POM de alta fluidez para precisão | Taiyi Polymer",
        description:
          "Avalie o ETM450, grade POM de alta fluidez para injeção de precisão, por MFI, tração, impacto e HDT e solicite uma amostra para avaliação.",
        imageAlt: "Grânulos naturais de POM ETM450 da Taiyi Polymer",
      },
      breadcrumb: "ETM450",
      eyebrow: "POM de alta fluidez · Moldagem por injeção",
      summary:
        "ETM450 é um grade candidato para peças injetadas de precisão quando preenchimento e perfil mecânico precisam ser avaliados em conjunto. Os valores publicados apoiam a seleção inicial; confirme a adequação com a geometria real, o molde, a janela de processo e as condições de uso.",
      sampleAction: "Solicitar amostra de ETM450",
      snapshot: {
        aria: "Resumo de dados do ETM450",
        title: "Perfil de triagem do ETM450",
        body:
          "Valores de referência e métodos de ensaio publicados para a comparação inicial de grades.",
        flowNote: "Perfil de alta fluidez para injeção de precisão",
      },
      sectionNavAria: "Seções da página do produto ETM450",
      features: [
        "Alta fluidez",
        "Direção para injeção de precisão",
        "Indicado para moldagem por injeção",
        "Cor natural",
      ],
      applications: [
        "Peças moldadas de precisão",
        "Componentes automotivos",
        "Peças elétricas e eletrônicas",
        "Conexões sanitárias",
      ],
      evaluationBody:
        "ETM450 é oferecido como grade candidato para avaliação. A aprovação final deve seguir teste no molde do cliente e nas condições reais de uso.",
      notesBody:
        "Esta página apoia a triagem preliminar do ETM450. Projeto da peça, molde, processamento, metas de desempenho e requisitos do cliente podem alterar o resultado. Solicite os documentos atuais e confirme o grade por amostragem e testes de aplicação.",
      inquiry: {
        eyebrow: "Avaliação de projeto ETM450",
        title: "Avaliar ETM450 para a sua peça moldada?",
        body:
          "Envie aplicação, processo, material atual, propriedades desejadas, cor, volume estimado e documentos necessários. Prepararemos a avaliação do grade e da amostra.",
        action: "Solicitar avaliação do ETM450",
      },
    },
    "etm750-base-pom-resin": {
      metadata: {
        title: "ETM750 POM de alta fluidez para parede fina | Taiyi Polymer",
        description:
          "Avalie o ETM750, grade POM de fluidez muito alta para peças de parede fina ou preenchimento crítico, e solicite dados ou uma amostra.",
        imageAlt: "Grânulos naturais de POM ETM750 da Taiyi Polymer",
      },
      breadcrumb: "ETM750",
      eyebrow: "POM de fluidez muito alta · Moldagem por injeção",
      summary:
        "ETM750 é um grade candidato para peças de parede fina ou preenchimento crítico quando caminho de fluxo e desempenho mecânico precisam ser avaliados em conjunto. Os valores publicados apoiam a seleção inicial; confirme a adequação com a geometria real, o molde, a janela de processo e as condições de uso.",
      sampleAction: "Solicitar amostra de ETM750",
      snapshot: {
        aria: "Resumo de dados do ETM750",
        title: "Perfil de triagem do ETM750",
        body:
          "Valores de referência e métodos de ensaio publicados para a comparação inicial de grades.",
        flowNote: "Perfil de fluidez muito alta para peças de parede fina",
      },
      sectionNavAria: "Seções da página do produto ETM750",
      features: [
        "Fluidez muito alta",
        "Direção para peças de parede fina",
        "Indicado para moldagem por injeção",
        "Cor natural",
      ],
      applications: [
        "Peças moldadas de parede fina",
        "Componentes automotivos",
        "Peças elétricas e eletrônicas",
        "Peças industriais moldadas por injeção",
      ],
      evaluationBody:
        "ETM750 é oferecido como grade candidato para avaliação. A aprovação final deve seguir testes de preenchimento e da peça no molde do cliente e nas condições reais de uso.",
      notesBody:
        "Esta página apoia a triagem preliminar do ETM750. Caminho de fluxo, espessura, ponto de injeção, molde, processamento e metas de desempenho podem alterar o resultado. Solicite os documentos atuais e confirme o grade por amostragem e testes de aplicação.",
      inquiry: {
        eyebrow: "Avaliação de projeto ETM750",
        title: "Avaliar ETM750 para a sua peça de parede fina?",
        body:
          "Envie espessura, caminho de fluxo, ponto de injeção, condição do molde, material atual, metas, cor, volume e documentos necessários. Prepararemos a avaliação do grade e da amostra.",
        action: "Solicitar avaliação do ETM750",
      },
    },
    "egb25-glass-bead-pom": {
      categoryLabel: "POM com microesferas de vidro",
      metadata: {
        title: "EGB25 POM com 25% de microesferas | Taiyi Polymer",
        description:
          "Avalie o EGB25, um POM com 25% de microesferas de vidro, por contração e dados térmicos e mecânicos, e solicite documentos ou uma amostra.",
        imageAlt: "Grânulos naturais de POM EGB25 da Taiyi Polymer",
      },
      breadcrumb: "EGB25",
      eyebrow: "POM com 25% de microesferas de vidro · Injeção",
      summary:
        "EGB25 é um grade candidato para peças injetadas que exigem avaliação conjunta da contração longitudinal e transversal e do perfil térmico. Os valores publicados apoiam a triagem inicial; confirme a adequação com a geometria real, o molde, a janela de processo e as condições de uso.",
      sampleAction: "Solicitar amostra de EGB25",
      snapshot: {
        aria: "Resumo de propriedades do EGB25",
        title: "Perfil de seleção do EGB25",
        body:
          "Valores de referência e métodos de ensaio publicados para a comparação inicial de grades.",
        flowNote: "MFI 8,5 g/10 min a 195 °C/2,16 kg",
      },
      sectionNavAria: "Seções da página do produto EGB25",
      features: [
        "25% de microesferas de vidro",
        "Direção equilibrada de contração longitudinal e transversal",
        "Temperatura de deflexão térmica de 110 °C a 1,8 MPa",
        "Cor natural",
      ],
      applications: [
        "Componentes automotivos",
        "Peças elétricas e eletrônicas",
        "Componentes sanitários",
        "Peças industriais moldadas por injeção",
      ],
      evaluationBody:
        "EGB25 é oferecido como grade candidato para avaliação. A aprovação final deve seguir a verificação de contração, dimensões e desempenho no molde do cliente e nas condições reais de uso.",
      notesBody:
        "Esta página apoia a triagem preliminar do EGB25. Geometria, espessura, ponto de injeção, molde, processamento e condições de ensaio podem alterar o resultado. Solicite os documentos atuais e confirme o grade por amostragem e testes de aplicação.",
      inquiry: {
        eyebrow: "Avaliação de projeto EGB25",
        title: "Avaliar EGB25 para a sua peça injetada?",
        body:
          "Envie geometria, meta de contração, condição do molde, material atual, metas de desempenho, cor, volume e documentos necessários. Prepararemos a avaliação do grade e da amostra.",
        action: "Solicitar avaliação do EGB25",
      },
    },
    "egh502h-glass-fiber-pom": {
      categoryLabel: "POM reforçado com fibra de vidro",
      metadata: {
        title: "EGH502H POM com 25% de fibra de vidro | Taiyi Polymer",
        description:
          "Avalie o EGH502H, um POM com 25% de fibra de vidro, por rigidez, contração e dados térmicos e mecânicos, e solicite uma amostra.",
        imageAlt: "Grânulos naturais de POM EGH502H da Taiyi Polymer",
      },
      breadcrumb: "EGH502H",
      eyebrow: "POM com 25% de fibra de vidro · Alta rigidez",
      summary:
        "EGH502H é um grade candidato para peças moldadas que exigem avaliação conjunta de alta rigidez, baixa contração e perfil térmico. Os valores publicados apoiam a triagem inicial; confirme a adequação com a geometria real, a orientação das fibras, o molde, a janela de processo e as condições de uso.",
      sampleAction: "Solicitar amostra de EGH502H",
      snapshot: {
        aria: "Resumo de propriedades do EGH502H",
        title: "Perfil de seleção do EGH502H",
        body:
          "Valores de referência e métodos de ensaio publicados para a comparação inicial de grades.",
        flowNote: "MFI 8,5 g/10 min a 195 °C/2,16 kg",
      },
      sectionNavAria: "Seções da página do produto EGH502H",
      features: [
        "25% de fibra de vidro",
        "Alta rigidez",
        "Direção de resistência à fluência",
        "Baixa contração de moldagem",
      ],
      applications: [
        "Componentes automotivos",
        "Peças elétricas",
        "Peças eletrônicas",
        "Peças industriais moldadas por injeção",
      ],
      evaluationBody:
        "EGH502H é oferecido como grade candidato para avaliação. A aprovação final deve seguir a verificação da orientação das fibras, das dimensões e do desempenho no molde do cliente e nas condições reais de uso.",
      notesBody:
        "Esta página apoia a triagem preliminar do EGH502H. Direção de fluxo, ponto de injeção, linhas de solda, espessura, molde e condições de ensaio podem alterar rigidez, contração e comportamento da peça. Solicite os documentos atuais e confirme o grade por amostragem e testes de aplicação.",
      inquiry: {
        eyebrow: "Avaliação de projeto EGH502H",
        title: "Avaliar EGH502H para a sua peça rígida?",
        body:
          "Envie geometria, metas de carga e rigidez, ponto de injeção, condição do molde, material atual, cor, volume e documentos necessários. Prepararemos a avaliação do grade e da amostra.",
        action: "Solicitar avaliação do EGH502H",
      },
    },
    "ehi402t-high-impact-pom": {
      categoryLabel: "POM de alto impacto",
      metadata: {
        title: "EHI402T POM de alto impacto | Taiyi Polymer",
        description:
          "Avalie o EHI402T por resistência ao impacto, comportamento em baixa temperatura, alongamento, fluidez e dados mecânicos e térmicos.",
        imageAlt: "Grânulos naturais de POM EHI402T da Taiyi Polymer",
      },
      breadcrumb: "EHI402T",
      eyebrow: "POM modificado para impacto · Processamento equilibrado",
      summary:
        "EHI402T é um grade candidato para peças funcionais em que tenacidade melhorada, comportamento em baixa temperatura e um perfil de processamento equilibrado precisam ser avaliados em conjunto. Os valores publicados apoiam a triagem inicial; confirme a adequação com a geometria real, entalhes, caso de carga, molde, janela de processo e temperatura de uso.",
      sampleAction: "Solicitar amostra de EHI402T",
      snapshot: {
        aria: "Resumo de propriedades do EHI402T",
        title: "Perfil de seleção do EHI402T",
        body:
          "Valores de referência e métodos de ensaio publicados para a comparação inicial de grades.",
        flowNote: "Perfil resistente ao impacto com processamento equilibrado",
      },
      sectionNavAria: "Seções da página do produto EHI402T",
      features: [
        "Direção de alta resistência ao impacto",
        "Direção de baixa temperatura",
        "Perfil de processamento equilibrado",
        "Cor natural",
      ],
      applications: [
        "Componentes automotivos",
        "Peças elétricas e eletrônicas",
        "Componentes sanitários",
        "Peças industriais moldadas por injeção",
      ],
      evaluationBody:
        "EHI402T é oferecido como grade candidato para avaliação técnica. A aprovação final deve seguir testes da peça, de impacto e de baixa temperatura no molde do cliente e nas condições reais de uso.",
      notesBody:
        "Esta página apoia a triagem preliminar do EHI402T. Entalhes, espessura, direção de fluxo, linhas de solda, duração da carga, temperatura, molde e condições de ensaio podem alterar o comportamento real ao impacto. Solicite os documentos atuais e confirme o grade por amostragem e testes de aplicação.",
      inquiry: {
        eyebrow: "Avaliação de projeto EHI402T",
        title: "Avaliar EHI402T para a sua peça sujeita a impacto?",
        body:
          "Envie o caso de carga, temperatura de uso, geometria, espessura, material atual, modo de falha, metas de desempenho, cor, volume e documentos necessários. Prepararemos a avaliação do grade e da amostra.",
        action: "Solicitar avaliação do EHI402T",
      },
    },
    "edr180-high-impact-pom": {
      categoryLabel: "POM de alto impacto",
      metadata: {
        title: "EDR180 POM de alto impacto e alto alongamento | Taiyi Polymer",
        description:
          "Avalie o EDR180 por resistência ao impacto, comportamento em baixa temperatura, alto alongamento na ruptura, fluidez e dados técnicos.",
        imageAlt: "Grânulos naturais de POM EDR180 da Taiyi Polymer",
      },
      breadcrumb: "EDR180",
      eyebrow: "POM modificado para impacto · Alto alongamento na ruptura",
      summary:
        "EDR180 é um grade candidato para peças funcionais em que resistência ao impacto, comportamento em baixa temperatura e uma reserva elevada de alongamento precisam ser avaliados em conjunto. Os valores publicados apoiam a triagem inicial; confirme a adequação com a geometria real, entalhes, caso de carga, molde, janela de processo e temperatura de uso.",
      sampleAction: "Solicitar amostra de EDR180",
      snapshot: {
        aria: "Resumo de propriedades do EDR180",
        title: "Perfil de seleção do EDR180",
        body:
          "Valores de referência e métodos de ensaio publicados para a comparação inicial de grades.",
        flowNote: "Perfil resistente ao impacto com alto alongamento",
      },
      sectionNavAria: "Seções da página do produto EDR180",
      features: [
        "Direção de alta resistência ao impacto",
        "Direção de baixa temperatura",
        "Alto alongamento na ruptura",
        "Cor natural",
      ],
      applications: [
        "Componentes automotivos",
        "Peças elétricas e eletrônicas",
        "Componentes sanitários",
        "Peças industriais moldadas por injeção",
      ],
      evaluationBody:
        "EDR180 é oferecido como grade candidato para avaliação técnica. A aprovação final deve seguir testes da peça, de impacto, alongamento e baixa temperatura no molde do cliente e nas condições reais de uso.",
      notesBody:
        "Esta página apoia a triagem preliminar do EDR180. Entalhes, espessura, direção de fluxo, linhas de solda, duração da carga, temperatura, molde e condições de ensaio podem alterar o alongamento e o comportamento ao impacto. Solicite os documentos atuais e confirme o grade por amostragem e testes de aplicação.",
      inquiry: {
        eyebrow: "Avaliação de projeto EDR180",
        title: "Avaliar EDR180 para a sua peça sujeita a impacto?",
        body:
          "Envie o caso de carga, temperatura de uso, geometria, espessura, material atual, modo de falha, meta de alongamento, cor, volume e documentos necessários. Prepararemos a avaliação do grade e da amostra.",
        action: "Solicitar avaliação do EDR180",
      },
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
      "ETM450, ETM750, XT-100, EGB25, EGH502H, EHI402T e EDR180 formam o grupo de dados totalmente localizado. Outros grades serão adicionados somente após a mesma revisão técnica e linguística.",
    gradeLabel: "Grade",
    materialLabel: "Material",
    statusLabel: "Status dos dados",
    statusValue: "Dados web disponíveis · PDF a confirmar mediante solicitação",
    viewAction: "Abrir dados do grade",
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
