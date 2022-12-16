use dmmf::DataModelMetaFormat;
use serde::Serialize;

use crate::prisma::{self, DatamodelError, DatamodelWarning};

#[derive(Serialize)]
pub struct PipelineResult {
    schema: String,
    dmmf: Option<DataModelMetaFormat>,
    errors: Vec<DatamodelError>,
    warnings: Vec<DatamodelWarning>,
}

pub fn nv(schema: String, tabwidth: usize) -> PipelineResult {
    let dignostics = prisma::lint(&schema);

    if !dignostics.errors.is_empty() {
        return PipelineResult {
            schema,
            dmmf: None,
            errors: dignostics.errors,
            warnings: dignostics.warnings,
        };
    }

    PipelineResult {
        schema: prisma::format(&schema, tabwidth),
        dmmf: Some(prisma::dmmf_from_schema(&schema)),
        errors: dignostics.errors,
        warnings: dignostics.warnings,
    }
}
