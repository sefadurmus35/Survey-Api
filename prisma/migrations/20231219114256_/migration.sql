/*
  Warnings:

  - You are about to drop the column `answer` on the `Survey` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Survey" DROP COLUMN "answer";

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "surveyId" INTEGER NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_surveyId_fkey" FOREIGN KEY ("surveyId") REFERENCES "Survey"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
