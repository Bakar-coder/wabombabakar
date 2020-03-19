import React, { Fragment } from 'react';
import About from '../components/home/about';
import Fixed from '../components/home/fixed-icons';

const AboutPage = () => {
  return (
    <Fragment>
      <About />
      <Fixed />
    </Fragment>
  );
};

export default { component: AboutPage };
