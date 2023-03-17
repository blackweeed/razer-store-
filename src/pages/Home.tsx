import ProductView from "../components/ProductView";
import InfiniteSlider from "../components/InfiniteSlider";
import data from "../data/data.json";
import { Link } from "react-router-dom";

function Home() {
  const getTooFirstWords = (string: string) => {
    return string.split(" ").slice(0, 2).join(" ");
  };

  const TEST = data.map((item) => getTooFirstWords(item.name));
  let uniqueItems = [...new Set(TEST)];

  return (
    <section className="">
      <div className="mb-6 px-6">
        <h1 className="text-[color:var(--cx-color-primary)] text-[2.5rem] font-semibold">
          GAMING MICE
        </h1>
        <p className="text-[1.3125rem] leading-none font-semibold">
          HIGH-PERFORMANCE WIRED AND WIRELESS MICE MADE FOR EVERY GAMER'S HAND
        </p>
      </div>
      <ProductView brand={uniqueItems[0]} />
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
      <ProductView brand={uniqueItems[1]} />

      <div className="container">
        {data
          .filter((item) => getTooFirstWords(item.name) === uniqueItems[1])
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
                  {item.exclusive && (
                    <div className="absolute top-8 -left-3 bg-[#ff9c07] text-black font-semibold px-5 py-1 text-[1rem] ">
                      EXCLUSIVE
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
      <ProductView brand={uniqueItems[2]} />
      <div className="container">
        {data
          .filter((item) => getTooFirstWords(item.name) === uniqueItems[2])
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
      <InfiniteSlider />
    </section>
  );
}

export default Home;
