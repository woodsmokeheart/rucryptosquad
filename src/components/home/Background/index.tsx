import React from "react";
import Image from "next/image";

import background from "../../../assets/img/home_background.jpg";

interface BackgroundProps {
  src?: JSX.Element;
}

const Background: React.FC<BackgroundProps> = ({ src }) => {
  return <Image src={background} alt="hero" fill={true} />;
};

export default Background;
