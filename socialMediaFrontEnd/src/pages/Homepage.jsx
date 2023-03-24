import "./Homepage.css"
import Topbar from "../components/topbar/Topbar"
import Leftbar from '../components/left/Leftbar'
import Feed from '../components/feed/Feed'
import Rightbar from '../components/rightbar/Rightbar'

const Homepage = () => {
  return (
    <div className="main-home">
      <Topbar />
      <div className='homepage'>
      <Leftbar />
      <Feed />
      <Rightbar />
      </div>
    </div>
  )
}

export default Homepage
