import { useParams } from 'react-router-dom';
import {deleteComment} from '../../utils/api'
import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../contexts/User';


export default function CommentCard(props){
const { article_id } = useParams();
const {isError,setIsError} = useState(false)
const {loggedInUser,setLoggedInUser} = useContext(UserContext);
const loggedUser = loggedInUser.username
// console.log(props)


    function handleBtn(event){
    if(loggedUser === event.author){
        deleteComment(event.comment_id)
        .then((response)=>{
            props.setComments((current)=>{
                const filtered = current.filter(comment => comment.comment_id !== event.comment_id)
                const newComments = [...filtered]
                return newComments
            })
            return response.data
        }).catch((err)=>{
            if(err){
                setIsError(true)
            }
        })
    }
    }
    return(
        <>
        <section className="comments-field">
        {props.comments.map(data=>{
            return(
                <li key={data.comment_id} className="single-comment" >{isError?<p>Error</p>:null}{data.article_id === Number(article_id)?data.body:null}<button onClick={()=>{handleBtn(data)}}>Delete</button></li>
            )
        })}
     </section>
        </>
    )
}