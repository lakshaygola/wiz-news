import { newsAtomFamily } from "../store/atom/newsAtom";
import { useRecoilValue } from "recoil";
import { NewsContainer } from "../components/NewsConatiner";


export default function Business (){
    const categoryNews = useRecoilValue(newsAtomFamily(`${import.meta.env.VITE_BACKEND_URL}news/top-news?category=business&q=business`));
    return (
        <NewsContainer 
        fetchedNews={categoryNews}/>
    );
}