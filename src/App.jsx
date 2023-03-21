import React, { useState, useRef } from 'react'
import './styles/App.css'
import PostForm from './components/PostForm'

import PostList from './components/PostList';

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript', body: 'Description' },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }


  return (
    <div className="App">

      <PostForm create={createPost}/>

      <PostList title={"Список постов"} posts={posts}/>
      
    </div>
  );

}

export default App;
