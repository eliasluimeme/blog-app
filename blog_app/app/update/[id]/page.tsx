

import { getArticleById } from "@/app/actions/articles";
import UpdateArticle from "@/components/UpdateArticle";

export default async function Create({params}: {
    params: {
        id: string;
    }
}) {
    const article = await getArticleById(params.id)

    return (
        <main className="container mx-auto">
            <h1 className="text-2xl my-4 ">Update article</h1>
            <UpdateArticle article={article}/>
        </main>
    )
}
