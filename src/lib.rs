use gloo_utils::format::JsValueSerdeExt;
use wasm_bindgen::prelude::*;

mod pipeline;
mod prisma;

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn pipeline_1(schema: String, tabwidth: usize) -> JsValue {
    let result = pipeline::nv(schema, tabwidth);

    JsValue::from_serde(&result).unwrap()
}

#[wasm_bindgen]
pub fn dmmf_1(schema: &str) -> JsValue {
    let dmmf = prisma::dmmf_from_schema(schema);

    JsValue::from_serde(&dmmf).unwrap()
}

#[wasm_bindgen]
pub fn format_1(schema: &str, tabwidth: usize) -> JsValue {
    let formatted = prisma::format(schema, tabwidth);

    JsValue::from_serde(&formatted).unwrap()
}

#[wasm_bindgen]
pub fn lint_1(schema: &str) -> JsValue {
    let dignostics = prisma::lint(schema);

    JsValue::from_serde(&dignostics).unwrap()
}

#[wasm_bindgen]
pub fn pipeline_2(schema: String, tabwidth: usize) -> JsValue {
    let result = pipeline::nv(schema, tabwidth);

    serde_wasm_bindgen::to_value(&result).unwrap()
}

#[wasm_bindgen]
pub fn dmmf_2(schema: &str) -> JsValue {
    let dmmf = dmmf::dmmf_from_schema(schema);

    serde_wasm_bindgen::to_value(&dmmf).unwrap()
}

#[wasm_bindgen]
pub fn format_2(schema: &str, tabwidth: usize) -> JsValue {
    let formatted = prisma::format(schema, tabwidth);

    serde_wasm_bindgen::to_value(&formatted).unwrap()
}

#[wasm_bindgen]
pub fn lint_2(schema: &str) -> JsValue {
    let dignostics = prisma::lint(schema);

    serde_wasm_bindgen::to_value(&dignostics).unwrap()
}
