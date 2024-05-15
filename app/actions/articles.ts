import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function getArticleById(id: string) {
    return await prisma.article.findUnique({
        where: {
            id: id
        }
    })
}

export async function getArticles() {
    return await prisma.article.findMany()
}

export async function createArticle(data: {title: string, content: string}) {
    return await prisma.article.create({
        data
    })
}