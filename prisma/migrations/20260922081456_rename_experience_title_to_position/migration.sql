/*
  Warnings:

  - You are about to drop the column `title` on the `Experience` table. All the data in the column will be lost.
  - Added the required column `position` to the `Experience` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Experience" DROP COLUMN "title",
ADD COLUMN     "position" TEXT NOT NULL;
