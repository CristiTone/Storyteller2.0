import client from './client';

function getStories() {
  return client('gallery');
}

export { getStories };
