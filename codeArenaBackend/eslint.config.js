import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      js,
      prettier: prettierPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      "prettier/prettier": "error", // show prettier errors as ESLint errors
    },
  },
  {
    // Apply Prettier last to avoid conflicts
    rules: prettierConfig.rules,
  },
]);
