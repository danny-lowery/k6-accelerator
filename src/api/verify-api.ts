import axios from 'axios';

async function verifyApi() {
	const apiUrl = 'http://localhost:3000/api';
	const maxAttempts = 10;
	const retryInterval = 5000;

	let attempts = 0;

	while (attempts < maxAttempts) {
		try {
			const response = await axios.get(apiUrl);

			if (response.status === 200) {
				console.log('API is running on port 3000');
				return;
			}
		} catch (error) {
			console.error(`Error connecting to API: ${error.message}`);
		}

		attempts++;

		if (attempts < maxAttempts) {
			console.log(`Retrying in ${retryInterval / 1000} seconds...`);
			await new Promise((resolve) => setTimeout(resolve, retryInterval));
		}
	}

	console.error('Maximum number of attempts reached. Unable to verify API.');
}

void verifyApi();
