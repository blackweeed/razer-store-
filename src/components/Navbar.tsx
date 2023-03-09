import { useState } from "react";
import logo from "../assets/razer-logo.png";
import { FiShoppingCart } from "react-icons/fi";
import Cart from "./Cart";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const border = "border-b border-[#555] w-full text-center py-2";

  return (
    <nav className="flex justify-between items-center px-4 bg-black border-b border-[#44D62C]">
      <span>menu</span>
      <img src={logo} alt="logo" className="w-[70px] h-[55px] object-contain" />
      <span onClick={() => setToggle((prev) => !prev)} className="relative">
        <FiShoppingCart size={20} />
        <div className="absolute -top-2 -right-2 w-3.5 h-3.5 bg-[color:var(--cx-color-primary)] rounded-full flex justify-center items-center">
          <p className="text-black text-[10px] font-medium">3</p>
        </div>
        <Cart toggle={toggle} />
      </span>
    </nav>
  );
}

export default Navbar;
