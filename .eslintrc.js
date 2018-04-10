module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 8,
    sourceType: 'module'
  },
  env: {
    browser: true,
    jest: true
  },
  plugins: ['prettier'],
  rules: {
    'comma-dangle': ['error', 'never'],
    'linebreak-style': 0,
    'no-underscore-dangle': ['error', { allow: ['_id'] }],
    'no-unused-expressions': ['error', { allowTernary: true }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'no-use-before-define': ['error', { 'functions': false, 'classes': true, 'variables': false }],
    'import/no-extraneous-dependencies': [error, { 'devDependencies': true }],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['config/**/*.js', 'src/redux/store.js', 'webpack.config.js']
      }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        printWidth: 100
      }
    ]
  },
  globals: {
    PropTypes: true
  },
  settings: {
    'import/resolver': 'webpack'
  }
};
