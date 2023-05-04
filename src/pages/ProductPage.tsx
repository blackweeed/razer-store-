import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Selection from "../components/Selection.js";
import style from "../assets/style.js";
import { useShoppingCart } from "../context/ShoppingCartContext.js";
import { Product as ProductI } from "../assets/types/Product.js";
import axios from "axios";
import Popup from "../components/Popup.js";
import ProductSlider from "../components/ProductSlider.js";

function Product() {
  const { id } = useParams();
  const { increaseCartQuantity } = useShoppingCart();
  const [data, setData] = useState<ProductI>([]);
  const [popup, setPopup] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://127.0.0.1:4000/getData/${id}`);
      setData(result.data);
    };
    fetchData();
  }, [id]);

  return (
    <div className="flex flex-col lg:flex-row lg:gap-4 mb-10 lg:mb-0 lg:h-[calc(100vh-64px)]">
      <ProductSlider {...data} />
      <div className="lg:w-[30%] ">
        <div className="px-[1rem] mt-8 ">
          <h2 className="text-[1.3125rem] lg:text-2xl text-[color:var(--cx-color-primary)]">
            {data.name} {/* {data.color && `- ${data.color}}`} */}
          </h2>
          <h3 className="text-[.875rem] lg:text-base max-w-[90%] mb-2 lg:mb-3 lg:mt-0.5">
            {data.description}
          </h3>
          <p className="text-[1.3125rem] lg:text-2xl">US${data.price}</p>
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
              _id={""}
              image={""}
              images={[]}
              name={""}
              description={""}
              descriptions={[]}
              price={0}
              line={""}
              new={false}
              exclusive={false}
            />
          )}
          <button
            className={`${style.button} lg:text-base lg:w-full`}
            onClick={() => {
              setPopup(true);
              increaseCartQuantity(`${id}`);
            }}
          >
            ADD TO CART
          </button>
          {popup && <Popup itemName={data.name} setPopup={setPopup} />}
        </div>
      </div>
    </div>
  );
}

export default Product;
