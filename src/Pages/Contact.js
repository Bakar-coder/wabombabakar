import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { sendMessage } from '../state/actions';
import Contact from '../components/home/contact';
import Fixed from '../components/home/fixed-icons';

const ContactPage = ({ sendMessage }) => {
  return (
    <Fragment>
      <Contact sendMessage={sendMessage} />
      <Fixed />
    </Fragment>
  );
};

ContactPage.propTypes = {
  sendMessage: PropTypes.func.isRequired
};

const mpaDispatch = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default { component: connect(null, mpaDispatch)(ContactPage) };
