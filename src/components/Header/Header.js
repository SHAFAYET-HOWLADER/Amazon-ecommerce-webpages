import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
const Header = () => {
    return (
        <nav className='header'>
           <img src={logo} alt="logo" />
           <div className="menu">
                   <li><a href="/order">Shop</a></li>
                   <li><a href="/order review">Order </a></li>
                   <li><a href="/manage inventory">Inventory</a></li>
                   <li><a href="/about">About</a></li>
           </div>
        </nav>
    );
};

export default Header;