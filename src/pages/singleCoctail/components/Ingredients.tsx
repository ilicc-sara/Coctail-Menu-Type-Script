type SnglCoctail = {
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient6?: string;
  strIngredient7?: string;
  strIngredient8?: string;
};

type IngredientsProps = {
  coctail: SnglCoctail;
};

function Ingredients({ coctail }: IngredientsProps) {
  return (
    <>
      {coctail?.strIngredient1 && (
        <div className="rounded-xl border-[2px] border-[#efb8d2] !py-1 text-center !px-1">
          {coctail?.strIngredient1}
        </div>
      )}
      {coctail?.strIngredient2 && (
        <div className="rounded-xl border-[2px] border-[#efb8d2] !py-1 text-center !px-1">
          {coctail?.strIngredient2}
        </div>
      )}
      {coctail?.strIngredient3 && (
        <div className="rounded-xl border-[2px] border-[#efb8d2] !py-1 text-center !px-1">
          {coctail?.strIngredient3}
        </div>
      )}
      {coctail?.strIngredient4 && (
        <div className="rounded-xl border-[2px] border-[#efb8d2] !py-1 text-center !px-1">
          {coctail?.strIngredient4}
        </div>
      )}
      {coctail?.strIngredient5 && (
        <div className="rounded-xl border-[2px] border-[#efb8d2] !py-1 text-center !px-1">
          {coctail?.strIngredient5}
        </div>
      )}
      {coctail?.strIngredient6 && (
        <div className="rounded-xl border-[2px] border-[#efb8d2] !py-1 text-center !px-1">
          {coctail?.strIngredient6}
        </div>
      )}
      {coctail?.strIngredient7 && (
        <div className="rounded-xl border-[2px] border-[#efb8d2] !py-1 text-center !px-1">
          {coctail?.strIngredient7}
        </div>
      )}
      {coctail?.strIngredient8 && (
        <div className="rounded-xl border-[2px] border-[#efb8d2] !py-1 text-center !px-1">
          {coctail?.strIngredient8}
        </div>
      )}
    </>
  );
}

export default Ingredients;
