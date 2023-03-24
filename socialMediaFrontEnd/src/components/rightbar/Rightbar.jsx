import "./right.css"
import Online from "../left/Online"
import { closeFreinds } from "../Dummydata"

const Rightbar = ({user}) => {

  const HomeRightbar = ()=>{
    return (
      <>
      <div className="bithday-wrapper">
      <div className="bithday-img">
        <img src="/assets/birthday/gift.png" alt="gift.png"></img>
      </div>
      <div className="birthday-text">
        <b>pola foster </b><span>and </span><b>3 other freinds </b>
        <span>have a birthday today.</span>
      </div>
    </div>

    <div className="ad">
      <img src="/assets/cafe.png" alt=""></img>
    </div>
    <div className="online-freinds">
      <b className="online">online freinds</b>
      <ul>
        {
          closeFreinds.map((f)=>
          <Online key={f.id} freind={f} />
          )
        }
      </ul>
    </div>
    </>
    )
  }

  const ProfileRightbar = () =>{
    return(
      <>
      <h2>User Information</h2>
      <div className="profileInformation">
        <div className="profileInfoItem">
          <span className="profileInfoKey">City :</span>
          <span className="profileInfoValue">{user.city}</span>
        </div>
        <div className="profileInfoItem">
          <span className="profileInfoKey">From :</span>
          <span className="profileInfoValue">{user.from}</span>
        </div>
        <div className="profileInfoItem">
          <span className="profileInfoKey">Relationship :</span>
          <span className="profileInfoValue">{user.relationship}</span>
        </div>
      </div>
      <h4 className="userFreindsTitle">user freinds</h4>
      <div className="profileFollowings">
        <div className="profileFollowing">
          <img className="profileFollowingImg" src="/assets/profiles/five.png" alt="five.png"></img>
          <span className="followerName">priya</span>
        </div>
        <div className="profileFollowing">
          <img className="profileFollowingImg" src="/assets/online/user4.png" alt="five.png"></img>
          <span className="followerName">priya</span>
        </div>
        <div className="profileFollowing">
          <img className="profileFollowingImg" src="/assets/online/user8.png" alt="five.png"></img>
          <span className="followerName">priya</span>
        </div>
        <div className="profileFollowing">
          <img className="profileFollowingImg" src="/assets/profiles/seven.png" alt="five.png"></img>
          <span className="followerName">priya</span>
        </div>
        <div className="profileFollowing">
          <img className="profileFollowingImg" src="/assets/profiles/one.png" alt="five.png"></img>
          <span className="followerName">priya</span>
        </div>
        <div className="profileFollowing">
          <img className="profileFollowingImg" src="/assets/profiles/four.png" alt="five.png"></img>
          <span className="followerName">priya</span>
        </div>
      </div>
      </>
    )
  }

  return (
    <div className="rightbar">
     { user ? <ProfileRightbar /> : <HomeRightbar />}
    </div>
  )
}

export default Rightbar
