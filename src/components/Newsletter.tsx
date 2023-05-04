import { useEffect } from "react";

type Props = {
  toggleNewsletter: boolean;
  setToggleNewsletter: (isOpen: boolean) => void;
};

function Newsletter({ toggleNewsletter, setToggleNewsletter }: Props) {
  useEffect(() => {
    if (toggleNewsletter) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [toggleNewsletter]);

  return (
    <div className="fixed inset-0 bg-[#2229]  w-full h-screen z-[999] flex items-center justify-center menu-open">
      <form className="flex flex-col items-center justify-center px-4 gap-6 w-[60rem] h-[35rem] bg-white text-black relative bg-[url('https://www.razer.com/assets/images/razer-newsletter/razer-newsletter-bg-mobile.jpg')] bg-top  lg:bg-[url('https://www.razer.com/assets/images/razer-newsletter/razer-newsletter-bg.jpg')]  bg-cover text-center m-5">
        <button
          onClick={() => setToggleNewsletter(false)}
          className="absolute right-0 top-0 bg-black w-12 h-12 text-white text-xl flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.9}
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <h2 className="text-3xl lg:text-5xl font-bold max-w-[500px]">
          Here’s €10 Off* to Get You Started
        </h2>
        <h3 className="text-md lg:text-lg font-medium">
          Sign up for the Razer newsletter and enjoy €10 off your purchase.
        </h3>
        <input
          type="email"
          placeholder="Enter your email address"
          className="w-[75%] lg:w-[35%] py-3 px-2 rounded-sm"
        />
        <button className="uppercase font-medium text-white text-md bg-black  px-6 lg:px-8 py-2 lg:py-3 rounded-sm">
          Sign up now
        </button>
        <p className="text-xs lg:text-sm mt-6">
          *Offer is valid with a minimum purchase of €99.
        </p>
      </form>
    </div>
  );
}

export default Newsletter;
