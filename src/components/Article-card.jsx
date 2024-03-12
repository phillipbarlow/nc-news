export default function ArticleCard({item}){
    return(
        <section className="article-card">
            <div className="img-card">
                <img src={item.article_img_url} alt={`Describing ${item.topic}`}/>   
            </div>
            <div className="content-card">
                <p>{item.article_id}</p>
                <p>{item.title}</p>
                <p>{item.body}</p>
                <p>{item.topic}</p>
                <p>{item.created_at}</p>
                <p>{item.votes}</p>
                <p>{item.comment_count}</p>
            </div>
            <div className="button-card">
                <button>+</button>
                <button>-</button>
            </div>
        </section>
    )
}