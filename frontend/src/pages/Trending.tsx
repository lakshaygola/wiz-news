import NewsContainer from "../components/NewsConatiner";
import { categoryNewsAtomFamily } from "../store/atom/categoryNewsAtom";
import { useRecoilValue } from "recoil";
import { Suspense } from "react";


export default function Trending (){
    const categoryNews = useRecoilValue(categoryNewsAtomFamily("http://localhost:3000/api/v1/news/category/top-news?category=technology"));
    console.log(categoryNews);

    return (
        <Suspense fallback={"loading"}>
            <NewsContainer 
            fetchedNews={categoryNews}/>
        </Suspense>
    );
}