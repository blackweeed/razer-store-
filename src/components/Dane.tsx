import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ProductView from "./ProductView";
import { Product } from "../assets/types/Product";
import { Categories } from "./Categories";

export const Dane = ({ text }) => {
  const [data, setData] = useState<Product[]>([]);
  const lineArray = data.map((item) => item.line);
  const uniqueLineArr = [...new Set(lineArray)];
  const currentUrl = window.location.href;
  const lastPart = currentUrl.split("/").pop();
  const category = lastPart.split("-")[1];

  console.log(category);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `http://127.0.0.1:4000/${category === undefined ? "mice" : category}`
      );
      setData(result.data);
    };
    fetchData();
  }, [category]);
  return (
    <section>
      <Categories category={category} />
      <div className="mb-6 px-6">
        <h1 className="text-[color:var(--cx-color-primary)] text-[2.5rem] font-semibold uppercase leading-tight space tracking-tight">
          gaming {text}
        </h1>
        <p className="text-[1.3125rem] leading-none font-semibold">
          HIGH-PERFORMANCE WIRED AND WIRELESS MICE MADE FOR EVERY GAMER'S HAND
        </p>
      </div>
      <>
        {uniqueLineArr.map((line, i) => {
          return (
            <div key={i}>
              <ProductView brand={line} />
              <div className="container">
                {data
                  .filter((test) => test.line === line)
                  .map((item) => (
                    <div key={item._id}>
                      <Link to={`/${category}/${item._id}`}>
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
                            {data
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
                              })}
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
