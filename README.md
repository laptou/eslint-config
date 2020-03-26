# `eslint-config`

This repo contains a handful of ESLint configurations that I use often.
- `@laptou/eslint-config`: this is a basic config for basic projects.
- `@laptou/eslint-config-babel`: includes the basic configuration + Babel support, for parsing Advanced JavaScript™️
- `@laptou/eslint-config-react`: includes the basic configuration + JSX support and React-specific rules
- `@laptou/eslint-config-typescript`: includes the basic configuration + Typescript support and Typescript-specific rules

They can be stacked. For example, in a TypeScript + React project, simply extend both `@laptou/eslint-config-react` and `@laptou/eslint-config-typescript`.