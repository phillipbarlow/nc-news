import { useParams } from 'react-router-dom';
import {postComment} from '../../utils/api';
import {useState,useContext } from "react"
import {UserContext} from "../contexts/User";

export default function PostComment({setComments}){
    const { article_id } = useParams();
    const [username,setUserName] = useState("")
    const [textField, setTextField] = useState("")
    const [isPosted,setIsPosted] = useState(false)
    const {loggedInUser,setLoggedInUser} = useContext(UserContext);

    function handleSubmit(event){
    event.preventDefault();   

    const postObject = {
        username: loggedInUser.username ,body: textField}

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
            {isPosted?<h2>posted!</h2>:null}
            
            <textarea name="textfield" cols="30" rows="10" onChange={(event)=>{
                setTextField(event.target.value)}} id="textfield" value={textField} required>
            </textarea>
            
            <button type="submit" className='submit-btn'>Submit!</button>
        </form>
        </div>
    )
}