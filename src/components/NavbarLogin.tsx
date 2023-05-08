import { useState } from "react";
import logo from "../assets/razer-logo.png";
import { Link } from "react-router-dom";
import cartIcon from "../assets/cart_icon.svg";
import { useShoppingCart } from "../context/ShoppingCartContext";

function NavbarLogin() {
  const [toggle, setToggle] = useState(false);
  const { cartQuantity } = useShoppingCart();

  return (
    <nav className="flex justify-between items-center px-4 bg-black relative mt-2 pb-12">
      <Link to="/" className="absolute inset-0 w-full flex justify-center ">
        <img
          src={logo}
          alt="logo"
          className="w-[70px] lg:w-[84px] h-[55px] object-contain  "
        />
      </Link>
    </nav>
  );
}

export default NavbarLogin;
