import { Category } from "./Category";

type TransactionType = "income" | "expense";

type Transaction = {
  id: string;
  title: string;
  description: string;
  amount: number;
  date: string;
  category: Pick<Category, "icon">;
  type: TransactionType;
};

export type { Transaction };
