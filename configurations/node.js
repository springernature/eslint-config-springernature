'use strict';

module.exports = {
	// Environment
	// https://eslint.org/docs/user-guide/configuring#specifying-environments
	env: {
		node: true
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
		'node/no-deprecated-api': 'error',
		// unicorn overrides
		"unicorn/prefer-module": 0,
		'unicorn/catch-error-name': [
			'error',
			{
				'ignore': [
					'err'
				]
			}
		],
		'unicorn/prevent-abbreviations': [
			'error',
			{
				'allowList': {
					'err': true,
					'req': true,
					'res': true
				}
			}
		]
	}
};
