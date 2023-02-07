// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2q8KAupQeteKTyFUnxkT2jlgG3LLWEBU",
  authDomain: "login-authentication-d041f.firebaseapp.com",
  projectId: "login-authentication-d041f",
  storageBucket: "login-authentication-d041f.appspot.com",
  messagingSenderId: "588259482753",
  appId: "1:588259482753:web:7e8bb82033d10e4fc64180"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();