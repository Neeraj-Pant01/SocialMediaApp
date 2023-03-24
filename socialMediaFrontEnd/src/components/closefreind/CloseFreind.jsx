import React from 'react'

const CloseFreind = ({freind}) => {
    const {profilePic, username} = freind;
  return (
    <>
      <ul className="leftbar-freinds">
          <li className="freindsList">
            <div className="freindImg">
            <img src={profilePic} alt="two.png"></img>
            </div>
            <span className="freind-name">{username}</span>
          </li>
        </ul>
    </>
  )
}

export default CloseFreind
