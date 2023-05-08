import { Link } from "react-router-dom";
import { roundToTwoDecimalPlaces } from "../utils/functions";

function HomePageProductViev({ ...item }) {
  return (
    <div key={item._id}>
      <Link
        to={`/${item.category.toLowerCase()}/${item._id}
`}
      >
        <div className="relative">
          <img className="image" src={item.image} alt="" />
          {item.new && (
            <div className="absolute top-8 -left-3 bg-[color:var(--cx-color-primary)] text-black font-semibold px-5 py-1 text-[1rem] ">
              NEW
            </div>
          )}
          {item.exclusive && item.discount === 0 && (
            <div className="absolute top-8 -left-3 bg-[#ff9c07] text-black font-semibold px-5 py-1 text-[1rem] ">
              EXCLUSIVE
            </div>
          )}
          {item.discount !== 0 && (
            <div className="absolute top-8 -left-3 bg-[#28aadc] text-black font-semibold px-5 py-1 text-[1rem] ">
              {item.discount} % OFF
            </div>
          )}
          <div className="absolute bottom-4 right-0 px-3  text-[1rem] flex gap-2"></div>
        </div>
        <div className="px-4 pb-4 h-[200px] flex flex-col justify-between ">
          <div>
            <h2 className="text-[1.125rem] mb-4">{item.name}</h2>
            <p className="text-[#888] text-[.875rem]">{item.description}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col text-[1rem]">
              <span
                className={`text-white ${
                  item.discount !== 0 && "text-white/60 line-through"
                }`}
              >
                US${item.price}
              </span>
              {item.discount !== 0 && (
                <span>
                  US$
                  {roundToTwoDecimalPlaces(
                    item.price - (item.price * item.discount) / 100
                  )}
                </span>
              )}
            </div>
            <button className="text-[1rem] bg-[color:var(--cx-color-primary)] text-black px-2.5 font-semibold rounded-md">
              BUY
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default HomePageProductViev;
