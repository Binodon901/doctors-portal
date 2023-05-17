import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import 'firebase/auth';
import auth from './Firebase';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import './Login.css';
import { UserContext } from '../../App';
const Login = () => {
    const [loggedInUser, setLoggedInUser] =useContext(UserContext) ;
    const history = useNavigate();
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
        success: ''
    })

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

    const handleSubmit = (e) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          const newUserInfo = {...user}
                newUserInfo.error=''
                newUserInfo.success=true
                setUser(newUserInfo)
                setLoggedInUser(newUserInfo);
                console.log('Login success');
                console.log(auth.currentUser.emailVerified,'uyuiyuiyiy')
                window.sessionStorage.setItem('email',user.email);
                history("/");
          // ...
          console.log(user.password);
          console.log(user.email);
        })
        .catch((error) => {
           const newUserInfo = {...user};
                newUserInfo.error=error.message
                console.log(error.message)
                newUserInfo.success=false
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
        });
       
        e.preventDefault();
    }
    return (
        <div className="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
            <div className="card card0 border-0">
                <div className="row d-flex">
                    <div className="col-lg-6">
                        <div className="card1 pb-5">
                            <p>Email:{user.email}</p>
                            <div className="row">
                                <img src="https://i.imgur.com/CXQmsmF.png" className="logo" />
                            </div>
                            <div className="row px-3 justify-content-center mt-4 mb-5 border-line">
                                <img src="https://i.imgur.com/uNGdWHi.png" className="image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="card2 card border-0 px-4 py-5">
                            <div className="row mb-4 px-3">
                                <h6 className="mb-0 mr-4 mt-2">Sign in with</h6>
                                <div className="facebook text-center mr-3"><FontAwesomeIcon icon={faFacebookF} /></div>
                                <div className="twitter text-center mr-3"><FontAwesomeIcon icon={faGooglePlusG} /></div>
                            </div>
                            <div className="row px-3 mb-4">
                                <div className="line"></div>
                                <small className="or text-center">Or</small>
                                <div className="line"></div>
                            </div>

                            <form action=''>
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
                                    <a href="#" className="ml-auto mb-0 text-sm">Forgot Password?</a>
                                </div>
                                <div className="row mb-3 px-3">
                                    <button type="submit" onClick={handleSubmit} value="Submit" className="btn btn-blue text-center">Login</button>
                                </div>
                            </form>
                            <p className='text-danger'>{user.error}</p>
                            <div className="row mb-4 px-3">
                                <small className="font-weight-bold">Don't have an account? <a className="text-danger " href='/register'>Register</a></small>
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

export default Login;