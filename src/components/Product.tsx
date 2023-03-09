import data from "../data/storeData.js";

const mice = data.data[0];

function Product() {
  return (
    <div className=" bg-[#322] mt-8 w-[70vw] mr-[1.5rem]">
      <div className="bg-[#311]">
        <img className="" src={mice.image} alt="" />
      </div>
      <div className="px-4 pb-6">
        <h3 className="text-[1.125rem]">
          Razer DeathAdder V3 Pro Faker Edition
        </h3>
        <p className="text-[#888] font-light mt-4 mb-6">
          Ultra-lightweight Wireless Ergonomic Esports Mouse
        </p>
        <div className="flex items-center justify-between ">
          <span>$169.99</span>
          <button className="bg-[color:var(--cx-color-primary)] text-black text-[0.9rem] text font-bold px-2.5 py-0.5  rounded-md ">
            BUY
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
