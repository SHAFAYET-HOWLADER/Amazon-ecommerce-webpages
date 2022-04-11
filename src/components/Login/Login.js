import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import './Login.css'
import {useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Login = () => {
  const navigate  = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const from = location.state?.from?.pathname || '/';
  if(user){
   navigate(from, {replace : true});
  }

  const handleEmailBlur = (event)=>{
    setEmail(event.target.value);
  }
  const handlePassBlur = (event)=>{
    setPassword(event.target.value);
  }
  const createLoginUser = (event)=>{
    event.preventDefault();
    signInWithEmailAndPassword(email,password);
  }
    return (
        <div className='form_container'>
            <h2 className='form_title'>Login</h2>
             <div>
              <form onSubmit={createLoginUser}>
                  <div className='input_group'>
                    <label htmlFor='email'>Email</label>
                    <input onBlur={handleEmailBlur} type='email' placeholder='Your Email'required/>
                  </div> 
                  <div className='input_group'>
                    <label htmlFor='password'>Password</label>
                    <input onBlur={handlePassBlur} type='password' placeholder='Your Password'required/>
                  </div>
                  <p>{error?.message}</p>
                  <p>{loading}</p>
                  <div className='login_btn'>
                   <input className='login_btn' type='submit' value='Login'/>
                  </div>
              </form>
            <div className='new_user'>
               <p>New to Ema-jhon ? &nbsp; <Link to='/signUp'>Create new account</Link></p>
               <span>Or</span>
            </div>
            <div className='google'>
              <div className='google_signIn'>
               <FaGoogle className='google_icon'/> <span>Continue with google</span>
              </div>
            </div>
            </div>
        </div>
    );
};
 
export default Login;