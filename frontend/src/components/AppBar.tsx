import WizNewsLogo from "../assets/wiz-news-header-logo.png"

export default function AppBar() {
    return (
        <div className="app-bar h-14 bg-rose-500 mb-3 flex justify-between items-center">
            <img src={WizNewsLogo} alt="Wiz News Logo" className="logo w-14 h-14 ml-6"/>
            <div className="header-search-bar flex gap-6 mr-6 h-14 items-center">
                <input placeholder="Search" className="rounded-md p-2.5 border-none h-6 w-64"/>
                <ul className="flex items-center gap-4 text-white">
                    <li className="hover:text-black transition ease-in-out delay-150">Subscribe</li>
                    <li className="hover:text-black transition ease-in-out delay-150">Sign up</li>
                </ul>
            </div>
        </div>
    );
}