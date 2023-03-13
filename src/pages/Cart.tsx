import style from "../assets/style";
import ProductInCart from "../components/ProductInCart";
import { useShoppingCart } from "../context/ShoppingCartContext";

function Cart() {
  const { cartItems } = useShoppingCart();
  console.log(cartItems);

  return (
    <section>
      <div className="flex items-start justify-between bg-[#222] px-4 py-4">
        <h2 className="text-[17px] leading-5 font-semibold max-w-[150px]">
          Your cart total is US$179.99
        </h2>
        <button className={`${style.button}`}>CHECKOUT</button>
      </div>
      {cartItems.map((item) => (
        <ProductInCart id={item.id} quantity={item.quantity} />
      ))}
    </section>
  );
}

export default Cart;
