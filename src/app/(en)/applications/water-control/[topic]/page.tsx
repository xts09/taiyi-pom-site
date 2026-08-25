import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getApplicationBySlug } from "@/data/applications";
import {
  getEnglishSystemTopicStaticParams,
  resolveEnglishSystemTopicRoute,
} from "@/data/systemTopicReleases";
import { findCategoryBySlug } from "@/lib/productCategories";

import { ValveFlowControlTopicPage } from "./ValveFlowControlTopicPage";

type SystemTopicPageProps = {
  params: Promise<{ topic: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return getEnglishSystemTopicStaticParams();
}

const resolveTopicPage = async (params: SystemTopicPageProps["params"]) => {
  const { topic: topicSlug } = await params;
  const resolved = resolveEnglishSystemTopicRoute(topicSlug);

  if (!resolved) {
    notFound();
  }

  const { localeRelease, release, topic } = resolved;
  const application = getApplicationBySlug(
    localeRelease.route.applicationSlug,
  );

  if (
    !application ||
    application.slug !== localeRelease.route.applicationSlug ||
    topic.applicationId !== release.applicationId
  ) {
    notFound();
  }

  const representativeParts = topic.representativePartContexts.map(
    (context) => {
      const part = application.parts.find(
        (applicationPart) => applicationPart.id === context.partId,
      );

      if (!part) {
        notFound();
      }

      return { context, part };
    },
  );

  const materialDirections = topic.materialDirections.map((direction) => {
    const category = findCategoryBySlug(direction.productCategorySlug);

    if (!category) {
      notFound();
    }

    return { category, direction };
  });
  return {
    application,
    localeRelease,
    materialDirections,
    representativeParts,
    topic,
  };
};

export async function generateMetadata({
  params,
}: SystemTopicPageProps): Promise<Metadata> {
  await resolveTopicPage(params);

  return {
    alternates: null,
    title: {
      absolute:
        "Valve Flow-Control System Material Selection | Taiyi Polymer",
    },
    description:
      "Allocate valve-system requirements across moving internals, body and housing roles, sealing interfaces, material directions, and finished-assembly validation.",
    openGraph: null,
    robots: {
      follow: false,
      index: false,
      googleBot: {
        follow: false,
        index: false,
      },
    },
  };
}

export default async function SystemTopicPage({
  params,
}: SystemTopicPageProps) {
  const resolved = await resolveTopicPage(params);

  return <ValveFlowControlTopicPage {...resolved} />;
}
