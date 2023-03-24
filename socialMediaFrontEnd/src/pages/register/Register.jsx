import axios from 'axios'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './register.css'

const Register = () => {
  const username = useRef()
  const email = useRef()
  const password = useRef()

  const navigate = useNavigate()

  const handleRegister = async (e) =>{
    const user = {
      username:username.current.value,
      email: email.current.value,
      password: password.current.value
    }
    localStorage.clear()
    e.preventDefault()
    try{
      const response = await axios.post(`http://localhost:8100/api/auth/register`,user)
      navigate('/login')
    }catch(err){
      console.log(err)
    }
  }
  return (
    <div className='register'>
      <div className='register-wrapper'>
        <div className='register-form'>
            <form onSubmit={handleRegister}>
                <h1 className='REGISTER'>Register</h1>
                <input type="text" ref={username} placeholder='enter your name'></input>
                <input type="email" ref={email} placeholder='enter your email'></input>
                <input type="password" ref={password} placeholder='enter your password'></input>
            <button className="r-btn" type="submit">Register</button>
                <p className="log-link-p">Aready have an account ?</p>
                <a className="log-link">Login</a>
                </form>
        </div>
        <div className='register-img'>  
        <img src='/assets/register.png'></img>
        </div>
      </div>
    </div>
  )
}

export default Register
