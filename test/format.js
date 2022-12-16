const fs = require("fs");
const { format_1, format_2 } = require("../pkg");

describe("format", () => {
  const valid = fs.readFileSync("test/textures/valid.prisma", "utf-8");
  const invalid = fs.readFileSync("test/textures/invalid.prisma", "utf-8");

  test("valid", () => {
    const result1 = format_1(valid);
    expect(result1).toMatchInlineSnapshot(`
"datasource db {
provider = "postgres"
url      = "file:./dev.db"
}

model User {
id    Int    @id @default(autoincrement())
posts Post[]
}

model Post {
id       Int  @id @default(autoincrement())
author   User @relation(fields: [authorId], references: [id])
authorId Int
}
"
`);

    const result2 = format_2(valid);
    expect(result2).toMatchInlineSnapshot(`
"datasource db {
provider = "postgres"
url      = "file:./dev.db"
}

model User {
id    Int    @id @default(autoincrement())
posts Post[]
}

model Post {
id       Int  @id @default(autoincrement())
author   User @relation(fields: [authorId], references: [id])
authorId Int
}
"
`);
  })

  test("invalid", () => {
    const result1 = format_1(invalid);
    expect(result1).toMatchInlineSnapshot(`
"datasource db {
provider = "sqlite"
url      = "file:./dev.db"
}

model User {
id    Int      @id @default(autoincrement())
posts Posted[]
}

model Post {
id       Int  @id @default(autoincrement())
author   User @relation(fields: [authorId], references: [id])
authorId Int
}

enum Status {
ACTIVE
INACTIVE
}
"
`);

    const result2 = format_2(invalid);
    expect(result2).toMatchInlineSnapshot(`
"datasource db {
provider = "sqlite"
url      = "file:./dev.db"
}

model User {
id    Int      @id @default(autoincrement())
posts Posted[]
}

model Post {
id       Int  @id @default(autoincrement())
author   User @relation(fields: [authorId], references: [id])
authorId Int
}

enum Status {
ACTIVE
INACTIVE
}
"
`);
  })
});