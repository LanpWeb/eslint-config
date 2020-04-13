## What is it?

This config was created to make code be more standartized and elenant in our team's products. We follow best AirBnb practices, while extending them with some more rules.

## Installing and VSCode setup

You need to follow this steps to make this config work in your project and be synced with VSCode editor and Prettier:

1. Add Eslint config: `yarn add @lanp/eslint-config --dev`

2. `yarn add babel-eslint eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier --dev`

3. Add .prettierrc.js file:

```javascript
module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  singleQuote: true,
};
```

4. Install following extensions to your VSCode editor: ESLint, Flow Language Support, Prettier - Code formatter.

5. Create .vscode/settings.json file and add the following content there:

```javascript
{
  // Makes ESlint extension format code on save
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },

  // Disable VSCode built-in validation
  "javascript.validate.enable": false,
  "typescript.validate.enable": false,

  // Disabling Prettier formatting with VSCode extension because it'll be handled by ESlint and it's built-in Prettier plugin
  "prettier.disableLanguages": ["javascript", "javascriptreact"],

  // Eslint-related rules
  "eslint.enable": true,
  "eslint.alwaysShowStatus": true,
  "eslint.options": {
    "configFile": ".eslintrc"
  }
}
```

6. Add .eslintrc with following that extends our config to the root folder:

```javascript
{
  "extends": "@lanp/eslint-config",
}
```

7. Congrats, let the magic happen!
