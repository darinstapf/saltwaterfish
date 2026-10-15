import { describe, expect, it } from "vitest";
import { canonicalPath, canonicalUrl } from "./urls";

describe("canonical publication URLs", () => {
  it("uses a trailing slash for nested static routes", () => {
    expect(canonicalPath("/guides/equipment")).toBe("/guides/equipment/");
    expect(canonicalPath("/guides/equipment/")).toBe("/guides/equipment/");
    expect(
      canonicalPath("/articles/mixed-saltwater-blueprint?source=nav")
    ).toBe("/articles/mixed-saltwater-blueprint/?source=nav");
  });

  it("keeps the homepage and external URLs unchanged", () => {
    expect(canonicalPath("/")).toBe("/");
    expect(canonicalPath("https://example.com/guide")).toBe(
      "https://example.com/guide"
    );
  });

  it("builds the apex canonical URL", () => {
    expect(canonicalUrl("/guides/equipment")).toBe(
      "https://saltwaterfishpro.com/guides/equipment/"
    );
  });
});
