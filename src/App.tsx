import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [coctails, setCoctails] = useState<string[]>([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"
        );
        const posts = await response.json();
        console.log(posts.drinks);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, []);

  return (
    <>
      <section className="w-[90%] !mx-auto !mt-5 py-12">
        <h1 className="text-5xl font-bold text-center text-pink-700 mb-8">
          Our Cocktails
        </h1>

        <div className="flex">
          <div className="flex flex-col">
            <button className=" rounded-xl border-[2px] border-[#efb8d2] !py-2 text-lg w-48">
              alcoholic
            </button>
            <button className=" rounded-xl border-[2px] border-[#efb8d2] !py-2 text-lg w-48">
              non-alcoholic
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
