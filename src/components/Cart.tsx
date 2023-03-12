const border = "border-b border-[#555] w-full text-left py-2.5 ";
import cart from "../assets/cart_icon.svg";
import cartHover from "../assets/cart_icon-hover.svg";
import { useState } from "react";

type Props = {
  toggle: boolean;
};

function Cart({ toggle }: Props) {
  return (
    <div
      className={`${
        toggle ? "absolute" : "hidden"
      } top-8 -right-2 w-[280px] h-fit bg-[#222] border-2 border-[#555] flex flex-col items-center px-4 rounded-lg text-[0.875rem] z-20`}
    >
      <span className={`${border} text-center text-[#888] py-4`}>
        Your Cart is empty.
      </span>
      <span
        className={`${border} flex items-center gap-5 cursor-pointer hover:text-[#44D62C] test`}
      >
        {" "}
        <p className="elo">Cart</p>
      </span>
      <span className={`${border} flex items-center gap-[calc(1rem+8px)] `}>
        {" "}
        <img
          className="w-[18px] h-[18px] ml-1"
          src="https://www.razer.com/assets/images/icons/orders_icon.svg"
          alt=""
        />{" "}
        Orders
      </span>
      <span className={`${border} flex items-center gap-[calc(1rem+8px)] `}>
        <img
          className="w-[18px] h-[18px] ml-1"
          src="https://www.razer.com/assets/images/icons/account-icon.svg"
          alt=""
        />{" "}
        Account
      </span>
      <span className={`${border} flex items-center gap-[calc(1rem+8px)] `}>
        <img
          className="w-[18px] h-[18px] ml-1"
          src="https://www.razer.com/assets/images/icons/RazerStore_Rewards_outlined_icon.svg"
          alt=""
        />{" "}
        RazerStore Rewards
      </span>
      <span
        className={`${border} border-none flex items-center gap-[calc(1rem+8px)] `}
      >
        <img
          className="w-[18px] h-[18px] ml-1"
          src="https://www.razer.com/assets/images/icons/signin_icon.svg"
          alt=""
        />{" "}
        Log In
      </span>
    </div>
  );
}

export default Cart;
