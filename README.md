eslint-config

1. Specify .npmrc and add it to .gitignore

2. Open your .npmrc and add the following config there.
   You sholud generate the token from your personal Github profile settigs

```
registry=https://registry.npmjs.org
@lanpweb:registry=https://npm.pkg.github.com/lanpweb

//npm.pkg.github.com/:_authToken=<TOKEN_VALUE>
//npm.pkg.github.com/lanpweb/:_authToken=<TOKEN_VALUE>
```

3. Add Eslint config: `yarn add @lanpweb/eslint-config --dev`

4. `yarn add babel-eslint eslint eslint-config-airbnb eslint-config-prettier eslint-plugin-flowtype eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier --dev`

5. Add .prettierrc.js file:

```javascript
module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: false,
  singleQuote: true,
};
```

6. Install following extensions to your VSCode editor:

7. Create .vscode/settings.json file and add the following content there: ESLint, Flow Language Support, Prettier - Code formatter

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

8. Congrats, let the magic happen!
