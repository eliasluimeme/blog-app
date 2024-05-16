import Link from "next/link";
import { getArticles } from "./actions/articles";
import { timeAgo } from "@/lib/utils";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"


export default async function Home() {
  const articles = await getArticles(1)

  return (
    <main className="container mx-auto flex flex-col gap-2 pt-8">
      <h1 className="font-bold text-2xl">Articles</h1>


      {articles.map((x: any) => {
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

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

    </main>
  );
}
