import React from 'react'
import "../feed/feed.css"
import {IoMdPhotos} from "react-icons/io";
import {AiFillTag} from "react-icons/ai";
import {MdLocationOn} from "react-icons/md";
import {BsFillEmojiSmileFill} from "react-icons/bs";

const Shared = () => {
  return (
    <>
       <div className='feedbox-top'>
        <div className='feedbox-top-img'>
        <img src='/assets/profiles/one.png' alt='name'></img>
        </div>
        <input type="text" placeholder='whats in your mind pant ?'></input>
        </div>
        <hr className='feedbox-top-hr'></hr>
        <div className='feedbox-bottom'>
          <div className='shared-options'>
          <IoMdPhotos className='shared-icon i1' />
          <span>Photos or Videos</span>
          </div>
          <div className='shared-options'>
          <AiFillTag className='shared-icon i2' />
          <span>Tag</span>
          </div>
          <div className='shared-options'>
          <MdLocationOn className='shared-icon i3' />
          <span>Location</span>
          </div>
          <div className='shared-options'>
          <BsFillEmojiSmileFill className='shared-icon i4' />
          <span>Feelings</span>
          </div>
        </div>
    </>
  )
}

export default Shared
