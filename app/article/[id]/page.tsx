import { getArticleById } from "@/app/actions/articles";
import { timeAgo } from "@/lib/utils";
import { notFound } from "next/navigation";

export default async function Article({params}: {
    params: {
        id: string;
    }
}) {
    const article = await getArticleById(params.id)

    if (!article)
        return notFound()

    return (
        <main className="container mx-auto mt-8">
            <article className="">
                <h2 className="font-semibold text-xl capitalize">{article.title}</h2>
                <time className="text-sm" dateTime="">{timeAgo(article.createdAt.toString())}</time>
                <p className="mb-2">{article.content}</p>
            </article>
        </main>
    )
}