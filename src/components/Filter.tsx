import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

function Filter(props) {
  const [filterStatus, setFilterStatus] = useState("Relevance");
  const [active, setActive] = useState(false);

  const handleFilterChange = (newFilterStatus) => {
    setFilterStatus(newFilterStatus);
    props.onFilterChange(newFilterStatus);
  };

  const filterMenu = [
    "Newest",
    "Price (Low to High)",
    "Price (High to Low)",
    "Relevance",
  ];

  return (
    <div
      className={`pb-6 pl-2.5 relative w-[180px] lg:w-[210px] border border-[#999] text-[#999] rounded-lg cursor-pointer z-10 ${
        active &&
        "border-[color:var(--cx-color-primary)] text-[color:var(--cx-color-primary)] shadow"
      }`}
      onClick={() => setActive((prev) => !prev)}
    >
      <p className="legend text-[0.8rem]">Sort by</p>
      <div className="text-white absolute inset-0 flex justify-between items-center px-5 text-[0.8rem] lg:text-[0.915rem]">
        <p>{filterStatus}</p>
        <GoChevronDown
          size={25}
          fill={"#44d62c"}
          className={`${active && "rotate-180"}`}
        />
        <div
          className={`absolute top-14 py-2 left-0 bg-[#111] text-[#888] w-full h-fit rounded-lg border border-[#666]  ${
            active ? "" : "hidden"
          }`}
        >
          {filterMenu.map((item) => {
            return (
              <p
                onClick={() => {
                  setFilterStatus(item);
                  handleFilterChange(item);
                }}
                className={`pl-4 pt-2 pb-1 cursor-pointer hover:bg-[black] rounded-lg ${
                  item === filterStatus ? "text-white" : ""
                }`}
              >
                {item}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Filter;
