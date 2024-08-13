import { Link } from "react-router-dom";

export default function NewsCard(props){

    return (
        <div className="news-card bg-slate-100 flex flex-col w-80 py-3 flex-grow-1 rounded mb-6 transition ease-in-out hover:scale-105">
            <Link to={props.url}>
            <div className="h-52 w-full">
                <img src={props.imageUrl} alt="image"  className="object-fill min-h-675 min-w-1200"/>
            </div>
            <div className="news-heading font-serif text-left px-2 py-2 font-semibold">{props.title}</div>
            <div className="news-description font-serif text-left px-2 text-sm h-20 truncate">{props.description}</div>
            <div className="news-author text-xs text-gray-700 p-2">{props.author}  |  {props.publishedAt}</div>
            </Link>
        </div>
    );
}