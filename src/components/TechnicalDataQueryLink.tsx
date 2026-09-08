"use client";

import Link from "next/link";
import type { ComponentProps } from "react";

type TechnicalDataQueryLinkProps = Omit<
  ComponentProps<typeof Link>,
  "href" | "onNavigate" | "prefetch"
> & {
  cleanHref: string;
  queryHref: string;
};

export function TechnicalDataQueryLink({
  cleanHref,
  queryHref,
  rel,
  ...props
}: TechnicalDataQueryLinkProps) {
  const linkRel = queryHref === cleanHref
    ? rel
    : Array.from(new Set([...(rel?.split(/\s+/).filter(Boolean) ?? []), "nofollow"]))
        .join(" ");

  return (
    <Link
      {...props}
      href={queryHref}
      rel={linkRel}
      prefetch={false}
    />
  );
}
