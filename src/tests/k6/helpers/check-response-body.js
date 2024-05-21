import { expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';

/**
 * Function to check the response body of an API request.
 * This function also outputs various information about the API request to the console.
 *
 * @param response - The API response object.
 * @param expectedBody - The expected response body.
 */
export default function checkResponseBody(response, expectedBody) {
	expect(
		response.body,
		`${response.request.method} ${response.request.url} endpoint response body with value ${response.body}`
	).to.equal(expectedBody);
}
