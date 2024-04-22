import { useEffect, useState } from "react"
import { getArticles } from "../../utils/api"
import ArticleCard from "./Article-card";

import * as React from 'react';


export default function ArticleList(){
    const [articles,setArticles] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false);

    useEffect(()=>{
      getArticles()
      .then((data)=>{
        setArticles(data)
        setIsLoaded(true)
      })
    },[articles])

    if(!isLoaded){
        return(
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        )
    }else{
        return(
        <ul className="article-list">
            {articles.map(item =>{
                return(
                <ArticleCard item={item} key={item.article_id}/>
                )
            })}
        </ul>
        )
    }
}