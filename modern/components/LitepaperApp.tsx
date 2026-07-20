"use client";

import { useEffect, useState } from "react";

import type { Lang, SectionId } from "@/content/litepaper";
import { navItems } from "@/content/litepaper";
import { PageFooter } from "./layout/PageFooter";
import { Sidebar } from "./layout/Sidebar";
import { TopStrip } from "./layout/TopStrip";
import { AllSections } from "./sections/AllSections";

export function LitepaperApp() {
  const [lang, setLangState] = useState<Lang>("en");
  const [activeId, setActiveId] = useState<SectionId>("cover");

  useEffect(() => {
    const stored = window.localStorage.getItem("fpv-lang");
    if (stored === "ko" || stored === "en") setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem("fpv-lang", lang);
  }, [lang]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id as SectionId);
        });
      },
      { threshold: 0, rootMargin: "-45% 0px -50% 0px" }
    );

    navItems.forEach((item) => {
      const node = document.getElementById(item.id);
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <TopStrip lang={lang} setLang={setLangState} />
      <Sidebar activeId={activeId} lang={lang} />
      <AllSections lang={lang} />
      <PageFooter lang={lang} />
    </>
  );
}
