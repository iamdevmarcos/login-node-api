import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type LoginProps = {
    email: string;
    password: string;
}

type RegisterProps = {
    name: string;
    email: string;
    password: string;
}

export const User = {
    findAll: async () => {
        return await prisma.user.findMany({
            orderBy: { id: 'desc' }
        });
    },
    findOne: async (data: LoginProps) => {
        return await prisma.user.findFirst({
            where: {
                email: data.email, password: data.password
            }
        });
    },
    findByEmail: async (email: string) => {
        return await prisma.user.findUnique({
            where: { email }
        });
    },
    findById: async (id: string) => {
        return await prisma.user.findUnique({
            where: { id: parseInt(id) }
        });
    },
    create: async (data: RegisterProps) => {
        return await prisma.user.create({
            data: {
                name: data.name,
                email: data.email,
                password: data.password
            }
        });
    }
}