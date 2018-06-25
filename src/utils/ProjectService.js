import { getAccessToken } from '../utils/AuthService';
import { browserHistory } from 'react-router';
import { API_ROOT } from '../config.js';

import axios from 'axios';

export function getProjectsData() {
  const url = `${API_ROOT}project/all`;
  return axios.get(url, { headers: { Authorization: `${getAccessToken()}`} })
  	.then(response => response.data.projects)
  	.catch(function (error) {
  		browserHistory.push('/');
  	});
}

export function getProjectData(id) {
  const url = `${API_ROOT}project?id=${id}`;
  return axios.get(url, { headers: { Authorization: `${getAccessToken()}`} })
    .then(response => response.data.project)
    .catch(function (error) {
      browserHistory.push('/');
    });
}

export function createProject(data) {
  const url = `${API_ROOT}project/`;
  axios.post(url, {
    "name"		    : data.name,
    "description"	: data.description,
    "ios"			    : data.ios,
    "android"		  : data.android,
    "web"			    : data.web
  }, { headers: { Authorization: `${getAccessToken()}`}})
  .then( function (response) {
    browserHistory.push('/projects');
  })
  .catch(function (error) {
  	console.log(error);
  	browserHistory.push('/');
  });
}

export function removeProject(id) {
  const url = `${API_ROOT}project?id=${id}`;
  axios.delete(url, { headers: { Authorization: `${getAccessToken()}`}})
  .then( function (response) {
    browserHistory.push('/projects');
  })
  .catch(function (error) {
    console.log(error);
    browserHistory.push('/');
  });
}