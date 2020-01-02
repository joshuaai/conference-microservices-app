module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: 'eslint',
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module'
    },
    rules: {
        'arrow-body-style': 0,
        quotes: 0,
        semi: 0,
        'node/shebang': 0,
        'no-unused-vars': 'warn'
    }
}
