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
      <section className="w-[90%] mx-auto py-12">
        <h1 className="text-5xl font-bold text-center text-pink-700 mb-8">
          🍸 Our Cocktails
        </h1>

        <div className="flex flex-wrap justify-center gap-4 !mb-8">
          <button className="!px-5 !py-2 rounded-full bg-gradient-to-r from-pink-400 to-red-400 text-white font-semibold hover:scale-105 hover:shadow-lg transition-all">
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
          </button>
        </div>

        <div className="flex flex-col items-center mb-10">
          <label className="text-lg font-medium text-gray-700 mb-2">
            Search by name:
          </label>
          <input
            type="text"
            placeholder="Type cocktail name..."
            className="w-72 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-pink-400 focus:outline-none shadow-sm"
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"></div>
      </section>
    </>
  );
}

export default App;
