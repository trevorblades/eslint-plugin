const node = require("./node");

module.exports = {
  configs: {
    node,
    core: node, // this is kept for backwards compatibility
    react: require("./react"),
    typescript: require("./typescript"),
    graphql: require("./graphql"),
  },
};
