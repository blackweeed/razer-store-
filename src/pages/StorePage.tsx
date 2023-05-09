import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Categories,
  Newsletter,
  HomePageProductViev,
  StorePageSlider,
} from "../components";
import { Product } from "../assets/types/Product";
import axios from "axios";

type Props = {
  text: string;
};

/* type Learn = {
  name: string | number;
};
  
const shape = {
  name: "aga",
} satisfies Learn; */

const images = [
  {
    image:
      "https://assets2.razerzone.com/images/pnx.assets/d90c20bd9a4df3f52933b15e89306f08/chroma-1920x400_desktop.jpg",
    header: "viva la chroma",
    paragraph: "Light It Up With Exclusive Offer",
    button: "Shop now",
  },
  {
    image:
      "https://assets2.razerzone.com/images/pnx.assets/d90c20bd9a4df3f52933b15e89306f08/1920x400-(12).jpg",
    header: "LIGHT UP YOUr deskop",
    paragraph: "RAZERSTORE REWARDS GIVEAWAY",
    button: "Join now",
  },
  {
    image:
      "https://assets2.razerzone.com/images/pnx.assets/cc58ab7cef605b2c53a7f5d0c61c2eff/esportsevergreen-catbnr-desktop-400px.jpg",
    header: "GEAR UP FOR GLORY",
    paragraph: "Esports Showdown Specials",
    button: "Shop Exclusive Deals",
  },
];
const images2 = [
  {
    image:
      "https://assets2.razerzone.com/images/pnx.assets/d90c20bd9a4df3f52933b15e89306f08/viper-mini-signature-store-desktop.jpg",
    header: "RAZER VIPER MINI SIGNATURE EDITION",
    paragraph: "The best lightweight performance gaming mouse",
    button: "Learn more",
  },
  {
    image:
      "https://assets2.razerzone.com/images/pnx.assets/3ab06c5a17df1ec96d6616f360e65e43/razer-refurbished-laptops_desktop_1920x400.jpg",
    header: "Razer Certified Refurbished Products",
    paragraph:
      "Reborn and battle-ready, our restored products are indistinguishable from their brand-new counterparts and come outfitted with special savings that are second to none.",
    button: "Shop All Refurbished Products",
  },
  {
    image:
      "https://assets2.razerzone.com/images/pnx.assets/8e59bf4756003c288c33ed287d3371bc/1920x400-(3).jpg",
    header: "Razer laptop skins",
    paragraph:
      "Crafted with customized 3M cast vinyl for extreme durability and fused with cutting-edge adhesive technologies for an ultra-precise fit, our skins are decked out in an array of striking designs to express your personal style.",
    button: "Choose your style",
  },
];

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
      <div className="mb-6 lg:mb-8 px-6 lg:px-[7%] flex flex-col  lg:flex-row lg:items-center  justify-between">
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
        <div className="px-6 lg:px-[7%]">
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
        <div className="container lg:px-20">
          {data
            .filter((item) => item.new)
            .map((item) => (
              <HomePageProductViev {...item} detail={"exclusive"} />
            ))}
        </div>
      </div>
      <StorePageSlider images={images} />
      <div>
        <div className="mb-6 lg:mb-8 px-6 lg:px-[7%]">
          <h1 className=" text-[color:var(--cx-color-primary)] text-[2.5rem] font-semibold uppercase space tracking-tight leading-10 ">
            ONLY AT RAZER.COM
          </h1>
          <p className="text-[1.3125rem] leading-none font-semibold my-2">
            DISCOVER EXCLUSIVE GEAR AND SERVICES FOUND NOWHERE ELSE
          </p>
        </div>
        <div className="px-6 lg:px-[7%]">
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
        <div className="container lg:px-20">
          {data
            .filter((item) => item.exclusive)
            .map((item) => (
              <>
                <HomePageProductViev {...item} />
              </>
            ))}
        </div>
      </div>
      <StorePageSlider images={images2} />
      <div>
        <div className="px-6 lg:px-[7%]">
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
        <div className="container lg:px-20">
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
