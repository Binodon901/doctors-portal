import React, { useState } from 'react';
import 'firebase/auth';
import auth from '../../Login/Firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { sendEmailVerification } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const Register = () => {
    const history = useNavigate();
    const [emailVerified,setEmailVerified]=useState();
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: ''
    })
    const handleSubmit = (e) => {
        e.preventDefault();
        const auth = getAuth();
        const result =createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                // Signed in 
                const newUserInfo = {...user}
                newUserInfo.error=''
                newUserInfo.success=true
                setUser(newUserInfo)
                // ...
                verifyEmail();
                console.log(result);
                window.sessionStorage.setItem('email',user.email);
                history("/login");

            })
            .catch((error) => {
                const newUserInfo = {...user};
                newUserInfo.error=error.message
                newUserInfo.success=false
                setUser(newUserInfo) 
                
                // ..
            
            });
        console.log(user.email, user.password);
      //  e.preventDefault();
    }
    const handleClick = (e) => {
        let isFormValid;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
            console.log(isFormValid);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordValid && passwordHasNumber;
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);

        }
    }
    const verifyEmail = () => {


        const auth = getAuth();
        sendEmailVerification(auth.currentUser)
          .then(() => {
            console.log('Email verification sent!');
            // ...
            console.log(auth.currentUser.emailVerified);
          });
      }
    return (
      <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
      <div className="card card0 border-0">
          <div className="row d-flex">
              
              <div className="col-md-6 offset-md-3">
                  <div className="card2 card border-0 px-4 py-5">
                      <form action=''>
                          
                          <div className="row px-3">
                              <label className="mb-1"><h6 className="mb-0 text-sm">Name</h6></label>
                              <input className="mb-4" type="text" name="name" onBlur={handleClick} placeholder="Enter your name" />
                          </div>
                          <div className="row px-3">
                              <label className="mb-1"><h6 className="mb-0 text-sm">Email Address</h6></label>
                              <input className="mb-4" type="text" name="email" onBlur={handleClick} placeholder="Enter a valid email address" />
                          </div>
                          <div className="row px-3">
                              <label className="mb-1"><h6 className="mb-0 text-sm">Password</h6></label>
                              <input type="password" name="password" onBlur={handleClick} placeholder="Enter password" />
                          </div>

                          <div className="row px-3 mb-4">
                              <div className="custom-control custom-checkbox custom-control-inline">
                                  <input id="chk1" type="checkbox" name="chk" className="custom-control-input" />

                              </div>
                    
                          </div>
                          <div className="row mb-3 px-3">
                              <button type="submit" onClick={handleSubmit} value="Submit" className="btn btn-blue text-center">Submit</button>
                          </div>
                      </form>
                      <p className='text-danger'>{user.error}</p>
                      <p className='text-danger'>{emailVerified}</p>
                      <div className="row mb-4 px-3">
                          <small className="font-weight-bold">Already have an account? <a className="text-primary " href='/login'>Login</a></small>
                      </div>

                  </div>
              </div>
          </div>
          <div className="bg-blue py-4">
              <div className="row px-3">
                  <small className="ml-4 ml-sm-5 mb-2">Copyright &copy; 2019. All rights reserved.</small>
                  <div className="social-contact ml-4 ml-sm-auto">
                      <span className="fa fa-facebook mr-4 text-sm"></span>
                      <span className="fa fa-google-plus mr-4 text-sm"></span>
                      <span className="fa fa-linkedin mr-4 text-sm"></span>
                      <span className="fa fa-twitter mr-4 mr-sm-5 text-sm"></span>
                  </div>
              </div>
          </div>
      </div>
  </div>
    );
};

export default Register;