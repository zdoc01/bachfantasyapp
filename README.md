# bachfantasyapp
Manage bach fantasy (http://bachfantasy.com/) teams.

Demo - http://bachfantasy.herokuapp.com/

## Development
### Conventions
All conventions are enforced via lint-staged and husky git commit hooks to ensure changes pushed to the repo are clean.

#### Commits
Commit messages follow the structure identified by [Conventional Commits](https://conventionalcommits.org/). If your commit message doesn't follow the convention, an error will be thrown and you'll need to correct it before the commit will be accepted.

You can also use [@commitlint/prompt-cli](https://github.com/marionebl/commitlint/tree/master/%40commitlint/prompt-cli) to help enforce the convention on each commit.

#### Style Guides
ESLint is configured to enforce the [Airbnb JS style guide](https://github.com/airbnb/javascript), with a few minor exceptions. See `.eslintrc.js` for any overrides.

Prettier is configured to enforce formatting conventions wtihin JS files. All default options are used, with a few minor exceptions. See `prettier.config.js` for any overrides. Additionally, we're using [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to disable any ESLint rules related to formatting to prevent conflicts with Prettier.
