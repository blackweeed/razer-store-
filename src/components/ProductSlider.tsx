import { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function ProductSlider({ ...data }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [nextSlideNumber, setNextSlideNumber] = useState(null);
  const [prevSlideNumber, setPrevSlideNumber] = useState(null);

  function nextSlide() {
    if (slideNumber != null && data != null) {
      const newSlideNumber = (slideNumber + 1) % data.images.length;
      setNextSlideNumber(newSlideNumber);
      setTimeout(() => {
        setSlideNumber(newSlideNumber);
        setNextSlideNumber(null);
      }, 500); // 500ms to czas trwania animacji
    }
  }

  function prevSlide() {
    if (slideNumber != null && data != null) {
      const newSlideNumber =
        (slideNumber - 1 + data.images.length) % data.images.length;
      setPrevSlideNumber(newSlideNumber);
      setTimeout(() => {
        setSlideNumber(newSlideNumber);
        setPrevSlideNumber(null);
      }, 500); // 500ms to czas trwania animacji
    }
  }

  useEffect(() => {
    setNextSlideNumber(null);
    setPrevSlideNumber(null);
  }, [slideNumber]);

  return (
    <div className="relative flex w-full overflow-hidden">
      {data.images && data.images[0] && (
        <img
          className={`w-full object-cover ${
            nextSlideNumber !== null
              ? "next-slide"
              : prevSlideNumber !== null
              ? "prev-slide"
              : ""
          }`}
          src={data.images[slideNumber]}
          alt=""
        />
      )}
      <div className="absolute inset-0 flex justify-between items-center px-2">
        <BsChevronLeft
          className="cursor-pointer"
          onClick={prevSlide}
          size={26}
          fill="#44d62c"
        />
        <BsChevronRight
          className="cursor-pointer"
          onClick={nextSlide}
          size={26}
          fill="#44d62c"
        />
      </div>
    </div>
  );
}

export default ProductSlider;
