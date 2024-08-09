import NewsCard from "./NewsCard";

interface News {
    imageUrl: string;
    title: string;
    description: string;
    publishedAt: Date;
    author: string;
}

interface Index {
    index: number
}


export default function NewsContainer ({fetchedNews}){
    return (
        <div className="news-card-container flex justify-between flex-wrap w-3/4 my-12 mx-auto">
            {fetchedNews.map((news: News, index: Index) => <NewsCard
                                key={index}
                                imageUrl={news.imageUrl}
                                title={news.title}
                                description={news.description}
                                publishedAt={news.publishedAt}
                                author={news.author}
                                />
            )}
        </div>
    );
}