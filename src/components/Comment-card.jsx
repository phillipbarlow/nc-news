import { useParams } from 'react-router-dom';
import {deleteComment} from '../../utils/api'
import { useEffect, useContext, useState } from 'react';
import { UserContext } from '../contexts/User';


export default function CommentCard(props){
const { article_id } = useParams();
const {isError,setIsError} = useState(false)
const {loggedInUser,setLoggedInUser} = useContext(UserContext);
const loggedUser = loggedInUser.username

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
                <li key={data.comment_id} className="single-comment" >{isError?<p>Error</p>:null}{data.article_id === Number(article_id)?
                    <>
                    <section className='comment-title-container'>
                        <section className='comment-author'>Author: {data.author}</section>
                        <section className='created-title'>Created: {data.created_at}</section>
                    </section>
                    <section className='comment-bodyTxt'>{data.body}</section>
    
                </>
                :null}
                <button onClick={()=>{handleBtn(data)}} className='delete-btn' style={{ display: data.author !== loggedUser ? 'none' : 'block' }}>Delete</button></li>
            )
        })}
     </section>
        </>
    )
}