'use strict';

module.exports = {
    // Environment
    // https://eslint.org/docs/user-guide/configuring#specifying-environments
    env: {
        es6: true,
        node: true,
        browser: true
    },

    // Parser options
    // https://eslint.org/docs/user-guide/configuring#specifying-parser-options
    parserOptions: {
        ecmaVersion: 2015
    },

    // The lint rules
    extends: [
        'eslint:recommended'
    ],
    rules: {
        // eslint:recommended overrides
        'no-empty': [
            'error',
            {
                'allowEmptyCatch': true
            }
        ],
        'no-self-assign': [
            'error',
            {
                'props': true
            }
        ],
        'no-undef': [
            'error',
            {
                'typeof': true
            }
        ],
        'no-unused-vars': [
            'error',
            {
                'ignoreRestSiblings': true,
                'argsIgnorePattern': '^_$'
            }
        ],
        'valid-typeof': [
            'error',
            {
                'requireStringLiterals': false
            }
        ]
    }
};
