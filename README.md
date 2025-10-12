# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

```<div className="flex flex-wrap justify-center gap-4 !mb-8">
          {/* <button className="!px-5 !py-2 rounded-full bg-gradient-to-r from-pink-400 to-red-400 text-white font-semibold hover:scale-105 hover:shadow-lg transition-all">
            Vodka
          </button>
          <button className="!px-5 !py-2 rounded-full bg-gradient-to-r from-orange-400 to-yellow-400 text-white font-semibold hover:scale-105 hover:shadow-lg transition-all">
            Rum
          </button>
          <button className="!px-5 !py-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-400 text-white font-semibold hover:scale-105 hover:shadow-lg transition-all">
            Gin
          </button>
          <button className="!px-5 !py-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 text-white font-semibold hover:scale-105 hover:shadow-lg transition-all">
            Tequila
          </button>
          <button className="!px-5 !py-2 rounded-full bg-gradient-to-r from-purple-400 to-fuchsia-400 text-white font-semibold hover:scale-105 hover:shadow-lg transition-all">
            Whiskey
          </button> */}
        </div>

        <div className="flex flex-col items-center mb-10">
          {/* <label className="text-lg font-medium text-gray-700 mb-2">
            Search by name:
          </label>
          <input
            type="text"
            placeholder="Type cocktail name..."
            className="w-72 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none shadow-sm"
          /> */}
        </div>
```
