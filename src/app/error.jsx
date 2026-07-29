"use client";

export default function Error({ error, reset }) {
  return (
    <main className="container mx-auto flex min-h-[70vh] flex-col items-center justify-center px-6 py-28 text-center">
      <h1 className="text-3xl font-bold text-sky-600">Something went wrong</h1>
      <p className="mt-3 max-w-md text-slate-600">
        {error?.message || "We could not load this page right now."}
      </p>
      <button
        onClick={() => reset()}
        className="mt-8 bg-sky-600 px-6 py-3 text-white transition hover:bg-sky-700"
      >
        Try again
      </button>
    </main>
  );
}
