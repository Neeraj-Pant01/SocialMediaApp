import axios from "axios"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useractions } from "../../components/redux/actions/actions"
import "./login.css"

const Login = () => {
  const [loginInfo,setLoginInfo] = useState({
    email:'',
    password:'',
  })
  const dispatch = useDispatch()


  const handleSubmit = async (e) =>{
  e.preventDefault()
  // console.log(loginInfo)
  try{
    const response = await axios.post('http://localhost:8100/api/auth/login',loginInfo)
    console.log(response)
    dispatch(useractions(response.data))
  }catch(err){
    console.log(err)
  }
  }
  const handleChange = (e) =>{
    const {name,value} = e.target
    setLoginInfo((pre)=>{
      return{
        ...pre,[name]:value
      }
    })
  }
  return (
    <div className="login">
      <div className="login-wrapper">
        <div className="login-img">
            <img src="/assets/login.jpg"></img>
        </div>
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <h1 className="LOGIN">Login</h1>
                <input type="email" placeholder="enter your email !" name="email" value={loginInfo.email} onChange={handleChange}></input>
                <input type="password" placeholder="enter password" name="password" value={loginInfo.password} onChange={handleChange}></input>
                <button className="l-btn" type="submit" >Login</button>
                <p className="reg-link-p">don't have any account ?</p>
                <a className="reg-link">register</a>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
