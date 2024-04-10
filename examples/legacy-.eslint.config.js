import { default as eslintConfigLegacySpringerNature } from '@springernature/eslint-config/legacy';

export default [
	eslintConfigLegacySpringerNature,
	{
		rules: {
			// Additional, per-project rules...
		},
		{
			files: ["**/*.md"],
			// Overrides for specific files or directories
		},
	},
];
