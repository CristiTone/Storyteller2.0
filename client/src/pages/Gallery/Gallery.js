import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import { getStories } from '../../actions/gallery';
import Player from '../../components/Player';

const Gallery = ({ gallery: { stories, loading }, getStories }) => {
  useEffect(() => {
    getStories();
  }, [getStories]);

  const [play, togglePlay] = useState(false);
  if (loading) return 'Loading...';
  console.log(stories);
  return (
    <div>
      <Button variant='contained' onClick={() => togglePlay(!play)}>
        Play/Pause
      </Button>
      <Player url={stories[0].playing_url} play={play} />
    </div>
  );
};

Gallery.propTypes = {
  getStories: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  gallery: state.gallery
});

export default connect(mapStateToProps, { getStories })(Gallery);
