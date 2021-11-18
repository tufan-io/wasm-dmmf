const fs = require("fs");
const { to_dmmf } = require("..");

describe("to_dmmf", () => {
  it("success", () => {
    const dml = fs.readFileSync("./test/fixtures/schema.prisma", "utf8");
    const result = to_dmmf(dml, "success.prisma");
    expect(result).toMatchInlineSnapshot(`
Object {
  "enums": Array [],
  "models": Array [
    Object {
      "dbName": null,
      "fields": Array [
        Object {
          "default": Object {
            "args": Array [],
            "name": "autoincrement",
          },
          "hasDefaultValue": true,
          "isGenerated": false,
          "isId": true,
          "isList": false,
          "isReadOnly": false,
          "isRequired": true,
          "isUnique": false,
          "isUpdatedAt": false,
          "kind": "scalar",
          "name": "id",
          "type": "Int",
        },
        Object {
          "hasDefaultValue": false,
          "isGenerated": false,
          "isId": false,
          "isList": true,
          "isReadOnly": false,
          "isRequired": true,
          "isUnique": false,
          "isUpdatedAt": false,
          "kind": "object",
          "name": "posts",
          "relationFromFields": Array [],
          "relationName": "PostToUser",
          "relationToFields": Array [],
          "type": "Post",
        },
      ],
      "isGenerated": false,
      "name": "User",
      "primaryKey": null,
      "uniqueFields": Array [],
      "uniqueIndexes": Array [],
    },
    Object {
      "dbName": null,
      "fields": Array [
        Object {
          "default": Object {
            "args": Array [],
            "name": "autoincrement",
          },
          "hasDefaultValue": true,
          "isGenerated": false,
          "isId": true,
          "isList": false,
          "isReadOnly": false,
          "isRequired": true,
          "isUnique": false,
          "isUpdatedAt": false,
          "kind": "scalar",
          "name": "id",
          "type": "Int",
        },
        Object {
          "hasDefaultValue": false,
          "isGenerated": false,
          "isId": false,
          "isList": false,
          "isReadOnly": false,
          "isRequired": true,
          "isUnique": false,
          "isUpdatedAt": false,
          "kind": "object",
          "name": "author",
          "relationFromFields": Array [
            "authorId",
          ],
          "relationName": "PostToUser",
          "relationToFields": Array [
            "id",
          ],
          "type": "User",
        },
        Object {
          "hasDefaultValue": false,
          "isGenerated": false,
          "isId": false,
          "isList": false,
          "isReadOnly": true,
          "isRequired": true,
          "isUnique": false,
          "isUpdatedAt": false,
          "kind": "scalar",
          "name": "authorId",
          "type": "Int",
        },
      ],
      "isGenerated": false,
      "name": "Post",
      "primaryKey": null,
      "uniqueFields": Array [],
      "uniqueIndexes": Array [],
    },
  ],
}
`);
  });

  it("error", () => {
    const dml = fs.readFileSync("./test/fixtures/errors.prisma", "utf8");
    expect(() => {
      to_dmmf(dml, "errors.prisma");
    }).toThrowErrorMatchingInlineSnapshot(`
"error: Type \\"Posted\\" is neither a built-in type, nor refers to another model, custom type, or enum.
  -->  errors.prisma:8
   | 
 7 |   id    Int    @id @default(autoincrement())
 8 |   posts Posted[]
   | 
error: Error validating: You defined the enum \`Status\`. But the current connector does not support enums.
  -->  errors.prisma:17
   | 
16 | 
17 | enum Status {
18 |   ACTIVE
19 |   INACTIVE
20 | }
   | 
"
`);
  });
});
