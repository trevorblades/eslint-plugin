module.exports = {
  overrides: [
    {
      files: ["*.graphql", "*.graphqls"],
      parser: "@graphql-eslint/eslint-plugin",
      plugins: ["@graphql-eslint"],
      rules: {
        "@graphql-eslint/no-anonymous-operations": "error",
      },
    },
  ],
};
