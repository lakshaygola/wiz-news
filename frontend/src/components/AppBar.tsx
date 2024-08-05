import WizNewsLogo from "../assets/wiz-news-header-logo.png";

export default function AppBar() {
    return (
        <div className="app-bar h-14 bg-red-500 mb-3 flex justify-between items-center">
            <div className="left-app-bar flex items-center">
                <img src={WizNewsLogo} alt="Wiz News Logo" className="logo w-14 h-14 ml-8 mr-8 object-cover"/>
                <div className="news-bar hidden lg:flex">
                    <ul className="news-bar-list flex gap-6">
                        <li className="hover:text-white transition ease-in delay-150 p-1">Home</li>
                        <li className="hover:text-white transition ease-in delay-150 flex items-center p-1">India 
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        </li>
                        <li className="hover:text-white transition ease-in delay-150 p-1">
                            Treading
                        </li>
                        <li className="hover:text-white transition ease-in delay-150 p-1">Business & Money</li>
                        <li className="hover:text-white transition ease-in delay-150 p-1">Sports</li>
                        <li className="hover:text-white transition ease-in delay-150 p-1">Politics</li>
                        <li className="hover:text-white transition ease-in delay-150 p-1">Science</li>
                    </ul>
                </div>
            </div>
            <div className="right-app-bar flex gap-6 mr-6 h-14 items-center">
                <input placeholder="Search" className="hidden xl:inline rounded-md p-2.5 border-none h-8 w-64"/>
                <div className="visible flex xl:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </div>
                <div className="visible flex lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </div>
                <ul className="hidden lg:flex items-center gap-4 text-white">
                    <li className="hover:text-black transition ease-in-out delay-150">Subscribe</li>
                    <li className="hover:text-black transition ease-in-out delay-150">Sign up</li>
                </ul>
            </div>
        </div>
    );
}