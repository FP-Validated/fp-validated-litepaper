"use client";

import type { Lang } from "@/content/litepaper";
import { brand } from "@/content/litepaper";

export function PageFooter({ lang }: { lang: Lang }) {
  return (
    <div className="pagefoot">
      <div>FP Validated · Litepaper 2026</div>
      <div>
        {brand.topStrip[lang]} · © 2026 Four Pillars Inc.
      </div>
    </div>
  );
}
