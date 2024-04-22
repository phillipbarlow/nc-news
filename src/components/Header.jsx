import { Routes, Route, Link,NavLink} from 'react-router-dom';
import {useState, useEffect, useContext } from "react";
import Users from './Users';
import {getAllTopics} from '../../utils/api';
import {UserContext} from "../contexts/User";
export default function Header(){
    const [topics,setTopics] = useState([])
    const [menuOpen, setMenuOpen] = useState(false)
    const {loggedInUser,setLoggedInUser} = useContext(UserContext);
    function handleDropDown(){
        setMenuOpen(!menuOpen)
    }
    useEffect(()=>{
        getAllTopics()
        .then((result)=>{
            setTopics(result)
        })
    },[])
    return(
        <header>
            <nav>
        <div className="menu" onClick={()=>{
                setMenuOpen(!menuOpen)}}>
                <span></span>
                <span></span>
                <span></span>
        </div>
        <Link onClick={handleDropDown} className='title' to="/">Phil's News read all about it!</Link >
        <ol className={menuOpen?"open":""}>
            {topics.map(topic=>{
                return (<li key={topic.slug} className='nav-item' onClick={handleDropDown}>
                <NavLink to={`/articles/${topic.slug}`} className="nav-item">{topic.slug}</NavLink></li>)
            })}
            <NavLink onClick={handleDropDown} to={'/users'} className="avatar-container">
                <img src={loggedInUser.avatar_url} alt="Avatar" className="avatar"/>
            </NavLink>
                
        </ol>
        {menuOpen ?<p onClick={handleDropDown} className='welcomeOpenMsg'>Welcome {loggedInUser.username}</p>: ""}
    </nav>
        </header>
    )
}