/*
  Warnings:

  - The primary key for the `TransactionItems` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `itemId` on the `TransactionItems` table. All the data in the column will be lost.
  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.
  - The required column `id` was added to the `TransactionItems` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `name` to the `TransactionItems` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_creatorId_fkey";

-- DropForeignKey
ALTER TABLE "TransactionItems" DROP CONSTRAINT "TransactionItems_itemId_fkey";

-- AlterTable
ALTER TABLE "TransactionItems" DROP CONSTRAINT "TransactionItems_pkey",
DROP COLUMN "itemId",
ADD COLUMN     "id" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD PRIMARY KEY ("id", "transactionId");

-- DropTable
DROP TABLE "Item";
