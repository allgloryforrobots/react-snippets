import React, { useState, useRef } from 'react'
import './styles/App.css'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'

import PostList from './components/PostList';

function App() {


  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript', body: 'Description' },
  ])

   /* Управляемый компонент */
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const [post, setPost] = useState({
    title: '',
    body: ''
  })

  const addNewPost = (e) => {

    e.preventDefault()

    const newPost = {
      id: Date.now(),
      title, 
      body
    }

    setPost(newPost)
    setPosts([...posts, newPost])
    setPost({
      title: '',
      body: ''
    })

  }

  return (
    <div className="App">

      <form action="">

        {/* Управляемый компонент */}
        <MyInput 
          value={post.title}

          onChange={e => setPost({
            ...post,
            title: e.target.value
          })}

          type="text" 
          placeholder="Название поста"
        />

        <MyInput 
          value={post.body}

          onChange={e => setPost({
            ...post,
            body: e.target.value
          })}

          type="text" 
          placeholder="Описание поста"
        />

        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>

      <PostList title={"Список постов"} posts={posts}/>
      
    </div>
  );

}

export default App;
