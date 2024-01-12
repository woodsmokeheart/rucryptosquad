import React from "react";
import styles from "./SliderGallery.module.scss";
import { Carousel } from "react-carousel3";
import Image from "next/image";
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

const SliderGallery = () => {
  return (
    <React.Fragment>
      <div className={styles.carousel}>
        <Carousel
          height={560}
          width={1040}
          yOrigin={42}
          yRadius={78}
          autoPlay={true}
        >
          <div key={1} className={styles.image_container}>
            <Image alt="img" src={img5} fill={true} loading="eager" />
          </div>
          <div key={2} className={styles.image_container}>
            <Image alt="img" src={img2} fill={true} loading="eager" />
          </div>
          <div key={3} className={styles.image_container}>
            <Image alt="img" src={img3} fill={true} loading="eager" />
          </div>
          <div key={4} className={styles.image_container}>
            <Image alt="img" src={img4} fill={true} loading="eager" />
          </div>
          <div key={5} className={styles.image_container}>
            <Image alt="img" src={img1} fill={true} loading="eager" />
          </div>
          <div key={6} className={styles.image_container}>
            <Image alt="img" src={img6} fill={true} loading="eager" />
          </div>
          <div key={7} className={styles.image_container}>
            <Image alt="img" src={img7} fill={true} loading="eager" />
          </div>
          <div key={8} className={styles.image_container}>
            <Image alt="img" src={img8} fill={true} loading="eager" />
          </div>
          <div key={9} className={styles.image_container}>
            <Image alt="img" src={img9} fill={true} loading="eager" />
          </div>
          <div key={10} className={styles.image_container}>
            <Image alt="img" src={img10} fill={true} loading="eager" />
          </div>
          <div key={11} className={styles.image_container}>
            <Image alt="img" src={img11} fill={true} loading="eager" />
          </div>
          <div key={12} className={styles.image_container}>
            <Image alt="img" src={img12} fill={true} loading="eager" />
          </div>
          <div key={13} className={styles.image_container}>
            <Image alt="img" src={img13} fill={true} loading="eager" />
          </div>
        </Carousel>
      </div>
    </React.Fragment>
  );
};

export default SliderGallery;
