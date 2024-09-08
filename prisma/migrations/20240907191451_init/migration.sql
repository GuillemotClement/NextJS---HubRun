/*
  Warnings:

  - You are about to drop the column `distance` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `picture` on the `Race` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Race` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Race" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);
INSERT INTO "new_Race" ("id", "name") SELECT "id", "name" FROM "Race";
DROP TABLE "Race";
ALTER TABLE "new_Race" RENAME TO "Race";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
