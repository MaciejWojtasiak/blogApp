import React from 'react'
import './CreatePost.css'


const handleSubmit = (e) => {
  e.preventDefault();
}

function CreatePost() {
  return (
    <div className='createPost'>
      <form className='post-form' onSubmit={handleSubmit}>
        <div className="form-div">
          <h2>Create post</h2>
          <label htmlFor="title">Title</label>
          <input className='form-input' type="text" id='title' name='title' placeholder='Title...'/>
          <label htmlFor="desc">Description</label>
          <textarea className='form-input'  id='desc' name='desc' placeholder='Description...'/>
          <label htmlFor="tags">Tags</label>
          <textarea className='form-input' id='tags' name='tags' placeholder='Tags...'/>
          <label htmlFor="file-input" className='file-input'>Image:<br/><i className="fa-solid fa-plus"></i></label>
          <input type="file" id="file-input" style={{display:"none"}}/>
          <input type="submit" className='btn btn-primary' value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default CreatePost