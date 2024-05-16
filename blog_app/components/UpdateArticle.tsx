'use client'

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/froala_style.min.css';

import dynamic from 'next/dynamic'
const FroalaEditor = dynamic(() => import('react-froala-wysiwyg'), 
    { ssr: false }
)

import { useState } from 'react';
import { useRouter } from "next/navigation"

export default function UpdateArticle({article}: any) {
    const [content, setContent] = useState<any>(article.content);
    const router = useRouter();

    async function editArticle(event: React.FormEvent<HTMLFormElement>) {        // 'use server'
        event.preventDefault()
        const formData = new FormData(event.currentTarget)

        const response = await fetch('/api/editArticle', {
            method: 'PUT',
            body: JSON.stringify({
                id: article.id,
                title: formData.get('title') as string,
                content: content
            }),
            headers: {
                'Content-Type': 'application/json',
            },
          })
          const data = await response.json()
          if (data.status === 200) {
            router.push("/article/" + article.id)
          }
    }

    function handleContent(content: any) {
        setContent(content)
    }

    return (
        <form onSubmit={editArticle} className="flex flex-col gap-3">
            <Label htmlFor="title">Title</Label>
            <Input defaultValue={article.title} name="title" placeholder="Enter your title"/>
            <Label htmlFor="content">Content</Label>
            <FroalaEditor
                tag='textarea' 
                model={content} 
                onModelChange={handleContent} 
                config={{
                    placeholderText: 'Unveil your story...', 
                    charCounterCount: true,
                    codeMirror: true,
                }}
            />
            <Button>Post</Button>
        </form>
    )
}
