import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, List, ListItem, ListItemText, Box } from '@material-ui/core';
import { getStories } from '../../actions/gallery';
import { togglePlay, setStory } from '../../actions/playing';
import Player from '../../components/Player';

const Gallery = ({
  gallery: { stories, loading },
  playing: { playingStory, isPlaying },
  togglePlay,
  setStory,
  getStories
}) => {
  useEffect(() => {
    getStories();
  }, [getStories]);

  const setStoryPlaying = url => {
    if (url !== playingStory) {
      setStory(url);
      togglePlay(true);
    } else togglePlay(!isPlaying);
  };

  if (loading) return 'Loading...';
  console.log(stories);
  return (
    <Box m={4}>
      <Grid container spacing={8}>
        <Grid item xs={2}>
          <List component='nav' aria-label='secondary mailbox folders'>
            <ListItem button>
              <ListItemText primary='Home' />
            </ListItem>
            <ListItem button>
              <ListItemText primary='Search' />
            </ListItem>
            <ListItem button>
              <ListItemText primary='Your library' />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={10}>
          <Grid container direction='column' spacing={2}>
            {stories.map(story => (
              <Grid item key={story._id}>
                <Player
                  story={story}
                  setStoryPlaying={setStoryPlaying}
                  isPlaying={isPlaying && story.playing_url === playingStory}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

Gallery.propTypes = {
  getStories: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  gallery: state.gallery,
  playing: state.playing
});

export default connect(mapStateToProps, { getStories, togglePlay, setStory })(
  Gallery
);
