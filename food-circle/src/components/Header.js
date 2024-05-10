
import React from 'react';
import { LOGO_URL } from '../utils/constants';


const Header = () => {
    return (
      <div className='header-container'>
        <a href="/">
          <img className="header-logo" src={LOGO_URL} alt="Food Logo" />
        </a>
        <div className='header-nav-items'>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>)
  }

  export default Header;