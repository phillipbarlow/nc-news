import { useEffect, useState } from "react"
import { getArticles } from "../../utils/api"
import ArticleCard from "./Article-card";

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

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
            <p>Loading articles!</p>
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