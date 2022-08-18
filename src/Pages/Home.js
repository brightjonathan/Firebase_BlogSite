import {useState, useEffect} from 'react'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore' 
import { auth, db } from '../Firebase-config' //database configuration

const Home = ({isAuth}) => {
 
  //storing the data in an array 
  const [postList, setpostList] = useState([]);

   //creating a collection in the firestore
   const collectionRef = collection(db, 'POST');

  
  useEffect(()=>{
    const getposts = async ()=>{
      const data = await getDocs(collectionRef);
      setpostList(data.docs.map((doc) => ({...doc.data(), id: doc.id }))) //mapping the data to target our values needed
    }
   
    getposts();
  }, [])

  //delete btn
  const deletePost = async (id)=>{
    if(window.confirm("ARE YOU SURE YOU WANT TO DELETE THIS ITEM ? ")){
      const postDoc = doc(db, 'POST', id) //getting the collection name and the db config
      await deleteDoc(postDoc)
    }
     
  }

  return (
   <>
   <div className='homePage'>
     {postList.map((post, index)=>{
       return (
        <div className='post' key={index}>

          <div className='postHeader'>
           <div className='title'>
             <h1> {post.Title}</h1>
           </div>
           <div className='deletePost'>
            {isAuth && post.author.id === auth.currentUser.uid && (
              <button onClick={()=>{deletePost(post.id)}}> &#128465; </button>
            )}
             
           </div>
          </div>

          <div className='postTextContainer'>
              {post.post}
          </div>
          <h3> @{post.author.name} </h3>

        </div>
       )
     })}
   </div>
   </>
  )
}

export default Home


