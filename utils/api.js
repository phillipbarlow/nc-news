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

export const patchVotes = (article_id,obj) =>{
    return(
        philNewsAPI.patch(`/articles/${article_id}`,obj)
        .then((result)=>{
            return result.data;
        })
    )
}

export const postComment = (article_id,obj)=>{
    return(
        philNewsAPI.post(`/articles/${article_id}/comments`,obj)
        .then((result)=>{
            return result.data
        })
        .catch((err)=>{
            console.log(err)
        })
    )
}

export const getAllUsers = () =>{
    return(
        philNewsAPI.get('/users')
        .then((result)=>{
            // console.log(result.data)
            return result.data
        })
    )
}

export const deleteComment = (comment_id) =>{
    return(
        philNewsAPI.delete(`/comments/${comment_id}`)
        .then((result)=>{
            return result.data
        })
    )
}

export const getAllTopics = ()=>{
    return(
        philNewsAPI.get('/topics')
        .then((result)=>{
            return result.data
        })
    )
}

export const getCurrentTopic = (topic) =>{
    return(
        philNewsAPI.get(`/articles?topic=${topic}`)
        .then((result)=>{
            return result.data
        })
    )
}