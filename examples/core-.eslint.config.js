import eslintConfigSpringerNature from "@springernature/eslint-config";

export default [
	eslintConfigSpringerNature,
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
