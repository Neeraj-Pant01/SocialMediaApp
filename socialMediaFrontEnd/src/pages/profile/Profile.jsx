import React, { useEffect, useState } from 'react'
import "./profile.css"
import Topbar from '../../components/topbar/Topbar'
import Leftbar from '../../components/left/Leftbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Profile = () => {
    const [user, setUser] = useState({})
    const params = useParams().username
    
    console.log(params)

    useEffect(()=>{
      const fetchUser = async() =>{
        const res = await axios.get(`http://localhost:8100/api/users?username=${params}`);
        setUser(res.data)
      }
      fetchUser()
    },[])
    return (
        <>
        <Topbar />
        <div className='profile'>
            <Leftbar />
            <div className='profileRight'>
                <div className='profileRightTop'>
                    <div className='profileCover'>
                        <img src={user.coverPicture || '/assets/nobg.jpg'} alt='coverimg' className='cover'></img>
                        <img src={user.profilePicture || '/assets/noavatar.png'} alt='profileimg' className='profileimg'></img>
                    </div>
                    <div className='profileInfo'>
                        <h4 className='profileName'>{user.username}</h4>
                        <span className='profiledesc'>{user.desc}</span>
                    </div>
                </div>
                <div className='profileRightBottom'>
                <Feed username={params} />
                <Rightbar user={user} />
                </div>
            </div>
        </div>
        </>
    )
}

export default Profile
