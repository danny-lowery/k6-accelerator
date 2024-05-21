// eslint-disable-next-line @typescript-eslint/no-unused-vars
import getAuthHeader from '../services/authentication/authentication.js';
import * as getUsers from '../services/users/users-service.js';
import checkResponseStatus from '../helpers/check-response-status.js';
import { OK } from '../fixtures/status-codes.js';
import chai, { describe } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';

export let options = {
	vus: 1000,
	iterations: 5000,
	thresholds: {
		http_req_failed: ['rate<0.01'], // http errors should be less than 1%.
		http_req_duration: ['p(99)<3000'], // 99% of requests should be below 3000ms.
		checks: ['rate>0.9'], // the rate of successful checks should be higher than 90%.
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
export default async function performanceTestSuite(data) {
	// For performance tests, we only want to test the positive scenarios.
	const userId = 1245454545;
	const getUsersResponse = await getUsers.getUsers(userId);

	describe(`Verify a valid GET Request to users endpoint returns an ${OK} response status`, () => {
		checkResponseStatus(getUsersResponse, OK);
	});
}
