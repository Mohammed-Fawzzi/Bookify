import Categories from "@/components/Categories/Categories";

export const metadata = {
  title: "Shop | Bookify",
  description: "Browse book categories and find your next read on Bookify.",
};

export default function ShopPage() {
  return (
    <main className="pt-16">
      <div className="container mx-auto px-6 pt-12">
        <h1 className="text-4xl font-bold text-sky-600">Shop</h1>
        <p className="mt-3 text-lg text-slate-600 max-w-2xl">
          Explore New York Times bestseller lists and pick a category that
          matches your mood.
        </p>
      </div>
      <Categories showHeader={false} />
    </main>
  );
}
