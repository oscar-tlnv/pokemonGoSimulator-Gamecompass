import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',
      'no-duplicate-imports': 'error', // Prevent duplicate imports
      'no-magic-numbers': 'warn', // Avoid magic numbers in your code (can be adjusted for exceptions)
      'prefer-const': 'warn',
      'no-else-return': 'error',
      'no-shadow': 'warn',
    },
  },
];
