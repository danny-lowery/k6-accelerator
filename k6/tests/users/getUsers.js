import http from 'k6/http';
import { BASE_URL } from '../../fixtures/request-constants.js';

/**
 * Send a valid GET request to the users endpoint that results in a 200 OK status code.
 */
export function getUsers(userId) {
  const requestUrl = `${BASE_URL}/users/${userId}`;
  return http.get(requestUrl);
}

/**
 * Send an invalid GET request to the users endpoint that results in a 404 status code.
 */
export function getUsersNoUserId() {
  const requestUrl = `${BASE_URL}/users/`;
  return http.get(requestUrl);
}
