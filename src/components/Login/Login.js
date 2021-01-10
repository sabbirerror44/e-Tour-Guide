import React, { useState } from 'react';
import "./Login.css";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    const [user,setUser] = useState({
        isSignedIn: false,
        name: '',
        photo: '',
        email: ''
    })


    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();

    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then((res) => {
                const {displayName, photoURL, email} = res.user;
                const SignedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    photo: photoURL,
                    email: email
                }
                setUser(SignedInUser);
            }).catch((error) => {
                console.log(error);
            });
        }

    const handleFbSignIn = ()=>{
        firebase.auth().signInWithPopup(fbProvider)
                .then((res) => {
                    const {displayName, photoURL, email} = res.user;
                    const SignedInUser = {
                        isSignedIn: true,
                        name: displayName,
                        photo: photoURL,
                        email: email
                    }
                    setUser(SignedInUser);        
                })
                .catch((error) => {
                   console.log(error);
                });
    }

    return (
        <div className="container">
            <div className="loginStyle text-center pt-4">
            {/* {
                    user.isSignedIn && <div>
                    <p>Welcome, {user.name}!</p>
                    <p>Your email: {user.email}</p>
                    <img src={user.photo} alt=""/>
                    </div>
            } */}
                <h5>Create an Account</h5>
                 <form>
                    <input type="text" name="fname" id="fname" placeholder="First Name" required/><br/>
         
                    <input type="text" name="lname" id="lname" placeholder="Last Name" required/><br/>
                    
                    <input type="text" name="email" id="email" placeholder="Username or Email" required/><br/>
                    
                    <input type="password" name="password" id="password" placeholder="Password" required/><br/>
                    
                    <input type="password" name="confirmPass" id="confirmPass" placeholder="Confirm Password" required/>
                    
                    <input type="submit" className="submitButton" value="Create an Account"/>
                    <p>Already have an account? <a href="#" className="text-warning">Login In</a></p> 

                {/* <button type="button" class="btn btn-warning btn-lg btn-block w-75 mx-auto">Create an Account</button>
                <p>Already have an account? <a href="#" className="text-warning">Sign In</a></p> */}
                </form>
            </div>
                <div className="text-center">
                     <h5>or</h5>
                    <button onClick={handleGoogleSignIn} className="fbGoogleLogin mb-2"><img src="https://i.ibb.co/5YTSkQR/google.png"  height="37px" width="37px" alt=""/> Continue With Google</button><br/>
                    <button onClick={handleFbSignIn} className="fbGoogleLogin"><img src="https://i.ibb.co/J7yrfB2/fb.png" height="37px" width="37px" alt=""/> Continue With Facebook</button>
                </div>
        </div>
    );
};

export default Login;