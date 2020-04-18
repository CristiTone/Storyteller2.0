import client from './client';

function getLibrary() {
  return client('profile/library');
}

export { getLibrary };
