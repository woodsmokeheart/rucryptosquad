import React from "react";
import HomePageDesktop from "@/components/home/ResponsiveScreens/HomePageDesktop";
import HomePageMobile from "@/components/home/ResponsiveScreens/HomePageMobile";
import useResize from "@/hooks/useResize";

const HomePageSetting = () => {
  const { isScreenXl } = useResize();
  return isScreenXl ? <HomePageDesktop /> : <HomePageMobile />;
};

export default HomePageSetting;
