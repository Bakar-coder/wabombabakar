import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Resume from '../components/send-resume';
import Fixed from '../components/home/fixed-icons';
import { dowloadResume } from '../state/actions';

const ResumePage = ({ getResume, dowloadResume }) => {
  return (
    <Fragment>
      <Resume dowloadResume={dowloadResume} />
      <Fixed />
    </Fragment>
  );
};

ResumePage.propTypes = {
  getResume: PropTypes.func.isRequired
};

export default { component: connect(null, { dowloadResume })(ResumePage) };
