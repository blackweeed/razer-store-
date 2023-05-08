import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function StorePageSlider() {
  const [slideNumber, setSlideNumber] = useState(0);

  const images = [
    "https://assets2.razerzone.com/images/pnx.assets/d90c20bd9a4df3f52933b15e89306f08/chroma-1920x400_desktop.jpg",
    "https://assets2.razerzone.com/images/pnx.assets/d90c20bd9a4df3f52933b15e89306f08/1920x400-(12).jpg",
    "https://assets2.razerzone.com/images/pnx.assets/cc58ab7cef605b2c53a7f5d0c61c2eff/esportsevergreen-catbnr-desktop-400px.jpg",
  ];

  const prevSlide = () => {
    setSlideNumber((prevSlideNumber) =>
      prevSlideNumber === 0 ? images.length - 1 : prevSlideNumber - 1
    );
  };
  const nextSlide = () => {
    setSlideNumber((prevSlideNumber) =>
      prevSlideNumber === images.length - 1 ? 0 : prevSlideNumber + 1
    );
  };

  return (
    <div className="w-full h-[400px] mb-10 overflow-hidden relative">
      <div className="absolute inset-0 flex items-end justify-center gap-6 z-20">
        {images.map((i, index) => (
          <div
            onClick={() => setSlideNumber(index)}
            className={`mb-6 w-3.5 h-3.5 rounded-full cursor-pointer ${
              index === slideNumber
                ? "bg-[color:var(--cx-color-primary)]"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
      <div className="absolute inset-0 flex justify-between items-center px-6 lg:px-8">
        <BsChevronLeft
          onClick={prevSlide}
          className="cursor-pointer z-20 w-7 lg:w-14 lg:h-14 h-7"
          fill="#44d62c"
        />
        <BsChevronRight
          onClick={nextSlide}
          className="cursor-pointer z-20 w-7 lg:w-14 lg:h-14  h-7"
          fill="#44d62c"
        />
      </div>
      <div
        style={{
          transform: `translateX(-${slideNumber * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
        className="w-full h-full relative flex "
      >
        {images.map((photo) => (
          <img className="w-full h-full object-cover" src={photo} alt="" />
        ))}
      </div>
    </div>
  );
}

export default StorePageSlider;
