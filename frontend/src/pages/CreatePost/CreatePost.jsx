import {React, useRef, useContext, useState} from 'react';
import axios from 'axios';
import './CreatePost.css';
import {Context} from '../../context/Context';



const categories = ["music", 'sport', 'technology', 'science', 'movie', 'politics'];

function CreatePost() {

  const {user} = useContext(Context);
  
  const titleRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const [postImage, setPostImage] = useState({myFile:''});
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const res = await axios.post('https://blog-app-api-hpab.onrender.com/api/posts/', {
          title: titleRef.current.value,
          description: descriptionRef.current.value,
          user: user._id,
          category: categoryRef.current.value,
          image: postImage.myFile
    });

    res.data && window.location.replace('/');
  }
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage({...postImage, myFile: base64})
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
          <input className='form-input' type="file" id='image-input' name='image-input' accept='.jpeg, .png, .jpg' onChange={(e)=>{handleFileUpload(e)}}/> 
          <input type="submit" className='btn btn-primary' value="Submit" />
        </div>
      </form>
    </div>
  )
}

export default CreatePost

function convertToBase64(file){
  return new Promise((resolve,reject)=>{
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    }
    fileReader.onerror = (error) => {
      reject(error);
    }
  })
}