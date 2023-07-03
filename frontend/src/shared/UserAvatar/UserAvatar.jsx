
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './UserAvatar.css';
import axios from 'axios';


function UserAvatar({userID}) {  
  const [user, setUser] = useState({})

  useEffect(()=>{
    const getUser = async () => {
      const res = await axios.get(`http://localhost:5000/api/users/${userID}`);
      setUser(res.data);
    } 
    getUser();     
  },[]);

  return (
    <div className='post-author'>
              <Link className='user-image' to={`/${user._id}`}>
                  <img className='avatar' src={user.profilePic != '' ?  user.profilePic : 'https://t4.ftcdn.net/jpg/00/97/58/97/360_F_97589769_t45CqXyzjz0KXwoBZT9PRaWGHRk5hQqQ.jpg' } alt="profilePhoto" />
              </Link>
            <div className="author-username">
               {user.username}
            </div>
    </div>
  )
}

export default UserAvatar