# prisma-wasm

`noun-and-verb` needs to load prisma's DML into a DMMF format for it to work.
To be able to package `noun-and-verb` as a binary, we need to either:
1. package an individual rust binary per platform
2. extract the rust transformer to wasm and invoke it from js-land. 


#2 is particularly attractive, since it'll enable using rollup.js to
bindle the full `noun-and-verb` application as a single file. 
This can then be packaged via `deno` or `pkg` into an npm module, both
of which are really attractive options.


Tasks required to do this:
1. create a wasm module of [`dml-to-dmmf`](https://github.com/prisma/prisma-engines/blob/9b816b3aa13cc270074f172f30d6eda8a8ce867d/libs/datamodel/core/examples/dml-to-dmmf.rs)
2. wrap this as an npm module. 


WASM will not allow access to the file-system. So we'll have to read the 
file in node-land, and pass the string over via the FFI call.

Also, in the normal flow, `noun-and-verb` would be invoked as a prisma 
generator. This means, the dml schema is validated before being invoked. 
However, we are also writing a lot of tests to ensure this puppy works as
advertised. For this, we choose to re-validate the schema before the transformation.

https://github.com/prisma/prisma-engines/blob/9b816b3aa13cc270074f172f30d6eda8a8ce867d/libs/datamodel/core/examples/dml-to-dmmf.rs

https://github.com/prisma/prisma-engines/blob/606da9acf177a5d85917019e721a477d5e3f6a1a/libs/datamodel/core/src/lib.rs#L123


https://developer.mozilla.org/en-US/docs/WebAssembly/Rust_to_wasm
