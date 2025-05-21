import { LoaderFunction, data } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import BackButton from "~/components/BackButton";
import { articles, Article } from "~/data/articles";

export const loader: LoaderFunction = ({ params }) => {
  const article = articles.find((a) => a.id === params.articleId);
  if (!article) {
    throw new Response("Article Not Found", { status: 404 });
  }
  return data(article);
};

export default function ArticleView() {
  const article = useLoaderData<Article>();

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white px-4 py-20">
      <section className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 relative">
        <div className="mb-8 rounded-lg overflow-hidden shadow-md">
          <img
            src="/software-dev.jpg"
            alt="Technology article cover"
            className="w-full h-72 object-cover"
          />
        </div>

        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          {article.title}
        </h1>
        <p className="text-sm text-gray-500 mb-8">
          By <span className="font-medium text-gray-700">{article.author}</span>{" "}
          · <span>{article.publishedDate}</span>
        </p>

        <article className="prose prose-lg prose-blue max-w-none mb-10">
          <p>{article.content}</p>
        </article>

        <div className="fixed bottom-6 left-6">
          <BackButton />
        </div>
      </section>
    </main>
  );
}
