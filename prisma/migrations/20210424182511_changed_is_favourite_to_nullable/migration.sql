-- AlterTable
ALTER TABLE "Bookmark" ALTER COLUMN "isFavourite" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Shop" ALTER COLUMN "isFavourite" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Transaction" ALTER COLUMN "isFavourite" DROP NOT NULL;
