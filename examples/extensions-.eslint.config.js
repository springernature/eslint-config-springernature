import { default as eslintConfigSpringerNature } from "@springernature/eslint-config";
import { default as eslintConfigNodeSpringerNature } from "@springernature/eslint-config/node";
import { default as eslintConfigJestSpringerNature } from "@springernature/eslint-config/jest";

export default [
	eslintConfigSpringerNature,
	eslintConfigNodeSpringerNature,
	eslintConfigJestSpringerNature,
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
