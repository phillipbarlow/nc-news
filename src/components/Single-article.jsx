import { useEffect, useState } from "react";
import { getSingleArticleByID, getAllArticlesComments, patchVotes} from "../../utils/api";
import CommentCard from "./Comment-card";
import { useParams } from 'react-router-dom';

export default function SingleArticle(){
    const [article,setArticle] = useState({});
    const [isLoaded,setIsLoaded] = useState(false);
    const [comments,setComments] = useState([])
    const { article_id } = useParams();
    const [buttonCount, setButtonCount] = useState(0)

    function handleBtn(num){
    setButtonCount((currentCount)=>{return currentCount + num})
    patchVotes(article_id,{inc_votes:num})
    .catch((err)=>{
        if(err){
            setButtonCount((currentCount)=>{return currentCount - num})
        }
    })
    }

    useEffect(()=>{
        getSingleArticleByID(article_id)
        .then((data)=>{
            setArticle(data[0])
            setIsLoaded(true)
            setButtonCount(data[0].votes)
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
            <section className="single-article" key={article.article_id}>
                        <h2>{article.title}</h2>
                        <img src={article.article_img_url} alt={`Description of ${article.title}`}/>
                        <p>Created by: {article.author}</p>
                        <p>{article.body}</p>
                        <p>Created at: {article.created_at}</p>
                        {<p>Total Votes:{buttonCount}</p>}
                        <p>Comment count: {article.comment_count}</p>
                        <section className="button-container">
                            <button onClick={()=>{handleBtn(1)}}>+</button>
                            <button onClick={()=>{handleBtn(-1)}}>-</button>
                        </section>
                    </section> 
            </section>
            <CommentCard comments={comments} />
            </>
        )
    }
}