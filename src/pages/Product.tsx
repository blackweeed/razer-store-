import data from "../data/storeData.js";

const item = data.data[2];

function Product() {
  return (
    <div>
      <div className="slider"></div>
      <div className="px-[1rem]">
        <h2 className="text-[1.3125rem] text-[color:var(--cx-color-primary)]">
          {item.name} - Black
        </h2>
        <h3 className="text-[.875rem] max-w-[90%] mb-2">{item.description}</h3>
        <p className="text-[1.3125rem]">US${item.price}</p>
        <ul className="text-[#888] list-disc ml-5 text-[.875rem] mt-[2rem]">
          <li>Ultra-lightweight Design</li>
          <li>Refined Ergonomic Form</li>
          <li>Razer™ Focus Pro 30K Optical Sensor</li>
        </ul>
      </div>
    </div>
  );
}

export default Product;
