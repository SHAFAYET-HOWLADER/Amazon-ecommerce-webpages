// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDO5nKjQhue9iCgrzzdfNZ4iYRZCXUH3i8",
  authDomain: "emajhon-simple-authenticaton.firebaseapp.com",
  projectId: "emajhon-simple-authenticaton",
  storageBucket: "emajhon-simple-authenticaton.appspot.com",
  messagingSenderId: "881973693729",
  appId: "1:881973693729:web:e93ccc8fa62aa9ccbcc260"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;