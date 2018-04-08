module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb/base', 'prettier', 'prettier/flowtype'],
    plugins: ['flowtype', 'prettier', 'import'],
    env: {
        jest: true,
        node: true,
    },
    rules: {
        'import/prefer-default-export': 'off',
        'prettier/prettier': 'error',
    },
};
