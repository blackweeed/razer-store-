import { generateFormattedDates } from "../utils/functions";

function Delivery() {
  const formattedDates = generateFormattedDates();

  return (
    <div className="flex items-start gap-2">
      <img
        src="https://www.razer.com/assets/images/icons/shipping_icon.svg"
        alt=""
      />
      <div>
        {" "}
        <h3 className="text-[.875rem] lg:text-base  mb-2 lg:mb-3 lg:mt-0.5">
          Order now, delivered by:
        </h3>
        <h3 className="text-[.825rem] text-white/60 lg:text-base  mb-1 lg:mb-1 lg:mt-0.5">
          {formattedDates[0]} - {formattedDates[1]} — US$20.00
        </h3>
        <h3 className="text-[.825rem] text-white/60 lg:text-base  ">
          {formattedDates[2]} - {formattedDates[3]} — US$10.00
        </h3>
      </div>
    </div>
  );
}

export default Delivery;
