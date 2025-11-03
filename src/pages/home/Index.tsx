import { useState, useEffect } from "react";
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
  console.log(searchValue);

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

  return (
    <>
      <section className="w-[90%] !mx-auto !my-5">
        <div className="flex gap-10">
          <div className="flex flex-col gap-5">
            <p className="text-base capitalize">choose coctail type:</p>
            <Button
              alcoholic={alcoholic}
              handleClick={() => setAlcoholic(true)}
            >
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
              className="!bg-[#fff] placeholder:text-[#000] !text-[#000]"
              placeholder="Search..."
            />
          </div>

          <div className="grid grid-cols-4 items-start justify-center gap-8">
            {coctails?.map((coctail, index) => (
              <CoctailItem coctail={coctail} index={index} />
            ))}
            {loading && <div className="loader"></div>}
          </div>
        </div>
        {error && <h1>Something went wrong...</h1>}
      </section>
    </>
  );
}

export default Home;
