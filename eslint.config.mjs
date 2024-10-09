// import globals from "globals";
// import pluginJs from "@eslint/js";
// import tseslint from "typescript-eslint";
// import pluginReact from "eslint-plugin-react";

// export default [
//   { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
//   {
//     languageOptions: { globals: globals.browser },
//     settings: {
//       react: {
//         version: "detect",
//       },
//     },
//   },
//   pluginJs.configs.recommended,
//   ...tseslint.configs.recommended,
//   pluginReact.configs.flat.recommended,
//   {
//     // ignores: [
//     //   ".next",
//     //   "docs",
//     //   "node_modules",
//     //   "coverage",
//     //   "components/ui",
//     //   "tailwind.config.ts",
//     //   "hooks/*",
//     // ],
//     ignores: [
//       ".next/*",
//       "app/api/",
//       "_tests_",
//       "types/",
//       "coverage/*",
//       "components/ui/*",
//     ],
//   },
// ];

import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginReact from "eslint-plugin-react";
import typescriptParser from "@typescript-eslint/parser";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        module: true, // For CommonJS modules
        process: "readonly",
        require: "readonly",
      },
      parser: typescriptParser,
      ecmaVersion: 2020,
      sourceType: "module",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      react: pluginReact,
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,
    },
  },
  {
    ignores: [
      ".next/*",
      "app/api/",
      "_tests_",
      "types/",
      "coverage/*",
      "components/ui/*",
    ],
  },
];
