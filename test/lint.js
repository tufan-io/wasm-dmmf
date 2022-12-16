const fs = require("fs");
const { lint_1, lint_2 } = require("../pkg");

describe("lint", () => {
  const valid = fs.readFileSync("test/textures/valid.prisma", "utf-8");
  const invalid = fs.readFileSync("test/textures/invalid.prisma", "utf-8");

  test("valid", () => {
    const result1 = lint_1(valid);
    expect(result1).toMatchInlineSnapshot(`
{
  "errors": [],
  "warnings": [],
}
`);

    const result2 = lint_2(valid);
    expect(result2).toMatchInlineSnapshot(`
{
  "errors": [],
  "warnings": [],
}
`);
  })

  test("invalid", () => {
    const result1 = lint_1(invalid);
    expect(result1).toMatchInlineSnapshot(`
{
  "errors": [
    {
      "message": "Type "Posted" is neither a built-in type, nor refers to another model, custom type, or enum.",
      "span": {
        "end": 142,
        "start": 136,
      },
    },
  ],
  "warnings": [],
}
`);

    const result2 = lint_2(invalid);
    expect(result2).toMatchInlineSnapshot(`
{
  "errors": [
    {
      "message": "Type "Posted" is neither a built-in type, nor refers to another model, custom type, or enum.",
      "span": {
        "end": 142,
        "start": 136,
      },
    },
  ],
  "warnings": [],
}
`);
  })
});