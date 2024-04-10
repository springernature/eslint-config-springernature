import node from 'eslint-plugin-node';

export default [
	{
        languageOptions: {
			globals: {
				node: true,
			},
		},
		plugins: {
			node,
		},
		rules: {
			"no-console": "off",
			// eslint-plugin-node
			// https://github.com/mysticatea/eslint-plugin-node
			"node/no-unpublished-bin": "error",
			"node/process-exit-as-throw": "error",
			"node/no-deprecated-api": "error",
			"unicorn/catch-error-name": [
				"error",
				{
					ignore: ["err"],
				},
			],
			"unicorn/prevent-abbreviations": [
				"error",
				{
					allowList: {
						err: true,
						req: true,
						res: true,
					},
				},
			],
		},
	},
];
