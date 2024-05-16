import editArticle from "@/app/actions/articles";

export async function PUT(request: Request) {
    const { id, title, content } = await request.json();
    const article = await editArticle({id, title, content}).catch(e=>{
        return Response.json({ status: 500})
    })
    return Response.json({ status: 200, article});
}