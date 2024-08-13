import { newsAtomFamily } from "../store/atom/newsAtom";
import { useRecoilValue } from "recoil";
import { NewsContainer } from "../components/NewsConatiner";
import { NoNews } from "../components/NoNews";


export default function Politics() {
    const categoryNews = useRecoilValue(newsAtomFamily(`${import.meta.env.VITE_BACKEND_URL}news/top-news?category=politics&q=politics`));

    if (categoryNews.length !== 0) {
        console.log("Got the news to show");
        return (
        <NewsContainer 
        fetchedNews={categoryNews}/>);
    }else {
        return (
            <NoNews />
        );
    }    
}