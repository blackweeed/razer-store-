import { Link } from "react-router-dom";
import { categories } from "../constants";

type Props = {
  category: string | undefined;
};

const Categories = ({ category }: Props) => {
  return (
    <nav className="flex gap-2 justify-around  py-10">
      {categories.map((activeCategory) => (
        <Link
          key={activeCategory.text}
          to={`/${activeCategory.link}`}
          className="flex flex-col gap-2 cursor-pointer "
        >
          <div className="w-16 h-16 lg:w-24 lg:h-24">
            <img
              className="w-full h-full object-contain"
              src={activeCategory.image}
              alt=""
            />
          </div>
          <h3
            className={`text-center text-base lg:text-lg ${
              activeCategory.text.toLowerCase() === category &&
              "text-[color:var(--cx-color-primary)]"
            }`}
          >
            {activeCategory.text}
          </h3>
        </Link>
      ))}
    </nav>
  );
};

export default Categories;
