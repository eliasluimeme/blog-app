import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function getArticleById(id: string) {
    return await prisma.article.findUnique({
        where: {
            id
        }
    })
}

export default function editArticle(data: {id: string, title: string, content: string}) {
    return prisma.article.update({
        where: {
            id: data.id
        },
        data
    })

}

export async function deleteArticleById(id: string) {
    return await prisma.article.delete({
        where: {
            id
        }
    })
}

export async function getArticles(parsedPage: number) {
    // Calculate the skip value for pagination
    const skip = (parsedPage - 1) * 10;

    // Fetch articles with pagination and limited content
    const articles = await prisma.article.findMany({
        skip,
        take: 10,
        orderBy: { createdAt: 'desc' } // Order by creation date, adjust as needed
    });

    return articles.map(article => ({
        ...article,
        content: article.content.slice(0, 220) // Limiting content to 200 characters
    }));
}

export async function createArticle(data: {title: string, content: string}) {
    return await prisma.article.create({
        data
    })
}

export async function search(input: string) {
    return await prisma.article.findMany({
        where: {
            OR: [
                {
                    title: {
                        contains: input
                    }
                },
                {
                    content: {
                        contains: input
                    }
                }
            ]
        }
    })
}