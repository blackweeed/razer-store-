import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import style from "../assets/style";
import { Product } from "../assets/types/Product";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Popup, Filter } from "../components";

function SearchPage() {
  const [data, setData] = useState<Product[]>([]);
  const [searchProduct, setSearchProduct] = useState("");
  const { increaseCartQuantity } = useShoppingCart();
  const [popup, setPopup] = useState(false);
  const navigate = useNavigate();

  const { search } = useLocation();
  const query = new URLSearchParams(search).get("q");
  console.log(searchProduct);

  useEffect(() => {});

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://127.0.0.1:4000/products?q=${query}`);
      setData(result.data);
    };
    fetchData();
  }, [query]);

  function handleSearch(e) {
    e.preventDefault();
    navigate(`/search?q=${searchProduct}`);
  }

  console.log(searchProduct);

  return (
    <div>
      <div className="pt-10 px-[7%]">
        <form onSubmit={handleSearch} className="w-full">
          <div className="relative w-full">
            <input
              value={searchProduct}
              onChange={(event) => setSearchProduct(event.target.value)}
              type="text"
              placeholder={query}
              className="py-2 lg:py-4 pl-10 lg:pl-14 lg:text-xl  rounded-lg border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full bg-[#222] "
            />
            <div className="absolute inset-y-0 left-0 pl-3  flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 lg:h-7 lg:w-7 text-gray-400"
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
        </form>
      </div>
      <div className="flex justify-between px-[7%] py-8 text-[#888]">
        <p>{data.length} results</p>
        <Filter />
      </div>
      <div className="flex flex-col lg:flex-row lg:flex-wrap  justify-center gap-8 pb-20 px-6 lg:px-0 ">
        {data?.map((item) => (
          <div key={item._id} className="flex flex-col lg:w-[20%]">
            <div className="relative">
              <Link
                to={`/${item.category.toLowerCase()}/${item._id}`}
                className="bg-[#111] w-full h-full flex justify-center items-center"
              >
                <img className="w-[80%]" src={item.image} alt="" />
              </Link>
              {item.new && (
                <div className="absolute top-0 bg-[color:var(--cx-color-primary)] text-black font-semibold px-6 py-0.5 text-[0.9rem] ">
                  NEW
                </div>
              )}
            </div>
            <div className="px-4 pb-4 flex flex-col flex-grow justify-between bg-black">
              <div>
                <h2 className="text-[0.9125rem] my-4 hover:underline ">
                  {item.name} {item.color}
                </h2>
                <ul className="text-[#888] list-disc ml-5 text-[.875rem]  mb-6">
                  {item.descriptions?.map((des: string, i: number) => (
                    <li key={i}>{des}</li>
                  ))}
                </ul>
              </div>
              <span className="text-[color:var(--cx-color-primary)] text-[1.25rem] mb-2 hover:underline">
                View details {">"}
              </span>
              <span className="text-[1rem] mb-4">US${item.price}</span>
              <button
                onClick={() => {
                  setPopup(true);
                  increaseCartQuantity(`${item._id}`);
                }}
                className={`${style.button}`}
              >
                ADD TO CART
              </button>
              {popup && <Popup itemName={item.name} setPopup={setPopup} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
