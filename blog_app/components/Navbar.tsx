'use client'

import { search } from "@/app/actions/articles";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
    const router = useRouter()


    async function searchArticle(event: any) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)

        // const response = await fetch(`/api/searchArticle?search=${searchTerm}`, {
        //     method: 'GET',
        //   })
        //   const data = await response.json()
        //   if (data.status === 200) {
            router.push("/search?param=" + formData.get("search"))
        //   }
    }

    const handleSearchSubmit = async (event: any) => {
        event.preventDefault();
        // Implement search functionality here, e.g., redirect to search results page
        // console.log('Searching for:', searchTerm);
        // const article = await search(searchTerm)
        // console.log('Search results:', article);
    };

    return (
        <nav className="bg-black text-white py-4">
            <div className="container flex justify-between items-center mx-auto">
                <ul>
                    <li>
                        <a href="/">Blog app</a>
                    </li>
                </ul>
                <div className="flex gap-4">
                    <form onSubmit={searchArticle}>
                        <input
                            type="text"
                            name="search"
                            placeholder="Search"
                            className="text-black px-2 py-1 rounded-xl"
                        />
                        <button type="submit" className="px-3 py-1 bg-gray-800 text-white rounded-xl">
                            Search
                        </button>
                    </form>
                </div>
                <ul className="flex gap-4">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/create">Create</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}