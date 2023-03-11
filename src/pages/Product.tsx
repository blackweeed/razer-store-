import { useState } from "react";
import data from "../data/storeData.js";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Selection from "../components/Selection.js";
import AddToCart from "../components/AddToCart.js";

const item = data.data[0];

function Product() {
  const [slideIndex, setSlideIndex] = useState(0);

  let arrayLength = item.images.length;

  const prev = () => {
    setSlideIndex((prev) => prev - 1);
  };
  const next = () => {
    setSlideIndex((prev) => prev + 1);
  };

  return (
    <div className="mb-20">
      <div className="relative">
        <img src={item.images[slideIndex]} alt="" />
        <div className="absolute inset-0 flex justify-between items-center px-2">
          <BsChevronLeft
            size={26}
            fill="#44d62c"
            onClick={prev}
            className={`${slideIndex <= 0 && "opacity-0"}`}
          />
          <BsChevronRight
            size={26}
            fill="#44d62c"
            onClick={next}
            className={`${slideIndex >= arrayLength - 1 && "opacity-0"}`}
          />
        </div>
      </div>
      <div className="px-[1rem] mt-8">
        <h2 className="text-[1.3125rem] text-[color:var(--cx-color-primary)]">
          {item.name} - Black
        </h2>
        <h3 className="text-[.875rem] max-w-[90%] mb-2">{item.description}</h3>
        <p className="text-[1.3125rem]">US${item.price}</p>
        <ul className="text-[#888] list-disc ml-5 text-[.875rem] mt-[2rem] mb-10">
          {item.descriptions?.map((des) => (
            <li>{des}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-6 px-4">
        <Selection />
        <AddToCart />
      </div>
    </div>
  );
}

export default Product;
