import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Categories,
  ProductView,
  Newsletter,
  HomePageProductViev,
  StorePageSlider,
} from "../components";
import { Product } from "../assets/types/Product";
import axios from "axios";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

type Props = {
  text: string;
};

/* type Learn = {
  name: string | number;
};
  
const shape = {
  name: "aga",
} satisfies Learn; */

const StorePage = ({ text }: Props) => {
  const [data, setData] = useState<Product[]>([]);
  const [toggleNewsletter, setToggleNewsletter] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`http://127.0.0.1:4000/getData`);
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <section>
      {toggleNewsletter && (
        <Newsletter
          setToggleNewsletter={setToggleNewsletter}
          toggleNewsletter={toggleNewsletter}
        />
      )}
      <Categories category={text} />
      <div className="mb-6 lg:mb-8 px-6 lg:px-20 flex flex-col  lg:flex-row lg:items-center  justify-between">
        <div>
          <h1 className="text-[color:var(--cx-color-primary)] text-[2.5rem] font-semibold uppercase space tracking-tight leading-10 ">
            THE LATEST AND GREATEST GAMING GEAR
          </h1>
          <p className="text-[1.3125rem] leading-none font-semibold my-2 text-white/70">
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
        <div className="px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row justify-between items-end">
            <div>
              {" "}
              <h2 className="leading-tight text-[1.8rem] font-semibold uppercase">
                fresh off the line
              </h2>
              <p className="text-[1.2rem] leading-tight text-white/70">
                Check out our latest releases to secure the most up-to-date
                upgrades for your setup
              </p>
            </div>
            <Link to={`/all-products`} className="mt-6">
              View All{" "}
              <span className="text-[color:var(--cx-color-primary)]">{`>`}</span>
            </Link>
          </div>
        </div>
        <div className="container lg:px-14">
          {data
            .filter((item) => item.new)
            .map((item) => (
              <>
                <HomePageProductViev {...item} detail={"exclusive"} />
              </>
            ))}
        </div>
      </div>
      <StorePageSlider />
      <div>
        <div className="mb-6 lg:mb-8 px-6 lg:px-20">
          <h1 className=" text-[color:var(--cx-color-primary)] text-[2.5rem] font-semibold uppercase space tracking-tight leading-10 ">
            ONLY AT RAZER.COM
          </h1>
          <p className="text-[1.3125rem] leading-none font-semibold my-2">
            DISCOVER EXCLUSIVE GEAR AND SERVICES FOUND NOWHERE ELSE
          </p>
        </div>
        <div className="px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row justify-between items-end">
            <div>
              {" "}
              <h2 className="leading-tight text-[1.8rem] font-semibold uppercase">
                RAZER EXCLUSIVES
              </h2>
              <p className="text-[1.2rem] leading-tight text-white/70">
                Explore unique products only available at our official online
                store
              </p>
            </div>
            <Link to="/all-products" className="mt-6">
              View All{" "}
              <span className="text-[color:var(--cx-color-primary)]">{`>`}</span>
            </Link>
          </div>
        </div>
        <div className="container lg:px-14">
          {data
            .filter((item) => item.exclusive)
            .map((item) => (
              <>
                <HomePageProductViev {...item} />
              </>
            ))}
        </div>
      </div>
      <StorePageSlider />
      <div>
        <div className="px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row justify-between items-end">
            <div>
              <h2 className="leading-tight text-[1.8rem] font-semibold uppercase">
                RAZER LAST CHANCE
              </h2>
              <p className="text-[1.2rem] leading-tight text-white/70">
                A curated selection of our classic gear—exclusively priced with
                full warranty
              </p>
            </div>
            <Link to="/all-products" className="mt-6">
              View All{" "}
              <span className="text-[color:var(--cx-color-primary)]">{`>`}</span>
            </Link>
          </div>
        </div>
        <div className="container lg:px-14">
          {data
            .filter((item) => item.discount)
            .map((item) => (
              <>
                <HomePageProductViev {...item} />
              </>
            ))}
        </div>
      </div>
    </section>
  );
};

export default StorePage;
