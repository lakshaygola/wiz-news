import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";


export const newsAtomFamily = atomFamily({
    key: "newsAtomFamily",
    default: selectorFamily({
        key: "newsSelectorFamily",
        get: (url: string) => async () => {
            const response =  await axios({
                url: url,
                method: "get"
            });
            
            if (response.status === 200) {
                if ("articles" in response.data.data) {
                    return (response.data.data.articles);
                }else {
                    return (response.data.data.sources);
                }
            }
            return [];
        }
    })
})


