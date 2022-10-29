module.exports = {
  extends: ["./node", "plugin:react/recommended"],
  env: {
    browser: true,
  },
  plugins: ["react-hooks"],
  rules: {
    "react/no-unused-prop-types": "error",
    "react/no-unused-state": "error",
    "react/jsx-boolean-value": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
  },
};
