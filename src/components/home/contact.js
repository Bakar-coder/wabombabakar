import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const Contact = ({ sendMessage, history }) => {
  const [state, setState] = useState({ isClosed: true });
  if (state.isClosed)  setState({ ...state, isClosed: false });
  const [message, setMessage] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    msg: ''
  });

  const [errors, setErrors] = useState({
    error: null
  });

  const handleSubmission = e => {
    e.preventDefault();
    sendMessage(message, history);
  };

  const handleInputChange = e => {
    setMessage({
      ...message,
      [e.target.name]: e.target.value
    });
  };

  const { name, company, phone, email, msg } = message;


  return (
    <div className='contact'>
      <div className='contact__content'>
        <div className={state.isClosed ? "content__closed": "content__open"}>
        <form className='form' onSubmit={handleSubmission}>
          <div className='form__title'>
            <h3>Lets Get in Touch</h3>
          </div>

          <div className='row'>
            <div className='form-group col-md-6'>
              <input
                type='text'
                className='form-control'
                name='name'
                id='name'
                value={name}
                placeholder='Full Name'
                required
                onChange={handleInputChange}
              />
            </div>

            <div className='form-group col-md-6'>
              <input
                type='tel'
                className='form-control'
                name='phone'
                id='phone'
                value={phone}
                placeholder='Phone Number'
                required
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className='row'>
            <div className='form-group col-md-6'>
              <input
                type='text'
                className='form-control'
                name='company'
                id='company'
                value={company}
                placeholder='Company - Optional'
                minLength='3'
                onChange={handleInputChange}
              />
            </div>

            <div className='form-group col-md-6'>
              <input
                type='email'
                className='form-control'
                name='email'
                id='email'
                value={email}
                placeholder='Email address'
                required
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className='form-group'>
            <textarea
              name='msg'
              id='msg'
              className='form-control'
              cols='30'
              rows='4'
              value={msg}
              placeholder='Message'
              required
              onChange={handleInputChange}></textarea>
          </div>

          <button type='submit' className='btn btn__outline form__btn'>
            Send
          </button>
        </form>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  sendMessage: PropTypes.func.isRequired
};

export default withRouter(Contact);
