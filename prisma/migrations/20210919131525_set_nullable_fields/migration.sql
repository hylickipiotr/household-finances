-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "type" SET DEFAULT E'EXPENSE',
ALTER COLUMN "strategy" SET DEFAULT E'{}';

-- AlterTable
ALTER TABLE "Wallet" ALTER COLUMN "initialBalance" SET DEFAULT 0;
