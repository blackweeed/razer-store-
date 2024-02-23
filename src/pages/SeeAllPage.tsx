import { Link, useNavigate } from "react-router-dom";
import style from "../assets/style";
import { useEffect, useState } from "react";
import axios from "axios";
import { useShoppingCart } from "../context/ShoppingCartContext";
import Popup from "../components/Popup";
import { Product } from "../assets/types/Product";

type Props = {
  type: string;
};

function SeeAll({ type }: Props) {
  const navigate = useNavigate();
  const { increaseCartQuantity } = useShoppingCart();
  const [data, setData] = useState<Product[]>([]);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://razer-store.cytr.us/${type}`);
      setData(result.data);
    };
    fetchData();
  }, [type]);

  const active =
    "border-b-2 border-[color:var(--cx-color-primary)] text-[color:var(--cx-color-primary)]";

  return (
    <section className=" bg-[#222] ">
      <div className="bg-black pt-4">
        <h1 className="text-xl font-semibold text-center mb-6 uppercase">
          Gaming {type}
        </h1>
        <nav className="px-[1.2rem] text-sm ">
          <ul className="flex gap-4">
            <li
              onClick={(e) => navigate("/mice")}
              className={`pb-2 font-semibold text-[#888] cursor-pointer ${
                type === "mice" && active
              }`}
            >
              MICE
            </li>
            <li
              onClick={(e) => navigate("/accessories")}
              className={`pb-2 font-semibold text-[#888] cursor-pointer  ${
                type === "accessories" && active
              } `}
            >
              ACCESSORIES
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap justify-center gap-8 pt-8 pb-20 px-[1.2rem]">
        {data?.map((item) => (
          <div key={item._id} className="flex flex-col lg:w-[20%]">
            <div className="relative">
              <Link
                to={`/${type}/${item._id}`}
                className="bg-[#111] w-full h-full flex justify-center items-center"
              >
                <img className="w-[80%]" src={item.image} alt="" />
              </Link>
              {item.new && (
                <div className="absolute top-0 bg-[color:var(--cx-color-primary)] text-black font-semibold px-6 py-0.5 text-[0.9rem] ">
                  NEW
                </div>
              )}
            </div>
            <div className="px-4 pb-4 flex flex-col flex-grow justify-between bg-black">
              <div>
                <h2 className="text-[0.9125rem] my-4 hover:underline ">
                  {item.name} {item.color}
                </h2>
                <ul className="text-[#888] list-disc ml-5 text-[.875rem]  mb-6">
                  {item.descriptions?.map((des: string, i: number) => (
                    <li key={i}>{des}</li>
                  ))}
                </ul>
              </div>
              <span className="text-[color:var(--cx-color-primary)] text-[0.75rem] hover:underline">
                View details {">"}
              </span>
              <span className="text-[0.875rem] mb-4">US${item.price}</span>
              <button
                onClick={() => {
                  setPopup(true);
                  increaseCartQuantity(`${item._id}`);
                }}
                className={`${style.button}`}
              >
                ADD TO CART
              </button>
              {popup && <Popup itemName={item.name} setPopup={setPopup} />}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SeeAll;
