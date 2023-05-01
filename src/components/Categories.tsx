import { Link } from "react-router-dom";

type Props = {
  category: string | undefined;
};

const Categories = ({ category }: Props) => {
  const categories = [
    {
      image:
        "https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-basilisk-v3-pro_90x150.png",
      text: "Mice",
      link: "gaming-mice",
    },
    {
      image:
        "https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-store-v2_audio_icon_168x150.png",
      text: "Audio",
      link: "gaming-audio",
    },
    {
      image:
        "https://assets2.razerzone.com/images/pnx.assets/f41fa0e9b4d6cb094ecba2b6086d692a/razer-blackwidow-v4-pro_168x150.png",
      text: "Keyboards",
      link: "gaming-keyboards",
    },
  ];

  return (
    <nav className="flex gap-2 justify-around py-10">
      {categories.map((activeCategory) => (
        <Link
          key={activeCategory.text}
          to={`/${activeCategory.link}`}
          className="flex flex-col gap-2 cursor-pointer "
        >
          <div className="w-20 h-20">
            <img
              className="w-full h-full object-contain"
              src={activeCategory.image}
              alt=""
            />
          </div>
          <h3
            className={`text-center ${
              activeCategory.text.toLowerCase() === category &&
              "text-[color:var(--cx-color-primary)]"
            }`}
          >
            {activeCategory.text}
          </h3>
        </Link>
      ))}
    </nav>
  );
};

export default Categories;
