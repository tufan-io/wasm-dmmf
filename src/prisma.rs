use serde::Serialize;

#[derive(Serialize)]
struct Span {
    start: usize,
    end: usize,
}

#[derive(Serialize)]
pub struct DatamodelError {
    span: Span,
    message: String,
}

#[derive(Serialize)]
pub struct DatamodelWarning {
    span: Span,
    message: String,
}

#[derive(Serialize)]
pub struct Dignostics {
    pub errors: Vec<DatamodelError>,
    pub warnings: Vec<DatamodelWarning>,
}

pub fn lint(schema: &str) -> Dignostics {
    let source = psl::SourceFile::from(schema);
    let result = psl::validate(source);

    Dignostics {
        errors: result
            .diagnostics
            .errors()
            .iter()
            .cloned()
            .map(|error| {
                let span = Span {
                    start: error.span().start,
                    end: error.span().end,
                };
                let message = error.message().to_owned();

                DatamodelError { span, message }
            })
            .collect(),
        warnings: result
            .diagnostics
            .warnings()
            .iter()
            .cloned()
            .map(|warning| {
                let span = Span {
                    start: warning.span().start,
                    end: warning.span().end,
                };
                let message = warning.message().to_owned();

                DatamodelWarning { span, message }
            })
            .collect(),
    }
}

pub fn format(schema: &str, tabwidth: usize) -> String {
    psl::reformat(schema, tabwidth).unwrap_or_else(|| schema.to_string())
}

pub fn dmmf_from_schema(schema: &str) -> dmmf::DataModelMetaFormat {
    dmmf::dmmf_from_schema(schema)
}
