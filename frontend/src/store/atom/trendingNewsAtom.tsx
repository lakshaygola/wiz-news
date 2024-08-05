import axios from "axios";
import { atom, selector } from "recoil";


export const trendingNewsAtom = atom({
    key: "trendingNewsAtom",
    default: selector({
        key: "tredingNewsSelector",
        get: ( async () => {
            const response = await axios("http://localhost:3000/api/v1/news/top-headlines/all");
            console.log(response);
            return (response.data.data.articles);
        })
    })
})


