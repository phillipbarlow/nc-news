import './App.css'
import Header from './components/Header'
import ArticleList from "./components/Article-list"
import SingleArticle from './components/Single-article';
import CommentCard from './components/Comment-card';
import Users from './components/Users'
import { Routes, Route } from 'react-router-dom';
import {useState } from "react";
import {LoggedInProvidor} from './contexts/User'
import AllTopics from './components/all-topics';

function App() {
  return (
      <LoggedInProvidor>
      <Header/>
      <Routes>
        <Route path='/' element={< ArticleList/>}/>
        <Route path='/articles/:article_id' element={<SingleArticle/>}/>
        <Route path='/articles/:article_id/comments' element={<CommentCard/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/api/topics' element={<AllTopics/>}/>
      </Routes>
      </LoggedInProvidor>
  )
}

export default App
