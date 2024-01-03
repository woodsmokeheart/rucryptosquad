import React from "react";
import Deck from "../Deck/Deck";
import Image from "next/image";
import background from "../../../assets/img/team_background.png";

const TeamPageDesktop = () => {
  return (
    <>
      <Deck />
      <Image src={background} alt="hero" fill={true} loading="eager" />
    </>
  );
};

export default TeamPageDesktop;
