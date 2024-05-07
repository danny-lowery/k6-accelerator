import http from 'k6/http';
import {BASE_URL} from "../../fixtures/request-constants.js";
import checkResponseStatus from "../../helpers/check-response-status.js";
import {OK, NOT_FOUND} from "../../fixtures/status-codes.js";

/**
 * Send a valid GET request to the users endpoint that results in a 200 OK status code.
 */
export function testGetUsers(userId) {
    const requestUrl = `${BASE_URL}/users/${userId}`;
    const response = http.get(requestUrl);

    checkResponseStatus(response, OK);
}

/**
 * Send an invalid GET request to the users endpoint that results in a 404 status code.
 */
export function testGetUsersNoUserId() {
    const requestUrl = `${BASE_URL}/users/`;
    const response = http.get(requestUrl);

    checkResponseStatus(response, NOT_FOUND);
}