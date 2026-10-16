import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

import { SectionIntro } from "@/components/SectionIntro";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { loadMessages } from "@/i18n/messages";
import { EvidenceShowcase } from "./EvidenceShowcase";
import { HomePatternShowcase } from "./HomePatternShowcase";
import { PomDirectoryShowcase } from "./PomDirectoryShowcase";
import { ShowcaseNavigation } from "./ShowcaseNavigation";
import { showcaseSections, type PreviewConfig } from "./showcase-config";

import styles from "./ComponentShowcase.module.css";

const colorPairs = [
  { name: "正文 / 信息面", foreground: "--ds-foreground-primary", background: "--ds-background-surface" },
  { name: "辅助文字 / 页面底色", foreground: "--ds-foreground-muted", background: "--ds-background-canvas" },
  { name: "主操作", foreground: "--ds-button-primary-fg", background: "--ds-button-primary-bg" },
  { name: "案例与证据", foreground: "--ds-foreground-on-dark", background: "--ds-background-evidence" },
] as const;

function SpecLabel({ children }: { children: React.ReactNode }) {
  return <p className={styles.specLabel}>{children}</p>;
}

function CatalogueIntro({ titleId, title, description }: { titleId: string; title: string; description: string }) {
  return <header className={styles.catalogueIntro}><h2 id={titleId}>{title}</h2><p>{description}</p></header>;
}

export async function ComponentShowcase({ preview }: { preview: PreviewConfig }) {
  const messages = await loadMessages(preview.locale);
  return (
    <main className={styles.root} lang="zh-CN">
      <header className={`site-container ${styles.pageIntro}`}>
        <div>
          <h1>组件规范与页面组合</h1>
          <p className={styles.lead}>
            查看共享组件的实际状态、长文案与页面组合。首页、导航和证据样例可切换语言。
          </p>
        </div>
        <p className={styles.scopeNote}>
          组件与实际页面同步更新<br />
          规范来源：DESIGN.md · tokens.css · COMPONENTS.md
        </p>
      </header>

      <ShowcaseNavigation sections={showcaseSections} language={preview.value} pathname="/design-system" />

      <div className={`site-container ${styles.sections}`}>
        <section id="foundations" className={styles.section} aria-labelledby="foundations-title">
          <CatalogueIntro titleId="foundations-title" title="基础规范" description="颜色按用途选择；字体、间距和圆角由共享变量控制。" />
          <div className={styles.colorGrid}>
            {colorPairs.map((pair) => (
              <div key={pair.name} className={styles.colorSpecimen}>
                <div className={styles.colorPair} data-color-pair={pair.name} style={{ color: `var(${pair.foreground})`, background: `var(${pair.background})` }}>
                  <span>Aa</span>
                  <p>精密塑料齿轮 · Precision plastic gears</p>
                </div>
                <SpecLabel>{pair.name}</SpecLabel>
                <code>{pair.foreground}<br />{pair.background}</code>
              </div>
            ))}
          </div>
          <div className={styles.readabilityGrid}>
            {[
              { surface: "white", title: "白底正文" },
              { surface: "canvas", title: "浅灰底说明" },
              { surface: "dark", title: "深色背景" },
            ].map(({ surface, title }) => (
              <div key={surface} className={styles.readabilitySample} data-reading-surface={surface}>
                <h3>{title}</h3>
                <p>根据零部件的负载、温度与摩擦条件选择材料。说明文字应能直接阅读。</p>
                <p>Review material properties, grade data and application requirements.</p>
                <span>正文与说明均需清晰；层级同时由字号、字重和间距建立。</span>
              </div>
            ))}
          </div>
          <div className={styles.foundationGrid}>
            <div className={styles.typeSpecimen}>
              <SpecLabel>标题 / 正文 / 标签</SpecLabel>
              <h3>从应用需求开始选择材料</h3>
              <p>对照材料方向，查看客户案例，再讨论具体牌号与资料需求。</p>
              <span>POM MATERIAL SELECTION</span>
            </div>
            <div>
              <SpecLabel>间距 / 4px 基准</SpecLabel>
              <div className={styles.spacingScale}>
                {[2, 3, 4, 6, 8, 12].map((step) => <div key={step}><span style={{ width: `var(--ds-space-${step})` }} /><code>{step * 4}px</code></div>)}
              </div>
            </div>
            <div>
              <SpecLabel>圆角 / 按组件角色</SpecLabel>
              <div className={styles.radiusScale}>
                {[["tight", "按钮 · 4px"], ["control", "输入框 · 5.12px"], ["panel", "信息面 · 8px"], ["evidence", "证据面 · 16px"]].map(([token, label]) => <div key={token}><span style={{ borderRadius: `var(--ds-radius-${token})` }} /><p>{label}</p></div>)}
              </div>
            </div>
          </div>
        </section>

        <section id="actions" className={styles.section} aria-labelledby="actions-title">
          <CatalogueIntro titleId="actions-title" title="按钮" description="主操作、辅助操作和深色背景操作使用明确变体；悬停与键盘焦点可直接操作检查。" />
          <div className={styles.actionGrid}>
            <div className={styles.actionSpecimen}>
              <SpecLabel>Primary / 主操作</SpecLabel>
              <Button variant="primary" size="form" type="button">讨论您的应用<ArrowRight data-icon="inline-end" /></Button>
              <SpecLabel>Disabled / 禁用</SpecLabel>
              <Button variant="primary" size="form" type="button" disabled>讨论您的应用<ArrowRight data-icon="inline-end" /></Button>
            </div>
            <div className={styles.actionSpecimen}>
              <SpecLabel>Secondary / 辅助操作</SpecLabel>
              <Button variant="secondary" size="form" type="button"><Download data-icon="inline-start" />获取牌号资料</Button>
              <SpecLabel>Disabled / 禁用</SpecLabel>
              <Button variant="secondary" size="form" type="button" disabled><Download data-icon="inline-start" />获取牌号资料</Button>
            </div>
            <Card variant="evidence" className={styles.actionSpecimen}>
              <SpecLabel>Inverse / 深色背景</SpecLabel>
              <Button variant="inverse" size="form" type="button">查看应用案例<ArrowRight data-icon="inline-end" /></Button>
              <SpecLabel>Disabled / 禁用</SpecLabel>
              <Button variant="inverse" size="form" type="button" disabled>查看应用案例<ArrowRight data-icon="inline-end" /></Button>
            </Card>
          </div>
          <div className={styles.edgeExample}>
            <SpecLabel>长文案 / 使用支持换行的应用按钮尺寸</SpecLabel>
            <Button variant="applicationHeroPrimary" size="applicationHero" type="button">Discuss material selection for precision plastic gear applications<ArrowRight data-icon="inline-end" /></Button>
          </div>
        </section>

        <section id="fields" className={styles.section} aria-labelledby="fields-title">
          <CatalogueIntro titleId="fields-title" title="表单" description="标签、说明和控件组合在一起；输入框外观由共享控件负责。以下字段可编辑。" />
          <div className={styles.twoColumns}>
            <Card variant="standard">
              <CardContent>
                <FieldSet>
                  <FieldLegend>讨论材料需求</FieldLegend>
                  <FieldGroup>
                    <Field>
                      <FieldLabel htmlFor="specimen-application">应用或零部件</FieldLabel>
                      <Input id="specimen-application" defaultValue="精密塑料齿轮" aria-describedby="specimen-application-note" />
                      <FieldDescription id="specimen-application-note">描述零件与当前材料，便于开始讨论。</FieldDescription>
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="specimen-priority">主要关注点</FieldLabel>
                      <Select id="specimen-priority" defaultValue="wear"><option value="wear">摩擦与磨损</option><option value="dimension">尺寸稳定性</option><option value="load">负载下的变形</option></Select>
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="specimen-context">补充说明</FieldLabel>
                      <Textarea id="specimen-context" placeholder="当前材料、使用环境或希望获取的资料" rows={3} />
                    </Field>
                  </FieldGroup>
                </FieldSet>
              </CardContent>
            </Card>
            <Card variant="soft">
              <CardContent>
                <FieldSet>
                  <FieldLegend>边界状态</FieldLegend>
                  <FieldGroup>
                    <Field data-disabled>
                      <FieldLabel htmlFor="specimen-disabled">暂不可编辑 / Disabled</FieldLabel>
                      <Input id="specimen-disabled" defaultValue="POM" disabled />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="specimen-readonly">仅供查阅 / Read-only</FieldLabel>
                      <Input id="specimen-readonly" defaultValue="Taiyi Polymer · PLATFORM" readOnly />
                    </Field>
                    <Field>
                      <FieldLabel htmlFor="specimen-long">较长的英文应用名称 / Long content</FieldLabel>
                      <Textarea id="specimen-long" defaultValue="Material selection for precision plastic gears in automotive wiper systems" rows={3} />
                    </Field>
                  </FieldGroup>
                </FieldSet>
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="disclosures" className={styles.section} aria-labelledby="disclosures-title">
          <CatalogueIntro titleId="disclosures-title" title="折叠" description="补充信息按需展开；标题、内容与开合状态保持明确对应。支持键盘操作。" />
          <Accordion type="single" collapsible variant="technical-row" defaultValue="material" className={styles.accordionLayout}>
            <AccordionItem value="material">
              <AccordionTrigger>如何比较齿轮用 POM 材料？</AccordionTrigger>
              <AccordionContent>先区分综合性能、摩擦磨损与负载变形的关注点，再结合具体零件和工况讨论材料。</AccordionContent>
            </AccordionItem>
            <AccordionItem value="documents">
              <AccordionTrigger>开始讨论时，可以提供哪些资料？</AccordionTrigger>
              <AccordionContent>当前材料、零件图纸和主要使用条件有助于缩小候选范围。牌号资料按具体需求提供。</AccordionContent>
            </AccordionItem>
            <AccordionItem value="long">
              <AccordionTrigger>Which material information is useful when discussing a precision plastic gear application with the technical team?</AccordionTrigger>
              <AccordionContent>Share the current material, part geometry and operating conditions so the discussion can focus on the application.</AccordionContent>
            </AccordionItem>
            <AccordionItem value="disabled" disabled>
              <AccordionTrigger>暂不可展开 / Disabled</AccordionTrigger>
              <AccordionContent>禁用示例。</AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className={styles.consumerLinks}>
            <SpecLabel>真实页面组合 / 查看共享折叠的使用效果</SpecLabel>
            <Button variant="secondary" size="form" asChild>
              <Link href="/design-system/engineering-gf">工程塑料组件验收<ArrowRight data-icon="inline-end" /></Link>
            </Button>
            <Button variant="secondary" size="form" asChild>
              <Link href="/resources/pom-gear-material-selection">齿轮资料文章<ArrowRight data-icon="inline-end" /></Link>
            </Button>
          </div>
        </section>

        <section id="surfaces" className={styles.section} aria-labelledby="surfaces-title">
          <CatalogueIntro titleId="surfaces-title" title="卡片" description="标准、柔和与证据三类表面各有用途；内容结构通过标题、说明、正文和操作插槽组合。" />
          <div className={styles.cardGrid}>
            {(["standard", "soft", "evidence"] as const).map((variant, index) => (
              <Card key={variant} variant={variant} className={styles.composedCard}>
                <CardHeader>
                  <CardTitle>{["齿轮材料方向", "讨论您的应用", "齿轮应用案例"][index]}</CardTitle>
                  <CardDescription>{["Standard · 信息面", "Soft · 相关内容分组", "Evidence · 项目证据"][index]}</CardDescription>
                </CardHeader>
                <CardContent><p>{["根据零件的主要需求，比较平衡型、耐磨型和增强型 POM。", "提供当前材料、主要问题与使用环境，讨论相关牌号资料。", "阅读实际项目的问题、材料与设计调整，以及已报告的验证阶段。"][index]}</p></CardContent>
                <CardFooter><Button variant={variant === "evidence" ? "inverse" : "secondary"} size="form" asChild><Link href={variant === "evidence" ? "/case-studies" : "/components/precision-plastic-gears"}>{variant === "evidence" ? "查看客户案例" : "查看齿轮应用"}<ArrowRight data-icon="inline-end" /></Link></Button></CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="evidence" className={styles.section} aria-labelledby="evidence-title">
          <CatalogueIntro titleId="evidence-title" title="图片与证据" description="照片、数字和文件各用自己的共享组件；页面再把它们组合成有事实依据的内容。" />
          <EvidenceShowcase messages={messages} preview={preview} />
        </section>

        <section id="composition" className={styles.section} aria-labelledby="composition-title">
          <CatalogueIntro titleId="composition-title" title="标题与组合" description="共享标题控制字号和层级。页面选择堆叠或左右布局，并让正文延续对应的栅格。" />
          <Card variant="standard" className={styles.recipe}>
            <CardContent>
              <SpecLabel>Stacked / 单列介绍</SpecLabel>
              <SectionIntro headingLevel={3} title="齿轮用 POM 材料" description="平衡型、耐磨型与增强型 POM，分别对应不同的应用关注点。" />
              <div className={styles.recipeAction}><Button variant="primary" size="form" asChild><Link href="/components/precision-plastic-gears">查看材料方向<ArrowRight data-icon="inline-end" /></Link></Button></div>
            </CardContent>
          </Card>
          <Card variant="evidence" className={styles.recipe}>
            <CardContent>
              <SpecLabel>Split / 对齐左右轨道</SpecLabel>
              <SectionIntro headingLevel={3} layout="split" variant="dark" title="从应用到材料" description="从具体零件出发，结合工况、材料方向和客户案例，开始讨论牌号资料。" />
              <div className={styles.splitRecipe}>
                <p>精密塑料齿轮</p>
                <Button variant="inverse" size="form" asChild><Link href="/components/precision-plastic-gears">了解齿轮应用<ArrowRight data-icon="inline-end" /></Link></Button>
              </div>
            </CardContent>
          </Card>
        </section>
        <section id="grade-directory" className={styles.section} aria-labelledby="grade-directory-title">
          <CatalogueIntro titleId="grade-directory-title" title="牌号目录" description="使用真实目录的 EMS102 与 EMS162，检查配方标签、选型取舍、数据与长文案的排布。" />
          <PomDirectoryShowcase preview={preview} />
        </section>
        <section id="home-patterns" className={styles.section} aria-labelledby="home-patterns-title">
          <CatalogueIntro titleId="home-patterns-title" title="首页组合" description="沿用首页正在使用的组件、图片和目录数据，检查它们的桌面排布、手机简化与实际链接。" />
          <HomePatternShowcase messages={messages} preview={preview} />
        </section>
      </div>
    </main>
  );
}
