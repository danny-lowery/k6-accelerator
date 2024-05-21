import * as getUsers from '../services/users/users-service.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import getAuthHeader from '../services/authentication/authentication.js';
import checkResponseStatus from '../helpers/check-response-status.js';
import { NOT_FOUND } from '../fixtures/status-codes.js';
import checkResponseJson from '../helpers/check-response-json.js';
import chai, { describe } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';

export let options = {
	vus: 1,
	thresholds: {
		checks: ['rate>0.99'], // the rate of successful checks should be higher than 99%.
	},
};

chai.config.truncateVariableThreshold = 300;
chai.config.truncateMsgThreshold = 1000;

/**
 * Setup to be carried out prior to the test, in this instance, the auth header is being provided.
 * See https://k6.io/docs/using-k6/test-lifecycle/ for more information.
 *
 * @returns {{auth_header: ({headers: {Authorization: string, "Content-Type": string}}|*)}}
 */
// export function setup() {
// 	return { auth_header: getAuthHeader() };
// }

// eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/explicit-function-return-type
export default async function negativeTestSuite(data) {
	// eslint-disable-next-line prettier/prettier
	const getUsersResponse = await getUsers.getUsersNoUserId();

	describe(`Verify an invalid GET Request to users endpoint returns a ${NOT_FOUND} response status`, () => {
		checkResponseStatus(getUsersResponse, NOT_FOUND);
	});

	describe(`Verify an invalid GET Request to users endpoint returns the correct body`, () => {
		checkResponseJson(getUsersResponse, 'message', 'Cannot GET /users/');
	});
}
