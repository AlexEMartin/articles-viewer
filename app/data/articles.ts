export interface Article {
  id: string;
  title: string;
  author: string;
  summary: string;
  content: string;
  publishedDate: string;
}

export const articles: Article[] = [
  {
    id: "1",
    title: "Understanding Server-Side Rendering",
    author: "Jane Doe",
    summary: "A brief overview of SSR benefits.",
    content: "Full content of the SSR article...",
    publishedDate: "2025-01-15",
  },
  {
    id: "2",
    title: "The Rise of Utility-First CSS",
    author: "John Smith",
    summary: "Exploring frameworks like Tailwind CSS.",
    content: "Full content of the Utility-First CSS article...",
    publishedDate: "2025-02-10",
  },
  {
    id: "3",
    title: "Modern JavaScript Frameworks in 2025",
    author: "Alice Green",
    summary: "A look at the current landscape.",
    content: "Full content of the Modern JavaScript Frameworks article...",
    publishedDate: "2025-03-20",
  },
];
