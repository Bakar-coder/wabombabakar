import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import SideNav from './sideNav';

import { connect } from 'react-redux';
import Logo from '../../images/white.png';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import { bindActionCreators } from 'redux';
import { getResume } from '../../state/actions';

const Navbar = ({ auth, logoutUser, getResume, history }) => {
  const { pathname } = history.location;
  const [state, setState] = React.useState({ isOpen: false });
  const { isOpen } = state;
  const handleNavToggle = () => {
    setState({ ...state, isOpen: !state.isOpen });
  };

  return (
    <Fragment>
      <div className='navbar'>
        <div className='navbar__content'>
          <Link className='logo' to='/'>
            <img
              alt='Image placeholder'
              src={Logo}
            />
          </Link>

          {!isOpen && (
            <IoMdMenu className='menu' onClick={() => handleNavToggle()} />
          )}

          {isOpen && (
            <IoMdClose className='menu' onClick={() => handleNavToggle()} />
          )}

          <ul className='list-group'>
            <li className='list-item'>
              <Link
                className={
                  pathname === '/' ? 'nav-link nav-link__active' : 'nav-link'
                }
                to='/'>
                <span>01.</span> Home
              </Link>
            </li>
            <li className='list-item'>
              <Link
                className={
                  pathname === '/about'
                    ? 'nav-link nav-link__active'
                    : 'nav-link'
                }
                to='/about'>
                <span>02.</span> About Me
              </Link>
            </li>
            <li className='list-item'>
              <Link
                className={
                  pathname === '/work'
                    ? 'nav-link nav-link__active'
                    : 'nav-link'
                }
                to='/work'>
                <span>03.</span> Work
              </Link>
            </li>
            <li className='list-item'>
              <Link
                className={
                  pathname === '/contact'
                    ? 'nav-link nav-link__active'
                    : 'nav-link'
                }
                to='/contact'>
                <span>04.</span> Contact
              </Link>
            </li>

            <li className='list-item'>
              <button className='btn btn__sm btn__outline btn__primary'>
                <Link to='/resume'>Resume</Link>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <SideNav
        isOpen={isOpen}
        user={auth.user}
        logoutUser={logoutUser}
        pathname={pathname}
        handleNavToggle={handleNavToggle}
      />
    </Fragment>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

function mapDispatch(dispatch) {
  return bindActionCreators({ getResume }, dispatch);
}

export default connect(mapStateToProps, mapDispatch)(withRouter(Navbar));
