module.exports = {
  configs: {
    recommended: require("./.eslintrc"),
    react: {
      extends: ["./react", "plugin:prettier/recommended"],
    },
    typescript: {
      extends: ["./core", "./typescript", "plugin:prettier/recommended"],
    },
    tsx: {
      extends: ["./react", "./typescript", "plugin:prettier/recommended"],
    },
  },
};
