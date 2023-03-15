import React, { useState } from 'react'
import PostItem from './components/PostItem'

const PostList = ({ posts }) => {

    const [posts, setPosts] = useState([
        { id: 1, title: 'JavaScript', body: 'Description' },
        { id: 2, title: 'JavaScript', body: 'Description' },
    ])

    return ( 
        <div>
            <h1  style={{ textAlign: 'center' }}>Список постов</h1>

            {
                posts.map(post => <PostItem key={post.id} post={post} />)
            }
        </div>

    );
}
 
export default PostList;
