import { useState, useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          "https://thecocktaildb.com/api/json/v1/1/randomselection.php"
          // https://thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
        );
        const posts = await response.json();
        console.log(posts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, []);

  return (
    <>
      <section>
        <h1 className="text-red-500 text-4xl font-bold">Coctail Menu</h1>
      </section>
    </>
  );
}

export default App;
