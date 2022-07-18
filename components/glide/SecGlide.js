import { useEffect } from "react";
import Glide from "@glidejs/glide";
import Image from "next/image";

const images = [
  "https://res.cloudinary.com/taldahan/image/upload/v1657786377/e138cbaf-66d5-4b6c-a499-1d21e6ed401f_rw_1920_q9dsja.jpg",
  "https://res.cloudinary.com/taldahan/image/upload/v1657786366/10aeb81b-79d4-4041-9b70-f14ff42cc0c1_rw_1920_jsml99.jpg",
  "https://res.cloudinary.com/taldahan/image/upload/v1657786366/1bb90fa7-cde7-460c-a7c3-ce1493f749d9_rw_1920_ziaio3.jpg",
  "https://res.cloudinary.com/taldahan/image/upload/v1657786350/c46d660f-5285-4758-a4ac-662f79b24f5d_rw_1920_i5o0kn.jpg",
  "https://res.cloudinary.com/taldahan/image/upload/v1657786350/aac3c38e-f2b5-474b-85bf-58a6142d4c41_rw_1920_uktdit.jpg",
];

export default function SecGlide({ id }) {
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