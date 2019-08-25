import React from 'react';

function PostHeader({author, date}) {
    return(
        <div className='post-header'>
            <img src={author.avatar} className='avatar'></img>
            <div className='details'>
                <span>{author.name}</span>
                <span>{date}</span>                
            </div>
        </div>
    )
}

function PostComments({comments}) {
    return(
        <div className='post-comments'>
            <div className='divider'></div>
            {comments.map(comment => (
                <div key={comment} className='comment'>
                    <img className='avatar' src={comment.author.avatar}></img>
                    <p>
                        <span>{comment.author.name}</span>
                        {comment.content}
                    </p>
                </div>
            ))}
        </div>
    )
}

function Post({author, date, content, comments }){
    return(
        <div className='post'>
            <PostHeader author={author} date={date}/>
            <p className='post-content'>{content}</p>
            <PostComments comments={comments}/>
        </div>
    )
}

export default Post;