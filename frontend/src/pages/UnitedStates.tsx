import { NewsContainer } from "../components/NewsConatiner";
import { useRecoilValue } from "recoil";
import { newsAtomFamily } from "../store/atom/newsAtom";


export default function UnitedStates() {
    const categoryNews = useRecoilValue(newsAtomFamily(`${import.meta.env.VITE_BACKEND_URL}news/country/headlines?country=us`));
    return (
        <NewsContainer 
        fetchedNews={categoryNews}/>
    );
}