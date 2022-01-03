module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    // For more eslint-plugins: https://www.npmjs.com/search?q=eslint-plugin
    'eslint:recommended', // eslint
    'plugin:@typescript-eslint/eslint-recommended', // typescript
    'plugin:@typescript-eslint/recommended', // typescript
    'plugin:eslint-comments/recommended', // comments
    'plugin:eslint-plugin/recommended', // eslint-plugin
    'plugin:import/recommended', // import
    'plugin:import/typescript', // import
    'plugin:prettier/recommended', // prettier
    'plugin:promise/recommended', // promise
    'plugin:regexp/recommended', // regexp
    'plugin:security/recommended', // security
    'plugin:unicorn/recommended', // unicorn
    'prettier',
  ],
  overrides: [
    {
      env: {
        jest: true,
      },
      extends: ['plugin:jest/recommended'],
      files: ['**/*.test.ts'],
      plugins: ['jest'],
    },
    {
      files: ['.eslintrc.js', '.prettierrc.js', 'babel.config.js'],
      rules: {
        'unicorn/prefer-module': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: './',
  },
  plugins: [
    '@typescript-eslint',
    'eslint-plugin',
    'import',
    'prefer-arrow',
    'prettier',
    'promise',
    'regexp',
    'security',
    'unicorn',
  ],
  root: true,
  rules: {
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-unused-vars': 'off',
    'linebreak-style': ['error', 'unix'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-empty': 'warn',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      {
        allowStandaloneDeclarations: false,
        classPropertiesAllowed: false,
        disallowPrototype: true,
        singleReturnOnly: false,
      },
    ],
    'prefer-const': ['error'],
    'security/detect-non-literal-fs-filename': 'off',
    'security/detect-unsafe-regex': 'off',
    'unicorn/prefer-node-protocol': 'off',
    eqeqeq: ['error', 'smart'],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts'],
        paths: ['**/*'],
      },
      typescript: {},
    },
    jest: {
      version: 27,
    },
  },
};
