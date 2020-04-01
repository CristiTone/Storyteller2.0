import React from 'react';
import PropTypes from 'prop-types';
import MediaPlayer from 'react-player';
import { connect } from 'react-redux';
import { togglePlay } from '../../actions/playing';

const ProgressBar = ({ playing: { playingStory, isPlaying }, togglePlay }) => {
  if (!playingStory) return null;
  return (
    <MediaPlayer
      url={playingStory}
      playing={isPlaying}
      controls
      width='100%'
      height='44px'
      config={{ file: { forceAudio: true } }}
      onPlay={() => togglePlay(true)}
      onPause={() => togglePlay(false)}
      style={{ position: 'sticky', bottom: 0 }}
    />
  );
};

ProgressBar.propTypes = {
  isPlaying: PropTypes.bool,
  playingStory: PropTypes.string,
  togglePlay: PropTypes.func
};

const mapStateToProps = state => ({
  playing: state.playing
});

export default connect(mapStateToProps, { togglePlay })(ProgressBar);
