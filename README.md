# eslint-config-springernature
[![Build Status](https://travis-ci.org/springernature/eslint-config-springernature.svg?branch=master)](https://travis-ci.org/springernature/eslint-config-springernature) [![NPM version](http://img.shields.io/npm/v/%40springernature%2Feslint-config.svg)](https://www.npmjs.org/package/%40springernature%2Feslint-config)

ESLint shareable config used at [Springer Nature](https://www.springernature.com).

## Requirements

This package requires:

* Node version 6 or greater. Please have a look at our [open source support page](https://github.com/springernature/frontend-playbook/blob/master/practices/open-source-support.md#node-versions) for details on which versions of node we support, and why.
* `eslint` version 5 or greater.

## Installation

Our default export contains all of our **ESLint rules**, and includes the following plugins:

* [`eslint-plugin-import`](https://github.com/benmosher/eslint-plugin-import) _(core)_
* [`eslint-plugin-promise`](https://github.com/xjamundx/eslint-plugin-promise) _(core)_
* [`eslint-plugin-unicorn`](https://github.com/sindresorhus/eslint-plugin-unicorn) _(core)_
* [`eslint-plugin-no-use-extend-native`](https://github.com/dustinspecker/eslint-plugin-no-use-extend-native) _(core & legacy)_
* [`eslint-plugin-node`](https://github.com/mysticatea/eslint-plugin-node) _(optional)_
* [`eslint-plugin-jest`](https://github.com/jest-community/eslint-plugin-jest) _(optional)_

These plugins are defined as `peerDependencies` in `eslint-config-springernature`, which means that you will need to add these to your own project's `devDependencies`.

You can find the correct version of each dependency by using `npm info`:

```sh
npm info "@springernature/eslint-config@latest" peerDependencies
```

There are several ways to do install this without effort using the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) tool.

### Using Yarn

#### Manual

Run `yarn add --dev <dependency>@<version>` for each peerDependency listed by the `npm info` command above.

#### Automated

If you have `npx` available (included with npm 5+) then you can run `npx install-peerdeps --dev @springernature/eslint-config` to install the dependencies automatically. This will detect and use Yarn if available.

### Using NPM

If you're using npm 5+, then you can use `npx` to install the dependencies automatically:

```sh
npx install-peerdeps --dev @springernature/eslint-config
```

If you're using an older version of npm where `npx` is not available, you can manually install and run `install-peerdeps`.

```sh
npm install -g install-peerdeps
install-peerdeps --dev @springernature/eslint-config
```

The cli will produce and run a command like:

```sh
npm install --save-dev @springernature/eslint-config eslint@^#.#.# eslint-plugin-node@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-o-use-extend-native@^#.#.# eslint-plugin-promise@^#.#.# eslint-plugin-unicorn@^#.#.#
```

Alternatively, you can use the following shell script:

```sh
(
  export PKG=@springernature/eslint-config;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

## Usage

Add **one** of the following to your `.eslintrc` file:
* [`core`](./configurations/core.js) - The core Springer Nature code style (with ES6 support)
* [`legacy`](./configurations/legacy.js) - For legacy JS environments (without ES6 support)

These _optional_ extensions can be added in **addition** to one of the above configurations:

* [`node`](./configurations/node.js) - Add if your project contains [Node.js](https://nodejs.org/en/)
* [`jest`](./configurations/jest.js) - Add if your project uses [Jest](https://facebook.github.io/jest/)

### Examples

```js
// Core configuration
{
  "extends": "@springernature/eslint-config",
  "rules": {
    // Additional, per-project rules...
  }
}
```

```js
// Legacy configuration
{
  "extends": "@springernature/eslint-config/legacy",
  "rules": {
    // Additional, per-project rules...
  }
}
```

```js
// Core with optional extensions
{
  "extends": [
    "@springernature/eslint-config",
    "@springernature/eslint-config/node",
    "@springernature/eslint-config/jest"
  ],
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

If you want to ignore the same files and folders contained in the `.gitignore` file, you can do so by omitting the creation of the `.eslintignore` file and using the following command for linting instead:

```sh
eslint --ignore-path .gitignore **/*.js
```

### Per-project rules

We've chosen a sensible set of rules and plugins that helps us catch the most common errors while writing JavaScript. Using a unified linting configuration across Springer Nature makes it easier to share code and resources between different teams and projects.

In certain situations it may be necessary to specify per-project rules. A typical use case is when migrating an old project using a different linter to this eslint config, where it may not be possible to fix all the issues raised by eslint in one go and we opt instead for an iterative approach.

If you need to add per-project rules, consider changing them from `error` to `warn` instead of disabling them completely. This will allow any tests to pass, but will help you remember that a rule has been overwritten:

```js
  "rules": {
    "block-scoped-var": "warn",
  }
```

If the problem is in one specific line of code, consider using the `eslint-disable-line` directives, instead of disabling a rule for your whole project. For example:

```js
// eslint-disable no-unassigned-import
require('polyfill');
```

Please use per-project rules and `eslint-disable-line` directives sparingly and only when strictly necessary.

## Contributing

This package is used by many active Springer Nature projects. We always welcome issues and pull requests, but we may not always be able to merge your suggestions.

If we decide that we can't merge your PR or act on your issue, it's nothing personal! We love to see new contributors, and we strive to provide a welcoming and inclusive environment.
