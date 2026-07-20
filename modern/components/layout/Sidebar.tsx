"use client";

import Image from "next/image";

import type { Lang, SectionId } from "@/content/litepaper";
import { brand, navItems } from "@/content/litepaper";

export function Sidebar({
  lang,
  activeId
}: {
  lang: Lang;
  activeId: SectionId;
}) {
  return (
    <aside className="side">
      <div className="brand">
        <Image
          alt="FP Validated"
          className="logomark"
          height={70}
          priority
          src={brand.logo}
          width={198}
        />
        <sub>{brand.subtitle[lang]}</sub>
      </div>
      <nav id="nav" aria-label="Litepaper sections">
        {navItems.map((item) => (
          <a className={activeId === item.id ? "active" : ""} href={`#${item.id}`} key={item.id}>
            <span className="n">{item.index}</span>
            <span>{item.label[lang]}</span>
          </a>
        ))}
      </nav>
      <div className="foot">
        <a href={brand.url} rel="noopener" target="_blank">
          validated.4pillars.io
        </a>
        <br />© 2026 Four Pillars Inc.
      </div>
    </aside>
  );
}
