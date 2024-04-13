import { Routes, Route, Link, NavLink} from 'react-router-dom';
import {useState, useEffect,useContext } from "react";
import React from 'react'
import {UserContext} from "../contexts/User";
const Nav = ({topics}) => {
    const [menuOpen, setMenuOpen] = useState(false)
    const {loggedInUser,setLoggedInUser} = useContext(UserContext);
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
                <NavLink to={`/articles/${topic.slug}`} className="nav-item">{topic.slug}</NavLink></li>)
            })}
            <NavLink to={'/users'} className="avatar-container">
                <img src={loggedInUser.avatar_url} alt="Avatar" className="avatar"/>
            </NavLink>
                
        </ol>
        {menuOpen ?<p className='welcomeOpenMsg'>Welcome {loggedInUser.username}</p>: ""}
    </nav>
    </>
  )
}

export default Nav