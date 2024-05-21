import { check, fail } from 'k6';

/**
 * Function to check the response status of an API request.
 * This function also outputs various information about the API request to the console.
 *
 * @param response - The API response object.
 * @param expectedResponseStatus - The expected response status code.
 */
export default function checkResponseStatus(response, expectedResponseStatus) {
	if (
		!check(response, {
			['Checking Response Status.']: (r) => r.status === expectedResponseStatus,
		})
	) {
		fail(`Request Method: ${response.request.method}
        Request URL: ${response.request.url}
        Actual Response Status: ${response.status}
        Expected Response Status: ${expectedResponseStatus}
        Response Body: ${response.body}`);
	}
}
