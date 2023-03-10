import Carousel from "./Carousel";

const slides = [
  "https://i.ibb.co/ncrXc2V/1.png",
  "https://i.ibb.co/B3s7v4h/2.png",
  "https://i.ibb.co/XXR8kzF/3.png",
  "https://i.ibb.co/yg7BSdM/4.png",
];

function Slider() {
  return (
    <div className="max-w-[34rem]  my-[100px] ">
      <div className="max-w-lg px-4">
        <Carousel>
          {slides.map((s) => (
            <img src={s} alt="" />
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Slider;
