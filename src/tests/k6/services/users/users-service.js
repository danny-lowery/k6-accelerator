import { BASE_URL } from '../../fixtures/request-constants.js';
import http from 'k6/http';

/**
 * Send a GET request to the users' endpoint.
 */
export function getUsers(userId) {
	const requestUrl = `${BASE_URL}/users/${userId}`;
	return http.get(requestUrl);
}

export function getUsersNoUserId() {
	const requestUrl = `${BASE_URL}/users/`;
	return http.get(requestUrl);
}
