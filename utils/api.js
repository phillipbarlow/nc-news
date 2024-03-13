import axios from 'axios';
const philNewsAPI = axios.create({
    baseURL:'https://nc-project-wk.onrender.com/api'
})

export const getArticles = ()=>{
    return(
        philNewsAPI.get("/articles")
        .then((result)=>{
            return result.data
        })
        .catch((err)=>{
            console.log(err)
        })
    )
}

export const getSingleArticleByID = (article_id) =>{
    return(
        philNewsAPI.get(`/articles/${article_id}`)
        .then((result)=>{
            return result.data
        })
        .catch((err)=>{
            console.log(err)
        })
    )
}

export const getAllArticlesComments = (article_id)=>{
    console.log('hi')
    return(
        philNewsAPI.get(`/articles/${article_id}/comments`)
        .then((result)=>{
            return result.data
        })
        .catch((err)=>{
            console.log(err)
        })
    )
}