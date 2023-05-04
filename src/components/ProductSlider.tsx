import { useState, useEffect } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

function ProductSlider({ ...data }) {
  const [slideNumber, setSlideNumber] = useState(0);
  const [nextSlideNumber, setNextSlideNumber] = useState(null);
  const [prevSlideNumber, setPrevSlideNumber] = useState(null);
  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => {
    setIsHidden(true);
    setTimeout(() => {
      setIsHidden(false);
    }, 900);
  };

  function nextSlide() {
    if (slideNumber != null && data != null) {
      const newSlideNumber: any = (slideNumber + 1) % data.images.length;
      setNextSlideNumber(newSlideNumber);
      setTimeout(() => {
        setSlideNumber(newSlideNumber);
        setNextSlideNumber(null);
      }, 400); // 400ms to czas trwania animacji
    }
  }

  function prevSlide() {
    if (slideNumber != null && data != null) {
      const newSlideNumber: any =
        (slideNumber - 1 + data.images.length) % data.images.length;
      setPrevSlideNumber(newSlideNumber);
      setTimeout(() => {
        setSlideNumber(newSlideNumber);
        setPrevSlideNumber(null);
      }, 400); // 400ms to czas trwania animacji
    }
  }

  useEffect(() => {
    setNextSlideNumber(null);
    setPrevSlideNumber(null);
  }, [slideNumber]);

  return (
    <div className="relative flex lg:w-[85%] overflow-hidden ">
      <div
        className={`hidden absolute top-10 left-20 lg:flex flex-col gap-4 w-40 transition duration-400 ease-in-out ${
          isHidden ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
      >
        {" "}
        {data?.images?.map((item: string, index: number) => {
          return (
            <img
              onClick={() => setSlideNumber(index)}
              key={index}
              className={`border-2 w-full h-full cursor-pointer z-20 ${
                index === slideNumber &&
                "border-[color:var(--cx-color-primary)]"
              }`}
              src={item}
              alt=""
            />
          );
        })}
      </div>
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
          className="cursor-pointer w-7 lg:w-9 lg:h-9 h-7"
          onClick={() => {
            prevSlide(), handleClick();
          }}
          fill="#44d62c"
        />
        <BsChevronRight
          className="cursor-pointer w-7 lg:w-9 lg:h-9  h-7"
          onClick={() => {
            nextSlide(), handleClick();
          }}
          fill="#44d62c"
        />
      </div>
    </div>
  );
}

export default ProductSlider;
