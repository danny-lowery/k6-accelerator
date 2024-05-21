import { BASE_URL } from '../../fixtures/request-constants.js';
import http from 'k6/http';

/**
 * Send a GET request to the users' endpoint.
 */
export async function getUsers(userId) {
	const requestUrl = `${BASE_URL}/users/${userId}`;
	return await http.asyncRequest('GET', requestUrl);
}

export async function getUsersNoUserId() {
	const requestUrl = `${BASE_URL}/users/`;
	return await http.asyncRequest('GET', requestUrl);
}
