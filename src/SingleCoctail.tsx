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
        console.log(posts);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPost();
  }, []);
  return <h1>SINGLE COCTAIL</h1>;
}

export default SingleCoctail;
