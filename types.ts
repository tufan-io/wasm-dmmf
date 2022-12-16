import type { DMMF } from "@prisma/generator-helper";
export type Dmmf = DMMF.Document;

export type Diagnostics = { errors: Array<Info>, warnings: Array<Info> }
export type Info = { span: Span, message: string }
export type Span = { start: number, end: number }
export type PipelineResult = {
  schema: string,
  dmmf: Dmmf | null,
  errors: Array<Info>,
  warnings: Array<Info>,
}
