type Category = {
  id: string;
  name: string;
  icon: string;
};

type TopCategory = Pick<Category, "id" | "name" | "icon"> & {
  totalAmount: number;
  transactionCount: number;
};

export type { Category, TopCategory };
