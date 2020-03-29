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
    // semantic rules
    'accessor-pairs': ['error'],
    'grouped-accessor-pairs': ['error', 'getBeforeSet'],
    'yoda': ['error', 'never', { exceptRange: true }],
    'no-unneeded-ternary': ['error'],
    'no-var': ['error'],
    'no-useless-computed-key': ['error'],
    'prefer-const': ['error', { destructuring: 'all' }],
    
    // spacing rules
    'dot-location': ['warn', 'property'],
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
    'generator-star-spacing': ['error', 'after'],
    'yield-star-spacing': ['error', 'after'],
    'indent': ['error', 2],
    
    // newline rules
    'object-curly-newline': ['error', { multiline: true, minProperties: 4, consistent: true }],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],

    // comma rules
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error', { before: false, after: true }],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // quote rules
    'jsx-quotes': ['error', 'prefer-single'],
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single', { avoidEscape: true }],

    // other rules
    'semi': ['error', 'always'],
    'no-warning-comments': ['warn'],
    'no-debugger': ['off']
  }
};