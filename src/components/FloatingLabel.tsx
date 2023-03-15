import { KeyboardEventHandler } from "react";

type Props = {
  text: string;
  type: string;
  handleChange: KeyboardEventHandler;
};

function FloatingLabel({ text, type, handleChange }: Props) {
  return (
    <div className="relative">
      <input
        autoComplete="off"
        onKeyDown={handleChange}
        type={type}
        id={text}
        className="block px-2.5 pb-2.5 pt-4 w-full text-lg text-white bg-transparent rounded-sm border border-[#888] appearance-none focus:outline-none focus:ring-0 focus:border-[color:var(--cx-color-primary)] peer"
        placeholder=" "
      />
      <label
        htmlFor={text}
        className="absolute text-sm text-[#888]  duration-200 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-black  px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1 uppercase"
      >
        {text}
      </label>
    </div>
  );
}

export default FloatingLabel;
