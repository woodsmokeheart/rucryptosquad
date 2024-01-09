import React from "react";
import Image from "next/image";
import background from "../../../assets/img/team_background.png";
import Header from "@/components/Header/Header";
import ScrollCards from "@/components/gallery/ScrollCards/ScrollCards";

const TeamPageDesktop = () => {
  return (
    <>
      <Header />
      <ScrollCards />
      <Image src={background} alt="hero" fill={true} loading="eager" />
    </>
  );
};

export default TeamPageDesktop;
