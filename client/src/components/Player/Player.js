import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography
} from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  details: {
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: '1 0 auto'
  },
  cover: {
    width: 151
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  playIcon: {
    height: 38,
    width: 38
  }
}));

const Player = ({ url, play }) => {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image='http://via.placeholder.com/350x150'
          title='Live from space album cover'
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component='h5' variant='h5'>
              Live From Space
            </Typography>
            <Typography variant='subtitle1' color='textSecondary'>
              Mac Miller
            </Typography>
          </CardContent>
          <div className={classes.controls}>
            <IconButton style={{ color: 'pink' }}>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='play/pause'>
              <PlayArrowIcon className={classes.playIcon} />
            </IconButton>
          </div>
        </div>
      </Card>
      {/* 
        Add description for the story
      */}
      {/* <MediaPlayer
        url={url}
        playing={play}
        config={{ file: { forceAudio: true } }}
      /> */}
    </>
  );
};

Player.propTypes = {
  url: PropTypes.string.isRequired,
  play: PropTypes.bool.isRequired
};

export default Player;
