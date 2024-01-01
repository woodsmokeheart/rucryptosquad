import { AboutUsPageDesktop } from "@/components/about/ResponsiveScreens/AboutUsPageDesktop";
import AboutUsPageMobile from "@/components/about/ResponsiveScreens/AboutUsPageMobile";
import useResize from "@/hooks/useResize";
import React from "react";

const AboutUsPageSetting = () => {
  const { isScreenXl } = useResize();
  return isScreenXl ? <AboutUsPageDesktop /> : <AboutUsPageMobile />;
};

export default AboutUsPageSetting;
