import { Link } from "react-router-dom";

export default function FormWarning({warning, redirectLink, toLink}: any) {
    return (
        <div className="flex gap-1">
            <p className="text-gray-50 text-sm">{warning}</p>
            <Link to={toLink} className="text-gray-50 underline text-sm">{redirectLink}</Link>
        </div>
    );
}