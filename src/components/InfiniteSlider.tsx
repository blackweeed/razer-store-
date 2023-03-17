import slideImages from "../data/slideImages.json";

function InfiniteSlider() {
  return (
    <div>
      <h2>Slider</h2>
      <div className="wrapper">
        {slideImages.map((image) => (
          <img src={image.image} alt="" />
        ))}
      </div>
    </div>
  );
}

export default InfiniteSlider;
