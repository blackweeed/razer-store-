import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import style from "../assets/style";
import ProductInCart from "../components/ProductInCart";
import { useShoppingCart } from "../context/ShoppingCartContext";
import axios from "axios";

interface Product {
  _id: number;
  price: number;
}

function Cart() {
  const { cartItems } = useShoppingCart();
  const [data, setData] = useState<Product[]>([]);

  function roundToTwoDecimalPlaces(number: number): number {
    return Math.round(number * 100) / 100;
  }

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
              {roundToTwoDecimalPlaces(
                cartItems.reduce((total: number, cartItem) => {
                  const item = data.find((i) => i._id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity;
                }, 0)
              )}
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
          <div className="flex-1">
            <h2 className="text-[color:var(--cx-color-primary)] text-[1.125rem]">
              Have a promo code?
            </h2>
            <div className="mt-2">
              <form action="submit" className="flex gap-4 ">
                <input
                  className="bg-black border border-white/50 px-2 py-3  w-full lg:w-[60%] rounded-md focus:border-[color:var(--cx-color-primary)] focus:border-2 focus:outline-none	"
                  type="text"
                />
                <button
                  className="bg-[color:var(--cx-color-primary)] 
text-black font-semibold rounded-md px-8"
                >
                  Apply
                </button>
              </form>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex justify-between ">
              <div>
                Subtotal <br />
                <span className="text-white/60">Excludes local taxes</span>
              </div>
              <h4 className="text-[17px] leading-5 font-semibold max-w-[150px]">
                US$
                {roundToTwoDecimalPlaces(
                  cartItems.reduce((total: number, cartItem) => {
                    const item = data.find((i) => i._id === cartItem.id);
                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)
                )}
              </h4>
            </div>
            <div className="flex justify-between items-center mt-4">
              <span>Shipping</span>
              <h4 className="leading-5 font-semibold text-white/60">
                Calculated after address entry
              </h4>
            </div>
            <div className="flex justify-between items-center mt-4 pt-2 border-t border-white/20 ">
              <span className="text-[1.675rem] font-normal">Your Total</span>
              <h4 className="text-[1.675rem] leading-5 font-normal max-w-[150px]">
                US$
                {roundToTwoDecimalPlaces(
                  cartItems.reduce((total: number, cartItem) => {
                    const item = data.find((i) => i._id === cartItem.id);
                    return total + (item?.price || 0) * cartItem.quantity;
                  }, 0)
                )}
              </h4>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
