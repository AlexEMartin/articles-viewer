// app/routes/articles/$articleId.tsx
import { LoaderFunction, data } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
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
    <main className="max-w-2xl mt-20 mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{article.title}</h1>
      <p className="text-gray-600 mb-6">
        <strong>{article.author}</strong> – {article.publishedDate}
      </p>
      <article className="prose">
        <p>{article.content}</p>
      </article>
    </main>
  );
}
