import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import data from "../data/data.json";

type Props = {
  color?: string;
  name: string;
};

function Selection({ color, name }: Props) {
  const [active, setActive] = useState(false);
  const filteredColors = data.filter((item) => item.name === name);
  const colors = filteredColors.map((item) => item.color);

  const navigate = useNavigate();

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
        <p>{color}</p>
        <GoChevronDown
          size={25}
          fill={"#44d62c"}
          className={`${active && "rotate-180"}`}
        />
        <div
          className={`absolute -top-28 left-0 bg-[#111] text-[#888] w-full h-fit rounded-lg border border-[#666]  ${
            active ? "" : "hidden"
          }`}
        >
          {colors.map((item, index) => (
            <p
              key={index}
              onClick={(e) => {
                navigate(
                  `/mice/${
                    data.find((x) => x.color === e.currentTarget.textContent)
                      ?.id
                  }`
                );
              }}
              className={`pl-4 pt-2 pb-1 cursor-pointer hover:bg-[black] rounded-lg ${
                item === color ? "text-white" : null
              }`}
            >
              <span>{item}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Selection;
