import React from 'react';

export default () => (
  <footer className='footer footer-dark bg-gradient-transparent pt-0'>
    <div className='container'>
      <div className='row align-items-center justify-content-md-between py-4 delimiter-top'>
        <div className='col-md-6'>
          <div className='copyright text-sm font-weight-bold text-center text-md-left'>
            &copy; 2020{' '}
            <a href='#' className='font-weight-bold' target='_blank'>
              Wabomba Bakar
            </a>
            . All rights reserved.
          </div>
        </div>
        <div className='col-md-6'>
          <ul className='nav justify-content-center justify-content-md-end mt-3 mt-md-0'>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='https://linkedin.com/in/wabombabakar'
                target='_blank'
              >
                <i className='fab fa-linkedin'></i>
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link active'
                href='https://twitter.com/BakarWabomba
                '
                target='_blank'
              >
                <i className='fab fa-twitter'></i>
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='https://github.com/bakarCoder'
                target='_blank'
              >
                <i className='fab fa-github'></i>
              </a>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link'
                href='https://facebook.com/wabomba.bakar'
                target='_blank'
              >
                <i className='fab fa-facebook'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
