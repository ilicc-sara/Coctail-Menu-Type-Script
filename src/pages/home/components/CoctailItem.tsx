import { Link } from "react-router";

type Coctail = {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
};

type CoctailItemType = {
  coctail: Coctail;
  index: number;
};

function CoctailItem({ coctail, index }: CoctailItemType) {
  return (
    <Link to={`/singleCoctail/${coctail.idDrink}`}>
      <div key={index} className="flex flex-col gap-3">
        <img className="rounded" src={coctail.strDrinkThumb} />
        <p> {coctail.strDrink} </p>
      </div>
    </Link>
  );
}

export default CoctailItem;
