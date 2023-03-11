import AddToCart from "../components/AddToCart.js";
import data from "../data/storeData.js";

function SeeAll() {
  return (
    <section className="px-4 bg-[#222] ">
      <div className="flex flex-col gap-8 pt-8 pb-20">
        {data.data.map((item) => (
          <div className="">
            <div className="relative">
              <img className="image" src={item.image} alt="" />
              {item.new && (
                <div className="absolute top-8 -left-3 bg-[color:var(--cx-color-primary)] text-black font-semibold px-5 py-1 text-[1rem] ">
                  NEW
                </div>
              )}
            </div>
            <div className="px-4 pb-4 h-[fit-content] flex flex-col justify-between bg-black">
              <div>
                <h2 className="text-[1.125rem] mb-4">{item.name}</h2>
                <ul className="text-[#888] list-disc ml-5 text-[.875rem]  mb-10">
                  {item.descriptions?.map((des) => (
                    <li>{des}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[1rem]">US${item.price}</span>
              </div>
              <AddToCart />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default SeeAll;
