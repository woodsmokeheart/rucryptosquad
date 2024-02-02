import React from "react";
import Image from "next/image";
import background from "../../../assets/img/lore_background.png";
import ContentLayout from "../components/ContentLayout/ContentLayout";

const LorePageDesktop = () => {
  return (
    <div className="d-flex justify-center">
      <ContentLayout />
      <Image src={background} alt="hero" fill={true} priority />
    </div>
  );
};

export default LorePageDesktop;
