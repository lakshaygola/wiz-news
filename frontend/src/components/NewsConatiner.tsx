import NewsCard from "./NewsCard";

interface News {
    imageUrl: string;
    title: string;
    description: string;
    publishedAt: Date;
};


export default function NewsContainer ({topNews}){
    return (
        <div className="news-card-container flex justify-between flex-wrap w-3/4 m-auto">
            {topNews.map((news: News) => <NewsCard 
                                imageUrl={news.imageUrl} 
                                title={news.title}
                                description={news.description}
                                publishedAt={news.publishedAt} 
                                />
            )}
        </div>
    );
}