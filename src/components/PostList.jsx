import React from 'react'
import PostItem from './PostItem'

const PostList = ({title, posts, deletePost}) => {

    return ( 
        <div>
            <h1  style={{ textAlign: 'center' }}>{title}</h1>

            {
                posts.map( (post, index) => 
                    <PostItem number={index + 1} key={post.id} post={post} deletePost={deletePost}/>
                )
            }
        </div>

    );
}
 
export default PostList;
