import eslintPluginAstro from 'eslint-plugin-astro';
import reactRecommended from 'eslint-plugin-react/configs/recommended.js';
import reactJSX from 'eslint-plugin-react/configs/jsx-runtime.js';

export default [
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    ...reactRecommended,
    languageOptions: {
      ...reactRecommended.languageOptions
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  },
  {
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    ...reactJSX
  },
  ...eslintPluginAstro.configs['flat/recommended'],
  {
    rules: {}
  },
];
