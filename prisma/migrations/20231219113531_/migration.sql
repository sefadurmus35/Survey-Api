/*
  Warnings:

  - You are about to drop the column `happyCount` on the `Survey` table. All the data in the column will be lost.
  - You are about to drop the column `neutralCount` on the `Survey` table. All the data in the column will be lost.
  - You are about to drop the column `sadCount` on the `Survey` table. All the data in the column will be lost.
  - Added the required column `answer` to the `Survey` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Survey" DROP COLUMN "happyCount",
DROP COLUMN "neutralCount",
DROP COLUMN "sadCount",
ADD COLUMN     "answer" TEXT NOT NULL;
