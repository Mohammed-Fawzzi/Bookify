import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const posts = {
  "how-to-build-a-reading-habit": {
    title: "How to Build a Reading Habit in 30 Days",
    date: "July 12, 2026",
    content: [
      "Start with ten pages a day. That small commitment removes the pressure of finishing a whole chapter.",
      "Keep one book in your bag and one by your bed so reading is always within reach.",
      "Track streaks lightly — consistency matters more than speed.",
    ],
  },
  "summer-fiction-picks": {
    title: "Summer Fiction Picks Worth Your Time",
    date: "July 5, 2026",
    content: [
      "Look for stories with strong atmosphere — summer reading thrives on place and mood.",
      "Mix one bestseller with one quieter novel so the season feels fresh, not rushed.",
      "Browse Bookify categories when you need a shortlist instead of an endless scroll.",
    ],
  },
  "why-bestsellers-matter": {
    title: "Why Bestseller Lists Still Matter",
    date: "June 28, 2026",
    content: [
      "Bestseller lists reflect conversation. They show what people are talking about right now.",
      "Use them as a starting point, then follow authors, themes, and related titles you actually enjoy.",
      "On Bookify, every list opens into a curated shelf you can explore in minutes.",
    ],
  },
};

export async function generateMetadata({ params }) {
  const post = posts[params.slug];
  if (!post) return { title: "Post Not Found | Bookify" };
  return {
    title: `${post.title} | Bookify Blog`,
    description: post.content[0],
  };
}

export default function BlogPostPage({ params }) {
  const post = posts[params.slug];

  if (!post) notFound();

  return (
    <main className="container mx-auto max-w-3xl px-6 py-28">
      <Link
        href="/blog"
        className="bg-sky-600 text-white px-4 py-2 transition hover:bg-sky-700"
      >
        Back to Blog
      </Link>

      <p className="mt-8 text-sm text-slate-500">{post.date}</p>
      <h1 className="mt-2 text-4xl font-bold text-sky-600">{post.title}</h1>

      <Image
        src="/book.jpg"
        alt={post.title}
        width={800}
        height={400}
        className="mt-8 h-64 w-full rounded-lg object-cover md:h-80"
      />

      <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">
        {post.content.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </main>
  );
}
