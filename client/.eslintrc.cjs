module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "airbnb-typescript",
        "airbnb/hooks",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:prettier/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        // "ecmaVersion": "latest",
        // "sourceType": "module",
        // "project": "./tsconfig.json",
        "ecmaVersion": "latest",
        project: "tsconfig.json",
        tsconfigRootDir: __dirname,
        sourceType: "module",
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier",
    ],
    "rules": {
        'react/react-in-jsx-scope': 0,
        'jsx-a11y/click-events-have-key-events': 'off',
        'react/function-component-definition': [
            2,
            {
              namedComponents: ['arrow-function', 'function-declaration'],
              unnamedComponents: 'arrow-function',
            },
          ],
        "prettier/prettier": ["error", { "endOfLine": "auto" }]
    },
}
