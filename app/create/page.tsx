import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { createArticle } from "../actions/articles"


export default function Create() {

    async function submitArticle(fromData: FormData) {
        'use server'

        const payload = {
            title: fromData.get('title') as string,
            content: fromData.get('content') as string
        }

        await createArticle(payload)
    }

    return (
        <main className="container mx-auto">
            <h1 className="text-2xl my-4 ">What's on your mind?</h1>
            <form action={submitArticle} className="flex flex-col gap-3">
                <Label htmlFor="title">Title</Label>
                <Input name="title" placeholder="Enter your title"/>
                <Label htmlFor="content">Content</Label>
                <Textarea name="content" placeholder="Write your blog"/>
                <Button>Post</Button>
            </form>
        </main>
    )
}