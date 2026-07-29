import Link from "next/link";
import React from "react";
import { format } from "date-fns/format";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

async function getBookCategories() {
  const res = await fetch(
    `${process.env.NYT_API_BASE_URL}/lists/names.json?api-key=${process.env.NYT_API_KEY}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch books categories");
  }

  return res.json();
}

export default async function Categories({
  title = "Browse Categories",
  description = "Explore New York Times bestseller lists and find your next read.",
  buttonText = "View All",
  buttonHref = "/shop",
  showHeader = true,
  limit,
}) {
  const categories = await getBookCategories();
  const results = limit
    ? categories.results.slice(0, limit)
    : categories.results;

  return (
    <div className="container mx-auto px-6 py-5">
      {showHeader && (
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
          <div className="my-5">
            <h2 className="text-3xl font-bold text-sky-600 py-4">{title}</h2>
            <p className="text-gray-700 text-lg max-w-2xl">{description}</p>
          </div>
          {buttonText && (
            <div className="flex justify-center md:justify-start">
              <Link
                href={buttonHref}
                className="my-2 py-2 px-4 md:py-3 md:px-6 bg-sky-600 text-white border border-sky-600 hover:bg-sky-700 transition duration-300 flex items-center"
              >
                <span className="me-2">{buttonText}</span>
                <ArrowRight />
              </Link>
            </div>
          )}
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {results.map((category) => (
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
            <h3 className="mb-4 text-lg font-bold text-sky-800">
              {category.display_name}
            </h3>
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
