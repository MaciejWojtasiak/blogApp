import React from 'react'

function Post({id,title,body}) {
  return (
    <div className='post' id={id}>
        <h2>{title}</h2>
        <p>{body}</p>
    </div>
  )
}

export default Post