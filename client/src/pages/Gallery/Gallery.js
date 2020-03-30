import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getStories } from '../../actions/gallery';

const Gallery = ({ stories, getStories }) => {
  getStories();
  return <div></div>;
};

Gallery.propTypes = {
  getStories: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  stories: state.stories
});

export default connect(mapStateToProps, { getStories })(Gallery);
