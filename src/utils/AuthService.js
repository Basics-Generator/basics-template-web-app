import axios from 'axios';
import { browserHistory } from 'react-router';
import { API_ROOT } from '../config.js';

const ACCESS_TOKEN_KEY  = 'access_token';
const ID_KEY            = 'id';

export function getAccessToken() {
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getId() {
  return localStorage.getItem(ID_KEY);
}

export function login(username, password) {
   const loginUrl = `${API_ROOT}user/login`;
   axios.post(loginUrl, {
      username: username,
      password: password
   })
  .then(function (response) {
      localStorage.setItem(ACCESS_TOKEN_KEY, response.data.token);
      localStorage.setItem(ID_KEY, response.data.id);
      const profileUrl = `${API_ROOT}user?id=${getId()}`;
      axios.get(profileUrl , { headers: { Authorization: `${getAccessToken()}`} })
      .then(function (response) {
        console.log(response);

    //    browserHistory.push('/home');
      })
      .catch(function (error) {
          browserHistory.push('/');
      });
  })
  .catch(function (error) {
      browserHistory.push('/');
  });
}

function profile() {
   const url = `${API_ROOT}user?id=${getId()}`;

}


export function requireAuth(nextState, replace) {
   if (!isLoggedIn()) {
      replace({pathname: '/'});
   }
}

export function isLoggedIn() {
   if (getAccessToken() == null) {
      return false
   }
   return true
}

export function logout() {
    localStorage.removeItem(ACCESS_TOKEN_KEY);
    browserHistory.push('/');
}