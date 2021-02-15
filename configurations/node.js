'use strict';

module.exports = {
	// https://eslint.org/docs/user-guide/configuring#specifying-environments
	env: {
		node: true
	},

	// https://eslint.org/docs/user-guide/configuring/language-options#specifying-parser-options
	parserOptions: {
		sourceType: 'script'
	},

	plugins: [
		'node'
	],

	rules: {
		'no-console': 'off',
		// eslint-plugin-node
		// https://github.com/mysticatea/eslint-plugin-node
		'node/no-unpublished-bin': 'error',
		'node/process-exit-as-throw': 'error',
		'node/no-deprecated-api': 'error',
		'strict': [
			'error',
			'global'
		],
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
				'whitelist': {
					'err': true,
					'req': true,
					'res': true
				}
			}
		]
	}
};
