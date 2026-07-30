import Link from "next/link";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type HomeReviewCardProps = {
  className?: string;
};

export function HomeReviewCard({ className }: HomeReviewCardProps) {
  return (
    <Card
      className={cn(
        "hero-review-card gap-0 border-0 py-0 shadow-none",
        className,
      )}
      role="complementary"
      aria-label="Material screening inputs"
    >
      <p>Screening starts with the part</p>
      <dl>
        <div>
          <dt>Motion</dt>
          <dd>Sliding, rotating or structural load</dd>
        </div>
        <div>
          <dt>Tooling</dt>
          <dd>Gate, cavity, shrinkage and warpage</dd>
        </div>
        <div>
          <dt>Evidence</dt>
          <dd>Samples, TDS, COA and batch context</dd>
        </div>
      </dl>
      <Link href="/applications">See application requirements &rarr;</Link>
    </Card>
  );
}
