import React, { useState } from 'react';
import WabombaBakar from '../../images/wabomba_bakar.png';

export default () => {
  const [state, setState] = useState({ isClosed: true });
  if (state.isClosed) setState({ ...state, isClosed: false });

  return <div className='about'>
    <div className={state.isClosed ? "content__closed" : "content__open"}>
      <div className='grid'>
        <div className='image-container'>
          <img
            src={WabombaBakar}
            alt='portfolio'
            className='img img-center img-fluid'
          />
        </div>

        <div className='description'>
          <h3 className='heading--sub mbs'>
            <span>02. </span>About Me
        </h3>
          <p className='lead text-white'>
            Hallo! <br /> I am{' '}
            <strong>
              <span className='text-info'>Bakar</span>{' '}
            </strong>
            , A software engineer / full-stack web developer based in Kampala,
            Uganda who loves building apps that live on the internet. I develop
            exceptional websites and web applications that provide intuitive,
            pixel perfect user interfaces with efficient, highly secure and modern
            backends using cutting edge technologies and best practices.
        </p>

          <p className='lead text-white my-4'>
            Here are some of the technologies I use in my development pipeline.
        </p>

          <div className='list-group'>
            <ul>
              <li> => HTML5 & CSS3 (SASS)</li>
              <li> => Bootstrap</li>
              <li> => Javascript (ES6+) and OOP</li>
              <li> => React</li>
              <li> => Node.js</li>
              <li> => Express.js</li>
              <li> => Ejs</li>
            </ul>

            <ul>
              <li> => Express Handlebars</li>
              <li> => Mongodb</li>
              <li> => mysql</li>
              <li> => postgresql</li>
              <li> => Sql</li>
              <li> => Git, Github & Bitbucket</li>
              <li> => Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
};
