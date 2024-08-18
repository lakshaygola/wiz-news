import NewsCard from "./NewsCard";

interface News {
    imageUrl: string;
    title: string;
    description: string;
    publishedAt: string;
    author: string;
    url: string;
}


export const NewsContainer = ({ fetchedNews }: { fetchedNews: News[]}) =>{
    return (
    <div className="news-card-container flex justify-between flex-wrap w-3/4 min-h-screen my-12 mx-auto">
        {fetchedNews.map((news, index) => <NewsCard
                            key={index}
                            imageUrl={news.imageUrl}
                            title={news.title}
                            description={news.description}
                            publishedAt={news.publishedAt}
                            author={news.author}
                            url={news.url}
                            />
        )}
        </div>
    );
}