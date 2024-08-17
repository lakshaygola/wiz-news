import { NewsContainer } from "../components/NewsConatiner";
import { useRecoilValue } from "recoil";
import { newsAtomFamily } from "../store/atom/newsAtom";


export default function Australia() {
    const categoryNews = useRecoilValue(newsAtomFamily(`${import.meta.env.VITE_BACKEND_URL}news/country/headlines?country=au`));
    return (
        <NewsContainer 
        fetchedNews={categoryNews}/>
    );
}