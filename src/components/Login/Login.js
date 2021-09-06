import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { UserContext } from '../../App';
import firebaseConfig from './firebase.config';
import "./Login.css";

if(firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
        const [newUser, setNewUser] = useState(false);
        const [user,setUser] = useState({
            isSignedIn: false,
            name: '',
            photo: '',
            email: ''
        })
    
        const [loggedInUser, setLoggedInUser] = useContext(UserContext);
        const history = useHistory();
        const location = useLocation();
        let { from } = location.state || { from: { pathname: "/" } };
    
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
                        setLoggedInUser(SignedInUser);
                        localStorage.setItem('user', SignedInUser.email);

                        history.replace(from);
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
                            setLoggedInUser(SignedInUser);
                            localStorage.setItem('user', SignedInUser.email);
                            history.replace(from);       
                        })
                        .catch((error) => {
                        console.log(error);
                        });
            }
    
            const handleBlur = (e) => {
                let isFieldValid = true;
                if(e.target.name === 'email'){
                    isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
                }
                if(e.target.name === 'password'){
                    const isPasswordValid = e.target.value.length > 5;
                    const passwordHasNumber = /\d{1}/.test(e.target.value);
                    isFieldValid = isPasswordValid && passwordHasNumber;
                }
    
                if(isFieldValid){
                    const newUserInfo = {...user};
                    newUserInfo.isSignedIn = true;
                    newUserInfo[e.target.name] = e.target.value;
                    setUser(newUserInfo);
                }
            }
            const handleClick = () => {
                setNewUser(!newUser);
            }
            const handleSubmit = (e) => {
                if(newUser && user.email && user.password)
                { 
                    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                    .then(res=>{
                        const newUserInfo = {...user};
                        newUserInfo.error= '';
                        newUserInfo.success= true;
                        setUser(newUserInfo);
                        updateUserName(user.name);
                    })
                    .catch(error => {
                        const newUserInfo = {...user};
                        newUserInfo.error = error.message;
                        newUserInfo.success = false;
                        setUser(newUserInfo);
                    });
                }
    
                if(!newUser && user.email && user.password){
                    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                    .then( res => {
                        const newUserInfo = {...user};
                        newUserInfo.error= '';
                        newUserInfo.success = true;
                        setUser(newUserInfo);
                        setLoggedInUser(newUserInfo);
                        localStorage.setItem('user', newUser.Info.email);
                        history.replace(from);
                    })
                    
                    .catch(error => {
                        const newUserInfo = {...user};
                        newUserInfo.error = error.message;
                        newUserInfo.success = false;
                        setUser(newUserInfo);
                    });
    
                }
                
                e.preventDefault();
            }
            const updateUserName = (name) => {
                const user = firebase.auth().currentUser;
    
                user.updateProfile({
                    displayName: name
                }).then(function(){
                    console.log("user name updated successfully");
                }).catch(function(error) {
                    console.log(error);
                });
          }

    return (
        <div className="container">
            <div className="loginStyle text-center pt-4">
        
                <h5>{newUser?'Create an Account':'Login'}</h5>
                 <form onSubmit={handleSubmit}>
                   <div className="form-group">
                   { newUser && <input type="text" className="form-control" name="name" onBlur={handleBlur} placeholder="First Name" required/>} <br/>
                   </div>
         
                   <div className="form-group">
                   { newUser && <input type="text" className="form-control" name="lname" onBlur={handleBlur} placeholder="Last Name" required/> }<br/>
                   </div>
                    
                  <div className="form-group">
                   <input type="text" name="email" className="form-control" onBlur={handleBlur} placeholder="Username or Email" required/><br/>
                  </div>
                    
                   <div className="form-group">
                      <input type="password" name="password"  className="form-control" onBlur={handleBlur} placeholder="Password" required/><br/>
                   </div>
                    
                   <div className="form-group">
                   { newUser && <input type="password" name="confirmPass"  className="form-control" onBlur={handleBlur} placeholder="Confirm Password" required/> }
                   </div>
                    
                    <div className="form-group">
                    <input type="submit" className="submitButton" value={newUser?'Create an Account':'Login'}/>
                    </div>
                {
                    newUser ? <p>Already have an account? <button onClick={handleClick} className="text-warning toggle">Login</button></p> : <p>Don't have an account? <button onClick={handleClick} className="text-warning toggle">Create an Account</button></p> 
                 
                }

                {/* <button type="button" class="btn btn-warning btn-lg btn-block w-75 mx-auto">Create an Account</button>
                <p>Already have an account? <a href="#" className="text-warning">Sign In</a></p> */}
                </form>
            </div>
               <p className="text-center" style={{color: 'red'}}>{user.error}</p>
              {user.success && <p className="text-center" style={{color: 'green'}}>User {newUser ? 'Created' : 'Logged In'} Successfully</p>}
                <div className="text-center m-auto">
                     {/* <h5>or</h5> */}
                    <button onClick={handleGoogleSignIn} className="fbGoogleLogin mb-2"><img src="https://i.ibb.co/5YTSkQR/google.png"  height="37px" width="37px" alt=""/> Continue With Google</button><br/>
                    <button onClick={handleFbSignIn} className="fbGoogleLogin"><img src="https://i.ibb.co/J7yrfB2/fb.png" height="37px" width="37px" alt=""/> Continue With Facebook</button>
                </div>
           
        </div>
    );
};

export default Login;