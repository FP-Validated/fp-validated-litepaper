"use client";

import type { Lang, Localized } from "@/content/litepaper";
import { Reveal } from "./Reveal";

export function StatGrid({
  items,
  lang,
  className = ""
}: {
  items: { value: string; label: Localized }[];
  lang: Lang;
  className?: string;
}) {
  return (
    <div className={`stats ${className}`}>
      {items.map((item, index) => (
        <Reveal delay={(Math.min(index + 1, 4) as 1 | 2 | 3 | 4)} key={`${item.value}-${item.label.en}`}>
          <div className="stat">
            <div className="num">{item.value}</div>
            <div className="k">{item.label[lang]}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
