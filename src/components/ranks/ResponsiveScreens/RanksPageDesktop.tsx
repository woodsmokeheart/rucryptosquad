import Header from "@/components/Header/Header";
import React from "react";
import Image from "next/image";
import background from "../../../assets/img/ranks_background.png";
import RanksContent from "../RanksContent/RanksContent";

const RanksPageDesktop = () => {
  return (
    <div className="d-flex justify-center align-center">
      <Header />
      <RanksContent />
      <Image
        src={background}
        alt="hero"
        fill={true}
        priority
        placeholder="blur"
      />
    </div>
  );
};

export default RanksPageDesktop;
