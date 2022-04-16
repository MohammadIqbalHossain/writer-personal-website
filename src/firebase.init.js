// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnjFnXI0dmPB3Zih8WOMBB6FtgU5AZddA",
    authDomain: "writer-personal-site.firebaseapp.com",
    projectId: "writer-personal-site",
    storageBucket: "writer-personal-site.appspot.com",
    messagingSenderId: "477290837419",
    appId: "1:477290837419:web:e39dac698580c70fdf8eee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;