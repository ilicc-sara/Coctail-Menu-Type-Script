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
          <img className="rounded-xl" src={coctail[0].strDrinkThumb} />
        </div>
      )}

      {coctail && (
        <div className="text-left">
          <p className="text-3xl font-medium"> {coctail[0].strDrink} </p>
          <p className="text-xl"> Coctail Type: {coctail[0].strAlcoholic} </p>
        </div>
      )}
    </section>
  );
}

export default SingleCoctail;
