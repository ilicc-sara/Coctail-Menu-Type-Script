import { useEffect } from "react";
import { useParams } from "react-router";

function SingleCoctail() {
  const params = useParams();
  console.log(params.coctailID);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `https://thecocktaildb.com/api/json/v1/1/lookup.php?i=11007`
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
