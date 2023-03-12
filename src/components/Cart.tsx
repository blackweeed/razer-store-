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
        className={`${border} flex items-center gap-5 cursor-pointer hover:text-[#44D62C] test:hover group`}
      >
        {" "}
        <p className="elo before:bg-[url('../assets/cart_icon.svg')] before:group-hover:bg-[url('../assets/cart_icon-hover.svg')]">
          Cart
        </p>
      </span>
      <span
        className={`${border} flex items-center gap-5 cursor-pointer hover:text-[#44D62C] group`}
      >
        {" "}
        <p className="elo elo1 before:bg-[url('../assets/orders_icon.svg')] before:group-hover:bg-[url('../assets/orders_icon_hover.svg')] ">
          Orders
        </p>
      </span>
      <span
        className={`${border} flex items-center gap-5 cursor-pointer hover:text-[#44D62C] group`}
      >
        {" "}
        <p className="elo elo1 before:bg-[url('../assets/account_icon.svg')] before:group-hover:bg-[url('../assets/account_icon-hover.svg')]">
          Account
        </p>
      </span>
      <span
        className={`${border} flex items-center gap-5 cursor-pointer hover:text-[#44D62C] group`}
      >
        {" "}
        <p className="elo elo1 before:bg-[url('../assets/RazerStore_Rewards_icon.svg')] before:group-hover:bg-[url('../assets/RazerStore_Rewards_icon_hover.svg')]">
          RazerStore Rewards
        </p>
      </span>
      <span
        className={`${border} flex items-center gap-5 cursor-pointer hover:text-[#44D62C] group`}
      >
        {" "}
        <p className="elo elo1 before:bg-[url('../assets/signin_icon.svg')] before:group-hover:bg-[url('../assets/signin_icon_hover.svg')]">
          Log In
        </p>
      </span>
    </div>
  );
}

export default Cart;
