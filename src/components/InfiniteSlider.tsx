import slideImages from "../data/slideImages.json";

function InfiniteSlider() {
  return (
    <div className="flex items-center mb-20 justify-center ">
      {/* 1. */}
      <div className="w-[400%] h-80 overflow-hidden  relative ">
        {/* 2. */}
        <div className="w-[400%] h-80 flex items-center gap-4 justify-around absolute left-0  animate">
          {/* 3 */}
          {slideImages.map((i) => {
            return (
              <div className="flex  justify-center items-start w-[40rem]  ">
                <img className="max-w-none" src={i.image} />
              </div>
            );
          })}
          {slideImages.map((i) => {
            return (
              <div className="flex  justify-center items-start w-[40rem] ">
                <img className="max-w-none" src={i.image} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default InfiniteSlider;
