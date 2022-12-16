const fs = require("fs");
const { dmmf_1, dmmf_2 } = require("../pkg");

describe("dmmf", () => {
  const schema = fs.readFileSync("test/textures/gitlab.prisma", "utf-8");

  test("1", () => {
    const now = performance.now();
    dmmf_1(schema);
    console.log(1, performance.now() - now);
  });

  test("2", () => {
    const now = performance.now();
    dmmf_2(schema);
    console.log(2, performance.now() - now);
  });
});