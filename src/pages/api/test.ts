import { NextApiHandler } from "next";
import { prisma } from "src/lib/prisma";

const test: NextApiHandler = async (req, res) => {
  const result = await prisma.wallet.create({
    data: {
      name: "Master",
      initialBalance: 0,
      icon: "🐨",
      color: "blue",
    },
    select: {
      id: true,
      name: true,
      color: true,
      createdAt: true,
      icon: true,
      initialBalance: true,
      transaction: true,
      updatedAt: true,
    },
  });
  res.json(result);
};

export default test;
