module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true
  },
  extends: [
    'eslint:recommended',
  ],
  rules: {
    // spacing rules
    'block-spacing': ['error', 'always'],
    'key-spacing': ['error'],
    'keyword-spacing': ['error', { before: true, after: true }],
    'object-curly-spacing': ['error', 'always'],
    'array-bracket-spacing': ['error', 'never'],
    'computed-property-spacing': ['error', 'never'],
    'space-in-parens': ['error', 'never'],
    'space-before-blocks': ['error', 'always'],
    'no-whitespace-before-property': ['error'],
    'func-call-spacing': ['error', 'never'],
    'indent': ['error', 2],
    
    // comma rules
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // quote rules
    'jsx-quotes': ['error', 'prefer-single'],
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single'],

    // other rules
    'semi': ['error', 'always'],
    'no-warning-comments': ['warn'],
    'no-debugger': ['off']
  }
};