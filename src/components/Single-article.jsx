import { useEffect, useState } from "react";
import { getSingleArticleByID, getAllArticlesComments} from "../../utils/api";
import CommentCard from "./Comment-card";
import { useParams } from 'react-router-dom';

export default function SingleArticle(){
    const [article,setArticle] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false);
    const [comments,setComments] = useState([])
    const { article_id } = useParams();
    useEffect(()=>{
        getSingleArticleByID(article_id)
        .then((data)=>{
            console.log(data,'--single article')
            setArticle(data)
            setIsLoaded(true)
        })
      },[article_id])
      useEffect(()=>{
          getAllArticlesComments(article_id)
          .then((data)=>{
              setComments(data)
            })
        },[article_id])
      
      if(!isLoaded){
        return(
            <p>Loading comments!</p>
        )
    }else{
        return(
            <>
            <section className="article-container">
                {article.map(item=>{
                    return(
                    <section className="single-article" key={item.article_id}>
                        <h2>{item.title}</h2>
                        <img src={item.article_img_url} alt={`Description of ${item.title}`}/>
                        <p>Created by: {item.author}</p>
                        <p>{item.body}</p>
                        <p>Created at: {item.created_at}</p>
                        <p>Total Votes: {item.votes}</p>
                        <p>Comment count: {item.comment_count}</p>
                    </section>
                    )
                })}
            </section>
            <CommentCard comments={comments} />
            </>
        )
    }
}