// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxamca9KZqv0iXGa9AVKaks0td51jPBik",
  authDomain: "biblioteca-f173d.firebaseapp.com",
  projectId: "biblioteca-f173d",
  storageBucket: "biblioteca-f173d.appspot.com",
  messagingSenderId: "900501627870",
  appId: "1:900501627870:web:7f78eeff93d17451b7b34f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = app.firestore()
const auth = app.auth()
export{ db, auth} 
