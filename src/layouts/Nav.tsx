import { Link } from "react-router";

function Nav() {
  return (
    <div className="w-[90%] !mx-auto !mt-5 !pb-3 relative">
      <h1 className="text-5xl font-semibold text-center text-pink-700 mb-8">
        Our Cocktails
      </h1>
      <Link to="/">
        <span className="absolute right-5 top-2 uppercase text-xl font-medium !text-pink-500">
          home
        </span>
      </Link>
    </div>
  );
}

export default Nav;
