const production = !process.env.ROLLUP_WATCH;

const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./src/**/*.svelte', './src/**/*.html'],
  whitelistPatterns: [/svelte-/],
  defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
    plugins: [
      require('postcss-import'),
      ...(production ? [purgecss] : []),
      production ? require('cssnano')({
        preset: 'default',
      }) : null,
      production ? require('autoprefixer') : null,
    ]
  }