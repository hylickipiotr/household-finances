/*
  Warnings:

  - You are about to drop the column `disaplyName` on the `User` table. All the data in the column will be lost.
  - Added the required column `displayName` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "disaplyName",
ADD COLUMN     "displayName" TEXT NOT NULL;
