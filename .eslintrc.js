module.exports = {
  env: {
    node: true,
    jest: true,
  },
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/await-thenable': 'error',
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/require-await': 'error',
    '@typescript-eslint/no-unsafe-argument': 'error',
    // To enforce type definitions
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/no-inferrable-types': 'off',
    'no-console': 'error',
    // Configure prettier
    'prettier/prettier': [
      'error',
      {
        printWidth: 80,
        endOfLine: 'lf',
        singleQuote: true,
        tabWidth: 2,
        indentStyle: 'space',
        useTabs: true,
        trailingComma: 'es5',
      },
      {
        usePrettierrc: false,
      },
    ],
  },
};
