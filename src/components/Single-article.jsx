import { useEffect, useState } from "react";
import { getSingleArticleByID, getAllArticlesComments, patchVotes} from "../../utils/api";
import CommentCard from "./Comment-card";
import { useParams } from 'react-router-dom';
import PostComment from "./Post-comment";
import '@fortawesome/fontawesome-free/css/all.min.css';

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
        },[article_id, setComments])
      
      if(!isLoaded){
        return(
            <p>Loading comments!</p>
        )
    }else{
        return(
            <section className="article-container">
                        <h2 className="article-title">{article.title}</h2>
                        <img src={article.article_img_url} alt={`Description of ${article.title}`}/>
                        <p className="articleBody">{article.body}</p>
                        <p>Created at: {article.created_at}</p>
                        <p>Comment count: {article.comment_count}</p>
                        <section className="button-container">
                            <button onClick={()=>{handleBtn(1)}} className="comment-count-btn">
                                <i className='fas fa-angle-up'></i></button>
                                <div className="count-preview">{buttonCount}</div>
                            <button onClick={()=>{handleBtn(-1)}} className="comment-count-btn"><i className='fas fa-angle-down'></i></button>
                        </section>
                           <a href="#textfield" className="comment-btn"><button className="comment-btn"><i className='far fa-comment-alt'></i>Comment</button></a>
            <CommentCard comments={comments} setComments={setComments}/>
            <PostComment setComments={setComments}/>
            </section>
        )
    }
}