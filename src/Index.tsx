import { useState, useEffect } from "react";
import { Link } from "react-router";

function Home() {
  type Coctail = {
    strDrink: string;
    strDrinkThumb: string;
    idDrink: string;
  };

  const [coctails, setCoctails] = useState<Coctail[]>([]);
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
      <section className="w-[90%] !mx-auto !mt-5">
        <div className="flex gap-10">
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

          <div className="grid grid-cols-4 items-start justify-center gap-8">
            {coctails?.map((coctail, index) => (
              <Link to={`/singleCoctail/${coctail.idDrink}`}>
                <div key={index} className="flex flex-col gap-3">
                  <img className="rounded" src={coctail.strDrinkThumb} />
                  <p> {coctail.strDrink} </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
