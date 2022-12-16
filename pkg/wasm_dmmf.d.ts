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
