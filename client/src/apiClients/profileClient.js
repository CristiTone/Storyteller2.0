import client from './client';
let cache = null;

function getLibrary() {
  if (cache) return Promise.resolve(cache);

  const result = client('profile/library');
  result.then((stories) => (cache = stories));

  return result;
}

function getProfile() {
  return client('profile');
}

function deleteProfile() {
  return client('profile', { method: 'DELETE' });
}

export { getLibrary, getProfile, deleteProfile };
