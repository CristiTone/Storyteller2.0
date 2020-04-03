import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Box, Tabs, Tab } from '@material-ui/core';
import { getStories } from '../../actions/gallery';
import { togglePlay, setStory } from '../../actions/playing';
import Player from '../../components/Player';
import Search from './Search';
import YourLibrary from './YourLibrary';

const Gallery = ({
  gallery: { stories, loading },
  playing: { playingStory, isPlaying },
  togglePlay,
  setStory,
  getStories,
  history
}) => {
  useEffect(() => {
    getStories();
  }, [getStories]);

  const [tab, setTab] = useState('gallery');

  const setStoryPlaying = url => {
    if (url !== playingStory) {
      setStory(url);
      togglePlay(true);
    } else togglePlay(!isPlaying);
  };

  const handleChange = (e, newTab) => {
    setTab(newTab);
    history.push(`/${newTab}`);
  };

  if (loading) return 'Loading...';
  console.log(stories);
  return (
    <Box m={4}>
      <Grid container spacing={8}>
        <Grid item xs={2}>
          <Tabs value={tab} onChange={handleChange} orientation='vertical'>
            <Tab value='gallery' label='Gallery' />
            <Tab value='search' label='Search' />
            <Tab value='your-library' label='Your Library' />
          </Tabs>
        </Grid>
        <Grid item xs={10}>
          {tab === 'gallery' && (
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
          )}
          {tab === 'search' && <Search />}
          {tab === 'your-library' && <YourLibrary />}
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
