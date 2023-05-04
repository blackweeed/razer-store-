import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Categories, ProductView, Newsletter } from "../components";
import { Product } from "../assets/types/Product";
import axios from "axios";

type Props = {
  text: string;
};

const HomePage = ({ text }: Props) => {
  const [data, setData] = useState<Product[]>([]);
  const [toggleNewsletter, setToggleNewsletter] = useState(false);
  const lineArray = data.map((item) => item.line);
  const uniqueLineArr = [...new Set(lineArray)];

  const categoryDescription: Record<string, string> = {
    keyboards: "FULL-SIZED, TENKEYLESS, AND 60% KEYBOARDS",
    mice: "HIGH-PERFORMANCE WIRED AND WIRELESS MICE MADE FOR EVERY GAMER'S HAND",
    audio:
      "EXPLORE RAZER HEADSETS, WIRELESS HEADPHONES, EARPHONES FOR GAMING & BROADCASTING",
    chairs:
      "AWARD-WINNING ERGONOMICS AND COMFORT FOR COUNTLESS HOURS OF GAMING",
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setToggleNewsletter(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://127.0.0.1:4000/${text}`);
      setData(result.data);
    };
    fetchData();
  }, [text]);
  return (
    <section className="lg:px-20 ">
      {toggleNewsletter && (
        <Newsletter
          setToggleNewsletter={setToggleNewsletter}
          toggleNewsletter={toggleNewsletter}
        />
      )}
      <Categories category={text} />
      <div className="mb-6 lg:mb-8 px-6">
        <h1 className="text-[color:var(--cx-color-primary)] text-[2.5rem] font-semibold uppercase space tracking-tight leading-12 ">
          gaming {text}
        </h1>
        <p className="text-[1.3125rem] leading-none font-semibold ">
          {categoryDescription[text]}
        </p>
      </div>
      <>
        {uniqueLineArr.map((line, i) => {
          return (
            <div key={i}>
              <ProductView brand={line} category={text} />
              <div className="container">
                {data
                  .filter((test) => test.line === line)
                  .map((item) => (
                    <div key={item._id}>
                      <Link to={`/${text}/${item._id}`}>
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

                          <div className="absolute bottom-4 right-0 px-3  text-[1rem] flex gap-2">
                            {/*  {data
                              .filter((curItem) => curItem.model === item.model)
                              .reverse()
                              .map((color, index) => {
                                if (
                                  data.filter(
                                    (curItem) => curItem.model === item.model
                                  ).length === 1
                                ) {
                                  return "";
                                } else {
                                  return (
                                    <div
                                      key={index}
                                      className={`w-6 h-6 ${
                                        color.color.toLowerCase() !== "black" &&
                                        color.color.toLowerCase() !== "white"
                                          ? "bg-gradient-to-br from-blue-500 to-red-700"
                                          : `bg-${color.color.toLowerCase()}`
                                      } rounded-full border border-slate-200`}
                                    />
                                  );
                                }
                              })} */}
                          </div>
                        </div>
                        <div className="px-4 pb-4 h-[200px] flex flex-col justify-between ">
                          <div>
                            <h2 className="text-[1.125rem] mb-4">
                              {item.name}
                            </h2>
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
            </div>
          );
        })}
      </>
    </section>
  );
};

export default HomePage;
