import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
    await prisma.user.deleteMany();

    const user = await prisma.user.create({
        data: {
            name: 'Marcos',
            email: 'andredesigner68@gmail.com',
            password: '1234'
        }
    });
}

main();