import { Routes, Route, Link} from 'react-router-dom';
export default function ArticleCard({item}){
    return(
        <section className='article-wrapper'>
            <section className="article-card">
                <Link to={`/article/${item.article_id}`}>
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
                </Link>
                <div className="button-card">
                    <button>+</button>
                    <button>-</button>
                </div>
            </section>
        </section>
    )
}