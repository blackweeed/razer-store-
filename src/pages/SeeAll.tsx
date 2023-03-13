import { Link } from "react-router-dom";
import data from "../data/storeData.js";
import style from "../assets/style";

function SeeAll() {
  return (
    <section className="px-[1.2rem] bg-[#222] ">
      <div className="flex flex-col gap-8 pt-8 pb-20">
        {data.data.map((item) => (
          <Link key={item.id} to={`${item.id}`} className="flex flex-col">
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
                  {item.descriptions?.map((des, i) => (
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
