import React from 'react';
import logo from '../../images/Logo.svg'
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
           <img src={logo} alt="logo" />
           <div className="menu">
                   <li><CustomLink className="anchor" to="/shop">Shop</CustomLink></li>
                   <li><CustomLink className="anchor" to="/order">Order </CustomLink></li>
                   <li><CustomLink className="anchor" to="/inventory">Inventory</CustomLink></li>
                   <li><CustomLink className="anchor" to="/about">About</CustomLink></li>
           </div>
        </nav>
    );
};
export default Header;