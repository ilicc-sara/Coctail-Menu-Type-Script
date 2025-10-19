import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Ingredients from "./components/Ingredients";

const BASE_URL = "https://thecocktaildb.com/api";

function SingleCoctail() {
  type SnglCoctail = {
    idDrink: string;
    strAlcoholic: string;
    strDrink: string;
    strDrinkThumb: string;
    strIngredient1: string;
    strIngredient2: string;
    strIngredient3?: string;
    strIngredient4?: string;
    strIngredient5?: string;
    strIngredient6?: string;
    strIngredient7?: string;
    strIngredient8?: string;
    strInstructions: string;
  };

  const [coctail, setCoctail] = useState<SnglCoctail[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const params = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${BASE_URL}/json/v1/1/lookup.php?i=${params.coctailID}`
        );
        if (response.ok) {
          const posts = await response.json();
          setCoctail(posts.drinks);
          setLoading(false);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      }
    };

    fetchPost();
  }, []);

  return (
    <section className="w-[80%] !mx-auto !my-5 grid grid-cols-2 items-start justify-center gap-10">
      {coctail && (
        <div>
          <img className="rounded-xl" src={coctail[0]?.strDrinkThumb} />
        </div>
      )}

      {coctail && (
        <div className="text-left flex flex-col gap-6 !py-3">
          {loading && <div className="loader"></div>}
          <p className="text-3xl font-medium border-b-4 border-pink-500 !pb-5 inline-block">
            {" "}
            🍸 {coctail[0]?.strDrink}{" "}
          </p>
          <p className="text-xl"> Coctail Type: {coctail[0]?.strAlcoholic} </p>

          <div className="flex gap-6 justify-start items-center">
            <p className="text-xl uppercase">Ingredients:</p>
            <div className="grid grid-cols-2 gap-1">
              {coctail && <Ingredients coctail={coctail[0]} />}
            </div>
          </div>

          <div className="!mt-6">
            {coctail[0]?.strInstructions && (
              <p className="capitalize"> {coctail[0]?.strInstructions} </p>
            )}
          </div>
        </div>
      )}
      {error && <h1>Something went wrong...</h1>}
    </section>
  );
}

export default SingleCoctail;
