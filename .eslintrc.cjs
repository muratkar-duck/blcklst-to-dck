module.exports = {
  root: true,
  extends: ['next', 'next/core-web-vitals', 'prettier'],
  parserOptions: {
    project: true,
  },
  rules: {
    'react/jsx-sort-props': 'off',
  },
};
