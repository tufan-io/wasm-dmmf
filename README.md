# wasm-dmmf

A simple hack to expose prisma's to_dmmf function to
node-land without needing to install binary dependencies.

# Usage

```
# set registry config
npm config set @tufan-io:registry https://npm.pkg.github.com/tufan-io

# install the package
npm i @tufan-io/wasm-dmmf
```

# API

Validates the input dml string to be a valid prisma model before
attempting the transformation.

The function returns a prisma DMMF document (a JSON structure).

```
/**
* @param {string} input
* @param {string} filename
* @returns {DMMF.Document}
*/
export function to_dmmf(input: string, filename: string): DMMF.Document;

```
