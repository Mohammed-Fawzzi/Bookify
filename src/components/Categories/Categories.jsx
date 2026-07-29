import Link from "next/link";
import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { getNytUrl } from "@/lib/nyt";

async function getBookCategories() {
  const res = await fetch(getNytUrl("/lists/overview.json"), {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch books categories");
  }

  const data = await res.json();

  if (data.status !== "OK" || !data.results?.lists) {
    throw new Error(data.errors?.[0] || "Unexpected NYT API response");
  }

  return data.results.lists;
}

export default async function Categories({
  title = "Browse Categories",
  description = "Explore New York Times bestseller lists and find your next read.",
  buttonText = "View All",
  buttonHref = "/shop",
  showHeader = true,
  limit,
}) {
  let lists = [];
  let errorMessage = "";

  try {
    lists = await getBookCategories();
  } catch (error) {
    errorMessage = error.message || "Could not load categories right now.";
  }

  const results = limit ? lists.slice(0, limit) : lists;

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

      {errorMessage ? (
        <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-6 text-red-700">
          {errorMessage}
        </p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {results.map((category) => {
            const cover =
              category.books?.[0]?.book_image || "/book.jpg";

            return (
              <Link
                href={`/books/${category.list_name_encoded}`}
                key={category.list_name_encoded}
                className="rounded-lg border border-slate-300 p-4 transition hover:bg-sky-100 flex flex-col"
              >
                <Image
                  src={cover}
                  alt={category.display_name}
                  width={400}
                  height={250}
                  className="mb-4 h-56 w-full rounded-lg object-cover"
                />
                <h3 className="mb-4 text-lg font-bold text-sky-800">
                  {category.display_name}
                </h3>
                <p className="text-sm text-slate-500">
                  <span className="text-blue-600">Updated:</span>{" "}
                  {category.updated}
                </p>
                <p className="my-2 text-sm text-slate-500">
                  <span className="text-blue-600">Books in list:</span>{" "}
                  {category.books?.length || 0}
                </p>
                {category.books?.[0]?.title ? (
                  <p className="text-sm text-slate-500">
                    <span className="text-blue-600">Top title:</span>{" "}
                    {category.books[0].title}
                  </p>
                ) : null}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
