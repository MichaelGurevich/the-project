module.exports = {
  "*.{js,jsx,ts,tsx}": ["prettier --write", "eslint --fix"],
  "*.{json,md,yml,yaml}": ["prettier --write"],
  "*.py": [
    "cd packages/backend && python -m black",
    "cd packages/backend && python -m flake8",
  ],
};
