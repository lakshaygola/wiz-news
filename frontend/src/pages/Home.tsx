import NewsContainer from "../components/NewsConatiner";
import { useRecoilValue } from "recoil";
import { categoryNewsAtomFamily } from "../store/atom/categoryNewsAtom";
import { Suspense } from "react";


export default function Home(){
    const fetchedNews = useRecoilValue(categoryNewsAtomFamily("http://localhost:3000/api/v1/news/top-headlines/all"));
    console.log(fetchedNews);

    return (
        <Suspense fallback={"loading.."}>
            <NewsContainer 
            fetchedNews={fetchedNews}/>
        </Suspense>
    );
}