// import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import reactX from "eslint-plugin-react-x"
import reactDom from "eslint-plugin-react-dom" 
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    // 👇 STAGE 1: Apply to ALL files (including configs)
    files: ['**/*.{ts,tsx,js}'], 
    extends: [
      tseslint.configs.recommended, // Basic TS rules
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
  },
  {
    // 👇 STAGE 2: Apply strict type-checking ONLY to source code
    files: ['src/**/*.{ts,tsx}'], 
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked,
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.app.json'], // Focus only on app code
        tsconfigRootDir: import.meta.dirname,
      },
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // Optional: Turn off the array index warning if you can't use item IDs yet
      // "react-x/no-array-index-key": "off" 
    }
  },
])

