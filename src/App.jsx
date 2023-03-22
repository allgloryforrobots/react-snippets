import React, { useState, useRef } from 'react'
import './styles/App.css'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import MySelect from './components/UI/select/MySelect'

function App() {

  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript', body: 'Description' },
  ])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const deletePost = (id) => {
    const updatedPosts = posts.filter(el => el.id !== id )
    setPosts(updatedPosts)
  }

  const options = [
    { name: "По названию", value: "by_name" },
    { name: "По описанию", value: "by_description" }
  ]


  return (
    <div className="App">

      <PostForm create={createPost}/>
      <hr style={{ margin: '15px 0' }}/>
      <MySelect options={options} defaultValue={"Сортировка по"}/>
    
      {
        posts.length !== 0
        ? <PostList title={"Список постов"} posts={posts} deletePost={deletePost}/>
        : <h1 style={{textAlign: "center"}}>Посты отсутствуют</h1>
      }

    </div>
  );

}

export default App;
