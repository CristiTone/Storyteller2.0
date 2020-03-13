function client(endpoint, { body, ...customConfig } = {}) {
  const token = window.localStorage.getItem('_token_');
  const headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  // fetch can auto-fill the FormData content type
  if (!(body instanceof FormData)) {
    headers['content-type'] = 'application/json';
  }

  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers
    }
  };

  if (body) {
    config.body = body instanceof FormData ? body : JSON.stringify(body);
  }

  return request(`${process.env.REACT_APP_API_URL}/${endpoint}`, config);
}

/**
 * Parses the JSON returned by a network request
 * @param  {object} response A response from a network request
 * @return {object}          The parsed JSON, status from the response
 */
function parseJSON(response) {
  return new Promise(resolve =>
    response
      .text()
      .then(text => {
        return text ? JSON.parse(text) : {};
      })
      .then(json => {
        resolve({
          status: response.status,
          ok: response.ok,
          json
        });
      })
  );
}

/**
 * Requests a URL, returning a promise
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {Promise}           The request promise
 */
function request(url, options) {
  return new Promise((resolve, reject) => {
    fetch(url, options)
      .then(parseJSON)
      .then(response => {
        if (response.ok) {
          return resolve(response.json);
        }
        // extract the error from the server's json
        return reject({ message: response.json.message });
      })
      .catch(error =>
        reject({
          message:
            'The server could not be reached. Please contact customer support.'
        })
      );
  });
}

export default client;
