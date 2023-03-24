import React from 'react'
import "./topbar.css"
import { AiOutlineSearch } from "react-icons/ai"
import { BsFillPersonFill } from "react-icons/bs"
import { AiOutlineMessage } from "react-icons/ai"
import { BsBellFill } from "react-icons/bs"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Topbar = () => {
  const user = useSelector((state)=>state.userReducer.payload)
  return (
    <div className='topbar'>
      <div className='left'>
        <Link to="/" style={{cursor:"pointer", textDecoration:"none" , color:"inherit"}}><span className='brandname'>BeSocial</span></Link>
      </div>
      <div className="mid">
        <div className='search-inp'>
          < AiOutlineSearch className='search-icon' />
        <input type="text" placeholder='search for freind, post and video'></input>
        </div>
      </div>
      <div className='right'>
        <div className='rightLinks'>
          <span>Homepage</span>
          <span>TimeLine</span>
        </div>
        <div className="rightIcons">
          <BsFillPersonFill className='profile-icons'/>
          <AiOutlineMessage className='profile-icons'/>
          <BsBellFill className='profile-icons'/>
        </div>
        <Link to={`/profile/${user.username}`}>
        <div className="rightImg">
          <img src={user.profilePicture || '/assets/noavatar.png'} alt='name'></img>
        </div>
          </Link>
      </div>
    </div>
  )
}

export default Topbar
