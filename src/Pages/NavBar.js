import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth' // mainly for signing out a user
import {auth} from '../Firebase-config' // auth from the firebase-config file


const NavBar = ({ isAuth, setisAuth }) => {
const navigate = useNavigate();


// sign out btn
const signuserout = () =>{
    signOut(auth).then(()=>{
        localStorage.clear()
        setisAuth(false)
        navigate('/login')
    })
}

  return (
    <nav>
        <Link to='/'> Home </Link>

        {!isAuth ? 
        (<Link to='/login'> Login </Link>): ( 
        <>
          <Link to='/post'> CreatePost</Link>
          <button onClick={signuserout}> Sign out </button> 
        </>
        )}
    </nav>
  )
}

export default NavBar



