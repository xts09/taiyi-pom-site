import type { LocalizedGradeProfileMessages } from "./productFunnelTypes.ts";

type ChinesePomGradeProfileSeed = {
  grade: string;
  categoryLabel: string;
  metadataTitle: string;
  metadataDescription: string;
  imageAlt: string;
  eyebrow: string;
  summary: string;
  flowNote: string;
  features: readonly string[];
  applications: readonly string[];
  evaluationBody: string;
  notesBody: string;
  inquiryTitle: string;
  inquiryBody: string;
};

export const createChinesePomGradeProfile = ({
  grade,
  categoryLabel,
  metadataTitle,
  metadataDescription,
  imageAlt,
  eyebrow,
  summary,
  flowNote,
  features,
  applications,
  evaluationBody,
  notesBody,
  inquiryTitle,
  inquiryBody,
}: ChinesePomGradeProfileSeed): LocalizedGradeProfileMessages => ({
  categoryLabel,
  metadata: {
    title: metadataTitle,
    description: metadataDescription,
    imageAlt,
  },
  breadcrumb: grade,
  eyebrow,
  summary,
  sampleAction: `申请 ${grade} 样品`,
  snapshot: {
    aria: `${grade} 关键数据概览`,
    title: `${grade} 选型概览`,
    body: "用于初步比较牌号的已发布参考数据和测试方法。",
    flowNote,
  },
  sectionNavAria: `${grade} 产品页分区`,
  features,
  applications,
  evaluationBody,
  notesBody,
  inquiry: {
    eyebrow: `${grade} 项目评估`,
    title: inquiryTitle,
    body: inquiryBody,
    action: `申请 ${grade} 评估`,
  },
});
