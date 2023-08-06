import {React, useRef, useContext} from 'react';
import axios from 'axios';
import './UpdateForm.css';
import {Context} from '../../context/Context';



const categories = ["music", 'sport', 'technology', 'science', 'movie', 'politics'];

function UpdateForm({post, close}) {
  const {user} = useContext(Context);
  
  const titleRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const imageRef = useRef();
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {   
      await axios.put(`http://localhost:5000/api/posts/${post._id}`, {
            user:user._id,
            title: titleRef.current.value,
            description: descriptionRef.current.value,       
            category: categoryRef.current.value,
            image: imageRef.current.value,
        });
        window.location.reload();

    } catch (err) {
        console.log(err)
    }

  }
  
  return (
    <div className='updatePost'>
        <i className="fa-solid fa-x cancel" onClick={close}></i>
      <form className='update-form' onSubmit={handleSubmit}>
        <div className="form-div">
          <h2>Update post</h2>
          <label htmlFor="title">Title</label>
          <input ref={titleRef} className='form-input' type="text" id='title' name='title' placeholder='Title...' defaultValue={post.title} />
          <label htmlFor="desc">Description</label>
          <textarea ref={descriptionRef} className='form-input' id='desc' name='desc' placeholder='Description...' defaultValue={post.description}/>
          <label htmlFor="category">Category</label>
          <select ref={categoryRef} name="category" id="category" defaultValue={post.category}>
            {categories && categories.map((category, index)=>{
                return <option key={index} value={category}>{category.toUpperCase()}</option>
              })}
          </select>
          <label htmlFor="image-input">Image URL</label>
          <input ref={imageRef} className='form-input' type="text" id='image-input' name='image-input' placeholder='Image URL...'  defaultValue={post.image}/> 
          <input type="submit" className='btn btn-primary' value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default UpdateForm