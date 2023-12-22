import React from "react";
import Image from "next/image";

import background from "../../../assets/img/home_background.jpg";

interface BackgroundProps {
  src?: JSX.Element;
  onClick?: () => void;
}

const Background: React.FC<BackgroundProps> = ({ src, onClick }) => {
  return (
    <Image
      src={background}
      alt="hero"
      fill={true}
      onClick={onClick}
      loading="eager"
    />
  );
};

export default Background;
