import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function ProductSlider({ ...data }) {
  let [slideNumber, setSlideNumber] = useState(0);

  function nextSlide() {
    if (slideNumber != null && data != null) {
      setSlideNumber((slideNumber + 1) % data.images.length);
    }
  }

  function prevSlide() {
    if (slideNumber != null && data != null) {
      setSlideNumber(
        (slideNumber - 1 + data.images.length) % data.images.length
      );
    }
  }

  return (
    <div className="relative flex">
      {data.images && data.images[0] && (
        <img className="slide active " src={data.images[slideNumber]} alt="" />
      )}
      <div className="absolute inset-0 flex justify-between items-center px-2">
        <BsChevronLeft onClick={prevSlide} size={26} fill="#44d62c" />
        <BsChevronRight onClick={nextSlide} size={26} fill="#44d62c" />
      </div>
    </div>
  );
}

export default ProductSlider;
