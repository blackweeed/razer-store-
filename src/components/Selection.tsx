import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import data from "../data/data.json";

type Props = {
  color: string;
  selected: string;
  setSelected: (item: string) => void;
};

function Selection({ color }: Props) {
  const [active, setActive] = useState(false);
  const [selected, setSelected] = useState<string>("");
  console.log(selected);

  const colors = data.map((item) => item.color);

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
          className={`absolute -top-28 left-0 bg-white text-black w-full h-fit rounded-lg ${
            active && "hidden"
          }`}
        >
          {colors.map((item) => (
            <p
              onClick={() => {
                if (item !== selected) {
                  setSelected(item);
                }
              }}
              className="pl-4 pt-2 pb-1 cursor-pointer bg-white"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Selection;
