# @LanpWeb/eslint-config

## What is it?

This config was created to make code be more standartized and elenant in our team's products. We follow best AirBnb practices, while extending them with some more rules.

## Installing and VSCode setup

You need to follow this steps to make this config work in your project and be synced with VSCode editor and Prettier:

1. Specify .npmrc and add it to .gitignore

2. Add GITHUB_TOKEN to your Environment variables(.env file)

3. Open your .npmrc and add the following config there.
   You sholud generate the token from your personal Github profile settigs

```
registry=https://registry.npmjs.org
@lanpweb:registry=https://npm.pkg.github.com/lanpweb

//npm.pkg.github.com/:_authToken=$GITHUB_TOKEN
//npm.pkg.github.com/lanpweb/:_authToken=$GITHUB_TOKEN
```

4. Add Eslint config: `yarn add @lanpweb/eslint-config --dev`

5. `yarn add babel-eslint eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier --dev`

6. Add .prettierrc.js file:

```javascript
module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  singleQuote: true,
};
```

7. Install following extensions to your VSCode editor: ESLint, Flow Language Support, Prettier - Code formatter.

8. Create .vscode/settings.json file and add the following content there:

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

9. Congrats, let the magic happen!
