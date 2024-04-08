import { Routes, Route, Link, NavLink} from 'react-router-dom';
import {useState, useEffect } from "react";
import React from 'react'
const Nav = ({topics}) => {
    const [menuOpen, setMenuOpen] = useState(false)
  return (
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
        </ol>
    </nav>
  )
}

export default Nav