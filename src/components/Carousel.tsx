import { useState } from "react";

function Carousel({ children: slides }: any) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="overflow-x-scroll relative ">
      <div
        className="flex gap-4 transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button onClick={prev} className="text-[2rem]">
          {"<"}
        </button>
        <button onClick={next} className="text-[2rem]">
          {">"}
        </button>
      </div>
    </div>
  );
}

export default Carousel;
