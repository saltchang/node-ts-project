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
    'prettier', // prettier
  ],
  overrides: [
    {
      files: ['**/*.test.ts'],
      extends: [
        'plugin:jest/recommended', // jest
      ],
      env: {
        jest: true,
      },
      plugins: ['jest'],
    },
    {
      files: ['.eslintrc.js', 'babel.config.js', '.prettierrc.js'],
      rules: {
        'unicorn/prefer-module': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: './',
    ecmaVersion: 'latest',
    sourceType: 'module',
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
    'prefer-arrow/prefer-arrow-functions': [
      'warn',
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
        allowStandaloneDeclarations: false,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'warn',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
        ignoreRestSiblings: false,
        vars: 'all',
      },
    ],
    eqeqeq: ['error', 'smart'],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-empty': 'warn',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'prefer-const': ['error'],
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
