module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-cssnext': {
      features: {
        rem: {
          rootValue: 10,
        },
      },
    },
    'postcss-font-magician': {},
  },
};
