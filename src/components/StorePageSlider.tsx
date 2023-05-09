import { useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

type Props = {
  image: string;
  header: string;
  paragraph: string;
  button: string;
};

type CarouselProps = {
  images: Props[];
};

const Carousel = ({ images }: CarouselProps) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((slideIndex + 1) % 3);
  };

  const prevSlide = () => {
    setSlideIndex((slideIndex - 1 + 3) % 3);
  };

  return (
    <div className="w-full group h-[400px] overflow-hidden relative mb-10 -mt-8">
      <div
        className="w-full h-full flex transition-all duration-700 ease-in-out "
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
      >
        {images?.map((image) => (
          <div
            style={{
              backgroundImage: `url('${image.image}')`,
            }}
            className="w-screen h-full flex-shrink-0 bg-cover bg-top relative "
          >
            <div className="absolute inset-0 flex flex-col justify-center items-center lg:items-end lg:mr-40 ">
              <div className=" w-[300px]">
                {" "}
                <h2 className="text-2xl font-semibold uppercase max-w-[300px]">
                  {image.header}
                </h2>
                <p className="text-white/60 py-2 text-lg max-w-[300px]">
                  {image.paragraph}
                </p>
                <button className="text-[color:var(--cx-color-primary)] ">
                  {image.button} {">"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute inset-0 flex items-end justify-center gap-6 z-20">
        {images?.map((i, index) => (
          <div
            onClick={() => setSlideIndex(index)}
            className={`mb-6 w-3.5 h-3.5 rounded-full cursor-pointer ${
              index === slideIndex
                ? "bg-[color:var(--cx-color-primary)]"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>
      <div className="hidden group-hover:flex absolute inset-0  justify-between items-center px-6 lg:px-8">
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
    </div>
  );
};

export default Carousel;
