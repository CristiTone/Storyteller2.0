import client from './client';

function getStories() {
  return client('gallery');
}

function likeStory(storyId) {
  return client(`gallery/like/${storyId}`, { method: 'PUT' });
}

function unlikeStory(storyId) {
  return client(`gallery/unlike/${storyId}`, { method: 'PUT' });
}

export { getStories, likeStory, unlikeStory };
