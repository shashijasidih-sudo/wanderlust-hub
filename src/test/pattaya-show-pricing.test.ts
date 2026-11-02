/// <reference types="node" />
// Rate rules for Pattaya adult shows: pricing values only, not copy or presentation.
import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const src = readFileSync(`${process.cwd()}/src/data/tourData.ts`, "utf8");
const record = (id: string) => {
  const start = src.indexOf(`"${id}": {`);
  const end = src.indexOf('\n  "', start + 1);
  return src.slice(start, end === -1 ? undefined : end);
};

describe("89 Show Pattaya nationality rates", () => {
  const show = record("show-89-pattaya");

  it("offers ₹4,500 per adult for Indian, Bangladesh, Sri Lanka and Pakistan nationals", () => {
    expect(show).toContain(
      '{ label: "Indian / Bangladesh / Sri Lanka / Pakistan Nationals", adultPrice: 4500 }',
    );
  });

  it("keeps ₹6,000 per adult for other nationalities", () => {
    expect(show).toContain('{ label: "Other Nationalities", adultPrice: 6000 }');
  });

  it("hides the child selector on this adult-only show", () => {
    expect(show).toContain("hideChildren: true");
  });
});
