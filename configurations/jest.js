import jest from 'eslint-plugin-jest';

export default [
	jest.configs.recommended,
	{
        languageOptions: {
			globals: {
				jest: true,
			},
		},
		plugins:{
			jest,
		},
	},
];
