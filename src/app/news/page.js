// app/news/page.js
import fetchNews from "@/utils/news";
import Link from "next/link";

export default async function NewsPage() {
  const news = await fetchNews();

  return (
    <main>
      <h1>News</h1>
      <ul>
        {news.map((article) => (
          <li key={article.slug}>
            <Link href={`/news/${article.slug}`}>
              <h2>{article.title}</h2>
            </Link>
            <p>{article.date}</p>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
