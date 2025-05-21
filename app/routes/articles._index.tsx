import { LoaderFunction } from "@remix-run/node";
import { useLoaderData, Link, data } from "@remix-run/react";
import BackButton from "~/components/BackButton";
import { articles, Article } from "~/data/articles";

export const loader: LoaderFunction = () => {
  return data(articles);
};

export default function ArticlesList() {
  const data = useLoaderData<Article[]>();

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4 py-20">
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
          Explore Our Latest <span className="text-blue-600">Articles</span>
        </h1>

        <ul className="space-y-6">
          {data.map((article) => (
            <li
              key={article.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 ring-1 ring-gray-200"
            >
              <h2 className="text-2xl font-semibold text-blue-600 hover:underline mb-2">
                <Link to={`/articles/${article.id}`}>{article.title}</Link>
              </h2>
              <p className="text-gray-700 mb-2">{article.summary}</p>
              <p className="text-sm text-gray-500">By {article.author}</p>
            </li>
          ))}
        </ul>
      </section>

      <div className="fixed bottom-6 left-6">
        <BackButton />
      </div>
    </main>
  );
}
