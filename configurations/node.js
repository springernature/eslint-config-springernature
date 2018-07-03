'use strict';

module.exports = {
	// Environment
	// https://eslint.org/docs/user-guide/configuring#specifying-environments
	env: {
		node: true
	},

	// https://eslint.org/docs/user-guide/configuring#specifying-parser-options
	parserOptions: {
		ecmaVersion: 8
	},

	// Plugins
	plugins: [
		'node'
	],

	// The lint rules
	rules: {
		'no-console': 'off',
		// eslint-plugin-node
		// https://github.com/mysticatea/eslint-plugin-node
		'node/no-unpublished-bin': 'error',
		'node/process-exit-as-throw': 'error',
		'node/no-deprecated-api': 'error'
	}
};
