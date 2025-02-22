import fetchNews from "@/utils/news";
import Link from "next/link";

export default async function NewsPage() {
    const news = await fetchNews();

    return (
        <main>
            <h1>News</h1>
            <ul>
                {news.map((article) => (
                    <Link href={`/news/${article.slug}`}>
                        <li key={article.title}>
                            <h2>{article.title}</h2>
                            <p>{article.date}</p>
                            <p>{article.author}</p>
                            <p>{article.content}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </main>
    );
}