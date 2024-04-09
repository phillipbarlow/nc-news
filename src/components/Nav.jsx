import { Routes, Route, Link, NavLink} from 'react-router-dom';
import {useState, useEffect,useContext } from "react";
import React from 'react'
import {UserContext} from "../contexts/User";
const Nav = ({topics}) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const {loggedInUser,setLoggedInUser} = useContext(UserContext);
    console.log(loggedInUser)
  return (
    <>
    <nav>
        <div className="menu" onClick={()=>{
                setMenuOpen(!menuOpen)
            }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        <Link className='title' to="/">Phil's News read all about it!</Link >
        <ol className={menuOpen?"open":""}>
            {topics.map(topic=>{
                return (<li key={topic.slug} className='nav-item'>
                <NavLink to={`/articles/${topic.slug}`}>{topic.slug}</NavLink></li>)
            })}
            <NavLink to={'/users'}><img src={loggedInUser.avatar_url} alt="Avatar" className="avatar"></img></NavLink>
        </ol>
    </nav>
    <p className='welcomeMsg'>Welcome {loggedInUser.username}</p>
    </>
  )
}

export default Nav