
export default function NewsCard(props) {
    return (
        <div className="news-card bg-slate-100 flex flex-col w-80 py-3 flex-grow-1 rounded mb-6 transition ease-in-out hover:scale-105">
            <img src={props.imageUrl} alt=""  className="object-fill min-h-675 min-w-1200"/>
            <div className="news-heading font-serif text-left px-2 pb-2 font-semibold">{props.title}</div>
            <div className="news-description font-serif text-left px-2 text-sm">{props.description}</div>
        </div>
    );
}