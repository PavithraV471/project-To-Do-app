import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBgKP1FV5G9wLjrCizwZwx6rGl9Sdni6tg",
    authDomain: "app1-todo.firebaseapp.com",
    projectId: "app1-todo",
    storageBucket: "app1-todo.appspot.com",
    messagingSenderId: "831063375010",
    appId: "1:831063375010:web:686c65eb1bf2a74550ebfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth() // for authentication
const provider = new GoogleAuthProvider() //for provider

const db = getFirestore(app)

export {auth , provider, db }
