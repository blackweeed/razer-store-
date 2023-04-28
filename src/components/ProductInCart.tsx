import { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Product } from "../assets/types/Product";
import axios from "axios";

type CartItemProps = {
  id: number;
  quantity: number;
};

function ProductInCart({ id, quantity }: CartItemProps) {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://127.0.0.1:4000/getData`);
      setData(result.data);
    };
    fetchData();
  }, []);

  const [toggle, setToggle] = useState(false);
  const { increaseCartQuantity, decreaseCartQuantity } = useShoppingCart();

  const item = data.find((i) => i._id === id.toString());
  if (item == null) return null;

  return (
    <div className="px-4 py-4">
      <div className="flex mt-4">
        <img
          className="w-[4.5rem] h-[4.5rem] "
          src={item.image}
          alt={item.name}
        />
        <div>
          <h3>{item.name}</h3>
          <div>
            <p
              onClick={() => setToggle((prev) => !prev)}
              className="text-[color:var(--cx-color-primary)] text-sm mt-2 flex gap-1 hover:underline cursor-pointer"
            >
              Show details{" "}
              <FiChevronDown
                size={22}
                className={`transition duration-300 ${toggle && "rotate-180"} `}
              />
            </p>
            <ul className={` ${toggle ? "block" : "hidden"} `}>
              {item.descriptions.map((des) => (
                <li key={des} className="text-[#888] text-sm">
                  - {des}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-3">
        <div className="flex gap-2 items-center justify-between ">
          <img
            onClick={() => decreaseCartQuantity(id)}
            className="opacity-80 hover:opacity-100 cursor-pointer"
            src={
              quantity === 1
                ? "https://www.razer.com/assets/images/icons/icon-delete.svg"
                : "https://www.razer.com/assets/images/icons/icon-minus-circle.svg"
            }
            alt=""
          />
          <span className="w-14 h-12 border border-[#888] rounded-[4px] flex items-center justify-center">
            {quantity}
          </span>
          <img
            onClick={() => increaseCartQuantity(id)}
            className="opacity-80 hover:opacity-100 cursor-pointer"
            src="https://www.razer.com/assets/images/icons/icon-add-circle.svg"
            alt=""
          />
        </div>
        <h3 className="text-[17px]">US${item.price * quantity}</h3>
      </div>
    </div>
  );
}

export default ProductInCart;
