# eslint-config-springernature

[![Build Status](https://travis-ci.org/springernature/eslint-config-springernature.svg?branch=master)](https://travis-ci.org/springernature/eslint-config-springernature) [![NPM version](http://img.shields.io/npm/v/%40springernature%2Feslint-config.svg)](https://www.npmjs.org/package/%40springernature%2Feslint-config)

ESLint shareable config used at [Springer Nature](https://www.springernature.com).

## Requirements

This package requires:

* [Node version 18 or greater](https://nodejs.org/en/download/releases) due to support for v16 running out soon this year. Please have a look at our [open source support page](https://github.com/springernature/frontend-playbook/blob/master/practices/open-source-support.md#node-versions) for details on which versions of node we support, and why. Version 5 of this package supports Node versions >=8 and <16.
* `eslint` version 8.38.0 or greater (due to eslint-plugin-unicorn v47.0.0).

## Upgrade note

With version _6.0.0_, `eslint-config-springernature` switches to _ESlint version 8_, which is a major update. Up to version _5.x_,  `eslint-config-springernature` worked fine together with the module `gulp-eslint`. From version _6_ on, `gulp-eslint` will fail with the error message

```shell
Environment key "es2024" is unknown
```

which is related to the upgrade to _ESlint 8_.

`gulp-eslint` has not been maintained for several years now and seems to be dead. Luckily, there's an updated version of that module called `gulp-eslint-new`, which works well with _ESlint 8_.

So if you are using `gulp-eslint` and want to update `eslint-config-springernature` to version _6_, then you should replace `gulp-eslint` with `gulp-eslint-new`. 

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
npm install --save-dev @springernature/eslint-config eslint@^#.#.# eslint-plugin-node@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-no-use-extend-native@^#.#.# eslint-plugin-promise@^#.#.# eslint-plugin-unicorn@^#.#.#
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
  },
  "overrides": [
    // Overrides for specific files or directories
  ]
}
```

```js
// Legacy configuration
{
  "extends": "@springernature/eslint-config/legacy",
  "rules": {
    // Additional, per-project rules...
  },
  "overrides": [
    // Overrides for specific files or directories
  ]
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
  },
  "overrides": [
    // Overrides for specific files or directories
  ]
}
```

```js
// Core config extended with node config for subset of files
// Useful if you use both node and browser js in the same repo
{
	"extends": "@springernature/eslint-config",
	"overrides": [
		{
			"files": [
				"path/to/app/files/*.js"
			],
			"extends": "@springernature/eslint-config/node"
		}
	]
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

If the problem is in one specific line of code, consider using the [`eslint-disable-line` or `eslint-disable-next-line` directives](https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments), instead of disabling a rule for your whole project. For example:

```js
// eslint-disable-next-line no-unassigned-import
require('polyfill');

const zero; // eslint-disable-line no-unused-vars
```

Please use per-project rules and `eslint-disable-line` and `eslint-disable-next-line` directives sparingly and only when strictly necessary.

### Environments and configuration overrides

It's common to have specific files or directories that require different settings. For example, a folder in your project may contains tests that use `mocha`. Instead of defining the global variables that `mocha` expects manually, you can use [`environments`](https://eslint.org/docs/user-guide/configuring#specifying-environments) and [`overrides`](https://eslint.org/docs/user-guide/configuring#disabling-rules-only-for-a-group-of-files). You can also change specific rules for these files.

```js
  "overrides": [
    {
      "files": "tests/**/*.js",
      "env": {
        "browser": true,
        "jquery": true,
        "mocha": true
      },
      "rules": {
        "no-console": "warn"
      }
    }
  ]
```

## Contributing

This package is used by many active Springer Nature projects. We always welcome issues and pull requests, but we may not always be able to merge your suggestions.

If we decide that we can't merge your PR or act on your issue, it's nothing personal! We love to see new contributors, and we strive to provide a welcoming and inclusive environment.
