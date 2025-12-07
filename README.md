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

```
// import { useState, useEffect, useMemo } from "react";
// import Button from "./components/Button";
// import CoctailItem from "./components/CoctailItem";

// const BASE_URL = "https://thecocktaildb.com/api";

// function Home() {
//   type Coctail = {
//     strDrink: string;
//     strDrinkThumb: string;
//     idDrink: string;
//   };

//   const [coctails, setCoctails] = useState<Coctail[]>([]);

//   const [alcoholic, setAlcoholic] = useState<boolean>(true);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<boolean>(false);

//   const [searchValue, setSearchValue] = useState<string>("");
//   console.log(searchValue);

//   useEffect(() => {
//     const fetchPost = async () => {
//       try {
//         setLoading(true);
//         const response = await fetch(
//           `${BASE_URL}/json/v1/1/filter.php?a=${
//             alcoholic ? "Alcoholic" : "Non_Alcoholic"
//           }`
//         );
//         if (response.ok) {
//           const posts = await response.json();
//           setCoctails(posts.drinks);
//           setLoading(false);
//         } else {
//           setError(true);
//         }
//       } catch (error) {
//         setError(true);
//       }
//     };

//     fetchPost();
//   }, [alcoholic]);

//   const filteredCoctails = useMemo(() => {
//     return coctails.filter((item) =>
//       item.strDrink.toLowerCase().includes(searchValue.toLowerCase())
//     );
//   }, [coctails, searchValue]);

//   return (
//     <>
//       <section className="w-[90%] !mx-auto !my-5">
//         <div className="flex gap-10">
//           <div className="flex flex-col gap-5">
//             <p className="text-base capitalize">choose coctail type:</p>
//             <Button
//               alcoholic={alcoholic}
//               handleClick={() => setAlcoholic(true)}
//             >
//               alcoholic
//             </Button>
//             <Button
//               alcoholic={!alcoholic}
//               handleClick={() => setAlcoholic(false)}
//             >
//               non-alcoholic
//             </Button>
//             <input
//               value={searchValue}
//               onChange={(e) => setSearchValue(e.target.value)}
//               className="!bg-[#fff] placeholder:text-[#000] !text-[#000] rounded !pl-2 w-48"
//               placeholder="Search..."
//             />
//           </div>

//           <div className="grid grid-cols-4 items-start justify-center gap-8">
//             {coctails &&
//               filteredCoctails.map((coctail, index) => (
//                 <CoctailItem coctail={coctail} index={index} />
//               ))}
//             {loading && <div className="loader"></div>}
//           </div>
//         </div>
//         {error && <h1>Something went wrong...</h1>}
//       </section>
//     </>
//   );
// }

// export default Home;
```
