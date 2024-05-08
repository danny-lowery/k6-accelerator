import { check } from 'k6';

/**
 * Function to check the response body of an API request.
 * This function also outputs various information about the API request to the console.
 *
 * @param response - The API response object.
 * @param expectedBody - The expected response body.
 */
export default function checkResponseBody(response, expectedBody) {
	check(response, {
		[`Actual Response Body: ${response.body}
        Expected Response Body: ${expectedBody}
        `]: (r) => r.body === expectedBody,
	});
}
