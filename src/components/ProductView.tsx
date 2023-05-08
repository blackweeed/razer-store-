import { Link } from "react-router-dom";

type Props = {
  brand: string;
  category: string;
};
type ModelDescriptions = {
  [key: string]: string;
};

function ProductView({ brand, category }: Props) {
  const modelDescriptions: ModelDescriptions = {
    deathadder:
      "Competitive gaming mice with an award-winning legacy of iconic ergonomics",
    naga: "MMO and MOBA-centric gaming mice with a unique 12-button thumb grid for maximum control",
    basilisk:
      "Feature-rich, highly customizable gaming mice designed to fit any playstyle",
    viper:
      "A range of ultra-lightweight, high-performance gaming mice bred for esports",
    blackshark:
      "Acclaimed esports headsets designed for all-out performance and comfort",
    blackwidow: "Mechanical gaming keyboards powered by Razer Chroma™ RGB",
    deathstalker: "Ergonomic low-profile optical keyboards for work and play",
    enki: "Gaming chairs optimized for all-day gaming comfort",
    iskur: "Ergonomic gaming chairs designed to support perfect gaming form",
  };

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
