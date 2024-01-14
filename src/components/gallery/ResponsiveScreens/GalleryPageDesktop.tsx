import React from "react";
import Header from "@/components/Header/Header";
import SliderGallery from "../SliderGallery/SliderGallery";
import background from "../../../assets/img/gallery_background.png";
import Image from "next/image";

const GalleryPageDesktop: React.FC = () => {
  return (
    <div className="d-flex justify-center">
      <title>Gallery</title>
      <Header />
      <SliderGallery />
      <Image src={background} alt="hero" fill={true} loading="eager" />
    </div>
  );
};

export default GalleryPageDesktop;
