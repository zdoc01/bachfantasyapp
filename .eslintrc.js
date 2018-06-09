module.exports = {
  "env": {
    "browser": true
  },
  "extends": [
    "airbnb",
    "prettier",
    "prettier/react"
  ],
  "rules": {
    /**
     * Ensure use of curly braces for all block statements.
     * @override Prettier eslint config (which disables this rule)
     */
    "curly": ["error", "all"],

    /**
     * Support React Router <Link> with `to` as `href`.
     * @override JSX A11y base config
     */
    "jsx-a11y/anchor-is-valid": [ "error", {
      "components": [ "Link" ],
      "specialLink": [ "to", "hrefLeft", "hrefRight" ],
      "aspects": [ "noHref", "invalidHref", "preferButton" ]
    }],

    /**
     * Allow JSX in .js files.
     * @override Airbnb react config
     */
    "react/jsx-filename-extension": ["off"]
  }
};