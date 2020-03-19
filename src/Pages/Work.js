import React, { Fragment } from 'react';
import Work from '../components/home/work';
import Fixed from '../components/home/fixed-icons';

const PortfolioPage = () => {
  return (
    <Fragment>
      <Work />
      <Fixed />
    </Fragment>
  );
};

export default { component: PortfolioPage };
