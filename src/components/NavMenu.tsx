import { useEffect } from "react";

type Props = {
  toggleMenu: boolean;
};

function NavMenu({ toggleMenu }: Props) {
  useEffect(() => {
    if (toggleMenu) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [toggleMenu]);

  return (
    <nav
      className={`bg-black fixed  inset-0 w-full h-screen  ${
        toggleMenu ? "menu-open" : ""
      }
     flex items-start justify-start pt-20 px-4`}
    >
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Search for products"
          className="py-2 pl-10 pr-4 rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full bg-[#222] "
        />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none ">
          <svg
            className="h-5 w-5 text-gray-400"
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
        </div>
      </div>
    </nav>
  );
}

export default NavMenu;
