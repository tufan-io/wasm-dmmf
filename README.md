# wasm-dmmf

# Usage

```
# set registry config
npm config set @tufan-io:registry https://npm.pkg.github.com/tufan-io

# install the package
npm i @tufan-io/wasm-dmmf
```

# Development

## Build
```
npm run build
```

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
