import { deleteArticleById, getArticleById } from "@/app/actions/articles";

export async function GET(request: Request) {
    const url = new URL(request.url);
    const id = url.search.split('=').pop();
    
    if (!id) return Response.json({ status: 400 })

    const article = await getArticleById(id).catch(e=>{
        return Response.json({ status: 500})
    })
    return Response.json({ status: 200, article });
}