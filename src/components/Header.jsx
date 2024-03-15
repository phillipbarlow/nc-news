import { Routes, Route, Link} from 'react-router-dom';
import {useState, useEffect } from "react";
import Users from './Users';
import {getAllTopics} from '../../utils/api'

export default function Header(){
    // const [topic,setTopic] = useEffect()
    // useEffect(()=>{
    //     getAllTopics()
    //     .then((result)=>{
    //         setTopic(result.data)
    //     })
    //     console.log(topic)
    // },[])

    return(
        <header>
        <h1>Phil's News read all about it!</h1>
        <button><Link to={'/users'}>Login!</Link></button>
        <button><Link to={'/'}>Home</Link></button>
        <nav>
            <ol>
                <li>Topic 1</li>
                <li>Topic 2</li>
                <li>Topic 3</li>
                <li>Topic 4</li>
            </ol>
        </nav>
        </header>
    )
}