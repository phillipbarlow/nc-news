import { Routes, Route, Link} from 'react-router-dom';

export default function ArticleCard({item}){
    // console.log(item)
    return(
            <section className="article-card">
                <Link to={`/article/${item.article_id}`} style={{ textDecoration: 'none' }}>
                <div className="img-card">
                    <img src={item.article_img_url} alt={`Describing ${item.topic}`}/>   
                </div>
                <div className="cardcontent">
                    <p className='articleCard-title'>{item.title}</p>
                    <p className='articleTopic-title'>Topic: {item.topic}</p>
                    <p className='articleVotes-title'>Votes: {item.votes}</p>
                    <p className='articleComments-title'>Comments: {item.comment_count}</p>
                    <p className='articleAuthor-title'>Author: {item.author}</p>
                    <p className='articeCreatedBy-title'>Created: {item.created_at}</p>
                </div>
                </Link>
            </section>
    )
}