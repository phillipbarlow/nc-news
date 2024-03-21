import { Routes, Route, Link} from 'react-router-dom';
import {useState, useEffect } from "react";
import Users from './Users';
import {getAllTopics} from '../../utils/api'
// import Topic from '../components/All-topics'
export default function Header(){
    
    const [topics,setTopics] = useState([])
    useEffect(()=>{
        getAllTopics()
        .then((result)=>{
            setTopics(result)
        })
    },[])
    return(
        <header>
        <h1>Phil's News read all about it!</h1>
        <button><Link to={'/users'}>Login!</Link></button>
        <button><Link to={'/'}>Home</Link></button>
        <nav>
            <ol>
                {topics.map(topic=>{
                   return (<li key={topic.slug}>
                    {/* <Link to={`/articles?topic=${topic.slug}`}>{topic.slug}</Link></li>) */}
                    <Link to={`/articles/${topic.slug}`}>{topic.slug}</Link></li>)
                })}
            </ol>
        </nav>
        </header>
    )
}