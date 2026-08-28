"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
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
  ...props
}: TechnicalDataQueryLinkProps) {
  const router = useRouter();

  return (
    <Link
      {...props}
      href={cleanHref}
      prefetch={false}
      onNavigate={(event) => {
        event.preventDefault();
        router.push(queryHref);
      }}
    />
  );
}
