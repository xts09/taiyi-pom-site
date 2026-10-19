"use client";

import { useId, useState } from "react";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Select } from "@/components/ui/select";
import type { PreviewLanguage } from "./showcase-config";
import styles from "./NavigationShowcase.module.css";

type NavigationShowcaseProps = {
  homeHref: string;
  innerHref: string;
  language: PreviewLanguage;
};

export function NavigationShowcase({ homeHref, innerHref, language }: NavigationShowcaseProps) {
  const [version, setVersion] = useState("current");
  const [initialMenu, setInitialMenu] = useState("products");
  const [scene, setScene] = useState("home");
  const [width, setWidth] = useState("auto");
  const sceneId = useId();
  const widthId = useId();
  const noteId = useId();
  const versionId = useId();
  const href = version === "single-row"
    ? `/design-system/navigation-single-row?lang=${language}&scene=${scene}&menu=${initialMenu}`
    : version === "concept"
    ? `/design-system/navigation-concept?lang=${language}&scene=${scene}`
    : scene === "home" ? homeHref : innerHref;

  return (
    <div className={styles.root}>
      <FieldGroup className={styles.controls}>
        <Field>
          <FieldLabel htmlFor={versionId}>导航版本</FieldLabel>
          <Select id={versionId} value={version} onChange={event => setVersion(event.target.value)}>
            <option value="current">当前本地导航</option>
            <option value="single-row">单行方案参考</option>
            <option value="concept">原始方案参考</option>
          </Select>
        </Field>
        <Field>
          <FieldLabel htmlFor={`${sceneId}-menu`}>起始状态</FieldLabel>
          <Select id={`${sceneId}-menu`} value={initialMenu} disabled={version !== "single-row"} onChange={event => setInitialMenu(event.target.value)}>
            <option value="products">产品菜单展开</option>
            <option value="closed">导航收起</option>
            <option value="applications">应用菜单展开</option>
            <option value="resources">资料菜单展开</option>
          </Select>
        </Field>
        <Field>
          <FieldLabel htmlFor={sceneId}>页面场景</FieldLabel>
          <Select id={sceneId} value={scene} onChange={event => setScene(event.target.value)}>
            <option value="home">首页 · 深色导航</option>
            <option value="inner">内页 · 白色导航</option>
          </Select>
        </Field>
        <Field>
          <FieldLabel htmlFor={widthId}>预览宽度</FieldLabel>
          <Select id={widthId} value={width} onChange={event => setWidth(event.target.value)}>
            <option value="auto">适应当前宽度</option>
            <option value="390">手机 · 390px</option>
            <option value="1024">窄桌面 · 1024px</option>
            <option value="1366">桌面 · 1366px</option>
            <option value="1920">桌面 · 1920px</option>
          </Select>
        </Field>
        <Button variant="secondary" size="form" className={styles.openPage} asChild>
          <a href={href} target="_blank" rel="noreferrer">{version !== "current" ? "全屏查看方案" : "打开实际页面"}<ArrowUpRight data-icon="inline-end" /></a>
        </Button>
      </FieldGroup>
      <p id={noteId} className={styles.note}>{version === "single-row" ? "单行方案参考：品牌、业务菜单、公司入口与工具共用一条中线。产品展开分为 POM、聚酰胺、导电与抗静电三组；POM 内部按功能改性与增强填充分列，基础树脂单独列出。" : version === "concept" ? "原始方案参考：可与当前本地导航对照。" : "当前本地单行导航，资料入口显示“查找 TDS / Find TDS”。可检查深色/白色、菜单展开、语言和键盘状态；固定宽度预览可横向滚动。"}</p>
      <div className={styles.stage}>
        <iframe
          key={href}
          src={href}
          title={`${version === "single-row" ? "单行方案" : version === "concept" ? "原始方案" : "本地"}${scene === "home" ? "首页" : "内页"}导航预览`}
          aria-describedby={noteId}
          loading="lazy"
          allow="autoplay"
          className={styles.frame}
          style={{ width: width === "auto" ? "100%" : `${width}px` }}
        />
      </div>
    </div>
  );
}
