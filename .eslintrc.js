module.exports = {
  root: true,
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  ignorePatterns: ["node_modules", "dist", "build", "**/*.d.ts"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  env: {
    node: true,
    browser: true,
    es6: true,
  },
};
