"use client";

import type { Lang, Localized } from "@/content/litepaper";
import { Reveal } from "./Reveal";

export type RowItem = {
  eyebrow: Localized;
  title: Localized;
  body: Localized;
};

export function RowList({ rows, lang }: { rows: readonly RowItem[]; lang: Lang }) {
  return (
    <div className="rows">
      {rows.map((row, index) => (
        <Reveal key={row.title.en} delay={1}>
          <div className="row">
            <div className="idx">{String(index + 1).padStart(2, "0")}</div>
            <div className="ti">
              <span className="k">{row.eyebrow[lang]}</span>
              <h3>{row.title[lang]}</h3>
            </div>
            <div className="ds">{row.body[lang]}</div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
