import React from "react";
import Image from "next/image";

import background from "../../../assets/img/home.png";

interface BackgroundProps {
  src?: JSX.Element;
}

const Background: React.FC<BackgroundProps> = ({ src }) => {
  return <Image src={background} alt="hero" fill={true} loading="eager" />;
};

export default Background;
