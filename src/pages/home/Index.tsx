import { useState, useEffect, useMemo } from "react";
import Button from "./components/Button";
import CoctailItem from "./components/CoctailItem";

const BASE_URL = "https://thecocktaildb.com/api";

function Home() {
  type Coctail = {
    strDrink: string;
    strDrinkThumb: string;
    idDrink: string;
  };

  const [coctails, setCoctails] = useState<Coctail[]>([]);
  const [alcoholic, setAlcoholic] = useState<boolean>(true);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${BASE_URL}/json/v1/1/filter.php?a=${
            alcoholic ? "Alcoholic" : "Non_Alcoholic"
          }`
        );
        if (response.ok) {
          const posts = await response.json();
          setCoctails(posts.drinks);
          setLoading(false);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      }
    };

    fetchPost();
  }, [alcoholic]);

  const filteredCoctails = useMemo(() => {
    return coctails.filter((item) =>
      item.strDrink.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [coctails, searchValue]);

  return (
    <section className="w-[90%] mx-auto my-5">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* LEFT SIDE */}
        <div className="flex flex-col gap-5 w-full lg:w-1/4">
          <p className="text-base capitalize">choose cocktail type:</p>

          <Button alcoholic={alcoholic} handleClick={() => setAlcoholic(true)}>
            alcoholic
          </Button>

          <Button
            alcoholic={!alcoholic}
            handleClick={() => setAlcoholic(false)}
          >
            non-alcoholic
          </Button>

          <input
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="bg-white text-black placeholder-black rounded pl-2 py-2 w-full"
            placeholder="Search..."
          />
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
          {filteredCoctails.map((coctail, index) => (
            <CoctailItem
              coctail={coctail}
              index={index}
              key={coctail.idDrink}
            />
          ))}

          {loading && (
            <div className="col-span-full flex justify-center">
              <div className="loader"></div>
            </div>
          )}
        </div>
      </div>

      {error && (
        <h1 className="text-red-600 text-center mt-6">
          Something went wrong...
        </h1>
      )}
    </section>
  );
}

export default Home;
