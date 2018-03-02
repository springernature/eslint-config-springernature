# eslint-config-springernature [![Build Status](https://travis-ci.com/springernature/eslint-config-springernature.svg?branch=master)](https://travis-ci.com/springernature/eslint-config-springernature)

ESLint shareable config used at [Springer Nature](https://www.springernature.com).

⚠️ This is a work in progress and this module hasn't been published yet. ⚠️


## Installation

```
$ npm install --save-dev eslint-config-springernature
```


## Usage

Create an `.eslintrc` file in our project and include the following.

```js
{
  "extends": "@springernature/eslint-config",
  "rules": {
    // Additional, per-project rules...
  }
}
```

You can optionally create an `.eslintignore` file to ignore file paths. The `.eslintignore` file is a plain text file where each line is a glob pattern indicating which paths should be omitted from linting. For example, the following will ignore all files in the test and coverage folders:

```
**/tests/*
**/coverage/*
```

## Plugins

```js
"devDependencies": {
  "eslint": "^4.18.0",
  "eslint-plugin-import": "^2.8.0",
  "eslint-plugin-no-use-extend-native": "^0.3.12",
  "eslint-plugin-node": "^6.0.1",
  "eslint-plugin-promise": "^3.6.0",
  "eslint-plugin-unicorn": "^4.0.2"
},
```