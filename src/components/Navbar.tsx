import { useState } from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import logo from "../assets/razer-logo.png";
import { Cart, NavMenu } from "../components";
import cartIcon from "../assets/cart_icon.svg";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const { cartQuantity } = useShoppingCart();

  return (
    <nav className="flex justify-between items-center px-4 lg:px-[9%] py-4 bg-black border-b border-[#44D62C] relative lg:sticky lg:top-0 z-10">
      <span className="z-50" onClick={() => setToggleMenu(!toggleMenu)}>
        {toggleMenu ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        )}
      </span>
      <div className="absolute inset-0 w-full flex justify-center z-30">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[70px] h-[55px] object-contain"
          />
        </Link>
      </div>
      <span className={`relative z-30 ${toggleMenu ? "hidden" : ""}`}>
        <img
          id="cart-icon"
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
      {toggleMenu && <NavMenu toggleMenu={toggleMenu} />}
    </nav>
  );
}

export default Navbar;
