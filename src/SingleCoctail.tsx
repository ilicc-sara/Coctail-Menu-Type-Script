import { useEffect, useState } from "react";
import { useParams } from "react-router";

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
  const params = useParams();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=${params.coctailID}`
        );
        const posts = await response.json();
        console.log(posts.drinks);
        setCoctail(posts.drinks);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, []);

  console.log(coctail && coctail);
  return (
    <section className="w-[80%] !mx-auto !my-5 grid grid-cols-2 items-start justify-center gap-10">
      {coctail && (
        <div>
          <img className="rounded-xl" src={coctail[0]?.strDrinkThumb} />
        </div>
      )}

      {coctail && (
        <div className="text-left flex flex-col gap-6 !py-3">
          <p className="text-3xl font-medium border-b-4 border-pink-500 !pb-5 inline-block">
            {" "}
            🍸 {coctail[0]?.strDrink}{" "}
          </p>
          <p className="text-xl"> Coctail Type: {coctail[0]?.strAlcoholic} </p>

          <div className="flex gap-6 justify-start items-center">
            <p className="text-xl uppercase">Ingredients:</p>
            <div className="grid grid-cols-2 gap-1">
              {coctail[0]?.strIngredient1 && (
                <div className="rounded-xl border-[2px] border-[#efb8d2] !py-1 text-center !px-1">
                  {coctail[0]?.strIngredient1}
                </div>
              )}
              {coctail[0]?.strIngredient2 && (
                <div className="rounded-xl border-[2px] border-[#efb8d2] !py-1 text-center !px-1">
                  {coctail[0]?.strIngredient2}
                </div>
              )}
              {coctail[0]?.strIngredient3 && (
                <div className="rounded-xl border-[2px] border-[#efb8d2] !py-1 text-center !px-1">
                  {coctail[0]?.strIngredient3}
                </div>
              )}
              {coctail[0]?.strIngredient4 && (
                <div className="rounded-xl border-[2px] border-[#efb8d2] !py-1 text-center !px-1">
                  {coctail[0]?.strIngredient4}
                </div>
              )}
              {coctail[0]?.strIngredient5 && (
                <div className="rounded-xl border-[2px] border-[#efb8d2] !py-1 text-center !px-1">
                  {coctail[0]?.strIngredient5}
                </div>
              )}
              {coctail[0]?.strIngredient6 && (
                <div className="rounded-xl border-[2px] border-[#efb8d2] !py-1 text-center !px-1">
                  {coctail[0]?.strIngredient6}
                </div>
              )}
              {coctail[0]?.strIngredient7 && (
                <div className="rounded-xl border-[2px] border-[#efb8d2] !py-1 text-center !px-1">
                  {coctail[0]?.strIngredient7}
                </div>
              )}
              {coctail[0]?.strIngredient8 && (
                <div className="rounded-xl border-[2px] border-[#efb8d2] !py-1 text-center !px-1">
                  {coctail[0]?.strIngredient8}
                </div>
              )}
            </div>
          </div>

          <div className="!mt-6">
            {coctail[0]?.strInstructions && (
              <p className="capitalize"> {coctail[0]?.strInstructions} </p>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default SingleCoctail;
