const fs = require("fs");
const { dmmf_1, dmmf_2 } = require("../pkg");

describe("dmmf", () => {
  const schema = fs.readFileSync("test/textures/valid.prisma", "utf-8");

  test("dmmf_1 and dmmf2 are almost same, but not equal due to way they passed to js land", () => {
    // For example, undefined and null.
    expect(dmmf_1(schema)).not.toEqual(dmmf_2(schema));
  });
  
  test("dmmf_1", () => {
    expect(dmmf_1(schema)).toMatchInlineSnapshot(`
{
  "datamodel": {
    "enums": [],
    "models": [
      {
        "dbName": null,
        "fields": [
          {
            "default": {
              "args": [],
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
          {
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
            "relationFromFields": [],
            "relationName": "PostToUser",
            "relationToFields": [],
            "type": "Post",
          },
        ],
        "isGenerated": false,
        "name": "User",
        "primaryKey": null,
        "uniqueFields": [],
        "uniqueIndexes": [],
      },
      {
        "dbName": null,
        "fields": [
          {
            "default": {
              "args": [],
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
          {
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
            "relationFromFields": [
              "authorId",
            ],
            "relationName": "PostToUser",
            "relationToFields": [
              "id",
            ],
            "type": "User",
          },
          {
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
        "uniqueFields": [],
        "uniqueIndexes": [],
      },
    ],
    "types": [],
  },
  "mappings": {
    "modelOperations": [
      {
        "aggregate": "aggregateUser",
        "createMany": "createManyUser",
        "createOne": "createOneUser",
        "deleteMany": "deleteManyUser",
        "deleteOne": "deleteOneUser",
        "findFirst": "findFirstUser",
        "findMany": "findManyUser",
        "findUnique": "findUniqueUser",
        "groupBy": "groupByUser",
        "model": "User",
        "updateMany": "updateManyUser",
        "updateOne": "updateOneUser",
        "upsertOne": "upsertOneUser",
      },
      {
        "aggregate": "aggregatePost",
        "createMany": "createManyPost",
        "createOne": "createOnePost",
        "deleteMany": "deleteManyPost",
        "deleteOne": "deleteOnePost",
        "findFirst": "findFirstPost",
        "findMany": "findManyPost",
        "findUnique": "findUniquePost",
        "groupBy": "groupByPost",
        "model": "Post",
        "updateMany": "updateManyPost",
        "updateOne": "updateOnePost",
        "upsertOne": "upsertOnePost",
      },
    ],
    "otherOperations": {
      "read": [],
      "write": [
        "executeRaw",
        "queryRaw",
      ],
    },
  },
  "schema": {
    "enumTypes": {
      "prisma": [
        {
          "name": "PostScalarFieldEnum",
          "values": [
            "id",
            "authorId",
          ],
        },
        {
          "name": "SortOrder",
          "values": [
            "asc",
            "desc",
          ],
        },
        {
          "name": "TransactionIsolationLevel",
          "values": [
            "ReadUncommitted",
            "ReadCommitted",
            "RepeatableRead",
            "Serializable",
          ],
        },
        {
          "name": "UserScalarFieldEnum",
          "values": [
            "id",
          ],
        },
      ],
    },
    "fieldRefTypes": {},
    "inputObjectTypes": {
      "prisma": [
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserWhereInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "AND",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "OR",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserWhereInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "NOT",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFilter",
                },
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostListRelationFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "posts",
            },
          ],
          "meta": {
            "source": "User",
          },
          "name": "UserWhereInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 0,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostOrderByRelationAggregateInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "posts",
            },
          ],
          "name": "UserOrderByWithRelationInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "UserWhereUniqueInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 0,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserCountOrderByAggregateInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_count",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserAvgOrderByAggregateInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_avg",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserMaxOrderByAggregateInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_max",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserMinOrderByAggregateInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_min",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserSumOrderByAggregateInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_sum",
            },
          ],
          "name": "UserOrderByWithAggregationInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserScalarWhereWithAggregatesInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserScalarWhereWithAggregatesInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "AND",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserScalarWhereWithAggregatesInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "OR",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserScalarWhereWithAggregatesInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserScalarWhereWithAggregatesInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "NOT",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntWithAggregatesFilter",
                },
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "meta": {
            "source": "User",
          },
          "name": "UserScalarWhereWithAggregatesInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "AND",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "OR",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "NOT",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFilter",
                },
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserRelationFilter",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "author",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFilter",
                },
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "authorId",
            },
          ],
          "meta": {
            "source": "Post",
          },
          "name": "PostWhereInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 0,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserOrderByWithRelationInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "author",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "authorId",
            },
          ],
          "name": "PostOrderByWithRelationInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "PostWhereUniqueInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 0,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "authorId",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCountOrderByAggregateInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_count",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostAvgOrderByAggregateInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_avg",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostMaxOrderByAggregateInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_max",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostMinOrderByAggregateInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_min",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostSumOrderByAggregateInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_sum",
            },
          ],
          "name": "PostOrderByWithAggregationInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereWithAggregatesInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereWithAggregatesInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "AND",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereWithAggregatesInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "OR",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereWithAggregatesInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereWithAggregatesInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "NOT",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntWithAggregatesFilter",
                },
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntWithAggregatesFilter",
                },
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "authorId",
            },
          ],
          "meta": {
            "source": "Post",
          },
          "name": "PostScalarWhereWithAggregatesInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateNestedManyWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "posts",
            },
          ],
          "name": "UserCreateInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedCreateNestedManyWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "posts",
            },
          ],
          "name": "UserUncheckedCreateInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpdateManyWithoutAuthorNestedInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "posts",
            },
          ],
          "name": "UserUpdateInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFieldUpdateOperationsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedUpdateManyWithoutAuthorNestedInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "posts",
            },
          ],
          "name": "UserUncheckedUpdateInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "UserCreateManyInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [],
          "name": "UserUpdateManyMutationInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFieldUpdateOperationsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "UserUncheckedUpdateManyInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserCreateNestedOneWithoutPostsInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "author",
            },
          ],
          "name": "PostCreateInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "authorId",
            },
          ],
          "name": "PostUncheckedCreateInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserUpdateOneRequiredWithoutPostsNestedInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "author",
            },
          ],
          "name": "PostUpdateInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFieldUpdateOperationsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFieldUpdateOperationsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "authorId",
            },
          ],
          "name": "PostUncheckedUpdateInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "authorId",
            },
          ],
          "name": "PostCreateManyInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [],
          "name": "PostUpdateManyMutationInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFieldUpdateOperationsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFieldUpdateOperationsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "authorId",
            },
          ],
          "name": "PostUncheckedUpdateManyInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "equals",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "in",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "notIn",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "lt",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "lte",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "gt",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "gte",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedIntFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "not",
            },
          ],
          "name": "IntFilter",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "every",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "some",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "none",
            },
          ],
          "name": "PostListRelationFilter",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_count",
            },
          ],
          "name": "PostOrderByRelationAggregateInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "UserCountOrderByAggregateInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "UserAvgOrderByAggregateInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "UserMaxOrderByAggregateInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "UserMinOrderByAggregateInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "UserSumOrderByAggregateInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "equals",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "in",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "notIn",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "lt",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "lte",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "gt",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "gte",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedIntWithAggregatesFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "not",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedIntFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_count",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedFloatFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_avg",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedIntFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_sum",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedIntFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_min",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedIntFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_max",
            },
          ],
          "name": "IntWithAggregatesFilter",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "is",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "isNot",
            },
          ],
          "name": "UserRelationFilter",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "authorId",
            },
          ],
          "name": "PostCountOrderByAggregateInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "authorId",
            },
          ],
          "name": "PostAvgOrderByAggregateInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "authorId",
            },
          ],
          "name": "PostMaxOrderByAggregateInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "authorId",
            },
          ],
          "name": "PostMinOrderByAggregateInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "authorId",
            },
          ],
          "name": "PostSumOrderByAggregateInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateWithoutAuthorInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "create",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateOrConnectWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateOrConnectWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "connectOrCreate",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateManyAuthorInputEnvelope",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "createMany",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "connect",
            },
          ],
          "name": "PostCreateNestedManyWithoutAuthorInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateWithoutAuthorInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "create",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateOrConnectWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateOrConnectWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "connectOrCreate",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateManyAuthorInputEnvelope",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "createMany",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "connect",
            },
          ],
          "name": "PostUncheckedCreateNestedManyWithoutAuthorInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateWithoutAuthorInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "create",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateOrConnectWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateOrConnectWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "connectOrCreate",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpsertWithWhereUniqueWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpsertWithWhereUniqueWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "upsert",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateManyAuthorInputEnvelope",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "createMany",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "set",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "disconnect",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "delete",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "connect",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpdateWithWhereUniqueWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpdateWithWhereUniqueWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "update",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpdateManyWithWhereWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpdateManyWithWhereWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "updateMany",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "deleteMany",
            },
          ],
          "name": "PostUpdateManyWithoutAuthorNestedInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "set",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "increment",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "decrement",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "multiply",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "divide",
            },
          ],
          "name": "IntFieldUpdateOperationsInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateWithoutAuthorInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "create",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateOrConnectWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateOrConnectWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "connectOrCreate",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpsertWithWhereUniqueWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpsertWithWhereUniqueWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "upsert",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateManyAuthorInputEnvelope",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "createMany",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "set",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "disconnect",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "delete",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "connect",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpdateWithWhereUniqueWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpdateWithWhereUniqueWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "update",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpdateManyWithWhereWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpdateManyWithWhereWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "updateMany",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "deleteMany",
            },
          ],
          "name": "PostUncheckedUpdateManyWithoutAuthorNestedInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserCreateWithoutPostsInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserUncheckedCreateWithoutPostsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "create",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserCreateOrConnectWithoutPostsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "connectOrCreate",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "connect",
            },
          ],
          "name": "UserCreateNestedOneWithoutPostsInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserCreateWithoutPostsInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserUncheckedCreateWithoutPostsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "create",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserCreateOrConnectWithoutPostsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "connectOrCreate",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserUpsertWithoutPostsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "upsert",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "connect",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserUpdateWithoutPostsInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserUncheckedUpdateWithoutPostsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "update",
            },
          ],
          "name": "UserUpdateOneRequiredWithoutPostsNestedInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "equals",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "in",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "notIn",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "lt",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "lte",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "gt",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "gte",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedIntFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "not",
            },
          ],
          "name": "NestedIntFilter",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "equals",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "in",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "notIn",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "lt",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "lte",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "gt",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "gte",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedIntWithAggregatesFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "not",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedIntFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_count",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedFloatFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_avg",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedIntFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_sum",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedIntFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_min",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedIntFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_max",
            },
          ],
          "name": "NestedIntWithAggregatesFilter",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Float",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "equals",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "scalar",
                  "type": "Float",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "in",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "scalar",
                  "type": "Float",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "notIn",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Float",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "lt",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Float",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "lte",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Float",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "gt",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Float",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "gte",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Float",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedFloatFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "not",
            },
          ],
          "name": "NestedFloatFilter",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [],
          "name": "PostCreateWithoutAuthorInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "PostUncheckedCreateWithoutAuthorInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "where",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateWithoutAuthorInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "create",
            },
          ],
          "name": "PostCreateOrConnectWithoutAuthorInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateManyAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "data",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Boolean",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "skipDuplicates",
            },
          ],
          "name": "PostCreateManyAuthorInputEnvelope",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "where",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpdateWithoutAuthorInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedUpdateWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "update",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateWithoutAuthorInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "create",
            },
          ],
          "name": "PostUpsertWithWhereUniqueWithoutAuthorInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "where",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpdateWithoutAuthorInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedUpdateWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "data",
            },
          ],
          "name": "PostUpdateWithWhereUniqueWithoutAuthorInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "where",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpdateManyMutationInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedUpdateManyWithoutPostsInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "data",
            },
          ],
          "name": "PostUpdateManyWithWhereWithoutAuthorInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "AND",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "OR",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "NOT",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFilter",
                },
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFilter",
                },
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "authorId",
            },
          ],
          "meta": {
            "source": "Post",
          },
          "name": "PostScalarWhereInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [],
          "name": "UserCreateWithoutPostsInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "UserUncheckedCreateWithoutPostsInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "where",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserCreateWithoutPostsInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserUncheckedCreateWithoutPostsInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "create",
            },
          ],
          "name": "UserCreateOrConnectWithoutPostsInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserUpdateWithoutPostsInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserUncheckedUpdateWithoutPostsInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "update",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserCreateWithoutPostsInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserUncheckedCreateWithoutPostsInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "create",
            },
          ],
          "name": "UserUpsertWithoutPostsInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [],
          "name": "UserUpdateWithoutPostsInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFieldUpdateOperationsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "UserUncheckedUpdateWithoutPostsInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "PostCreateManyAuthorInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [],
          "name": "PostUpdateWithoutAuthorInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFieldUpdateOperationsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "PostUncheckedUpdateWithoutAuthorInput",
        },
        {
          "constraints": {
            "maxNumFields": null,
            "minNumFields": null,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFieldUpdateOperationsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "PostUncheckedUpdateManyWithoutPostsInput",
        },
      ],
    },
    "outputObjectTypes": {
      "model": [
        {
          "fields": [
            {
              "args": [],
              "isNullable": false,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostOrderByWithRelationInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostOrderByWithRelationInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "orderBy",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "cursor",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "take",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "skip",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "enumTypes",
                      "namespace": "prisma",
                      "type": "PostScalarFieldEnum",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "distinct",
                },
              ],
              "isNullable": true,
              "name": "posts",
              "outputType": {
                "isList": true,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "Post",
              },
            },
            {
              "args": [],
              "isNullable": false,
              "name": "_count",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "UserCountOutputType",
              },
            },
          ],
          "name": "User",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": false,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
            {
              "args": [],
              "isNullable": false,
              "name": "author",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "User",
              },
            },
            {
              "args": [],
              "isNullable": false,
              "name": "authorId",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
          ],
          "name": "Post",
        },
      ],
      "prisma": [
        {
          "fields": [
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserOrderByWithRelationInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserOrderByWithRelationInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "orderBy",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "cursor",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "take",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "skip",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "enumTypes",
                      "namespace": "prisma",
                      "type": "UserScalarFieldEnum",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "distinct",
                },
              ],
              "isNullable": true,
              "name": "findFirstUser",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "User",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserOrderByWithRelationInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserOrderByWithRelationInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "orderBy",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "cursor",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "take",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "skip",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "enumTypes",
                      "namespace": "prisma",
                      "type": "UserScalarFieldEnum",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "distinct",
                },
              ],
              "isNullable": false,
              "name": "findManyUser",
              "outputType": {
                "isList": true,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "User",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserOrderByWithRelationInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserOrderByWithRelationInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "orderBy",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "cursor",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "take",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "skip",
                },
              ],
              "isNullable": false,
              "name": "aggregateUser",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "AggregateUser",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserOrderByWithAggregationInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserOrderByWithAggregationInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "orderBy",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "enumTypes",
                      "namespace": "prisma",
                      "type": "UserScalarFieldEnum",
                    },
                    {
                      "isList": false,
                      "location": "enumTypes",
                      "namespace": "prisma",
                      "type": "UserScalarFieldEnum",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "by",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserScalarWhereWithAggregatesInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "having",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "take",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "skip",
                },
              ],
              "isNullable": false,
              "name": "groupByUser",
              "outputType": {
                "isList": true,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "UserGroupByOutputType",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "where",
                },
              ],
              "isNullable": true,
              "name": "findUniqueUser",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "User",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostOrderByWithRelationInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostOrderByWithRelationInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "orderBy",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "cursor",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "take",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "skip",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "enumTypes",
                      "namespace": "prisma",
                      "type": "PostScalarFieldEnum",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "distinct",
                },
              ],
              "isNullable": true,
              "name": "findFirstPost",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "Post",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostOrderByWithRelationInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostOrderByWithRelationInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "orderBy",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "cursor",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "take",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "skip",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "enumTypes",
                      "namespace": "prisma",
                      "type": "PostScalarFieldEnum",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "distinct",
                },
              ],
              "isNullable": false,
              "name": "findManyPost",
              "outputType": {
                "isList": true,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "Post",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostOrderByWithRelationInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostOrderByWithRelationInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "orderBy",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "cursor",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "take",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "skip",
                },
              ],
              "isNullable": false,
              "name": "aggregatePost",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "AggregatePost",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostOrderByWithAggregationInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostOrderByWithAggregationInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "orderBy",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "enumTypes",
                      "namespace": "prisma",
                      "type": "PostScalarFieldEnum",
                    },
                    {
                      "isList": false,
                      "location": "enumTypes",
                      "namespace": "prisma",
                      "type": "PostScalarFieldEnum",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "by",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostScalarWhereWithAggregatesInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "having",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "take",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "skip",
                },
              ],
              "isNullable": false,
              "name": "groupByPost",
              "outputType": {
                "isList": true,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "PostGroupByOutputType",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "where",
                },
              ],
              "isNullable": true,
              "name": "findUniquePost",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "Post",
              },
            },
          ],
          "name": "Query",
        },
        {
          "fields": [
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserCreateInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserUncheckedCreateInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "data",
                },
              ],
              "isNullable": false,
              "name": "createOneUser",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "User",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "where",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserCreateInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserUncheckedCreateInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "create",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserUpdateInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserUncheckedUpdateInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "update",
                },
              ],
              "isNullable": false,
              "name": "upsertOneUser",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "User",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserCreateManyInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "data",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Boolean",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "skipDuplicates",
                },
              ],
              "isNullable": false,
              "name": "createManyUser",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "AffectedRowsOutput",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "where",
                },
              ],
              "isNullable": true,
              "name": "deleteOneUser",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "User",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserUpdateInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserUncheckedUpdateInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "data",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "where",
                },
              ],
              "isNullable": true,
              "name": "updateOneUser",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "User",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserUpdateManyMutationInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserUncheckedUpdateManyInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "data",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
              ],
              "isNullable": false,
              "name": "updateManyUser",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "AffectedRowsOutput",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
              ],
              "isNullable": false,
              "name": "deleteManyUser",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "AffectedRowsOutput",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostCreateInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostUncheckedCreateInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "data",
                },
              ],
              "isNullable": false,
              "name": "createOnePost",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "Post",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "where",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostCreateInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostUncheckedCreateInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "create",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostUpdateInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostUncheckedUpdateInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "update",
                },
              ],
              "isNullable": false,
              "name": "upsertOnePost",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "Post",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostCreateManyInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "data",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Boolean",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "skipDuplicates",
                },
              ],
              "isNullable": false,
              "name": "createManyPost",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "AffectedRowsOutput",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "where",
                },
              ],
              "isNullable": true,
              "name": "deleteOnePost",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "Post",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostUpdateInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostUncheckedUpdateInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "data",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "where",
                },
              ],
              "isNullable": true,
              "name": "updateOnePost",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "Post",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostUpdateManyMutationInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostUncheckedUpdateManyInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "data",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
              ],
              "isNullable": false,
              "name": "updateManyPost",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "AffectedRowsOutput",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
              ],
              "isNullable": false,
              "name": "deleteManyPost",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "AffectedRowsOutput",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "String",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "query",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Json",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "parameters",
                },
              ],
              "isNullable": false,
              "name": "executeRaw",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Json",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "String",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "query",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Json",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "parameters",
                },
              ],
              "isNullable": false,
              "name": "queryRaw",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Json",
              },
            },
          ],
          "name": "Mutation",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": true,
              "name": "_count",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "UserCountAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_avg",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "UserAvgAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_sum",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "UserSumAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_min",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "UserMinAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_max",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "UserMaxAggregateOutputType",
              },
            },
          ],
          "name": "AggregateUser",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": false,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_count",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "UserCountAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_avg",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "UserAvgAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_sum",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "UserSumAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_min",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "UserMinAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_max",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "UserMaxAggregateOutputType",
              },
            },
          ],
          "name": "UserGroupByOutputType",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": true,
              "name": "_count",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "PostCountAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_avg",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "PostAvgAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_sum",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "PostSumAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_min",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "PostMinAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_max",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "PostMaxAggregateOutputType",
              },
            },
          ],
          "name": "AggregatePost",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": false,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
            {
              "args": [],
              "isNullable": false,
              "name": "authorId",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_count",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "PostCountAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_avg",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "PostAvgAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_sum",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "PostSumAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_min",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "PostMinAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_max",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "PostMaxAggregateOutputType",
              },
            },
          ],
          "name": "PostGroupByOutputType",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": false,
              "name": "count",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
          ],
          "name": "AffectedRowsOutput",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": false,
              "name": "posts",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
          ],
          "name": "UserCountOutputType",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": false,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
            {
              "args": [],
              "isNullable": false,
              "name": "_all",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
          ],
          "name": "UserCountAggregateOutputType",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": true,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Float",
              },
            },
          ],
          "name": "UserAvgAggregateOutputType",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": true,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
          ],
          "name": "UserSumAggregateOutputType",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": true,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
          ],
          "name": "UserMinAggregateOutputType",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": true,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
          ],
          "name": "UserMaxAggregateOutputType",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": false,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
            {
              "args": [],
              "isNullable": false,
              "name": "authorId",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
            {
              "args": [],
              "isNullable": false,
              "name": "_all",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
          ],
          "name": "PostCountAggregateOutputType",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": true,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Float",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "authorId",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Float",
              },
            },
          ],
          "name": "PostAvgAggregateOutputType",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": true,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "authorId",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
          ],
          "name": "PostSumAggregateOutputType",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": true,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "authorId",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
          ],
          "name": "PostMinAggregateOutputType",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": true,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "authorId",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
          ],
          "name": "PostMaxAggregateOutputType",
        },
      ],
    },
  },
}
`);
  })

  test("dmmf_2", () => {
    expect(dmmf_2(schema)).toMatchInlineSnapshot(`
{
  "datamodel": {
    "enums": [],
    "models": [
      {
        "dbName": undefined,
        "fields": [
          {
            "default": Map {
              "name" => "autoincrement",
              "args" => [],
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
          {
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
            "relationFromFields": [],
            "relationName": "PostToUser",
            "relationToFields": [],
            "type": "Post",
          },
        ],
        "isGenerated": false,
        "name": "User",
        "primaryKey": undefined,
        "uniqueFields": [],
        "uniqueIndexes": [],
      },
      {
        "dbName": undefined,
        "fields": [
          {
            "default": Map {
              "name" => "autoincrement",
              "args" => [],
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
          {
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
            "relationFromFields": [
              "authorId",
            ],
            "relationName": "PostToUser",
            "relationToFields": [
              "id",
            ],
            "type": "User",
          },
          {
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
        "primaryKey": undefined,
        "uniqueFields": [],
        "uniqueIndexes": [],
      },
    ],
    "types": [],
  },
  "mappings": {
    "modelOperations": [
      Map {
        "model" => "User",
        "aggregate" => "aggregateUser",
        "createMany" => "createManyUser",
        "createOne" => "createOneUser",
        "deleteMany" => "deleteManyUser",
        "deleteOne" => "deleteOneUser",
        "findFirst" => "findFirstUser",
        "findMany" => "findManyUser",
        "findUnique" => "findUniqueUser",
        "groupBy" => "groupByUser",
        "updateMany" => "updateManyUser",
        "updateOne" => "updateOneUser",
        "upsertOne" => "upsertOneUser",
      },
      Map {
        "model" => "Post",
        "aggregate" => "aggregatePost",
        "createMany" => "createManyPost",
        "createOne" => "createOnePost",
        "deleteMany" => "deleteManyPost",
        "deleteOne" => "deleteOnePost",
        "findFirst" => "findFirstPost",
        "findMany" => "findManyPost",
        "findUnique" => "findUniquePost",
        "groupBy" => "groupByPost",
        "updateMany" => "updateManyPost",
        "updateOne" => "updateOnePost",
        "upsertOne" => "upsertOnePost",
      },
    ],
    "otherOperations": {
      "read": [],
      "write": [
        "executeRaw",
        "queryRaw",
      ],
    },
  },
  "schema": {
    "enumTypes": Map {
      "prisma" => [
        {
          "name": "PostScalarFieldEnum",
          "values": [
            "id",
            "authorId",
          ],
        },
        {
          "name": "SortOrder",
          "values": [
            "asc",
            "desc",
          ],
        },
        {
          "name": "TransactionIsolationLevel",
          "values": [
            "ReadUncommitted",
            "ReadCommitted",
            "RepeatableRead",
            "Serializable",
          ],
        },
        {
          "name": "UserScalarFieldEnum",
          "values": [
            "id",
          ],
        },
      ],
    },
    "fieldRefTypes": Map {},
    "inputObjectTypes": Map {
      "prisma" => [
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserWhereInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "AND",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "OR",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserWhereInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "NOT",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFilter",
                },
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostListRelationFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "posts",
            },
          ],
          "meta": {
            "source": "User",
          },
          "name": "UserWhereInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 0,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostOrderByRelationAggregateInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "posts",
            },
          ],
          "name": "UserOrderByWithRelationInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "UserWhereUniqueInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 0,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserCountOrderByAggregateInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_count",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserAvgOrderByAggregateInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_avg",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserMaxOrderByAggregateInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_max",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserMinOrderByAggregateInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_min",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserSumOrderByAggregateInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_sum",
            },
          ],
          "name": "UserOrderByWithAggregationInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserScalarWhereWithAggregatesInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserScalarWhereWithAggregatesInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "AND",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserScalarWhereWithAggregatesInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "OR",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserScalarWhereWithAggregatesInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserScalarWhereWithAggregatesInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "NOT",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntWithAggregatesFilter",
                },
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "meta": {
            "source": "User",
          },
          "name": "UserScalarWhereWithAggregatesInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "AND",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "OR",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "NOT",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFilter",
                },
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserRelationFilter",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "author",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFilter",
                },
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "authorId",
            },
          ],
          "meta": {
            "source": "Post",
          },
          "name": "PostWhereInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 0,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserOrderByWithRelationInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "author",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "authorId",
            },
          ],
          "name": "PostOrderByWithRelationInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "PostWhereUniqueInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 0,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "authorId",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCountOrderByAggregateInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_count",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostAvgOrderByAggregateInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_avg",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostMaxOrderByAggregateInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_max",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostMinOrderByAggregateInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_min",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostSumOrderByAggregateInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_sum",
            },
          ],
          "name": "PostOrderByWithAggregationInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereWithAggregatesInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereWithAggregatesInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "AND",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereWithAggregatesInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "OR",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereWithAggregatesInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereWithAggregatesInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "NOT",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntWithAggregatesFilter",
                },
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntWithAggregatesFilter",
                },
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "authorId",
            },
          ],
          "meta": {
            "source": "Post",
          },
          "name": "PostScalarWhereWithAggregatesInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateNestedManyWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "posts",
            },
          ],
          "name": "UserCreateInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedCreateNestedManyWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "posts",
            },
          ],
          "name": "UserUncheckedCreateInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpdateManyWithoutAuthorNestedInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "posts",
            },
          ],
          "name": "UserUpdateInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFieldUpdateOperationsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedUpdateManyWithoutAuthorNestedInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "posts",
            },
          ],
          "name": "UserUncheckedUpdateInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "UserCreateManyInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [],
          "name": "UserUpdateManyMutationInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFieldUpdateOperationsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "UserUncheckedUpdateManyInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserCreateNestedOneWithoutPostsInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "author",
            },
          ],
          "name": "PostCreateInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "authorId",
            },
          ],
          "name": "PostUncheckedCreateInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserUpdateOneRequiredWithoutPostsNestedInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "author",
            },
          ],
          "name": "PostUpdateInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFieldUpdateOperationsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFieldUpdateOperationsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "authorId",
            },
          ],
          "name": "PostUncheckedUpdateInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "authorId",
            },
          ],
          "name": "PostCreateManyInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [],
          "name": "PostUpdateManyMutationInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFieldUpdateOperationsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFieldUpdateOperationsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "authorId",
            },
          ],
          "name": "PostUncheckedUpdateManyInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "equals",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "in",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "notIn",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "lt",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "lte",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "gt",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "gte",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedIntFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "not",
            },
          ],
          "name": "IntFilter",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "every",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "some",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "none",
            },
          ],
          "name": "PostListRelationFilter",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_count",
            },
          ],
          "name": "PostOrderByRelationAggregateInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "UserCountOrderByAggregateInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "UserAvgOrderByAggregateInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "UserMaxOrderByAggregateInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "UserMinOrderByAggregateInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "UserSumOrderByAggregateInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "equals",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "in",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "notIn",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "lt",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "lte",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "gt",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "gte",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedIntWithAggregatesFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "not",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedIntFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_count",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedFloatFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_avg",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedIntFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_sum",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedIntFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_min",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedIntFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_max",
            },
          ],
          "name": "IntWithAggregatesFilter",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "is",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "isNot",
            },
          ],
          "name": "UserRelationFilter",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "authorId",
            },
          ],
          "name": "PostCountOrderByAggregateInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "authorId",
            },
          ],
          "name": "PostAvgOrderByAggregateInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "authorId",
            },
          ],
          "name": "PostMaxOrderByAggregateInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "authorId",
            },
          ],
          "name": "PostMinOrderByAggregateInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "enumTypes",
                  "namespace": "prisma",
                  "type": "SortOrder",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "authorId",
            },
          ],
          "name": "PostSumOrderByAggregateInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateWithoutAuthorInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "create",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateOrConnectWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateOrConnectWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "connectOrCreate",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateManyAuthorInputEnvelope",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "createMany",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "connect",
            },
          ],
          "name": "PostCreateNestedManyWithoutAuthorInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateWithoutAuthorInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "create",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateOrConnectWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateOrConnectWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "connectOrCreate",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateManyAuthorInputEnvelope",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "createMany",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "connect",
            },
          ],
          "name": "PostUncheckedCreateNestedManyWithoutAuthorInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateWithoutAuthorInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "create",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateOrConnectWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateOrConnectWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "connectOrCreate",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpsertWithWhereUniqueWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpsertWithWhereUniqueWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "upsert",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateManyAuthorInputEnvelope",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "createMany",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "set",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "disconnect",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "delete",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "connect",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpdateWithWhereUniqueWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpdateWithWhereUniqueWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "update",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpdateManyWithWhereWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpdateManyWithWhereWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "updateMany",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "deleteMany",
            },
          ],
          "name": "PostUpdateManyWithoutAuthorNestedInput",
        },
        {
          "constraints": {
            "maxNumFields": 1,
            "minNumFields": 1,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "set",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "increment",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "decrement",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "multiply",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "divide",
            },
          ],
          "name": "IntFieldUpdateOperationsInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateWithoutAuthorInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "create",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateOrConnectWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateOrConnectWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "connectOrCreate",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpsertWithWhereUniqueWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpsertWithWhereUniqueWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "upsert",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateManyAuthorInputEnvelope",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "createMany",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "set",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "disconnect",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "delete",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "connect",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpdateWithWhereUniqueWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpdateWithWhereUniqueWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "update",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpdateManyWithWhereWithoutAuthorInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpdateManyWithWhereWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "updateMany",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "deleteMany",
            },
          ],
          "name": "PostUncheckedUpdateManyWithoutAuthorNestedInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserCreateWithoutPostsInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserUncheckedCreateWithoutPostsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "create",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserCreateOrConnectWithoutPostsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "connectOrCreate",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "connect",
            },
          ],
          "name": "UserCreateNestedOneWithoutPostsInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserCreateWithoutPostsInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserUncheckedCreateWithoutPostsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "create",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserCreateOrConnectWithoutPostsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "connectOrCreate",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserUpsertWithoutPostsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "upsert",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "connect",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserUpdateWithoutPostsInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserUncheckedUpdateWithoutPostsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "update",
            },
          ],
          "name": "UserUpdateOneRequiredWithoutPostsNestedInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "equals",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "in",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "notIn",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "lt",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "lte",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "gt",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "gte",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedIntFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "not",
            },
          ],
          "name": "NestedIntFilter",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "equals",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "in",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "notIn",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "lt",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "lte",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "gt",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "gte",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedIntWithAggregatesFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "not",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedIntFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_count",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedFloatFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_avg",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedIntFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_sum",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedIntFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_min",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedIntFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "_max",
            },
          ],
          "name": "NestedIntWithAggregatesFilter",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Float",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "equals",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "scalar",
                  "type": "Float",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "in",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "scalar",
                  "type": "Float",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "notIn",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Float",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "lt",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Float",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "lte",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Float",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "gt",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Float",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "gte",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Float",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "NestedFloatFilter",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "not",
            },
          ],
          "name": "NestedFloatFilter",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [],
          "name": "PostCreateWithoutAuthorInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "PostUncheckedCreateWithoutAuthorInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "where",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateWithoutAuthorInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "create",
            },
          ],
          "name": "PostCreateOrConnectWithoutAuthorInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateManyAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "data",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Boolean",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "skipDuplicates",
            },
          ],
          "name": "PostCreateManyAuthorInputEnvelope",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "where",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpdateWithoutAuthorInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedUpdateWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "update",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostCreateWithoutAuthorInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedCreateWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "create",
            },
          ],
          "name": "PostUpsertWithWhereUniqueWithoutAuthorInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "where",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpdateWithoutAuthorInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedUpdateWithoutAuthorInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "data",
            },
          ],
          "name": "PostUpdateWithWhereUniqueWithoutAuthorInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "where",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUpdateManyMutationInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostUncheckedUpdateManyWithoutPostsInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "data",
            },
          ],
          "name": "PostUpdateManyWithWhereWithoutAuthorInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "AND",
            },
            {
              "inputTypes": [
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "OR",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereInput",
                },
                {
                  "isList": true,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "PostScalarWhereInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "NOT",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFilter",
                },
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFilter",
                },
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "authorId",
            },
          ],
          "meta": {
            "source": "Post",
          },
          "name": "PostScalarWhereInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [],
          "name": "UserCreateWithoutPostsInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "UserUncheckedCreateWithoutPostsInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserWhereUniqueInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "where",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserCreateWithoutPostsInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserUncheckedCreateWithoutPostsInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "create",
            },
          ],
          "name": "UserCreateOrConnectWithoutPostsInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserUpdateWithoutPostsInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserUncheckedUpdateWithoutPostsInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "update",
            },
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserCreateWithoutPostsInput",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "UserUncheckedCreateWithoutPostsInput",
                },
              ],
              "isNullable": false,
              "isRequired": true,
              "name": "create",
            },
          ],
          "name": "UserUpsertWithoutPostsInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [],
          "name": "UserUpdateWithoutPostsInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFieldUpdateOperationsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "UserUncheckedUpdateWithoutPostsInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "PostCreateManyAuthorInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [],
          "name": "PostUpdateWithoutAuthorInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFieldUpdateOperationsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "PostUncheckedUpdateWithoutAuthorInput",
        },
        {
          "constraints": {
            "maxNumFields": undefined,
            "minNumFields": undefined,
          },
          "fields": [
            {
              "inputTypes": [
                {
                  "isList": false,
                  "location": "scalar",
                  "type": "Int",
                },
                {
                  "isList": false,
                  "location": "inputObjectTypes",
                  "namespace": "prisma",
                  "type": "IntFieldUpdateOperationsInput",
                },
              ],
              "isNullable": false,
              "isRequired": false,
              "name": "id",
            },
          ],
          "name": "PostUncheckedUpdateManyWithoutPostsInput",
        },
      ],
    },
    "outputObjectTypes": Map {
      "prisma" => [
        {
          "fields": [
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserOrderByWithRelationInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserOrderByWithRelationInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "orderBy",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "cursor",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "take",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "skip",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "enumTypes",
                      "namespace": "prisma",
                      "type": "UserScalarFieldEnum",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "distinct",
                },
              ],
              "isNullable": true,
              "name": "findFirstUser",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "User",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserOrderByWithRelationInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserOrderByWithRelationInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "orderBy",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "cursor",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "take",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "skip",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "enumTypes",
                      "namespace": "prisma",
                      "type": "UserScalarFieldEnum",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "distinct",
                },
              ],
              "isNullable": false,
              "name": "findManyUser",
              "outputType": {
                "isList": true,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "User",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserOrderByWithRelationInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserOrderByWithRelationInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "orderBy",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "cursor",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "take",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "skip",
                },
              ],
              "isNullable": false,
              "name": "aggregateUser",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "AggregateUser",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserOrderByWithAggregationInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserOrderByWithAggregationInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "orderBy",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "enumTypes",
                      "namespace": "prisma",
                      "type": "UserScalarFieldEnum",
                    },
                    {
                      "isList": false,
                      "location": "enumTypes",
                      "namespace": "prisma",
                      "type": "UserScalarFieldEnum",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "by",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserScalarWhereWithAggregatesInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "having",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "take",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "skip",
                },
              ],
              "isNullable": false,
              "name": "groupByUser",
              "outputType": {
                "isList": true,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "UserGroupByOutputType",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "where",
                },
              ],
              "isNullable": true,
              "name": "findUniqueUser",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "User",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostOrderByWithRelationInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostOrderByWithRelationInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "orderBy",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "cursor",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "take",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "skip",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "enumTypes",
                      "namespace": "prisma",
                      "type": "PostScalarFieldEnum",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "distinct",
                },
              ],
              "isNullable": true,
              "name": "findFirstPost",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "Post",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostOrderByWithRelationInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostOrderByWithRelationInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "orderBy",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "cursor",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "take",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "skip",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "enumTypes",
                      "namespace": "prisma",
                      "type": "PostScalarFieldEnum",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "distinct",
                },
              ],
              "isNullable": false,
              "name": "findManyPost",
              "outputType": {
                "isList": true,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "Post",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostOrderByWithRelationInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostOrderByWithRelationInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "orderBy",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "cursor",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "take",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "skip",
                },
              ],
              "isNullable": false,
              "name": "aggregatePost",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "AggregatePost",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostOrderByWithAggregationInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostOrderByWithAggregationInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "orderBy",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "enumTypes",
                      "namespace": "prisma",
                      "type": "PostScalarFieldEnum",
                    },
                    {
                      "isList": false,
                      "location": "enumTypes",
                      "namespace": "prisma",
                      "type": "PostScalarFieldEnum",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "by",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostScalarWhereWithAggregatesInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "having",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "take",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "skip",
                },
              ],
              "isNullable": false,
              "name": "groupByPost",
              "outputType": {
                "isList": true,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "PostGroupByOutputType",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "where",
                },
              ],
              "isNullable": true,
              "name": "findUniquePost",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "Post",
              },
            },
          ],
          "name": "Query",
        },
        {
          "fields": [
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserCreateInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserUncheckedCreateInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "data",
                },
              ],
              "isNullable": false,
              "name": "createOneUser",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "User",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "where",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserCreateInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserUncheckedCreateInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "create",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserUpdateInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserUncheckedUpdateInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "update",
                },
              ],
              "isNullable": false,
              "name": "upsertOneUser",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "User",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserCreateManyInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "data",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Boolean",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "skipDuplicates",
                },
              ],
              "isNullable": false,
              "name": "createManyUser",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "AffectedRowsOutput",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "where",
                },
              ],
              "isNullable": true,
              "name": "deleteOneUser",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "User",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserUpdateInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserUncheckedUpdateInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "data",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "where",
                },
              ],
              "isNullable": true,
              "name": "updateOneUser",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "User",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserUpdateManyMutationInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserUncheckedUpdateManyInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "data",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
              ],
              "isNullable": false,
              "name": "updateManyUser",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "AffectedRowsOutput",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "UserWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
              ],
              "isNullable": false,
              "name": "deleteManyUser",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "AffectedRowsOutput",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostCreateInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostUncheckedCreateInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "data",
                },
              ],
              "isNullable": false,
              "name": "createOnePost",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "Post",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "where",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostCreateInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostUncheckedCreateInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "create",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostUpdateInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostUncheckedUpdateInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "update",
                },
              ],
              "isNullable": false,
              "name": "upsertOnePost",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "Post",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostCreateManyInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "data",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Boolean",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "skipDuplicates",
                },
              ],
              "isNullable": false,
              "name": "createManyPost",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "AffectedRowsOutput",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "where",
                },
              ],
              "isNullable": true,
              "name": "deleteOnePost",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "Post",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostUpdateInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostUncheckedUpdateInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "data",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "where",
                },
              ],
              "isNullable": true,
              "name": "updateOnePost",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "Post",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostUpdateManyMutationInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostUncheckedUpdateManyInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "data",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
              ],
              "isNullable": false,
              "name": "updateManyPost",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "AffectedRowsOutput",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
              ],
              "isNullable": false,
              "name": "deleteManyPost",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "AffectedRowsOutput",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "String",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "query",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Json",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "parameters",
                },
              ],
              "isNullable": false,
              "name": "executeRaw",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Json",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "String",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": true,
                  "name": "query",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Json",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "parameters",
                },
              ],
              "isNullable": false,
              "name": "queryRaw",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Json",
              },
            },
          ],
          "name": "Mutation",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": true,
              "name": "_count",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "UserCountAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_avg",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "UserAvgAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_sum",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "UserSumAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_min",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "UserMinAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_max",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "UserMaxAggregateOutputType",
              },
            },
          ],
          "name": "AggregateUser",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": false,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_count",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "UserCountAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_avg",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "UserAvgAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_sum",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "UserSumAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_min",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "UserMinAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_max",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "UserMaxAggregateOutputType",
              },
            },
          ],
          "name": "UserGroupByOutputType",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": true,
              "name": "_count",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "PostCountAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_avg",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "PostAvgAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_sum",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "PostSumAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_min",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "PostMinAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_max",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "PostMaxAggregateOutputType",
              },
            },
          ],
          "name": "AggregatePost",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": false,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
            {
              "args": [],
              "isNullable": false,
              "name": "authorId",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_count",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "PostCountAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_avg",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "PostAvgAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_sum",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "PostSumAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_min",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "PostMinAggregateOutputType",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "_max",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "PostMaxAggregateOutputType",
              },
            },
          ],
          "name": "PostGroupByOutputType",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": false,
              "name": "count",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
          ],
          "name": "AffectedRowsOutput",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": false,
              "name": "posts",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
          ],
          "name": "UserCountOutputType",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": false,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
            {
              "args": [],
              "isNullable": false,
              "name": "_all",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
          ],
          "name": "UserCountAggregateOutputType",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": true,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Float",
              },
            },
          ],
          "name": "UserAvgAggregateOutputType",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": true,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
          ],
          "name": "UserSumAggregateOutputType",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": true,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
          ],
          "name": "UserMinAggregateOutputType",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": true,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
          ],
          "name": "UserMaxAggregateOutputType",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": false,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
            {
              "args": [],
              "isNullable": false,
              "name": "authorId",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
            {
              "args": [],
              "isNullable": false,
              "name": "_all",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
          ],
          "name": "PostCountAggregateOutputType",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": true,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Float",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "authorId",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Float",
              },
            },
          ],
          "name": "PostAvgAggregateOutputType",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": true,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "authorId",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
          ],
          "name": "PostSumAggregateOutputType",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": true,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "authorId",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
          ],
          "name": "PostMinAggregateOutputType",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": true,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
            {
              "args": [],
              "isNullable": true,
              "name": "authorId",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
          ],
          "name": "PostMaxAggregateOutputType",
        },
      ],
      "model" => [
        {
          "fields": [
            {
              "args": [],
              "isNullable": false,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
            {
              "args": [
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "where",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostOrderByWithRelationInput",
                    },
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostOrderByWithRelationInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "orderBy",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "inputObjectTypes",
                      "namespace": "prisma",
                      "type": "PostWhereUniqueInput",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "cursor",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "take",
                },
                {
                  "inputTypes": [
                    {
                      "isList": false,
                      "location": "scalar",
                      "type": "Int",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "skip",
                },
                {
                  "inputTypes": [
                    {
                      "isList": true,
                      "location": "enumTypes",
                      "namespace": "prisma",
                      "type": "PostScalarFieldEnum",
                    },
                  ],
                  "isNullable": false,
                  "isRequired": false,
                  "name": "distinct",
                },
              ],
              "isNullable": true,
              "name": "posts",
              "outputType": {
                "isList": true,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "Post",
              },
            },
            {
              "args": [],
              "isNullable": false,
              "name": "_count",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "prisma",
                "type": "UserCountOutputType",
              },
            },
          ],
          "name": "User",
        },
        {
          "fields": [
            {
              "args": [],
              "isNullable": false,
              "name": "id",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
            {
              "args": [],
              "isNullable": false,
              "name": "author",
              "outputType": {
                "isList": false,
                "location": "outputObjectTypes",
                "namespace": "model",
                "type": "User",
              },
            },
            {
              "args": [],
              "isNullable": false,
              "name": "authorId",
              "outputType": {
                "isList": false,
                "location": "scalar",
                "type": "Int",
              },
            },
          ],
          "name": "Post",
        },
      ],
    },
  },
}
`);
  })
})