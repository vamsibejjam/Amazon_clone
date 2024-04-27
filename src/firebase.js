
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRJi6cyhfuc3d0QXkSC3L1Pe9EH-l9BmE",
  authDomain: "clone-667af.firebaseapp.com",
  projectId: "clone-667af",
  storageBucket: "clone-667af.appspot.com",
  messagingSenderId: "962853439101",
  appId: "1:962853439101:web:5a749e42bf8f7dc84c1314",
  measurementId: "G-N8PTRWDPRZ"
};


const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp); 
const db = getFirestore(firebaseApp); 

export { auth, db };