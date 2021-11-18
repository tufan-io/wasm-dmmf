# wasm-dmmf
A simple hack to expose prisma's to_dmmf function to 
node-land without needing to install binary dependencies.

# API
The function throws on error, with a prisma 
```
/**
* @param {string} input
* @param {string} filename
* @returns {string}
*/
export function to_dmmf(input: string, filename: string): string;

```