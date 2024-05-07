import getAuthHeader from "../tests/authentication/authentication.js";
import * as getUsers from "../tests/users/getUsers.js";

export let options = {
    vus: 2,
    iterations: 2,
    thresholds: {
        http_req_failed: ['rate<0.01'], // http errors should be less than 1%.
        http_req_duration: ['p(99)<3000'], // 99% of requests should be below 3000ms.
        checks: ['rate>0.9'], // the rate of successful checks should be higher than 90%.
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

export default function (data) {
    // For performance tests, we only want to test the positive scenarios.
    const userId = 1245454545;

    getUsers.testGetUsers(userId);
}