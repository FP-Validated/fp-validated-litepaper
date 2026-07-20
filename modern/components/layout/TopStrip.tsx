"use client";

import type { Lang } from "@/content/litepaper";
import { brand } from "@/content/litepaper";

export function TopStrip({
  lang,
  setLang
}: {
  lang: Lang;
  setLang: (lang: Lang) => void;
}) {
  return (
    <>
      <div className="langtoggle">
        <button className={lang === "en" ? "on" : ""} onClick={() => setLang("en")} type="button">
          EN
        </button>
        <button className={lang === "ko" ? "on" : ""} onClick={() => setLang("ko")} type="button">
          한국어
        </button>
      </div>
      <div className="topstrip">
        <div className="r">{brand.topStrip[lang]}</div>
      </div>
    </>
  );
}
