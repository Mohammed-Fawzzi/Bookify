import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog | Bookify",
  description: "Reading tips, book picks, and stories from the Bookify team.",
};

const posts = [
  {
    slug: "how-to-build-a-reading-habit",
    title: "How to Build a Reading Habit in 30 Days",
    excerpt:
      "Small daily goals beat big unfinished plans. Here is a simple routine that sticks.",
    date: "July 12, 2026",
  },
  {
    slug: "summer-fiction-picks",
    title: "Summer Fiction Picks Worth Your Time",
    excerpt:
      "From page-turners to quiet literary gems — five titles for long afternoons.",
    date: "July 5, 2026",
  },
  {
    slug: "why-bestsellers-matter",
    title: "Why Bestseller Lists Still Matter",
    excerpt:
      "Lists are not rules, but they are a useful map when you do not know where to start.",
    date: "June 28, 2026",
  },
];

export default function BlogPage() {
  return (
    <main className="container mx-auto px-6 py-28">
      <h1 className="text-4xl font-bold text-sky-600">Blog</h1>
      <p className="mt-3 text-lg text-slate-600 max-w-2xl">
        Notes on books, reading habits, and discovering your next favorite
        title.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="rounded-lg border border-slate-300 p-5 transition hover:bg-sky-100"
          >
            <Image
              src="/book.jpg"
              alt={post.title}
              width={400}
              height={220}
              className="mb-4 h-44 w-full rounded-lg object-cover"
            />
            <p className="text-sm text-slate-500">{post.date}</p>
            <h2 className="mt-2 text-xl font-bold text-sky-800">{post.title}</h2>
            <p className="mt-3 text-slate-600">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-sky-600 font-semibold hover:text-sky-700"
            >
              Read more
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
