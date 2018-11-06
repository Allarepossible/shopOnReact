module.exports = {
    'env': {
        'browser': true,
        'node': true,
        'es6': true
    },
    'globals': {
        'window': true,
        'define': true,
        'require': true,
        'module': true,
    },
    extends: [
        'airbnb-base',
        'airbnb-base/rules/strict',
        'plugin:react/recommended',
    ],
    'parser': 'babel-eslint',
    'parserOptions': {
        'ecmaFeatures': {
            'experimentalObjectRestSpread': true,
            'jsx': true,
            'es6': true,
        },
        'sourceType': 'module'
    },
    'settings': {
        'import/resolver': {
            "webpack": {
                "config": "webpack.config.js"
            }
        }
    },
    'plugins': [
        'babel',
        'react'
    ],
    'rules': {
        'object-curly-spacing': [2, 'never'],
        'linebreak-style': [ 'error', 'unix' ],
        'quotes': [ 'error', 'single' ],
        'semi': [ 'error', 'always'],
        'react/prop-types': 0,
        'react/jsx-no-bind': 0,
        'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
        'react/jsx-boolean-value': 0,
        'react/jsx-closing-bracket-location': 1,
        'react/jsx-curly-spacing': [2, 'never'],
        'react/jsx-indent': [2, 4],
        'react/jsx-indent-props': [2, 4],
        'react/jsx-no-undef': 1,
        'react/jsx-uses-react': 1,
        'react/jsx-uses-vars': 1,
        'react/jsx-wrap-multilines': 1,
        'react/react-in-jsx-scope': 1,
        'react/prefer-es6-class': 1,
        'no-console': ['error', {
            allow: ['warn', 'error'],
        }],
        'quote-props': ['error', 'as-needed', {
            keywords: false,
            unnecessary: true,
            numbers: false,
        }],
        'no-use-before-define': ['error', {
            functions: false,
            classes: false,
        }],
        'no-mixed-operators': 0,
        'func-names': 'off',
        'no-multi-assign': 'off',
        'vars-on-top': 'off',
        'id-match': ['error', '^[\x00-\x7F]+$'],
        'comma-dangle': ['error', {
            arrays: 'always-multiline',
            objects: 'always-multiline',
            imports: 'always-multiline',
            exports: 'always-multiline',
            functions: 'never',
        }],
        'import/order': ['error', {
            groups: [
                'builtin',
                'external',
                'internal',
                ['parent', 'sibling'],
                'index',
            ],
            'newlines-between': 'always',
        }],
        'import/newline-after-import': ['error', {
            count: 1,
        }],
        'import/prefer-default-export': 'off',
        'func-style': 'off',
        'no-param-reassign': ['error', {
            props: false,
        }],
        'arrow-parens': ['error', 'as-needed'],
        'no-plusplus': 'off',
        indent: ['error', 4, {
            SwitchCase: 1,
            VariableDeclarator: 1,
            outerIIFEBody: 1,
            FunctionDeclaration: {
                parameters: 1,
                body: 1,
            },
            FunctionExpression: {
                parameters: 1,
                body: 1,
            },
        }],
        'no-underscore-dangle': 'off',
        'max-len': ['error', {
            code: 120,
            ignoreUrls: true,
            ignoreStrings: false,
            ignoreTemplateLiterals: true,
            ignoreRegExpLiterals: true,
        }],
    }
};
