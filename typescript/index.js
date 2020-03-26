module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
      browser: true,
      node: true
  },
  plugins: [
      '@typescript-eslint',
  ],
  extends: [
      '@laptou/eslint-config',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['off'],
    '@typescript-eslint/no-var-requires': ['off'],
    '@typescript-eslint/no-non-null-assertion': ['off'],
    '@typescript-eslint/no-explicit-any': ['off'],
    '@typescript-eslint/member-ordering': ['error', {
        default: [
            // Index signature
            'signature',
        
            // Static
            'private-static-field',
            'protected-static-field',
            'public-static-field',
            'private-static-method',
            'protected-static-method',
            'public-static-method',

            'private-instance-field',
            'protected-instance-field',
            'public-instance-field',
        
            // Constructors
            'private-constructor',
            'protected-constructor',
            'public-constructor',
        
            // Methods
            'private-instance-method',
            'protected-instance-method',
            'public-instance-method',

            // Abstract
            'private-abstract-field',
            'protected-abstract-field',
            'public-abstract-field',
            'private-abstract-method',
            'protected-abstract-method',
            'public-abstract-method',
        ]
    }],
    '@typescript-eslint/explicit-member-accessibility': ['error', { accessibility: 'explicit' }],
    '@typescript-eslint/prefer-readonly': ['warn'],
    '@typescript-eslint/unbound-method': ['warn'],
  }
};