/*
  Warnings:

  - You are about to drop the `_CategoryToTransaction` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `categoryId` to the `Transaction` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "_CategoryToTransaction" DROP CONSTRAINT "_CategoryToTransaction_A_fkey";

-- DropForeignKey
ALTER TABLE "_CategoryToTransaction" DROP CONSTRAINT "_CategoryToTransaction_B_fkey";

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "categoryId" TEXT NOT NULL;

-- DropTable
DROP TABLE "_CategoryToTransaction";

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
