import { check } from 'k6';

/**
 * Function to check a particular jsonNode within the response body of an API request.
 * This function also outputs various information about the API request to the console.
 *
 * @param response - The API response object.
 * @param jsonNode - The jsonNode in which to carry out the assertion.
 * @param expectedJsonNodeValue - The expected json jsonNode value.
 */
export default function checkResponseJson(
	response,
	jsonNode,
	expectedJsonNodeValue
) {
	check(response, {
		[`Actual JSON node value: ${response.json(jsonNode)}
        Expected JSON node value: ${expectedJsonNodeValue}
        `]: (r) => r.json(jsonNode) === expectedJsonNodeValue,
	});
}
