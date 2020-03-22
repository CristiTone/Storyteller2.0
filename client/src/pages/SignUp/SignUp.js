import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import { Typography, TextField, Button } from '@material-ui/core';

const Signup = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <>
      <Typography variant='h1'>Sign Up</Typography>
      <Typography variant='body2'>
        {/* <i className='fas fa-user' />  */}
        Create Your Account
      </Typography>
      <form onSubmit={e => onSubmit(e)}>
        <TextField
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          onChange={e => onChange(e)}
        />
        <TextField
          type='email'
          placeholder='Email Address'
          name='email'
          value={email}
          onChange={e => onChange(e)}
          helperText='This site uses Gravatar so if you want a profile image, use a
            Gravatar email'
        />

        <TextField
          type='password'
          placeholder='Password'
          name='password'
          value={password}
          onChange={e => onChange(e)}
        />
        <TextField
          type='password'
          placeholder='Confirm Password'
          name='password2'
          value={password2}
          onChange={e => onChange(e)}
        />
        <Button type='submit'>Register</Button>
      </form>
      <Typography>
        Already have an account? <Link to='/login'>Sign In</Link>
      </Typography>
    </>
  );
};

Signup.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { setAlert, register })(Signup);
