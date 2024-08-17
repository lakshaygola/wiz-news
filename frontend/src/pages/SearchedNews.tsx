import { useRecoilValue } from "recoil";
import { newsAtomFamily } from "../store/atom/newsAtom";
import { NewsContainer } from "../components/NewsConatiner";
import { searchedAtom } from "../store/atom/searchedAtom";
import { useNavigate } from "react-router-dom";


export default function SearchedNews() {
    const searched = useRecoilValue(searchedAtom);
    const navigate = useNavigate();
    const newsUrl = `${import.meta.env.VITE_BACKEND_URL}/news/searched/news?q=${searched}`;
    if (searched === ""){
        navigate("/")
    }
    const searchedNews = useRecoilValue(newsAtomFamily(newsUrl));

    return (
        <NewsContainer 
        fetchedNews={searchedNews}/>
    );
}