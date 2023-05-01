import { useNavigate } from "react-router-dom";
import style from "../assets/style";

type Props = {
  itemName: string;
  setPopup: (isOpen: boolean) => void;
};

function Popup({ setPopup, itemName }: Props) {
  const navigate = useNavigate();

  return (
    <div
      className="fixed w-full h-screen inset-0 bg-black/70 flex justify-center items-center text-center"
      onClick={() => setPopup(false)}
    >
      <div>
        <div className="bg-black px-5 py-4 rounded-lg ">
          U added a <b>{itemName}</b>
        </div>
        <br />
        <button
          className={`${style.button} `}
          onClick={() => navigate("/cart")}
        >
          Go to cart
        </button>
      </div>
    </div>
  );
}

export default Popup;
