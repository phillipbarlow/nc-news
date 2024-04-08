import { Routes, Route, Link} from 'react-router-dom';
import {useState, useEffect } from "react";
import Users from './Users';
import {getAllTopics} from '../../utils/api'
import Nav from './Nav';
export default function Header(){
    const [menuOpen, setMenuOpen] = useState(false)
    const [topics,setTopics] = useState([])
    useEffect(()=>{
        getAllTopics()
        .then((result)=>{
            setTopics(result)
        })
    },[])

    return(
        <header>
            <Nav topics={topics}/>
        </header>
    )
}