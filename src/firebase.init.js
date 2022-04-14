// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAkO-3gafEWYBka-o6LfVFl5gqBlEaY_sc",
    authDomain: "react-ema-john-62101.firebaseapp.com",
    projectId: "react-ema-john-62101",
    storageBucket: "react-ema-john-62101.appspot.com",
    messagingSenderId: "153268660490",
    appId: "1:153268660490:web:ef8b77d8e9989b72a732f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;