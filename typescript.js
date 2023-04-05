module.exports = {
  extends: [
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "react/prop-types": 0,
    "@typescript-eslint/consistent-type-imports": "warn",
  },
  settings: {
    "import/resolver": {
      typescript: true,
    },
  },
};
