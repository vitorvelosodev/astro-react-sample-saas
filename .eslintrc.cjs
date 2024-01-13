/** @type {import("eslint").Linter.Config} */

module.exports = {
  // ...
  extends: [
    // ...
    "plugin:astro/recommended",
    // "eslint:recommended"
  ],
  // ...
  overrides: [
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro']
      },
      processor: 'astro/client-side-ts', // <- Uses the "client-side-ts" processor.
      rules: {
        // You can customize the rules here.
        quotes: ['error', 'single'],
      },
    },
    {
      files: ['*.ts', '*.js', '*.tsx', '*.jsx', '*.mjs', '*.cjs'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 2020,
        parser: '@typescript-eslint/parser',
      },
      env: {
        node: true,
        es6: true,
        browser: true,
      },
    }
    // ...
  ],
}