import { atom, selector } from "recoil";
import axios from "axios"

export const signinAtom = atom({
    key: "signinAtom",
    default: selector({
        key: "signinSelector",
        get: async () => {
            try{
                const response = await axios({
                    method: "get",
                    url: `${import.meta.env.VITE_BACKEND_URL}user/is-signin`,
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("access-token")}`
                    }
                });
                if(response.status === 200){
                    return true;
                }else {
                    return false;
                }
            } catch (e) {
                return false;
            }
        }
    })
});

