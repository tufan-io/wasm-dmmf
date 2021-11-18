use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn to_dmmf(input: String, filename: String) -> String {
    let validated = datamodel::parse_datamodel_or_pretty_error(&input, &filename);

    match &validated {
        Err(formatted) => {
            return formatted.to_owned();
        }
        Ok(dml) => {
            return datamodel::json::dmmf::render_to_dmmf(&dml.subject);
        }
    }
}
