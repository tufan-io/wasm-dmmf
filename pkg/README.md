# wasm-dmmf


## Install

```
# set registry config
npm config set @tufan-io:registry https://npm.pkg.github.com/tufan-io

# install the package
npm i @tufan-io/wasm-dmmf
```

## Usage

### _1 and _2
We have `${something}_1` and `${something}_2`.
- `_1` use [JsValue::from_serde](https://rustwasm.github.io/wasm-bindgen/reference/arbitrary-data-with-serde.html#an-alternative-approach---using-json)
- `_2` use [serde_wasm_bindgen::to_value](https://rustwasm.github.io/wasm-bindgen/reference/arbitrary-data-with-serde.html#send-it-to-javascript-with-serde_wasm_bindgento_value).

# Development

## Build
```
npm run build
```

## Test
```
npm run test
```
Since `wasm-dmmf` is intended to used in browser, it is hard to test here.
So `npm run test` will build it for `node` and test it.

## Prisma Engine Version
1. Cargo.toml
```
dmmf = { git = "https://github.com/prisma/prisma-engines/", tag = "4.5.0" }
psl = { git = "https://github.com/prisma/prisma-engines/", tag = "4.5.0" }
```

2. Package.json
```
"version": "4.5.0",
"dependencies": {
  "@prisma/generator-helper": "^4.5.0"
}
```
