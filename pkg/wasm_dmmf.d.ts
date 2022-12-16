/* tslint:disable */
/* eslint-disable */
/**
* @param {string} schema
* @param {number} tabwidth
* @returns {any}
*/
export function pipeline_1(schema: string, tabwidth: number): any;
/**
* @param {string} schema
* @returns {any}
*/
export function dmmf_1(schema: string): any;
/**
* @param {string} schema
* @param {number} tabwidth
* @returns {any}
*/
export function format_1(schema: string, tabwidth: number): any;
/**
* @param {string} schema
* @returns {any}
*/
export function lint_1(schema: string): any;
/**
* @param {string} schema
* @param {number} tabwidth
* @returns {any}
*/
export function pipeline_2(schema: string, tabwidth: number): any;
/**
* @param {string} schema
* @returns {any}
*/
export function dmmf_2(schema: string): any;
/**
* @param {string} schema
* @param {number} tabwidth
* @returns {any}
*/
export function format_2(schema: string, tabwidth: number): any;
/**
* @param {string} schema
* @returns {any}
*/
export function lint_2(schema: string): any;
/**
* A version of `JdbcString` to be used from web-assembly.
*/
export class AdoNetString {
  free(): void;
/**
* A constructor to create a new `AdoNet`, used from JavaScript with
* `new AdoNet("server=tcp:localhost,1433")`.
* @param {string} s
*/
  constructor(s: string);
/**
* Get a parameter from the connection's key-value pairs
* @param {string} key
* @returns {string | undefined}
*/
  get(key: string): string | undefined;
/**
* Set a parameter value to the connection's key-value pairs. If replacing
* a pre-existing value, returns the old value.
* @param {string} key
* @param {string} value
* @returns {string | undefined}
*/
  set(key: string, value: string): string | undefined;
/**
* Get a string representation of the `AdoNetString`.
* @returns {string}
*/
  to_string(): string;
}
/**
* A version of `JdbcString` to be used from web-assembly.
*/
export class JdbcString {
  free(): void;
/**
* A constructor to create a new `JdbcInstance`, used from JavaScript with
* `new JdbcString("sqlserver://...")`.
* @param {string} s
*/
  constructor(s: string);
/**
* Access the connection sub-protocol
* @returns {string}
*/
  sub_protocol(): string;
/**
* Access the connection server name
* @returns {string | undefined}
*/
  server_name(): string | undefined;
/**
* Access the connection's instance name
* @returns {string | undefined}
*/
  instance_name(): string | undefined;
/**
* Access the connection's port
* @returns {number | undefined}
*/
  port(): number | undefined;
/**
* Get a parameter from the connection's key-value pairs
* @param {string} key
* @returns {string | undefined}
*/
  get(key: string): string | undefined;
/**
* Set a parameter value to the connection's key-value pairs. If replacing
* a pre-existing value, returns the old value.
* @param {string} key
* @param {string} value
* @returns {string | undefined}
*/
  set(key: string, value: string): string | undefined;
/**
* Get a string representation of the `JdbcString`.
* @returns {string}
*/
  to_string(): string;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_jdbcstring_free: (a: number) => void;
  readonly jdbcstring_new: (a: number, b: number, c: number) => void;
  readonly jdbcstring_sub_protocol: (a: number, b: number) => void;
  readonly jdbcstring_server_name: (a: number, b: number) => void;
  readonly jdbcstring_instance_name: (a: number, b: number) => void;
  readonly jdbcstring_port: (a: number) => number;
  readonly jdbcstring_get: (a: number, b: number, c: number, d: number) => void;
  readonly jdbcstring_set: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly jdbcstring_to_string: (a: number, b: number) => void;
  readonly __wbg_adonetstring_free: (a: number) => void;
  readonly adonetstring_new: (a: number, b: number, c: number) => void;
  readonly adonetstring_get: (a: number, b: number, c: number, d: number) => void;
  readonly adonetstring_set: (a: number, b: number, c: number, d: number, e: number, f: number) => void;
  readonly adonetstring_to_string: (a: number, b: number) => void;
  readonly pipeline_1: (a: number, b: number, c: number) => number;
  readonly dmmf_1: (a: number, b: number) => number;
  readonly format_1: (a: number, b: number, c: number) => number;
  readonly lint_1: (a: number, b: number) => number;
  readonly pipeline_2: (a: number, b: number, c: number) => number;
  readonly dmmf_2: (a: number, b: number) => number;
  readonly format_2: (a: number, b: number, c: number) => number;
  readonly lint_2: (a: number, b: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
