import { Link } from "@remix-run/react";

export default function Index() {
  return (
    <main className="max-w-3xl mt-20 mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Welcome to Remix Learn Hub
      </h1>
      <p className="text-lg text-gray-700 mb-6">
        Explore insightful articles about learning new web technologies with
        Remix. Whether you{"'"}re just starting out or deepening your expertise,
        you{"'"}ll find useful resources to guide your journey.
      </p>
      <div>
        <Link
          to="/articles"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          Browse Articles
        </Link>
      </div>
    </main>
  );
}
