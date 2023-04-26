import { Link, useNavigate } from "react-router-dom";
// import data from "../../data/test.json";
import style from "../../assets/style";
import { useEffect, useState } from "react";
import axios from "axios";

function SeeAll({ type }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://127.0.0.1:4000/${type}`);
      setData(result.data);
    };
    fetchData();
  }, [type]);

  const active =
    "border-b-2 border-[color:var(--cx-color-primary)] text-[color:var(--cx-color-primary)]";

  return (
    <section className=" bg-[#222] ">
      <div className="bg-black pt-4">
        <h1 className="text-xl font-semibold text-center mb-6 uppercase">
          Gaming Mice
        </h1>
        <nav className="px-[1.2rem] text-sm ">
          <ul className="flex gap-4">
            <li
              onClick={(e) => navigate("/mice")}
              className={`pb-2 font-semibold text-[#888] ${
                type === "mice" && active
              }`}
            >
              MICE
            </li>
            <li
              onClick={(e) => navigate("/accessories")}
              className={`pb-2 font-semibold text-[#888]  ${
                type === "accessories" && active
              } `}
            >
              ACCESSORIES
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex flex-col gap-8 pt-8 pb-20 px-[1.2rem]">
        {data?.map((item) => (
          <Link
            key={item._id}
            to={`/${type}/${item._id}`}
            className="flex flex-col"
          >
            <div className="relative">
              <div className="bg-[#111] w-full h-full flex justify-center items-center">
                <img className="w-[80%]" src={item.image} alt="" />
              </div>
              {item.new && (
                <div className="absolute top-0 bg-[color:var(--cx-color-primary)] text-black font-semibold px-6 py-0.5 text-[0.9rem] ">
                  NEW
                </div>
              )}
            </div>
            <div className="px-4 pb-4 h-[fit-content] flex flex-col justify-between bg-black">
              <div>
                <h2 className="text-[0.9125rem] mb-4">
                  {item.name} {item.color}
                </h2>
                <ul className="text-[#888] list-disc ml-5 text-[.875rem]  mb-6">
                  {item.descriptions?.map((des: string, i: number) => (
                    <li key={i}>{des}</li>
                  ))}
                </ul>
              </div>
              <span className="text-[color:var(--cx-color-primary)] text-[0.75rem]">
                View details {">"}
              </span>
              <span className="text-[0.875rem] mb-4">US${item.price}</span>
              <button className={`${style.button}`}>ADD TO CART</button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default SeeAll;
