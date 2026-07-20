import { describe, expect, it } from "vitest";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

import { galleries, navItems, sections } from "../content/litepaper";
import { renderedSectionIds } from "../components/sections/AllSections";

describe("litepaper modernization boundaries", () => {
  it("keeps the original single-file html outside the modern app", () => {
    expect(existsSync(resolve(__dirname, "../../fp-validated-litepaper.html"))).toBe(true);
    expect(resolve(__dirname, "../../fp-validated-litepaper.html")).not.toContain("/modern/");
  });

  it("models every deployed litepaper section", () => {
    expect(sections).toHaveLength(13);
    expect(navItems.map((item) => item.id)).toEqual(sections.map((section) => section.id));
  });

  it("contains the deployed galleries", () => {
    expect(galleries.perf).toHaveLength(8);
    expect(galleries.guard).toHaveLength(2);
  });

  it("renders a section for each navigation target", () => {
    expect(renderedSectionIds).toEqual(navItems.map((item) => item.id));
  });
});
