import './App.css'
import Header from './components/Header'
import ArticleList from "./components/Article-list"
import SingleArticle from './components/Single-article';
import CommentCard from './components/Comment-card';
import { Routes, Route } from 'react-router-dom';



function App() {

  return (
    <section>
      <Header/>
      <Routes>
        <Route path='/' element={<ArticleList/>}/>
        <Route path='/articles/:article_id' element={<SingleArticle/>}/>
        <Route path='/articles/:article_id/comments' element={<CommentCard/>}/>
      </Routes>
    </section>
  )
}

export default App
