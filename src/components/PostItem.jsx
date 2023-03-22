import React from 'react'
import MyButton from './UI/button/MyButton'


function PostItem(props) {

    const { deletePost, post } = props
    const { title, body, id } = post
    
    return (    
        <div className="post">

            <div className='post__content'>

                <strong>
                    {props.number}. {title}
                </strong>
                
                <div>
                    {body}
                </div>
            </div>

            <div className="post__btn" onClick={() => deletePost(id)}>
                <MyButton>Удалить</MyButton> 
            </div>
        </div>
    )
}

export default PostItem