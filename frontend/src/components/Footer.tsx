import WizNewsLogo from "../assets/wiz-news-header-logo.png";

export default function Footer() {
    return (
        <div className="bg-zinc-700 flex flex-col items-center justify-around p-10 lg:flex-row gap-4">
            <div className="left-footer-section">
                <img src={WizNewsLogo} className="w-32 h-32"/>
            </div>
            <div className="middle-footer-section">
                <ul className="flex flex-col items-center gap-3 text-white">
                    <li>Contact</li>
                    <li>Terms & conditions</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="right-footer-section">
                <ul className="flex flex-col items-center gap-3 text-white">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Email</li>
                </ul>
            </div>
        </div>
    );
}