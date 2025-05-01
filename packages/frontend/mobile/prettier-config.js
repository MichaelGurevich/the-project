module.exports = {
  singleQuote: true,
  trailingComma: "all",
  printWidth: 100,
  semi: true,
  tabWidth: 2,
  bracketSpacing: true,
  arrowParens: "avoid",
  endOfLine: "lf",
  overrides: [
    {
      files: "*.{json,md,yml,yaml}",
      options: {
        tabWidth: 2,
      },
    },
  ],
};
