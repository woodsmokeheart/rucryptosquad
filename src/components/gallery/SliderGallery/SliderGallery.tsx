import React, { useRef, ReactElement } from "react";
import styles from "./SliderGallery.module.scss";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swiper.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import img1 from "../../../assets/img/gallery/1.jpg";
import img2 from "../../../assets/img/gallery/2.jpg";
import img3 from "../../../assets/img/gallery/3.jpg";
import img4 from "../../../assets/img/gallery/4.jpg";
import img5 from "../../../assets/img/gallery/5.jpg";
import img6 from "../../../assets/img/gallery/6.jpg";
import img7 from "../../../assets/img/gallery/7.jpg";
import img8 from "../../../assets/img/gallery/8.jpg";
import img9 from "../../../assets/img/gallery/9.jpg";
import img10 from "../../../assets/img/gallery/10.jpg";
import img11 from "../../../assets/img/gallery/11.jpg";
import img12 from "../../../assets/img/gallery/12.jpg";
import img13 from "../../../assets/img/gallery/13.jpg";
import img14 from "../../../assets/img/gallery/14.jpg";

interface SliderGalleryProps {}

interface ImageProps {
  src: StaticImageData;
  alt: string;
}

const SliderGallery: React.FC<SliderGalleryProps> = () => {
  const progressCircle = useRef<SVGSVGElement>(null!);
  const progressContent = useRef<HTMLSpanElement>(null!);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number): void => {
    progressCircle.current.style.setProperty(
      "--progress",
      String(1 - progress)
    );
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const images: ImageProps[] = [
    { src: img1, alt: "Image 1" },
    { src: img2, alt: "Image 2" },
    { src: img3, alt: "Image 3" },
    { src: img4, alt: "Image 4" },
    { src: img5, alt: "Image 5" },
    { src: img6, alt: "Image 6" },
    { src: img7, alt: "Image 7" },
    { src: img8, alt: "Image 8" },
    { src: img9, alt: "Image 9" },
    { src: img10, alt: "Image 10" },
    { src: img11, alt: "Image 11" },
    { src: img12, alt: "Image 12" },
    { src: img13, alt: "Image 13" },
    { src: img14, alt: "Image 14" },
  ];

  return (
    <>
      <div className={styles.carousel}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <Image src={image.src} alt={image.alt} />
            </SwiperSlide>
          ))}
          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </>
  );
};

export default SliderGallery;
