module.exports = {
  extends: [
    "../../../.eslintrc.js",
    "../.eslintrc.js",
    "plugin:react-native/all",
  ],
  settings: {
    "react-native": {
      version: "detect",
    },
  },
  rules: {
    "react-native/no-inline-styles": "warn",
    "react-native/no-color-literals": "warn",
    "react-native/no-raw-text": "warn",
  },
};
