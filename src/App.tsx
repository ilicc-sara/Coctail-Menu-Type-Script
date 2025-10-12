import { useState, useEffect, act } from "react";
import "./App.css";

function App() {
  const [coctails, setCoctails] = useState<string[]>([]);
  const [alcoholic, setAlcoholic] = useState<boolean>(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${
            alcoholic ? "Alcoholic" : "Non_Alcoholic"
          }`
        );
        const posts = await response.json();
        console.log(posts.drinks);
        setCoctails(posts.drinks);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, [alcoholic]);

  const active: string = "shadow-[0_0_0_3px_#230312,_0_0_0_6px_#efb8d2]";

  return (
    <>
      <section className="w-[90%] !mx-auto !mt-5 py-12">
        <h1 className="text-5xl font-semibold text-center text-pink-700 mb-8">
          Our Cocktails
        </h1>

        <div className="flex">
          <div className="flex flex-col gap-5">
            <p className="text-base capitalize">choose coctail type:</p>
            <button
              onClick={() => setAlcoholic(true)}
              className={`${
                alcoholic ? active : ""
              } rounded-xl border-[2px] border-[#efb8d2] !py-2 text-lg w-48 transition-all duration-300 ease-in-out hover:!bg-[#efb8d2] hover:!text-[#230312]`}
            >
              alcoholic
            </button>
            <button
              onClick={() => setAlcoholic(false)}
              className={`${
                !alcoholic ? active : ""
              } rounded-xl border-[2px] border-[#efb8d2] !py-2 text-lg w-48 transition-all duration-300 ease-in-out hover:!bg-[#efb8d2] hover:!text-[#230312]`}
            >
              non-alcoholic
            </button>
          </div>

          <div className="grid grid-cols-4"></div>
        </div>
      </section>
    </>
  );
}

export default App;
