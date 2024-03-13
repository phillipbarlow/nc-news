import { Routes, Route, Link} from 'react-router-dom';
export default function ArticleCard({item}){
    return(
        <Link to={`/articles/${item.article_id}`}>
        <section className="article-card">
            <div className="img-card">
                <img src={item.article_img_url} alt={`Describing ${item.topic}`}/>   
            </div>
            <div className="content-card">
                <p>{item.title}</p>
                <p>{item.body}</p>
                <p>{item.topic}</p>
                <p>Created: {item.created_at}</p>
                <p>Total votes: {item.votes}</p>
                <p>Total comments: {item.comment_count}</p>
            </div>
            <div className="button-card">
                <button>+</button>
                <button>-</button>
            </div>
        </section>
        </Link>
    )
}