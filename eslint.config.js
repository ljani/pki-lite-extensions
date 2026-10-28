import { defineConfig } from 'eslint/config';
import tseslint from 'typescript-eslint';
import { importX } from 'eslint-plugin-import-x';

export default defineConfig(
  {
    ignores: ["*.js"],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      importX.flatConfigs.recommended,
      importX.flatConfigs.typescript
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
  },
)
