import React, { Fragment } from 'react';
import Head from '../components/home/header';
import Fixed from '../components/home/fixed-icons';

const HomePage = () => {
  return (
    <Fragment>
      <Head />
      <Fixed />
    </Fragment>
  );
};

export default { component: HomePage };
