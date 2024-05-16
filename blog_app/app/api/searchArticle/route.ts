import { deleteArticleById, getArticleById, search } from "@/app/actions/articles";

export async function GET(request: Request) {
    const url = new URL(request.url);
    const param = url.search.split('=').pop();

    if (!param) return Response.json({ status: 400 })
    const article = await search(param).catch(e=>{
        return Response.json({ status: 500})
    })
    if (article) {
        console.log("article", article)
        return Response.json({ status: 200, article });
    }
    return Response.json({ status: 404 });
}