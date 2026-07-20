"use client";

import Image from "next/image";

import type { Lang, Localized } from "@/content/litepaper";

export function Chip({
  icon,
  name,
  label,
  lang
}: {
  icon?: string;
  name?: string;
  label?: Localized;
  lang: Lang;
}) {
  return (
    <span className="chip">
      {icon ? <Image className="cl" src={icon} alt="" width={21} height={21} /> : null}
      {name ? <span>{name}</span> : null}
      {label ? <small>{label[lang]}</small> : null}
    </span>
  );
}
