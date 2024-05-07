# k6-accelerator

## Nest.js API

### Installation

`npm install`

### Running the example nest-app

`npm run api:start`

The Nest.js API server is then accessible on port `3000`. The swagger documentation can be viewed by navigating to http://localhost:3000/api.

## k6 Tests

### Technologies used
- [k6](https://k6.io/docs/)
- [xk6](https://github.com/grafana/xk6)
- [xk6 dashboard](https://github.com/grafana/xk6-dashboard)

### Running the k6 Tests

#### Pre-requisites

- It is assumed that you already have the backend running on port `3000`. If not, execute `npm run api:start`
- Execute the following npm script `npm run k6:xk6-dashboard:build` (currently Ubuntu, WSL & Mac supported - won't work on Windows!)

### Test Execution

- To run the performance tests `npm run k6:performance:tests`
- To run the negative tests `npm run k6:negative:tests`
- To run the performance tests in debugging mode in order to log the HTTP requests and responses, including the full body `npm run k6:performance:tests:http-debugging`
- To run the negative tests in debugging mode in order to log the HTTP requests and responses, including the full body `npm run k6:negative:tests:http-debugging`

### Test Results
Test results are visible via your terminal after execution, however, specific metrics can be viewed by opening the generated html report, e.g. [k6-test-performance-report.html](./k6/k6-performance-test-report.html) within your browser after executing `npm run k6:performance:tests`.
