import { useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { searchedAtom } from "../store/atom/searchedAtom";


export default function SearchBar() {
    const setSearched = useSetRecoilState(searchedAtom);
    const searched = useRecoilValue(searchedAtom);
    const navigate = useNavigate();

    function captureSearchedValue(e) {
        setSearched(e.target.value);
    }

    function searchNews(e) {
        if (e.key === "Enter") {
            if (searched !== ""){
                navigate("/searched/headlines");
            }
        }
    }

    return (
        <div>
            <input placeholder="Search" className="hidden xl:inline rounded-md p-2.5 border-none h-8 w-64" onChange={captureSearchedValue} onKeyDown={searchNews}/>
            <div className="visible flex xl:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
            </div>
        </div>
    );
}