"use client";

import type { ElementType } from "react";

import type { Localized } from "@/content/litepaper";

export function LocalizedHtml({
  value,
  lang,
  as: Tag = "span",
  className
}: {
  value: Localized;
  lang: "en" | "ko";
  as?: ElementType;
  className?: string;
}) {
  return (
    <Tag
      className={className}
      dangerouslySetInnerHTML={{ __html: value[lang] }}
    />
  );
}
