import axios from "axios";
import { atomFamily, selectorFamily } from "recoil";


export const categoryNewsAtomFamily = atomFamily({
    key: "categoryNewsAtomFamily",
    default: selectorFamily({
        key: "categoryNewsSelectorFamily",
        get: url => async ({ get }) => {

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


