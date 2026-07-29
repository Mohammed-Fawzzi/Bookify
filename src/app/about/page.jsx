import Link from "next/link";
import AboutIllustration from "@/components/AboutIllustration/AboutIllustration";

export const metadata = {
  title: "About | Bookify",
  description: "Learn about Bookify and how we help you find great books.",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto px-6 py-28">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-bold text-sky-600">About Bookify</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Bookify helps you discover books through New York Times bestseller
            lists. Browse categories, open a list, and find titles that match
            what you want to read next.
          </p>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            Built with Next.js and Tailwind CSS, the app focuses on a clean
            browsing experience — from homepage highlights to category shelves.
          </p>
          <Link
            href="/shop"
            className="mt-8 inline-block bg-sky-600 px-6 py-3 text-white transition hover:bg-sky-700"
          >
            Start Exploring
          </Link>
        </div>

        <AboutIllustration className="w-full h-auto" />
      </div>
    </main>
  );
}
