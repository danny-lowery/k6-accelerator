import http from 'k6/http';
import checkResponseStatus from '../../helpers/check-response-status.js';
import { OK } from '../../fixtures/status-codes.js';

/**
 * Function to get the authentication header.
 *
 * @returns {{headers: {Authorization: string, "Content-Type": string}}} Authentication header including the access token
 */
export default function getAuthHeader() {
  const requestUrl = 'requestUrl';
  const requestBody = 'requestBody';
  const requestParams = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const response = http.post(requestUrl, requestBody, requestParams);

  checkResponseStatus(response, OK);

  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${response.json().access_token}`,
    },
  };
}
