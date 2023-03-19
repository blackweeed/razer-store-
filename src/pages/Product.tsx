import { useState } from "react";
import data2 from "../data/test.json";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useParams } from "react-router-dom";
import Selection from "../components/Selection.js";
import style from "../assets/style.js";
import { useShoppingCart } from "../context/ShoppingCartContext.js";

function Product() {
  const { id } = useParams();
  const category = window.location.pathname
    .replace(/[0-9]/g, "")
    .replace("/", "")
    .replace("/", "");

  console.log(category);

  const item = data2[`${category}`][Number(id)];
  const [slideIndex, setSlideIndex] = useState(0);

  let arrayLength = item.images.length;

  const prev = () => {
    setSlideIndex((prev) => prev - 1);
  };
  const next = () => {
    setSlideIndex((prev) => prev + 1);
  };

  const { increaseCartQuantity } = useShoppingCart();

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
          {item.name} {item.color && `- ${item.color}`}
        </h2>
        <h3 className="text-[.875rem] max-w-[90%] mb-2">{item.description}</h3>
        <p className="text-[1.3125rem]">US${item.price}</p>
        <ul className="text-[#888] list-disc ml-5 text-[.875rem] mt-[2rem] mb-10">
          {item.descriptions?.map((des: string, i: number) => (
            <li key={i}>{des}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-6 px-4">
        {item.color && <Selection color={item.color} name={item.name} />}
        <button
          className={`${style.button}`}
          onClick={() => increaseCartQuantity(Number(id))}
        >
          ADD TO CART
        </button>
      </div>
    </div>
  );
}

export default Product;
