import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const User = {
    findAll: async () => {
        return await prisma.user.findMany({
            orderBy: { id: 'desc' }
        });
    }
}