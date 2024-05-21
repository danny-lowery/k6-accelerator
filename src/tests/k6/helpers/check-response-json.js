import { expect } from 'https://jslib.k6.io/k6chaijs/4.3.4.3/index.js';

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
	expect(
		response.json(jsonNode),
		`${response.request.method} ${response.request.url} ${jsonNode} json node with value ${response.json(jsonNode)}`
	).to.equal(expectedJsonNodeValue);
}
