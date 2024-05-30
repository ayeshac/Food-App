
import React, { useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router-dom';

const Header = () => {
  let [btnName, setBtnName] = useState('Login')
    return (
      <div className='header-container'>
        <a href="/">
          <img className="header-logo" src={LOGO_URL} alt="Food Logo" />
        </a>
        <div className='header-nav-items'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contactus'>Contact</Link></li>
            <li>Cart</li>
            <button className='login' onClick={()=>{
              (btnName == 'Login' ? setBtnName('Logout') : setBtnName('Login'))
            }}>{btnName}</button>
          </ul>
        </div>
      </div>)
  }

  export default Header;