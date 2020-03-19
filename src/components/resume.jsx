import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Resume = ({ getResume, history }) => {
  const [state, setState] = useState({ isClosed: true });
  if (state.isClosed)  setState({ ...state, isClosed: false });
  const [user, setUser] = useState({
    email: ''
  });

  const [errors, setErrors] = useState({
    error: null
  });

  const handleSubmission = e => {
    e.preventDefault();
    getResume(user, history);
  };

  const handleInputChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const { email } = user;

  return (
    <div className='contact resume'>
      <div className='contact__content'>
        <div className={state.isClosed ? "content__closed": "content__open"}>
        <form className='form' onSubmit={handleSubmission}>
          <div className='form__title'>
            <h3>Get My Resume</h3>
          </div>

          <div className='row'>
            <div className='form-group col-md-6'>
              <input
                type='email'
                className='form-control'
                name='email'
                id='email'
                value={email}
                placeholder='Enter Your Email address'
                required
                onChange={handleInputChange}
              />
            </div>
          </div>

          <button type='submit' className='btn btn__outline form__btn'>
            Get Resume
          </button>
        </form>
      </div>
      </div>
    </div>
  );
};

Resume.propTypes = {};

export default withRouter(Resume);
