import { getAccessToken } from '../utils/AuthService';
import { browserHistory } from 'react-router';
import { API_ROOT } from '../config.js';

import axios from 'axios';

export function getUsersData() {
  const url = `${API_ROOT}user/all`;
  const token = getAccessToken();
  return axios.get(url, { headers: { Authorization: `${token}`} }).then(response => response.data.users).catch(function (error) {
  	browserHistory.push('/');
  });
}


export function getUserData(id) {
  const url = `${API_ROOT}user?id=${id}`;
  return axios.get(url, { headers: { Authorization: `${getAccessToken()}`} })
    .then(response => response.data.user)
    .catch(function (error) {
      console.log(error);
      browserHistory.push('/');
    });
}

export function createUser(data) {
  const url = `${API_ROOT}user/`;
  axios.post(url, {
    "email"			: data.email,
    "username"		: data.username,
    "password"		: data.password
  }, { headers: { Authorization: `${getAccessToken()}`}})
  .then( function (response) {
    browserHistory.push('/users');
  })
  .catch(function (error) {
  	console.log(error);
  	browserHistory.push('/');
  });
}