import './App.css'
import Header from './components/Header'
import ArticleList from "./components/Article-list"
import SingleArticle from './components/Single-article';
import CommentCard from './components/Comment-card';
import Users from './components/Users'
import { Routes, Route, useSearchParams } from 'react-router-dom';
import {LoggedInProvidor} from './contexts/User';
import RelatedArticleTopic from './components/Article-topics'
function App() {
  const [searchParams] = useSearchParams();
  const getTopic = searchParams.get("topic");
  return (
      <LoggedInProvidor>
      <Header/>
      <Routes>
        <Route path='/' element={< ArticleList/>}/>
        <Route path='/article/:article_id' element={<SingleArticle/>}/>
        <Route path='/articles/:topic' element={<RelatedArticleTopic/>}/>
        <Route path='/articles/:article_id/comments' element={<CommentCard/>}/>
        <Route path='/users' element={<Users/>}/>
      </Routes>
      </LoggedInProvidor>
  )
}

export default App
