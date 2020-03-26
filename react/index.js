module.exports = {
  root: true,
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    node: true,
    commonjs: true,
  },
  extends: [
    '@laptou/eslint-config',
    'plugin:react/recommended',
  ],
  rules: {
    'react/boolean-prop-naming': ['warn'],
    'react/button-has-type': ['warn'],
    'react/jsx-indent': ['error', 2, { checkAttributes: true, indentLogicalExpressions: true }],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-closing-tag-location': ['error'],
    'react/jsx-closing-bracket-location': ['error', 'line-aligned'],
    'react/jsx-curly-spacing': ['error'],
    'react/jsx-key': ['error'],
    'react/no-access-state-in-setstate': ['warn'],
    'react/no-children-prop': ['warn'],
    'react/jsx-pascal-case': ['error'],
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};