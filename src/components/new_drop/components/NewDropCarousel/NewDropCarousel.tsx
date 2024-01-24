import React, { useRef } from "react";
import styles from "./NewDropCarousel.module.scss";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./swiperdrop.scss";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import img1 from "../../../../assets/img/img_newDrop/1.png";
import img2 from "../../../../assets/img/img_newDrop/2.png";
import img3 from "../../../../assets/img/img_newDrop/25.png";
import img4 from "../../../../assets/img/img_newDrop/26.png";
import img5 from "../../../../assets/img/img_newDrop/27.png";
import img6 from "../../../../assets/img/img_newDrop/28.png";
import img7 from "../../../../assets/img/img_newDrop/29.png";
import img8 from "../../../../assets/img/img_newDrop/3.png";
import img9 from "../../../../assets/img/img_newDrop/30.png";
import img10 from "../../../../assets/img/img_newDrop/4.png";
import img11 from "../../../../assets/img/img_newDrop/5.png";
import img12 from "../../../../assets/img/img_newDrop/6.png";

interface NewDropCarouselProps {}

interface ImageProps {
  src: StaticImageData;
  alt: string;
}

const NewDropCarousel: React.FC<NewDropCarouselProps> = () => {
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
              <Image src={image.src} alt={image.alt}  priority/>
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

export default NewDropCarousel;
