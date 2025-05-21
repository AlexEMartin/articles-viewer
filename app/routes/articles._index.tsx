// app/routes/_index.tsx
import { LoaderFunction } from "@remix-run/node";
import { useLoaderData, Link, data } from "@remix-run/react";
import { articles, Article } from "~/data/articles";

export const loader: LoaderFunction = () => {
  return data(articles);
};

export default function Index() {
  const data = useLoaderData<Article[]>();

  return (
    <main className="max-w-3xl mt-20 mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Articles</h1>
      <ul className="space-y-6">
        {data.map((article) => (
          <li
            key={article.id}
            className="p-4 border rounded-lg shadow hover:shadow-md transition"
          >
            <h2 className="text-xl font-semibold text-blue-600 hover:underline">
              <Link to={`/articles/${article.id}`}>{article.title}</Link>
            </h2>
            <p className="text-gray-700 mt-1">{article.summary}</p>
            <p className="text-sm text-gray-500 mt-2">
              By {article.author} on {article.publishedDate}
            </p>
          </li>
        ))}
      </ul>
    </main>
  );
}
