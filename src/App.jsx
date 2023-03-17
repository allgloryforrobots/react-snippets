import React, { useState } from 'react'
import './styles/App.css'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'

import PostList from './components/PostList';

function App() {


  const [posts, setPosts] = useState([
    { id: 1, title: 'JavaScript', body: 'Description' },
    { id: 2, title: 'JavaScript', body: 'Description' },
  ])

   {/* Управляемый компонент */}
  const [title, setTitle] = useState('')

  const addNewPost = (e) => {
    e.preventDefault()
    console.log(title)
  }

   {/* Не управляемый компонент */}


  return (
    <div className="App">

      <form action="">
        {/* Управляемый компонент */}
        <MyInput 
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text" 
          placeholder="Название поста"
        />

        <MyInput type="text" placeholder="Описание поста"/>

        <MyButton onClick={addNewPost}>Создать пост</MyButton>
      </form>

      <PostList title={"Список постов"} posts={posts}/>
      
    </div>
  );

}

export default App;
