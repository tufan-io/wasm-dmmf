const { getDMMF } = require("./..");
const dmmf = getDMMF("./test/fixtures/errors.prisma");
console.log(dmmf);
