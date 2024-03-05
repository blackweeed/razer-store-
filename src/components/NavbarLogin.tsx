import logo from "../assets/razer-logo.png";
import { Link } from "react-router-dom";

function NavbarLogin() {
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
