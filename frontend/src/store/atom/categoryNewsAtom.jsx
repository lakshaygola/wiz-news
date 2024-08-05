import axios from "axios";
import { atom, selector } from "recoil";


export const categoryNewsAtom = atom({
    key: "categoryNewsAtom",
    default: selector({
        key: "categoryNewsSelector",
        get: ( async () => {
            const response = await axios("http://localhost:3000/api/v1/news/category/top-news");
            return (response.data.data.articles);
        })
    })
})


