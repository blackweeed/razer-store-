import { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import Selection from "../components/Selection.js";
import style from "../assets/style.js";
import { useShoppingCart } from "../context/ShoppingCartContext.js";
import axios from "axios";

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { increaseCartQuantity } = useShoppingCart();
  const [data, setData] = useState([]);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://127.0.0.1:4000/getData/${id}`);
      setData(result.data);
    };
    fetchData();
  }, [id]);

  return (
    <div className="mb-20">
      <div className="relative">
        {data.images && data.images[0] && <img src={data.images[0]} alt="" />}
        <div className="absolute inset-0 flex justify-between items-center px-2">
          <BsChevronLeft size={26} fill="#44d62c" />
          <BsChevronRight size={26} fill="#44d62c" />
        </div>
      </div>
      <div className="px-[1rem] mt-8">
        <h2 className="text-[1.3125rem] text-[color:var(--cx-color-primary)]">
          {data.name} {data.color && `- ${data.color}`}
        </h2>
        <h3 className="text-[.875rem] max-w-[90%] mb-2">{data.description}</h3>
        <p className="text-[1.3125rem]">US${data.price}</p>
        <ul className="text-[#888] list-disc ml-5 text-[.875rem] mt-[2rem] mb-10">
          {data.descriptions?.map((des: string, i: number) => (
            <li key={i}>{des}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col gap-6 px-4">
        {data.color && (
          <Selection
            color={data.color}
            model={data.model}
            category={data.category}
          />
        )}
        <button
          className={`${style.button}`}
          onClick={() => {
            setPopup(true);
            increaseCartQuantity(`${id}`);
          }}
        >
          ADD TO CART
        </button>
        {popup && (
          <div className="fixed w-full h-screen inset-0 bg-black/70 flex justify-center items-center text-center">
            <div>
              U added a <b>{data.name}</b>
              <br />
              <button
                className={`${style.button} mt-4`}
                onClick={() => navigate("/cart")}
              >
                Go to cart
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Product;
