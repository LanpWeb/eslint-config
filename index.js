module.exports = {
  extends: [
    // Extending configs
    "airbnb",
    "plugin:flowtype/recommended",
    "prettier",
    "prettier/react",
    "plugin:prettier/recommended",
  ],
  plugins: ["prettier", "flowtype", "react-hooks"],
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  rules: {
    // Enable Prettier rules from .prettierrc.js
    "prettier/prettier": ["error"],

    // **********
    // *** Plain JavaScript
    // **********

    // Sorting imported files
    "sort-imports": [
      "error",
      {
        ignoreCase: true,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "single", "multiple"],
      },
    ],

    // Enable to create React components in .js files(not .jsx)
    "react/jsx-filename-extension": 0,

    // Be able to declare variables even if you have the other vars with the same name in upper scope(useful for Redux action creators)
    "no-shadow": 0,

    // Disable console.log in code
    "no-console": 0,

    // When there is only a single export from a module, prefer using default export over named export.
    // I think we can export some objects withut default export, keping in mind that there will be more export sfrom this file in a future
    "import/prefer-default-export": 0,

    // We not always return a value from saga's
    "consistent-return": 0,

    // We want to enable i++ or i--
    "no-plusplus": 0,

    // May need for some internal variables like __REDUX_DEVTOOLS_EXTENSION__
    "no-underscore-dangle": 0,

    // Sometimes we may need it - like for asyncForEach function
    "no-await-in-loop": 0,

    // We may use dynamic require in Node.js
    "import/no-dynamic-require": 0,
    "global-require": 0,

    // We may ave some not-camelCase vars when we receive a response from API
    camelcase: 0,

    // **********
    // *** a11y
    // **********

    // Next.js <a> tags may not have href defined inside:
    // <Link href="/">
    //   <a>Home</a>
    // </Link>
    "jsx-a11y/anchor-is-valid": 0,

    // We're not passing "role" attribute to each div
    "jsx-a11y/no-static-element-interactions": 0,

    // We're not passing key event for each block that has onClick handlers:
    // Example: <div onClick={() => {}} onKeyDown={this.handleKeyDown} />
    "jsx-a11y/click-events-have-key-events": 0,

    // Enforce that a label tag has a text label and an associated control.
    "jsx-a11y/label-has-associated-control": 0,

    // **********
    // *** React.js
    // **********

    // Do not consider <App {...props} /> as an error
    "react/jsx-props-no-spreading": 0,

    // Not every button should have a type(Like <button type="button">Hello</button>)
    "react/button-has-type": 0,

    // Checks rules of Hooks
    "react-hooks/rules-of-hooks": "error",

    // Checks effect dependencies
    "react-hooks/exhaustive-deps": "warn",

    // We may not dfine defaultProps because of Flow usage
    "react/require-default-props": 0,
  },
};
