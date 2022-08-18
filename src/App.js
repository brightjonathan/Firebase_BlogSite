import './App.css';
import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Login from './Pages/Login'
import Post from './Pages/CreatePost'
import NavBar from './Pages/NavBar'


const App = () => {

  //useState for checking if user is authenticated
  const [isAuth , setisAuth] = useState(localStorage.getItem('isAuth'));

  return (
    <div className='App'>
  <Router>
      <NavBar isAuth={isAuth} setisAuth={setisAuth} />
      <Routes>
        <Route path='/' element={ <Home isAuth={isAuth} />} />
        <Route path='/login' element={ <Login setisAuth={setisAuth} /> } />
        <Route path='/post' element={ <Post isAuth={isAuth} />} />
      </Routes>
  </Router>
    </div>
    
  )
}

export default App

