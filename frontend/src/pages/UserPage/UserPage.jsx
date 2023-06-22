import React ,{ useState, useEffect}from 'react'
import { useParams } from 'react-router-dom';
import './UserPage.css'
// import UserAvatar from '../../shared/UserAvatar/UserAvatar';

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
        {/* <UserAvatar /> */}
    </div>
  )
}

export default UserPage