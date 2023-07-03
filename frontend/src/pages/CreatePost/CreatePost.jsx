import {React, useRef, useContext} from 'react';
import axios from 'axios';
import './CreatePost.css';
import {Context} from '../../context/Context';



const categories = ["music", 'sport', 'technology', 'science', 'movie', 'politics'];

function CreatePost() {

  const {user} = useContext(Context);
  
  const titleRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const res = await axios.post('http://localhost:5000/api/posts/', {
          title: titleRef.current.value,
          description: descriptionRef.current.value,
          user: user._id,
          category: categoryRef.current.value,
          image: imageRef.current.value
    });
 
    res.data && window.location.replace('/');

  }
  
  return (
    <div className='createPost'>
      <form className='post-form' onSubmit={handleSubmit}>
        <div className="form-div">
          <h2>Create post</h2>
          <label htmlFor="title">Title</label>
          <input ref={titleRef} className='form-input' type="text" id='title' name='title' placeholder='Title...'/>
          <label htmlFor="desc">Description</label>
          <textarea ref={descriptionRef} className='form-input'  id='desc' name='desc' placeholder='Description...'/>
          <label htmlFor="category">Category</label>
          <select ref={categoryRef} name="category" id="category">
            {categories && categories.map((category, index)=>{
                return <option key={index} value={category}>{category.toUpperCase()}</option>
              })}
          </select>
          <label htmlFor="image-input">Image URL</label>
          <input ref={imageRef} className='form-input' type="text" id='image-input' name='image-input'/> 
          <input type="submit" className='btn btn-primary' value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default CreatePost