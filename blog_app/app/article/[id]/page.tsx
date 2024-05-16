'use client'

import { deleteArticleById, getArticleById } from "@/app/actions/articles";
import { Button } from "@/components/ui/button";
import { timeAgo } from "@/lib/utils";
import Link from "next/link";
import { notFound, useRouter } from "next/navigation";

export default async function Article({params}: {
    params: {
        id: string;
    }
}) {
    const router = useRouter()
    
    const response = await fetch(`/api/getArticle?id=${params.id}`, {
        method: 'GET',
    })
    const article = await response.json()

    
    async function deleteArticle() {
        const response = await fetch('/api/deleteArticle', {
            method: 'DELETE',
            body: JSON.stringify({
                id: params.id
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json()
        if (data.status === 200) {
            router.push("/")
        }
    }
    
    if (!article)
        return notFound()

    return (
        <main className="container mx-auto mt-8">
            <article className="">
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl capitalize">{article.article.title}</h2>
                    <div className="flex justify-between items-center gap-2">
                        <Link href={"/update/" + params.id} className="border rounded-xl py-2 px-4">Edit</Link>
                        <Button onClick={deleteArticle} >Delete</Button>
                    </div>
                </div>
                <time className="text-sm" dateTime="">{timeAgo(article.article.createdAt.toString())}</time>
                <div className="mb-2" dangerouslySetInnerHTML={{ __html: article.article.content }} />
            </article>
        </main>
    )
}