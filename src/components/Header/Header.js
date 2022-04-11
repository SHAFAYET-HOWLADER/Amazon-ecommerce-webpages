import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { FaArrowRight } from 'react-icons/fa';
import logo from '../../images/Logo.svg'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    const [user] = useAuthState(auth);
    const logOut = ()=>{
        signOut(auth);
    }
    return (
        <nav className='header'>
           <img src={logo} alt="logo" />
           <div className="menu">
                   <li><CustomLink className="anchor" to="/shop">Shop</CustomLink></li>
                   <li><CustomLink className="anchor" to="/order">Order </CustomLink></li>
                   <li><CustomLink className="anchor" to="/inventory">Inventory</CustomLink></li>
                   <li><CustomLink className="anchor" to="/about">About</CustomLink></li>
                    {
                      user ? <button onClick={logOut}>SignOut <FaArrowRight className='right_arrow'/></button>
                        :<li><CustomLink to="login" className="anchor">Login</CustomLink></li>
                    }
                   <li><CustomLink to="signUp" className="anchor">SignUp</CustomLink></li>
           </div>
        </nav>
    );
};
export default Header;