import { Link } from "react-router-dom";
import { modelDescriptions } from "../constants";

type Props = {
  brand: string;
  category: string;
};

function ProductView({ brand, category }: Props) {
  return (
    <div className=" px-6">
      <div className="flex flex-col ">
        <h2 className="leading-tight text-[1.8rem] font-semibold	uppercase">
          THE RAZER {brand} RANGE
        </h2>
        <p className="text-[1.2rem] leading-tight text-white/70">
          {modelDescriptions[brand.toLowerCase()]}
        </p>
        {}
        {category === "equipment" ? (
          <div className="mt-4" />
        ) : (
          <Link to={`/${category}`} className="place-self-end mt-4">
            View All{" "}
            <span className="text-[color:var(--cx-color-primary)]">{`>`}</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default ProductView;
