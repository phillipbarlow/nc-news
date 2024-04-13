import { useEffect, useState, useContext } from "react";
import {getAllUsers} from '../../utils/api';
import {UserContext} from "../contexts/User";


export default function Users(){
    const {loggedInUser,setLoggedInUser} = useContext(UserContext);
    const [login,setLogin] = useState();
    const [users,setUsers] = useState();
    const [userName, setUserName] = useState(false);
    const[isLoaded,setIsLoaded] = useState(false);

    function handleSubmit(event){
        event.preventDefault(); 
        setLoggedInUser((currentLogin)=>{
            const newUser = {...currentLogin, ...targetsValues[0]}
            return newUser;
        })
        const splitName = event.target.className.split('-')
        const targetName = `${splitName[0].charAt(0).toUpperCase() + splitName[0].slice(1)} ${splitName[1].charAt(0).toUpperCase() + splitName[1].slice(1)}`
        
        const targetsValues = users[0].filter(user=>{return user.name === targetName})
    }
        function handleUserIcons(){
        return getAllUsers()
        .then((data)=>{
            return Promise.all([data])
        })
        .then((result)=>{
            return setUsers(result)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        handleUserIcons()
        setIsLoaded(true)
    },[])
    useEffect(()=>{
    },[loggedInUser])
    if(!isLoaded){
        return <p className="loading-text">Loading</p>
    }else{
        return(
            <>         
                <h2 className="loginHeading">Choose one to login!</h2>
            <div className="all-users-container">
            {users? users[0].map((user)=>{
            return <img src={user.avatar_url} alt="user avatar" key={user.name} className={user.name.split(' ').join('-').toLowerCase()} onClick={handleSubmit}
            />  
        }):null}
            </div>
            </>
        )
    }
}