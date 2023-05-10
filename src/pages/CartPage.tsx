import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import axios from "axios";
import style from "../assets/style";
import ProductInCart from "../components/ProductInCart";
import { roundToTwoDecimalPlaces } from "../utils/functions";
import PromoCode from "../components/PromoCode";

interface Product {
  _id: number;
  price: number;
  discount: number;
}
interface Cupon {
  cuponName: string;
  discount: number;
}

function Cart() {
  const { cartItems } = useShoppingCart();
  const [data, setData] = useState<Product[]>([]);
  const [activeCode, setActiveCode] = useState("");
  const [cupons, setCupons] = useState<Cupon[]>([
    {
      cuponName: "SUMMER23",
      discount: 0.2,
    },
    {
      cuponName: "FALL23",
      discount: 0.15,
    },
    {
      cuponName: "WINTER25",
      discount: 0.25,
    },
    {
      cuponName: "SPRING24",
      discount: 0.1,
    },
  ]);

  /*  const totalPrice = cartItems.reduce((total: number, cartItem) => {
    const item = data.find((i) => i._id === cartItem.id);
    return roundToTwoDecimalPlaces(
      total +
        (item?.price - (item?.price * item?.discount) / 100 || 0) *
          cartItem.quantity
    );
  }, 0);
 */

  const totalPrice = cartItems.reduce((total: number, cartItem) => {
    const item = data.find((i) => i._id === cartItem.id);
    const price = item?.price ?? 0;
    const discount = item?.discount ?? 0;
    return roundToTwoDecimalPlaces(
      total + (price - (price * discount) / 100) * cartItem.quantity
    );
  }, 0);

  const discountedPrice = roundToTwoDecimalPlaces(
    totalPrice -
      totalPrice *
        (cupons.find((c) => c.cuponName === activeCode)?.discount || 0)
  );

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://127.0.0.1:4000/getData`);
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <section>
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center mt-6">
          <h2 className="text-xl lg:text-2xl mb-2">Your cart is empty</h2>
          <p className="text-[#999] text-sm lg:text-base max-w-[15rem] mb-[1.6rem] text-center">
            Fear not, have a look at our latest products and start shopping.
          </p>
          <Link to="/">
            <button
              className={`${style.button} lg:py-3 lg:w-[150px] lg:font-bold`}
            >
              visit our store
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div className="flex items-start lg:items-center justify-between bg-[#222] px-[9%] py-4 lg:py-7">
            <h2 className="text-[17px] leading-5 font-semibold max-w-[150px] lg:max-w-none lg:text-2xl">
              Your cart total is US$
              {totalPrice}
            </h2>
            <button className={`${style.button}  lg:font-bold lg:py-3`}>
              CHECKOUT
            </button>
          </div>
          <div className="mx-[9%]">
            {cartItems.map((item) => (
              <ProductInCart key={item.id} {...item} />
            ))}
          </div>
        </>
      )}
      {cartItems.length !== 0 && (
        <div className="flex gap-6 flex-col lg:flex-row  px-4 lg:px-[9%] py-6 ">
          <PromoCode
            cupons={cupons}
            setCupons={setCupons}
            activeCode={activeCode}
            setActiveCode={setActiveCode}
          />
          <div className="flex-1">
            <div className="flex justify-between ">
              <div>
                Subtotal <br />
                <span className="text-white/60">Excludes local taxes</span>
              </div>
              <h4 className="text-[17px] leading-5 font-semibold max-w-[150px]">
                US$
                {totalPrice}
              </h4>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Shipping</span>
              <h4 className="leading-5 font-semibold text-white/60">
                Calculated after address entry
              </h4>
            </div>
            <div className="flex justify-between items-center mt-4 pt-2 border-t border-white/20 ">
              <span className="text-[1.575rem] font-normal">Your Total</span>
              <span className="flex flex-col gap-4 items-end text-[1.575rem] leading-5 font-normal max-w-[300px] lg:max-w-none ">
                {activeCode && (
                  <p className="text-white/60 line-through">
                    US$
                    {totalPrice}
                  </p>
                )}
                <p>
                  US$
                  {discountedPrice}
                </p>
                {activeCode && (
                  <p className="text-white/70 text-base lg:text-lg">
                    {" "}
                    You are saving $
                    {roundToTwoDecimalPlaces(totalPrice - discountedPrice)}!
                  </p>
                )}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
