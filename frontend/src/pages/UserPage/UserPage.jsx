import React ,{ useState, useEffect}from 'react'
import { useParams } from 'react-router-dom';
import './UserPage.css'
import AuthorAvatar from '../../shared/AuthorAvatar/AuthorAvatar';

function UserPage() {
  const [user, setUser] = useState();
  const [posts, setPosts ] = useState([])
    
  // const userID = useParams().userID;
  const userID = 1;

  useEffect(()=>{
    const fetchUser = async () => {
      const request = await fetch(`https://dummyjson.com/users/${userID}`);
      const data = await request.json();
      setUser(data);
    }
    fetchUser()
  },[])  

  return (
    <div className='user-page'>
        <AuthorAvatar />
    </div>
  )
}

export default UserPage