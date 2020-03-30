import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AppBar, Toolbar, Icon, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { LocalLibrary } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/auth';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  navigation: {
    color: 'inherit',
    textDecoration: 'none'
  }
}));

const Navbar = ({ history, auth: { isAuthenticated }, logout }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Icon className={classes.menuButton}>
            <LocalLibrary />
          </Icon>
          <Typography variant='h6' className={classes.title}>
            Storyteller
          </Typography>
          {isAuthenticated && (
            <>
              <Button
                variant='outlined'
                color='inherit'
                className={classes.menuButton}
                onClick={() => history.push('/profile')}
              >
                Profile
              </Button>
              <Button
                variant='contained'
                color='secondary'
                className={classes.menuButton}
                onClick={logout}
              >
                Logout
              </Button>
            </>
          )}
          {!isAuthenticated && (
            <>
              <Button
                variant='outlined'
                color='inherit'
                className={classes.menuButton}
                onClick={() => history.push('/sign-in')}
              >
                Sign in
              </Button>
              <Button
                variant='contained'
                color='secondary'
                className={classes.menuButton}
                onClick={() => history.push('/sign-up')}
              >
                Create account
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navbar.propTypes = {
  history: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
  logout: PropTypes.func
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default withRouter(connect(mapStateToProps, { logout })(Navbar));
