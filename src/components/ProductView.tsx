import { Link } from "react-router-dom";
import data from "../data/test.json";

type Props = {
  brand: string;
};

function ProductView({ brand }: Props) {
  return (
    <div className=" px-6">
      <div className="flex flex-col">
        <h2 className="leading-tight text-[1.8rem] font-semibold	uppercase">
          THE {brand} RANGE
        </h2>
        <p className="text-[1.2rem] leading-tight">
          {data["model-descriptions"][`${brand.toLowerCase()}`]}
        </p>
        <Link to="/mice" className="place-self-end mt-4">
          View All{" "}
          <span className="text-[color:var(--cx-color-primary)]">{`>`}</span>
        </Link>
      </div>
    </div>
  );
}

export default ProductView;
