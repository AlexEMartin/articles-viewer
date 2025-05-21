import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";

export const links: LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <meta httpEquiv="refresh" content="3;url=/" />
      <main className="max-w-xl mx-auto mt-24 p-6 text-center animate-fadeIn">
        <div className="mb-6">
          <svg
            className="mx-auto h-20 w-20 text-blue-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.75 9.75h28.5v28.5H9.75z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 16l16 16m0-16L16 32"
            />
          </svg>
        </div>

        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          404 – Something Went Wrong
        </h1>

        <p className="text-lg text-gray-600 mb-2">
          Oops, we couldn’t load this page properly.
        </p>

        <p className="text-sm text-gray-500 mb-6">
          You’ll be redirected to the homepage in a few seconds.
        </p>

        <Link
          to="/"
          className="inline-block bg-blue-600 text-white px-6 py-2 text-sm rounded-full hover:bg-blue-700 transition duration-300"
        >
          Go back now
        </Link>
      </main>
    </>
  );
}
