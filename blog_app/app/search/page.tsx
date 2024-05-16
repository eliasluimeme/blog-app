'use client'

import Link from "next/link";
import { timeAgo } from "@/lib/utils";
import { getArticles } from "../actions/articles";
import url from 'url';

export default async function Search(props: { searchParams: Record<string, string> }) {
    const { searchParams } = props;

    const urlSearchParams = new URLSearchParams(Object.entries(searchParams));

    const query = urlSearchParams.get('param');

    const response = await fetch(`/api/searchArticle?param=${query}`, {
        method: 'GET',
    })
    const data = await response.json()
    if (data.status === 200) {
      console.log("Article Found", data)
    }

  return (
    <main className="container mx-auto flex flex-col gap-2 pt-8">
      <h1 className="font-bold text-2xl">Search results</h1>

      {data.article.map((x: any) => {
        return (
          <article key={x.id}>
            <Link href={`/article/${x.id}`} className="block border rounded py-3 px-2">
              <h2 className="font-semibold text-xl capitalize">{x.title}</h2>
              <div className=" line-clamp-3" dangerouslySetInnerHTML={{ __html: x.content }} />
              <time className="text-sm" dateTime={x.createdAt}>{timeAgo(x.createdAt)}</time>
            </Link>
          </article>
        );
      })}
    </main>
  );
}
