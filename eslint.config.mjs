import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

//
// `config` function with a spread argument that accepts any number flat config objects and returns the objects unchanged.
// By using this function you will get autocomplete and documentation for all config properties in addition to TypeScript errors
// https://typescript-eslint.io/packages/typescript-eslint/#config
//
export default tseslint.config({
  files: ["**/*.ts"],
  extends: [eslint.configs.recommended, tseslint.configs.recommended],
  rules: {
    "@typescript-eslint/array-type": "error",
  },
});
