const fs = require("fs");
const { to_dmmf } = require("./..");

const dml = fs.readFileSync("./test/fixtures/errors.prisma", "utf8");
const result = to_dmmf(dml, "errors.prisma");
console.log(result);
