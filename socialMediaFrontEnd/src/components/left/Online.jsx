import React from 'react'

const Online = ({freind}) => {
  return (
    <>
       <li className="online-freinds-box">
            <div className="online-box">
            <div className="onlineFreind-img">
              <img src={freind.profilePic} alt="freind.png"></img>
              <div className="online-symbol"></div>
              </div>
              <span className="online-text">{freind.username}</span>
            </div>
          </li>
    </>
  )
}

export default Online
