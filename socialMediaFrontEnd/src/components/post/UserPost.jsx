import React, { useState } from 'react'
import {BsThreeDotsVertical} from"react-icons/bs"
import {AiFillLike} from"react-icons/ai"
import {AiFillHeart} from"react-icons/ai"
import "./post.css"
// import { closeFreinds } from '../Dummydata'
import { useEffect } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"
import { useSelector } from 'react-redux'

const UserPost = ({post}) => {
    const [like, setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})

    const curUser = useSelector((state)=>state.userReducer.payload)

    useEffect(()=>{
      const fetchUser = async() =>{
        const res = await axios.get(`http://localhost:8100/api/users?userId=${post.userId}`);
        setUser(res.data)
      }
      fetchUser()
    },[post.userId])

    useEffect(()=>{
      setIsLiked(post.likes.includes(curUser._id))
    },[curUser._id,post.likes])

    const likehandle = () =>{
      try{
        axios.put(`http://localhost:8100/api/post/${post._id}/like`,{userId:curUser._id})
      }catch(err){}
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }

  return (
    <div className='post'>
    <div className='post-profile-info'>
      <Link to={`/profile/${user.username}`}>
      <div className='post-profile-info-img'>
          <img src={user.profilePicture || '/assets/noavatar.png'} alt='user1.png'></img></div>
      </Link>
          <div className='name'>{user.username}</div>
          <span className='time'>{new Date(post.createdAt).toDateString()}</span>
      
      <BsThreeDotsVertical className='menu-icon'/>
    </div>
    <div className='post-desc'>
      {post?.desc}
    </div>
    <div className='post-img-cont'>
      <div className='post-img'>
      <img src={post.post} alt='user7.png'></img>
      </div>
    </div>

    <div className='post-bottom'>
    <div className='like-love-cont'>
      <AiFillLike className='like' onClick={likehandle} />
      <AiFillHeart className='love' onClick={likehandle} />
      <span className='like-count'>{like}</span>
      <span className='like-text'>people liked</span>
    </div>
    <div className='comment-cont'>
    <span className='comments-count'>{post.comments}</span>
    <span className='comments'>comments</span>
    </div>
    </div>
  </div>
  )
}

export default UserPost
