import globals from "globals";
import js from "@eslint/js";
import { *  as pluginImport } from "eslint-plugin-import";
import { *  as pluginNoUseExtendNative } from "eslint-plugin-no-use-extend-native";
import { *  as pluginPromise } from "eslint-plugin-promise";
import { *  as pluginUnicorn } from "eslint-plugin-unicorn";

export default [
	js.configs.recommended,
	pluginUnicorn.configs.recommended,
	{
        languageOptions: {
			ecmaVersion: 6,
			globals: {
				...globals.browser,
				es6: true,
			},
		},
		rules: {
			// Custom
			// http://eslint.org/docs/rules/
			"accessor-pairs": "error",
			"array-bracket-newline": ["error", "consistent"],
			"array-bracket-spacing": ["error", "never"],
			"array-callback-return": "error",
			"arrow-parens": ["error", "as-needed"],
			"arrow-spacing": [
				"error",
				{
					before: true,
					after: true,
				},
			],
			"block-scoped-var": "error",
			"brace-style": [
				"error",
				"1tbs",
				{
					allowSingleLine: false,
				},
			],
			camelcase: [
				"error",
				{
					properties: "always",
				},
			],
			"comma-dangle": ["error", "never"],
			"comma-spacing": [
				"error",
				{
					before: false,
					after: true,
				},
			],
			"comma-style": ["error", "last"],
			complexity: "warn",
			"computed-property-spacing": ["error", "never"],
			curly: "error",
			"default-case": "error",
			"dot-location": ["error", "property"],
			"dot-notation": "error",
			"eol-last": "error",
			eqeqeq: "error",
			"for-direction": "error",
			"func-call-spacing": ["error", "never"],
			"func-name-matching": "error",
			"func-names": ["error", "never"],
			"generator-star-spacing": ["error", "both"],
			"getter-return": "error",
			"guard-for-in": "error",
			"handle-callback-err": "warn",
			indent: [
				"error",
				"tab",
				{
					SwitchCase: 1,
				},
			],
			"jsx-quotes": "error",
			"key-spacing": [
				"error",
				{
					beforeColon: false,
					afterColon: true,
				},
			],
			"keyword-spacing": "error",
			"linebreak-style": ["error", "unix"],
			"lines-between-class-members": ["error", "always"],
			"max-depth": "warn",
			"max-nested-callbacks": ["warn", 4],
			"max-params": [
				"warn",
				{
					max: 4,
				},
			],
			"max-statements-per-line": "error",
			"new-cap": [
				"error",
				{
					newIsCap: true,
					capIsNew: true,
				},
			],
			"new-parens": "error",
			"no-alert": "error",
			"no-array-constructor": "error",
			"no-buffer-constructor": "error",
			"no-caller": "error",
			"no-div-regex": "error",
			"no-else-return": [
				"error",
				{
					allowElseIf: false,
				},
			],
			"no-empty": [
				"error",
				{
					allowEmptyCatch: true,
				},
			],
			"no-eq-null": "error",
			"no-eval": "error",
			"no-extend-native": "error",
			"no-extra-bind": "error",
			"no-extra-label": "error",
			"no-floating-decimal": "error",
			"no-implicit-coercion": "error",
			"no-implicit-globals": "error",
			"no-implied-eval": "error",
			"no-iterator": "error",
			"no-label-var": "error",
			"no-labels": "error",
			"no-lone-blocks": "error",
			"no-lonely-if": "error",
			"no-mixed-operators": "error",
			"no-mixed-requires": [
				"error",
				{
					grouping: true,
					allowCall: true,
				},
			],
			"no-multi-assign": "error",
			"no-multi-spaces": "error",
			"no-multi-str": "error",
			"no-multiple-empty-lines": ["error", { max: 1 }],
			"no-negated-condition": "error",
			"no-new": "error",
			"no-new-func": "error",
			"no-new-object": "error",
			"no-new-require": "error",
			"no-new-wrappers": "error",
			"no-octal-escape": "error",
			"no-path-concat": "error",
			"no-proto": "error",
			"no-prototype-builtins": "error",
			"no-restricted-globals": ["error", "event"],
			"no-restricted-imports": [
				"error",
				"domain",
				"freelist",
				"smalloc",
				"sys",
				"colors",
			],
			"no-restricted-modules": [
				"error",
				"domain",
				"freelist",
				"smalloc",
				"sys",
				"colors",
			],
			"no-restricted-syntax": ["error", "WithStatement"],
			"no-return-assign": ["error", "always"],
			"no-return-await": "off",
			"no-script-url": "error",
			"no-self-assign": [
				"error",
				{
					props: true,
				},
			],
			"no-self-compare": "error",
			"no-sequences": "error",
			"no-shadow-restricted-names": "error",
			"no-template-curly-in-string": "error",
			"no-throw-literal": "error",
			"no-trailing-spaces": "error",
			"no-undef": [
				"error",
				{
					typeof: true,
				},
			],
			"no-undef-init": "error",
			"no-unmodified-loop-condition": "error",
			"no-unneeded-ternary": "error",
			"no-unused-expressions": "error",
			"no-unused-vars": [
				"error",
				{
					ignoreRestSiblings: true,
					argsIgnorePattern: "^_",
				},
			],
			"no-use-before-define": ["error", "nofunc"],
			"no-useless-call": "error",
			"no-useless-computed-key": "error",
			"no-useless-concat": "error",
			"no-useless-constructor": "error",
			"no-useless-rename": "error",
			"no-useless-return": "error",
			"no-void": "error",
			"no-warning-comments": "warn",
			"no-whitespace-before-property": "error",
			"no-with": "error",
			"object-curly-spacing": ["error", "never"],
			"one-var": ["error", "never"],
			"one-var-declaration-per-line": "error",
			"operator-assignment": ["error", "always"],
			"operator-linebreak": ["error", "after"],
			"padded-blocks": ["error", "never"],
			"prefer-promise-reject-errors": [
				"error",
				{
					allowEmptyReject: true,
				},
			],
			"quote-props": ["error", "as-needed"],
			quotes: [
				"error",
				"single",
				{
					allowTemplateLiterals: true,
				},
			],
			radix: "error",
			"rest-spread-spacing": ["error", "never"],
			semi: ["error", "always"],
			"semi-spacing": [
				"error",
				{
					before: false,
					after: true,
				},
			],
			"semi-style": ["error", "last"],
			"space-before-blocks": ["error", "always"],
			"space-before-function-paren": [
				"error",
				{
					anonymous: "always",
					named: "never",
					asyncArrow: "always",
				},
			],
			"space-in-parens": ["error", "never"],
			"space-infix-ops": "error",
			"space-unary-ops": "error",
			"spaced-comment": [
				"error",
				"always",
				{
					line: {
						exceptions: ["-", "+", "*"],
						markers: ["!", "/"],
					},
					block: {
						exceptions: ["-", "+", "*"],
						markers: ["!", "*"],
						balanced: true,
					},
				},
			],
			"switch-colon-spacing": [
				"error",
				{
					after: true,
					before: false,
				},
			],
			"symbol-description": "error",
			"template-curly-spacing": "error",
			"template-tag-spacing": ["error", "never"],
			"unicode-bom": ["error", "never"],
			"valid-typeof": [
				"error",
				{
					requireStringLiterals: false,
				},
			],
			"wrap-iife": [
				"error",
				"inside",
				{
					functionPrototypeMethods: true,
				},
			],
			"yield-star-spacing": ["error", "both"],
			yoda: "error",

			// eslint-plugin-import
			// https://github.com/benmosher/eslint-plugin-import
			"import/default": "error",
			"import/export": "error",
			"import/first": "error",
			"import/named": "error",
			"import/namespace": [
				"error",
				{
					allowComputed: true,
				},
			],
			"import/no-absolute-path": "error",
			"import/newline-after-import": "error",
			"import/no-amd": "error",
			"import/no-duplicates": "error",
			"import/no-extraneous-dependencies": "error",
			"import/no-mutable-exports": "error",
			"import/no-named-as-default-member": "error",
			"import/no-named-as-default": "error",
			"import/no-unresolved": [
				"error",
				{
					commonjs: true,
				},
			],
			"import/order": "error",
			"import/no-unassigned-import": [
				"error",
				{
					allow: [
						"babel-polyfill",
						"@babel/polyfill",
						"babel-register",
						"@babel/register",
					],
				},
			],

			// eslint-plugin-no-use-extend-native
			// https://github.com/dustinspecker/eslint-plugin-no-use-extend-native
			"no-use-extend-native/no-use-extend-native": "error",

			// eslint-plugin-promise
			// https://github.com/xjamundx/eslint-plugin-promise
			"promise/param-names": "error",
			"promise/no-return-wrap": [
				"error",
				{
					allowReject: true,
				},
			],
			"promise/no-return-in-finally": "error",

			// eslint-plugin-unicorn
			// https://github.com/sindresorhus/eslint-plugin-unicorn
			"unicorn/prefer-spread": "off",
			"unicorn/no-new-buffer": "off",
			"unicorn/prefer-dom-node-dataset": "off",
			"unicorn/prefer-dom-node-append": "off",
			"unicorn/prefer-dom-node-remove": "off",
		},
		plugins: {
			pluginImport,
			pluginNoUseExtendNative,
			pluginPromise,
			pluginUnicorn,
		},
	}
];
