import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Categories,
  ProductView,
  Newsletter,
  HomePageProductViev,
} from "../components";
import { Product } from "../assets/types/Product";
import axios from "axios";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

type Props = {
  text: string;
};

const StorePage = ({ text }: Props) => {
  const [data, setData] = useState<Product[]>([]);
  const [toggleNewsletter, setToggleNewsletter] = useState(false);
  const uniqueLineArr = ["new", "exclusive "];

  /*   useEffect(() => {
    const timeout = setTimeout(() => {
      setToggleNewsletter(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []); */

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://127.0.0.1:4000/getData`);
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <section className="lg:px-20">
      {toggleNewsletter && (
        <Newsletter
          setToggleNewsletter={setToggleNewsletter}
          toggleNewsletter={toggleNewsletter}
        />
      )}
      <Categories category={text} />
      <div className="mb-6 lg:mb-8 px-6 flex flex-col  lg:flex-row lg:items-center  justify-between">
        <div>
          <h1 className="text-[color:var(--cx-color-primary)] text-[2.5rem] font-semibold uppercase space tracking-tight leading-10 ">
            THE LATEST AND GREATEST GAMING GEAR
          </h1>
          <p className="text-[1.3125rem] leading-none font-semibold my-2">
            RAZER MICE, KEYBOARDS, HEADSETS, LAPTOPS & MORE
          </p>
        </div>
        <button
          className="flex items-center "
          onClick={() => setToggleNewsletter(true)}
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://assets2.razerzone.com/images/pnx.assets/d3c009aecfca0d406f63fe42575891e5/st0003-contact-us-white.svg"
            alt=""
          />
          <p className="hover:underline">Newsletter</p>
          <span className="text-[color:var(--cx-color-primary)] ">{">"}</span>
        </button>
      </div>
      <div>
        <ProductView brand={"FRESH OFF THE LINE"} category={"text"} />
        <div className="container">
          {data
            .filter((item) => item.new)
            .map((item) => (
              <>
                <HomePageProductViev {...item} detail={"exclusive"} />
              </>
            ))}
        </div>
      </div>
      <div className="w-full h-[300px] bg-slate-50 mb-10 relative">
        <img
          className="w-full h-full object-cover"
          src="https://assets2.razerzone.com/images/pnx.assets/d90c20bd9a4df3f52933b15e89306f08/chroma-1920x400_desktop.jpg"
          alt=""
        />
        <div className="absolute left-[45%] bottom-3 w-4 h-4 rounded-full cursor-pointer bg-[color:var(--cx-color-primary)]"></div>
        <div className="absolute left-[50%] bottom-3 w-4 h-4 rounded-full cursor-pointer bg-gray-300"></div>
        <div className="absolute left-[55%] bottom-3 w-4 h-4 rounded-full cursor-pointer bg-gray-300"></div>
        <div className="absolute inset-0 flex justify-between items-center px-6">
          <BsChevronLeft
            className="cursor-pointer w-7 lg:w-9 lg:h-9 h-7"
            fill="#44d62c"
          />
          <BsChevronRight
            className="cursor-pointer w-7 lg:w-9 lg:h-9  h-7"
            fill="#44d62c"
          />
        </div>
      </div>
      <div>
        <div className="px-6 mb-6">
          <h1 className="text-[color:var(--cx-color-primary)] text-[2.5rem] font-semibold uppercase space tracking-tight leading-10 ">
            ONLY AT RAZER.COM
          </h1>
          <p className="text-[1.3125rem] leading-none font-semibold my-2">
            DISCOVER EXCLUSIVE GEAR AND SERVICES FOUND NOWHERE ELSE
          </p>
        </div>

        <ProductView brand={"EXCLUSIVES"} category={"text"} />
        <div className="container">
          {data
            .filter((item) => item.exclusive)
            .map((item) => (
              <>
                <HomePageProductViev {...item} />
              </>
            ))}
        </div>
      </div>
      <div className="w-full h-[300px] bg-slate-50 mb-10 relative">
        <img
          className="w-full h-full object-cover"
          src="https://assets2.razerzone.com/images/pnx.assets/d90c20bd9a4df3f52933b15e89306f08/viper-mini-signature-store-desktop.jpg"
          alt=""
        />
        <div className="absolute left-[48.5%] bottom-3 w-4 h-4 rounded-full cursor-pointer bg-[color:var(--cx-color-primary)]"></div>
        <div className="absolute left-[52.5%] bottom-3 w-4 h-4 rounded-full cursor-pointer bg-gray-300"></div>
        <div className="absolute inset-0 flex justify-between items-center px-6">
          <BsChevronLeft
            className="cursor-pointer w-7 lg:w-9 lg:h-9 h-7"
            fill="#44d62c"
          />
          <BsChevronRight
            className="cursor-pointer w-7 lg:w-9 lg:h-9  h-7"
            fill="#44d62c"
          />
        </div>
      </div>
    </section>
  );
};

export default StorePage;
