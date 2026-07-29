import Image from "next/image";
import Link from "next/link";
import React from "react";
import { getNytUrl } from "@/lib/nyt";

async function getBooks(listName) {
  const res = await fetch(
    getNytUrl(`/lists/current/${listName}.json`),
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  const data = await res.json();

  if (data.status !== "OK" || !data.results?.books) {
    throw new Error(data.errors?.[0] || "Book list not found");
  }

  return data;
}

export default async function Books({ params }) {
  const books = await getBooks(params.books);

  return (
    <div className="container mx-auto my-8 px-6 py-20">
      <Link
        href="/"
        className="bg-sky-600 text-white px-4 py-2 transition hover:bg-sky-700"
      >
        Go Back
      </Link>

      <h1 className="mb-8 text-center text-4xl font-bold text-sky-600">
        {books.results.display_name}
      </h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
        {books.results.books.map((book) => (
          <article
            key={book.primary_isbn13 || book.rank}
            className="rounded-lg border border-slate-300 hover:bg-sky-100 pb-2"
          >
            <Image
              src={book.book_image || "/book.jpg"}
              alt={book.title}
              width={400}
              height={600}
              className="h-80 w-full rounded-t-lg object-cover"
            />

            <div className="space-y-4 p-4">
              <h2 className="font-bold text-sky-800">{book.title}</h2>
              <p className="text-sm text-slate-600 font-bold">
                By {book.author}
              </p>
              {book.description ? (
                <p className="text-sm leading-6 text-neutral-400">
                  {book.description}
                </p>
              ) : null}

              <div>
                <h3 className="mb-4 font-semibold">Buy now</h3>

                <ul className="flex flex-wrap items-center justify-start gap-6">
                  {book.buy_links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        className="bg-sky-600 text-white px-4 py-2 transition hover:bg-sky-700"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
