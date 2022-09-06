module.exports = {
  extends: ["eslint:recommended", "plugin:import/recommended"],
  env: {
    node: true,
    es6: true,
  },
  plugins: ["sort-imports-es6-autofix"],
  settings: {
    "import/resolver": {
      exports: true,
    },
  },
  rules: {
    "import/no-unresolved": [
      "error",
      {
        commonjs: true,
      },
    ],
    "import/no-useless-path-segments": "error",
    "sort-imports-es6-autofix/sort-imports-es6": [
      "error",
      { memberSyntaxSortOrder: ["none", "all", "single", "multiple"] },
    ],
    eqeqeq: "error",
    curly: "error",
    "no-console": "warn",
    "prefer-const": "error",
    "no-var": "error",
    "object-shorthand": "error",
    "default-case": "error",
    "no-return-await": "error",
    "prefer-destructuring": [
      "error",
      {
        object: true,
        array: false,
      },
    ],
  },
};
