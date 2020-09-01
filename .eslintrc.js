module.exports = {
    "env": {
        "browser": true,
        "es6": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true,
        },
        "ecmaVersion": 2018,
        "sourceType": "module",
    },
    "plugins": [
        "react",
        "react-hooks",
    ],
    "rules": {
        "arrow-parens": ["error", "as-needed"],
        "semi":"error",
        "prefer-destructuring":"error",
        "max-len": [
          "warn",
          {
            "code": 100,
            "ignoreUrls": true,
            "ignorePattern": "import",
          },
        ],
        "no-unused-vars": "warn",
        "operator-linebreak": "warn",
        "react-hooks/rules-of-hooks": "error",
        "react/jsx-closing-tag-location": 2,
        "react/jsx-closing-bracket-location": [
          2,
          {
            "nonEmpty": "line-aligned",
            "selfClosing": "after-props",
          },
        ],
        "react/jsx-max-props-per-line": [
          2,
          {
            "maximum": 4,
            "when": "always",
          },
        ],
        "react/jsx-filename-extension": [
          2,
          {
            "extensions": [
              ".jsx",
              ".js",
            ],
          },
        ],
        "jsx-quotes": [
          "error",
          "prefer-double",
        ],
        "comma-dangle": [
          2,
          "always-multiline",
        ],
        "prefer-const": [
          "error",
          {
            "destructuring": "any",
            "ignoreReadBeforeAssign": false,
          },
        ],
        "react/prop-types": [
          1,
        ],
      },
    "overrides": [
        {
          "files":["src/index.js"],
          "rules": {
            "react/jsx-filename-extension": "off",
          },
        },
    ],
};