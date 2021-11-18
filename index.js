const { file } = require("@babel/types");
const DMMF = require("./pkg/wasm_dmmf");

exports.to_dmmf = (dml, fileName) => {
  if (!dml || !fileName) {
    throw new Error(`to_dmml expects two string arguments - dml & filename`);
  }
  const result = DMMF.to_dmmf(dml, fileName);
  try {
    const dmml = JSON.parse(result);
    return dmml;
  } catch (err) {
    throw new Error(result);
  }
};
