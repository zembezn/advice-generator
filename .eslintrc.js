module.exports = {
    'env': {
        'browser': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },
    'plugins': [
        'react'
    ],
    'rules': {
        'indent': ['error', 2],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'no-console': 'warn'
    }
};
