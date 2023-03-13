import style from "../assets/style";
import ProductInCart from "../components/ProductInCart";
import { useShoppingCart } from "../context/ShoppingCartContext";
import data from "../data/data.json";

function Cart() {
  const { cartItems } = useShoppingCart();

  return (
    <section>
      {cartItems.map((item, i) => (
        <p key={i}>{item.id}</p>
      ))}
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
    </section>
  );
}

export default Cart;
