# Resources Content Brief

这份文档用于生成 `/resources` 下四个技术资源页的正式英文内容。建议每次只让 GPT 生成一个页面，避免内容变泛。

## 全站内容基调

- 语言：英文。
- 角色：工程塑料改性材料供应商，核心产品是 modified POM compounds，同时可按项目评估 PA6、PA66、PPA、PPS。
- 受众：海外采购、产品工程师、模具/注塑工程师、材料工程师。
- 风格：专业、克制、可执行，不写夸张营销语。
- 禁止：不要编造未经确认的绝对参数、认证、客户案例、库存、价格、交期。
- 参数原则：涉及温度、收缩率、强度、HDT、MFI 等具体数值时，除非有真实 TDS 支撑，否则写成“typical review points / confirm with grade TDS / project-based review”。

## 1. Material Selection Guide

目标 URL：`/resources/material-selection-guide`

SEO 目标：
- how to choose POM grades
- POM material selection guide
- wear-resistant POM vs low-friction POM
- reinforced POM compound
- conductive POM / antistatic POM
- MFI tensile HDT shrinkage meaning

需要生成的内容：
- `description`：150-160 characters，用于 meta description。
- `intro`：80-130 words，说明这是 POM 改性材料选择框架。
- 3-5 个模块，每个模块包含：
  - `title`
  - `description`：1-2 句
  - `points`：3-5 条，每条 12-28 words

建议模块：
- Start From The Part Requirement
- Compare Modified POM Directions
- Read The Key Properties
- Match Application And Processing Risk
- What To Share For Recommendation

生成提示词：

```text
Write professional website content in English for a modified POM compound supplier.
Page: Material Selection Guide.
Audience: overseas buyers, product engineers, mold engineers, material engineers.
Tone: technical, concise, practical, not promotional.
Do not invent exact data values, certifications, inventory, pricing, or customer cases.
Structure output as JSON with: description, intro, modules[{title, description, points[]}].
Cover: choosing POM grades, wear-resistant POM, low-friction POM, reinforced POM, conductive/antistatic/UV/high-impact POM, MFI/tensile/flexural/impact/HDT/shrinkage, and what project information buyers should provide.
```

## 2. Processing Guide

目标 URL：`/resources/processing-guide`

SEO 目标：
- POM injection molding guide
- POM drying and processing
- POM shrinkage and warpage
- POM molding defects
- POM mold temperature injection molding

需要生成的内容：
- `description`：150-160 characters。
- `intro`：80-130 words。
- 3-5 个模块，每个模块 3-5 个要点。

建议模块：
- Before Molding Trial
- Drying And Material Handling
- Injection Molding Review Points
- Shrinkage And Warpage Control
- Common Defect Troubleshooting

注意：
- 不要直接编固定温度范围，除非你后续提供真实数据。
- 可以写“confirm the selected grade TDS before production”。
- 内容应服务于客户提交问题，而不是做完整加工手册。

生成提示词：

```text
Write professional website content in English for a modified POM compound supplier.
Page: Processing Guide.
Audience: injection molding engineers, mold engineers, buyers preparing trial runs.
Tone: technical, cautious, practical.
Do not invent exact processing temperatures or universal parameters. Use wording such as "review with the selected grade TDS" where exact values are needed.
Structure output as JSON with: description, intro, modules[{title, description, points[]}].
Cover: drying/material handling, injection molding review, mold design inputs, shrinkage, warpage, dimensional drift, sink marks, flash, short shot, surface marks, and what information to share for troubleshooting.
```

## 3. Application Notes

目标 URL：`/resources/application-notes`

SEO 目标：
- POM automotive applications
- POM gears bushings rollers
- POM water control parts
- POM molded part material selection
- modified POM application notes

需要生成的内容：
- `description`：150-160 characters。
- `intro`：80-130 words。
- 4-6 个应用模块，每个模块 3-5 个要点。

建议模块：
- Automotive Molded Parts
- Gears Bushings Sliders And Rollers
- Water Control And Valve Parts
- Electrical And Electronic Components
- Industrial Machinery Components
- Outdoor Or UV-Exposed Parts

每个模块应包含：
- 典型零件。
- 工况或痛点。
- 关键性能需求。
- 可推荐的材料方向，但不要承诺具体牌号。

生成提示词：

```text
Write professional website content in English for a modified POM compound supplier.
Page: Application Notes.
Audience: overseas buyers and engineers selecting materials for molded parts.
Tone: practical, application-led, not promotional.
Do not invent customer cases, certifications, or exact grades unless framed as examples of material directions.
Structure output as JSON with: description, intro, modules[{title, description, points[]}].
Cover automotive molded parts, gears/bushings/sliders/rollers, water control/valve parts, electronics, industrial machinery, outdoor/UV-exposed parts. For each module include typical parts, working conditions, material concerns, and relevant modified POM directions.
```

## 4. FAQ / Knowledge Base

目标 URL：`/resources/faq`

SEO 目标：
- POM vs PA
- wear resistant POM
- low friction POM
- glass fiber reinforced POM
- conductive POM vs antistatic POM
- how to read POM TDS

需要生成的内容：
- `description`：150-160 characters。
- `intro`：70-110 words。
- 10-20 个 FAQ。
- 如果沿用当前页面结构，可以先分成 3-5 个模块，每个模块下面 3-5 个问题要点。
- 后续如果要做真正 FAQ schema，再把问题拆成独立 Q/A 数据。

建议问题方向：
- What is modified POM?
- How do I choose a POM grade?
- Wear-resistant POM vs low-friction POM?
- Reinforced POM vs unfilled POM?
- Conductive POM vs antistatic POM?
- POM vs PA for molded parts?
- What does MFI mean?
- How should tensile, flexural, impact, and HDT be compared?
- Why do shrinkage and warpage vary?
- What information is needed for a recommendation?

生成提示词：

```text
Write professional FAQ content in English for a modified POM compound supplier.
Page: FAQ / Knowledge Base.
Audience: overseas buyers, product engineers, material engineers, mold engineers.
Tone: clear, technical, buyer-friendly.
Do not invent exact values, certifications, inventory, pricing, or customer cases.
Structure output as JSON with: description, intro, modules[{title, description, points[]}].
Alternatively provide faqItems[{question, answer}] if asked.
Cover POM vs PA, wear-resistant POM, low-friction POM, reinforced POM, conductive vs antistatic POM, UV-resistant POM, MFI/tensile/flexural/impact/HDT, shrinkage/warpage, TDS documents, and project recommendation inputs.
```
