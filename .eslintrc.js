module.exports = {
    parser: '@typescript-eslint/parser',
    extends: ['plugin:@typescript-eslint/recommended'],
    parserOptions: {ecmaVersion: 2018, sourceType: 'module'},
    env: {
        es6: true,
        node: true,
        jest: true,
    },
    ignorePatterns: ['**/dist/'],
    rules: {
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single', {allowTemplateLiterals: true}],
        semi: ['error', 'never'],
        'no-case-declarations': 'off',
        indent: ['error', 4, {SwitchCase: 0, flatTernaryExpressions: true}],
        'object-curly-spacing': ['error', 'never'],
        "@typescript-eslint/no-explicit-any": ["off"]
    },
    globals: {
        expect: true,
        it: true,
    },
}
