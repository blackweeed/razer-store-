const border = "border-b border-[#555] w-full text-left py-2";

type Props = {
  toggle: boolean;
};

function Cart({ toggle }: Props) {
  return (
    <div
      className={`${
        toggle ? "absolute" : "hidden"
      } top-8 -right-2 w-[200px] h-fit bg-[#222] border-2 border-[#555] flex flex-col items-center px-4 rounded-lg text-[0.875rem]`}
    >
      <span className={`${border} text-center text-[#888] py-4`}>
        Your Cart is empty.
      </span>
      <span className={`${border}`}>Cart</span>
      <span className={`${border}`}>Orders</span>
      <span className={`${border} `}>Account</span>
      <span className={`${border} border-none`}>Log In</span>
    </div>
  );
}

export default Cart;
