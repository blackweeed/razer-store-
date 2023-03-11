import { Link } from "react-router-dom";

function ProductView() {
  return (
    <div className=" px-6">
      <div className="flex flex-col">
        <h2 className="leading-tight text-[1.8rem] font-semibold	">
          THE RAZER DEATHADDER RANGE
        </h2>
        <p className="text-[1.2rem] leading-tight">
          Competitive gaming mice with an award-winning legacy of iconic
          ergonomics
        </p>
        <Link to="/all" className="place-self-end">
          View All{" "}
          <span className="text-[color:var(--cx-color-primary)]">{`>`}</span>
        </Link>
      </div>
    </div>
  );
}

export default ProductView;
