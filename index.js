const fs = require("fs");
const path = require("path");
const DMMF = require("./pkg/wasm_dmmf");

exports.getDMMF = (fileName) => {
  const dml = fs.readFileSync(fileName, "utf8");
  if (!dml || !fileName) {
    throw new Error(`to_dmml expects two string arguments - dml & filename`);
  }
  fileName = path.relative(process.cwd(), fileName);
  const result = DMMF.to_dmmf(dml, fileName);
  try {
    const dmml = JSON.parse(result);
    return dmml;
  } catch (err) {
    throw new Error(result);
  }
};
