import {check} from 'k6';

/**
 * Function to check the response status of an API request.
 * This function also outputs various information about the API request to the console.
 *
 * @param response - The API response object containing method, URL, status, and body.
 * @param expectedResponseStatus - The expected response status code.
 */
export default function checkResponseStatus(response, expectedResponseStatus) {
    check(response, {
        [`Request Method: ${response.request.method}
        Request URL: ${response.request.url}
        Actual Response Status: ${response.status}
        Expected Response Status: ${expectedResponseStatus}
        Response Body: ${response.body}`
            ]: (r) => r.status === expectedResponseStatus
    });
}
