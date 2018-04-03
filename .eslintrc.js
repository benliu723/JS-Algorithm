module.exports = {
    parser: 'babel-eslint',
    extends: ['airbnb/base', 'prettier', 'prettier/flowtype'],
    plugins: ['flowtype', 'prettier'],
    env: {
        jest: true,
        node: true,
    },
    rules: {
        'prettier/prettier': 'error',
    },
};
