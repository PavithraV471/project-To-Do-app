import React, { useState, useEffect } from 'react'
//import React from 'react'
import "../styles/Signin.css"
import google from "../assets/google.png"
import today from "../assets/today.jpg"
import {useNavigate } from 'react-router-dom'
import { signInWithPopup } from 'firebase/auth'
import { auth, provider } from './firebase'



function Signin() {

    const [redirect,setRedirect] =useState(false)
    const navigate = useNavigate()
  
  
      const handleClick = () => {
  
        signInWithPopup(auth , provider).then(()=>{
          setRedirect(true); // Set redirect to true after successful sign-in
        }).catch(error => {
          console.log("Sign-in error:", error); // Log any errors
        });
      };


      // Handle navigation in useEffect
  useEffect(() => {
    if (redirect) {
      navigate("/home"); // Navigate to the home page
    }
  }, [redirect, navigate]); // Run the effect when redirect changes




  return (
    <div className='signcontent'>
        <div className='signdiv'>
            <h1>Sign-In</h1>
            <img src={today} width='400px' alt="" className='todayimg'/>
            
            <button onClick={handleClick} >
                <img src= {google} alt="" className='google' />
                Continue with Google
            </button>
            
        </div>
        
    </div>
  )
}

export default Signin