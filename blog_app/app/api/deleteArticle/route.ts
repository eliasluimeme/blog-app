import { deleteArticleById } from "@/app/actions/articles";

export async function DELETE(request: Request) {
    const { id } = await request.json();
    const article = await deleteArticleById(id).catch(e=>{
        return Response.json({ status: 500})
    })
    return Response.json({ status: 200 });
}