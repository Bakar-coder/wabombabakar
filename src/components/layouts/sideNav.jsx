import React from 'react';
import { Link } from 'react-router-dom';

const SideNav = ({ isOpen, user, logoutUser, pathname, handleNavToggle }) => {
  return (
    <div className={isOpen ? 'side-nav side-nav-open' : 'side-nav'}>
      <div className='nav-header' />
      <ul className='list-group'>
        <li className='list-item'>
          <Link
            onClick={() => handleNavToggle()}
            className={
              pathname === '/' ? 'nav-link nav-link__active' : 'nav-link'
            }
            to='/'>
            <span>01.</span> Home
          </Link>
        </li>
        <li className='list-item'>
          <Link
            onClick={() => handleNavToggle()}
            className={
              pathname === '/about' ? 'nav-link nav-link__active' : 'nav-link'
            }
            to='/about'>
            <span>02.</span> About Me
          </Link>
        </li>
        <li className='list-item'>
          <Link
            onClick={() => handleNavToggle()}
            className={
              pathname === '/work' ? 'nav-link nav-link__active' : 'nav-link'
            }
            to='/work'>
            <span>03.</span> Work
          </Link>
        </li>
        <li className='list-item'>
          <Link
            onClick={() => handleNavToggle()}
            className={
              pathname === '/contact' ? 'nav-link nav-link__active' : 'nav-link'
            }
            to='/contact'>
            <span>04.</span> Contact
          </Link>
        </li>

        <li className='list-item'>
          <button className='btn btn__sm btn__outline btn__primary'>
            <Link onClick={() => handleNavToggle()} to='/resume'>
              Resume
            </Link>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
