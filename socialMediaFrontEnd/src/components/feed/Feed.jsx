import Shared from '../share/Shared'
import  './feed.css'
import UserPost from '../post/UserPost'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useSelector } from 'react-redux'

const Feed = ({username}) => {
  const [posts, setPosts] = useState([])

  const user = useSelector((state)=>state.userReducer.payload)

  useEffect(()=>{
    const fetchPosts = async() =>{
      const res = username ?
      await axios.get(`http://localhost:8100/api/post/profile/${username}`)
      :
      await axios.get(`http://localhost:8100/api/post/timeline/${user._id}`)
      setPosts(res.data)
    }
    fetchPosts()
  },[username])

  console.log(posts)
  return (
    <div className='feed'>
      <div className='feed-box'>
       <Shared />
      </div>
      {
        posts.map((post)=>{
          return <UserPost key={post.id} post={post} />
        })
      }
    </div>
  )
}

export default Feed
