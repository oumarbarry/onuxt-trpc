process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: ['@antfu', '@unocss'],
  rules: {
    'no-console': 'off',
  },
}
