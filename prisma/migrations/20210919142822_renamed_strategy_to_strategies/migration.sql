/*
  Warnings:

  - You are about to drop the column `strategy` on the `Category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "strategy",
ADD COLUMN     "strategies" TEXT[];
