import React from 'react';
// import PropTypes from 'prop-types';
import { Grid, Typography, Button } from '@material-ui/core';
import Navbar from '../../components/Navbar';

const Landing = props => {
  return (
    <>
      <Navbar />
      <div className='landing'>
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
          style={{ height: '100%' }}
          spacing={2}
        >
          <Grid item>
            <Typography color='primary' variant='h6'>
              Connect on Storyteller
            </Typography>
          </Grid>
          <Grid item>
            <Typography color='primary'>
              Discover old and new stories that you can listen to anywhere,
              anytime
            </Typography>
          </Grid>
          <Grid item>
            <Button variant='contained' color='secondary'>
              Sign up for free
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

// Landing.propTypes = {};

export default Landing;
