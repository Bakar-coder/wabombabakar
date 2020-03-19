import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Resume = ({ history, match, dowloadResume }) => {
  const { token } = match.params;

  const handleDownload = () => {
    dowloadResume(token, history);
  };

  return (
    <div className='contact  '>
      <div className='resume__get'>
        <button
          type='submit'
          className='btn btn__warning btn__lg'
          onClick={handleDownload}>
          Download Resume
        </button>
      </div>
    </div>
  );
};

Resume.propTypes = {
  dowloadResume: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default withRouter(Resume);
