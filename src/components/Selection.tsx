import { useState } from "react";
import { GoChevronDown } from "react-icons/go";

function Selection() {
  const [active, setActive] = useState(false);

  return (
    <div
      className={` pb-6 pl-2.5 relative w-[200px] border border-[#999] text-[#999] rounded-lg cursor-pointer ${
        active &&
        "border-[color:var(--cx-color-primary)] text-[color:var(--cx-color-primary)] shadow"
      }`}
      onClick={() => setActive((prev) => !prev)}
    >
      <p className="legend text-[0.8rem]">Color / Design</p>
      <div className="text-white absolute inset-0 flex justify-between items-center px-5 text-[0.9rem]">
        <p>White</p>
        <GoChevronDown
          size={25}
          fill={"#44d62c"}
          className={active && "rotate-180"}
        />
      </div>
    </div>
  );
}

export default Selection;
