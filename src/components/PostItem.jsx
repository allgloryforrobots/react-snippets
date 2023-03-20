import React from 'react'


function PostItem(props) {

    const { title, body } = props.post;
    
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

            <button className="post__btn">
                Удалить
            </button>
        </div>
    )
}

export default PostItem