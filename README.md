# eslint-config-springernature
[![Build Status](https://travis-ci.com/springernature/eslint-config-springernature.svg?branch=master)](https://travis-ci.com/springernature/eslint-config-springernature)[![npm version](https://badge.fury.io/js/%40springernature%2Feslint-config.svg)](https://badge.fury.io/js/%40springernature%2Feslint-config)

ESLint shareable config used at [Springer Nature](https://www.springernature.com).

## Installation

Our default export contains all of our ESLint rules, and includes the following plugins:
* [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import)
* [`eslint-plugin-no-use-extend-native`](https://github.com/dustinspecker/eslint-plugin-no-use-extend-native)
* [`eslint-plugin-node`](https://github.com/mysticatea/eslint-plugin-node)
* [`eslint-plugin-promise`](https://github.com/xjamundx/eslint-plugin-promise)
* [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn)

If you use yarn:

1. run `npm info "@springernature/eslint-config@latest" peerDependencies` to list the peer dependencies and versions
2. run `yarn add --dev <dependency>@<version>` for each listed peer dependency

If you use NPM:

Install the correct versions of each package, which are listed by the command:

```sh
npm info "@springernature/eslint-config@latest" peerDependencies
```

If using **npm 5+**, use this shortcut

```sh
npx install-peerdeps --dev @springernature/eslint-config
```

If using **npm < 5**, Linux/OSX users can run

```sh
(
  export PKG=@springernature/eslint-config;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

Which produces and runs a command like:

```sh
npm install --save-dev @springernature/eslint-config eslint@^#.#.# eslint-plugin-node@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-o-use-extend-native@^#.#.# eslint-plugin-promise@^#.#.# eslint-plugin-unicorn@^#.#.#
```

If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

```sh
npm install -g install-peerdeps
install-peerdeps --dev @springernature/eslint-config
```
The cli will produce and run a command like:

```sh
npm install --save-dev @springernature/eslint-config eslint@^#.#.# eslint-plugin-node@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-o-use-extend-native@^#.#.# eslint-plugin-promise@^#.#.# eslint-plugin-unicorn@^#.#.#
```

## Usage

Create an `.eslintrc` file in our project and include the following:

```js
{
  "extends": "@springernature/eslint-config",
  "rules": {
    // Additional, per-project rules...
  }
}
```

### Ignore files/folders

You can optionally create an `.eslintignore` file to ignore file paths. The `.eslintignore` file is a plain text file where each line is a glob pattern indicating which paths should be omitted from linting. For example, the following will ignore all files in the `tests` and `coverage` folders:

```
**/tests/*
**/coverage/*
```

## Environments

By default the following environments are set by the config:

* `browser` - browser global variables
* `node` - Node.js global variables and Node.js scoping
* `es6` - enable all ECMAScript 6 features except for modules (this automatically sets the `ecmaVersion` parser option to 6)

## Versioning policy

All breaking changes will bump the MAJOR version as per the [semver convention](https://github.com/springernature/frontend-playbook/blob/master/git/semver.md). Therefore, every new rule addition, or change to an exisiting rule, will increase the MAJOR version. Removing a rule (turning it to `off`) will increase the MINOR version.