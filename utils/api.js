import axios from 'axios';
const philNewsAPI = axios.create({
    baseURL:'https://nc-project-wk.onrender.com/api'
})

export const getArticle = ()=>{
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