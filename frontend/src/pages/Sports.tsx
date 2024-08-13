import { newsAtomFamily } from "../store/atom/newsAtom";
import { useRecoilValue } from "recoil";
import { NewsContainer } from "../components/NewsConatiner";


export default function Sports() {
    const categoryNews = useRecoilValue(newsAtomFamily(`${import.meta.env.VITE_BACKEND_URL}news/top-news?category=sports&q=sports`));
    
    return (
        <NewsContainer 
        fetchedNews={categoryNews}/>
    );
}