// eslint.config.mjs
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  // Ignore patterns (replaces .eslintignore)
  {
    ignores: [
      '.next/**',
      'next-env.d.ts',
    ],
  },

  // Next.js recommended rules (equivalent to "extends: next/core-web-vitals")
  ...compat.extends('next/core-web-vitals'),

  // Allow Next's generated triple-slash refs in d.ts files
  {
    files: ['**/*.d.ts', 'next-env.d.ts'],
    rules: {
      '@typescript-eslint/triple-slash-reference': 'off',
    },
  },
];
