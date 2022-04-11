
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const handleNameBlur = (event)=>{
        setName(event.target.value);
      }  
      const handleAddressBlur = (event)=>{
        setAddress(event.target.value);
      } 
      const handlePhoneBlur = (event)=>{
        setPhone(event.target.value);
      } 
    const preventDefaultSubmit = (event)=>{
        event.preventDefault();
        const shipping = {name, email, phone, address};
        console.log(shipping);
    }
    return (
        <div className='form_container'>
        <h2 className='form_title'>Shipping Method</h2>
         <div>
          <form onSubmit={preventDefaultSubmit}>
              <div className='input_group'>
                <label htmlFor='name'>Name</label>
                <input onBlur={handleNameBlur} type='text' placeholder='Your Name'required/>
              </div> 
              <div className='input_group'>
                <label htmlFor='email'>Email</label>
                <input value={user?.email} readOnly type='text' placeholder='Your Email'required/>
              </div> 
              <div className='input_group'>
                <label htmlFor='address'>Address</label>
                <input onBlur={handleAddressBlur} type='text' placeholder='Your Address'required/>           
              </div> 
              <div className='input_group'>
                <label htmlFor='number'>Number</label>
                <input onBlur={handlePhoneBlur} type='number' placeholder='Your Phone Number'required/>
              </div>
              <div className='login_btn'>
              <input className='login_btn' type='submit' value='Add Shipping'/>
              </div>
          </form>        
        </div>
    </div>
    );
};

export default Shipment;