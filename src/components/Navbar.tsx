import { useState } from "react";
import logo from "../assets/razer-logo.png";
import Cart from "./Cart";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart_icon.svg";
import { useShoppingCart } from "../context/ShoppingCartContext";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const { cartQuantity } = useShoppingCart();

  return (
    <nav className="flex justify-between items-center px-4 py-4 bg-black border-b border-[#44D62C] relative">
      <span>RAZER</span>
      <Link to="/" className="absolute inset-0 w-full flex justify-center ">
        <img
          src={logo}
          alt="logo"
          className="w-[70px] h-[55px] object-contain  "
        />
      </Link>
      <span className="relative">
        <img
          onClick={() => setToggle((prev) => !prev)}
          src={cartIcon}
          alt="cart"
          className="w-6 h-6 cursor-pointer "
        />
        {cartQuantity !== 0 && (
          <div className="absolute -top-2 -right-2 w-3.5 h-3.5 bg-[color:var(--cx-color-primary)] rounded-full flex justify-center items-center">
            <p className="text-black text-[10px] font-medium">{cartQuantity}</p>
          </div>
        )}
        <Cart toggle={toggle} setToggle={setToggle} />
      </span>
    </nav>
  );
}

export default Navbar;
