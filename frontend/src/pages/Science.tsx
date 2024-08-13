import { newsAtomFamily } from "../store/atom/newsAtom";
import { useRecoilValue } from "recoil";
import { NewsContainer } from "../components/NewsConatiner";


export default function Science() {
    const categoryNews = useRecoilValue(newsAtomFamily(`${import.meta.env.VITE_BACKEND_URL}news/top-news?category=science&q=science`));
    
    return (
        <NewsContainer 
        fetchedNews={categoryNews}/>
    );
}