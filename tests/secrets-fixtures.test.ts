import { describe, expect, it } from "vitest";
import { scanText } from "../src/scan.js";
import { secretPatternFixtures } from "./fixtures/secrets/patterns.js";

describe("secret-pattern positive and negative fixtures", () => {
  it("covers the 14 current provider/variant expressions with distinct cases", () => {
    expect(secretPatternFixtures).toHaveLength(14);
    expect(new Set(secretPatternFixtures.map(({ id }) => id)).size).toBe(14);
  });

  for (const { id, kind, positive, negative } of secretPatternFixtures) {
    it(`${id}: detects a synthetic secret but not a near-miss`, () => {
      const actual = scanText("fixture.txt", `prefix ${positive} suffix`);
      expect(actual.some((leak) => leak.kind === kind)).toBe(true);
      expect(actual.every((leak) => !JSON.stringify(leak).includes(positive))).toBe(true);
      const noMatch = scanText("fixture.txt", `prefix ${negative} suffix`);
      expect(noMatch.some((leak) => leak.kind === kind)).toBe(false);
    });
  }
});
