import { useEffect } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";

const images = [
  "https://res.cloudinary.com/taldahan/image/upload/v1657785373/Untitled_Artwork_16_iv8rpy.png",
  "https://res.cloudinary.com/taldahan/image/upload/v1657781999/s7blpxc43vqt7oew3wkt.png",
  "https://res.cloudinary.com/taldahan/image/upload/v1657785408/Untitled_Artwork_26_p6q44o.png",
];

export default function GlideComponent({ id }) {
  useEffect(() => {
    const glide = new Glide(`.glide${id}`, {
      perView: 3,
    });

    glide.mount();
  }, [id]);

  return (
    <div>
      <div className={`glide${id}`}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {images.map((src) => (
              <li key={src} className="glide__slide">
                {<Image src={src} alt={src} width={250} height={250} />}
              </li>
            ))}
          </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button className="arrowLeft" data-glide-dir="<">
            prev
          </button>
          <button className="arrowright" data-glide-dir=">">
            next
          </button>
        </div>
      </div>
    </div>
  );
}
