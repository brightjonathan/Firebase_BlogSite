import React from 'react'
import {auth, provider } from '../Firebase-config'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'



const Login = ({setisAuth}) => {
  const navigate = useNavigate();

  //sign btn
  const signinwithgoogle = () =>{
     signInWithPopup(auth, provider).then((result)=>{
      localStorage.setItem('isAuth', true); //storing in localstorage
      setisAuth(true); //setting it to true when signIn
      navigate('/')
     })
  }

  
  return (
    <div className='loginPage'>
      <p> Sign in with Google to continue </p>
      <button className='login-with-google-btn' onClick={ signinwithgoogle }> Sign in with Google</button>
    </div>
  )
}

export default Login




