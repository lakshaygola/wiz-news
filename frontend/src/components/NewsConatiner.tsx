import { useRecoilValue } from "recoil";
import NewsCard from "./NewsCard";
import { trendingNewsAtom } from "../store/atom/trendingNewsAtom";

interface News {
    imageUrl: string;
    title: string;
    description: string;
    publishedAt: Date;
    author: string;
}


export default function NewsContainer (){
    const topNews = useRecoilValue(trendingNewsAtom);

    console.log(topNews);
    return (
        <div className="news-card-container flex justify-between flex-wrap w-3/4 my-10< mx-auto">
            {topNews.map((news: News) => <NewsCard 
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