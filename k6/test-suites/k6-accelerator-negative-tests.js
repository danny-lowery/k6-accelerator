import * as getUsers from '../services/users/users-service.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import getAuthHeader from '../services/authentication/authentication.js';
import checkResponseStatus from '../helpers/check-response-status.js';
import { NOT_FOUND } from '../fixtures/status-codes.js';

export let options = {
  vus: 1,
  thresholds: {
    checks: ['rate>0.99'], // the rate of successful checks should be higher than 99%.
  },
};

/**
 * Setup to be carried out prior to the test, in this instance, the auth header is being provided.
 * See https://k6.io/docs/using-k6/test-lifecycle/ for more information.
 *
 * @returns {{auth_header: ({headers: {Authorization: string, "Content-Type": string}}|*)}}
 */
// export function setup() {
//     return {auth_header: getAuthHeader()};
// }

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function (data) {
  const getUsersResponse = getUsers.getUsersNoUserId();
  checkResponseStatus(getUsersResponse, NOT_FOUND);
}
