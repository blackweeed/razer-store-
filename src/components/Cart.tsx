const border = "border-b border-[#555] w-full text-left py-2.5 ";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import data from "../data/data.json";

type Props = {
  toggle: boolean;
};

function Cart({ toggle }: Props) {
  const { cartQuantity, cartItems } = useShoppingCart();

  return (
    <div
      className={`${
        toggle ? "absolute" : "hidden"
      } top-8 -right-2 w-[280px] h-fit bg-[#222] border-2 border-[#555] flex flex-col items-center px-4 rounded-lg text-[0.875rem] z-20`}
    >
      {cartQuantity === 0 ? (
        <span className={`${border} text-center text-[#888] py-4`}>
          Your Cart is empty.
        </span>
      ) : (
        cartItems.map((item) => {
          const product = data[item.id];

          return (
            <div
              key={crypto.randomUUID()}
              className={`${border} flex items-center mt-2`}
            >
              <img
                className="w-16 h-16 pt-2 object-contain"
                src={product.image}
                alt=""
              />
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
          );
        })
      )}
      <span
        className={`${border} flex items-center gap-5 cursor-pointer hover:text-[#44D62C] test:hover group`}
      >
        {" "}
        <Link
          to="/cart"
          className="elo before:bg-[url('../assets/cart_icon.svg')] before:group-hover:bg-[url('../assets/cart_icon-hover.svg')]"
        >
          Cart {cartQuantity > 0 && `(${cartQuantity})`}
        </Link>
      </span>
      <span
        className={`${border} flex items-center gap-5 cursor-pointer hover:text-[#44D62C] group`}
      >
        {" "}
        <p className="elo elo1 before:bg-[url('../assets/orders_icon.svg')] before:group-hover:bg-[url('../assets/orders_icon_hover.svg')] ">
          Orders
        </p>
      </span>
      <span
        className={`${border} flex items-center gap-5 cursor-pointer hover:text-[#44D62C] group`}
      >
        {" "}
        <p className="elo elo1 before:bg-[url('../assets/account_icon.svg')] before:group-hover:bg-[url('../assets/account_icon-hover.svg')]">
          Account
        </p>
      </span>
      <span
        className={`${border} flex items-center gap-5 cursor-pointer hover:text-[#44D62C] group`}
      >
        {" "}
        <p className="elo elo1 before:bg-[url('../assets/RazerStore_Rewards_icon.svg')] before:group-hover:bg-[url('../assets/RazerStore_Rewards_icon_hover.svg')]">
          RazerStore Rewards
        </p>
      </span>
      <span
        className={`${border} border-none flex items-center gap-5 cursor-pointer hover:text-[#44D62C] group`}
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
