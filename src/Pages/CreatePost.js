import { useState, useEffect } from 'react'
import { addDoc, collection } from 'firebase/firestore' //storing the data in firestore db
import { db, auth } from '../Firebase-config' //database configuration
import { useNavigate } from 'react-router-dom'

const CreatePost = ({isAuth}) => {
  
  const navigate = useNavigate();

  const [Title, setTitle] = useState('');
  const [post, setpost] = useState('');

  //creating a collection in the firestore
  const collectionRef = collection(db, 'POST')

  //functionality for submitting to the database
  const submitPost = async () => {
    await addDoc(collectionRef, {Title, post, author: {name: auth.currentUser.displayName, id: auth.currentUser.uid}} )
    navigate('/')
  };

  //protecting the route
  //if not authenticated redirect to login page...
  useEffect(()=>{
    if(!isAuth){
      navigate('/login')
    }
  }, [])




  return (
    <>
     <div className='createPostPage'>
        <div className='cpContainer'>
          <h1>Create a post</h1>

          <div className='inputGp'>
            <label> Title: </label>
            <input type='text'
            value={Title} 
            onChange={(e)=> setTitle(e.target.value)}
            placeholder='Title... '/>
          </div>

          <div className='inputGp'>
            <label> Post: </label>
            <textarea placeholder='Post an article...'
            value={post} 
            onChange={(e)=> setpost(e.target.value)} />
          </div>

          <button onClick={submitPost }>Submit post</button>
        </div>
     </div>
    </>
  )
}

export default CreatePost
