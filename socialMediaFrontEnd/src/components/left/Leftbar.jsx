import "./leftbar.css"
import { MdRssFeed } from "react-icons/md";
import { BsFillChatSquareTextFill } from "react-icons/bs"
import { AiFillPlayCircle } from "react-icons/ai"
import { MdGroups } from "react-icons/md"
import { BsBookmarksFill } from "react-icons/bs"
import { BsFillQuestionSquareFill } from "react-icons/bs"
import { BsFillBagCheckFill } from "react-icons/bs"
import { HiOutlineRadio } from "react-icons/hi2"
import { FaGraduationCap } from "react-icons/fa"
import { closeFreinds } from "../Dummydata";
import CloseFreind from "../closefreind/CloseFreind";

const Leftbar = () => {
  return (
    <div className="leftbar">
      <div className="iconsList">
        <ul className="leftbarList">
          <li className="leftbarListItem">
          <MdRssFeed className="leftbarIcon" />
          <span className="leftbarListText">Feeds</span>
          </li>
          <li className="leftbarListItem">
          <BsFillChatSquareTextFill className="leftbarIcon"  />
          <span className="leftbarListText">Chats</span>
          </li>
          <li className="leftbarListItem">
          <AiFillPlayCircle className="leftbarIcon"  />
          <span className="leftbarListText">Videos</span>
          </li>
          <li className="leftbarListItem">
          <MdGroups className="leftbarIcon"  />
          <span className="leftbarListText">Groups</span>
          </li>
          <li className="leftbarListItem">
          <BsBookmarksFill className="leftbarIcon"  />
          <span className="leftbarListText">Bookmarks</span>
          </li>
          <li className="leftbarListItem">
          <BsFillQuestionSquareFill className="leftbarIcon"  />
          <span className="leftbarListText">Questions</span>
          </li>
          <li className="leftbarListItem">
          <BsFillBagCheckFill className="leftbarIcon"  />
          <span className="leftbarListText">Jobs</span>
          </li>
          <li className="leftbarListItem">
          <HiOutlineRadio className="leftbarIcon"  />
          <span className="leftbarListText">Events</span>
          </li>
          <li className="leftbarListItem">
          <FaGraduationCap className="leftbarIcon"  />
          <span className="leftbarListText">Courses</span>
          </li>
          <button className="icon-btn">show more</button>
          <hr className="leftbar-hr"></hr>
        </ul>
        {
          closeFreinds.map((freind)=>{
          return <CloseFreind key={freind.id} freind={freind} />
          })
        }
      </div>
    </div>
  )
}

export default Leftbar
