import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import style from "../assets/style.js";
import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "../assets/types/Product";

type Props = {
  toggle: boolean;
  setToggle: (toggle: boolean) => void;
};

function Cart({ toggle, setToggle }: Props) {
  const { cartQuantity, cartItems } = useShoppingCart();
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://127.0.0.1:4000/getData`);
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div
      className={`${
        toggle ? "absolute" : "hidden"
      } top-8 -right-2 w-[280px] h-fit bg-[#222] border-2 border-[#555] flex flex-col items-center px-4 rounded-lg text-[0.875rem] z-20`}
    >
      {cartQuantity === 0 ? (
        <span className={`${style.border} text-center text-[#888] py-4`}>
          Your Cart is empty.
        </span>
      ) : (
        <>
          {cartItems.map((item) => {
            const product = data.find(
              (element) => element._id === item.id.toString()
            );

            return product ? (
              <div
                key={crypto.randomUUID()}
                className={`${style.border} flex items-center mt-2`}
              >
                {product.image && (
                  <img
                    className="w-16 h-16 pt-2 object-contain"
                    src={product.image}
                    alt={product.name}
                  />
                )}
                <div>
                  <h2>{product.name}</h2>
                  <p
                    className={`${
                      item.quantity > 1 ? "" : "opacity-0"
                    } text-[#888]`}
                  >
                    x {item.quantity}
                  </p>
                </div>
              </div>
            ) : null;
          })}
          <Link to="/cart" onClick={() => setToggle(false)}>
            <button className={`${style.button} mt-8 mb-4`}>checkout</button>
          </Link>
        </>
      )}

      <span
        className={`${style.border} flex items-center gap-5 cursor-pointer hover:text-[#44D62C] test:hover group`}
      >
        {" "}
        <Link
          onClick={() => setToggle(false)}
          to="/cart"
          className="elo before:bg-[url('../assets/cart_icon.svg')] before:group-hover:bg-[url('../assets/cart_icon-hover.svg')]"
        >
          Cart {cartQuantity > 0 && `(${cartQuantity})`}
        </Link>
      </span>
      <span
        className={`${style.border} flex items-center gap-5 cursor-pointer hover:text-[#44D62C] group`}
      >
        {" "}
        <p className="elo elo1 before:bg-[url('../assets/orders_icon.svg')] before:group-hover:bg-[url('../assets/orders_icon_hover.svg')] ">
          Orders
        </p>
      </span>
      <span
        className={`${style.border} flex items-center gap-5 cursor-pointer hover:text-[#44D62C] group`}
      >
        {" "}
        <p className="elo elo1 before:bg-[url('../assets/account_icon.svg')] before:group-hover:bg-[url('../assets/account_icon-hover.svg')]">
          Account
        </p>
      </span>
      <span
        className={`${style.border} flex items-center gap-5 cursor-pointer hover:text-[#44D62C] group`}
      >
        {" "}
        <p className="elo elo1 before:bg-[url('../assets/RazerStore_Rewards_icon.svg')] before:group-hover:bg-[url('../assets/RazerStore_Rewards_icon_hover.svg')]">
          RazerStore Rewards
        </p>
      </span>
      <span
        className={`${style.border} border-none flex items-center gap-5 cursor-pointer hover:text-[#44D62C] group`}
      >
        {" "}
        <Link
          to="/login"
          className="elo elo1 before:bg-[url('../assets/signin_icon.svg')] before:group-hover:bg-[url('../assets/signin_icon_hover.svg')]"
        >
          Log In
        </Link>
      </span>
    </div>
  );
}

export default Cart;
