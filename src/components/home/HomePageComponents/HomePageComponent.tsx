import React from "react";
import HomePageDesktop from "./HomePageDesktop/HomePageDesktop";
import HomePageMobile from "./HomePageMobile/HomePageMobile";
import useWindowWidth from "@/hooks/useWindowWidth";

const HomePageComponent = () => {
  const { isDesktop } = useWindowWidth();
  return (
    <React.Fragment>
      {isDesktop ? <HomePageDesktop /> : <HomePageMobile />}
    </React.Fragment>
  );
};

export default HomePageComponent;
