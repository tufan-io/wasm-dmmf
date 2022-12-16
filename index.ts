import * as wasm from "./pkg/wasm_dmmf";
import wasm_init from "./pkg/wasm_dmmf";
import type { InitInput, InitOutput, SyncInitInput } from "./pkg/wasm_dmmf";
import type { Diagnostics, Dmmf, PipelineResult } from "./types";

export default function init(module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput> {
  return wasm_init(module_or_path)
}

export function initSync(module: SyncInitInput): InitOutput {
  return wasm.initSync(module)
}

export function pipeline_1(schema: string, tabWidth: number): PipelineResult {
  return wasm.pipeline_1(schema, tabWidth);
}

export function pipeline_2(schema: string, tabWidth: number): PipelineResult {
  return wasm.pipeline_2(schema, tabWidth);
}

export function dmmf_1(schema: string): Dmmf {
  return wasm.dmmf_1(schema);
}

export function dmmf_2(schema: string): Dmmf {
  return wasm.dmmf_2(schema);
}

export function lint_1(schema: string): Diagnostics {
  return wasm.lint_1(schema);
}

export function lint_2(schema: string): Diagnostics {
  return wasm.lint_2(schema);
}

export function format_1(schema: string, tabWidth: number): string {
  return wasm.format_1(schema, tabWidth);
}

export function format_2(schema: string, tabWidth: number): string {
  return wasm.format_2(schema, tabWidth);
}
