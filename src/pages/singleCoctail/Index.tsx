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
    <section className="w-[80%] !mx-auto !my-5 grid grid-cols-2 items-start gap-14">
      {/* IMAGE SIDE */}
      {coctail && (
        <div className="sticky top-10 flex justify-center">
          <div className="rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(255,255,255,0.15)] border border-[#2d354d] hover:scale-[1.02] transition duration-300">
            <img
              src={coctail[0]?.strDrinkThumb}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}

      {coctail && (
        <div className="text-left flex flex-col gap-10 !py-3">
          {loading && <div className="loader"></div>}

          <p className="text-4xl font-bold border-b-4 border-pink-500 !pb-4 inline-block tracking-wide drop-shadow">
            🍸 {coctail[0]?.strDrink}
          </p>

          <p className="text-xl opacity-90 bg-[#1c243b] p-3 rounded-xl shadow-md border border-[#2c3550]">
            <span className="font-semibold">Coctail Type:</span>{" "}
            {coctail[0]?.strAlcoholic}
          </p>

          <div>
            <p className="text-xl uppercase font-bold tracking-wide !mb-3 border-l-4 border-pink-500 pl-3">
              Ingredients
            </p>

            <div className="grid grid-cols-2 gap-3 bg-[#141b2b] p-5 rounded-xl shadow-inner border border-[#262f45]">
              {coctail && <Ingredients coctail={coctail[0]} />}
            </div>
          </div>

          <div className="bg-[#101726] p-6 rounded-xl shadow-xl border border-[#1d2639] hover:shadow-[0_0_20px_rgba(255,255,255,0.1)] transition duration-300">
            {coctail[0]?.strInstructions && (
              <p className="capitalize text-[18px] leading-relaxed opacity-95">
                {coctail[0]?.strInstructions}
              </p>
            )}
          </div>
        </div>
      )}

      {error && <h1>Something went wrong...</h1>}
    </section>
  );
}

export default SingleCoctail;
