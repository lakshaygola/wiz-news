import { useRecoilValue } from "recoil";
import { newsAtomFamily } from "../store/atom/newsAtom";
import NewsContainer from "../components/NewsConatiner";


export default function Home(){
    const fetchedNews = useRecoilValue(newsAtomFamily(`${import.meta.env.VITE_BACKEND_URL}news/top-news`));

    return (
        <NewsContainer 
        fetchedNews={fetchedNews}/>
    );
}