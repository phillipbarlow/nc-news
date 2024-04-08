import { useParams } from 'react-router-dom';
import {postComment} from '../../utils/api';
import {useState } from "react"

export default function PostComment({setComments}){
    const { article_id } = useParams();
    const [username,setUserName] = useState("")
    const [textField, setTextField] = useState("")
    const [isPosted,setIsPosted] = useState(false)

    function handleSubmit(event){
    event.preventDefault();   

    const postObject = {
        username: username ,body: textField}

    postComment(article_id,postObject)
    .then((data)=>{
        setIsPosted(true)
        setComments((current)=>{
            const newObj = [...data,...current]
            return newObj
        });
        setUserName("");
        setTextField("");
    })
        }            
    return(
        <div className="form-container">
        <h2>Post comment</h2>
        <form onSubmit={(event)=>{
            handleSubmit(event)
        }}
        >
            <label htmlFor="username">Username</label>
            <input type="text" value={username} onChange={(event)=>{
                setUserName(event.target.value)}}  id='username' required/>
            <textarea name="textfield" cols="30" rows="10" onChange={(event)=>{
                setTextField(event.target.value)}} id="textfield" value={textField} required></textarea>
            {isPosted?<h2>posted!</h2>:null}
            <button type="submit" className='submit-btn'>Submit!</button>
        </form>
        </div>
    )
}