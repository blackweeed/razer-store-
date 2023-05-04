import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import logo from "../assets/razer-logo.png";
import { Cart, NavMenu } from "../components";
import cartIcon from "../assets/cart_icon.svg";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  const [query, setQuery] = useState("");
  const { cartQuantity } = useShoppingCart();

  console.log(query);

  const navigate = useNavigate();

  async function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setToggleSearchBar(false);
    navigate(`/search?q=${query}`);
  }

  return (
    <nav className="flex justify-between items-center px-4 lg:px-[7%] py-1  bg-black border-b border-[#44D62C] relative lg:sticky lg:top-0 z-30 ">
      {toggleSearchBar && (
        <form
          onSubmit={handleSearch}
          className="absolute items-center gap-6 left-[25%]  w-[40%] ml-24 h-full z-50 hidden lg:flex"
        >
          <svg
            className="h-6 w-6 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a7 7 0 015.78 10.667l3.743 3.743a1 1 0 11-1.414 1.414l-3.743-3.743A7 7 0 119 2zm0 2a5 5 0 100 10 5 5 0 000-10z"
              clipRule="evenodd"
            />
          </svg>
          <input
            className="bg-black outline-none w-full h-full text-white text-lg index-0"
            type="text"
            placeholder="Search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <svg
            onClick={() => setToggleSearchBar(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </form>
      )}
      <span
        className="z-50 cursor-pointer  lg:hidden "
        onClick={() => setToggleMenu(!toggleMenu)}
      >
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
      <div /* className="absolute inset-0  w-full  flex items-center justify-center z-30" */
        className="order-0"
      >
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-[70px] lg:w-[80px] h-[55px] object-contain"
          />
        </Link>
      </div>
      <span
        className={`relative z-30 order-2 flex items-center gap-20  ${
          toggleMenu ? "hidden" : ""
        }`}
      >
        {toggleSearchBar ? null : (
          <svg
            onClick={() => setToggleSearchBar(true)}
            // onClick={() => setToggleMenu(true)}
            className="h-6 w-6 text-gray-400 cursor-pointer hidden lg:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9 2a7 7 0 015.78 10.667l3.743 3.743a1 1 0 11-1.414 1.414l-3.743-3.743A7 7 0 119 2zm0 2a5 5 0 100 10 5 5 0 000-10z"
              clipRule="evenodd"
            />
          </svg>
        )}
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

      {toggleMenu && (
        <NavMenu setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} />
      )}
    </nav>
  );
}

export default Navbar;
