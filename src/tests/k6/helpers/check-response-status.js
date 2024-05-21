import { expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';

/**
 * Function to check the response status of an API request.
 * This function also outputs various information about the API request to the console.
 *
 * @param response - The API response object.
 * @param expectedResponseStatus - The expected response status code.
 */
export default function checkResponseStatus(response, expectedResponseStatus) {
	expect(
		response.status,
		`${response.request.method} ${response.request.url} endpoint response status with value ${response.status}`
	).to.equal(expectedResponseStatus);
}
