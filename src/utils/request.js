import axios from 'axios';

export const apiInstance = axios.create({
  baseURL: process.env.API_BASE_URL
});

const makeRequest = async (url, options = { method: 'GET' }) => {
  const { auth } = JSON.parse(localStorage.getItem('persist:root'));
  let userToken;
  if (auth) userToken = JSON.parse(auth).token;

  return apiInstance({
    url,
    method: options.method,
    data: options.body,
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: userToken ? `Bearer ${userToken}` : ''
    }
  });
};

export default makeRequest;
