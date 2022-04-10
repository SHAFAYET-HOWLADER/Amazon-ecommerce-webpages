import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import './Login.css'
const Login = () => {
    return (
        <div className='form_container'>
            <h2 className='form_title'>Login</h2>
             <div>
              <form>
                  <div className='input_group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' placeholder='Your Email'/>
                  </div> 
                  <div className='input_group'>
                    <label htmlFor='password'>Password</label>
                    <input type='password' placeholder='Your Password'/>
                  </div>
                  <div className='login_btn'>
                   <button type='button'>Login</button>
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