'use strict';

module.exports = {
	// Environment
	// https://eslint.org/docs/user-guide/configuring#specifying-environments
	env: {
		jest: true
	},

	// Plugins
	// https://github.com/jest-community/eslint-plugin-jest
	plugins: [
		'jest'
	],

	// The lint rules
	extends: [
		'plugin:jest/recommended'
	]
};
