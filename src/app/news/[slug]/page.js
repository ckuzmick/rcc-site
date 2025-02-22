// import styles from "@/styles/Article.module.css";
import fetchNews from "@/utils/news";

export async function generateStaticParams() {
    const news = await fetchNews();

    const slugs = news.map((article) => ({
        slug: article.slug || null,
    }));

    return slugs;
}

export async function generateMetadata({ params: paramsPromise }) {
    const news = await fetchNews();

    const params = await paramsPromise;

    return {
        title: news.find((a) => a.slug === params.slug).title,
    };
}

export default async function Page({ params }) {
    const { slug } = await params;
    const news = await fetchNews();
    const article = news.find((a) => a.slug === slug);
    const pars = article.body?.split("\n");

    return (
        <main>
            <h1>{article.title}</h1>
            <p>{article.date}</p>
            <p>{article.author}</p>
            <ul>
                {/* {pars.map((par) => (
                    <li>{par}</li>
                ))} */}
            </ul>
        </main>
    );
}