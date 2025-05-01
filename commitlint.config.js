// commitlint.config.js
module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern:
        /^(TWN-\d+) (feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)(\(\w+\))?: (.+)$/,
      headerCorrespondence: ["ticket", "type", "scope", "subject"],
    },
  },
  rules: {
    "body-leading-blank": [1, "always"],
    "body-max-line-length": [2, "always", 100],
    "footer-leading-blank": [1, "always"],
    "footer-max-line-length": [2, "always", 100],
    "header-max-length": [2, "always", 100],
    "header-match-team-pattern": [2, "always"],
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert",
      ],
    ],
  },
  plugins: [
    {
      rules: {
        "header-match-team-pattern": (parsed) => {
          const { ticket, type, subject } = parsed;

          if (!ticket || !ticket.startsWith("TWN-") || !type || !subject) {
            return [
              false,
              "Commit message must be in format: TWN-XXXX type(scope): description",
            ];
          }

          return [true, ""];
        },
      },
    },
  ],
};
