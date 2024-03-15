import { useEffect, useState, useContext } from "react";
import {getAllUsers} from '../../utils/api';
import {UserContext} from "../contexts/User";


export default function Users(){
    const {loggedInUser,setLoggedInUser} = useContext(UserContext);
    const [login,setLogin] = useState();
    const [isAuthorised, setIsAuthorised] = useState(false);
    function handleSubmit(event){
        event.preventDefault(); 
        setLoggedInUser((currentLogin)=>{
            const newUser = {...currentLogin, username:login}
            return newUser;
        })
    }

    useEffect(()=>{
    },[loggedInUser])

    return(
        <>
        <form onSubmit={(event)=>{
            handleSubmit(event)
        }}
        >
            <label htmlFor="login">User Login!</label>
            <input type="text" onChange={(event)=>{setLogin(event.target.value)}}/>
            <button type="submit">Submit!</button>
        </form>
        </>
    )
}