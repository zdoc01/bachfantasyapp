module.exports = {
  "env": {
    "browser": true
  },
  "extends": "airbnb",
  "rules": {
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