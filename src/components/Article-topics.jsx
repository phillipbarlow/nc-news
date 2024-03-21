import { Routes, Route } from 'react-router-dom';
import { useParams, useLocation,useSearchParams } from 'react-router-dom';
import {getCurrentTopic} from '../../utils/api';
import {useState, useEffect } from "react";

export default function RelatedArticleTopic(){
    const {topic} = useParams();
    const [relatedArticles,setRelatedArticles] = useState([]);
    useEffect(()=>{
        getCurrentTopic(topic)
        .then((result)=>{
            setRelatedArticles(result)
        })
    },[topic])

    return(
        <ul>
            {relatedArticles.map(article=>{
                return(
                    <li key={article.article_id}>
                        <p>{article.author}</p>
                        <p>{article.title}</p>
                        <p>{article.created_at}</p>
                    </li>
                )
            })}
        </ul>
    )
}
