import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 flex items-center justify-center px-4">
      <section className="max-w-3xl text-center p-8 bg-white rounded-xl shadow-lg ring-1 ring-gray-200 animate-fadeIn">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
          Welcome to <span className="text-blue-600">Remix Learn Hub</span>
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Discover thoughtful articles about modern web technologies with Remix.
          Whether you{"'"}re a beginner or growing as a developer, you{"'"}ll
          find curated resources to guide your journey.
        </p>

        <img
          src="/software-dev.jpg"
          alt="Learning with Remix"
          className="mx-auto mb-8 rounded-lg shadow-lg w-full max-h-64 object-cover"
        />

        <Link
          to="/articles"
          className="inline-block bg-blue-600 text-white text-lg font-semibold px-8 py-3 rounded-full shadow hover:bg-blue-700 transition duration-300"
        >
          📚 Browse Articles
        </Link>
      </section>
    </main>
  );
}
