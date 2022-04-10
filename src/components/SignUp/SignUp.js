import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();

  const handleEmailBlur = (event)=>{
    setEmail(event.target.value);
  }  
  const handlePasswordBlur = (event)=>{
    setPassword(event.target.value);
  } 
  const handleConfirmPasswordBlur = (event)=>{
    setConfirmPassword(event.target.value);
  }
  if(user){
    navigate("/shop");
  }
  const preventDefaultSubmit = (event)=>{
      event.preventDefault();
      if(password !== confirmPassword){
        setError("your password did not match");
        return;
      }
      else if(password < 6){
       setError("please keep at least 6 characters or longer")
       return;
      }
      createUserWithEmailAndPassword(email, password)
  }
    return (
        <div className='form_container'>
            <h2 className='form_title'>Sign Up</h2>
             <div>
              <form onSubmit={preventDefaultSubmit}>
                  <div className='input_group'>
                    <label htmlFor='email'>Email</label>
                    <input onBlur={handleEmailBlur} type='email' placeholder='Your Email'required/>
                  </div> 
                  <div className='input_group'>
                    <label htmlFor='password'>Password</label>
                    <input onBlur={handlePasswordBlur} type='password' placeholder='Your Password'required/>
                  </div> 
                  <div className='input_group'>
                    <label htmlFor='password'>Confirm Password</label>
                    <input onBlur={handleConfirmPasswordBlur} type='password' placeholder='Confirm Password'required/>
                    <p>{error}</p>
                  </div>
                  <div className='login_btn'>
                  <input className='login_btn' type='submit' value='Sign Up'/>
                  </div>
              </form>
            <div className='new_user'>
               <p>Already have an account ? &nbsp; <Link to='/login'>Login</Link></p>
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

export default SignUp;
