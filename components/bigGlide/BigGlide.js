import { useEffect } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";

const images = [
  "https://res.cloudinary.com/taldahan/image/upload/v1657644515/Untitled_Artwork_31_ktgecu.png",
  "https://res.cloudinary.com/taldahan/image/upload/v1657532017/26137ede-f8be-4db5-ad23-02ed4359a347_rw_1920_ql2kak.jpg",
  "https://res.cloudinary.com/taldahan/image/upload/v1657531903/1657357359810_g2w8j2.jpg",
  "https://res.cloudinary.com/taldahan/image/upload/v1657531903/1657009520474_mvpqmr.jpg",
  "https://res.cloudinary.com/taldahan/image/upload/v1657644473/Untitled_Artwork_10_wb90cc.png",
  "https://res.cloudinary.com/taldahan/image/upload/v1657531903/1657176139904_qom7qq.jpg",
  "https://res.cloudinary.com/taldahan/image/upload/v1657654162/Untitled_Artwork_4_sshrjt.png",
  "https://res.cloudinary.com/taldahan/image/upload/v1657654178/Untitled_Artwork_11_ezsyui.png",
  "https://res.cloudinary.com/taldahan/image/upload/v1657644511/Untitled_Artwork_28_d4zobe.png",
];
export default function BigGlide() {
  useEffect(() => {
    const imgSlider = () => {
      const glide = new Glide(".glide", {
        // type: "carousel",
        autoplay: 2000,
        gap: 10,

      }).mount();
      glide.play();
    };
    imgSlider();
  }, []);

  return (
    <div>
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {images.map((src) => (
              <li key={src} className="glide__slide">
                {<Image src={src} alt={src} width={900} height={700} />}
              </li>
            ))}
          </ul>
        </div>
        {/* <Arrows> */}
        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            prev
          </button>
          <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            next
          </button>
        </div>
        {/* </Arrows> */}
      </div>
    </div>
  );
}
