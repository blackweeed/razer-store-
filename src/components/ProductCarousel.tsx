import { Link } from "react-router-dom";
const getTooFirstWords = (string: string) => {
  return string.split(" ").slice(0, 2).join(" ");
};

function ProductCarousel() {
  return (
    <div className="container">
      {data
        .filter((item) => getTooFirstWords(item.name) === uniqueItems[0])
        .map((item) => (
          <div key={item.id}>
            <Link to={`${item.name}/${item.id}`}>
              <div className="relative">
                <img className="image" src={item.image} alt="" />
                {item.new && (
                  <div className="absolute top-8 -left-3 bg-[color:var(--cx-color-primary)] text-black font-semibold px-5 py-1 text-[1rem] ">
                    NEW
                  </div>
                )}
              </div>
              <div className="px-4 pb-4 h-[200px] flex flex-col justify-between ">
                <div>
                  <h2 className="text-[1.125rem] mb-4">{item.name}</h2>
                  <p className="text-[#888] text-[.875rem]">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[1rem]">US${item.price}</span>
                  <button className="text-[1rem] bg-[color:var(--cx-color-primary)] text-black px-2.5 font-semibold rounded-md">
                    BUY
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
}

export default ProductCarousel;
