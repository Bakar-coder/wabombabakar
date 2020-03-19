import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Resume from '../components/resume';
import Fixed from '../components/home/fixed-icons';
import { getResume } from '../state/actions';

const ResumePage = ({ getResume }) => {
  return (
    <Fragment>
      <Resume getResume={getResume} />
      <Fixed />
    </Fragment>
  );
};

ResumePage.propTypes = {
  getResume: PropTypes.func.isRequired
};

export default { component: connect(null, { getResume })(ResumePage) };
