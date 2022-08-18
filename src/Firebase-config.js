// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import {getAuth, GoogleAuthProvider} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkJgBiaBJzE-G8lQTMd4LyWPmtZ1xnuwg",
  authDomain: "blogproject-64078.firebaseapp.com",
  projectId: "blogproject-64078",
  storageBucket: "blogproject-64078.appspot.com",
  messagingSenderId: "1081544431360",
  appId: "1:1081544431360:web:cca7dca4d687c9d25385e5"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app); // for authenticating a user
export const provider = new GoogleAuthProvider(); //signing in with google
export const db = getFirestore(app); // for storing data into firestore 
 



