const fs = require("fs");
const { to_dmmf } = require("../index");

const dml = fs.readFileSync("./test/fixtures/schema.prisma", "utf8");
const dmmf = to_dmmf(dml, "success.prisma");
console.log(dmmf);
