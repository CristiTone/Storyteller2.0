import client from './client';

function getUser() {
  return client('auth');
}

function registerUser(account) {
  return client('user', {
    body: account
  });
}

function loginUser(account) {
  return client('auth', {
    body: account
  });
}

export { getUser, registerUser, loginUser };
