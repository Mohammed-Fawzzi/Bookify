export const metadata = {
  title: "Contact | Bookify",
  description: "Get in touch with the Bookify team.",
};

export default function ContactPage() {
  return (
    <main className="container mx-auto px-6 py-28">
      <h1 className="text-4xl font-bold text-sky-600">Contact</h1>
      <p className="mt-3 text-lg text-slate-600 max-w-2xl">
        Have a question, suggestion, or partnership idea? Send a message and we
        will get back to you.
      </p>

      <div className="mt-12 grid gap-10 md:grid-cols-2">
        <form className="space-y-5 rounded-lg border border-slate-300 p-6">
          <div>
            <label htmlFor="name" className="mb-2 block font-semibold text-slate-800">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full border border-slate-300 bg-white px-4 py-3 outline-none focus:border-sky-600"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block font-semibold text-slate-800">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full border border-slate-300 bg-white px-4 py-3 outline-none focus:border-sky-600"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block font-semibold text-slate-800">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full border border-slate-300 bg-white px-4 py-3 outline-none focus:border-sky-600"
              placeholder="How can we help?"
            />
          </div>

          <button
            type="submit"
            className="bg-sky-600 px-6 py-3 text-white transition hover:bg-sky-700"
          >
            Send Message
          </button>
        </form>

        <div className="space-y-6 text-slate-700">
          <div>
            <h2 className="text-xl font-bold text-sky-800">Email</h2>
            <p className="mt-2">hello@bookify.app</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-sky-800">Hours</h2>
            <p className="mt-2">Sunday – Thursday, 10:00 AM – 6:00 PM</p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-sky-800">Location</h2>
            <p className="mt-2">Cairo, Egypt</p>
          </div>
        </div>
      </div>
    </main>
  );
}
