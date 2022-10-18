# `@trevorblades/eslint-plugin`

This package is the successor to my old ESLint config, [`@trevorblades/eslint-config`](https://github.com/trevorblades/eslint-config). It's compatible with ESLint 8 and features a few major differences:

## Installation

```bash
npm i -D @trevorblades/eslint-plugin
```

## Usage

```js
// .eslintrc.js
module.exports = {
  extends: ["plugin:@trevorblades/node"]
};
```

## Configs

This plugin contains the following configs:

- `plugin:@trevorblades/node` for basic JavaScript and Node.js projects
- `plugin:@trevorblades/react` for React projects
- `plugin:@trevorblades/typescript` for TypeScript projects
- `plugin:@trevorblades/graphql` for projects that contain GraphQL files

The `react` config inherits rules and plugins from `node`, but `typescript` and `graphql` don't inherit any rules, and must be combined with the other configs for best results.

## Prettier

In my old config, the base config included Prettier and the other configs extended it, and then added on other plugins and configs afterward. This isn't ideal, since the docs for `eslint-plugin-prettier` state that it must be included **last** in the array of extensions.

Now, users of these configs can combine them together, and then manually add Prettier support at the end of their own configs.

```bash
npm i -D eslint-plugin-prettier eslint-config-prettier
npm i --save-exact prettier
```

```js
// .eslintrc.js
module.exports = {
  extends: [
    "plugin:@trevorblades/react",
    "plugin:@trevorblades/typescript",
    "plugin:@trevorblades/graphql",
    "plugin:prettier/recommended"
  ]
};
```

