# History

## 5.0.0 (2021-02-15)

* Updates all dependencies, the following updates are **breaking**:
  * [`[Breaking]`](https://github.com/eslint/eslint/releases) Update `eslint` from v6 to v7
  * [`[Breaking]`](https://github.com/jest-community/eslint-plugin-jest/releases/tag/v24.0.0) Update `eslint-plugin-jest` from v23 to v24
  * [`[Breaking]`](https://github.com/mysticatea/eslint-plugin-node/releases/tag/v11.1.0) Update `eslint-plugin-node` from v10 to v11
  * [`[Breaking]`](https://github.com/sindresorhus/eslint-plugin-unicorn/releases) Update `eslint-plugin-unicorn` from v13 to v28
* For node projects, allow these common variable names: `err` `req` `res`
* Adds MIT license

## 4.0.3 (2021-02-12)

* Disables `no-return-await` rule in core as v8 changes render `return await` useful

## 4.0.2 (2020-09-30)

* Disables `unicorn/prefer-dataset` rule as Element.dataset not supported by ie10

## 4.0.1 (2020-02-18)

* Switch off `unicorn/prefer-node-append` rule for IE support

## 4.0.0 (2019-11-20)

* [`[Breaking]`](https://github.com/sindresorhus/eslint-plugin-unicorn/releases) Update `eslint-plugin-unicorn` from v12 to v13
* [`[Breaking]`](https://github.com/jest-community/eslint-plugin-jest/releases/tag/v23.0.0) Update `eslint-plugin-jest` from v22 to v23

## 3.0.0 (2019-09-24)

* [`[Breaking]`](https://github.com/eslint/eslint/blob/master/docs/user-guide/migrating-to-6.0.0.md) Update ESLint to version 6, which drops support for Node 6. Fixes a vulnerability present in eslint <6.2.1
* [`[Breaking]`](https://github.com/jest-community/eslint-plugin-jest/releases/tag/v22.0.0) Update `eslint-plugin-jest` from v21 to v22
* [`[Breaking]`](https://github.com/mysticatea/eslint-plugin-node/releases) Update `eslint-plugin-node` from v6 to v10
* [`[Breaking]`](https://github.com/xjamundx/eslint-plugin-promise/blob/master/CHANGELOG.md#400) Update `eslint-plugin-promise` from v3 to v4
* [`[Breaking]`](https://github.com/sindresorhus/eslint-plugin-unicorn/releases) Update `eslint-plugin-unicorn` from v4 to v11
* Update `eslint-plugin-import`
* Update `eslint-plugin-no-use-extend-native`
* Add [additional example files](./examples)
* Run markdown docs through `markdownlint` for some sweet extra linting

## 2.1.1 (2019-08-29)

* Fix `no-unused-vars > argsIgnorePattern` to ignore underscored variable names

## 2.1.0 (2019-05-15)

* Remove `import/prefer-default-export` rule

## 2.0.0 (2018-07-17)

* Update ESLint to version 5 ([Migration guide](https://github.com/eslint/eslint/blob/master/docs/user-guide/migrating-to-5.0.0.md))
* Update to new version of `eslint-plugin-import`
* Update to new version of `eslint-plugin-jest`
* Update to new version of `eslint-plugin-promise`
* Update to new version of `eslint-plugin-unicorn`

## 1.0.0 (2018-03-06)

* Move `eslint-plugin-node` to an optional add on
* Add a legacy option for projects without ES6
* Add `eslint-plugin-jest` as an optional add on
* Improve documentation

## 0.1.0 (2018-03-05)

* Common linting rules
* Extends `eslint:recommended`
* Includes plugins
  * `eslint-plugin-import`
  * `eslint-plugin-no-use-extend-native`
  * `eslint-plugin-node`
  * `eslint-plugin-promise`
  * `eslint-plugin-unicorn`
