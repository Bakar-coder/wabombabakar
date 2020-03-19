import React from 'react';
import {
  IoLogoGithub,
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter
} from 'react-icons/io';

const Fixed = () => {
  return (
    <div className='fixed-bottom'>
      <p className='fixed_name'>Wabomba Bakar</p>
      <div className='fixed_icons'>
        <div className='social-icons'>
          <a href='https://www.github.com/bakar-coder' target='_blank'>
            <IoLogoGithub className='icon' />
          </a>
          <a href='https://www.facebook.com/wabomba.bakar' target='_blank'>
            <IoLogoFacebook className='icon' />
          </a>
          <a href='https://www.twitter.com/BakarWabomba' target='_blank'>
            <IoLogoTwitter className='icon' />
          </a>
          <a href='https://www.linkedin.com/in/wabombabakar' target='_blank'>
            <IoLogoLinkedin className='icon' />
          </a>
        </div>
      </div>
      <div className='line line__one'></div>
      <div className='line line__two'></div>
    </div>
  );
};

export default Fixed;
