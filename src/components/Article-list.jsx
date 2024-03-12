import { useEffect, useState } from "react"
import { getArticle } from "../../utils/api"
import ArticleCard from "./Article-card";
export default function ArticleList(){
    const [articles,setArticles] = useState([]);

    useEffect(()=>{
      getArticle()
      .then((data)=>{
        setArticles(data)
      })
    },[articles])

    return(
        <section className="article-main">
            <ul className="article-list">
                {articles.map(item =>{
                    console.log(item)
                    return(
                        <ArticleCard item={item}/>
                    )
                })}
            </ul>
        </section>
    )
}