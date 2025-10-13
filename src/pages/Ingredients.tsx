import React from "react";

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

function Ingredients({ coctail }: SnglCoctail[]) {
  return (
    <>
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
    </>
  );
}

export default Ingredients;
