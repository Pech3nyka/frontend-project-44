import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
  {
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      indent: ['error', 2],
      'arrow-body-style': ['error', 'as-needed'],
    },
  },
  pluginJs.configs.recommended,
];
