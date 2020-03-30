import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography, Button } from '@material-ui/core';

const Landing = ({ history }) => {
  return (
    <>
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
            <Button
              variant='contained'
              color='secondary'
              onClick={() => history.push('/sign-up')}
            >
              Sign up for free
            </Button>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

Landing.propTypes = {
  history: PropTypes.object.isRequired
};

export default Landing;
