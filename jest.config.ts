import type { Config } from 'jest';

const config: Config = {
	rootDir: 'src',
	testRegex: '.*\\.spec\\.ts$',
	moduleFileExtensions: ['js', 'ts', 'json'],
	modulePathIgnorePatterns: ['./src/tests/integration/', './src/tests/ui/'],
	transform: {
		'^.+\\.(t|j)s$': 'ts-jest',
	},
	collectCoverageFrom: ['**/*.(t|j)s'],
	coverageDirectory: '../coverage',
	testEnvironment: 'node',
	coverageThreshold: {
		global: {
			branches: 70,
			functions: 20,
			lines: 20,
			statements: 20,
		},
	},
};

export default config;
