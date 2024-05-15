const autoprefixer = require('autoprefixer');
const postcssGlobalData = require('@csstools/postcss-global-data');
const postcssPresetEnv = require('postcss-preset-env');
const csso = require('postcss-csso');

module.exports = {
  plugins: [
    postcssGlobalData({
      files: ['./src/styles/custom.css'],
    }),
    postcssPresetEnv({
      stage: 2,
      features: {
        'custom-media-queries': true,
      },
    }),
    autoprefixer(),
    csso()
  ],
};
