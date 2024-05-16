import { createArticle } from "@/app/actions/articles";

export async function POST(request: Request) {
    const { title, content } = await request.json();
    const article = await createArticle({title, content}).catch(e=>{
        return Response.json({ status: 500})
    })
    return Response.json({ status: 200, article});
}