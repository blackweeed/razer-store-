import { useEffect, useState } from "react";
import { Categories, ProductView, Newsletter } from "../components";
import { Product } from "../assets/types/Product";
import axios from "axios";
import HomePageProductViev from "../components/HomePageProductViev";
import { categoryDescription } from "../constants";

type HomePageProps = {
  text: string;
};

const HomePage = ({ text }: HomePageProps) => {
  const [data, setData] = useState<Product[]>([]);
  const [toggleNewsletter, setToggleNewsletter] = useState(false);
  const lineArray = data.map((item) => item.line);
  const uniqueLineArr = [...new Set(lineArray)];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setToggleNewsletter(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${import.meta.env.VITE_API_URL}/${text}`);
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
        <p className="text-[1.3125rem] leading-none font-semibold text-white/70">
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
                    <HomePageProductViev {...item} />
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
