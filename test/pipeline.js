const fs = require("fs");
const { pipeline_1, pipeline_2, format_1, format_2, lint_1, lint_2 } = require("../pkg");

describe("pipeline", () => {
  const valid = fs.readFileSync("test/textures/valid.prisma", "utf-8");
  const invalid = fs.readFileSync("test/textures/invalid.prisma", "utf-8");

  test("valid", () => {
    const result1 = pipeline_1(valid);
    expect(result1.schema).toBe(format_1(valid))
    expect(result1.schema).toBe(format_2(valid))
    expect(typeof result1.dmmf).toMatchInlineSnapshot(`"object"`)
    expect(result1.errors).toEqual(lint_1(valid).errors)
    expect(result1.warnings).toEqual(lint_2(valid).warnings)
    expect(result1.errors).toEqual(lint_1(valid).errors)
    expect(result1.warnings).toEqual(lint_2(valid).warnings)

    const result2 = pipeline_2(valid);
    expect(result2.schema).toBe(format_1(valid))
    expect(result2.schema).toBe(format_2(valid))
    expect(typeof result2.dmmf).toMatchInlineSnapshot(`"object"`)
    expect(result2.errors).toEqual(lint_1(valid).errors)
    expect(result2.warnings).toEqual(lint_2(valid).warnings)
    expect(result2.errors).toEqual(lint_1(valid).errors)
    expect(result2.warnings).toEqual(lint_2(valid).warnings)
  });

  test("invalid", () => {
    const result1 = pipeline_1(invalid);
    expect(result1.schema).toBe(invalid)
    expect(result1.dmmf).toBeNull();
    expect(result1.errors).toEqual(lint_1(invalid).errors)
    expect(result1.warnings).toEqual(lint_2(invalid).warnings)
    expect(result1.errors).toEqual(lint_1(invalid).errors)
    expect(result1.warnings).toEqual(lint_2(invalid).warnings)

    const result2 = pipeline_2(invalid);
    expect(result2.schema).toBe(invalid)
    expect(result2.dmmf).toBeUndefined();
    expect(result2.errors).toEqual(lint_1(invalid).errors)
    expect(result2.warnings).toEqual(lint_2(invalid).warnings)
    expect(result2.errors).toEqual(lint_1(invalid).errors)
    expect(result2.warnings).toEqual(lint_2(invalid).warnings)
  });
});