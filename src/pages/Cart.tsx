import { Link } from "react-router-dom";
import style from "../assets/style";
import ProductInCart from "../components/ProductInCart";
import { useShoppingCart } from "../context/ShoppingCartContext";
import data from "../data/data.json";

function Cart() {
  const { cartItems } = useShoppingCart();

  return (
    <section>
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center mt-6">
          <h2 className="text-xl mb-2">Your cart is empty</h2>
          <p className="text-[#999] text-sm max-w-[15rem] mb-[1.6rem] text-center">
            Fear not, have a look at our latest products and start shopping.
          </p>
          <Link to="/">
            <button className={`${style.button}`}>visit our store</button>
          </Link>
        </div>
      ) : (
        <>
          <div className="flex items-start justify-between bg-[#222] px-4 py-4">
            <h2 className="text-[17px] leading-5 font-semibold max-w-[150px]">
              Your cart total is US$
              {cartItems.reduce((total, cartItem) => {
                const item = data.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)}
            </h2>
            <button className={`${style.button}`}>CHECKOUT</button>
          </div>

          {cartItems.map((item) => (
            <ProductInCart key={item.id} {...item} />
          ))}
        </>
      )}
    </section>
  );
}

export default Cart;