import Link from "next/link";
import React from "react";
import { format } from "date-fns/format";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

async function getBookCategories() {
  const res = await fetch(
    `https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=zcQloO4ATXwDFMTJa6IXE5SNLqCESuZX`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch books categories");
  }

  return res.json();
}

export default async function Categories() {
  const categories = await getBookCategories();

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="flex justify-between items-center">
        <div className="my-5 p-4">
          <h1 className="text-3xl font-bold text-sky-600 py-4">
            Featured Categories
          </h1>
          <p className="text-gray-700 text-lg">
            Embark on futuristic journeys. Aliens, tech marvels, and cosmic
            wonders await in these mind-bending sagas.
          </p>
        </div>
        <div className="flex justify-center md:justify-start">
          <button className="my-2 py-2 px-4 md:py-3 md:px-6 bg-sky-600 text-white border border-sky-600 hover:bg-sky-700 transition duration-300 flex items-center">
            <span className="me-2">All Categories</span>
            <ArrowRight />
          </button>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categories.results.map((category) => (
          <Link
            href={`/books/${category.list_name_encoded}`}
            key={category.list_name_encoded}
            className="rounded-lg border border-slate-300 p-4 transition hover:bg-sky-100 flex flex-col"
          >
            <Image
              src={`/book.jpg`}
              alt={category.display_name}
              width={400}
              height={250}
              className="rounded-lg mb-4 object-cover"
            />
            <h2 className="mb-4 text-lg font-bold text-sky-800">
              {category.display_name}
            </h2>
            <p className="text-sm text-slate-500">
              <span className="text-blue-600"> First published: </span>
              {format(new Date(category.oldest_published_date), "do MMMM yyyy")}
            </p>
            <p className="my-2 text-sm text-slate-500">
              <span className="text-blue-600">Last published: </span>
              {format(new Date(category.newest_published_date), "do MMMM yyyy")}
            </p>
            <p className="text-sm text-slate-500">
              <span className="text-blue-600">Updated:</span> {category.updated}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
