import { check, fail } from 'k6';

/**
 * Function to check the response body of an API request.
 * This function also outputs various information about the API request to the console.
 *
 * @param response - The API response object.
 * @param expectedBody - The expected response body.
 */
export default function checkResponseBody(response, expectedBody) {
	if (
		!check(response, {
			['Checking Response Body.']: (r) => r.body === expectedBody,
		})
	) {
		fail(`Actual Response Body: ${response.body}
		      Expected Response Body: ${expectedBody}`);
	}
}
